const router = require('express').Router();

const verifyJWT = require('../config/token');
const authController = require('../controllers/authController');

const { checksLogin, valitationLogin } = require('../validators/login');

router.post('/login',
    checksLogin,
    valitationLogin,
    authController.login);

router.post('/register', authController.register);
router.get('/checkauth', verifyJWT, authController.successAuth);

module.exports = router;