const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minLength: [3, "First name must be at least 3 characters long!"],
    },
    lastName: {
        type: String,
        required: true,
        minLength: [3, "Last name must be at least 3 characters long!"],
    },
    email: {
        type: String,
        required: true,
        minLength: [10, "Email must be at least 10 characters long!"],
    },
    password: {
        type: String,
        required: true,
        minLength: [4, "Password must be at least 4 characters long!"],
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;