angular.module('RecallJS')
  .controller('DashboardController', function($scope, Auth, ProblemData){
    $scope.logout = Auth.signout;


    ProblemData.getOwn()
      .then(function(problems){
        $scope.problems = problems;
      });
  });