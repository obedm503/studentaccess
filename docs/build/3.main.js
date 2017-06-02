webpackJsonp([3],{

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile__ = __webpack_require__(427);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(108);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileModule", function() { return ProfileModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ProfileModule = (function () {
    function ProfileModule() {
    }
    return ProfileModule;
}());
ProfileModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__profile__["a" /* Profile */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__profile__["a" /* Profile */]),
            __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["a" /* TranslateModule */].forChild()
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__profile__["a" /* Profile */]
        ]
    })
], ProfileModule);

//# sourceMappingURL=profile.module.js.map

/***/ }),

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__(211);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return expand; });

var expand = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["a" /* trigger */])('expand', [
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["b" /* state */])('true', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({
        maxHeight: '7em',
        opacity: '1',
        padding: '',
        border: '',
        minHeight: '',
        transition: 'all 250ms cubic-bezier(0.420, 0.000, 0.580, 1.000)'
    })),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["b" /* state */])('false', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({
        maxHeight: '0',
        opacity: '.7',
        padding: '0',
        border: 'none',
        minHeight: '0',
        transition: 'all 250ms cubic-bezier(0.420, 0.000, 0.580, 1.000)'
    })),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["d" /* transition */])('void => *', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('0s')),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["d" /* transition */])('* <=> *', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('250ms ease-in-out'))
]);
//# sourceMappingURL=animations.js.map

/***/ }),

/***/ 427:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_store__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_animations__ = __webpack_require__(303);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Profile; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var Profile = (function () {
    function Profile(nav, navParams, alert, translate, loadingCtrl, store) {
        this.nav = nav;
        this.navParams = navParams;
        this.alert = alert;
        this.translate = translate;
        this.loadingCtrl = loadingCtrl;
        this.store = store;
        this.loading = this.loadingCtrl.create();
        this.schedules = [];
        this.selectedSchedule = {
            type: '',
            schedule: []
        };
        this.lang = this.translate.currentLang;
        this.missing = [];
        this.showMissing = false;
        this.birth = '';
        this.studentName = '';
        this.grade = '';
        this.familyCredit = '0.00';
        this.studentCredit = '0.00';
        this.personImage = './assets/placeholder.jpg';
        this.attendance = [];
        this.discipline = [];
    }
    Profile.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.loading.present();
        this.store.get('MISSING').then(function (hw) {
            if (hw === void 0) { hw = { missing: [] }; }
            _this.missing = hw.missing;
        });
        this.store.get('LOGIN').then(function (login) {
            if (login === void 0) { login = { birthdate: '' }; }
            _this.birth = login.birthdate.replace(/-/ig, ' ');
            _this.studentName = login.person_name;
            _this.grade = login.grade;
            _this.familyCredit = login.credit_family;
            _this.studentCredit = login.credit_student;
        });
        this.store.get('SCHEDULES').then(function (schedules) {
            if (schedules === void 0) { schedules = [{}]; }
            _this.schedules = schedules;
            _this.selectedSchedule = schedules[0];
        });
        this.store.get('IMAGE').then(function (img) {
            if (img === void 0) { img = ''; }
            _this.personImage = "data:image/jpeg;base64," + img;
            _this.loading.dismiss();
        });
        this.store.get('RECORDS').then(function (records) {
            if (records === void 0) { records = { attendance: [], discipline: [] }; }
            _this.attendance = records.attendance;
            _this.discipline = records.discipline;
        });
    };
    Profile.prototype.toggleSchedule = function () {
        var _this = this;
        var inputs = this.schedules.map(function (el) { return ({
            type: 'radio',
            label: el[_this.lang],
            value: el.type,
            checked: el.type === _this.selectedSchedule.type
        }); });
        this.alert.create({
            title: this.translate.instant('PROFILE-select-schedule'),
            buttons: [
                this.translate.instant('CANCEL'),
                {
                    text: 'OK',
                    handler: function (type) {
                        _this.selectedSchedule = _this.schedules.find(function (schedule) { return schedule.type === type; });
                    }
                }
            ],
            inputs: inputs
        }).present();
    };
    Profile.prototype.toggleMissing = function () {
        this.showMissing = !this.showMissing;
    };
    Profile.prototype.goSelected = function (opts) {
        this.nav.push('Records', opts);
    };
    Profile.prototype.goGrades = function () {
        this.nav.setRoot('Grades');
    };
    return Profile;
}());
Profile = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
        selector: 'page-profile',template:/*ion-inline-start:"/home/obedm503/projects/ncai-developers/studentaccess/src/pages/profile/profile.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>{{ \'PROFILE-name\' | translate }}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col col-lg-5 offset-lg-1 col-md-6 col-sm-12 col-12>\n        <ion-card>\n          <ion-item class="dark-gray">\n            <ion-row>\n              <ion-col col-5 col-sm-5 col-md-4 col-lg-3>\n                <ion-avatar>\n                  <img [src]="personImage">\n                </ion-avatar>\n              </ion-col>\n              <ion-col col-7 col-sm-7 col-md-8 col-lg-9 class="person-col">\n                <span class="person">\n                  {{ studentName }}\n                  <br>\n                  {{ birth }}\n                  <br>\n                  {{ grade }}{{ \'PROFILE-th-grade\' | translate }}\n                </span>\n              </ion-col>\n            </ion-row>\n          </ion-item>\n          <ion-item>\n            <ion-icon name="person" item-left></ion-icon>\n            {{ \'PROFILE-student-credit\' | translate }}\n            <ion-badge item-right>{{ studentCredit | currency:\'USD\':true:\'1.2-2\' }}</ion-badge>\n          </ion-item>\n          <ion-item>\n            <ion-icon name="people" item-left></ion-icon>\n            {{ \'PROFILE-family-credit\' | translate }}\n            <ion-badge item-right>{{ familyCredit | currency:\'USD\':true:\'1.2-2\' }}</ion-badge>\n          </ion-item>\n          <button ion-item (click)="goSelected({attendance: attendance})">\n            <ion-icon name="alarm" color="danger" item-left></ion-icon>\n            {{ \'RECORDS-attendance\' | translate }}\n            <ion-badge color="danger" item-right>{{ attendance.length }}</ion-badge>\n          </button>\n          <button ion-item (click)="goSelected({discipline: discipline})">\n            <ion-icon name="checkmark-circle" color="danger" item-left></ion-icon>\n            {{ \'RECORDS-discipline\' | translate }}\n            <ion-badge color="danger" item-right>{{ discipline.length }}</ion-badge>\n          </button>\n        </ion-card>\n\n        <ion-card class="card-fab">\n          <button class="fab-top-right" ion-fab (click)="toggleMissing()">\n            {{ missing.length }}\n          </button>\n          <ion-card-header>\n            {{ \'PROFILE-missing-assignments\' | translate }}\n          </ion-card-header>\n          <ion-list>\n            <ion-item\n              text-wrap\n              *ngFor="let item of missing"\n              [@expand]="showMissing"\n              class="alternate-colors"\n            >\n              <ion-label>\n                {{ item.calc_date }}\n                <br>\n                <strong>{{ item.calc_class }}: </strong>\n                {{ item.gra_name }}\n                <br>\n                <strong>{{ \'PROFILE-worth\' | translate }}: </strong> {{ item.gra_points }} {{ \'PROFILE-points\' | translate }}\n              </ion-label>\n              <ion-checkbox color="primary"></ion-checkbox>\n            </ion-item>\n          </ion-list>\n          <button ion-item color="secondary" (click)="goGrades()">\n            {{ \'PROFILE-check-grades\' | translate }}\n          </button>\n        </ion-card>\n      </ion-col>\n      <ion-col col-lg-5 col-md-6 col-sm-12 col-12>\n        <ion-card class="card-fab">\n          <button class="fab-top-right" ion-fab (click)="toggleSchedule()">\n            <ion-icon name="swap"></ion-icon>\n          </button>\n\n          <ion-card-header>\n            {{ \'PROFILE-schedule\' | translate }} | {{ selectedSchedule[lang] }}\n          </ion-card-header>\n          <ion-list>\n            <ion-item *ngFor="let item of selectedSchedule.schedule" class="alternate-colors">\n              <ion-row>\n                <ion-col>\n                  {{ item.period }}\n                </ion-col>\n                <ion-col>\n                  {{ item.begin }}\n                  <br>\n                  {{ item.end }}\n                </ion-col>\n              </ion-row>\n            </ion-item>\n          </ion-list>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/home/obedm503/projects/ncai-developers/studentaccess/src/pages/profile/profile.html"*/,
        animations: [__WEBPACK_IMPORTED_MODULE_4__components_animations__["a" /* expand */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_store__["a" /* Store */]])
], Profile);

//# sourceMappingURL=profile.js.map

/***/ })

});
//# sourceMappingURL=3.main.js.map