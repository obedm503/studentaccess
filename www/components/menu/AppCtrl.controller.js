/*
trying to follow John Papa's Angular Style Guide
https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md
*/
(function(){
	angular.module('studentaccess').controller('AppCtrl', ['$localForage','$q', '$log', '$timeout', '$translate', '$rootScope', '$ionicHistory', '$ionicSideMenuDelegate', '$state', '$ionicPopup', 'AuthService', 'AUTH_EVENTS', 'StudentService', 'UpdateService', 'NetworkService','$interval', AppCtrl]);

	/**
	* @ngdoc controller
	* @name AppCtrl
	* @description
	* The main controller. AppCtrl is parent to all other controllers. Global functions are defined here and used through the $rootScope.
	*/
	function AppCtrl($localForage, $q, $log, $timeout, $translate, $rootScope, $ionicHistory, $ionicSideMenuDelegate, $state, $ionicPopup, AuthService, AUTH_EVENTS, StudentService, UpdateService, NetworkService, $interval) {
		var app = this;
		$log.debug('app');

	//-=-=-=-=-=-=-=-=-=-=-=-GLOBAL-=-=-=-=-=-=-=-=-=-=-=-//
		/**
		* @function $rootScope.refresh
		* @memberof AppCtrl
		* @param {Array} requests Array strings of requests names.
		* Requests to be returned for use in current view.
		* Available options to be passed in the array: profileMissing, profileStudent, profileSchedules, homeworkHomework, gradesSchedule, gradesGrades, gradesTeachers, eventsEvents, cafeteriaMenu, cafeteriaTransactions, staffStaff. Names follow the viewRequest format.
		* @description
		* Method to be called when a view needs to update data. It not only updates the current view but all other views's content. It also handles request erros through the {@link NetworkService}, so they shouldn't be handled in each controller. Should be wrapped in another function.
		* @returns {Promise}
		* Returns a promise which, if success, returns an object with the data requested in the same order as the passed array. If any of the requests fails, the reject function will be called and return the $http error.
		* @requires {@link https://docs.angularjs.org/api/ng/service/$q $q}, {@link https://docs.angularjs.org/api/ng/service/$rootScope $rootScope}, {@link http://ionicframework.com/docs/api/service/$ionicHistory/ $ionicHistory}, and {@link studentaccess.service:NetworkService NetworkService}
		* @throws Will log an error if nothing is passed or what's passed is not an array, and return false.
		* @example
			//function to be called by ionRefresher, AKA function wrapper
			var refresh = function(){
				//Note the array passed and the object returned
				$rootScope.refresh(['profileMissing','profileStudent','profileSchedules']).then(function(data){
					//data, in this case
					//{
					//	profileMissing: Object, (missing data)
					//	profileSchedules: Array[4], (schedules)
					//	profileStudent: Object (student info)
					//}
					//it's always a good practice to check is object property exists
					if(typeof data.profileMissing !== 'undefined'){
						profile.missingsNumber = data.profileMissing.num_missing;
						profile.missingMissing = data.profileMissing.missing;
						if(profile.missingsNumber === 0){ profile.showMissing = false; }
						$log.debug('updated missing');
					}
					if(typeof data.profileStudent !== 'undefined'){
						profile.studentInfo = data.profileStudent;
						$log.debug('updated studentInfo');
					}
					if(typeof data.profileSchedules !== 'undefined'){
						profile.schedules = data.profileSchedules;
						profile.schedule = data.profileSchedules[0];
						$log.debug('updated schedules');
					}
				});
			};
		* @see ProfileCtrl for the example in action.
		*/
		$rootScope.refresh = function(requests){
			var promises = {
				profileMissing:					StudentService.getStudentMissing(),
				profileStudent:					StudentService.getStudentData(),
				profileSchedules:				StudentService.getSchedulesData(),
				homeworkHomework:				StudentService.getStudentHomework(),
				gradesSchedule:					StudentService.getStudentSchedule(),
				gradesGrades:						StudentService.getStudentGrades(),
				gradesTeachers:					StudentService.getStudentTeachersData(),
				eventsEvents:						StudentService.getStudentEvents(),
				cafeteriaMenu:					StudentService.getStudentCafeteria(),
				cafeteriaTransactions:	StudentService.getStudentCredit(),
				staffStaff:							StudentService.getStudentStaff()
			};
			return $q.all(promises).then(function(result){
				$rootScope.$broadcast('scroll.refreshComplete');
				$ionicHistory.clearCache();
				var returnedData = {};
				if(requests && Array.isArray(requests)){
					for(var i = 0, len = requests.length; i < len; i++){
						if(result[requests[i]]){
							returnedData[requests[i]] = result[requests[i]];
						}
					}
					$log.debug('refresh: all and returned ' + requests.join(', '));
				} else {
					$log.error('refresh: all and returned empty obj');
				}
				return returnedData;
			}, function(err){
				NetworkService.check(err.status);
				$rootScope.$broadcast('scroll.refreshComplete');
			});
		};

		$rootScope.ChangeLanguage = function(s){
			//clearchache is necesary
			$ionicHistory.clearCache();
			$translate.use(s);
			$rootScope.language = s;
			// only re-request things related to and changed by language (not pictures n stuff)
			StudentService.getStudentMissing();
			StudentService.getStudentHomework();
			StudentService.getStudentGrades();
			StudentService.getStudentEvents();
			StudentService.getStudentCafeteria();
			StudentService.getStudentStaff();

			$localForage.setItem('STUDENT_CHOSEN_LANGUAGE', s);
			$log.debug(s + ' is the chosen language');
		};

		$rootScope.ChangeTheme = function(s){
			$rootScope.themeCss = s;

			$localForage.setItem('STUDENT_CHOSEN_THEME', s);
			$log.debug(s + ' is the new theme');
		};

		$rootScope.goBack = function() {
			$ionicHistory.goBack();
		};

		$rootScope.logout = function() {
			$ionicHistory.clearHistory();
			$ionicHistory.clearCache();
			//$state.go('login');
			delete $rootScope.studentPhoto;
			AuthService.logout();
		};

		$rootScope.$on(AUTH_EVENTS.notAuthenticated, function(event) {
			AuthService.logout();
			$ionicHistory.clearCache();
			$ionicHistory.clearHistory();
			$state.go('login');
			$ionicPopup.alert({
				title: 'Session Lost!',
				template: 'Sorry, You have to login again.'
			});
		});

	//-=-=-=-=-=-=-=-=-=-=-=-MENU-=-=-=-=-=-=-=-=-=-=-=-//
		/**
		* @function getStoredPic
		* @memberof AppCtrl
		* @description Method retrieves the current student's picture from localStorage and passes it with the resolve callback
		* @returns {Promise} Resolves with the student's picture in Base64 format. Rejects with the specific error found.
		* @example
			getStoredPic().then(function(pic){
				//pic is the current user's picture in base64 format
			});
		* @requires [$q](https://docs.angularjs.org/api/ng/service/$q)
		*/
		function getStoredPic(){
			return $q(function(resolve, reject) {
				$localForage.getItem('STUDENT_PHOTO', true).then(function(a){
					var user = a.filter(function(o){ return o.userID === $rootScope.userInputsName; });

					if(user.length){ resolve(user[0].pic); } else { reject($rootScope.userInputsName + '\'s picture not found'); }

				}, function(){ reject('No pictures found'); });
			});
		}

		/**
		* @function refreshEverything
    * @memberof AppCtrl
		* @description
		* Helper funtion. Calls all data through the {@link UpdateService} to check if the data is still valid. If data isn't valid or is undefined, call the [StudentService].
		* Function is called on [AppCtrl] load.
		*/
		function refreshEverything(){
			$log.debug('refreshed everything');
			UpdateService.anything('STUDENT_MISSING','day').then(function(){
				StudentService.getStudentMissing();
			});
			UpdateService.anything('STUDENT_HOMEWORK','day').then(function(){
				StudentService.getStudentHomework();
			});
			UpdateService.anything('STUDENT_GRADES','day').then(function(){
				StudentService.getStudentGrades();
			});
			UpdateService.anything('STUDENT_SCHEDULE','month').then(function(){
				StudentService.getStudentSchedule();
			});
			UpdateService.anything('TEACHERS','month').then(function(){
				StudentService.getStudentTeachersData();
			});
			UpdateService.anything('STUDENT_EVENTS','day').then(function(){
				StudentService.getStudentEvents();
			});
			UpdateService.anything('STUDENT_MENU','day').then(function(){
				StudentService.getStudentCafeteria();
			});
			UpdateService.anything('STUDENT_TRANSACTIONS','month').then(function(){
				StudentService.getStudentCredit();
			});
			UpdateService.anything('STAFF','month').then(function(){
				StudentService.getStudentStaff();
			});
			UpdateService.anything('SCHEDULES','month').then(function(){
				StudentService.getSchedulesData();
			});
		}

		refreshEverything();

		UpdateService.studentPic().then(function(){
			//pic undef or not valid
			return StudentService.getStudentPhoto();
		}).catch(function(m){
			//pic valid or failed to get new pic
			return getStoredPic();
		}).then(function(base64){
			$rootScope.studentPhoto = 'data:image/jpeg;base64,' + base64;
			function setPic(){
				if(document.getElementById("studentProfilePic") || document.getElementById("studentMenuPic")){
					if(document.getElementById("studentProfilePic")){
						if(document.getElementById("studentProfilePic").src !== "data:image/jpeg;base64," + base64){
							document.getElementById("studentProfilePic").src = "data:image/jpeg;base64," + base64;
							$log.debug('setPhoto: profile done');
						} else { $log.debug('setPhoto: profile already set'); }
					}
					if(document.getElementById("studentMenuPic")){
						if(document.getElementById("studentMenuPic").src !== "data:image/jpeg;base64," + base64){
							document.getElementById("studentMenuPic").src = "data:image/jpeg;base64," + base64;
							$log.debug('setPhoto: menu done');
						} else { $log.debug('setPhoto: menu already set'); }
					}
				}
			}
			$interval(function(){
				setPic();
			}, 1700, 2, false);
		});

	//-=-=-=-=-=-=-=-=-=-=-=-LANGS-=-=-=-=-=-=-=-=-=-=-=-//
		$localForage.getItem('STUDENT_CHOSEN_LANGUAGE', true).then(function(s){
			$translate.use(s);
			$log.debug(s + ' was loaded as chosen language');
			$rootScope.language = s;
		}, function(){ $rootScope.language = 'en'; });

		$rootScope.langs = [
			{ name: 'English', lang: 'en' },
			{ name: 'Español', lang: 'es' }
		];

	//-=-=-=-=-=-=-=-=-=-=-=-THEMES-=-=-=-=-=-=-=-=-=-=-=-//
		$localForage.getItem('STUDENT_CHOSEN_THEME', true).then(function(s){
			$rootScope.themeCss = s;
			$log.debug(s + ' was loaded as chosen theme');
		}, function(){ $rootScope.themeCss = 'mild'; });

		$rootScope.themes = [
			{ name: 'SETTINGS-THEME-LIGHT', url: 'light' },
			{ name: 'SETTINGS-THEME-MILD', url: 'mild' },
			{ name: 'SETTINGS-THEME-DARK', url: 'dark' }
		];

	//vVvVvVvVvVvVvVvVvVvVvVv BIRTHDAY EE vVvVvVvVvVvVvVvVvVvVvVvVvVvV
		UpdateService.anything('STUDENT_LOGIN', 'day').then(function(){
			return StudentService.getStudentData();
		}).catch(function(){
			return $localForage.getItem('STUDENT_LOGIN', true).then(function(o){ return o.data; });
		}).then(function(o){
			if(JSON.stringify(o) !== '{}'){
				var chunkbirth = o.birthdate.split('-');
				var months = {
					Jan: "01",
					Feb: "02",
					Mar: "03",
					Apr: "04",
					May: "05",
					Jun: "06",
					Jul: "07",
					Aug: "08",
					Sep: "09",
					Oct: "10",
					Nov: "11",
					Dec: "12"
				};
				$rootScope.birthday = months[chunkbirth[1]] + '-' + chunkbirth[0];
			}

			var chunktoday = $rootScope.date.split('-');
			$rootScope.today = chunktoday[1] + '-' + parseInt(chunktoday[2]);//month + day in single num form (ex: '5' instead of '05')
		//^^^^^^^^^^^^^^^^^^^ BIRTHDAY EE ^^^^^^^^^^^^^^^^^^^^^^^^
		});

		//$timeout(function(){
			$rootScope.show = true;
		//}, 1500);
	}
})();
