angular.module('RecallJS')
  .controller('HomeController', HomeController);

function HomeController($scope, $window, $location, Auth){

  $scope.user = {};
  $scope.error = undefined;

  $scope.login = function () {
    $scope.error = undefined;
    Auth.login($scope.user)
      .then(function (token) {
        $window.localStorage.setItem('com.recalljs', token);
        $location.path('/dashboard');
      })
      .catch(function (error) {
        $scope.error = error.data.error;
      });
  };

  $scope.signup = function () {
    $scope.error = undefined;
    Auth.signup($scope.user)
      .then(function (token) {
        $window.localStorage.setItem('com.recalljs', token);
        $location.path('/dashboard');
      })
      .catch(function (error) {
        $scope.error = error.data.error;
      });
  };

  $scope.logout = function(){
    Auth.signout();
  };
};
