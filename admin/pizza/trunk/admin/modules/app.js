(function(){
	"use strict";
	angular.module('admin', [
		'ui.router',
		'login',
		'dashboard'
		])
	.config([
		'$urlRouterProvider',
		function($urlRouterProvider) {
			$urlRouterProvider.otherwise('/logisn');
		}]);

})();