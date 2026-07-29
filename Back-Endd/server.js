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

// Uncomment when MongoDB URI is ready
connectDB(); 
// Routes
app.use('/api/auth', authRoutes);
app.use('/api/blogs', blogRoutes); // Changed /api/blog to /api/blogs

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});