var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) =>
{
  res.render('user');
});

module.exports = router;
var express = require('express');
var router = express.Router();
const isLoggedIn = require("./middelware").isLoggedIn;
router.route('/').get(isLoggedIn, (req,res) => 
{
  res.render('user', { title: 'MaesExpress' });
});
module.exports = router;