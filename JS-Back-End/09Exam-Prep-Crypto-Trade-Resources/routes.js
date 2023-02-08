const router = require('express').Router();

const homeController = require('./controllers/homeController.js');
const authCOntroller = require('./controllers/authController.js');

router.use(homeController);
router.use(authCOntroller);

module.exports = router;