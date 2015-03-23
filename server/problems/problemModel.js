var mongoose = require('mongoose');

var ProblemSchema = new mongoose.Schema({
  title: String,
  prompt: String,
  functionName: String,
  examples: [String],
  tests: Array,
  solution: String,
});

module.exports = mongoose.model('problems', ProblemSchema);