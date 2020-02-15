const router = require('express').Router();

const UserController = require('../../controllers/user_controller');

router.get('/', UserController.index);
router.post('/', UserController.store);

module.exports = router;
