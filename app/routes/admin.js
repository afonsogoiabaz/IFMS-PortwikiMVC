module.exports = function(app){
	app.get('/form_cadastro_user', function(req, res){
		res.render('admin/form_cadastro_user', {validacao:{}, usuario:{}});
	});

	app.post('/portwiki/salvar', function(req, res){
		var usuario = req.body;

		req.assert('nome_completo', 'Você deve inserir seu nome completo.').notEmpty();
		req.assert('email', 'Digite o email corretamente.').notEmpty();
		req.assert('cpf', 'Digite os 11 números obrigatórios do CPF.').len(11);
		req.assert('senha', 'Digite uma senha de 6 a 8 caracteres.').len(6,8);
		var erros = req.validationErrors();
		console.log(erros);

		if(erros){
			res.render("admin/form_cadastro_user", {validacao : erros, usuario : usuario});
			return;
		}

		var connection = app.config.dbConnection();
		var portwikiModel = new app.app.models.portwikiDAO(connection);

		portwikiModel.salvarUsuario(usuario, function(error, result){
			res.redirect('/portwiki');
		});
	});
}