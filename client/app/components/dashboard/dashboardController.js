angular.module('RecallJS')
  .controller('DashboardController', function($window, $scope, Auth, ProblemData){

    ProblemData.getOwn()
      .then(function(problems){
        $scope.problems = problems;
      });
  });