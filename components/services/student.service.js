/*
trying to follow John Papa's Angular Style Guide
https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md
*/
(function(angular){
	angular.module('studentaccess').service('StudentService', ['$filter', '$log', '$timeout', '$q', '$http', '$rootScope', '$localForage', StudentService]);

	/**
	* @ngdoc service
	* @name StudentService
	* @description Service in charge of making requests to the API.
	*/
	function StudentService ($filter, $log, $timeout, $q, $http, $rootScope, $localForage){
		var apiUrl = 'https://db.nca.edu.ni/api/api_ewapp.php',
				returns = {
					attachDate:attachDate,
					getSchedulesData: getSchedulesData,
					getStudentCredit: getStudentCredit,
					getStudentEvents: getStudentEvents,
					getStudentData: getStudentData,
					getStudentHomework: getStudentHomework,
					getStudentCafeteria: getStudentCafeteria,
					getStudentMissing: getStudentMissing,
					getStudentSchedule: getStudentSchedule,
					getStudentGrades: getStudentGrades,
					getStudentStaff: getStudentStaff,
					getStudentPhoto: getStudentPhoto,
					getStudentTeachersData: getStudentTeachersData,
				};
		$log.debug('stu');

		/**
		* @function getDate
		* @memberof StudentService
		* @description Helper funtion. Creates a new Date, filters it through angular's date filter, and stores the value in $rootScope.date.
		* Function is called on {@link StudentService} load.
		* @see $rootScope.date
		*/
		function getDate(){
			/**
			* @name $rootScope.date
			* @memberof AppCtrl
			* @type {String}
			* @description The current date. Used to check if local data is still valid. Date is in yyyy-MM-dd format.
			*/
			$rootScope.date = $filter('date')(new Date(), "yyyy-MM-dd");
			$log.debug('todays date: ' + $rootScope.date);
		}
		getDate();

		/**
		* @memberof StudentService
		* @name attachDate
		* @param {Array|Object|String} Takes any data, but it's usually a JSON object received from the API.
		* @description Method used to attach the current date to any data passed in. It's used by the {@link studentaccess.service:StudentService StudentService}.
		* You may be prone to typo's with the properties of the returned object.
		* @returns {Object} with date property of {@link $rootScope.date} and a data property with the data passed.
		*/
		function attachDate(data){
			return {
				date: $rootScope.date,
				data: data
			};
		}

		function getSchedulesData(){
			return $http({
				url: 'schedules.json',
				method: 'GET'
			}).then(function(result){
				var schedule = result.data;
				if (schedule){
					$localForage.setItem('SCHEDULES', attachDate(schedule));
				} else { $log.error('Failed to get studentData!'); }
				return schedule;
			});
		}

		function storeNewPic(pic){
			$localForage.getItem('STUDENT_PHOTO').then(function(a){
				var user = $rootScope.userInputsName,
						users = [];

				if(a){ users = a.map(function(o){ return o.userID; }); }
				else { a = []; }

				if(users.indexOf(user) < 0){//AKA the user doesn't exists in users array
					a.push({
						userID: user,
						date: $rootScope.date,
						pic: pic
					});
					$localForage.setItem('STUDENT_PHOTO', a);
					$log.debug('newPic: success');
				} else { $log.debug('newPic: userAlreadyExists'); }
			});
		}

		function getStudentData(){
			return $http({
				url: apiUrl,
				method: 'GET',
				params: {mode: 'student', lang: $rootScope.language, query: 'login', username: $rootScope.userInputsName, password: $rootScope.userInputsPass}
			}).then(function(result){
				var studentData = result.data;
				if (studentData){
					$localForage.setItem('STUDENT_LOGIN', attachDate(studentData));
				} else { $log.error('Failed to get studentData!'); }
				return studentData;
			});
		}

		function getStudentEvents(){
			return $http({
				url: apiUrl,
				method: 'GET',
				params: {query: 'events', mode: 'student', lang: $rootScope.language, username: $rootScope.userInputsName, password: $rootScope.userInputsPass}
			}).then(function(result){
				var eventsData = result.data.events;
				if (eventsData){
					$localForage.setItem('STUDENT_EVENTS', attachDate(eventsData));
				} else{ $log.error('Failed to get events!'); }
				return eventsData;
			});
		}

		function getStudentHomework(){
			return $http({
				url: apiUrl,
				method: 'GET',
				params: {mode: 'student', lang: $rootScope.language, query: 'homework', username: $rootScope.userInputsName, password: $rootScope.userInputsPass}
			}).then(function(result){
				var homeworkData = result.data.homework;
				if (homeworkData){
					$localForage.setItem('STUDENT_HOMEWORK', attachDate(homeworkData));
				} else { $log.error('Failed to get hw!'); }
				return homeworkData;
			});
		}

		function getStudentGrades(){
			return $http({
				url: apiUrl,
				method: 'GET',
				params: {mode: 'student', lang: $rootScope.language, query: 'allgrades', username: $rootScope.userInputsName, password: $rootScope.userInputsPass}
			}).then(function(result){
				var gradesData = result.data;
				if (gradesData){
					$localForage.setItem('STUDENT_GRADES', attachDate(gradesData));
				} else { $log.error('Failed to get grades!'); }
				return gradesData;
			});
		}

		function getStudentSchedule(){
			return $http({
				url: apiUrl,
				method: 'GET',
				params: {mode: 'student', lang: $rootScope.language, query: 'schedule', username: $rootScope.userInputsName, password: $rootScope.userInputsPass}
			}).then(function(result){
				var scheduleData = result.data;
				if (scheduleData){
					$localForage.setItem('STUDENT_SCHEDULE', attachDate(scheduleData));
				} else { $log.error('Failed to getschedule!'); }
				return scheduleData;
			});
		}

		function getStudentTeachersData(){
			return $http({
				url: apiUrl,
				method: 'GET',
				params: {mode: 'student', lang: $rootScope.language, query: 'allteachers', username: $rootScope.userInputsName, password: $rootScope.userInputsPass}
			}).then(function(result){
				$rootScope.$broadcast('teachersDataDone');
				var teachersData = result.data.teachers;
				if (teachersData){
					$localForage.setItem('TEACHERS', attachDate(teachersData));
					$log.debug('Success. we got teachers data');
				} else { $log.error('Failed to get teachers data!'); }
				return teachersData;
			}, function(err){
				$rootScope.$broadcast('teachersDataDone');
			});
		}

		function getStudentCafeteria(){
			return $http({
				url: apiUrl,
				method: 'GET',
				params: {mode: 'student', lang: $rootScope.language, query: 'cafeteria', username: $rootScope.userInputsName, password: $rootScope.userInputsPass}
			}).then(function(result){
				var cafeteriaData = result.data.menu;
				if (cafeteriaData){
					$localForage.setItem('STUDENT_MENU', attachDate(cafeteriaData));
				} else { $log.error('Failed to get food!'); }
				return cafeteriaData;
			});
		}

		function getStudentCredit(){
			return $http({
				url: apiUrl,
				method: 'GET',
				params: {mode: 'student', lang: $rootScope.language, query: 'credit', username: $rootScope.userInputsName, password: $rootScope.userInputsPass}
			}).then(function(result){
				var creditData = result.data.transactions;
				if (creditData){
					$localForage.setItem('STUDENT_TRANSACTIONS', attachDate(creditData));
				} else { $log.error('Failed to get credit history!'); }
				return creditData;
			});
		}

		function getStudentMissing(){
			return $http({
				url: apiUrl,
				method: 'GET',
				params: {mode: 'student', lang: $rootScope.language, query: 'missing', username: $rootScope.userInputsName, password: $rootScope.userInputsPass}
			}).then(function(result){
				var missingData = result.data;
				if (missingData){
					$localForage.setItem('STUDENT_MISSING', attachDate(missingData));
				} else { $log.error('Failed to get missing ass.!'); }
				return missingData;
			});
		}

		function getStudentStaff(){
			return $http({
				url: apiUrl,
				method: 'GET',
				params: {mode: 'student', lang: $rootScope.language, query: 'staff', username: $rootScope.userInputsName, password: $rootScope.userInputsPass}
			}).then(function(result){
				var staffData = result.data.staff_list;
				if (staffData){
					$localForage.setItem('STAFF', attachDate(staffData));
				} else { $log.error('Failed to get staff list!'); }
				return staffData;
			});
		}

		function getStudentPhoto(){
			return $http({
				url: apiUrl,
				method: 'GET',
				params: {mode: 'student', lang: $rootScope.language, query: 'myphoto', username: $rootScope.userInputsName, password: $rootScope.userInputsPass}
			}).then(function(result){
				var studentPhotoData =  result.data;
				if (studentPhotoData){
					storeNewPic(studentPhotoData);
				} else { $log.error('Failed to get photo!'); }
				return studentPhotoData;
			});
		}

		return returns;
	}
})(window.angular);
