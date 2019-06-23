var myApp = angular.module('myApp', []);
myApp.controller('inventoryController', ['$scope', '$http', function($scope, $http) {

  $scope.orders = {};

  //Update the inventory with the entered values
  $scope.placeOrder = function() {

    if($scope.orders.redquantity != 0)
    {
      //post http to send the json data to api
      var res = $http.post('http://376da04e.ngrok.io/api/products/update/1',{ "quantity":$scope.orders.redquantity});
      res.success(function(data, status, headers, config) {
        $scope.message = data;

      });
      res.error(function(data, status, headers, config) {
        alert( "failure message: " + JSON.stringify({data: data}));
      });
    }
    if($scope.orders.greenquantity != 0)
    {
      //post http to send the json data to api
      var res = $http.post('http://376da04e.ngrok.io/api/products/update/2', {"quantity": $scope.orders.greenquantity});
      res.success(function(data, status, headers, config) {
        $scope.message = data;

      });
      res.error(function(data, status, headers, config) {
        alert( "failure message: " + JSON.stringify({data: data}));
      });
    }
    if($scope.orders.bluequantity != 0)
    {
      //post http to send the json data to api
      var res = $http.post('http://376da04e.ngrok.io/api/products/update/3', {"quantity":$scope.orders.bluequantity});
      res.success(function(data, status, headers, config) {
        $scope.message = data;

      });
      res.error(function(data, status, headers, config) {
        alert( "failure message: " + JSON.stringify({data: data}));
      });
    }
    if($scope.orders.blackquantity != 0)
    {
      //post http to send the json data to api
      var res = $http.post('http://376da04e.ngrok.io/api/products/update/4', {"quantity":$scope.orders.blackquantity});
      res.success(function(data, status, headers, config) {
        $scope.message = data;

      });
      res.error(function(data, status, headers, config) {
        alert( "failure message: " + JSON.stringify({data: data}));
      });
    }
    if($scope.orders.yellowquantity != 0)
    {
      //post http to send the json data to api
      var res = $http.post('http://376da04e.ngrok.io/api/products/update/5', {"quantity":$scope.orders.yellowquantity});
      res.success(function(data, status, headers, config) {
        $scope.message = data;

      });
      res.error(function(data, status, headers, config) {
        alert( "failure message: " + JSON.stringify({data: data}));
      });
    }
    if($scope.orders.whitequantity != 0)
    {
      //post http to send the json data to api
      var res = $http.post('http://376da04e.ngrok.io/api/products/update/6', {"quantity":$scope.orders.whitequantity});
      res.success(function(data, status, headers, config) {
        $scope.message = data;

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

// this function retrieves the quantity of items from inventory

  $scope.viewInventory = function(){

    var res = $http.post('http://376da04e.ngrok.io/api/products/view', {"":""});
    res.success(function(data, status, headers, config) {
      $scope.quantity = data;
      $scope.orders.redquantity = $scope.quantity.products[0].qtyInStock;
       $scope.orders.greenquantity = $scope.quantity.products[1].qtyInStock;
       $scope.orders.bluequantity = $scope.quantity.products[2].qtyInStock ;
       $scope.orders.blackquantity = $scope.quantity.products[3].qtyInStock;
       $scope.orders.whitequantity = $scope.quantity.products[4].qtyInStock;
       $scope.orders.yellowquantity = $scope.quantity.products[5].qtyInStock;

    });
    res.error(function(data, status, headers, config) {
      alert( "failure message: " + JSON.stringify({data: data}));
    });


  }



}]);
