angular.module('RecallJS')
  .factory('CodeEval', CodeEval);

function CodeEval() {
  return {
    run: run
  };

  function run(tests, code) {
    console.log('tests are', tests, 'code is', code);
  }
}