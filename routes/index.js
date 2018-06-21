var express = require('express');
var router = express.Router();

const playerController = require('../controllers/playersController')
/* GET page according by calling corresponding function in the controller. */
router.get('/', playerController.home);
router.get('/players', playerController.getPlayers);

module.exports = router;
