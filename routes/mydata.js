var express = require('express');
var router = express.Router();
var arl=0;
/* GET home page. */
router.get('/', function(req, res, next) {
arl=arl+1;
  res.render('mydata', { title: 'prasanna aarla' });
});

module.exports = router;
