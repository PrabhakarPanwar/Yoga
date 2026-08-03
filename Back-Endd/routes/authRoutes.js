const express = require('express');
const router = express.Router();
const { register, login, verifyOtp, resendOtp, resetUserPassword } = require('../controllers/authController');
const { getAllUsers } = require('../controllers/userController');
const { protect, requireAdmin } = require('../middleware/authMiddleware');

router.post('/register', register);
router.post('/verify-otp', verifyOtp);
router.post('/resend-otp', resendOtp);
router.post('/login', login);

router.get('/admin/users', protect, requireAdmin, getAllUsers);
router.patch('/admin/reset-user-password', protect, requireAdmin, resetUserPassword);

module.exports = router;