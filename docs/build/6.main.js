webpackJsonp([6],{

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__homework__ = __webpack_require__(425);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(108);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeworkModule", function() { return HomeworkModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var HomeworkModule = (function () {
    function HomeworkModule() {
    }
    return HomeworkModule;
}());
HomeworkModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__homework__["a" /* Homework */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__homework__["a" /* Homework */]),
            __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["a" /* TranslateModule */].forChild()
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__homework__["a" /* Homework */]
        ]
    })
], HomeworkModule);

//# sourceMappingURL=homework.module.js.map

/***/ }),

/***/ 425:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_store__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth__ = __webpack_require__(110);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Homework; });
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var Homework = (function () {
    function Homework(nav, navParams, translate, alert, store, auth) {
        this.nav = nav;
        this.navParams = navParams;
        this.translate = translate;
        this.alert = alert;
        this.store = store;
        this.auth = auth;
        this.homework = [];
        this.selectedClass = 'all-classes';
    }
    Homework.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.store.get('HOMEWORK').then(function (hw) {
            if (hw === void 0) { hw = { homework: [] }; }
            // this.homework serves as a backup
            // this.filteredHw is presented in view
            _this.filteredHw = _this.homework = hw.homework;
            _this.classes = _this.homework
                .filter(function (el, i, arr) { return arr.findIndex(function (t) { return t.calc_class === el.calc_class; }) === i; })
                .map(function (el) { return ({
                type: 'radio',
                label: el.calc_class,
                value: el.calc_class
            }); });
            _this.classes.push({
                type: 'radio',
                label: _this.translate.instant('HOMEWORK-all-classes'),
                value: 'all-classes'
            });
        });
    };
    Homework.prototype.popover = function (e) {
        var _this = this;
        this.alert.create({
            title: this.translate.instant('HOMEWORK-title'),
            buttons: [
                this.translate.instant('CANCEL'),
                {
                    text: 'OK',
                    handler: function (className) {
                        _this.selectedClass = className;
                        if (className === 'all-classes') {
                            _this.filteredHw = _this.homework;
                        }
                        else {
                            _this.filteredHw = _this.homework.filter(function (hw) { return className === hw.calc_class; });
                        }
                    }
                }
            ],
            inputs: this.classes.map(function (button) { return (__assign({}, button, { checked: button.value === _this.selectedClass })); })
        }).present();
    };
    return Homework;
}());
Homework = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
        selector: 'page-homework',template:/*ion-inline-start:"/home/obedm503/projects/ncai-developers/studentaccess/src/pages/homework/homework.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-buttons left>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>{{ \'HOMEWORK-name\' | translate }}</ion-title>\n    <ion-buttons right>\n      <button ion-button (click)="popover($event)">\n        <ion-icon name="more"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col col-12 col-lg-6 col-md-6 offset-md-3 col-sm-12>\n        <ion-list>\n          <ion-item\n            text-wrap\n            *ngFor="let item of filteredHw"\n            [class.gray]="item.lsn_date == store.today"\n          >\n            <ion-label>\n              {{ item.calc_date }}\n              <br>\n              <strong>{{ item.calc_class }}: </strong>\n              {{ item.lsn_hw }}\n            </ion-label>\n            <ion-checkbox color="primary"></ion-checkbox>\n          </ion-item>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/home/obedm503/projects/ncai-developers/studentaccess/src/pages/homework/homework.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_store__["a" /* Store */],
        __WEBPACK_IMPORTED_MODULE_4__providers_auth__["a" /* Auth */]])
], Homework);

//# sourceMappingURL=homework.js.map

/***/ })

});
//# sourceMappingURL=6.main.js.map