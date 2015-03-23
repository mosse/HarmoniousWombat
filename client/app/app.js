angular.module('RecallJS', ['ngRoute', 'ui.bootstrap', 'ui.codemirror'])

  .config(function($routeProvider, $httpProvider){
    $routeProvider
      .when('/', {
        templateUrl: 'app/components/home/views/homeView.html',
        controller: 'HomeController',
        authenticate: false
      })
      .when('/login', {
        templateUrl: 'app/components/home/views/loginView.html',
        controller: 'HomeController',
        authenticate: false
      })
      .when('/signup', {
        templateUrl: 'app/components/home/views/signupView.html',
        controller: 'HomeController',
        authenticate: false
      })
      .when('/dashboard', {
        templateUrl: 'app/components/dashboard/dashboardView.html',
        controller: 'DashboardController',
        authenticate: true
      })
      .when('/editor', {
        templateUrl: 'app/components/editor/editorView.html',
        controller: 'EditorController',
        authenticate: true
      })
      .when('/library', {
        templateUrl: 'app/components/library/libraryView.html',
        controller: 'LibraryController',
        authenticate: true
      })
      .when('/create', {
        templateUrl: 'app/components/create/createView.html',
        controller: 'CreateController',
        authenticate: true
      });
    $httpProvider.interceptors.push('AttachTokens');
  })
  .factory('AttachTokens', function ($window) {
    var attach = {
      request: function (object) {
        var jwt = $window.localStorage.getItem('com.recalljs');
        if (jwt) {
          object.headers['x-access-token'] = jwt;
        }
        object.headers['Allow-Control-Allow-Origin'] = '*';
        return object;
      }
    };
    return attach;
  })
  .run(function ($rootScope, $location, Auth) {
    $rootScope.$on('$routeChangeStart', function (evt, next, current) {
      if (next.$$route && next.$$route.authenticate && !Auth.isAuth()) {
        $location.path('/login');
      }
    });
  });
