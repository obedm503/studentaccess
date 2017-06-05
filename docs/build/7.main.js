webpackJsonp([7],{

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__grades_detail__ = __webpack_require__(423);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(108);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GradesDetailModule", function() { return GradesDetailModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var GradesDetailModule = (function () {
    function GradesDetailModule() {
    }
    return GradesDetailModule;
}());
GradesDetailModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__grades_detail__["a" /* GradesDetail */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__grades_detail__["a" /* GradesDetail */]),
            __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["a" /* TranslateModule */].forChild()
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__grades_detail__["a" /* GradesDetail */]
        ]
    })
], GradesDetailModule);

//# sourceMappingURL=grades-detail.module.js.map

/***/ }),

/***/ 423:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_store__ = __webpack_require__(109);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GradesDetail; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GradesDetail = (function () {
    function GradesDetail(navParams, store) {
        this.navParams = navParams;
        this.store = store;
        this.class = { class_name: '', class_teacher_id: '', grades: [] };
        this.teacher = { teacher_pic: '' };
        this.teacherPic = './assets/placeholder.jpg';
    }
    GradesDetail.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.class = this.navParams.get('class');
        this.class.grades = this.class.grades.reverse();
        this.teacher = this.navParams
            .get('teachers')
            .find(function (el) { return el.teacher_id === _this.class.class_teacher_id; });
        this.teacherPic = this.teacher ? "data:image/jpeg;base64," + this.teacher.teacher_pic : this.teacherPic;
    };
    return GradesDetail;
}());
GradesDetail = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])({
        defaultHistory: ['Grades'],
        segment: 'grades' // same as 'Grades' url to help with deeplinks
    }),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
        selector: 'page-grades-detail',template:/*ion-inline-start:"/home/obedm503/projects/ncai-developers/studentaccess/src/pages/grades-detail/grades-detail.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>{{ class.class_name }}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col\n        [attr.col-lg-5]="class.grades.length ? \'\' : null"\n        [attr.offset-lg-1]="class.grades.length ? \'\' : null"\n        [attr.col-lg-6]="!class.grades.length ? \'\' : null"\n        [attr.offset-lg-3]="!class.grades.length ? \'\' : null"\n\n        [attr.col-md-5]="class.grades.length ? \'\' : null"\n        [attr.offset-md-1]="class.grades.length ? \'\' : null"\n        [attr.col-md-6]="!class.grades.length ? \'\' : null"\n        [attr.offset-md-3]="!class.grades.length ? \'\' : null"\n\n        col-sm-12 col-12\n      >\n        <ion-card>\n          <ion-item class="dark-gray" text-wrap>\n            <ion-row>\n              <ion-col col-5 col-sm-5 col-md-4 col-lg-3>\n                <ion-avatar>\n                  <img [src]="teacherPic">\n                </ion-avatar>\n              </ion-col>\n              <ion-col col-7 col-sm-7 col-md-8 col-lg-9 class="person-col">\n                <span class="person">\n                  {{ teacher.teacher_name }}\n                  <span [hidden]="!teacher.teacher_email">\n                    <br>\n                    {{ \'GRADES-email\' | translate }}:\n                    <a href="mailto:{{ teacher.teacher_email }}">\n                      {{ teacher.teacher_email }}\n                    </a>\n                  </span>\n                  <span [hidden]="!teacher.teacher_phone">\n                    <br>\n                    {{ \'GRADES-phone\' | translate }}:\n                    <a href="tel:{{ teacher.teacher_phone }}">\n                      {{ teacher.teacher_phone }}\n                    </a>\n                  </span>\n                </span>\n              </ion-col>\n            </ion-row>\n          </ion-item>\n        </ion-card>\n\n        <ion-card [class.card-fab]="class.class_avg">\n          <button\n            [hidden]="!class.class_avg"\n            ion-fab class="fab-top-right"\n            [class.fail-background]="class.class_avg <= 60"\n            [class.bad-background]="class.class_avg > 60 && class.class_avg < 80"\n            [class.good-background]="class.class_avg >= 80 && class.class_avg < 95"\n            [class.best-background]="class.class_avg >= 95"\n          >\n            {{ class.class_avg }}\n          </button>\n          <ion-card-header>\n            {{ class.class_name }}\n          </ion-card-header>\n          <ion-card-content [hidden]="!class.class_description">\n            {{ class.class_description }}\n          </ion-card-content>\n          <ion-item text-wrap color="secondary">\n            <ion-row [hidden]="!class.class_period">\n              <b ion-col>\n                {{ \'GRADES-period\' | translate }}\n              </b>\n              <ion-col>\n                <ion-badge>{{ class.class_period }}</ion-badge>\n              </ion-col>\n            </ion-row>\n            <ion-row [hidden]="!class.class_room">\n              <b ion-col>\n                {{ \'GRADES-room\' | translate }}\n              </b>\n              <ion-col>\n                {{ class.class_room }}\n              </ion-col>\n            </ion-row>\n            <ion-row [hidden]="!class.class_scale">\n              <b ion-col>\n                {{ \'GRADES-grading-scale\' | translate }}\n              </b>\n              <ion-col>\n                {{ class.class_scale }}\n              </ion-col>\n            </ion-row>\n            <ion-row [hidden]="!class.class_updated">\n              <b ion-col>\n                {{ \'GRADES-last-updated\' | translate }}\n              </b>\n              <ion-col>\n                {{ class.class_updated }}\n              </ion-col>\n            </ion-row>\n          </ion-item>\n        </ion-card>\n      </ion-col>\n      <ion-col col-lg-5 col-md-5 col-sm-12 col-12 [hidden]="!class.grades.length">\n        <ion-card>\n          <ion-card-header>\n            {{ \'GRADES-name\' | translate }}\n          </ion-card-header>\n          <ion-list>\n            <ion-item text-wrap *ngFor="let item of class.grades" class="alternate-colors">\n              <ion-row>\n                <ion-col>\n                  <b>\n                    {{ item.calc_date }}\n                  </b>\n                </ion-col>\n                <ion-col>\n                  <b>{{ item.grc_code }}:</b> {{ item.gra_name }}\n                  <div [hidden]="!item.calc_percent">\n                    <b>{{ \'GRADES-grade\' | translate }}:</b> {{ item.grs_score }}/{{ item.gra_points }}\n                    <span\n                      [class.fail-grade]="(item.grs_score/item.gra_points)*100 <= 60"\n                      [class.bad-grade]="(item.grs_score/item.gra_points)*100 > 60 && (item.grs_score/item.gra_points)*100 < 80"\n                      [class.good-grade]="(item.grs_score/item.gra_points)*100 >= 80 && (item.grs_score/item.gra_points) < .95"\n                      [class.best-grade]="(item.grs_score/item.gra_points)*100 >= 95"\n                    >({{ item.calc_percent }})</span>\n                  </div>\n                </ion-col>\n              </ion-row>\n            </ion-item>\n          </ion-list>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/home/obedm503/projects/ncai-developers/studentaccess/src/pages/grades-detail/grades-detail.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_store__["a" /* Store */]])
], GradesDetail);

//# sourceMappingURL=grades-detail.js.map

/***/ })

});
//# sourceMappingURL=7.main.js.map