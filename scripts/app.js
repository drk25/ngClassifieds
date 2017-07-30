
	
	"use strict"
	
	angular.module('ngClassifieds', ['ngMaterial'])
	 .config(function($mdThemingProvider) {
		$mdThemingProvider.theme('default')
			.primaryPalette('pink')
			.accentPalette('blue-grey')
			.warnPalette('red');
	})
	
	.directive("HELLLL!!!!!", function () {
		return {
			template: "<h1>{{message}}</h1>"
		}
	});
	
	