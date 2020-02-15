const router = require('express').Router();

const SessionController = require('../controllers/session_controler');

router.post('/', SessionController.store);

module.exports = router;
