(function () {
	"use strict";
	
	angular
		.module("ngClassifieds", [])
		.controller("classifiedsCtrl", function ($scope) {

		$scope.name = {
			first: "John",
			last: "Doe"
		};
		$scope.message = "HELLO !!!";
	});
})();