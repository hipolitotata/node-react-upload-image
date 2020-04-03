const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();

const upload = require('./config/multer');

if (process.env.NODE_ENV !== 'production') {
    console.log('dev server is running');
    require('dotenv').config()
}

app.use(cors());
app.use(express.json());

app.use(
    "/files",
    express.static(path.resolve(__dirname, "..", "tmp", "uploads"))
);

app.get('/', (req, res) => {
    res.send({ message: 'Initial route' });
});

app.post('/posts', upload.single('file'), (req, res) => {
    const { filename } = req.file;
    res.status(200).send({
        message: 'Uploaded with sucess',
        data: {
            url: `${process.env.APP_URL}/files/${filename}`
        }
    });
});

app.listen(8000);