/*
trying to follow John Papa's Angular Style Guide
https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md
*/
(function(angular){
	angular.module('studentaccess').service('UpdateService', ['$rootScope', '$q', '$log', '$localForage', UpdateService]);

	/**
	* @ngdoc service
	* @name UpdateService
	* @description Service in charge of determining if data is still valid.
	*/
	function UpdateService($rootScope, $q, $log, $localForage){
		var returns = {
			studentPic: studentPic,
			anything: anything
		};

		/**
		* @function studentPic
		* @memberof UpdateService
		* @description Method which determines if the stored studentPic is still valid. A picture is valid for a month.
		* @returns {Promise} Returns a promise that resolves if the picture is undef or not valid and rejects if the picture is still valid.
		* @example
			UpdateService.studentPic().then(function(){
				//request picture, it is undefined or no longer valid
			}, function(){
				//use already stored picture, it's still valid
			});
		*/
		function studentPic(){
			return $q(function(resolve, reject){
				$localForage.getItem(['STUDENT_PHOTO','USER_INPUTS'], true).then(function(a){
					var datePieces = $rootScope.date.split('-'),
							date = datePieces[0] + '-' + datePieces[1],//year-month
							picsDatePieces,
							picsDate,
							currentUser = a[0].filter(function(o){ return o.userID === a[1].user; });
					if(currentUser.length){//user exists
						picsDatePieces = currentUser[0].date.split('-');
						picsDate = picsDatePieces[0] + '-' + picsDatePieces[1];
						if(date !== picsDate){//dates dont match
							resolve('get new pic');
							$log.debug('US.studentPic: get new pic');
						} else {//dates match
							reject('pic still valid');
							$log.debug('US.studentPic: pic still valid');
						}
					} else { resolve('current user does not exist'); }
				}, function(){
					resolve('undef');
					$log.debug('US.studentPic: was undef');
				});
			});
		}

		/**
		* @function anything
		* @memberof UpdateService
		* @description Method which determines if some specific info is still valid according to the specified 'mode'. DO NOT use this method to check whether the student's picture is valid., use UpdateService.studentPic instead.
		* @param {String} storageKey The key in localStorage to check.
		* @param {String}  mode There are two 'modes': 'month' which counts the data as valid for a month, and 'day' which counts data as valid for a day. Use 'month' for long term data that usually doesn't change, e.g.: teacher pictures, teacher info, staff information, etc. Use 'day' for data that needs to be kept up to date, e.g.: missing homeworks, grades, etc.
		* @returns {Promise} Returns a promise that resolves if the data is undef or not valid and rejects if the data is still valid according to the defined 'mode'.
		* @example
			UpdateService.anything('STUDENT_MISSING','day').then(function(){
				//request data, it is undefined or no longer valid
			}, function(){
				//use already stored data, it's still valid
			});
		*/
		function anything(storageKey, mode){
			return $q(function(resolve, reject){
				if(storageKey && mode){
					$localForage.getItem(storageKey, true).then(function(o){
						var date,
								datePieces = $rootScope.date.split('-'),
								dataDate,
								dataDatePieces = o.date.split('-');

						if(mode === 'month'){
							date = datePieces[0] + '-' + datePieces[1];
							dataDate = dataDatePieces[0] + '-' + dataDatePieces[1];
						} else if(mode === 'day'){
							date = $rootScope.date;
							dataDate = o.date;
						} else { $log.error('US.anything: bad mode'); }

						if(date === dataDate){
							reject('still valid');
							$log.debug('US.anything: ' + storageKey + ' still valid');
						} else {
							resolve('make call');
							$log.debug('US.anything: ' + storageKey + ' outdated');
						}
					}, function(){
						resolve('undef');
						$log.debug('US.anything: ' + storageKey + ' was undef');
					});
				} else { $log.error('US.anything: bad params'); }
			});
		}

		return returns;
	}
})(window.angular);
