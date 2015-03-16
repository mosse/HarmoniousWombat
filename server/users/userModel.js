var bcrypt   = require('bcrypt-nodejs');
var mongoose = require('mongoose');
var temp = "{\"username\":\"cgrinaldi\",\"password\":\"123\",\"email\":\"email@gmail.com\",\"firstName\":\"Bob\",\"lastName\":\"Dole\",\"problems\":[{\"title\":\"Add Two Numbers\",\"functionName\":\"addNums\",\"examples\":[\"addNums(10, 2) === 12 // returns true\"],\"attempts\":[{\"timeStarted\":1426273981607,\"timeSubmitted\":1426274101607,\"rating\":1,\"percentTestsPassed\":0.5,\"numRuns\":3},{\"timeStarted\":1426273981607,\"timeSubmitted\":1426274101607,\"rating\":0.5,\"percentTestsPassed\":0.1,\"numRuns\":10}],\"tests\":[[\"TEST 1 INPUT\",\"TEST 1 OUTPUT\"],[\"TEST 2 INPUT\",\"TEST 2 OUTPUT\"]]},{\"title\":\"Subtract Two Numbers\",\"functionName\":\"subtractNums\",\"examples\":[\"subtractNums(10, 2) === 8 // returns true\"],\"attempts\":[{\"timeStarted\":1426273981607,\"timeSubmitted\":1426274101607,\"rating\":0.5,\"percentTestsPassed\":0.5,\"numRuns\":3},{\"timeStarted\":1426273981607,\"timeSubmitted\":1426274101607,\"rating\":1,\"percentTestsPassed\":0.1,\"numRuns\":10}],\"tests\":[[\"TEST 1 INPUT\",\"TEST 1 OUTPUT\"],[\"TEST 2 INPUT\",\"TEST 2 OUTPUT\"]]}]}"

var UserSchema = new mongoose.Schema({
  username: String,
  password: String,
  problems: {
    type:Array,
    default: JSON.parse(temp).problems
  }
});

UserSchema.methods.comparePasswords = function (candidatePassword, callback) {
  bcrypt.compare(candidatePassword, this.password, function(err, isMatch){
    callback(isMatch);
  });
};

UserSchema.pre('save', function (next) {
  var newUser = this;
  bcrypt.hash(this.password, null, null, function(err, hash){
    if (err){
      console.log(err);
    } else {
      newUser.password = hash;
      next();
    }
  });
});

module.exports = mongoose.model('users', UserSchema);
