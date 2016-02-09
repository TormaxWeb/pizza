(function(){
'use strict';

var LoginService = function($http,$location){
  this.login = function(data){
  	$http({
  		method : "POST",
  		url    : "server/ajax/ajax.php",
  		data   : data
  	}).success(function(data){
  		if(data==1)
  			$location.path('#/dashboard');
  		else
  			alert('Date de idientificare invalide !!!');
  	});
    
  };
};

angular
  .module('admin')
  .service('LoginService', ['$http','$location',
    LoginService
  ]);


})();