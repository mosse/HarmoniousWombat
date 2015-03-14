angular.module('RecallJS')
  .controller('EditorController', function($scope, LearningAlgo){
    var problems = LearningAlgo.getProblems();

    console.log(problems);

    $scope.title = problems[0].title;
    $scope.prompt = 'PUT A PROMPT IN';
    var example = problems[0].examples[0];
    var funcName = problems[0].functionName;

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