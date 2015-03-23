var bcrypt   = require('bcrypt-nodejs');
var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  username: String,
  password: String,
  problems: [{
    title: String,
    prompt: String,
    functionName: String,
    examples: [String],
    tests: Array,
    solution: String,
    attempts: [{
      timeSubmitted:Number,
      rating: Number,
      percentTestsPassed: Number,
      timeStarted: Number,
      numRuns: Number,
    }],
  }],
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
      newUser.problems = [
        {
          title: "fizzBuzz", prompt: "You know what to do...",
          functionName: "fizzBuzz",
          examples: [
            "fizzBuzz(3) === '1 2 FIZZ'",
            "fizzBuzz(5) === '1 2 FIZZ 4 BUZZ'"
          ],
          tests: [
            {input: [3], output: '1 2 FIZZ'},
            {input: [5], output: '1 2 FIZZ 4 BUZZ'}
          ],
          solution: 'var fizzBuzz = function(n){\n' +
              '  var result = "";\n' +
              '\n' +
              '  for (var i = 1; i <= n; i++) {\n' +
              '    if (i % 5 === 0 && i % 3 === 0) {\n' +
              '      result += "FIZZBUZZ ";\n' +
              '    } else if (i % 3 === 0) {\n' +
              '      result += "FIZZ ";\n' +
              '    } else if (i % 5 === 0) {\n' +
              '      result += "BUZZ ";\n' +
              '    } else {\n' +
              '      result += i + " ";\n' +
              '    }\n' +
              '  }\n' +

              '  return result.slice(0,-1);\n' +
              '};'
        }
      ]
      next();
    }
  });
});

module.exports = mongoose.model('users', UserSchema);
