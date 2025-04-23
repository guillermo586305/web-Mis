const express = require('express');
const router = express.Router();

router.post('/login', (req, res) => {
  // Lógica de autenticación
  res.send('Login endpoint');
});

router.post('/register', (req, res) => {
  // Lógica de registro
  res.send('Register endpoint');
});

module.exports = router;
