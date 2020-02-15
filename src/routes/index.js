const router = require('express').Router();

var userRoutes = require('./models/user');

router.get('/', function(req, res, next) {
  return res.json({ hello: 'World!' });
});

router.use('/user', userRoutes);

module.exports = router;
