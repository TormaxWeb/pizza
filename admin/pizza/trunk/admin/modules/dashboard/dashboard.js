(function(){
	"use strinct";
	
	angular.module('dashboard', [])
	.config(['$stateProvider',function($stateProvider) {
		$stateProvider.state('dashboard',{
			url: "/dashboard",
			templateUrl:'modules/dashboard/dashboardView.html',
			

		});
	}]);
	
})();