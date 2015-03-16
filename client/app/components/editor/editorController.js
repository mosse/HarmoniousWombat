angular.module('RecallJS')
  .controller('EditorController', function($scope, LearningAlgo){
    var problem = LearningAlgo.getProblem();

    console.log(problem);

    $scope.title = problem.title;
    $scope.prompt = 'PUT A PROMPT IN';
    var example = problem.examples[0];
    var funcName = problem.functionName;

    CodeMirror(document.body, {
      value: example,
      mode:  "javascript",
      linenumbers: true
    });

    CodeMirror(document.body, {
      value: funcName,
      mode:  "javascript",
      // theme: "solarized",
      linenumbers: true
    });
  });