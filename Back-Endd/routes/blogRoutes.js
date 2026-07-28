const express = require('express');
const router = express.Router();
const {
  getAllBlogs,
  getBlogById,
  createBlog,
  updateBlog,
  deleteBlog,
} = require('../controllers/blogController');
const { protect, requireAdmin } = require('../middleware/authMiddleware');
const upload = require('../middleware/upload');

// Public routes (anyone can read blogs)
router.get('/', getAllBlogs);
router.get('/:id', getBlogById);

// Admin-only routes (protected)
router.post('/', protect, requireAdmin, upload.single('image'), createBlog);
router.put('/:id', protect, requireAdmin, upload.single('image'), updateBlog);
router.delete('/:id', protect, requireAdmin, deleteBlog);

module.exports = router;