const express = require('express');
const router = express.Router();
const { signup, signin, signout } = require('../controllers/auth.controller');

router.post('/signup', signup);   // POST /auth/signup
router.post('/signin', signin);   // POST /auth/signin
router.get('/signout', signout);  // GET  /auth/signout

module.exports = router;
