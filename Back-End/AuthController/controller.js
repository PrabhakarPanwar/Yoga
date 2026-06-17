import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import yogaUser from "../models/yogaSchema.js";
import { JWT_SECRET, JWT_EXPIRES, ADMIN_EMAIL } from "../config.js";

export const register = async (req, res) => {
  try {
    const { email, name, pwd } = req.body;

    const existing = await yogaUser.findOne({ email: email.toLowerCase() });
    if (existing) {
      return res.json({ success: false, msg: "Email already registered." });
    }

    const hash = await bcrypt.hash(pwd, 10);
    const role = email.toLowerCase() === ADMIN_EMAIL.toLowerCase() ? "admin" : "user";

    await yogaUser.create({ name, email: email.toLowerCase(), pwd: hash, role });
    res.json({ success: true, msg: "Registered successfully." });

  } catch (err) {
    res.json({ success: false, msg: "Registration failed." });
  }
};

export const login = async (req, res) => {
  try {
    const { email, pwd } = req.body;

    const user = await yogaUser.findOne({ email: email.toLowerCase() });
    if (!user) return res.json({ success: false, msg: "User not found." });

    const isMatch = await bcrypt.compare(pwd, user.pwd);
    if (!isMatch) return res.json({ success: false, msg: "Invalid password." });

    user.lastLogin = new Date();
    await user.save();

    const token = jwt.sign(
      { user: { id: user._id, name: user.name, email: user.email, role: user.role } },
      JWT_SECRET,
      { expiresIn: JWT_EXPIRES }
    );

    res.json({ success: true, msg: "Logged in.", token, role: user.role, name: user.name });

  } catch (err) {
    res.json({ success: false, msg: "Login failed." });
  }
};