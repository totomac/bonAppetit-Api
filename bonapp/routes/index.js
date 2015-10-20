var express = require('express');
var router = express.Router();

var retriever = require('../service/retriever');
var uploader = require('../service/uploader');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET a specific recipe */
router.get('/recipe/:recipeId', retriever.load);
router.put('/recipe/save', uploader.upload);


module.exports = router;
