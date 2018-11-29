module.exports = function(app){
	app.get('/form_cadastro_user', function(req, res){
		app.app.controllers.admin.form_cadastro_user(app, req, res);
	});

	app.post('/portwiki/salvar', function(req, res){
		app.app.controllers.admin.portwiki_salvar(app, req, res);
	});

	app.get('/portwiki', function(req, res){
		app.app.controllers.admin.portwiki(app, req, res);
	});


	app.get('/curso_html', function(req, res){
		app.app.controllers.admin.curso_html(app, req, res);
	});
}