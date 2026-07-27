const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const { sendOTPEmail, sendResetPasswordEmail } = require('../services/emailService');

// Helper function to generate JWT Token
const generateToken = (id, role) => {
  return jwt.sign({ id, role }, process.env.JWT_SECRET, { expiresIn: '7d' });
};

// 1. STANDARD LOGIN (Admin / Verified Users)
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: 'Invalid credentials' });

    // Check if account is verified
    if (!user.isVerified) {
      return res.status(403).json({ message: 'Please verify your email/phone first via OTP.' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

    const token = generateToken(user._id, user.role);

    res.json({
      message: 'Login successful',
      token,
      user: { id: user._id, name: user.name, email: user.email, role: user.role }
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 2. REQUEST OTP FOR VERIFICATION
exports.requestOTP = async (req, res) => {
  try {
    const { email } = req.body;
    let user = await User.findOne({ email });

    // Generate random 6-digit OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const otpExpires = Date.now() + 10 * 60 * 1000; // 10 mins expiration

    if (!user) {
      // Create new unverified user if doesn't exist
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

    // Mark as verified & clear OTP fields
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

// 4. FORGOT PASSWORD (Generate Reset Token)
exports.forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });

    if (!user) return res.status(404).json({ message: 'No user found with this email' });

    // Create unhashed random token to send in URL
    const resetToken = crypto.randomBytes(32).toString('hex');

    // Save hashed version in database for security
    user.resetPasswordToken = crypto.createHash('sha256').update(resetToken).digest('hex');
    user.resetPasswordExpires = Date.now() + 15 * 60 * 1000; // 15 mins expiry

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

    // Hash incoming URL token to compare with DB
    const hashedToken = crypto.createHash('sha256').update(token).digest('hex');

    const user = await User.findOne({
      resetPasswordToken: hashedToken,
      resetPasswordExpires: { $gt: Date.now() },
    });

    if (!user) return res.status(400).json({ message: 'Invalid or expired reset token' });

    // Hash new password & clear reset token fields
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(newPassword, salt);
    user.resetPasswordToken = null;
    user.resetPasswordExpires = null;

    await user.save();
    res.json({ message: 'Password reset successful! You can now log in with your new password.' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};