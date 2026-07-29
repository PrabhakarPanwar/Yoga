const express = require('express');
const router = express.Router();
const {
  getAllBlogs,
  getBlogBySlug,
  createBlog,
  deleteBlog,
} = require('../controllers/blogController');

// Public Routes
router.get('/', getAllBlogs);
router.get('/:slug', getBlogBySlug);

// Protected Admin Routes (Requires Auth)
router.post('/', createBlog);
router.delete('/:id', deleteBlog);

module.exports = router;