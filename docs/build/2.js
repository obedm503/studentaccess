webpackJsonp([2],{

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GradesDetailModule", function() { return GradesDetailModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__grades_detail__ = __webpack_require__(466);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(105);
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__grades_detail__["a" /* GradesDetail */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__grades_detail__["a" /* GradesDetail */]),
            __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["b" /* TranslateModule */].forChild()
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__grades_detail__["a" /* GradesDetail */]
        ]
    })
], GradesDetailModule);

//# sourceMappingURL=grades-detail.module.js.map

/***/ }),

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ribbon_ribbon__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__grade_badge_grade_badge__ = __webpack_require__(296);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ComponentsModule = (function () {
    function ComponentsModule() {
    }
    return ComponentsModule;
}());
ComponentsModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__ribbon_ribbon__["a" /* Ribbon */],
            __WEBPACK_IMPORTED_MODULE_3__grade_badge_grade_badge__["a" /* GradeBadge */]
        ],
        imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicModule */]],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__ribbon_ribbon__["a" /* Ribbon */],
            __WEBPACK_IMPORTED_MODULE_3__grade_badge_grade_badge__["a" /* GradeBadge */]
        ]
    })
], ComponentsModule);

//# sourceMappingURL=components.module.js.map

/***/ }),

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Ribbon; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Ribbon = (function () {
    function Ribbon() {
    }
    Ribbon.prototype.ngOnChanges = function (changes) {
        var avg = changes.avg.currentValue;
        if (avg === null) {
            this.avg = '$$.$';
            this.setState('owe');
        }
        else if (avg <= 60) {
            this.setState('fail');
        }
        else if (avg > 60 && avg < 80) {
            this.setState('bad');
        }
        else if (avg >= 80 && avg < 95) {
            this.setState('good');
        }
        else if (avg >= 95) {
            this.setState('best');
        }
        else {
            this.avg = '??.?';
            this.setState('none');
        }
    };
    Ribbon.prototype.setState = function (state) {
        this.circle = state + "-circle";
        this.ribbon = state + "-ribbon";
    };
    return Ribbon;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('average'),
    __metadata("design:type", Number)
], Ribbon.prototype, "avg", void 0);
Ribbon = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'ribbon',
        template: "\n  <div class=\"protector\">\n    <div class=\"ribbon {{ ribbon }}\">\n      <div class=\"circle {{ circle }}\">\n        <span class=\"text\">\n          {{ avg }}\n        </span>\n      </div>\n    </div>\n  </div>\n  "
    })
], Ribbon);

//# sourceMappingURL=ribbon.js.map

/***/ }),

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GradeBadge; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GradeBadge = (function () {
    function GradeBadge() {
    }
    return GradeBadge;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('grade'),
    __metadata("design:type", Number)
], GradeBadge.prototype, "avg", void 0);
GradeBadge = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'grade-badge',
        template: "\n  <ion-badge\n    [hidden]=\"!avg\"\n    [class.fail-background]=\"avg <= 60\"\n    [class.bad-background]=\"avg > 60 && avg < 80\"\n    [class.good-background]=\"avg >= 80 && avg < 95\"\n    [class.best-background]=\"avg >= 95\"\n  >\n    {{ avg }}\n  </ion-badge>\n  "
    })
], GradeBadge);

//# sourceMappingURL=grade-badge.js.map

/***/ }),

/***/ 466:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GradesDetail; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_store__ = __webpack_require__(106);
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
        this.grades = [];
        this.teacherPic = './assets/placeholder.jpg';
    }
    GradesDetail.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.class = this.navParams.get('class');
        this.grades = this.class.grades.slice(0).reverse();
        this.teacher = this.navParams
            .get('teachers')
            .find(function (el) { return el.teacher_id === _this.class.class_teacher_id; });
        this.teacherPic = this.teacher ? "data:image/jpeg;base64," + this.teacher.teacher_pic : this.teacherPic;
    };
    return GradesDetail;
}());
GradesDetail = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])({
        defaultHistory: ['Grades'],
        segment: 'grades' // same as 'Grades' url to help with deeplinks
    }),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-grades-detail',template:/*ion-inline-start:"/home/obedm503/projects/ncai-developers/studentaccess/src/pages/grades-detail/grades-detail.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>{{ class.class_name }}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col\n        [attr.col-lg-5]="grades.length ? \'\' : null"\n        [attr.offset-lg-1]="grades.length ? \'\' : null"\n        [attr.col-lg-6]="!grades.length ? \'\' : null"\n        [attr.offset-lg-3]="!grades.length ? \'\' : null"\n\n        [attr.col-md-5]="grades.length ? \'\' : null"\n        [attr.offset-md-1]="grades.length ? \'\' : null"\n        [attr.col-md-6]="!grades.length ? \'\' : null"\n        [attr.offset-md-3]="!grades.length ? \'\' : null"\n\n        col-sm-12 col-12\n      >\n        <ion-card>\n          <ion-item class="dark-gray" text-wrap>\n            <ion-row>\n              <ion-col col-5 col-sm-5 col-md-4 col-lg-3>\n                <ion-avatar>\n                  <img [src]="teacherPic">\n                </ion-avatar>\n              </ion-col>\n              <ion-col col-7 col-sm-7 col-md-8 col-lg-9 class="person-col">\n                <span class="person">\n                  {{ teacher.teacher_name }}\n                  <span [hidden]="!teacher.teacher_email">\n                    <br>\n                    {{ \'GLOBAL.EMAIL\' | translate }}:\n                    <a href="mailto:{{ teacher.teacher_email }}">\n                      {{ teacher.teacher_email }}\n                    </a>\n                  </span>\n                  <span [hidden]="!teacher.teacher_phone">\n                    <br>\n                    {{ \'GRADES.PHONE\' | translate }}:\n                    <a href="tel:{{ teacher.teacher_phone }}">\n                      {{ teacher.teacher_phone }}\n                    </a>\n                  </span>\n                </span>\n              </ion-col>\n            </ion-row>\n          </ion-item>\n        </ion-card>\n\n        <ion-card>\n          <ion-card-header ion-item>\n            {{ class.class_name }}\n            <grade-badge item-right [grade]="class.class_avg"></grade-badge>\n          </ion-card-header>\n          <ion-card-content [hidden]="!class.class_description">\n            {{ class.class_description }}\n          </ion-card-content>\n          <ion-item text-wrap color="secondary">\n            <ion-row [hidden]="!class.class_period">\n              <b ion-col>\n                {{ \'GRADES.PERIOD\' | translate }}\n              </b>\n              <ion-col>\n                <ion-badge>{{ class.class_period }}</ion-badge>\n              </ion-col>\n            </ion-row>\n            <ion-row [hidden]="!class.class_room">\n              <b ion-col>\n                {{ \'GRADES.ROOM\' | translate }}\n              </b>\n              <ion-col>\n                {{ class.class_room }}\n              </ion-col>\n            </ion-row>\n            <ion-row [hidden]="!class.class_scale">\n              <b ion-col>\n                {{ \'GRADES.GRADING_SCALE\' | translate }}\n              </b>\n              <ion-col>\n                {{ class.class_scale }}\n              </ion-col>\n            </ion-row>\n            <ion-row [hidden]="!class.class_updated">\n              <b ion-col>\n                {{ \'GRADES.LAST_UPDATED\' | translate }}\n              </b>\n              <ion-col>\n                {{ class.class_updated }}\n              </ion-col>\n            </ion-row>\n          </ion-item>\n        </ion-card>\n      </ion-col>\n      <ion-col col-lg-5 col-md-5 col-sm-12 col-12 [hidden]="!grades.length">\n        <ion-card>\n          <ion-card-header>\n            {{ \'GRADES.NAME\' | translate }}\n          </ion-card-header>\n          <ion-list>\n            <ion-item text-wrap *ngFor="let item of grades" class="alternate-colors">\n              <ion-row>\n                <ion-col>\n                  <b>\n                    {{ item.calc_date }}\n                  </b>\n                </ion-col>\n                <ion-col>\n                  <b>{{ item.grc_code }}:</b> {{ item.gra_name }}\n                  <div [hidden]="!item.calc_percent">\n                    <b>{{ \'GRADES.GRADE\' | translate }}:</b> {{ item.grs_score }}/{{ item.gra_points }}\n                    <span\n                      [class.fail-grade]="(item.grs_score/item.gra_points)*100 <= 60"\n                      [class.bad-grade]="(item.grs_score/item.gra_points)*100 > 60 && (item.grs_score/item.gra_points)*100 < 80"\n                      [class.good-grade]="(item.grs_score/item.gra_points)*100 >= 80 && (item.grs_score/item.gra_points) < .95"\n                      [class.best-grade]="(item.grs_score/item.gra_points)*100 >= 95"\n                    >({{ item.calc_percent }})</span>\n                  </div>\n                </ion-col>\n              </ion-row>\n            </ion-item>\n          </ion-list>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/home/obedm503/projects/ncai-developers/studentaccess/src/pages/grades-detail/grades-detail.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_store__["a" /* Store */]])
], GradesDetail);

//# sourceMappingURL=grades-detail.js.map

/***/ })

});
//# sourceMappingURL=2.js.map