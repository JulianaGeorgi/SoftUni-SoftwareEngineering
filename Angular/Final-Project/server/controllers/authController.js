const router = require('express').Router();

const authService = require('../services/authService');
const { getErrorMessage } = require('../utils/errorUtils.js');

router.get('/', (req, res) => {
    res.json('some text');
});

router.post('/login', (req, res) => {
    const { email, password } = req.body;
});

router.post('/register', async (req, res) => {
    const { username, email, password } = req.body;

    try {
        const token = await authService.register(username, email, password);
        res.cookie('auth', token);
        return res.status(200).json({ success: true, message: 'Created' });
    } catch (error) {
        return res.status(400).send(getErrorMessage(error));
    }

});

module.exports = router;