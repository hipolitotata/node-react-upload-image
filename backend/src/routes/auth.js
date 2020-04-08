const router = require('express').Router();

const verifyJWT = require('../config/token');
const authController = require('../controllers/authController');

router.post('/login', authController.login);
router.post('/register', authController.register);
router.get('/checkauth', verifyJWT, authController.successAuth);

module.exports = router;