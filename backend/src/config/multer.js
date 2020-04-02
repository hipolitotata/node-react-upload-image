const multer = require('multer');
const path = require('path');
const crypto = require('crypto');

const storage = multer.diskStorage({
    destination: path.resolve('tmp', 'uploads'),
    filename: (req, file, cb) => {
        let nameCrypto = crypto.randomBytes(16).toString('hex');
        cb(null, `${nameCrypto}-${file.originalname}`);
    }
});

module.exports = multer({ storage: storage })
