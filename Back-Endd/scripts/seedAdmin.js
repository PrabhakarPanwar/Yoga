require('dotenv').config();
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const connectDB = require('../config/db');

const seedAdmin = async () =>
{
  try{
    await connectDB();

    const amdinEmail = process.env.ADMIN_EMAIL;
    const adminPassword =process.env.ADMIN_PASSWORD;

    if(!adminEmail || !adminPassword)
    {
      console.error('ERROR: ADMINEMAIL and ADMINPASWORD must be defined')
      process.exit(1);

      const existingAdmin = await User.findOne({email:adminEmail})

      if(existingAdmin)
      {
        console.log('Admin user already exists. Skipping seed')
        process.exit(0);
      }

      //hasing the adminpassword
      
    }
  }
}