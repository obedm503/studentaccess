/*
trying to follow John Papa's Angular Style Guide
https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md
*/
(function(){
	angular.module('studentaccess').controller('GradesCtrl', ['$localForage','$rootScope', '$log', 'StudentService', 'UpdateService', GradesCtrl]);

	function GradesCtrl($localForage,$rootScope, $log, StudentService, UpdateService) {
		var grades = this;
		grades.Math = window.Math;

		function classes(y){
			grades.classes = y.classes;
			$rootScope.gradesClasses = $array.convertToObject(y.classes)('class_period');
		}
		function teachers(e){
			$rootScope.teachersList = $array.convertToObject(e)('teacher_id');
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

		$log.debug('once data is merged into one api call, fix this ctrl');

	//-=-=-=-=-=-=-=-=-=-=-=-LIST CLASSES / Schedule -=-=-=-=-=-=-=-=-=-=-=-
		UpdateService.anything('STUDENT_SCHEDULE','month').then(function(){
			return StudentService.getStudentSchedule();
		}).catch(function(){
			return $localForage.getItem('STUDENT_SCHEDULE', true).then(function(o){ return o.data; });
			/*
			if(window.localStorage.STUDENT_SCHEDULE && window.localStorage.STUDENT_SCHEDULE !== '{}'){
				return JSON.parse(window.localStorage.STUDENT_SCHEDULE).data;
			} else {
				$log.error('no schedule found in lcl strg');
				return {};
			}*/
		}).then(schedule);

	//-=-=-=-=-=-=-=-=-=-=-=-Classes Data -=-=-=-=-=-=-=-=-=-=-=-
		UpdateService.anything('STUDENT_GRADES','day').then(function(){
			return StudentService.getStudentGrades();
		}).catch(function(){
			return $localForage.getItem('STUDENT_GRADES', true).then(function(o){ return o.data; });
			/*
			if(window.localStorage.STUDENT_GRADES && window.localStorage.STUDENT_GRADES !== '{}'){
				return JSON.parse(window.localStorage.STUDENT_GRADES).data.classes;
			} else {
				return [];
			}*/
		}).then(classes);

	//-=-=-=-=-=-=-=-=-=-=-=-Teacher Data -=-=-=-=-=-=-=-=-=-=-=-
		UpdateService.anything('TEACHERS','month').then(function(){
			return StudentService.getStudentTeachersData()
		}).catch(function(){
			return $localForage.getItem('TEACHERS', true).then(function(o){ return o.data; });
			/*
			if(window.localStorage.TEACHERS && window.localStorage.TEACHERS !== '{}'){
				return JSON.parse(window.localStorage.TEACHERS).data;
			} else {
				$log.error('no teacher data in local storage');
				return [];
			}*/
		}).then(teachers);
	}
})();
