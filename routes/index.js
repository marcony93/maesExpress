var express = require('express');
var router = express.Router();
const isLoggedInBloq = require("./middelware").isLoggedInBloq;
router.route('/').get(isLoggedInBloq, (req,res) => 
{
  res.render('index', { title: 'MaesExpress' });
});

module.exports = router;
