angular.module('homeController', [])
.controller('HomeController', function($scope) {

	$scope.firstName = 'John';
	$scope.lastName = 'Doe';

	$scope.myButtonText = "";
	$scope.numberOfPresses = 0;

	$scope.buttonPressed = function() {
		$scope.numberOfPresses += 1;
		$scope.myButtonText = "You have pressed the button " + $scope.numberOfPresses + " times!";
	}
});