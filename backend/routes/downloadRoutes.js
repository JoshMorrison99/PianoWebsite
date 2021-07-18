const { Router } = require("express");
const downloadController = require("../controllers/downloadController");

const router = Router();

router.get("/game_version", downloadController.downloadVersion);

router.get("/game_download", downloadController.downloadGame);

module.exports = router;
