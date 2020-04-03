async function createPost(req, res) {
    const { filename } = req.file;
    res.status(200).send({
        message: 'Uploaded with sucess',
        data: {
            url: `${process.env.APP_URL}/files/${filename}`
        }
    });
}

module.exports = {
    createPost
};