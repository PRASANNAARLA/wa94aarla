var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    let praRandom=Math.floor(Math.random()*100)
  res.render('compute', {result:'tanh function applied to '+praRandom+' is '+ Math.tanh(praRandom)});
});

module.exports = router;