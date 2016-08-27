/*
trying to follow John Papa's Angular Style Guide
https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md
*/
(function(){
	angular.module('studentaccess').controller('GradesCtrl', ['$localForage','$rootScope', '$log', 'StudentService', 'UpdateService', GradesCtrl]);

	function GradesCtrl($localForage,$rootScope, $log, StudentService, UpdateService) {
		var grades = this;
		grades.Math = window.Math;
    grades.classes = [];

		function classes(o){
			grades.classes = o.classes;
			$rootScope.gradesClasses = $array.convertToObject(o.classes)('class_period');
		}
		function teachers(a){
			$rootScope.teachersList = $array.convertToObject(a)('teacher_id');
		}

		function schedule(scheduleData){
			if(scheduleData && JSON.stringify(scheduleData) !== '[]' && scheduleData.withhold_grades === '0' && scheduleData.overall_avg !== null){//if money not owed and avg available
				grades.totalAvg = scheduleData.overall_avg;
			} else if(scheduleData && JSON.stringify(scheduleData) !== '[]' && scheduleData.withhold_grades === '1'){//if money owed
				grades.totalAvg = '$$.$';
			} else {//if money not owed and avg not available
				grades.totalAvg = '??.?';
			}
		}

		grades.refresh = function(){
			$rootScope.refresh(['gradesSchedule','gradesGrades','gradesTeachers']).then(function(data){
				if(data.gradesSchedule){
					schedule(data.gradesSchedule);
				}
				if(data.gradesGrades){
					classes(data.gradesGrades);
				}
				if(data.gradesTeachers){
					teachers(data.gradesTeachers);
				}
			});
		};

	//-=-=-=-=-=-=-=-=-=-=-=-LIST CLASSES / Schedule -=-=-=-=-=-=-=-=-=-=-=-
		UpdateService.anything('STUDENT_SCHEDULE','month').then(function(){
			return StudentService.getStudentSchedule();
		}).catch(function(){
			return $localForage.getItem('STUDENT_SCHEDULE', true).then(function(o){ return o.data; });
		}).then(schedule);

	//-=-=-=-=-=-=-=-=-=-=-=-Classes Data -=-=-=-=-=-=-=-=-=-=-=-
		UpdateService.anything('STUDENT_GRADES','day').then(function(){
			return StudentService.getStudentGrades();
		}).catch(function(){
			return $localForage.getItem('STUDENT_GRADES', true).then(function(o){ return o.data; });
		}).then(classes);

	//-=-=-=-=-=-=-=-=-=-=-=-Teacher Data -=-=-=-=-=-=-=-=-=-=-=-
		UpdateService.anything('TEACHERS','month').then(function(){
			return StudentService.getStudentTeachersData();
		}).catch(function(){
			return $localForage.getItem('TEACHERS', true).then(function(o){ return o.data; });
		}).then(teachers);
	}
})();
