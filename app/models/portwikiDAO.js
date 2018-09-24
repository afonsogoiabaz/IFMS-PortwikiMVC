function PortwikiDAO(connection){
  this._connection = connection;
}

PortwikiDAO.prototype.salvarUsuario = function(usuario, callback){
  this._connection.query('insert into usuario set ? ', usuario, callback)
}

module.exports = function(){
  return PortwikiDAO;
} 