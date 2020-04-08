const router = require('express').Router();
const upload = require('../config/multer');

const postsController = require('../controllers/postsController');

const verifyJWT = require('../config/token');

router.post('/create',
    verifyJWT,
    upload.single('file'),
    postsController.createPost
);

router.get('/list',
    verifyJWT,
    postsController.listPosts
);


module.exports = router;