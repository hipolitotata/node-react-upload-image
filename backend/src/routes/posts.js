const router = require('express').Router();
const upload = require('../config/multer');

const postsController = require('../controllers/postsController');

const verifyJWT = require('../config/token');

router.post('/',
    verifyJWT,
    upload.single('file'),
    postsController.createPost
);

module.exports = router;