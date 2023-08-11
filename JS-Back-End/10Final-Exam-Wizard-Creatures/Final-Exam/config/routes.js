const router = require("express").Router();

const homeController = require("../controllers/homeController");
const authController = require("../controllers/authController");
const creatureController = require("../controllers/creatureController");

router.use(homeController);
router.use("/auth", authController);
router.use("/creatures", creatureController);

module.exports = router;