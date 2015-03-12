var GithubStrategy = require('passport-github').Strategy;
var passport = require('passport');
var express = require('express');
var app = express();

app.use(express.static(__dirname+'/../client'));
app.use(passport.initialize());
app.use(passport.session());

app.get('/auth/github', passport.authenticate('github'), function(){});
app.get('/auth/github/callback', passport.authenticate('github', {failureRedirect: '/login'}), function(req, res){
  res.send('GG You logged in as '+req.user.username);
});

// Passport stuff
passport.serializeUser(function(user, done) {
  done(null, user);
});
passport.deserializeUser(function(user, done) {
  done(null, user);
});

var keys = {
   clientID: '903ed8604ac9187b6eec',
   clientSecret: 'c583efccacfd2d75b1b428efc9531496b86040d2',
   callbackURL: 'http://localhost:9000/auth/github/callback'
};

passport.use(new GithubStrategy(keys, function(accessToken, refreshToken, profile, done) {
  done(null, profile);
}));

module.exports = app;