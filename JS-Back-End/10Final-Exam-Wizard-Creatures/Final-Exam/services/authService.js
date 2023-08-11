const User = require('../models/User.js');
const bcrypt = require('bcrypt');

const jwt = require('../lib/jsonwebtoken.js');
const { JWT_SECRET } = require('../constants.js');


exports.findByEmail = (email) => User.findOne({ email });

exports.register = async (firstName, lastName, email, rawPassword) => {

    const existingUser = await User.findOne({
        $or: [
            { email },
        ]
    });

    if (existingUser) {
        throw new Error('User exists!');
    };

    const password = await bcrypt.hash(rawPassword, 10);

    const user = await User.create({ firstName, lastName, email, password });
    return createSession(user);
};

exports.login = async (email, password) => {
    //User exists
    const user = await this.findByEmail(email);

    if (!user) {
        throw new Error('Invalid email or password');
    }

    //Password is valid 
    const isValid = await bcrypt.compare(password, user.password);

    if (!isValid) {
        throw new Error('Password is not valid');
    }

    //Generate token
    const payload = {
        _id: user._id,
        email,
        firstName: user.firstName,
    };

    const token = await jwt.sign(payload, JWT_SECRET);

    return token;
}

function createSession({ _id, email, firstName }) {
    const payload = {
      _id,
      email,
      firstName,
    };
  
    return jwt.sign(payload, JWT_SECRET);
  }
  
  exports.verifyToken = (token) => {
    return jwt.verify(token, JWT_SECRET);
  };