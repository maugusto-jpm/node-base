var express = require('express');

var router = express.Router();

router.get('/', function(req, res, next) {
  return res.json({ hello: 'World!' });
});

require('./users');

module.exports = router;
