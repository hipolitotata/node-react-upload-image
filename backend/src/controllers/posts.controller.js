const Post = require('../models/post.model');

async function createPost(req, res) {

    let file = {
        name: req.file.originalname,
        size: req.file.size,
        url: `/files/${req.file.filename}`,
        preview: null,
        userId: req.userId
    };

    file = await Post.create(file);

    res.status(200).send({
        message: 'Uploaded with sucess',
        data: {
            url: `${process.env.APP_URL}${file.url}`
        }
    });
}

async function listPosts(req, res) {
    let files = await Post.find({ userId: req.userId });

    files.forEach(file => {
        file.preview = `${process.env.APP_URL}${file.url}`;
        file.url = `${process.env.APP_URL}${file.url}`;
    });

    setTimeout(() => {
        res.status(200).send(files);
    }, 2000)

};

async function deletePost(req, res) {
    try {
        await Post.deleteOne({ _id: req.params.id });
        res.status(200).send({
            message: 'file deleted'
        });
    } catch (err) {
        console.log(err);
        res.status(500).send({
            message: err
        });
    }
};

module.exports = {
    createPost,
    listPosts,
    deletePost
};