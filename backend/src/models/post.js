const mongoose = require('../config/database');

const PostSchema = mongoose.Schema({
    name: {
        type: String
    },
    size: {
        type: Number
    },
    destination: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now()
    },
    userId: {
        type: String,
        require: true
    }
});

const Post = mongoose.model('Post', PostSchema);

module.exports = Post;