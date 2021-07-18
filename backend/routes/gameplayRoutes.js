const { Router } = require("express");
const gameplayController = require("../controllers/gameplayController");

const router = Router();

router.get("/user", gameplayController.user_get);
router.put("/user", gameplayController.user_put);
router.put("/songs", gameplayController.songs_put);
router.put("/song", gameplayController.song_put);

module.exports = router;
