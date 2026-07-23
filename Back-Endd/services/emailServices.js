const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Send OTP for Verification
exports.sendOTPEmail = async (email, otp) => {
  const mailOptions = {
    from: `"Shubhyogshala" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: 'Your Verification Code - Shubhyogshala',
    html: `
      <h2>Welcome to Shubhyogshala</h2>
      <p>Your 6-digit verification code is: <strong>${otp}</strong></p>
      <p>This code will expire in 10 minutes.</p>
    `,
  };
  return transporter.sendMail(mailOptions);
};

// Send Password Reset Link
exports.sendResetPasswordEmail = async (email, resetToken) => {
  const resetUrl = `${process.env.FRONTEND_URL}/reset-password?token=${resetToken}`;
  
  const mailOptions = {
    from: `"Shubhyogshala" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: 'Password Reset Request - Shubhyogshala',
    html: `
      <h2>Password Reset Request</h2>
      <p>Click the link below to reset your password:</p>
      <a href="${resetUrl}" target="_blank">${resetUrl}</a>
      <p>This link will expire in 15 minutes.</p>
    `,
  };
  return transporter.sendMail(mailOptions);
};