var prApp = angular.module('prApp', ['ngRoute', 'ui.bootstrap']);

//config
prApp.config(function($routeProvider) {
	$routeProvider
	
		//Route - Dashboard
		.when('/', {
			templateUrl : 'app/components/dashboard/dashboard.html',
			controller : 'dashboardController'
		})
		
		//Route - Personnel
		.when('/personnel', {
			templateUrl : 'app/components/personnel/personnel.html',
			controller : 'personnelController'
		})
		
		//Route - Security
		.when('/security', {
			templateUrl : 'app/components/security/security.html',
			controller : 'securityController'
		})
		
		//Route - Health
		.when('/health', {
			templateUrl : 'app/components/health/health.html',
			controller : 'healthController'
		});
});

//mainController
prApp.controller('mainController', function($scope) {
	$scope.message = 'mainController Test';
});

