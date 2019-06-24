var myApp = angular.module('myApp', []);
myApp.controller('inventoryController', ['$scope', '$http', function($scope, $http) {


//   $http({
//   method: 'GET',
//   url: 'http://127.0.0.1:8081/url.txt'
// }).then(function successCallback(response) {
//
//   $scope.urlobj = response.data;
//
// }, function errorCallback(response) {
//
//   alert("Error. Try Again!");
//
// })

  $scope.orders = {};

  //Update the inventory with the entered values
  $scope.placeOrder = function() {

    if($scope.orders.redquantity != 0)
    {
      //post http to send the json data to api
      var res = $http.post('http://ec2-35-170-187-70.compute-1.amazonaws.com:3000/api/products/update/1',{ "quantity":$scope.orders.redquantity});
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
      var res = $http.post('http://ec2-35-170-187-70.compute-1.amazonaws.com:3000/api/products/update/2', {"quantity": $scope.orders.greenquantity});
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
      var res = $http.post('http://ec2-35-170-187-70.compute-1.amazonaws.com:3000/api/products/update/3', {"quantity":$scope.orders.bluequantity});
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
      var res = $http.post('http://ec2-35-170-187-70.compute-1.amazonaws.com:3000/api/products/update/4', {"quantity":$scope.orders.blackquantity});
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
      var res = $http.post('http://ec2-35-170-187-70.compute-1.amazonaws.com:3000/api/products/update/5', {"quantity":$scope.orders.yellowquantity});
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
      var res = $http.post('http://ec2-35-170-187-70.compute-1.amazonaws.com:3000/api/products/update/6', {"quantity":$scope.orders.whitequantity});
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

setInterval(function(){
  var res = $http.post('http://ec2-35-170-187-70.compute-1.amazonaws.com:3000/api/products/view', {"":""});
  res.success(function(data, status, headers, config) {
    $scope.quantity = data;
    $scope.orders.red = $scope.quantity.products[0].qtyInStock;
     $scope.orders.green = $scope.quantity.products[1].qtyInStock;
     $scope.orders.blue = $scope.quantity.products[2].qtyInStock ;
     $scope.orders.black = $scope.quantity.products[3].qtyInStock;
     $scope.orders.yellow = $scope.quantity.products[4].qtyInStock;
      $scope.orders.white = $scope.quantity.products[5].qtyInStock;
  });
  res.error(function(data, status, headers, config) {
    alert( "failure message: " + JSON.stringify({data: data}));
  });

},1000);

  // $scope.viewInventory = function(){
  //
  //   var res = $http.post('http://ec2-35-170-187-70.compute-1.amazonaws.com:3000/api/products/view', {"":""});
  //   res.success(function(data, status, headers, config) {
  //     $scope.quantity = data;
  //     $scope.orders.red = $scope.quantity.products[0].qtyInStock;
  //      $scope.orders.green = $scope.quantity.products[1].qtyInStock;
  //      $scope.orders.blue = $scope.quantity.products[2].qtyInStock ;
  //      $scope.orders.black = $scope.quantity.products[3].qtyInStock;
  //      $scope.orders.yellow = $scope.quantity.products[4].qtyInStock;
  //       $scope.orders.white = $scope.quantity.products[5].qtyInStock;
  //   });
  //   res.error(function(data, status, headers, config) {
  //     alert( "failure message: " + JSON.stringify({data: data}));



}]);
