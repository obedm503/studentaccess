webpackJsonp([2],{

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__staff__ = __webpack_require__(429);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(108);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaffModule", function() { return StaffModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var StaffModule = (function () {
    function StaffModule() {
    }
    return StaffModule;
}());
StaffModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        declarations: [__WEBPACK_IMPORTED_MODULE_2__staff__["a" /* Staff */]],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__staff__["a" /* Staff */]),
            __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["a" /* TranslateModule */].forChild()
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_2__staff__["a" /* Staff */]]
    })
], StaffModule);

//# sourceMappingURL=staff.module.js.map

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

/***/ 429:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_store__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_animations__ = __webpack_require__(303);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Staff; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Staff = (function () {
    function Staff(nav, navParams, store) {
        this.nav = nav;
        this.navParams = navParams;
        this.store = store;
        this.staff = [];
        this.filteredStaff = [];
        this.toggled = false;
    }
    Staff.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.selected = this.navParams.get('selected');
        if (!this.selected) {
            this.store.get('STAFF').then(function (staff) {
                if (staff === void 0) { staff = { staff_list: [] }; }
                _this.filteredStaff = _this.staff = staff.staff_list;
            });
        }
    };
    Staff.prototype.goSelected = function (item) {
        this.nav.push('Staff', {
            selected: item
        });
    };
    Staff.prototype.toggleSearch = function () {
        this.toggled = !this.toggled;
        if (!this.toggled && this.filteredStaff !== this.staff) {
            this.filteredStaff = this.staff;
        }
    };
    Staff.prototype.doSearch = function () {
        try {
            var query_1 = this.search.toLowerCase().trim();
            this.filteredStaff = this.staff.filter(function (el) {
                return el.calc_name.toLowerCase().indexOf(query_1) > -1 ||
                    el.calc_status.toLowerCase().indexOf(query_1) > -1;
            });
        }
        catch (e) {
            console.warn(e);
        }
    };
    return Staff;
}());
Staff = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
        selector: 'page-staff',template:/*ion-inline-start:"/home/obedm503/projects/ncai-developers/studentaccess/src/pages/staff/staff.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-buttons left>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title *ngIf="!selected">\n      {{ \'STAFF-name\' | translate }}\n    </ion-title>\n    <ion-title *ngIf="selected">\n      {{ selected.calc_name }}\n    </ion-title>\n    <ion-buttons right [hidden]="selected">\n      <button ion-button (click)="toggleSearch()">\n        <ion-icon name="search"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <ion-toolbar\n    no-border-top\n    color="secondary"\n    [@expand]="toggled"\n  >\n    <ion-searchbar\n      [(ngModel)]="search"\n      (ionInput)="doSearch()"\n      [placeholder]=" \'STAFF-name\' | translate "\n    ></ion-searchbar>\n  </ion-toolbar>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col col-12 col-lg-6 col-md-6 offset-md-3 col-sm-12>\n        <ion-list *ngIf="!selected">\n          <!--<ion-card>-->\n            <ion-item detail-push (click)="goSelected(item)" *ngFor="let item of filteredStaff">\n              <b>{{ item.calc_status }}: </b> {{ item.calc_name }}\n            </ion-item>\n          <!--</ion-card>-->\n        </ion-list>\n\n        <ion-card *ngIf="selected">\n          <ion-card-header>\n            {{ selected.calc_name }} | {{ selected.calc_status }}\n          </ion-card-header>\n          <ion-item text-wrap color="secondary">\n            <ion-row color="secondary" [hidden]="!selected.calc_phone">\n              <b ion-col>\n                {{ \'STAFF-cellphone\' | translate }}:\n              </b>\n              <a ion-col href="tel:{{ selected.calc_phone }}">\n                {{ selected.calc_phone }}\n              </a>\n            </ion-row>\n            <ion-row [hidden]="!selected.calc_homephone">\n              <b ion-col>\n                {{ \'STAFF-homephone\' | translate }}:\n              </b>\n              <a ion-col href="tel:{{ selected.calc_homephone }}">\n                {{ selected.calc_homephone }}\n              </a>\n            </ion-row>\n            <ion-row [hidden]="!selected.calc_email">\n              <b ion-col>\n                {{ \'STAFF-email\' | translate }}:\n              </b>\n              <a ion-col href="mailto:{{ selected.calc_email }}">\n                {{ selected.calc_email }}\n              </a>\n            </ion-row>\n          </ion-item>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/home/obedm503/projects/ncai-developers/studentaccess/src/pages/staff/staff.html"*/,
        animations: [__WEBPACK_IMPORTED_MODULE_3__components_animations__["a" /* expand */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_store__["a" /* Store */]])
], Staff);

//# sourceMappingURL=staff.js.map

/***/ })

});
//# sourceMappingURL=2.main.js.map