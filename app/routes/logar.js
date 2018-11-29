module.exports=function(app){
	app.get('/form_login_user', function(req, res){
		app.app.controllers.logar.formulario_login(app, req, res);
	});
	app.post('/logar/entrar', function(req, res){
		app.app.controllers.logar.logar_entrar(app,req,res);
	})
}