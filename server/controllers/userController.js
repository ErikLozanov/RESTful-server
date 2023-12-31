const router = require('express').Router();

const userManager = require('../managers/userManager');

router.post('/register',async (req, res) => {
    try {
        const result = await userManager.register(req.body);

        res.json(result);
        
    } catch (err) {
        res.status(400).json({
            message: 'Some Error',
        })
    }
});

router.post('/login', async (req, res) => {

    try {
        const result = await userManager.login(req.body);

        res.json(result);
    } catch (err) {
            res.status(400).json({
                message: err.message
            })
    }

});

router.get('/logout', (req, res) => {
    // TODO: invalidate token
    res.end();
})

module.exports = router;