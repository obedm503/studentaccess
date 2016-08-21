/*
trying to follow John Papa's Angular Style Guide
https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md
*/
(function(){
	angular.module('studentaccess').controller('SettingsCtrl', ['$ionicPopup','$ionicLoading','$timeout','$filter','$localForage','$rootScope', SettingsCtrl]);

	function SettingsCtrl($ionicPopup, $ionicLoading, $timeout, $filter, $localForage, $rootScope) {
		var settings = this;

		settings.doShowDeletePics = function(){
			$localForage.getItem('STUDENT_PHOTO',true).then(function(a){
				if(a.length > 1){
					$ionicPopup.confirm({
						title: $filter('translate')('SETTINGS-DELETE-TITLE'),
						template:'<div style="text-align:center">' + $filter('translate')('SETTINGS-DELETE-PICS-MESSAGE') + '</div>',
						cancelText: $filter('translate')('SETTINGS-CANCEL'),
						okType: 'button-assertive',
						okText: $filter('translate')('SETTINGS-DELETE')
					}).then(function(b){
						if(b){
							$ionicLoading.show({
								template: '<ion-item style="width:250px;color:white">' + $filter('translate')('LOGIN-LOADING') + '</ion-item><div style="left:27px;height:70px" class="loader"><div class="loader-inner pacman"><div></div><div></div><div></div><div></div><div></div></div></div>'
							});
							var stored = [];
							stored = a.filter(function(o){ return o.userID === $rootScope.userInputsName; });
							$localForage.setItem('STUDENT_PHOTO', stored);
							$timeout(function(){
								$ionicLoading.hide();
							},4500);
						}
					});
				} else {
					$ionicPopup.alert({
						title: $filter('translate')('SETTINGS-NO-PICS'),
					});
				}
			});
		};
	}
})();
