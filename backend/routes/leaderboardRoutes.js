const { Router } = require("express");
const leaderboardController = require("../controllers/leaderboardController");

const router = Router();

router.get("/topten", leaderboardController.topten);

module.exports = router;
