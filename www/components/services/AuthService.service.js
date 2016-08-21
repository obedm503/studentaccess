/*
trying to follow John Papa's Angular Style Guide
https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md
*/
(function(angular){
	angular.module('studentaccess').service('AuthService', ['$log', '$q', '$http', '$rootScope', '$localForage', 'StudentService', AuthService]);

	function AuthService($log, $q, $http, $rootScope, $localForage, StudentService) {
		var apiUrl = 'https://db.nca.edu.ni/api/api_ewapp.php',
				isAuthenticated = false,
				loginData,
				creds;
				returns = {
					login: login,
					logout: logout,
				};

		function useCredentials(login, inputs){
			window.localStorage.auth = 'true';
			isAuthenticated = true;
			//no one will ever notice
			$rootScope.personName = (login.person_name === 'Jacob Orozco') ? 'LOL' : login.person_name;
			$rootScope.userInputsName = inputs.user;
			$rootScope.userInputsPass = inputs.pass;
		}

		function storeUserCredentials(login, inputs){
			$localForage.setItem(['USER_INPUTS','STUDENT_LOGIN'], [inputs, StudentService.attachDate(login)]);
			useCredentials(login, inputs);
		}

		function loadUserCredentials(){
			$localForage.getItem(['STUDENT_LOGIN','USER_INPUTS'],true).then(function(a){
				useCredentials(a[0].data, a[1]);
			},function(){
				isAuthenticated = false;
				window.localStorage.auth = 'false';
			});
		}

		function login(name, pw){
			return $q(function(resolve, reject) {
				$http({
					url: apiUrl,
					method: 'GET',
					params: {mode: 'student', query: 'login', username: name, password: pw}
				}).then(function(result){
					loginData = result.data;
					if (loginData.login_status === 1){
						storeUserCredentials(loginData, {user: name, pass: pw});
						resolve('success');
						$localForage.setItem('STUDENT_LOGIN', StudentService.attachDate(loginData));
					} else { reject('fail'); }
				}, function(result){
					if(result.status <= 0){ reject(0); }
					else { reject('else'); }
				});
			});
		}

		function logout(){
			isAuthenticated = false;
			window.localStorage.auth = 'false';
			$localForage.removeItem(['STUDENT_LOGIN','STUDENT_MISSING', 'STUDENT_HOMEWORK', 'STUDENT_SCHEDULE', 'STUDENT_GRADES', 'STUDENT_EVENTS', 'STUDENT_MENU', 'STUDENT_TRANSACTIONS', 'SCHEDULES', 'STAFF', 'TEACHERS', 'USER_INPUTS']);
		}

		loadUserCredentials();
		return returns;
	}
})(window.angular);
