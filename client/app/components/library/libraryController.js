angular.module('RecallJS')
  .controller('LibraryController', function($window, $scope, Auth, ProblemData, LearningAlgo){

    ProblemData.getAll()
      .then(function(problems){
        $scope.problems = problems;
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

    $scope.username = JSON.parse($window.localStorage.getItem('com.recalljs')).username;
  });