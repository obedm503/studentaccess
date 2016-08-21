/*
trying to follow John Papa's Angular Style Guide
https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md
*/
(function(){
	angular.module('studentaccess').controller('EventsDetailsCtrl', ['$rootScope', '$log', '$stateParams', '$state', EventsDetailsCtrl]);
	
	function EventsDetailsCtrl($rootScope, $log, $stateParams, $state) {
		var eventsDetails = this;
		
		eventsDetails.goEvents = function(){
			$state.go('app.events');
		};
		
		var id = $stateParams.EVENTID;
		if($rootScope.eventsList && JSON.stringify($rootScope.eventsList) !== '{}' && id in $rootScope.eventsList){
			eventsDetails.eventSubject = $rootScope.eventsList[id].calc_subject;
			eventsDetails.eventStartDate = $rootScope.eventsList[id].ev_date_start;
			eventsDetails.eventStartTime = $rootScope.eventsList[id].ev_time_start;
			eventsDetails.eventEndTime = $rootScope.eventsList[id].ev_time_end;
			eventsDetails.eventEndDate = $rootScope.eventsList[id].ev_date_end;
			eventsDetails.eventLocation = $rootScope.eventsList[id].calc_location;
			eventsDetails.eventText = $rootScope.eventsList[id].calc_text;
			eventsDetails.eventCalcStartDate = $rootScope.eventsList[id].calc_ev_date_start;
			eventsDetails.eventCalcStartTime = $rootScope.eventsList[id].calc_ev_time_start;
		} else {
			eventsDetails.goEvents();
			$log.error('EventsDetailsCtrl: data not found');
		}
	}
})();