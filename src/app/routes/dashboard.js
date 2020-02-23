const router = require('express').Router();

const DashboardController = require('../controllers/dashbard_controler');
const userAuthenticator = require('../../middleware/auth');

router.get('/', userAuthenticator, DashboardController.index);

module.exports = router;
