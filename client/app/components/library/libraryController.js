angular.module('RecallJS')
  .controller('LibraryController', function($window, $scope, Auth, ProblemData, LearningAlgo){

    ProblemData.getAll()
      .then(function(problems){
        $scope.problems = problems;
      });

    $scope.addProblem = function(problem){
      ProblemData.addOwn(problem)
    };

  });