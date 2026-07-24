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
  }
}