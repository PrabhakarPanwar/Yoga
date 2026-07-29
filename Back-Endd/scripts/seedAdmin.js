const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
require('dotenv').config();

const seedAdmin = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    const email = 'chauhanji84331@gmail.com';
    const plainPassword = 'Nitin123';

    await User.deleteOne({ email });

    // Explicitly hash password here
    const hashedPassword = await bcrypt.hash(plainPassword, 10);

    const admin = new User({
      name: 'Admin',
      email: email,
      password: hashedPassword,
      role: 'admin',
      isVerified: true,
    });

    await admin.save();
    console.log('✅ Fresh Admin created successfully!');
    process.exit(0);
  } catch (err) {
    console.error('❌ Error seeding admin:', err.message);
    process.exit(1);
  }
};

seedAdmin();