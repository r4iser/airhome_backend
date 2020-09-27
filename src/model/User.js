const mongoose = require('mongoose');

const UserSchema = new mongoose.schema(
    {
        email: String,
    }
);

module.exports = mongoose.model('User', UserSchema);