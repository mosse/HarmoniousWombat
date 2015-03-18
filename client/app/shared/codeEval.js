angular.module('RecallJS')
  .factory('CodeEval', CodeEval);

function CodeEval() {
  return {
    run: run
  };

  function run(tests, code) {
    // creating a function object out of user provided code
    code = code.split("=")[1];
    if (code.slice(-1) === ";") { // removing semicolon if present
      code = code.slice(0,-1);
    }
    var submittedFunc = eval("(" + code + ")");
    console.log(submittedFunc);
  }
}