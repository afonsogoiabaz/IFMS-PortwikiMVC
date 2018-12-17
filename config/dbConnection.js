var mysql = require('mysql');

var connMySQL = function(){
  console.log('conexão com o banco estabelecida');
  return mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'gestao_curso'
  });
}

module.exports = function(){
  console.log("o autoload carregou o módulo de conexão com o banco de dados")
  return connMySQL;
}