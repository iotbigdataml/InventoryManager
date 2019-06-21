var myApp = angular.module('myApp', []);
myApp.controller('inventoryController', ['$scope', '$http', function($scope, $http) {

  $scope.orders = [];

  //Update the inventory with the entered values
  $scope.placeOrder = function() {

    $scope.orders.push({'Red':$scope.orders.redquantity, 'Green':$scope.orders.greenquantity, 'Blue': $scope.orders.bluequantity, 'Black': $scope.orders.blackquantity, 'Brown': $scope.orders.brownquantity, 'Yellow':$scope.orders.yellowquantity});

    var dataObj = {
				Red : $scope.orders.redquantity,
				Green : $scope.orders.greenquantity,
				Blue : $scope.orders.bluequantity,
        Black: $scope.orders.blackquantity,
        Brown: $scope.orders.brownquantity,
        Yellow: $scope.orders.yellowquantity
		};


    //post http to send the json data to api
    var res = $http.post('', dataObj);
		res.success(function(data, status, headers, config) {
			$scope.message = data;
		});
		res.error(function(data, status, headers, config) {
			alert( "failure message: " + JSON.stringify({data: data}));
		});

    $scope.orders.redquantity = '';
     $scope.orders.greenquantity = '';
     $scope.orders.bluequantity = '';
     $scope.orders.blackquantity = '';
     $scope.orders.brownquantity = '';
     $scope.orders.yellowquantity = '';

  };



}]);
