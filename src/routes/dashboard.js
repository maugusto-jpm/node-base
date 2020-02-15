const auth = require('../app/middleware/auth');

const router = require('express').Router();

const DashboardController = require('../controllers/dashbard_controler');

router.get('/', auth, DashboardController.index);

module.exports = router;
