var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/index.hbs', (req, res, next) =>
{
  res.render('index', { title: 'MaesExpress' });
});

module.exports = router;
