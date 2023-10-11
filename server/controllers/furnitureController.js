const router = require("express").Router();

const furnitureManager = require("../managers/furnitureManager");

router.get('/', async (req, res) => {
    const furnitures = await furnitureManager.getAll();

    res.json(furnitures);
})

router.post("/", async (req, res) => {
    try {
        await furnitureManager.create({
            ...req.body,
            _ownerId: req.user._id
        });

        res.status(204).end();
    } catch (err) {
        res.status(400).json({
            message: 'Cannot create furniture'
        });
    }
});

router.get('/:furnitureId',async (req, res) => {
    const furniture = await furnitureManager.getOne(req.params.furnitureId);

    res.json(furniture);
})

module.exports = router;
