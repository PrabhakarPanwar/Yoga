const express = require('express');
const router = express.Router();
const {
  getAllBlogs,
  getBlogBySlug,
  createBlog,
  deleteBlog,
} = require('../controllers/blogController');
const { protect, requireAdmin } = require('../middleware/authMiddleware');

// Public Routes
router.get('/', getAllBlogs);
router.get('/:slug', getBlogBySlug);

// Protected Admin Routes (Requires valid JWT + admin role)
router.post('/', protect, requireAdmin, createBlog);
router.delete('/:id', protect, requireAdmin, deleteBlog);

module.exports = router;