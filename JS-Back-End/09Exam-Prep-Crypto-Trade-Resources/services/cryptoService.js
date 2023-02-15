const Crypto = require('../models/Crypto.js');

exports.create = (ownerId, cryptoData) => Crypto.create({...cryptoData, owner: ownerId});