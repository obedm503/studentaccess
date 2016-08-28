/*
trying to follow John Papa's Angular Style Guide
https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md
*/
(function(){
	angular.module('studentaccess').controller('ProfileCtrl', ['$localForage', '$log', '$rootScope', '$filter', '$ionicActionSheet', '$state', 'StudentService', 'UpdateService','$ionicPopover','$scope', ProfileCtrl]);

	function ProfileCtrl($localForage, $log, $rootScope, $filter, $ionicActionSheet, $state, StudentService, UpdateService, $ionicPopover,$scope) {
		var profile = this;
    //init the number, this should be changed once data is retrieved
    profile.missingsNumber = 0;

		function missing(o){
			profile.missingsNumber = o.num_missing;
			profile.missingMissing = o.missing;
		}
		function student(o){
			if(JSON.stringify(o) !== '{}'){
				profile.eagleCredits = o.credit_student;
				profile.eagleCreditsFam = o.credit_family;
				profile.studentBirthday = o.birthdate;
				profile.studentGrade = o.grade;
			}
		}
		function schedules(a){
			profile.schedules = a;
			profile.schedule = a[0];
		}

		profile.refresh = function(){
			$rootScope.refresh(['profileMissing','profileStudent','profileSchedules']).then(function(data){
				if(data.profileMissing){
					missing(data.profileMissing);
				}
				if(data.profileStudent){
					student(data.profileStudent);
				}
				if(data.profileSchedules){
					schedules(data.profileSchedules);
				}
			});
		};

		profile.doShowMissing = function(){
			if(profile.missingsNumber){
				profile.showMissing = (profile.showMissing) ? false : true;
			}
		};

		profile.goGrades = function(){
			$state.go('app.grades');
		};

    /*
    var popoverTmplt = '<ion-popover-view style="top: 44px; left: 20%; margin-left: 0px; opacity: 1;"><ion-item ng-click="::profile.doShowActionSheet()">Schedules</ion-item></ion-popover-view>';

    var popover = $ionicPopover.fromTemplate(popoverTmplt, {
      scope: $scope
    });
    profile.showPopover = function(e) {
      popover.show(e);
    };*/

		profile.doShowActionSheet = function(){
      //popover.hide();
			$ionicActionSheet.show({
				titleText: "<h3>Pick a Schedule</h3>",
				buttons: profile.schedules,
				cancelText: $filter('translate')('HOMEWORK-CANCEL-CLASS-FILTER'),
				cancel: function() {
					$log.log('actionSheet CANCELLED');
				},
				buttonClicked: function(index) {
					profile.schedule = profile.schedules[index];
					$log.log('schedule in list: ', index, ' ', profile.schedules[index].type);
					return true;
				}
			});
		};

	//-=-=-=-=-=-=-=-=-=-=-=-Missing-=-=-=-=-=-=-=-=-=-=-=-//
    UpdateService.anything('STUDENT_MISSING', 'day').then(function(){
			return StudentService.getStudentMissing();
		}).catch(function(){
			return $localForage.getItem('STUDENT_MISSING', true).then(function(o){
				return o.data;
			});
		}).then(missing);

	//-=-=-=-=-=-=-=-=-=-=-=-Student info-=-=-=-=-=-=-=-=-=-=-=-//
		UpdateService.anything('STUDENT_LOGIN', 'day').then(function(){
			return StudentService.getStudentData();
		}).catch(function(){
			return $localForage.getItem('STUDENT_LOGIN', true).then(function(o){
				return o.data;
			});
		}).then(student);

	//-=-=-=-=-=-=-=-=-=-=-=-SCHEDULES-=-=-=-=-=-=-=-=-=-=-=-//
		UpdateService.anything('SCHEDULES', 'month').then(function(){
			return StudentService.getSchedulesData();
		}).catch(function(){
			return $localForage.getItem('SCHEDULES', true).then(function(o){
				return o.data;
			});
		}).then(schedules);
	}
})();
