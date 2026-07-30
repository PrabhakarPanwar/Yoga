require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const blogRoutes = require('./routes/blogRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Database connection
connectDB(); 

// Serve static upload folder for cover images
app.use('/uploads', express.static('uploads'));

// Routes (Matching frontend expectations)
app.use('/auth', authRoutes);
app.use('/blog', blogRoutes);

const PORT = process.env.PORT || 8000; // Aligned port with frontend
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});