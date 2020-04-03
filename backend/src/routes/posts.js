const router = require('express').Router();
const upload = require('../config/multer');

const postsController = require('../controllers/postsController');

router.post('/', upload.single('file'), postsController.createPost);

module.exports = router;