function PortwikiDAO(connection){
  this._connection = connection;
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