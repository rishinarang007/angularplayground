angular.module('testingTutsplusApp')
  .controller('NavigationCntrl', function ($scope, $location) {

  	var active = false;


  	function checkActiveClass(path){

  		

  		var currentPath = $location.path().split("/")[1]

  		

  		if(currentPath && currentPath.indexOf("?") !== -1){

  			currentPath = currentPath.split("?")[0];
  		}
  			





  		return path.split("/")[1] === currentPath  ? active = true  : active = false

  		
  	}


  	$scope.isActive = checkActiveClass



  });
