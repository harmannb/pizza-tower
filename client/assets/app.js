var anguapp = angular.module('angularApp',['ngRoute','ui.bootstrap']);
anguapp.config(function($routeProvider){
  $routeProvider
    .when('/gamepage',{
      templateUrl : 'partials/game.html',
      controller : 'gameCtrl'
    })
 });
