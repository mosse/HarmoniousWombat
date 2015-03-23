angular.module('RecallJS')
  .controller('LibraryController', function($window, $scope, Auth, ProblemData, LearningAlgo){

    ProblemData.getOwn()
      .then(function(problems){
        $scope.problems = problems;
      });

    $scope.addProblem = function(problem){

      //TODO needs to add to Dashboard
      ProblemData.removeOwn(problem)
        .then(function(){
          ProblemData.getOwn()
            .then(function(problems){
              $scope.problems = problems;
            });
        });
    };

    $scope.username = "TODO: Replace with actual username";
  });