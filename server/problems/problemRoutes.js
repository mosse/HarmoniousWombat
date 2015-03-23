var Problem = require('./problemModel');
var User = require('../users/userModel');

module.exports = function (app) {
  app.post('/addOwn', function(req, res){
    User.findOne({username:req.body.username}, function(err, data){
      var wasFound = false;
      data.problems.forEach(function(prob){
        if (prob._id.toString() === req.body.problem._id) wasFound = true;
      });
      if (!wasFound) data.problems.push(req.body.problem);
      data.update({problems: data.problems}, function(err){
        res.send(data);
      });
    });
  });

  app.post('/removeOwn', function(req, res){
    User.findOne({username:req.body.username}, function(err, data){
      data.problems.pull(req.body.problem._id);
      data.update({problems: data.problems}, function(err){
        res.send(data);
      });
    });
  });

  app.post('/create', function(req, res){
    Problem.create(req.body, function(err, data){
      res.send();
    });
  });

  app.get('/getAll', function(req, res){
    Problem.find({}, function(err, data){
      res.send(data);
    });
  });

  app.get('/getOwn/:username', function(req, res){
    User.findOne({username: req.params.username}, function(err, data){
      res.send(data);
    });
  });
};