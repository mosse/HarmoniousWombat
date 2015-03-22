var mongoose = require('mongoose');
var temp = "{\"username\":\"cgrinaldi\",\"password\":\"123\",\"email\":\"email@gmail.com\",\"firstName\":\"Bob\",\"lastName\":\"Dole\",\"problems\":[{\"title\":\"Add Two Numbers\",\"prompt\":\"Create a function that inputs two numbers and outputs their sum.\",\"functionName\":\"addNums\",\"examples\":[\"addNums(10, 2) === 12 // returns true\"],\"attempts\":[{\"timeStarted\":1426273981607,\"timeSubmitted\":1426274101607,\"rating\":1,\"percentTestsPassed\":0.5,\"numRuns\":3},{\"timeStarted\":1426273981607,\"timeSubmitted\":1426274101607,\"rating\":0.5,\"percentTestsPassed\":0.1,\"numRuns\":10}],\"tests\":[{\"input\":[5,3],\"output\":8},{\"input\":[0,4], \"output\":4}]},{\"title\":\"Subtract Two Numbers\",\"prompt\":\"Create a function that inputs two numbers and outputs their difference.\",\"functionName\":\"subtractNums\",\"examples\":[\"subtractNums(10, 2) === 8 // returns true\"],\"attempts\":[{\"timeStarted\":1426273981607,\"timeSubmitted\":1426274101607,\"rating\":0.5,\"percentTestsPassed\":0.5,\"numRuns\":3},{\"timeStarted\":1426273981607,\"timeSubmitted\":1426274101607,\"rating\":1,\"percentTestsPassed\":0.1,\"numRuns\":10}],\"tests\":[{\"input\":[5,3], \"output\":2},{\"input\":[1,9],\"output\":-8}]}]}";

var ProblemSchema = new mongoose.Schema({
  problems: {
    type:Array,
    default: JSON.parse(temp).problems
  }
});

module.exports = mongoose.model('problems', ProblemSchema);