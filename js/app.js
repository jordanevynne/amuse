var amuseApp = angular.module('amuse', ['ngRoute']);

amuseApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
    when('/landing', {
      templateUrl: 'views/landing.html',
      controller: 'LandingCtrl'
    }).
    when('/login', {
      templateUrl: 'views/login.html',
      controller: 'RegisterCtrl'
    }).
    when('/register' {
      templateUrl: 'views/registration.html',
      controller: 'RegisterCtrl'
    }).
    otherwise({
      redirectTo: '/login'
  });
}]);