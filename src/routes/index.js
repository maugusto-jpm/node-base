const router = require('express').Router();

var userRoutes = require('./models/user');
var sessionRoutes = require('./session');
var dashboardRoutes = require('./dashboard');

router.get('/', function(req, res, next) {
  return res.json({ hello: 'World!' });
});

router.use('/user', userRoutes);
router.use('/session', sessionRoutes);
router.use('/dashboard', dashboardRoutes);

module.exports = router;
