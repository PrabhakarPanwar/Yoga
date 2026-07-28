const jwt = require('jsonwebtoken');

// Middleware to protect routes (checks if user is logged in)
const protect = (req, res, next) => {
  let token;

  // Check if Authorization header exists and starts with "Bearer"
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      // Extract the token from "Bearer <token>"
      token = req.headers.authorization.split(' ')[1];

      // Verify token signature using secret key
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Attach user ID and role to the request object
      req.user = decoded; // Contains { id: '...', role: 'admin' | 'user' }

      next(); // Proceed to the next middleware or controller
    } catch (error) {
      return res.status(401).json({ message: 'Not authorized, token invalid or expired' });
    }
  }

  if (!token) {
    return res.status(401).json({ message: 'Not authorized, no token provided' });
  }
};

// Middleware to restrict access strictly to Admin accounts
const requireAdmin = (req, res, next) => {
  if (req.user && req.user.role === 'admin') {
    next(); // Access granted
  } else {
    return res.status(403).json({ message: 'Access denied. Admin privileges required.' });
  }
};

module.exports = { protect, requireAdmin };