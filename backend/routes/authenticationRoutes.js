const { Router } = require("express");
const authenticationController = require("../controllers/authenticationController");
const cors = require("cors");

const router = Router();

router.post("/signup", authenticationController.signup_post);
router.post("/login", authenticationController.login_post);
router.get("/me", authenticationController.me);
router.get("/logout", authenticationController.logout);

module.exports = router;
