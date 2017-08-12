webpackJsonp([3],{

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaffModule", function() { return StaffModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__staff__ = __webpack_require__(481);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(110);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var StaffModule = (function () {
    function StaffModule() {
    }
    StaffModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__staff__["a" /* Staff */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__staff__["a" /* Staff */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2__staff__["a" /* Staff */]]
        })
    ], StaffModule);
    return StaffModule;
}());

//# sourceMappingURL=staff.module.js.map

/***/ }),

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return expand; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__(112);

var expand = Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* trigger */])('expand', [
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* state */])('true', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({
        maxHeight: '10em',
        opacity: '1',
        padding: '',
        border: '',
        minHeight: '',
        transition: 'all 250ms cubic-bezier(0.420, 0.000, 0.580, 1.000)'
    })),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* state */])('false', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({
        maxHeight: '0',
        opacity: '.7',
        padding: '0',
        border: 'none',
        minHeight: '0',
        transition: 'all 250ms cubic-bezier(0.420, 0.000, 0.580, 1.000)'
    })),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* transition */])('void => *', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('0s')),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* transition */])('* <=> *', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('250ms ease-in-out'))
]);
//# sourceMappingURL=animations.js.map

/***/ }),

/***/ 481:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Staff; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_store__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_log__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_animations__ = __webpack_require__(303);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var Staff = (function () {
    function Staff(nav, navParams, loadingCtrl, store, log) {
        this.nav = nav;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.store = store;
        this.log = log;
        this.staff = [];
        this.filteredStaff = [];
        this.showSearch = false;
        this.loading = this.loadingCtrl.create();
    }
    Staff.prototype.ionViewDidLoad = function () {
        return __awaiter(this, void 0, void 0, function () {
            var staff, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loading.present()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, this.store.get('STAFF')];
                    case 3:
                        staff = _a.sent();
                        this.filteredStaff = this.staff = staff.staff_list;
                        return [3 /*break*/, 5];
                    case 4:
                        err_1 = _a.sent();
                        this.log.warn(err_1);
                        return [3 /*break*/, 5];
                    case 5:
                        this.loading.dismiss();
                        return [2 /*return*/];
                }
            });
        });
    };
    Staff.prototype.select = function (item) {
        if (this.activePerson === item) {
            this.activePerson = undefined;
        }
        else {
            this.activePerson = item;
        }
    };
    Staff.prototype.toggleSearch = function () {
        this.showSearch = !this.showSearch;
        if (!this.showSearch && this.filteredStaff !== this.staff) {
            this.search = '';
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
            this.log.error(e);
        }
    };
    Staff = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-staff',template:/*ion-inline-start:"/home/obedm503/projects/ncai-developers/studentaccess/src/pages/staff/staff.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-buttons left>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title *ngIf="!selected">\n      {{ \'STAFF.NAME\' | translate }}\n    </ion-title>\n    <ion-title *ngIf="selected">\n      {{ selected.calc_name }}\n    </ion-title>\n    <ion-buttons right [hidden]="selected">\n      <button ion-button (click)="toggleSearch()">\n        <ion-icon name="search"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <ion-toolbar no-border-top color="secondary" [@expand]="showSearch">\n    <ion-searchbar\n      [(ngModel)]="search"\n      (ionInput)="doSearch()"\n      [placeholder]=" \'STAFF.NAME\' | translate "\n    ></ion-searchbar>\n  </ion-toolbar>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col col-12 col-lg-6 col-md-6 offset-md-3 col-sm-12>\n        <ion-list>\n\n          <ion-card *ngFor="let item of filteredStaff">\n            <!-- shows right arrow -->\n            <button ion-item (click)="select(item.t_id)">\n              <b>{{ item.calc_status }}: </b> {{ item.calc_name }}\n            </button>\n            <ion-item text-wrap color="secondary" [@expand]="item.t_id === activePerson">\n              <ion-row [hidden]="!item.calc_phone">\n                <b ion-col>\n                  {{ \'STAFF.CELLPHONE\' | translate }}:\n                </b>\n                <a ion-col href="tel:{{ item.calc_phone }}">\n                  {{ item.calc_phone }}\n                </a>\n              </ion-row>\n              <ion-row [hidden]="!item.calc_homephone">\n                <b ion-col>\n                {{ \'STAFF.HOMEPHONE\' | translate }}:\n                </b>\n                <a ion-col href="tel:{{ item.calc_homephone }}">\n                  {{ item.calc_homephone }}\n                </a>\n              </ion-row>\n              <ion-row [hidden]="!item.calc_email">\n                <b ion-col>\n                  {{ \'GLOBAL.EMAIL\' | translate }}:\n                </b>\n                <a ion-col href="mailto:{{ item.calc_email }}">\n                  {{ item.calc_email }}\n                </a>\n              </ion-row>\n            </ion-item>\n          </ion-card>\n\n        </ion-list>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/home/obedm503/projects/ncai-developers/studentaccess/src/pages/staff/staff.html"*/,
            animations: [__WEBPACK_IMPORTED_MODULE_4__components_animations__["a" /* expand */]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__providers_store__["a" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_store__["a" /* Store */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__providers_log__["a" /* Log */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_log__["a" /* Log */]) === "function" && _e || Object])
    ], Staff);
    return Staff;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=staff.js.map

/***/ })

});
//# sourceMappingURL=3.js.map