//TODO: Do we need to inject the CodeMirror dependency directly?

angular.module('RecallJS')
  .controller('EditorController', function($scope, LearningAlgo){
    var problem = LearningAlgo.getProblem();

    $scope.title = problem.title;
    $scope.prompt = 'TODO: PUT A PROMPT IN';
    $scope.examples = problem.examples;

    //CodeMirror options set here. For full configuration options see http://codemirror.net/doc/manual.html
    $scope.cmOption = {
      lineWrapping : true,
      lineNumbers: true,
      mode: 'javascript',
      indentUnit: 2,
      theme:'twilight',
    };

    $scope.code = "var " + problem.functionName + " = function(){/*YOUR CODE HERE*/};";

    $scope.testCode = function(){
      console.log("TODO: Here we test the code");
    };

    $scope.submitCode = function(){
      console.log("TODO: Here we submit the code");
    };
  });