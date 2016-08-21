/*
trying to follow John Papa's Angular Style Guide
https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md
*/
(function(){
	angular.module('studentaccess').controller('EventsCtrl', ['$localForage', '$rootScope', 'StudentService', 'UpdateService', EventsCtrl]);
	
	function EventsCtrl($localForage, $rootScope, StudentService, UpdateService) {
		var events = this;
		
		function updateEvents(a){
			events.events = a;
			$rootScope.eventsList = $array.convertToObject(a)('ev_id');
		}
		
		events.refresh = function(){
			$rootScope.refresh(['eventsEvents']).then(function(data){
				if(data.eventsEvents){
					updateEvents(data.eventsEvents);
				}
			});
		};
		
		UpdateService.anything('STUDENT_EVENTS','day').then(function(){
			return StudentService.getStudentEvents();
		}).catch(function(){
			return $localForage.getItem('STUDENT_EVENTS', true).then(function(o){ return o.data; });
		}).then(updateEvents);
	}
})();