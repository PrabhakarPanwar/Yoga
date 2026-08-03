const express = require('express');
const router = express.Router();
const {
  getAllBlogs,
  getAllBlogsAdmin,
  getBlogBySlug,
  createBlog,
  updateBlog,
  deleteBlog,
  toggleBlogStatus,
} = require('../controllers/blogController');
const { protect, requireAdmin } = require('../middleware/authMiddleware');
const upload = require('../middleware/upload');

// Admin routes — must come before the generic "/:slug" route
router.get('/admin/all', protect, requireAdmin, getAllBlogsAdmin);
router.post('/admin/create', protect, requireAdmin, upload.single('coverImage'), createBlog);
router.put('/admin/update/:id', protect, requireAdmin, upload.single('coverImage'), updateBlog);
router.delete('/admin/delete/:id', protect, requireAdmin, deleteBlog);
router.patch('/admin/toggle/:id', protect, requireAdmin, toggleBlogStatus);

// Public routes
router.get('/', getAllBlogs);
router.get('/:slug', getBlogBySlug);

module.exports = router;