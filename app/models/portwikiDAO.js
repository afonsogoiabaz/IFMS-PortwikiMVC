function PortwikiDAO(connection){
  this._connection = connection;
}

PortwikiDAO.prototype.getCurso = function(callback){
	this._connection.query('select * from curso where id_curso = 1', callback);
}

PortwikiDAO.prototype.getAula = function(callback){
	this._connection.query('select * from aula where numero_aula = 0', callback);
}
PortwikiDAO.prototype.getAula_curso = function(id_aula,callback){
	this._connection.query('select * from aula,curso,usuario,inscricao_curso  where aula.curso_aula = curso.id_curso and  inscricao_curso.usuario_inscricao_curso = usuario.id_usuario and inscricao_curso.curso_inscricao =  curso.id_curso and  aula.id_aula = ?',id_aula ,callback);
}

PortwikiDAO.prototype.salvarUsuario = function(usuario, callback){
  this._connection.query('insert into usuario set ? ', usuario, callback)
}

PortwikiDAO.prototype.entrar = function(cpf, senha, callback){
  this._connection.query('select*from usuario where cpf = "'+cpf+'" and senha = "'+senha+'"', callback);
}

module.exports = function(){
  return PortwikiDAO;
} 