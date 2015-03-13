angular.module('RecallJS')
  .controller('HomeController', HomeController);

function HomeController($scope, $window, $location, Auth, UserData){

  $scope.user = {};
  $scope.error = undefined;

  $scope.login = function () {
    $scope.error = undefined;
    Auth.login($scope.user)
      .then(function (data) {
        $window.localStorage.setItem('com.recalljs', data.token);
        UserData.data = data.data;
        $location.path('/dashboard');
      })
      .catch(function (error) {
        $scope.error = error.data.error;
      });
  };

  $scope.signup = function () {
    $scope.error = undefined;
    Auth.signup($scope.user)
      .then(function (data) {
        $window.localStorage.setItem('com.recalljs', data.token);
        UserData.data = data.data;
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
