const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const { sendOTPEmail, sendResetPasswordEmail } = require('../services/emailService');

// Helper to generate JWT
const generateToken = (id, role) => {
  return jwt.sign({ id, role }, process.env.JWT_SECRET, { expiresIn: '7d' });
};

// 1. LOGIN
// Inside controllers/authController.js

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log("--> Login attempt for:", email);

    const user = await User.findOne({ email });
    if (!user) {
      console.log("--> User NOT found!");
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    console.log("--> User found! Hashed stored password:", user.password);

    const isMatch = await bcrypt.compare(password, user.password);
    console.log("--> Password match:", isMatch);

    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Rest of your login code...

    const token = generateToken(user._id, user.role);

    res.json({
      message: 'Login successful',
      token,
      user: { id: user._id, name: user.name, email: user.email, role: user.role }
    });
  } catch (error) {
    console.error("Login Error:", error);
    res.status(500).json({ message: error.message });
  }
};

// 2. REQUEST OTP
exports.requestOTP = async (req, res) => {
  try {
    const { email } = req.body;
    let user = await User.findOne({ email });

    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const otpExpires = Date.now() + 10 * 60 * 1000;

    if (!user) {
      user = new User({ email, otpCode: otp, otpExpires });
    } else {
      user.otpCode = otp;
      user.otpExpires = otpExpires;
    }

    await user.save();
    await sendOTPEmail(email, otp);

    res.json({ message: 'OTP sent to your email successfully.' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 3. VERIFY OTP
exports.verifyOTP = async (req, res) => {
  try {
    const { email, otp } = req.body;
    const user = await User.findOne({ email });

    if (!user || user.otpCode !== otp || user.otpExpires < Date.now()) {
      return res.status(400).json({ message: 'Invalid or expired OTP' });
    }

    user.isVerified = true;
    user.otpCode = null;
    user.otpExpires = null;
    await user.save();

    const token = generateToken(user._id, user.role);
    res.json({ message: 'Email verified successfully!', token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 4. FORGOT PASSWORD
exports.forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });

    if (!user) return res.status(404).json({ message: 'No user found with this email' });

    const resetToken = crypto.randomBytes(32).toString('hex');

    user.resetPasswordToken = crypto.createHash('sha256').update(resetToken).digest('hex');
    user.resetPasswordExpires = Date.now() + 15 * 60 * 1000;

    await user.save();
    await sendResetPasswordEmail(email, resetToken);

    res.json({ message: 'Password reset link sent to your email.' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 5. RESET PASSWORD
exports.resetPassword = async (req, res) => {
  try {
    const { token, newPassword } = req.body;

    const hashedToken = crypto.createHash('sha256').update(token).digest('hex');

    const user = await User.findOne({
      resetPasswordToken: hashedToken,
      resetPasswordExpires: { $gt: Date.now() },
    });

    if (!user) return res.status(400).json({ message: 'Invalid or expired reset token' });

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(newPassword, salt);
    user.resetPasswordToken = null;
    user.resetPasswordExpires = null;

    await user.save();
    res.json({ message: 'Password reset successful!' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};