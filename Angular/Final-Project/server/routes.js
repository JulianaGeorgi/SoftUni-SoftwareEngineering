const router = require('express').Router();
const authController = require('./controllers/authController');

// router.get('/test', (req, res) => {
//     res.send('hello world')
// })

router.use(authController);

module.exports = router;