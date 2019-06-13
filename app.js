var myApp = angular.module('myApp', []);
myApp.controller('orderController', ['$scope', '$http', function($scope, $http) {


  //Getting Orders list
  //$http GET function
  $http({
    method: 'GET',
    url: 'https://jsonplaceholder.typicode.com/users'

  }).then(function successCallback(response) {

    $scope.orders = response.data;

    alert("success");

  }, function errorCallback(response) {

    alert("Error. Try Again!");

  });


  //Create New Order
  $scope.placeOrder = function() {
    alert("in place order");
    //$http POST function
    $http({

      method: 'POST',
      url: 'https://jsonplaceholder.typicode.com/users',
      data: $scope.order

    }).then(function successCallback(response) {

      console.log(angular.toJson($scope.order));
      $scope.orders.push(response.data);
      alert("Order has been created Successfully")

    }, function errorCallback(response) {

      alert("Error. while placing Order Try Again!");

    });

  };



  //////////////////Shortcut methods for $http//////

  //$http GET
  //$http.get('https://jsonplaceholder.typicode.com/users', function successCallback(response) {
  //
  //  alert("User has updated Successfully")
  //
  //}, function errorCallback(response) {
  //
  //  alert("Error. while updating user Try Again!");
  //
  //});


  //$http POST
  //$http.post('https://jsonplaceholder.typicode.com/users', $scope.user, function successCallback(response) {
  //
  //  $scope.users.push(response.data);
  //alert("User has created Successfully")
  //
  //}, function errorCallback(response) {
  //
  //  alert("Error. while created user Try Again!");
  //
  //});


  //$http PUT
  //$htp.put('https://jsonplaceholder.typicode.com/users/' + $scope.user.id, $scope.user, function successCallback(response) {
  //
  //  alert("User has updated Successfully")
  //
  //}, function errorCallback(response) {
  //
  //  alert("Error. while updating user Try Again!");
  //
  //});


  //$http DELETE
  //$http.delete('https://jsonplaceholder.typicode.com/users/' + user.id, function successCallback(response) {
  //
  //  alert("User has deleted Successfully");
  //var index = $scope.users.indexOf(user);
  //$scope.users.splice(index, 1);
  //
  //  }, function errorCallback(response) {
  //
  //  alert("Error. while deleting user Try Again!");
  //
  //  });


}]);
