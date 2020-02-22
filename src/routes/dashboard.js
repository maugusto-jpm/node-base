const router = require('express').Router();

const auth = require('../app/middleware/auth');
const DashboardController = require('../controllers/dashbard_controler');

router.get('/', auth, DashboardController.index);

module.exports = router;
