//TODO: Do we need to inject the CodeMirror dependency directly?

angular.module('RecallJS')
  .controller('EditorController', function($scope, LearningAlgo, CodeEval){
    var problem = LearningAlgo.getProblem();

    $scope.title = problem.title;
    $scope.prompt = 'TODO: PUT A PROMPT IN';
    $scope.examples = problem.examples;

    //CodeMirror options set here. For full configuration options see http://codemirror.net/doc/manual.html
    $scope.cmEditor = {
      lineWrapping : true,
      lineNumbers: true,
      mode: 'javascript',
      indentUnit: 2,
      theme:'twilight',
    };

    //Displays solution within a CodeMirror element, but disables focus/editi
    $scope.cmSolution = {
      lineWrapping : true,
      lineNumbers: true,
      mode: 'javascript',
      indentUnit: 2,
      theme:'twilight',
      readOnly: 'nocursor',
    };

    $scope.code = "var " + problem.functionName + " = function(){/*YOUR CODE HERE*/};";

    $scope.testResults = function(){
      // Calls CodeEval factory in order to displays results
      // $scope.code is data-bound to whatever the user edits and can be passed in to CodeEval for evaluation
      var results = CodeEval.run(LearningAlgo.currProblem, $scope.code);
      $scope.numCorrect = results.numCorrect + " of " + results.numTests + " test(s) passed."
      $scope.corrDetails = results.details.correct;
      $scope.incorrDetails = results.details.incorrect;
      // console.log(results);
      // console.log(results.details.correct);
    };

    $scope.submitCode = function(){
      // TODO: Calls testCode factory then displays solutionView
      console.log("Here we submit the code");
    };

    $scope.setRating = function(rating){
      console.log("Here we rate the code");
    }
  });