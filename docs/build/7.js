webpackJsonp([7],{

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(468);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(105);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var LoginModule = (function () {
    function LoginModule() {
    }
    return LoginModule;
}());
LoginModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__login__["a" /* Login */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* Login */]),
            __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild()
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__login__["a" /* Login */]
        ]
    })
], LoginModule);

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 468:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Login; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_store__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_state__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_log__ = __webpack_require__(205);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var Login = (function () {
    function Login(events, nav, navParams, auth, store, state, alertCtrl, loadingCtrl, translate, log) {
        this.events = events;
        this.nav = nav;
        this.navParams = navParams;
        this.auth = auth;
        this.store = store;
        this.state = state;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.translate = translate;
        this.log = log;
        this.user = { username: '', password: '', language: 'en' };
        this.remember = true;
        this.log.debug('new Login()');
    }
    Login.prototype.login = function () {
        var _this = this;
        this.showLoading();
        this.auth.login(this.user).then(function (login) {
            _this.state.remember = _this.remember;
            if (login.login_status) {
                _this.store.setUser(_this.user);
                // this.nav.setRoot('Profile');
                _this.events.publish('login', _this.user, login, 'Profile');
            }
            else {
                _this.showError(_this.translate.instant('LOGIN-fail'));
                _this.user.password = '';
                _this.user.username = '';
            }
        }).catch(function (err) {
            if (err === null) {
                _this.showError(_this.translate.instant('LOGIN-no-credentials'));
            }
            else {
                _this.showError(err);
            }
        });
    };
    Login.prototype.selectLang = function (lang) {
        this.translate.use(lang);
    };
    Login.prototype.showLoading = function () {
        this.loading = this.loadingCtrl.create({
            dismissOnPageChange: true
        });
        this.loading.present();
    };
    Login.prototype.showError = function (text) {
        this.loading.dismiss();
        this.alertCtrl.create({
            title: 'Error',
            subTitle: text,
            buttons: ['OK']
        }).present();
    };
    return Login;
}());
Login = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"/home/obedm503/projects/ncai-developers/studentaccess/src/pages/login/login.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>StudentAccess</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col col-12 col-lg-6 col-md-6 offset-md-3 col-sm-12>\n        <form (ngSubmit)="login()" #registerForm="ngForm">\n          <ion-row>\n            <ion-col>\n              <ion-item>\n                <ion-label floating>\n                  {{ \'LOGIN-user-id\' | translate }}\n                </ion-label>\n                <ion-input minlength="7" maxlength="8" type="text" name="username" [(ngModel)]="user.username" required></ion-input>\n              </ion-item>\n              <ion-item>\n                <ion-label floating>\n                  {{ \'LOGIN-password\' | translate }}\n                </ion-label>\n                <ion-input\n                  minlength="7"\n                  maxlength="7"\n                  type="password"\n                  name="password"\n                  [(ngModel)]="user.password"\n                  required\n                ></ion-input>\n              </ion-item>\n              <ion-item>\n                <ion-label>{{ \'LOGIN-language\' | translate }}</ion-label>\n                <ion-select [(ngModel)]="user.language" [name]="\'LOGIN-language\' | translate">\n                  <ion-option value="en" (ionSelect)="selectLang(\'en\')">English</ion-option>\n                  <ion-option value="es" (ionSelect)="selectLang(\'es\')">Español</ion-option>\n                </ion-select>\n              </ion-item>\n              <ion-item>\n                <ion-label>{{ \'LOGIN-remember-me\' | translate }}</ion-label>\n                <ion-toggle\n                  [(ngModel)]="remember"\n                  [name]="\'LOGIN-remember-me\' | translate"\n                ></ion-toggle>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col class="signup-col">\n              <button color="secondary" ion-button class="submit-btn" full type="submit" [disabled]="!registerForm.form.valid">\n                {{ \'LOGIN-name\' | translate }}\n              </button>\n            </ion-col>\n          </ion-row>\n        </form>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/home/obedm503/projects/ncai-developers/studentaccess/src/pages/login/login.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__providers_auth__["a" /* Auth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_auth__["a" /* Auth */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__providers_store__["a" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_store__["a" /* Store */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__providers_state__["a" /* State */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__providers_state__["a" /* State */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_6__providers_log__["a" /* Log */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__providers_log__["a" /* Log */]) === "function" && _k || Object])
], Login);

var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
//# sourceMappingURL=login.js.map

/***/ })

});
//# sourceMappingURL=7.js.map