const mongoose = require('../config/database');

const UserSchema = mongoose.Schema({
    name: {
        type: String
    },
    age: {
        type: Number
    },
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String,
        select: false
    }
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
