var app = angular.module('myapp', ['homeController', 'ngRoute']);
/*
	* 'myapp' is the name of your application, and must be the same name you use in your index.html as well
	* homeController is imported here from your home_controller.js module
	* ngRoute allows you to use the routerProvider 
*/

app.config(function($routeProvider) {
	'use strict';

	$routeProvider
	.when('/', {
		templateUrl: 'pages/home.html',
		controller: 'HomeController'
	})
	.otherwise({
		redirectTo: '/'
	});

	/*
		* when '/' indicates the home URL of your application
		* the 'otherwise' function allows you route all other route requests to the home URL
	*/
});



