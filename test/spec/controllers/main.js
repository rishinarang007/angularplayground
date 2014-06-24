'use strict';

describe('Controller: MainCtrl', function () {

	var location, scope

	beforeEach(module("testingTutsplusApp"));

	beforeEach(inject(function($controller, $location, $rootScope){

		location = $location

		scope = $rootScope.$new();

		$controller("NavigationCntrl",{

			$scope : scope
		})

	}))


  it("returns true when path are same", function(){

  	location.path("/test");

  	expect(scope.isActive("/test")).toBeTruthy();

  })

  it("returns false when path are different", function(){

  	location.path("/different");

  	expect(scope.isActive("/test")).toBeFalsy();

  })

  it("returns true if it starts with the same name", function(){

  	location.path("/test/1/menu");

  	expect(scope.isActive("/test")).toBeTruthy();

  })

  it("returns true if it starts with the query string", function(){

  	location.path("/test?menu=0");

  	expect(scope.isActive("/test")).toBeTruthy();

  })
});
