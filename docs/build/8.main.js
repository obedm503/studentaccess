webpackJsonp([8],{

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__events__ = __webpack_require__(412);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(105);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsModule", function() { return EventsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var EventsModule = (function () {
    function EventsModule() {
    }
    return EventsModule;
}());
EventsModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        declarations: [__WEBPACK_IMPORTED_MODULE_2__events__["a" /* Events */]],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__events__["a" /* Events */]),
            __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["a" /* TranslateModule */].forChild()
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_2__events__["a" /* Events */]]
    })
], EventsModule);

//# sourceMappingURL=events.module.js.map

/***/ }),

/***/ 412:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_store__ = __webpack_require__(106);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Events; });
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
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t;
    return { next: verb(0), "throw": verb(1), "return": verb(2) };
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



var Events = (function () {
    function Events(nav, navParams, loadingCtrl, store) {
        this.nav = nav;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.store = store;
        this.loading = this.loadingCtrl.create();
    }
    Events.prototype.ionViewDidLoad = function () {
        return __awaiter(this, void 0, void 0, function () {
            var events, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.selected = this.navParams.get('selected');
                        if (!!this.selected) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.loading.present()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, this.store.get('EVENTS')];
                    case 3:
                        events = _a.sent();
                        this.events = events.events;
                        return [3 /*break*/, 5];
                    case 4:
                        err_1 = _a.sent();
                        console.warn(err_1);
                        return [3 /*break*/, 5];
                    case 5:
                        this.loading.dismiss();
                        _a.label = 6;
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    Events.prototype.goSelected = function (item) {
        this.nav.push('Events', {
            selected: item
        });
    };
    return Events;
}());
Events = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* Component */])({
        selector: 'page-events',template:/*ion-inline-start:"/home/obedm503/projects/ncai-developers/studentaccess/src/pages/events/events.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title *ngIf="!selected">\n      {{ \'EVENTS-name\' | translate }}\n    </ion-title>\n    <ion-title *ngIf="selected">\n      {{ selected.calc_subject }}\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col col-12 col-lg-6 col-md-6 offset-md-3 col-sm-12>\n        <ion-list *ngIf="!selected">\n          <ion-card text-wrap\n            *ngFor="let item of events"\n            (click)="goSelected(item)"\n            [class.dark-gray]="item.ev_date_start === store.today"\n          >\n            <ion-card-content>\n              <ion-row [hidden]="!item.calc_ev_date_start && !item.calc_subject">\n                <ion-col>\n                  <b [hidden]="!item.calc_ev_date_start">{{ item.calc_ev_date_start }}:</b>\n                </ion-col>\n                <ion-col>\n                  {{ item.calc_subject }}\n                </ion-col>\n              </ion-row>\n              <ion-row [hidden]="!item.calc_location">\n                <ion-col>\n                  {{ \'EVENTS-location\' | translate }}:\n                </ion-col>\n                <ion-col>\n                  {{ item.calc_location }}\n                </ion-col>\n              </ion-row>\n              <ion-row [hidden]="!item.calc_ev_time_start">\n                <ion-col>\n                  {{ \'EVENTS-time\' | translate }}:\n                </ion-col>\n                <ion-col>\n                  {{ item.calc_ev_time_start }}\n                </ion-col>\n              </ion-row>\n            </ion-card-content>\n          </ion-card>\n        </ion-list>\n\n        <ion-card *ngIf="selected">\n          <ion-card-header text-wrap>\n            {{ selected.calc_subject }}\n          </ion-card-header>\n          <ion-card-content [hidden]="!selected.calc_text">\n            {{ selected.calc_text }}\n          </ion-card-content>\n          <ion-list>\n            <ion-item color="secondary">\n              <ion-row [hidden]="!selected.calc_ev_date_start">\n                <ion-col>\n                  <b>{{ \'EVENTS-date\' | translate }}:</b>\n                </ion-col>\n                <ion-col>\n                  {{ selected.calc_ev_date_start }}\n                </ion-col>\n              </ion-row>\n              <ion-row [hidden]="!selected.calc_ev_time_start">\n                <ion-col>\n                  <b>{{ \'EVENTS-time\' | translate }}:</b>\n                </ion-col>\n                <ion-col>\n                  {{ selected.calc_ev_time_start }}\n                </ion-col>\n              </ion-row>\n              <ion-row [hidden]="!selected.calc_location">\n                <ion-col>\n                  <b>{{ \'EVENTS-location\' | translate }}:</b>\n                </ion-col>\n                <ion-col >\n                  {{ selected.calc_location }}\n                </ion-col>\n              </ion-row>\n            </ion-item>\n          </ion-list>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/home/obedm503/projects/ncai-developers/studentaccess/src/pages/events/events.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_store__["a" /* Store */]])
], Events);

//# sourceMappingURL=events.js.map

/***/ })

});
//# sourceMappingURL=8.main.js.map