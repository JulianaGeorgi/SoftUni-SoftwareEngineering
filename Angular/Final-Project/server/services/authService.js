const User = require('../models/User');

exports.register = (username, email, password, rePassword) => User.create({username, email, password});