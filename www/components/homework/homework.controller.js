/*
trying to follow John Papa's Angular Style Guide
https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md
*/
(function(){
	angular.module('studentaccess').controller('HomeworkCtrl', ['$localForage', '$rootScope', '$ionicPopup', '$log', '$filter', '$ionicActionSheet', 'StudentService', 'UpdateService', HomeworkCtrl]);

	function HomeworkCtrl($localForage, $rootScope, $ionicPopup, $log, $filter, $ionicActionSheet, StudentService, UpdateService) {
		var hw = this;

		function actionSheet(){
			$ionicActionSheet.show({
				titleText: "<h3>" + $filter('translate')('HOMEWORK-PICK-CLASS-FILTER') + "</h3>",
				buttons: hw.classes,
				destructiveText: $filter('translate')('HOMEWORK-CLEAR-CLASS-FILTER'),
				cancelText: $filter('translate')('HOMEWORK-CANCEL-CLASS-FILTER'),
				cancel: function() {
					$log.log('actionSheet CANCELLED');
				},
				buttonClicked: function(index) {
					hw.homeworkFilter.filter = hw.classes[index].text;
					$log.log('CLASS PICKED  place in list:', index, ' ', hw.classes[index].text);
					return true
				},
				destructiveButtonClicked: function(){
					$log.log('CLEARED the filter');
					hw.homeworkFilter = {};
					return true
				}
			});
		}
		function popup(){
			$ionicPopup.alert({
				title: $filter('translate')('HOMEWORK-NOHOMEWORK'),
				template: '<center>' + $filter('translate')('HOMEWORK-NOHOMEWORK-TEXT') + '</center>'
			});
		}

		function homework(a){
			hw.homeworkCheckList = a;
			if(JSON.stringify(a) !== '[]'){
				hw.classes = $array.filterByKey(hw.homeworkCheckList)('calc_class', 'text');
				//used 'text' as (output Key) because its what the action sheet needs for the buttons
				hw.homeworkFilter = {};
				hw.doShowFilterOptions = actionSheet;
			} else {
				hw.doShowFilterOptions = popup;
			}
		}

		hw.refresh = function(){
			$rootScope.refresh(['homeworkHomework']).then(function(data){
				if(data.homeworkHomework){
					homework(data.homeworkHomework);
				}
			});
		};

	//-=-=-=-=-=-=-=-=-=-=-=-Homework-=-=-=-=-=-=-=-=-=-=-=-//
		UpdateService.anything('STUDENT_HOMEWORK','day').then(function(){
			return StudentService.getStudentHomework();
		}).catch(function(){
			return $localForage.getItem('STUDENT_HOMEWORK',true).then(function(o){
				return o.data;
			});
			/*
			if(window.localStorage.STUDENT_HOMEWORK && window.localStorage.STUDENT_HOMEWORK !== '{}'){
				return JSON.parse(window.localStorage.STUDENT_HOMEWORK).data;
			} else {
				return [];
			}*/
		}).then(homework);
	}
})();
