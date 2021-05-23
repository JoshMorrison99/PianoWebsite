const { Router } = require('express');
const authenticationController = require('../controllers/authenticationController');

const router = Router();

router.post('/api/signup', authenticationController.signup_post);
router.post('/api/login', authenticationController.login_post);

module.exports = router