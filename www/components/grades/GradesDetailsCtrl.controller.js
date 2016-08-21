/*
trying to follow John Papa's Angular Style Guide
https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md
*/
(function(){
	angular.module('studentaccess').controller('GradesDetailsCtrl', ['$rootScope', '$log', '$scope', '$stateParams', '$state', GradesDetailsCtrl]);

	function GradesDetailsCtrl($rootScope, $log, $scope, $stateParams, $state) {
		var gradesDetails = this;
		gradesDetails.Math = window.Math;
		gradesDetails.isFinite = window.isFinite;

		gradesDetails.goGrades = function(){
			$state.go('app.grades');
		};

		$scope.$on('$ionicView.loaded', function(){
			var periodId = $stateParams.PERIODID,
					teacherId = $stateParams.TEACHERID;
		//-=-=-=-=-=-=-=-=-=-=-=-LIST CLASSES / Schedule -=-=-=-=-=-=-=-=-=-=-=-
			if($rootScope.gradesClasses && JSON.stringify($rootScope.gradesClasses) !== '{}' && periodId in $rootScope.gradesClasses){
				gradesDetails.gradeClass = $rootScope.gradesClasses[periodId].class_name;
				gradesDetails.gradeClassPeriod = $rootScope.gradesClasses[periodId].class_period;
				gradesDetails.gradeClassDesc = $rootScope.gradesClasses[periodId].class_description;
				gradesDetails.gradeClassRoom = $rootScope.gradesClasses[periodId].class_room;
				gradesDetails.gradeBreakdown = $rootScope.gradesClasses[periodId].class_scale;
				gradesDetails.gradeLastUpdate = $rootScope.gradesClasses[periodId].class_updated;
				gradesDetails.gradeAverage = $rootScope.gradesClasses[periodId].class_avg;
				gradesDetails.gradeGrades = $rootScope.gradesClasses[periodId].grades;
			} else {
				gradesDetails.goGrades();
				$log.error('GradesDetailsCtrl: data not found');
			}

		//-=-=-=-=-=-=-=-=-=-=-=-Teacher Data -=-=-=-=-=-=-=-=-=-=-=-
			if($rootScope.teachersList && JSON.stringify($rootScope.teachersList) !== '{}' && teacherId in $rootScope.teachersList){
				gradesDetails.gradeTeacherName = $rootScope.teachersList[teacherId].teacher_name;
				gradesDetails.gradeTeacherEmail = $rootScope.teachersList[teacherId].teacher_email;
				gradesDetails.gradeTeacherPhone = $rootScope.teachersList[teacherId].teacher_phone;
				gradesDetails.gradeTeacherPic = $rootScope.teachersList[teacherId].teacher_pic;
				document.getElementById("teacherPicture").src = "data:image/jpeg;base64," + $rootScope.teachersList[teacherId].teacher_pic;
			} else {
				$log.error('GradesDetailsCtrl: data not found');
			}
		});
	}
})();
