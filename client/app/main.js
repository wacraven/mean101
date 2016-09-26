'use strict'

angular
  .module('mean101', [])
  .controller('main', function ($scope, $http) {
    // $scope.title = "Hello World"
    $http.get('http://localhost:3000/api/title').then((res) => $scope.title = res.data.title)
  })
