angular.module('RecallJS')
  .controller('LibraryController', function($window, $scope, Auth, ProblemData, LearningAlgo){

    ProblemData.getOwn()
      .then(function(problems){
        $scope.problems = problems;
        console.log(problems);
      });

    $scope.addProblem = function(problem){

      //TODO needs to add to Dashboard
      ProblemData.addOwn(problem)
        .then(function(){
          ProblemData.getOwn()
            .then(function(problems){
              $scope.problems = problems;
            });
        });
    };

    $scope.username = "TODO: Replace with actual username";
  });