const router = require('express').Router();

const verifyJWT = require('../config/token');
const authController = require('../controllers/authController');

const { validatorsLogin, valitationLogin } = require('../validators/login');

router.post('/login',
    validatorsLogin,
    valitationLogin,
    authController.login);

router.post('/register', authController.register);
router.get('/checkauth', verifyJWT, authController.successAuth);

module.exports = router;