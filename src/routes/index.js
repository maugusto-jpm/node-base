const router = require('express').Router();

var userRoutes = require('./models/user');
var sessionRoutes = require('./session');

router.get('/', function(req, res, next) {
  return res.json({ hello: 'World!' });
});

router.use('/user', userRoutes);
router.use('/session', sessionRoutes);

module.exports = router;
