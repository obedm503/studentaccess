webpackJsonp([1],{

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__grades__ = __webpack_require__(424);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(419);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(108);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GradesModule", function() { return GradesModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var GradesModule = (function () {
    function GradesModule() {
    }
    return GradesModule;
}());
GradesModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        declarations: [__WEBPACK_IMPORTED_MODULE_2__grades__["a" /* Grades */]],
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__grades__["a" /* Grades */]),
            __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["a" /* TranslateModule */].forChild()
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_2__grades__["a" /* Grades */]],
    })
], GradesModule);

//# sourceMappingURL=grades.module.js.map

/***/ }),

/***/ 419:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ribbon_ribbon__ = __webpack_require__(420);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__ribbon_ribbon__["a" /* Ribbon */]
        ],
        imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* IonicModule */]],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__ribbon_ribbon__["a" /* Ribbon */]
        ]
    })
], ComponentsModule);

//# sourceMappingURL=components.module.js.map

/***/ }),

/***/ 420:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Ribbon; });
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Input */])('average'),
    __metadata("design:type", Number)
], Ribbon.prototype, "avg", void 0);
Ribbon = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
        selector: 'ribbon',
        template: "\n  <div class=\"protector\">\n    <div class=\"ribbon {{ ribbon }}\">\n      <div class=\"circle {{ circle }}\">\n        <span class=\"text\">\n          {{ avg }}\n        </span>\n      </div>\n    </div>\n  </div>\n  "
    })
], Ribbon);

//# sourceMappingURL=ribbon.js.map

/***/ }),

/***/ 424:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_store__ = __webpack_require__(109);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Grades; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Grades = (function () {
    function Grades(nav, loadingCtrl, store) {
        this.nav = nav;
        this.loadingCtrl = loadingCtrl;
        this.store = store;
        this.classes = [];
        this.teachers = [];
        this.loading = this.loadingCtrl.create();
    }
    Grades.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.loading.present();
        this.store.get('SCHEDULE')
            .then(function (_a) {
            var overall_avg = (_a === void 0 ? {} : _a).overall_avg;
            return _this.avg = overall_avg;
        });
        this.store.get('ALLGRADES')
            .then(function (_a) {
            var classes = (_a === void 0 ? {} : _a).classes;
            return _this.classes = classes;
        });
        this.store.get('TEACHERS')
            .then(function (_a) {
            var teachers = (_a === void 0 ? {} : _a).teachers;
            _this.teachers = teachers;
            _this.loading.dismiss();
        });
    };
    Grades.prototype.goSelected = function (item) {
        this.nav.push('GradesDetail', {
            class: item,
            teachers: this.teachers
        });
    };
    return Grades;
}());
Grades = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
        selector: 'page-grades',template:/*ion-inline-start:"/home/obedm503/projects/ncai-developers/studentaccess/src/pages/grades/grades.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>{{ \'GRADES-name\' | translate }}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col col-12 col-lg-6 col-md-6 offset-md-3 col-sm-12>\n        <ribbon [average]="avg"></ribbon>\n        <ion-card *ngFor="let item of classes">\n          <button ion-item [attr.disabled]="teachers.length ? null : \'\'" (click)="goSelected(item)">\n            <b>\n              [{{ item.class_period }}] {{ item.class_name }}<span [hidden]="!item.class_avg">: </span>\n            </b>\n            <span [hidden]="!item.class_avg">\n              {{ item.class_avg }}\n            </span>\n          </button>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/home/obedm503/projects/ncai-developers/studentaccess/src/pages/grades/grades.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_store__["a" /* Store */]])
], Grades);

//# sourceMappingURL=grades.js.map

/***/ })

});
//# sourceMappingURL=1.main.js.map