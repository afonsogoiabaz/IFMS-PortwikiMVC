module.exports = function(app){
	app.get('/form_cadastro_user', function(req, res){
		res.render('admin/form_cadastro_user');
	});
}