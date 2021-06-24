const { Router } = require('express');
const gameplayController = require('../controllers/gameplayController');

const router = Router();

router.get('/api/user', gameplayController.user_get);
router.put('/api/user', gameplayController.user_put);

module.exports = router