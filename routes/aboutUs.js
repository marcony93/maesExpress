var express = require('express');
var router = express.Router();

router.get('/aboutUs.hbs', function(req, res, next) {
  res.render('aboutUs', { title: 'MaesExpress' });
});

module.exports = router;