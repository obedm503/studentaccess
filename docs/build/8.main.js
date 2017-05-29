webpackJsonp([8],{

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__events__ = __webpack_require__(422);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(108);
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

/***/ 422:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_store__ = __webpack_require__(109);
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



var Events = (function () {
    function Events(nav, navParams, store) {
        this.nav = nav;
        this.navParams = navParams;
        this.store = store;
    }
    Events.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.selected = this.navParams.get('selected');
        if (!this.selected) {
            this.store.get('EVENTS').then(function (events) {
                if (events === void 0) { events = { events: [] }; }
                _this.events = events.events;
            });
        }
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
        selector: 'page-events',template:/*ion-inline-start:"/home/obedm503/projects/ncai-developers/studentaccess/src/pages/events/events.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title *ngIf="!selected">\n      {{ \'EVENTS-name\' | translate }}\n    </ion-title>\n    <ion-title *ngIf="selected">\n      {{ selected.calc_subject }}\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col col-12 col-lg-6 col-md-6 offset-md-3 col-sm-12>\n        <ion-list *ngIf="!selected">\n          <ion-card text-wrap\n            *ngFor="let item of events"\n            (click)="goSelected(item)"\n            [class.gray]="item.ev_date_start == store.today"\n          >\n            <ion-card-content>\n              <ion-row [hidden]="!item.calc_ev_date_start && !item.calc_subject">\n                <ion-col>\n                  <b [hidden]="!item.calc_ev_date_start">{{ item.calc_ev_date_start }}:</b>\n                </ion-col>\n                <ion-col>\n                  {{ item.calc_subject }}\n                </ion-col>\n              </ion-row>\n              <ion-row [hidden]="!item.calc_location">\n                <ion-col>\n                  {{ \'EVENTS-location\' | translate }}:\n                </ion-col>\n                <ion-col>\n                  {{ item.calc_location }}\n                </ion-col>\n              </ion-row>\n              <ion-row [hidden]="!item.calc_ev_time_start">\n                <ion-col>\n                  {{ \'EVENTS-time\' | translate }}:\n                </ion-col>\n                <ion-col>\n                  {{ item.calc_ev_time_start }}\n                </ion-col>\n              </ion-row>\n            </ion-card-content>\n          </ion-card>\n        </ion-list>\n\n        <ion-card *ngIf="selected">\n          <ion-card-header text-wrap>\n            {{ selected.calc_subject }}\n          </ion-card-header>\n          <ion-card-content [hidden]="!selected.calc_text">\n            {{ selected.calc_text }}\n          </ion-card-content>\n          <ion-list>\n            <ion-item color="secondary">\n              <ion-row [hidden]="!selected.calc_ev_date_start">\n                <ion-col>\n                  <b>{{ \'EVENTS-date\' | translate }}:</b>\n                </ion-col>\n                <ion-col>\n                  {{ selected.calc_ev_date_start }}\n                </ion-col>\n              </ion-row>\n              <ion-row [hidden]="!selected.calc_ev_time_start">\n                <ion-col>\n                  <b>{{ \'EVENTS-time\' | translate }}:</b>\n                </ion-col>\n                <ion-col>\n                  {{ selected.calc_ev_time_start }}\n                </ion-col>\n              </ion-row>\n              <ion-row [hidden]="!selected.calc_location">\n                <ion-col>\n                  <b>{{ \'EVENTS-location\' | translate }}:</b>\n                </ion-col>\n                <ion-col >\n                  {{ selected.calc_location }}\n                </ion-col>\n              </ion-row>\n            </ion-item>\n          </ion-list>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/home/obedm503/projects/ncai-developers/studentaccess/src/pages/events/events.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_store__["a" /* Store */]])
], Events);

//# sourceMappingURL=events.js.map

/***/ })

});
//# sourceMappingURL=8.main.js.map