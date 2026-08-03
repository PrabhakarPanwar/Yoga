const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const dotenv = require("dotenv");
const path = require("path");

dotenv.config({ path: path.join(__dirname, "../.env") });

const User = require("../models/User");

const MONGO_URI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/shubhyogshala";
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || "chauhanji84331@gmail.com";
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "Nitin123";

const seedAdmin = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("Connected to MongoDB for seeding...");

    const cleanEmail = ADMIN_EMAIL.trim().toLowerCase();
    const cleanPassword = ADMIN_PASSWORD.trim();
    const hashedPassword = await bcrypt.hash(cleanPassword, 10);

    const updatedUser = await User.findOneAndUpdate(
      { email: cleanEmail },
      {
        name: "Admin",
        email: cleanEmail,
        password: hashedPassword,
        role: "admin",
        isVerified: true, // Admin bypasses OTP verification entirely
      },
      { upsert: true, new: true }
    );

    console.log("-----------------------------------------");
    console.log("✅ ADMIN USER SUCCESSFULLY CREATED / RESET!");
    console.log(`📧 Email:    ${updatedUser.email}`);
    console.log(`🔑 Password: ${cleanPassword}`);
    console.log(`🛡️ Role:     ${updatedUser.role}`);
    console.log("-----------------------------------------");

    mongoose.disconnect();
    process.exit(0);
  } catch (err) {
    console.error("❌ Error seeding admin user:", err);
    process.exit(1);
  }
};

seedAdmin();