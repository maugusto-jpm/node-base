const router = require('express').Router();

const SessionController = require('../controllers/session_controler');

router.post('/new', SessionController.store);

module.exports = router;
