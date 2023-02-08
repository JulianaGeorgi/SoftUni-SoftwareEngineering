const User = require('../models/User.js');
const bcrypt = require('bcrypt');

exports.findByUsername = (username) => User.findOne({ username });
exports.findByEmail = (email) => User.findOne({ email });

exports.register = async (username, email, password, repeatPassword) => {
    if (password !== repeatPassword) {
        throw new Error("Passwords don\'t match");
    }

    const existingUser = await this.findByUsername(username);
    if (existingUser) {
        throw new Error('User exists!');
    };

    // TODO: Validate password 
    const hashedPassword = await bcrypt.hash(password, 10);


    await User.create({ username, email, password: hashedPassword });
};

exports.login = async (email, password) => {
//User exists
const user = await this.findByEmail(email);

if(!user){
    throw new Error('Invalid email or password');
}

const isValid = await bcrypt.compare(user.password, password);

if(!isValid){
    throw new Error('Password is not valid');
}
//Password is valid 

//Generate token
}