const express = require('express');
const router = express.Router();
const passport = require('passport');
const { registerUser, loginUser, getMe } = require('../controllers/authController');
const authMiddleware = require('../middleware/authMiddleware');
const jwt = require('jsonwebtoken');
require('dotenv').config();

// Standard JWT Authentication
router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/me', authMiddleware, getMe);

// Google OAuth Authentication
router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
router.get(
  '/google/callback',
  passport.authenticate('google', { failureRedirect: `${process.env.CLIENT_URL}/login` }),
  (req, res) => {
    const payload = { user: { id: req.user.id } };
    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: '5d' },
      (err, token) => {
        if (err) throw err;
        res.redirect(`${process.env.CLIENT_URL}/auth/success?token=${token}`);
      }
    );
  }
);

module.exports = router;
