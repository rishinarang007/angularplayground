angular.module('testingTutsplusApp')
  .directive('navbar', function () {

  	
  		return {

  			restrict:"EA",

  			templateUrl:"views/navbar.html",

  			controller:"NavigationCntrl",

  			link:function(scope, element, attr){

  				
  			}


  		}

  });
