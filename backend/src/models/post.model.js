const mongoose = require('../config/database');

const PostSchema = mongoose.Schema({
    name: {
        type: String
    },
    size: {
        type: Number
    },
    url: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now()
    },
    preview: {
        type: String,
        default: null
    },
    userId: {
        type: String,
        require: true
    }
});

const Post = mongoose.model('Post', PostSchema);

module.exports = Post;