const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        match: /.+\@.+\..+/, 
    },
    age: {
        type: Number,
        required: true,
        min: 18
    }
}, {
    timestamps: true 
});

const User = mongoose.model('UserCredentials', userSchema);

module.exports = User;
