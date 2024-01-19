// userModel.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    major: String,
    year: Number,
    cours: Array
});

const UserModel = mongoose.model('users', userSchema);

module.exports = UserModel;
