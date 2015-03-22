angular.module('RecallJS')
  .controller('LibraryController', LibraryController);

function LibraryController($scope, ProblemData){
  ProblemData.getAll()
    .then(function(problems){
      $scope.problems = problems;
    });

  $scope.add = function(problem){
    ProblemData.addOwn(problem);
  };
}