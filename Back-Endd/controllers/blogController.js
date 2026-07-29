const Blog = require('../models/Blog');

// 1. Get All Published Blogs (Public)
exports.getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find({ isPublished: true }).sort({ createdAt: -1 });
    res.json(blogs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 2. Get Single Blog by Slug (Public)
exports.getBlogBySlug = async (req, res) => {
  try {
    const blog = await Blog.findOne({ slug: req.params.slug });
    if (!blog) return res.status(404).json({ message: 'Blog post not found' });
    res.json(blog);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 3. Create New Blog (Admin Only)
exports.createBlog = async (req, res) => {
  try {
    const { title, content, excerpt, coverImage, tags } = req.body;

    // Generate slug from title (e.g. "Yoga Tips 101" -> "yoga-tips-101")
    const slug = title
      .toLowerCase()
      .replace(/[^a-zA-Z0-9 ]/g, '')
      .replace(/\s+/g, '-');

    const newBlog = new Blog({
      title,
      slug,
      content,
      excerpt,
      coverImage,
      tags: tags ? tags.split(',').map((t) => t.trim()) : [],
    });

    await newBlog.save();
    res.status(201).json({ message: 'Blog created successfully!', blog: newBlog });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 4. Delete Blog (Admin Only)
exports.deleteBlog = async (req, res) => {
  try {
    const blog = await Blog.findByIdAndDelete(req.params.id);
    if (!blog) return res.status(404).json({ message: 'Blog post not found' });
    res.json({ message: 'Blog deleted successfully!' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};