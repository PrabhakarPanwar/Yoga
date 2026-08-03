const express = require('express');
const router = express.Router();
const { getAllUsers } = require('../controllers/userController');
const { protect, requireAdmin } = require('../middleware/authMiddleware');

router.get('/', protect, requireAdmin, getAllUsers);

module.exports = router;