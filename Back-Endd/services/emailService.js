const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Send OTP for account verification
exports.sendOTPEmail = async (email, otp) => {
  const mailOptions = {
    from: `"Shubhyogshala" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: 'Verification Code - Shubhyogshala',
    html: `
      <div style="font-family: Arial, sans-serif; padding: 20px;">
        <h2>Verify Your Email</h2>
        <p>Your OTP code for Shubhyogshala is:</p>
        <h1 style="color: #4F46E5; letter-spacing: 4px;">${otp}</h1>
        <p>This code will expire in 10 minutes.</p>
      </div>
    `,
  };

  await transporter.sendMail(mailOptions);
};

// Send Password Reset Link
exports.sendResetPasswordEmail = async (email, resetToken) => {
  const resetUrl = `https://shubhyogshala.com/reset-password?token=${resetToken}`;

  const mailOptions = {
    from: `"Shubhyogshala" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: 'Password Reset Request - Shubhyogshala',
    html: `
      <div style="font-family: Arial, sans-serif; padding: 20px;">
        <h2>Password Reset Request</h2>
        <p>Click the link below to reset your password:</p>
        <a href="${resetUrl}" style="background-color: #4F46E5; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; display: inline-block;">Reset Password</a>
        <p>This link is valid for 15 minutes.</p>
      </div>
    `,
  };

  await transporter.sendMail(mailOptions);
};