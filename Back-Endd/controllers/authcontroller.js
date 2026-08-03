const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const crypto = require('crypto');
const User = require('../models/User');
const { sendOTPEmail } = require('../services/emailService');

const generateToken = (user) => {
  return jwt.sign(
    { id: user._id, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRE || '7d' }
  );
};

const generateOTP = () => crypto.randomInt(100000, 999999).toString();

// @route  POST /auth/register
// @access Public
exports.register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ msg: 'Name, email and password are required.' });
    }
    if (password.length < 6) {
      return res.status(400).json({ msg: 'Password must be at least 6 characters.' });
    }

    const cleanEmail = email.trim().toLowerCase();
    const existingUser = await User.findOne({ email: cleanEmail });

    if (existingUser) {
      if (existingUser.isVerified) {
        return res.status(409).json({ msg: 'An account with this email already exists.' });
      }
      // Unverified account already exists — refresh it with a new OTP
      const hashedPassword = await bcrypt.hash(password, 10);
      const otp = generateOTP();
      existingUser.name = name.trim();
      existingUser.password = hashedPassword;
      existingUser.otpCode = otp;
      existingUser.otpExpires = Date.now() + 10 * 60 * 1000;
      await existingUser.save();
      await sendOTPEmail(cleanEmail, otp);
      return res.status(200).json({ msg: 'OTP re-sent to your email. Please verify to complete registration.', email: cleanEmail });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const otp = generateOTP();

    // SECURITY: role always forced to "user". Admins only come from seedAdmin.js.
    const newUser = await User.create({
      name: name.trim(),
      email: cleanEmail,
      password: hashedPassword,
      role: 'user',
      isVerified: false,
      otpCode: otp,
      otpExpires: Date.now() + 10 * 60 * 1000,
    });

    await sendOTPEmail(cleanEmail, otp);

    return res.status(201).json({
      msg: 'OTP sent to your email. Please verify to complete registration.',
      email: newUser.email,
    });
  } catch (error) {
    console.error('Register error:', error);
    return res.status(500).json({ msg: 'Something went wrong. Please try again.' });
  }
};

// @route  POST /auth/verify-otp
// @access Public
exports.verifyOtp = async (req, res) => {
  try {
    const { email, otp } = req.body;
    if (!email || !otp) return res.status(400).json({ msg: 'Email and OTP are required.' });

    const cleanEmail = email.trim().toLowerCase();
    const user = await User.findOne({ email: cleanEmail });

    if (!user) return res.status(404).json({ msg: 'No account found with this email.' });
    if (user.isVerified) return res.status(400).json({ msg: 'This account is already verified. Please log in.' });
    if (!user.otpCode || !user.otpExpires || user.otpExpires < Date.now()) {
      return res.status(400).json({ msg: 'OTP has expired. Please request a new one.' });
    }
    if (user.otpCode !== otp) return res.status(400).json({ msg: 'Incorrect OTP.' });

    user.isVerified = true;
    user.otpCode = null;
    user.otpExpires = null;
    await user.save();

    const token = generateToken(user);

    return res.status(200).json({
      msg: 'Email verified successfully! You are now logged in.',
      token,
      role: user.role,
      user: { id: user._id, name: user.name, email: user.email },
    });
  } catch (error) {
    console.error('Verify OTP error:', error);
    return res.status(500).json({ msg: 'Something went wrong. Please try again.' });
  }
};

// @route  POST /auth/resend-otp
// @access Public
exports.resendOtp = async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) return res.status(400).json({ msg: 'Email is required.' });

    const cleanEmail = email.trim().toLowerCase();
    const user = await User.findOne({ email: cleanEmail });

    if (!user) return res.status(404).json({ msg: 'No account found with this email.' });
    if (user.isVerified) return res.status(400).json({ msg: 'This account is already verified. Please log in.' });

    const otp = generateOTP();
    user.otpCode = otp;
    user.otpExpires = Date.now() + 10 * 60 * 1000;
    await user.save();
    await sendOTPEmail(cleanEmail, otp);

    return res.status(200).json({ msg: 'A new OTP has been sent to your email.' });
  } catch (error) {
    console.error('Resend OTP error:', error);
    return res.status(500).json({ msg: 'Something went wrong. Please try again.' });
  }
};

// @route  POST /auth/login
// @access Public
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).json({ msg: 'Email and password are required.' });

    const cleanEmail = email.trim().toLowerCase();
    const user = await User.findOne({ email: cleanEmail }).select('+password');

    if (!user) return res.status(401).json({ msg: 'Invalid email or password.' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ msg: 'Invalid email or password.' });

    if (!user.isVerified) {
      return res.status(403).json({
        msg: 'Please verify your email before logging in.',
        needsVerification: true,
        email: user.email,
      });
    }

    const token = generateToken(user);

    return res.status(200).json({
      msg: 'Logged in successfully!',
      token,
      role: user.role,
      user: { id: user._id, name: user.name, email: user.email },
    });
  } catch (error) {
    console.error('Login error:', error);
    return res.status(500).json({ msg: 'Something went wrong. Please try again.' });
  }
};
// @route  PATCH /auth/admin/reset-user-password
// @access Private/Admin
exports.resetUserPassword = async (req, res) => {
  try {
    const { userId, newPassword } = req.body;
    if (!userId || !newPassword) {
      return res.status(400).json({ success: false, msg: 'User ID and new password are required.' });
    }
    if (newPassword.length < 6) {
      return res.status(400).json({ success: false, msg: 'Password must be at least 6 characters.' });
    }

    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ success: false, msg: 'User not found.' });

    user.password = await bcrypt.hash(newPassword, 10);
    await user.save();

    res.json({ success: true, msg: `Password reset successfully for ${user.email}.` });
  } catch (error) {
    console.error('Reset user password error:', error);
    res.status(500).json({ success: false, msg: 'Something went wrong.' });
  }
};