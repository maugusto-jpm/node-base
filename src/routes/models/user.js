const router = require('express').Router();

const UserController = require('../../controllers/user_controller');

router.get('/', UserController.index);

module.exports = router;
