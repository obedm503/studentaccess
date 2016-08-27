/*
trying to follow John Papa's Angular Style Guide
https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md
*/
(function(angular){
	angular.module('studentaccess').service('NetworkService', ['$log', '$ionicBody','$ionicPopup','$http','$rootScope','$timeout', NetworkService]);
	jqLite = angular.element;

	/**
	* @ngdoc service
	* @name NetworkService
	* @description Service in charge of handling network errors.
	*/
	function NetworkService($log, $ionicBody,$ionicPopup,$http,$rootScope,$timeout){
		var returns = {
			check: check,
			popup: popup,
			alert: alert
		};

		/**
		* @function popup
		* @memberof NetworkService
		* @description Method to be called when user is offline.
		*/
		function popup(){
			$ionicPopup.alert({
				title: 'Ooops!',
				template: '<center>It seems you\'re offline. Please check your network connection.</center>'
			});
		}

		/**
		* @function check
		* @memberof NetworkService
		* @description Method that check a request's status and calls {@link NetworkService.popup} if user is offline.
		* @param {Number} status A request's status.
		* @returns {String} 'fail' if the user if offline, and 'success' if not.
		*/
		function check(status){
			if(status <= 0){
				popup();
				return 'fail';
			} else { return 'success'; }
		}

		function alert(state){
			var msg = '';
			if(state === 'offline'){
				msg = ' Please check your network connection';
			}
			var tem = '<div class="network">' +
									'<div class="card">' +
										'<ion-item class="item-input item-text-wrap">' +
											'<p>You are ' + state + '!' + msg + '</p>' +
										'</ion-item>' +
									'</div>' +
								'</div>';
			var elem = jqLite(tem);
			$log.log(state);
			$ionicBody.append(elem);
			$timeout(function(){
				elem.remove();
			},5000);
		}

		return returns;
	}
})(window.angular);
