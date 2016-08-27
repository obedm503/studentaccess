/*
trying to follow John Papa's Angular Style Guide
https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md
*/
(function(angular){
  angular.module('studentaccess').config(['$logProvider', '$compileProvider', '$translateProvider', '$stateProvider', '$urlRouterProvider', config]);

	function config($logProvider, $compileProvider, $translateProvider, $stateProvider, $urlRouterProvider) {
		//set to false if in production
		$compileProvider.debugInfoEnabled(true);
		$logProvider.debugEnabled(true);

		$translateProvider.translations('en', {
			"PULL-TO-REFRESH":"Pull to refresh...",
			"LOGOUT":"Logout",
			"SEARCH":"Search...",

			"LOGIN-USER":"User ID",
			"LOGIN-PASSWORD":"Password",
			"LOGIN":"Login",
			"LOGIN-LOADING":"Loading...",

			"PROFILE-VIEW-TITLE": "Profile",
			"PROFILE-BORN": "Born",
			"PROFILE-ENROLLED":"You are in ",
			"PROFILE-ENROLLED2":"th grade",
			"PROFILE-BALANCE":"Credit",
			"PROFILE-RECORDS":"Records",
			"PROFILE-DOCUMENTS":"Documents",
			"PROFILE-MISSING":"Missing Assignments",
			"PROFILE-MISSING-WORTH":"Worth",
			"PROFILE-MISSING-POINTS":"Points",
			"CHECK-UR-GRADES":"Check your Grades",
			"PROFILE-BALANCE-FAM":"Family Credits",
			"PROFILE-CLASS-SCHEDULE":"Class Schedule",
			"PROFILE-NO-SCHEDULE":"No Schedule Found!",

			"HOMEWORK-VIEW-TITLE":"Homework",
			"HOMEWORK-ASSIGNMENTS":"Today's homework",
			"HOMEWORK-NOHOMEWORK":"There's no homework!",
			"HOMEWORK-NOHOMEWORK-TEXT":"But that's not that bad... ;)",
			"HOMEWORK-PICK-CLASS-FILTER":"Pick a Class",
			"HOMEWORK-CLEAR-CLASS-FILTER":"Clear Filter",
			"HOMEWORK-CANCEL-CLASS-FILTER":"Cancel",

			"GRADES-VIEW-TITLE":"Grades",
			"GRADES-WITHHELD":"Your grades have been withheld. Please pay the caja to restore them.",
			"GRADES-TEACHER-PHONE":"Phone",
			"GRADES-TEACHER-CONTACT":"Contact Info",
			"GRADES-TEACHER-EMAIL":"Email",
			"GRADES-CLASS-ROOM":"Room",
			"GRADES-BREAKDOWN":"Grading Scale",
			"GRADES-YOUR-GRADE":"Grade",
			"GRADES-CLASS-AVERAGE":"Class Average",
			"GRADES-CLASS-PERIOD":"Period",
			"GRADES-CLASS-TERM":"Term",
			"GRADES-LAST-UPDATED":"Last Update",
			"GRADES-NOCLASSES":"No classes here... it could be worse ;)",
      "GRADES-GRADES":"Grades",
      "GRADES-NO-GRADES-LIST":"No grades found.",

			"EVENTS-VIEW-TITLE":"Events",
			"EVENTS-LOCATION":"Location",
			"EVENTS-TIME":"Time",
			"EVENTS-DATE":"Date",
			"EVENTS-NOEVENTS":"THERE ARE NO EVENTS!",

			"CAFETERIA-VIEW-TITLE":"Cafeteria",
			"CAFETERIA-NOFOOD":"WE HAVE NO FOOOOOOOOD!",
			"CAFETERIA-TODAYS-FOOD":"Today's lunch",
			"CAFETERIA-BALANCE-HISTORY":"Balance History",
			"CAFETERIA-TRANSACTION-METHOD":"Account",
			"CAFETERIA-TRANSACTION-ITEM":"Item",
			"CAFETERIA-TRANSACTION-AUTHORIZED-BY":"Authorized By",
			"CAFETERIA-TRANSACTION-DATE-TIME":"Date-Time",
			"CAFETERIA-TRANSACTION-PRICE":"Price",
			"CAFETERIA-TRANSACTION-HISTORY":"Transaction History",
			"CAFETERIA-SHOW-MORE":"Show More...",
			"CAFETERIA-SHOW-LESS":"Show Less...",
			"CAFETERIA-NOTHING-FOUND":"Nothing Found",
			"CAFETERIA-STUDENT":"Student",
			"CAFETERIA-FAMILY":"Family",
			"CAFETERIA-NO-FAMILY-TRANSACTIONS":"No Family Transactions",
			"CAFETERIA-NO-STUDENT-TRANSACTIONS":"No Student Transactions",

			"STAFF-VIEW-TITLE":"Staff",
			"STAFF-HOME-PHONE":"Home Phone",
			"STAFF-PHONE":"CellPhone",
			"STAFF-EMAIL":"Email",

			"SETTINGS-VIEW-TITLE":"Settings",
			"SETTINGS-SELECTED-LANG":"Selected Language",
			"SETTINGS-SELECTED-THEME":"Selected Theme",
			"SETTINGS-THEME-LIGHT":"Light",
			"SETTINGS-THEME-DARK":"Dark",
			"SETTINGS-THEME-MILD":"Mild",
			"SETTINGS-SUGGESTIONS":"Suggestions",
			"SETTINGS-YOUR-NAME":"Name",
			"SETTINGS-SUGGESTION-SUBJECT":"Subject",
			"SETTINGS-SUGGESTION-BODY":"Comment",
			"SETTINGS-SUGGESTION-MAILUS":"Mail Us",
			"SETTINGS-DELETE-PICS":"Delete Pics",
			"SETTINGS-DELETE-PICS-MESSAGE":"For performance and data savings reasons, we store profiles pictures. You may wish to delete currently stored pictures for reasons unknown to  mankind;  ¯\\_(ツ)_/¯. Understand, this cannot be undone.",
			"SETTINGS-NO-PICS":"No other pictures are stored.",
			"SETTINGS-DELETE":"Delete",
			"SETTINGS-CANCEL":"Cancel",
      "SETTINGS-DELETE-TITLE":"Delete Stored pictures"
		});
		$translateProvider.translations('es', {
			"PULL-TO-REFRESH":"Hale para refrescar...",
			"LOGOUT":"Salir",
			"SEARCH":"Buscar...",

			"LOGIN-USER":"ID de Usuario",
			"LOGIN-PASSWORD":"Contraseña",
			"LOGIN":"Entrar",
			"LOGIN-LOADING":"Cargando...",

			"PROFILE-VIEW-TITLE": "Perfil",
			"PROFILE-BORN": "Nacido",
			"PROFILE-ENROLLED":"Usted esta en ",
			"PROFILE-ENROLLED2":"º grado",
			"PROFILE-BALANCE":"Credito",
			"PROFILE-RECORDS":"Registros",
			"PROFILE-DOCUMENTS":"Documentos",
			"PROFILE-MISSING":"Tareas Pendientes",
			"PROFILE-MISSING-WORTH":"Valor",
			"PROFILE-MISSING-POINTS":"Puntos",
			"CHECK-UR-GRADES":"Revisar Notas",
			"PROFILE-BALANCE-FAM":"Credito Familiar",
			"PROFILE-CLASS-SCHEDULE":"Horario de Clases",
			"PROFILE-NO-SCHEDULE":"No Se Encontró Horario!",

			"HOMEWORK-VIEW-TITLE":"Tareas",
			"HOMEWORK-ASSIGNMENTS":"Tareas del dia",
			"HOMEWORK-NOHOMEWORK":"No hay tareas!",
			"HOMEWORK-NOHOMEWORK-TEXT":"Pero eso no es tan malo... ;)",
			"HOMEWORK-PICK-CLASS-FILTER":"Elegir Clase",
			"HOMEWORK-CLEAR-CLASS-FILTER":"Todas las Clases",
			"HOMEWORK-CANCEL-CLASS-FILTER":"Cancelar",

			"GRADES-VIEW-TITLE":"Notas",
			"GRADES-WITHHELD":"Tus notas han sido retenidas. Por favor pagar a la caja para restaurarlas",
			"GRADES-TEACHER-PHONE":"Teléfono",
			"GRADES-TEACHER-CONTACT":"Info de Contacto",
			"GRADES-TEACHER-EMAIL":"Correo Electronico",
			"GRADES-CLASS-ROOM":"Aula",
			"GRADES-BREAKDOWN":"Escala",
			"GRADES-YOUR-GRADE":"Nota",
			"GRADES-CLASS-AVERAGE":"Promedio de Clase",
			"GRADES-CLASS-PERIOD":"Periodo",
			"GRADES-CLASS-TERM":"Semestre",
			"GRADES-LAST-UPDATED":"Ultima Actualizacion",
			"GRADES-NOCLASSES":"No hay classes... ;)",
      "GRADES-GRADES":"Notas",
      "GRADES-NO-GRADES-LIST":"No se encontraron notas.",

			"EVENTS-VIEW-TITLE":"Eventos",
			"EVENTS-LOCATION":"Lugar",
			"EVENTS-TIME":"Hora",
			"EVENTS-DATE":"Fecha",
			"EVENTS-NOEVENTS":"NO HAY EVENTOS!",

			"CAFETERIA-VIEW-TITLE":"Cafetería",
			"CAFETERIA-NOFOOD":"NO HAY COMIIIIIIDA!",
			"CAFETERIA-TODAYS-FOOD":"Almuerzo del dia",
			"CAFETERIA-BALANCE-HISTORY":"Balance",
			"CAFETERIA-TRANSACTION-METHOD":"Cuenta",
			"CAFETERIA-TRANSACTION-ITEM":"Objeto",
			"CAFETERIA-TRANSACTION-AUTHORIZED-BY":"Autorizado Por",
			"CAFETERIA-TRANSACTION-DATE-TIME":"Fecha-Hora",
			"CAFETERIA-TRANSACTION-PRICE":"Precio",
			"CAFETERIA-TRANSACTION-HISTORY":"Transacciones",
			"CAFETERIA-SHOW-MORE":"Mostrar Mas...",
			"CAFETERIA-SHOW-LESS":"Mostrar Menos...",
			"CAFETERIA-NOTHING-FOUND":"No se encontró nada",
			"CAFETERIA-STUDENT":"Estudiante",
			"CAFETERIA-FAMILY":"Familia",
			"CAFETERIA-NO-FAMILY-TRANSACTIONS":"No Hay Trasacciones de Familia",
			"CAFETERIA-NO-STUDENT-TRANSACTIONS":"No Hay Trasacciones del Estudiante",

			"STAFF-VIEW-TITLE":"Personal",
			"STAFF-HOME-PHONE":"Telefono",
			"STAFF-PHONE":"Telefono Celular",
			"STAFF-EMAIL":"Correo Electronico",

			"SETTINGS-VIEW-TITLE":"Ajustes",
			"SETTINGS-SELECTED-LANG":"Lenguaje Seleccionado",
			"SETTINGS-SELECTED-THEME":"Tema Seleccionado",
			"SETTINGS-THEME-LIGHT":"Claro",
			"SETTINGS-THEME-DARK":"Oscuro",
			"SETTINGS-THEME-MILD":"Tranquilo",
			"SETTINGS-SUGGESTIONS":"Sugerencias",
			"SETTINGS-YOUR-NAME":"Nombre",
			"SETTINGS-SUGGESTION-SUBJECT":"Tema",
			"SETTINGS-SUGGESTION-BODY":"Comentario",
			"SETTINGS-SUGGESTION-MAILUS":"Enviar",
			"SETTINGS-DELETE-PICS":"Borrar Fotos",
			"SETTINGS-DELETE-PICS-MESSAGE":"Por rasones de rendimiento y ahorro de internet, las fotos de perfil se guardan localmente. Puede que usted quiera borrar las fotos de otras personas por razones no conocidas a la humanidad; ¯\\_(ツ)_/¯. Esto no se puede deshacer.",
			"SETTINGS-NO-PICS":"No hay otras fotos guardadas.",
			"SETTINGS-DELETE":"Borrar",
			"SETTINGS-CANCEL":"Cancelar",
      "SETTINGS-DELETE-TITLE":"Borrar Fotos Guardadas"
		});
		$translateProvider.preferredLanguage('en');
		$translateProvider.useSanitizeValueStrategy('escaped');

    //templates are now cached
    //the file 'components/login/login.html' does not exist in that location
    //components were moved to outside 'www' to reduce package size
		$stateProvider
			.state('login', {
				url: '/login',
				templateUrl: 'components/login/login.html',
				controller: 'LoginCtrl as login'
			})
			.state('app', {
				url: '/app',
				abstract: true,
				templateUrl: 'components/menu/sidemenu.html',
				controller: 'AppCtrl',
				controllerAs: 'app'
			})
			.state('app.profile', {
				url: '/profile',
				views: {
					'master-view': {
						templateUrl: 'components/profile/profile.html',
						controller: 'ProfileCtrl as profile'
					}
			 }
			})
			.state('app.homework', {
				url: '/homework',
				views: {
					'master-view': {
						templateUrl: 'components/homework/homework.html',
						controller: 'HomeworkCtrl as homework'
					}
				}
			})
			.state('app.grades', {
				url: '/grades',
				views: {
					'master-view': {
						templateUrl: 'components/grades/grades.html',
						controller: 'GradesCtrl as grades'
					}
				}
			})
			.state('app.grades.gradeDetails', {
				url: '/:PERIODID/:TEACHERID', //had to use class period and teacher id so it wouldnt get confused when a single teacher teaches 2 dif classes
				views: {
					'master-view@app': {
						templateUrl: 'components/grades/grades-details.html',
						controller:'GradesDetailsCtrl as gradesDetails'
					}
				}
			})
			.state('app.events', {
				url: '/events',
				views: {
					'master-view': {
						templateUrl: 'components/events/events.html',
						controller: 'EventsCtrl as events'
					}
				}
			})
			.state('app.events.eventDetails', {
				url: '/:EVENTID',
				views: {
					'master-view@app': {
						templateUrl: 'components/events/event-details.html',
						controller:'EventsDetailsCtrl as eventsDetails'
					}
				}
			})
			.state('app.cafeteria', {
				url: '/cafeteria',
				views: {
					'master-view': {
						templateUrl: 'components/cafeteria/cafeteria.html',
						controller: 'CafeteriaCtrl as cafeteria'
					}
				}
			})
			.state('app.staff', {
				url: '/staff',
				views: {
					'master-view': {
						templateUrl: 'components/staff/staff.html',
						controller:'StaffCtrl as staff'
					}
				}
			})
			.state('app.staff.staffDetails', {
				url: '/:STAFFID',
				views: {
					'master-view@app': {
						templateUrl: 'components/staff/staff-details.html',
						controller:'StaffDetailsCtrl as staffDetails'
					}
				}
			})
			.state('app.settings', {
				url: '/settings',
				views: {
					'master-view': {
						templateUrl: 'components/settings/settings.html',
						controller: 'SettingsCtrl as settings'
					}
				}
			});

		$urlRouterProvider.otherwise(function ($injector, $location) {
			$injector.get("$state").go("app.profile");
		});
	}
})(window.angular);
