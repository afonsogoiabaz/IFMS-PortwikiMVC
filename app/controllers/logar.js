module.exports.formulario_login= function(app,req,res){
	res.render("admin/form_login_user", {validacao:{}, logar:{}});
}

module.exports.logar_entrar=function(app, req, res){
	var connection = app.config.dbConnection();
	var logModel = new app.app.models.portwikiDAO(connection);

	logModel.entrar(req.body.cpf,req.body.senha,function(error,result){
		if(result.length==0){
			res.redirect('/form_login_user');
		}else{
			res.redirect('/portwiki');
		}
	})
}