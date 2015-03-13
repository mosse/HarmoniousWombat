var User = require('./userModel.js');
var jwt = require('jwt-simple');

module.exports = function (app) {

  app.post('/login', function(req, res, next){
    var username = req.body.username;
    var password = req.body.password;
    User.findOne({username: username}, function(err, data){
      if (data){
        data.comparePasswords(password, function(isMatch){
          if (isMatch){
            var token = jwt.encode(username, 'secret');
            res.json({token: token, data: data});
            console.log('Logged in:', username);
          } else {
            console.log('Incorrect password:', username);
          }
        });
      } else {
        console.log('Invalid a username:', username);
      }
    });
  });

  app.post('/signup', function(req, res, next){
    var username = req.body.username;
    var password = req.body.password;
    User.findOne({username: username}, function(err, data){
      if (data){
        console.log('Username unavailable:', username);
        next();
      } else {
        var newUser = {
          username: username,
          password: password
        };
        User.create(newUser, function(err){
          if (err){
            console.log('Failed to sign up:', username);
          } else {
            console.log('Signed up:', username);
            var token = jwt.encode(username, 'secret');
            res.json({token: token, data: newUser});
          }
        });
      }
    });
  });

  app.get('/signedin', function(req, res, next){
    next();
  });
};