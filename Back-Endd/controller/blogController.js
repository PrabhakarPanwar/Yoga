const Blog = require('../models/Blog');
const cloudinary = require('../config/cloudinary');

// 1. GET ALL BLOGS (Public access for site visitors)
exports.getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 }).populate('author', 'name');
    res.json(blogs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 2. GET SINGLE BLOG BY ID (Public)
exports.getBlogById = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id).populate('author', 'name');
    if (!blog) return res.status(404).json({ message: 'Blog post not found' });
    res.json(blog);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 3. CREATE BLOG (Admin Only)
exports.createBlog = async (req, res) => {
  try {
    const { title, description } = req.body;

    if (!req.file) {
      return res.status(400).json({ message: 'Blog image is required' });
    }

    // Convert image buffer to base64 string for Cloudinary upload
    const fileBase64 = `data:${req.file.mimetype};base64,${req.file.buffer.toString('base64')}`;
    
    // Upload image to Cloudinary in a specific folder
    const result = await cloudinary.uploader.upload(fileBase64, {
      folder: 'shubhyogshala_blogs',
    });

    const blog = new Blog({
      title,
      description,
      imageUrl: result.secure_url,
      imagePublicId: result.public_id,
      author: req.user.id,
    });

    await blog.save();
    res.status(201).json({ message: 'Blog post created successfully!', blog });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 4. EDIT BLOG (Admin Only)
exports.updateBlog = async (req, res) => {
  try {
    const { title, description } = req.body;
    let blog = await Blog.findById(req.params.id);

    if (!blog) return res.status(404).json({ message: 'Blog not found' });

    // If a new image is provided, replace the old image on Cloudinary
    if (req.file) {
      if (blog.imagePublicId) {
        await cloudinary.uploader.destroy(blog.imagePublicId); // Delete old image
      }

      const fileBase64 = `data:${req.file.mimetype};base64,${req.file.buffer.toString('base64')}`;
      const result = await cloudinary.uploader.upload(fileBase64, {
        folder: 'shubhyogshala_blogs',
      });

      blog.imageUrl = result.secure_url;
      blog.imagePublicId = result.public_id;
    }

    if (title) blog.title = title;
    if (description) blog.description = description;

    await blog.save();
    res.json({ message: 'Blog updated successfully!', blog });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 5. DELETE BLOG (Admin Only)
exports.deleteBlog = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);

    if (!blog) return res.status(404).json({ message: 'Blog not found' });

    // Remove image from Cloudinary
    if (blog.imagePublicId) {
      await cloudinary.uploader.destroy(blog.imagePublicId);
    }

    await blog.deleteOne();
    res.json({ message: 'Blog deleted successfully!' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};