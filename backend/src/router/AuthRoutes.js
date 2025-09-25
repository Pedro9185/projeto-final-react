const express = require ("express");
const router = express.Router();

const { 
    Register, Login } = require('../controllers/AuthController'); 

router.get('/login', Login);
router.post('/register', Register);

module.exports = router;