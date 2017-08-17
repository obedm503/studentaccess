webpackJsonp([5],{

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeworkModule", function() { return HomeworkModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__homework__ = __webpack_require__(478);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(111);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var HomeworkModule = (function () {
    function HomeworkModule() {
    }
    HomeworkModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__homework__["a" /* Homework */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__homework__["a" /* Homework */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__homework__["a" /* Homework */]
            ]
        })
    ], HomeworkModule);
    return HomeworkModule;
}());

//# sourceMappingURL=homework.module.js.map

/***/ }),

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return expand; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__(113);

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

/***/ 478:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Homework; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_store__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_log__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_animations__ = __webpack_require__(304);
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






var Homework = (function () {
    function Homework(translate, alert, loadingCtrl, store, log) {
        this.translate = translate;
        this.alert = alert;
        this.loadingCtrl = loadingCtrl;
        this.store = store;
        this.log = log;
        this.homework = [];
        this.filteredHw = [];
        this.selectedClass = 'all-classes';
        this.hideChecked = true;
        this.loading = this.loadingCtrl.create();
    }
    Homework.prototype.ionViewDidEnter = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loading.present()];
                    case 1:
                        _a.sent();
                        this.getHomework();
                        this.loading.dismiss();
                        return [2 /*return*/];
                }
            });
        });
    };
    Homework.prototype.getHomework = function (refresh) {
        if (refresh === void 0) { refresh = false; }
        return __awaiter(this, void 0, void 0, function () {
            var hw, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.store.get('HOMEWORK', function (_a) {
                                var newData = _a.newData, _b = _a.oldData, oldData = _b === void 0 ? { homework: [] } : _b;
                                return (__assign({}, newData, { homework: newData.homework.map(function (item) {
                                        if (oldData.homework.find(function (el) { return item.lsn_id === el.lsn_id && el.checked; })) {
                                            item.checked = true;
                                        }
                                        return item;
                                    }) }));
                            }, refresh)];
                    case 1:
                        hw = _a.sent();
                        // this.homework serves as a backup
                        // this.filteredHw is presented in view
                        this.filteredHw = this.homework = hw.homework.slice(0).reverse();
                        return [3 /*break*/, 3];
                    case 2:
                        err_1 = _a.sent();
                        this.log.warn(err_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    Homework.prototype.popover = function (e) {
        var _this = this;
        this.classes = this.homework
            .filter(function (el, i, arr) { return arr.findIndex(function (t) { return t.calc_class === el.calc_class; }) === i; })
            .map(function (el) { return ({
            type: 'radio',
            label: el.calc_class,
            value: el.calc_class
        }); });
        this.classes.push({
            type: 'radio',
            label: this.translate.instant('HOMEWORK.ALL_CLASSES'),
            value: 'all-classes'
        });
        this.alert.create({
            title: this.translate.instant('HOMEWORK.TITLE'),
            buttons: [
                this.translate.instant('GLOBAL.CANCEL'),
                {
                    text: this.translate.instant('GLOBAL.OK'),
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
    Homework.prototype.check = function (item) {
        var index = this.homework.findIndex(function (el) { return el.lsn_id === item.lsn_id; });
        this.homework[index] = item;
        this.store.persist();
    };
    Homework.prototype.refreshHomework = function (refresher) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getHomework(true)];
                    case 1:
                        _a.sent();
                        refresher.complete();
                        return [2 /*return*/];
                }
            });
        });
    };
    Homework = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-homework',template:/*ion-inline-start:"/home/obedm503/projects/ncai-developers/studentaccess/src/pages/homework/homework.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-buttons left>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>{{ \'HOMEWORK.NAME\' | translate }}</ion-title>\n    <ion-buttons right>\n      <button ion-button (click)="popover($event)">\n        <ion-icon name="more"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-refresher (ionRefresh)="refreshHomework($event)">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col col-12 col-lg-6 col-md-6 offset-md-3 col-sm-12>\n        <ion-list>\n          <ion-item>\n            <ion-label>{{ \'HOMEWORK.HIDE_CHECKED\' | translate }}</ion-label>\n            <ion-toggle\n              [(ngModel)]="hideChecked"\n              [name]="\'HOMEWORK.HIDE_CHECKED\' | translate"\n            ></ion-toggle>\n          </ion-item>\n          <ion-item\n            text-wrap\n            *ngFor="let item of filteredHw"\n            [class.dark-gray]="item.lsn_date === store.today"\n            [@expand]="!( item.checked && hideChecked )"\n          >\n            <ion-label>\n              {{ item.calc_date }}\n              <br>\n              <strong>{{ item.calc_class }}: </strong>\n              {{ item.lsn_hw }}\n            </ion-label>\n            <ion-checkbox\n              color="primary"\n              [(ngModel)]="item.checked"\n              (ngModelChange)="check(item)"\n            ></ion-checkbox>\n          </ion-item>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/home/obedm503/projects/ncai-developers/studentaccess/src/pages/homework/homework.html"*/,
            animations: [__WEBPACK_IMPORTED_MODULE_5__components_animations__["a" /* expand */]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__providers_store__["a" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_store__["a" /* Store */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__providers_log__["a" /* Log */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_log__["a" /* Log */]) === "function" && _e || Object])
    ], Homework);
    return Homework;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=homework.js.map

/***/ })

});
//# sourceMappingURL=5.js.map