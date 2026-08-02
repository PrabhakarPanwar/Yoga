const Blog = require('../models/Blog');

exports.getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find({ isPublished: true }).sort({ createdAt: -1 });
    res.json(blogs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get Single Blog by Slug (Public) — now increments the view count
exports.getBlogBySlug = async (req, res) => {
  try {
    const blog = await Blog.findOneAndUpdate(
      { slug: req.params.slug },
      { $inc: { views: 1 } },
      { new: true }
    );
    if (!blog) return res.status(404).json({ success: false, message: 'Blog post not found' });
    res.json({ success: true, blog });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.createBlog = async (req, res) => {
  try {
    const { title, content, excerpt, coverImage, tags } = req.body;
    const slug = title.toLowerCase().replace(/[^a-zA-Z0-9 ]/g, '').replace(/\s+/g, '-');

    const newBlog = new Blog({
      title,
      slug,
      content,
      excerpt,
      coverImage,
      author: req.user?.name || 'Admin',
      tags: tags ? tags.split(',').map((t) => t.trim()) : [],
    });

    await newBlog.save();
    res.status(201).json({ message: 'Blog created successfully!', blog: newBlog });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteBlog = async (req, res) => {
  try {
    const blog = await Blog.findByIdAndDelete(req.params.id);
    if (!blog) return res.status(404).json({ message: 'Blog post not found' });
    res.json({ message: 'Blog deleted successfully!' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};