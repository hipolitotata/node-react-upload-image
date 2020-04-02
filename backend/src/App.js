const express = require('express');
const app = express();

const upload = require('./config/multer');

app.use(express.json());

app.post('/', upload.single('file'), (req, res) => {
    res.send(req.file);
});

app.listen(3000, () => {
    console.log('server is listening');
});
