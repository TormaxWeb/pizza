(function(){
	"use strinct";
	var loginController = function($http,LoginService,$state){
		this.userLogin = function(){
			var data = {
				name:this.name,
				password : this.password
			};
			LoginService.login(data);
			//$state.go('dashboard');
			
		};
	};
	angular.module('login', [])
	.config(['$stateProvider',function($stateProvider) {
		$stateProvider.state('login',{
			url: "/login",
			templateUrl:'modules/login/loginTemplate.html',
			controller: 'LoginController',
			controllerAs:"login"

		});
	}])
	.controller('LoginController', ['$http','LoginService','$state', loginController]);
})();