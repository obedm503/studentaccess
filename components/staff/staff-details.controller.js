/*
trying to follow John Papa's Angular Style Guide
https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md
*/
(function(){
	angular.module('studentaccess').controller('StaffDetailsCtrl', ['$rootScope', '$log', '$state', '$stateParams', StaffDetailsCtrl]);
	
	function StaffDetailsCtrl($rootScope, $log, $state, $stateParams) {
		var staffDetails = this;
		
		staffDetails.goStaff = function(){
			$state.go('app.staff');
		};
		
		var id = $stateParams.STAFFID;
		if($rootScope.staffList && JSON.stringify($rootScope.staffList) !== '{}' && id in $rootScope.staffList){
			staffDetails.staffStatus = $rootScope.staffList[id].calc_status;
			staffDetails.staffName = $rootScope.staffList[id].calc_name;
			staffDetails.staffHomePhone = $rootScope.staffList[id].calc_homephone;
			staffDetails.staffPhone = $rootScope.staffList[id].calc_phone;
			staffDetails.staffEmail = $rootScope.staffList[id].calc_email;
		} else {
			staffDetails.goStaff();
			$log.error('StaffDetailsCtrl: data not found');
		}
	}
})();