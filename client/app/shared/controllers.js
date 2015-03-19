angular.module('RecallJS')
  .controller('HeaderController', HeaderController);

// controller will change the active class on
// correct link in the navigation
function HeaderController($scope, $location){
  $scope.isActive = function(viewLocation) {
    return viewLocation === $location.path();
  };
}