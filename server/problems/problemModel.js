var mongoose = require('mongoose');

var ProblemSchema = new mongoose.Schema({
  title: String,
  prompt: String,
  funcName: String,
  soln: String,
  examples: [String],
  tests: Array,
  solution: String,
});

module.exports = mongoose.model('problems', ProblemSchema);