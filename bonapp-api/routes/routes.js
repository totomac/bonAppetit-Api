var express = require('express');

var app = express();

app.get('/', function(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('hello world');
});

app.get('/recipes/:recipeId', function(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('Recipe id = ' + req.params.recipeId);
});

app.use(function(req, res, next) {
	es.setHeader('Content-Type', 'text/plain');
    res.send(404, 'ohoh I dont find this ressource');
});

app.listen(8080);