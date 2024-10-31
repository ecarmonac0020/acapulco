/* ============================================================
 * File: main.js
 * Main Controller to set global scope variables. 
 * ============================================================ */

angular.module('app', [])
    .controller('ApprovedAppCtrl', ['$sce', '$scope', '$rootScope', '$http', '$interval', '$timeout', '$window', '$filter',
    		function($sce, $scope, $rootScope, $http, $interval, $timeout, $window, $filter) {
    	
    	$scope.init = function(){
    		var response = $scope.getQueryVariable('response');
    		$scope.t = JSON.parse(response);
    	}
    	
    	$scope.getQueryVariable = function(variable) {
    	    var query = window.location.search.substring(1);
    	    var vars = query.split('&');
    	    for (var i = 0; i < vars.length; i++) {
    	        var pair = vars[i].split('=');
    	        if (decodeURIComponent(pair[0]) == variable) {
    	            return decodeURIComponent(pair[1]);
    	        }
    	    }
    	    console.log('Query variable %s not found', variable);
    	}

    	$scope.goHome= function(){
    		gsmart.home()
    	}
    	
		$scope.init();
    	
    }]);