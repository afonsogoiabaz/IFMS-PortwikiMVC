module.exports.form_cadastro_user = function(app, req, res){
  res.render("admin/form_cadastro_user", {validacao:{}, usuario:{}});
}

module.exports.form_login_user = function(app, req, res){
  res.render("admin/form_login_user");
}

module.exports.portwiki = function(app, req, res){
  res.render("portwiki/portwiki");
}

module.exports.portwiki_salvar = function(app, req, res){
  var usuario = req.body;

  req.assert('nome_completo', 'Você deve inserir seu nome completo.').notEmpty();
  req.assert('email', 'Digite o email corretamente.').notEmpty();
  req.assert('cpf', 'Digite os 11 números obrigatórios do CPF.').len(11);
  req.assert('senha', 'Digite uma senha de 6 a 8 caracteres.').len(6,8);
  var erros = req.validationErrors();
  
  if(erros){
    res.render("admin/form_cadastro_user", {validacao : erros, usuario : usuario});
    return;
  }
  
  var connection = app.config.dbConnection();
	var portwikiModel = new app.app.models.portwikiDAO(connection);

	portwikiModel.salvarUsuario(usuario, function(error, result){
	res.redirect('/portwiki');
	});
}