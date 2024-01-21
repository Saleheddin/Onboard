const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
});

const CredentialsModel = mongoose.model('credentials', userSchema);

module.exports = CredentialsModel;