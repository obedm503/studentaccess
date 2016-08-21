/*
trying to follow John Papa's Angular Style Guide
https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md
*/
(function(){
	angular.module('studentaccess').controller('StaffCtrl', ['$scope','$localForage','$rootScope', '$log', 'StudentService', 'UpdateService', StaffCtrl]);

	function StaffCtrl($scope, $localForage, $rootScope, $log, StudentService, UpdateService) {
		var staff = this;

		staff.loadMore = function(){
			staff.limit += 10;
			$scope.$broadcast('scroll.infiniteScrollComplete');
		};

		staff.emptySearchBar = function(){
			staff.searchBar.bar = "";
		};

		function updateStaff(a){
			staff.staffList = a;
			$rootScope.staffList = $array.convertToObject(a)('t_id');
		}

		staff.doShowSearchBar = function(){
			staff.showSearchBar = staff.showSearchBar ? false : true;
			staff.searchBar.bar = "";
		};

		staff.refresh = function(){
			$rootScope.refresh(['staffStaff']).then(function(data){
				if(data.staffStaff){
					updateStaff(data.staffStaff);
				}
			});
		};

		UpdateService.anything('STAFF', 'month').then(function(){
			return StudentService.getStudentStaff();
		}).catch(function(){
			return $localForage.getItem('STAFF', true).then(function(o){ return o.data; });
			/*
			if(window.localStorage.STAFF && window.localStorage.STAFF !== '{}'){
				return JSON.parse(window.localStorage.STAFF).data;
			} else {
				return [];
			}*/
		}).then(updateStaff);

		staff.searchBar = {};
		staff.limit = 15;
	}
})();
