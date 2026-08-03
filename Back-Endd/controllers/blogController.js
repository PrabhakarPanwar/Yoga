const Blog = require('../models/Blog');
const cloudinary = require('../config/cloudinary');

const generateSlug = async (title) => {
  const base = title.toLowerCase().replace(/[^a-zA-Z0-9 ]/g, '').replace(/\s+/g, '-');
  let slug = base;
  let counter = 1;
  while (await Blog.findOne({ slug })) {
    slug = `${base}-${counter}`;
    counter++;
  }
  return slug;
};

const uploadToCloudinary = (fileBuffer) => {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      { folder: 'shubhyogshala/blog' },
      (error, result) => (error ? reject(error) : resolve(result))
    );
    stream.end(fileBuffer);
  });
};

// Public: published blogs only
exports.getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find({ status: 'published' }).sort({ createdAt: -1 });
    res.json(blogs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Admin: everything, published + draft
exports.getAllBlogsAdmin = async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    res.json({ success: true, blogs });
  } catch (error) {
    res.status(500).json({ success: false, msg: error.message });
  }
};

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
    const { title, content, excerpt, tags, status } = req.body;

    if (!title || !content) {
      return res.status(400).json({ success: false, msg: 'Title and content are required.' });
    }

    let coverImage = '';
    if (req.file) {
      const result = await uploadToCloudinary(req.file.buffer);
      coverImage = result.secure_url;
    }

    const slug = await generateSlug(title);

    const newBlog = await Blog.create({
      title: title.trim(),
      slug,
      content: content.trim(),
      excerpt: excerpt?.trim() || '',
      coverImage,
      author: req.user?.name || 'Admin',
      tags: tags ? tags.split(',').map((t) => t.trim()).filter(Boolean) : [],
      status: status === 'draft' ? 'draft' : 'published',
    });

    res.status(201).json({ success: true, msg: 'Blog created successfully!', blog: newBlog });
  } catch (error) {
    console.error('Create blog error:', error);
    res.status(500).json({ success: false, msg: error.message });
  }
};

exports.updateBlog = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ success: false, msg: 'Blog post not found' });

    const { title, content, excerpt, tags, status } = req.body;

    if (title) blog.title = title.trim();
    if (content) blog.content = content.trim();
    if (excerpt !== undefined) blog.excerpt = excerpt.trim();
    if (tags !== undefined) blog.tags = tags.split(',').map((t) => t.trim()).filter(Boolean);
    if (status) blog.status = status === 'draft' ? 'draft' : 'published';

    if (req.file) {
      const result = await uploadToCloudinary(req.file.buffer);
      blog.coverImage = result.secure_url;
    }

    await blog.save();
    res.json({ success: true, msg: 'Blog updated successfully!', blog });
  } catch (error) {
    console.error('Update blog error:', error);
    res.status(500).json({ success: false, msg: error.message });
  }
};

exports.deleteBlog = async (req, res) => {
  try {
    const blog = await Blog.findByIdAndDelete(req.params.id);
    if (!blog) return res.status(404).json({ success: false, msg: 'Blog post not found' });
    res.json({ success: true, msg: 'Blog deleted successfully!' });
  } catch (error) {
    res.status(500).json({ success: false, msg: error.message });
  }
};

exports.toggleBlogStatus = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ success: false, msg: 'Blog post not found' });

    blog.status = blog.status === 'published' ? 'draft' : 'published';
    await blog.save();

    res.json({ success: true, msg: `Blog is now ${blog.status}.`, blog });
  } catch (error) {
    res.status(500).json({ success: false, msg: error.message });
  }
};