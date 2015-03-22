angular.module('RecallJS')
  .controller('DashboardController', function($window, $scope, Auth, ProblemData, LearningAlgo){

    ProblemData.getOwn()
      .then(function(problems){
        $scope.problems = problems;
      });

    $scope.remove = function(problem){
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