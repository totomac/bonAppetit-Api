var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/recipe/:recipeId', function(req, res, next) {
  res.send('respond with a resource');
});

router.put('/recipe/', function(req, res, next) {
	res.send('coucou');
})

module.exports = router;