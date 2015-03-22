module.exports = function (app) {
  app.get('/problems', function(req, res, next){
    next();
  });

  app.post('/problems', function(req, res, next){
    next();
  });
};