const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const JWT_SECRET = process.env.JWT_SECRET || "your_secret_key";

// --- MIDDLEWARE FOR ADMIN PROTECTION ---
const verifyAdmin = async (req, res, next) => {
  const token = req.headers.token;
  if (!token) return res.status(401).json({ success: false, msg: "No token provided." });

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    if (decoded.role !== "admin") {
      return res.status(403).json({ success: false, msg: "Access denied. Admin only." });
    }
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ success: false, msg: "Invalid token." });
  }
};

// 1. REGISTER NEW USER (Public)
router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ success: false, msg: "Email and password are required." });
    }

    const cleanEmail = email.trim().toLowerCase();
    const cleanPassword = password.trim();

    const existingUser = await User.findOne({ email: cleanEmail });
    if (existingUser) {
      return res.status(400).json({ success: false, msg: "Email is already registered." });
    }

    const hashedPassword = await bcrypt.hash(cleanPassword, 10);

    const newUser = new User({
      name: name ? name.trim() : cleanEmail.split("@")[0],
      email: cleanEmail,
      password: hashedPassword,
      role: "user",
    });

    await newUser.save();
    res.status(201).json({ success: true, msg: "Account created successfully!" });
  } catch (err) {
    console.error("Register Error:", err);
    res.status(500).json({ success: false, msg: "Server error during registration." });
  }
});

// 2. LOGIN (Public)
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // 🔍 DEBUG LOG 1
    console.log("--- LOGIN ATTEMPT ---");
    console.log("1. Incoming req.body:", req.body);

    if (!email || !password) {
      return res.status(400).json({ success: false, msg: "Please fill all fields." });
    }

    const cleanEmail = email.trim().toLowerCase();
    const cleanPassword = password.trim();

    // Explicitly fetch password field even if schema has select: false
    const user = await User.findOne({ email: cleanEmail }).select("+password");

    // 🔍 DEBUG LOG 2
    console.log("2. Found user in DB:", user ? user.email : "USER NOT FOUND");

    if (!user) {
      console.log("-> FAIL REASON: User email not found in database.");
      return res.status(400).json({ success: false, msg: "Invalid email or password." });
    }

    // 🔍 DEBUG LOG 3
    console.log("3. Stored DB Password:", user.password);
    console.log("4. Provided Password:", cleanPassword);

    const isMatch = await bcrypt.compare(cleanPassword, user.password);

    // 🔍 DEBUG LOG 4
    console.log("5. Bcrypt match result:", isMatch);

    if (!isMatch) {
      console.log("-> FAIL REASON: Bcrypt password comparison failed.");
      return res.status(400).json({ success: false, msg: "Invalid email or password." });
    }

    // Sign JWT token
    const token = jwt.sign({ id: user._id, role: user.role }, JWT_SECRET, {
      expiresIn: "7d",
    });

    console.log("-> SUCCESS: Login successful for", user.email);

    res.json({
      success: true,
      token,
      role: user.role,
      user: { id: user._id, name: user.name, email: user.email },
    });
  } catch (err) {
    console.error("Login Error:", err);
    res.status(500).json({ success: false, msg: "Server error during login." });
  }
});

// 3. ADMIN: GET ALL REGISTERED USERS
router.get("/admin/users", verifyAdmin, async (req, res) => {
  try {
    const users = await User.find({}, "-password").sort({ createdAt: -1 });
    res.json({ success: true, users });
  } catch (err) {
    res.status(500).json({ success: false, msg: "Failed to fetch users." });
  }
});

// 4. ADMIN: RESET USER PASSWORD DIRECTLY
router.patch("/admin/reset-user-password", verifyAdmin, async (req, res) => {
  try {
    const { userId, newPassword } = req.body;

    if (!userId || !newPassword) {
      return res.status(400).json({ success: false, msg: "User ID and new password are required." });
    }

    const hashedPassword = await bcrypt.hash(newPassword.trim(), 10);

    await User.findByIdAndUpdate(userId, { password: hashedPassword });
    res.json({ success: true, msg: "User password updated successfully." });
  } catch (err) {
    res.status(500).json({ success: false, msg: "Failed to reset password." });
  }
});

module.exports = router;