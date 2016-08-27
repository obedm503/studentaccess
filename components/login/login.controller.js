 /*
trying to follow John Papa's Angular Style Guide
https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md
*/
(function(){
	angular.module('studentaccess').controller('LoginCtrl', ['$log', '$filter', '$ionicLoading', '$translate', '$rootScope', '$state','$ionicPopup','AuthService', 'NetworkService', '$localForage', LoginCtrl]);

	function LoginCtrl($log, $filter, $ionicLoading, $translate, $rootScope, $state, $ionicPopup, AuthService, NetworkService, $localForage) {
		var login = this;
		login.ncaLogo ='<img class="ncaLogo" src="./img/icon.png" />StudentAccess';
		login.data = {};

		$rootScope.$on('loginBegin', function(){
			$ionicLoading.show({
				template: '<ion-item style="width:250px;color:white">' + $filter('translate')('LOGIN-LOADING') + '</ion-item><div style="left:27px;height:70px" class="loader"><div class="loader-inner pacman"><div></div><div></div><div></div><div></div><div></div></div></div>'
			});
		});
		$rootScope.$on('teachersDataDone', function(){
			$ionicLoading.hide();
		});

		//gets theme accordingly
		$localForage.getItem('STUDENT_CHOSEN_THEME', true).then(function(t){
			$rootScope.themeCss = t;
			$log.info(t + ' was loaded as chosen theme from login');
		}, function(){ $rootScope.themeCss = 'mild'; });

		//gets lang from lcl strg and sets var
		$localForage.getItem('STUDENT_CHOSEN_LANGUAGE', true).then(function(l){
			$translate.use(l);
			login.selectedLang = l;
			$log.info(l + ' was loaded as chosen language from login');
		}, function(){ login.selectedLang = 'en'; });

		//checks if user and pass are correct
		login.login = function(data) {
			$rootScope.$broadcast('loginBegin');
			$log.info('login.login() called');
			AuthService.login(data.usernameInput, data.passwordInput).then(function(authenticated) {
				$state.go('app.profile');//removing reload: true solved the nav-bar disappearing
				$log.info('authservice.login was called');
				login.data = {};//clears login fields after logout
			}, function(err) {
				$ionicLoading.hide();
				if(NetworkService.check(err) === 'success'){//this means the err is not due to network conection
					login.data.passwordInput = '';//clears password field after fail with network connection
					$ionicPopup.alert({
						title: 'Login failed!',
						template: '<center>Check your User ID and password!</center>'
					});
				} else if(err === 'else'){
					$ionicPopup.alert({
						title: 'Unspecified error!',
						template: '<center>An error was detected, please try again.</center>'
					});
				}
			});
		};
		$rootScope.show = true;
	}
})();
