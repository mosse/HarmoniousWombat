var Problem = require('./problemModel');
var User = require('../users/userModel');

module.exports = function (app) {
  app.post('/addOwn', function(req, res, next){
    User.findOne({username:req.body.username}, function(err, data){
      data.problems.push(req.body.problem);
      data.save(data);
      res.send();
    });
  });

  app.post('/removeOwn', function(req, res, next){
      // WIP
    next();
  });

  app.post('/create', function(req, res, next){
    Problem.create(req.body, function(err){
      if (!err){
        res.send();
      }
    });
  });

  app.get('/getAll', function(req, res){
    Problem.find({}, function(err, data){
      res.send(data);
    });
  });

  app.get('/getOwn/:username', function(req, res, next){
    User.findOne({username: req.params.username}, function(err, data){
      res.send(data.problems);
    });
  });
};