var express = require('express');
var router = express.Router();

var uploader = require('../service/uploader');

/* GET a specific recipe */
router.get('/recipe/:recipeId', function(req, res, next) {
  res.send('respond with a resource');
});

router.put('/recipe/', uploader.upload);

module.exports = router;