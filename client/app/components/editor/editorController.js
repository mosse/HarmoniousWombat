angular.module('RecallJS')
  .controller('EditorController', function($scope, LearningAlgo){
    var problem = LearningAlgo.getProblem();

    console.log(problem);

    $scope.title = problem.title;
    $scope.prompt = 'PUT A PROMPT IN';
    $scope.examples = problem.examples;
    var funcName = problem.functionName;

    CodeMirror(document.body, {
      value: "var " + funcName + "(){};",
      mode:  "javascript"
    });
  });