const { Router } = require('express');
const authenticationController = require('../controllers/authenticationController');
const passport = require('passport')

const router = Router();

router.post('/api/signupgame', authenticationController.signup_post);
router.post('/api/logingame', authenticationController.login_post);

router.post('/api/signupweb', passport.authenticate('local'), (req, res, next) => {});
router.post('/api/loginweb', passport.authenticate('local'), (req, res, next) => {});

module.exports = router