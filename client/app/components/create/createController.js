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
      $scope.examples.push(example);
    };
  });