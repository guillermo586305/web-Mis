const express = require('express');
const { verifyToken } = require('../middleware/authMiddleware');
const router = express.Router();
const authController = require('../controllers/authController');

// Ruta para el registro de usuarios
router.post('/register', authController.register);

// Ruta para el inicio de sesión de usuarios
router.post('/login', authController.login);

router.get('/protected', verifyToken, (req, res) => {
  res.status(200).json({ message: 'Ruta protegida', user: req.user });
});

module.exports = router;