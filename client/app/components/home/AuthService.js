angular.module('RecallJS')
  .factory('Auth', Auth);

function Auth($http, $location, $window){

  return {
    login: login,
    signup: signup,
    isAuth: isAuth,
    signout: signout
  };

  function login(user) {
    return $http({
      method: 'POST',
      url: '/users/login',
      data: user
    })
    .then(function (resp) {
      return resp.data;
    });
  }

  function signup(user) {
    return $http({
      method: 'POST',
      url: '/users/signup',
      data: user
    })
    .then(function (resp) {
      return resp.data;
    });
  }

  function isAuth() {
    return !!$window.localStorage.getItem('com.recalljs');
  }

  function signout() {
    $window.localStorage.removeItem('com.recalljs');
    $location.path('/login');
  }
}

