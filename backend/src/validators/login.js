const { validationResult, check } = require('express-validator');

const checksLogin = [
    check('email').isEmail().withMessage('email is not valid'),
    check('password').isLength({ min: 8 }).withMessage('must be at least 8 chars long')
];

function valitationLogin(req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }
    next();
};

module.exports = { checksLogin, valitationLogin };