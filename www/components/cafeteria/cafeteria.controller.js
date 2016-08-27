/*
trying to follow John Papa's Angular Style Guide
https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md
*/
(function(){
	angular.module('studentaccess').controller('CafeteriaCtrl', ['$localForage', '$filter', '$rootScope', '$log', '$timeout', 'StudentService', 'UpdateService', CafeteriaCtrl]);

	function CafeteriaCtrl($localForage, $filter, $rootScope, $log, $timeout, StudentService, UpdateService) {
		var cafeteria = this;

		function menu(y){ cafeteria.cafeteriaMenu = y; }

		function transactions(transactions){
			var months = {
				"01":"Jan",
				"02":"Feb",
				"03":"Mar",
				"04":"Apr",
				"05":"May",
				"06":"Jun",
				"07":"Jul",
				"08":"Aug",
				"09":"Sep",
				"10":"Oct",
				"11":"Nov",
				"12":"Dec",
			};

			function dataMap(x){ return x.credhist_balance; }

			function labelsMap(x){
				var date = x.credhist_datetime.replace(/\ .*/,'').split('-');
				return months[date[1]] + ', ' + date[2];
			}
			var arr = $array.groupObjects($array.reverse(transactions))([
				function(x){return (x.credhist_method === 'Crédito del Cliente' || x.credhist_method === 'Client Credit');},
				function(x){return (x.credhist_method === 'Crédito de la Familia' || x.credhist_method === 'Family Credit');}
			]);
			return {
				student:{
					data: arr[0].map(dataMap),
					labels: arr[0].map(labelsMap)
				},
				family:{
					data: arr[1].map(dataMap),
					labels: arr[1].map(labelsMap)
				}
			};
		}

		function updateChart(obj,limit){
			//make negative so the limit filter grabs the end of the arr, AKA the most recent transactions
			var lim = limit * -1;
			if(obj && limit){
				if(obj.data && Array.isArray(obj.data) && obj.labels && Array.isArray(obj.labels) && obj.labels.length > limit){
					cafeteria.chartLabels = $filter('limitTo')(obj.labels, lim);
					cafeteria.chartData = $filter('limitTo')(obj.data, lim);
					$log.log('updateChart: updated chart');
				} else { $log.log('updateChart: limit > arr.length'); }
			} else if(obj && !limit){
				cafeteria.chartLabels = obj.labels;
				cafeteria.chartData = obj.data;
			} else if(limit && !obj){
				cafeteria.chartLabels = $filter('limitTo')(cafeteria.chartLabels, lim);
				cafeteria.chartData = $filter('limitTo')(cafeteria.chartData, lim);
			} else { $log.error('updateChart: bad params'); }
		}

		function updateTransactions(u){
			cafeteria.transactionHistory = u;
			var history = transactions(u);
			cafeteria.studentTransactions = history.student;
			cafeteria.familyTransactions = history.family;
			if(cafeteria.current === 'CAFETERIA-STUDENT'){ updateChart(cafeteria.studentTransactions); }
			else { updateChart(cafeteria.familyTransactions); }
			$timeout(function(){
				updateChart(null,10);
			},9000);
		}

		cafeteria.refresh = function(){
			$rootScope.refresh(['cafeteriaMenu','cafeteriaTransactions']).then(function(data){
				if(data.cafeteriaMenu){
					menu(data.cafeteriaMenu);
				}
				if(data.cafeteriaTransactions){
					updateTransactions(data.cafeteriaTransactions);
				}
			});
		};

		cafeteria.switch = function(){
			var h;
			if(cafeteria.current === 'CAFETERIA-STUDENT'){
				cafeteria.current = 'CAFETERIA-FAMILY';
				h = cafeteria.familyTransactions;
			} else {
				cafeteria.current = 'CAFETERIA-STUDENT';
				h = cafeteria.studentTransactions;
			}
			updateChart(h,10);
		};

		cafeteria.emptySearchBar = function (){ cafeteria.searchBar = {}; };
		cafeteria.doShowSearchBar = function(){
			cafeteria.showSearchBar = (cafeteria.showSearchBar === true) ? false : true;
			cafeteria.searchBar = {};
			cafeteria.transactionLimit = (cafeteria.showSearchBar === true) ? cafeteria.transactionLimit + 9 : cafeteria.transactionLimit - 9;
		};

		cafeteria.transactionShowLess = function(){
			cafeteria.transactionLimit = cafeteria.transactionLimit - 9;
			$log.log(cafeteria.transactionLimit + ' >= ' + cafeteria.transactionHistory.length);
		};
		cafeteria.transactionShowMore = function(){
			cafeteria.transactionLimit = cafeteria.transactionLimit + 9;
			$log.log(cafeteria.transactionLimit + ' < ' + cafeteria.transactionHistory.length);
		};

		//init some stuff
		cafeteria.chartLabels = [];
		cafeteria.chartData = [];
		cafeteria.searchBar = {};
		cafeteria.transactionLimit = 3;
		cafeteria.current = 'CAFETERIA-STUDENT';

	//-=-=-=-=-=-=-=-=-=-=-=-Menu-=-=-=-=-=-=-=-=-=-=-=-//
		UpdateService.anything('STUDENT_MENU','day').then(function(){
			return StudentService.getStudentCafeteria();
		}).catch(function(){
			return $localForage.getItem('STUDENT_MENU', true).then(function(o){ return o.data; });
			/*
			if(window.localStorage.STUDENT_MENU && window.localStorage.STUDENT_MENU !== '{}'){
				return JSON.parse(window.localStorage.STUDENT_MENU).data;
			} else {
				$log.error('menu in local storage is empty');
				return [];
			}*/
		}).then(menu);

	//-=-=-=-=-=-=-=-=-=-=-=-Transaction Hist and Charts-=-=-=-=-=-=-=-=-=-=-=-//
		UpdateService.anything('STUDENT_TRANSACTIONS','month').then(function(){
			return StudentService.getStudentCredit();
		}).catch(function(){
			return $localForage.getItem('STUDENT_TRANSACTIONS', true).then(function(o){ return o.data; });
			/*
			if(window.localStorage.STUDENT_TRANSACTIONS && window.localStorage.STUDENT_TRANSACTIONS !== '{}'){
				return JSON.parse(window.localStorage.STUDENT_TRANSACTIONS).data;
			} else {
				$log.error('transaction history in local storage is empty');
				return [];
			}*/
		}).then(updateTransactions);
	}
})();
