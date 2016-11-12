var amuseApp = angular.module('amuse', []);

amuseApp.controller('appController', ['$scope', function($scope) {
  $scope.message = "Welcome!";
}])