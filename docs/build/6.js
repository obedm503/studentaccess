webpackJsonp([6],{

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecordsModule", function() { return RecordsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__records__ = __webpack_require__(470);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(105);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var RecordsModule = (function () {
    function RecordsModule() {
    }
    return RecordsModule;
}());
RecordsModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [__WEBPACK_IMPORTED_MODULE_2__records__["a" /* Records */]],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__records__["a" /* Records */]),
            __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild()
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_2__records__["a" /* Records */]]
    })
], RecordsModule);

//# sourceMappingURL=records.module.js.map

/***/ }),

/***/ 470:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Records; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Records = (function () {
    function Records(navParams) {
        this.navParams = navParams;
        this.attendance = [];
        this.discipline = [];
    }
    Records.prototype.ionViewDidEnter = function () {
        this.discipline = this.navParams.get('discipline');
        this.attendance = this.navParams.get('attendance');
        this.title = this.attendance ? 'RECORDS.ATTENDANCE' : 'RECORDS.DISCIPLINE';
    };
    return Records;
}());
Records = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])({
        defaultHistory: ['Profile'],
        segment: 'profile'
    }),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-records',template:/*ion-inline-start:"/home/obedm503/projects/ncai-developers/studentaccess/src/pages/records/records.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>{{ title | translate }}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col col-12 col-lg-6 col-md-6 offset-md-3 col-sm-12>\n        <ion-list *ngIf="attendance">\n          <ion-card *ngFor="let item of attendance">\n            <ion-item [color]="item.at_cat == \'E\' ? \'secondary\' : \'danger\'">\n              {{ \'RECORDS.CATEGORY\' | translate}}: {{ item.at_cat }}\n              <br>\n              {{ \'RECORDS.QUARTER\' | translate}}: {{ item.at_qtr }}\n              <br>\n              {{ \'RECORDS.REASON\' | translate }}: {{ item.calc_cat }}\n              <br>\n              {{ \'GLOBAL.DATE\' | translate }}: {{ item.calc_date }}\n              <br>\n              {{ \'RECORDS.DAY\' | translate }}: {{ item.calc_day }}\n            </ion-item>\n          </ion-card>\n        </ion-list>\n\n        <ion-list *ngIf="discipline">\n          <ion-card *ngFor="let item of discipline">\n            <ion-item [color]="item.ds_cat == \'L\' ? \'secondary\' : \'danger\'">\n              {{ item.ds_cat }}: {{ item.calc_cat }}\n              <br>\n              {{ \'GLOBAL.DATE\' | translate }}: {{ item.calc_date }}\n              <br>\n              {{ \'RECORDS.TEACHER\' | translate }}: {{ item.calc_teacher }}\n              <br>\n              {{ \'RECORDS.REASON\' | translate }}: {{ item.calc_comment }}\n              <br>\n              {{ \'RECORDS.QUARTER\' | translate}}: {{ item.ds_qtr }}\n            </ion-item>\n          </ion-card>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/home/obedm503/projects/ncai-developers/studentaccess/src/pages/records/records.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]) === "function" && _a || Object])
], Records);

var _a;
//# sourceMappingURL=records.js.map

/***/ })

});
//# sourceMappingURL=6.js.map