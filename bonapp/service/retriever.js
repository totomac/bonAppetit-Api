

exports.load = function(req, res, next) {
	res.render('index', { title: 'Express' });
}