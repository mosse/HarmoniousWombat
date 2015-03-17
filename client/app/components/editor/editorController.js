//TODO: Do we need to inject the CodeMirror dependency directly?

angular.module('RecallJS')
  .controller('EditorController', function($scope, LearningAlgo){
    var problem = LearningAlgo.getProblem();

    console.log(problem);

    $scope.title = problem.title;
    $scope.prompt = 'PUT A PROMPT IN';
    $scope.examples = problem.examples;
    $scope.funcDeclaration = "var " + problem.functionName + " = function(){/*YOUR CODE HERE*/};";

    // CodeMirror.fromTextArea(editor);
  // var editor = document.getElementByName("editor");
  // CodeMirror.fromTextArea(editor);
  console.log('success?');
  });