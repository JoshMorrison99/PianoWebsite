import { Router } from "express";
import downloadController from "../controllers/downloadController";

const router = Router();

router.get("/api/game_version", downloadController.downloadVersion);

router.get("/api/game_download", downloadController.downloadGame);

module.exports = router;
