const router = require('express').Router();

const homeController = require('./controllers/homeController');
const authCOntroller = require('./controllers/authController');
const cryptoController = require('./controllers/cryptoController');

router.use(homeController);
router.use(authCOntroller);
router.use('/crypto', cryptoController);

module.exports = router;