var express = require('express');
var router = express.Router();

var retriever = require('../service/retriever');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET a specific recipe */
router.get('/recipe/:recipeId', retriever.load);


module.exports = router;
