webpackJsonp([6],{

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(426);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(108);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__login__["a" /* Login */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* Login */]),
            __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["a" /* TranslateModule */].forChild()
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__login__["a" /* Login */]
        ]
    })
], LoginModule);

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 426:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_store__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_state__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__(108);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Login; });
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
    function Login(events, nav, navParams, auth, store, state, alertCtrl, loadingCtrl, translate) {
        this.events = events;
        this.nav = nav;
        this.navParams = navParams;
        this.auth = auth;
        this.store = store;
        this.state = state;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.translate = translate;
        this.user = { username: '', password: '', language: 'en' };
        this.remember = true;
        console.log('new Login()');
    }
    Login.prototype.login = function () {
        var _this = this;
        this.showLoading();
        this.auth.login(this.user).then(function (login) {
            _this.state.remember = _this.remember;
            if (login.login_status) {
                _this.store.setUser(_this.user);
                _this.nav.setRoot('Profile');
                _this.events.publish('login', _this.user, login);
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"/home/obedm503/projects/ncai-developers/studentaccess/src/pages/login/login.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>StudentAccess</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col col-12 col-lg-6 col-md-6 offset-md-3 col-sm-12>\n        <form (ngSubmit)="login()" #registerForm="ngForm">\n          <ion-row>\n            <ion-col>\n              <ion-item>\n                <ion-label floating>\n                  {{ \'LOGIN-user-id\' | translate }}\n                </ion-label>\n                <ion-input minlength="8" maxlength="8" type="text" name="username" [(ngModel)]="user.username" required></ion-input>\n              </ion-item>\n              <ion-item>\n                <ion-label floating>\n                  {{ \'LOGIN-password\' | translate }}\n                </ion-label>\n                <ion-input\n                  minlength="7"\n                  maxlength="7"\n                  type="password"\n                  name="password"\n                  [(ngModel)]="user.password"\n                  required\n                ></ion-input>\n              </ion-item>\n              <ion-item>\n                <ion-label>{{ \'LOGIN-language\' | translate }}</ion-label>\n                <ion-select [(ngModel)]="user.language" [name]="\'LOGIN-language\' | translate">\n                  <ion-option value="en" (ionSelect)="selectLang(\'en\')">English</ion-option>\n                  <ion-option value="es" (ionSelect)="selectLang(\'es\')">Español</ion-option>\n                </ion-select>\n              </ion-item>\n              <ion-item>\n                <ion-label>{{ \'LOGIN-remember-me\' | translate }}</ion-label>\n                <ion-toggle\n                  [(ngModel)]="remember"\n                  [name]="\'LOGIN-remember-me\' | translate"\n                ></ion-toggle>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col class="signup-col">\n              <button color="secondary" ion-button class="submit-btn" full type="submit" [disabled]="!registerForm.form.valid">\n                {{ \'LOGIN-name\' | translate }}\n              </button>\n            </ion-col>\n          </ion-row>\n        </form>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/home/obedm503/projects/ncai-developers/studentaccess/src/pages/login/login.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Events */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_auth__["a" /* Auth */],
        __WEBPACK_IMPORTED_MODULE_3__providers_store__["a" /* Store */],
        __WEBPACK_IMPORTED_MODULE_4__providers_state__["a" /* State */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["c" /* TranslateService */]])
], Login);

//# sourceMappingURL=login.js.map

/***/ })

});
//# sourceMappingURL=6.main.js.map