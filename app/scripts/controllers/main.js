'use strict';

/**
 * @ngdoc function
 * @name moviesSearchEngineApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the moviesSearchEngineApp
 */
angular.module('moviesSearchEngineApp')
  .controller('MainCtrl', function($scope, $http) {

    $scope.search = "The Avengers";

    // $scope.data = "";
    $scope.change = function() {
      $http.get('http://www.omdbapi.com/?t=' + $scope.search).success(function(data) {
        $scope.data = data;
      	console.log($scope.data);
      });
    };

    $scope.change();


  });
