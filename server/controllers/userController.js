const router = require('express').Router();

const userManager = require('../managers/userManager');

router.post('/register',async (req, res) => {
    try {
        const user = await userManager.register(req.body);

        res.json({
            email: user.email,
            accessToken: 'nqma token',
            _id: user._id
        })
    } catch (err) {
        res.status(400).json({
            message: 'Some Error',
        })
    }
});

router.post('/login', async (req, res) => {
    const user = await userManager.login(req.body);
})

module.exports = router;