const Post = require('../models/post');

async function createPost(req, res) {

    let file = {
        name: req.file.originalname,
        size: req.file.size,
        destination: `/files/${req.file.filename}`,
        userId: req.userId
    };

    file = await Post.create(file);

    res.status(200).send({
        message: 'Uploaded with sucess',
        data: {
            url: `${process.env.APP_URL}${file.destination}`
        }
    });
}

async function listPosts(req, res) {
    let files = await Post.find({ userId: req.userId });

    files.forEach(file => {
        file.destination = `${process.env.APP_URL}${file.destination}`;
    })

    res.status(200).send(files);

};

module.exports = {
    createPost,
    listPosts
};