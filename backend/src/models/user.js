const mongoose = require('../config/database');

const UserSchema = mongoose.Schema({
    name: {
        type: String
    },
    age: {
        type: Number
    }
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
