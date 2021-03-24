var express = require('express');
var router = express.Router();
var arla=0;
/* GET users listing. */
router.get('/', function(req, res, next) {
  arla=arla+1;
  res.send('“User accesses are: '+arla);
});

module.exports = router;
