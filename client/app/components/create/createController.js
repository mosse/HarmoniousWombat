angular.module('RecallJS')
  .controller('CreateController', function($scope){
    $scope.tests = [
      {input: [1,2,3], output: 6},
      {input: [8,1,3], output: 10},
      {input: [6,3,2], output: 99}
    ];

    $scope.examples = [
      'myFunc(1,2,3) === 10',
      'myFunc(293, 2093, 0) === 0'
    ];

    $scope.addExample = function(example) {
      // only want to add an example if it is unique
      var idx = $scope.examples.indexOf(example);
      if (idx === -1) {
        $scope.examples.push(example);
      }
    };

    $scope.removeExample = function(example) {
      var idx = $scope.examples.indexOf(example);
      $scope.examples.splice(idx, 1);
    };
  });