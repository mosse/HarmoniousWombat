angular.module('RecallJS')
  .controller('LibraryController', LibraryController);

function LibraryController($scope, ProblemData){
  ProblemData.getAll()
    .then(function(problems){
      $scope.problems = problems;
    });

  // ProblemData.addOwn(TheProblem);

  // ProblemData.removeOwn(TheProblem);

}