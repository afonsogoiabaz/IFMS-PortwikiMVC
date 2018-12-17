module.exports.form_cadastro_user = function(app, req, res){
  res.render("admin/form_cadastro_user", {validacao:{}, usuario:{}});
}


module.exports.portwiki = function(app, req, res){

  var connection = app.config.dbConnection();
  var portwikiModel = new app.app.models.portwikiDAO(connection);

  portwikiModel.getCurso(function(error, result){
    res.render("portwiki/portwiki", {curso: result});
  });
}

module.exports.portwiki_salvar = function(app, req, res){
  var usuario = req.body;

  req.assert('nome', 'Você deve inserir seu nome.').notEmpty();
  req.assert('sobrenome', 'Você deve inserir seu sobrenome').notEmpty();
  req.assert('email', 'Digite o email corretamente.').notEmpty();
  req.assert('desc_usuario', 'Digite uma biografia de até 100 caracteres').notEmpty();
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
	res.redirect('/form_login_user');
	});
}

module.exports.curso_html = function(app, req, res){

  var connection = app.config.dbConnection();
  var portwikiModel = new app.app.models.portwikiDAO(connection);

  portwikiModel.getAula(function(error, result){
    res.render("cursos/curso_html", {aula: result});
  });
}


module.exports.aula =  function(app,req,res){
  var connection = app.config.dbConnection();
  var portwikiModel = new app.app.models.portwikiDAO(connection);

  portwikiModel.getAula_curso(req.params.id_video,function(error, result){
    res.render("cursos/curso_html", {aula: result});
  });
}