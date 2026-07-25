const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const { sendOTPEmail, sendResetPasswordEmail } = require('../services/emailService');

const geberateToken = (id,role)=>
{
  return jwt.sign({id,role},process.env.JWT_SECRET,{expiresIn:'7d'});
};

exports.login = async(req,res)=>
{
  try{
    const{email,password} = req.body;

    const user = await User.findone({email});
    if(!user) return res.status(400).json({message: 'invalid cadentials'})


      //check if account is valid
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
  