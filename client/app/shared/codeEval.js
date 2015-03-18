angular.module('RecallJS')
  .factory('CodeEval', CodeEval);

function CodeEval() {
  return {
    run: run
  };

  function run(problem, code) {
    // getting info from the problem
    var tests = problem.tests;

    // creating a function object out of user provided code
    code = code.split("=")[1];
    if (code.slice(-1) === ";") { // removing semicolon if present
      code = code.slice(0,-1);
    }
    var submittedFunc = eval("(" + code + ")");

    // iterate through our tests, using user provided function
    var numCorrect = 0;
    tests.forEach(function(test){
      var args = test.input; // an array of arguments
      var expected = test.output;
      var actual = submittedFunc.apply(null, args);

      // increment number correct based on passing test
      if (actual === expected) {
        numCorrect++;
      }
    });
    return {numCorrect: numCorrect};
  }
}