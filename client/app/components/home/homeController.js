angular.module('RecallJS')
  .controller('HomeController', HomeController);

function HomeController($scope, $window, $location, Auth){

  $scope.user = {};
  $scope.error = undefined;

  $scope.login = function () {
    $scope.error = undefined;
    Auth.login($scope.user)
      .then(function (data) {
        $window.localStorage.setItem('com.recalljs', JSON.stringify(data.data));
        $location.path('/dashboard');
      })
      .catch(function (error) {
        $scope.error = error.data;
      });
  };

  $scope.signup = function () {
    $scope.error = undefined;
    Auth.signup($scope.user)
      .then(function (data) {
        $window.localStorage.setItem('com.recalljs', JSON.stringify(data.data));
        $location.path('/dashboard');
      })
      .catch(function (error) {
        $scope.error = error.data;
      });
  };

  $scope.logout = function(){
    Auth.signout();
  };
};
