module.exports = function(app){
	app.get('/portwiki', function(res, res){
		res.render('portwiki/portwiki');
	});
}