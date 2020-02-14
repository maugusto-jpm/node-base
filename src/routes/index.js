var express = require('express');

var router = express.Router();

router.get('/', function(req, res, next) {
  return res.json({ hello: 'World!' });
});

module.exports = router;
