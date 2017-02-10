var express = require('express');
var router = express.Router();
const isLoggedIn = require("./middelware").isLoggedIn;
router.route('/').get(isLoggedIn, (req,res) => 
{
  res.render('user', { title: 'MaesExpress' });
});
module.exports = router;