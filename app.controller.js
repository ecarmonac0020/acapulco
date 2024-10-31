/* ============================================================
 * File: main.js
 * Main Controller to set global scope variables.
 * ============================================================ */

angular.module('app', [])
    .controller('AppCtrl', ['$sce', '$scope', '$rootScope', '$http', '$interval', '$timeout', '$window', '$filter',
    		function($sce, $scope, $rootScope, $http, $interval, $timeout, $window, $filter) {

    	$scope.messages = [{
  			id: 'sale',
  			label: 'Venta',
  			url: 'https://integration.pos.io/payment/sale',
  			img: 'credit_card.png',
  			selected: false
  		}, {
  			id: 'saleWithTip',
  			url: 'https://integration.pos.io/payment/saleWithTip',
  			label: 'Venta con propina',
  			img: 'fork.png',
  			selected: false
  		}, {
  			id: 'checkIn',
  			url: 'https://integration.pos.io/payment/checkIn',
  			label: 'Check In',
  			img: 'checkin.png',
  			selected: false
  		}, {
  			id: 'reauth',
  			url: 'https://integration.pos.io/payment/reauth',
  			label: 'Reaut',
  			img: 'recycle.png',
  			selected: false
  		}, {
  			id: 'checkOut',
  			url: 'https://integration.pos.io/payment/checkOut',
  			label: 'Check Out',
  			img: 'checkout.png',
  			selected: false
  		}, {
  			id: 'refund',
  			url: 'https://integration.pos.io/payment/refund',
  			label: 'Cancelación',
  			img: 'refund.png',
  			selected: false
  		}];

    	$scope.paymentModes = [{
  			id: '0',
  			label: 'Contado'
  		}, {
  			id: '3',
  			label: '3 MSI'
  		}, {
  			id: '6',
  			label: '6 MSI'
  		}, {
  			id: '9',
  			label: '9 MSI'
  		}, {
  			id: '12',
  			label: '12 MSI'
  		}, {
  			id: '0,3',
  			label: 'Contado, 3MSI'
  		}, {
  			id: '0,6',
  			label: 'Contado, 6MSI'
  		}];

    	$scope.selectedMessage = $scope.messages[0];
    	$scope.t = {
			TrxCurrency: '1',
			TrxAmount: 380,
			TrxAAmount: 15,
			TrxRoomNbr: 1
    	};

    	$scope.executeTrx = function(){

    		if($scope.selectedMessage.id == 'sale'
    			|| $scope.selectedMessage.id == 'saleWithTip'
				|| $scope.selectedMessage.id == 'checkIn'){

        		if($scope.selectedMessage.id == 'sale'){
        			delete $scope.t['TrxAAmount']
        		}

        		if($scope.selectedMessage.id == 'saleWithTip'){
        		}

        		if($scope.selectedMessage.id == 'checkIn'){
        		}

    		}

    		if($scope.t.TrxPaymentModeArr != null){
    			$scope.t.TrxPaymentMode = $scope.t.TrxPaymentModeArr.id
    			delete $scope.t['TrxPaymentModeArr']
    		}

    		if($scope.selectedMessage.id == 'refund'){
    			delete $scope.t['TrxReference']
    			delete $scope.t['TrxFValue']
    			delete $scope.t['TrxPaymentMode']
    			delete $scope.t['TrxAAmount']
    		}

    		if($scope.selectedMessage.id == 'checkIn'){
    			delete $scope.t['TrxAAmount']
    		}

    		if($scope.selectedMessage.id == 'reauth'
    			|| $scope.selectedMessage.id == 'checkOut'){
    			delete $scope.t['TrxAAmount']
    			delete $scope.t['TrxReference']
    			delete $scope.t['TrxFValue']
    			delete $scope.t['TrxPaymentMode']
    		}

    		$scope.t.TrxUrl = $scope.selectedMessage.url;

    		var json = angular.toJson($scope.t);
    		console.log(json);
    		gsmart.executeTransaction(json);

    	}

    	$scope.init = function(){

    	}

		$scope.init();

    }]);