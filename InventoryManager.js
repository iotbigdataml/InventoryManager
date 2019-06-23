var myApp = angular.module('myApp', []);
myApp.controller('inventoryController', ['$scope', '$http', function($scope, $http) {

  $scope.orders = {};

  //Update the inventory with the entered values
  $scope.placeOrder = function() {

    if($scope.orders.redquantity != 0)
    {
      //post http to send the json data to api
      var res = $http.post('http://376da04e.ngrok.io/api/products/update/1', $scope.orders.redquantity);
      res.success(function(data, status, headers, config) {
        $scope.message = data;
        alert($scope.message);
      });
      res.error(function(data, status, headers, config) {
        alert( "failure message: " + JSON.stringify({data: data}));
      });
    }
    if($scope.orders.greenquantity != 0)
    {
      //post http to send the json data to api
      var res = $http.post('http://376da04e.ngrok.io/api/products/update/2', $scope.orders.greenquantity);
      res.success(function(data, status, headers, config) {
        $scope.message = data;
        alert($scope.message);
      });
      res.error(function(data, status, headers, config) {
        alert( "failure message: " + JSON.stringify({data: data}));
      });
    }
    if($scope.orders.bluequantity != 0)
    {
      //post http to send the json data to api
      var res = $http.post('http://376da04e.ngrok.io/api/products/update/3', $scope.orders.bluequantity);
      res.success(function(data, status, headers, config) {
        $scope.message = data;
        alert($scope.message);
      });
      res.error(function(data, status, headers, config) {
        alert( "failure message: " + JSON.stringify({data: data}));
      });
    }
    if($scope.orders.blackquantity != 0)
    {
      //post http to send the json data to api
      var res = $http.post('http://376da04e.ngrok.io/api/products/update/4', $scope.orders.blackquantity);
      res.success(function(data, status, headers, config) {
        $scope.message = data;
        alert($scope.message);
      });
      res.error(function(data, status, headers, config) {
        alert( "failure message: " + JSON.stringify({data: data}));
      });
    }
    if($scope.orders.yellowquantity != 0)
    {
      //post http to send the json data to api
      var res = $http.post('http://376da04e.ngrok.io/api/products/update/5', $scope.orders.yellowquantity);
      res.success(function(data, status, headers, config) {
        $scope.message = data;
        alert($scope.message);
      });
      res.error(function(data, status, headers, config) {
        alert( "failure message: " + JSON.stringify({data: data}));
      });
    }
    if($scope.orders.whitequantity != 0)
    {
      //post http to send the json data to api
      var res = $http.post('http://376da04e.ngrok.io/api/products/update/6', $scope.orders.whitequantity);
      res.success(function(data, status, headers, config) {
        $scope.message = data;
        alert($scope.message);
      });
      res.error(function(data, status, headers, config) {
        alert( "failure message: " + JSON.stringify({data: data}));
      });
    }







    $scope.orders.redquantity = 0;
     $scope.orders.greenquantity = 0;
     $scope.orders.bluequantity = 0 ;
     $scope.orders.blackquantity = 0;
     $scope.orders.whitequantity = 0;
     $scope.orders.yellowquantity = 0;

  };



}]);
