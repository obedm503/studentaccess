/*
trying to follow John Papa's Angular Style Guide
https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md
*/
(function(angular){
  angular.module('studentaccess', ['ionic','ionic.service.core','ionic-material','ionic.service.analytics','ngCordova', 'pascalprecht.translate','dcbImgFallback','ionic.ion.imageCacheFactory','chart.js','LocalForageModule'])
  .run(['$ionicAnalytics','$ionicConfig','$log','$ImageCacheFactory','$timeout','$ionicPlatform','$cordovaSplashscreen', '$rootScope','$state','$window', run])
  .constant('AUTH_EVENTS', {
    notAuthenticated: 'auth-not-authenticated'
  });
  function run($ionicAnalytics, $ionicConfig, $log, $ImageCacheFactory, $timeout, $ionicPlatform, $cordovaSplashscreen, $rootScope, $state, $window){
    $log.debug('run');
    $ionicPlatform.ready(function() {
      $log.debug('ready');
      $ionicAnalytics.register();
      if(ionic.Platform.grade.toLowerCase() !== 'a' && ionic.Platform.grade.toLowerCase() !== 'b'){
        $ionicConfig.views.transition('none');
      }

      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if(typeof cordova !== 'undefined' && cordova.plugins.Keyboard){ cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true); }

      if (typeof cordova !== 'undefined' && typeof $cordovaKeyboard !== 'undefined'){ $cordovaKeyboard.hideAccessoryBar(true); }

      if(typeof StatusBar !== 'undefined'){
        window.StatusBar.styleDefault();
        window.StatuBar.overlaysWebView(false);
      }

      if(typeof cordova !== 'undefined' && cordova.platformId === 'android'){ StatusBar.backgroundColorByHexString("#EEEEEE"); }

    }).then(function(){
      if(typeof navigator.splashscreen !== 'undefined'){
        $timeout(function(){
          navigator.splashscreen.hide();
        }, 500);
      }
    });

    $rootScope.$on('$stateChangeStart', function(event, next, nextParams, fromState){
      if(navigator.onLine === true){
        $rootScope.connection = 'online';
      } else {
        $rootScope.connection = 'offline';
      }
      $rootScope.online = navigator.onLine;

      if(window.localStorage.auth !== 'true' && next.name !== 'login') {
        event.preventDefault();
        $state.go('login');
      }
    });

    $ImageCacheFactory.Cache([
      "img/bg-mild.jpg",
      "img/bg-dark.jpg",
      "img/bg-light.jpg",
      "img/placeholder-rec.jpg",
      "img/placeholder-square.jpg",
      "img/icon.png"
    ]).then(function(){
      $log.debug("Images done loading!");
    },function(failed){
      $log.debug("Image failed: " + failed);
    });

    $window.addEventListener("offline", function() {
      $rootScope.$apply(function() {
        $rootScope.online = false;
        $rootScope.connection = 'offline';
      });
      //NetworkService.alert('offline');
      $log.warn('you are now offline');
    }, false);

    $window.addEventListener("online", function() {
      $rootScope.$apply(function() {
        $rootScope.online = true;
        $rootScope.connection = 'online';
      });
      //NetworkService.alert('online');
      $log.warn('you are now online');
    }, false);
  }
})(window.angular);
