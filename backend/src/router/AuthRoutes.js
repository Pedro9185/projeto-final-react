const express = require('express');
const router = express.Router();

const { Login, Register } = require('../controllers/AuthController');

router.post('/Login', Login)
router.post('/Register', Register)

module.exports = router