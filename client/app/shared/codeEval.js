angular.module('RecallJS')
  .factory('CodeEval', CodeEval);

function CodeEval() {
  return {
    run: run
  };

  function run(problem, code) {
    // getting info from the problem
    var tests = problem.tests;
    var funcName = problem.functionName;

    // creating a function object out of user provided code
    //
    //   NOTE: Some considerations:
    //     - we want a function object so that we can use `eval()` and
    //       reference in our code (this requires slicing off `var myFunc = ...`)
    //     - we want to allow the user to still perform variable assignment
    //       within the function
    //     - inner (nested) functions can still be used
    //     - user cannot declare more than one function in the global scope

    code = code.split("=").slice(1).join("="); // see first two points above
    if (code.slice(-1) === ";") {
      code = code.slice(0,-1);
    }
    var submittedFunc = eval("(" + code + ")");

    // data to track
    var numCorrect = 0;
    var correctDetails = [];
    var incorrectDetails = [];

    // iterate through our tests, using user provided function
    tests.forEach(function(test){
      var args = test.input; // an array of arguments
      var expected = test.output;
      var actual = submittedFunc.apply(null, args);

      // add info about passing/failing test
      if (actual === expected) {
        numCorrect++;
        correctDetails.push(getDetails(funcName, args, expected));
      } else {
        incorrectDetails.push(getDetails(funcName, args, expected, actual));
      }
    });

    return {
        numCorrect: numCorrect,
        numTests: tests.length,
        details: {
          correct: correctDetails,
          incorrect: incorrectDetails
        }
      };
  }

  // TODO: Decide what information we actually want to pass
  // for the details
  function getDetails(funcName, args, expected, actual) {
    if (arguments.length === 3) {
      return "Correct: " + funcName + "(" + args + ")" +
             " === " + expected;
    }
    return "Incorrect: Expected " + funcName + "(" + args + ")" +
           " === " + expected + ", not " + actual;
  }
}