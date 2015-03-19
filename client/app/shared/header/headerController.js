angular.module('RecallJS')
  .controller('HeaderController', HeaderController);

// controller will change the active class on
// correct link in the navigation
function HeaderController($scope, $location, Auth){
  $scope.isActive = function(viewLocation) {
    return viewLocation === $location.path();
  };

  $scope.isLoggedIn = function() {
    return Auth.isAuth();
  };

  $scope.logout = Auth.signout;
}