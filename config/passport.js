var LocalStrategy = require('passport-local').Strategy;
var connection = app.config.dbConnection();
var portwikiModel = new app.app.models.portwikiDAO(connection);
portwikiModel.alguma coisa = function(error, result);

passport.use('local-login', new LocalStrategy({
  usernameField: 'cpf',
  passwordField: 'senha',
  passReqToCallback: true
},
function(req, cpf, done){
  user.findOne({'local.cpf': cpf}, function(err, user){
    if(err)
  })
}
)
)