webpackJsonp([9],{

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Store; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_current_week_number__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_current_week_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_current_week_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__state__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__log__ = __webpack_require__(205);
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








var Store = (function () {
    function Store(http, storage, state, events, log) {
        this.http = http;
        this.storage = storage;
        this.state = state;
        this.events = events;
        this.log = log;
        this.date = new Date();
        this.api = 'https://db.nca.edu.ni/api/api_ewapp.php';
        this.log.debug('new Store()');
        var month = ('0' + (this.date.getMonth() + 1).toString()).slice(-2);
        var day = ('0' + this.date.getDate().toString()).slice(-2);
        var year = this.date.getFullYear().toString();
        this.today = year + "-" + month + "-" + day;
        this.keys = this.state.keys;
    }
    Store.prototype.fromApi = function (el, modifier, oldData) {
        var _this = this;
        var url = this.buildUrl(el.url, el.query, el.queryParams);
        return this.http.get(url)
            .toPromise()
            .then(function (res) { return res.text(); })
            .then(function (text) {
            try {
                var json = JSON.parse(text);
                return json;
            }
            catch (e) {
                return text;
            }
        })
            .then(function (newData) {
            var modifiedData = !modifier ? newData : modifier({
                newData: newData,
                oldData: oldData
            });
            _this.state.set(el.key, {
                date: _this.date,
                data: modifiedData
            });
            return modifiedData;
        })
            .catch(function (err) {
            _this.log.warn(err);
            return oldData;
        });
    };
    Store.prototype.get = function (key, modifier) {
        return __awaiter(this, void 0, void 0, function () {
            var storeItem, keyItem, comparator;
            return __generator(this, function (_a) {
                try {
                    if (key === 'USER') {
                        return [2 /*return*/, this.getUser()];
                    }
                    storeItem = this.state.get(key);
                    keyItem = this.keys.find(function (el) { return el.key === key; });
                    // not in memory, not in storage, from api
                    if (!storeItem) {
                        return [2 /*return*/, this.fromApi(keyItem, modifier)];
                    }
                    comparator = void 0;
                    switch (keyItem.valid) {
                        case 'DAY':
                            comparator = this.date.getDate() === new Date(storeItem.date).getDate();
                            break;
                        case 'WEEK':
                            comparator = __WEBPACK_IMPORTED_MODULE_5_current_week_number___default()(this.date) === __WEBPACK_IMPORTED_MODULE_5_current_week_number___default()(new Date(storeItem.date));
                            break;
                        case 'MONTH':
                            comparator = this.date.getMonth() === new Date(storeItem.date).getMonth();
                            break;
                        default:
                            throw Error('Store: Unknown Mode');
                    }
                    //check validity
                    if (comparator) {
                        return [2 /*return*/, storeItem.data];
                    }
                    else {
                        return [2 /*return*/, this.fromApi(keyItem, modifier, storeItem.data)];
                    }
                }
                catch (e) {
                    this.log.warn(e);
                    return [2 /*return*/];
                }
                return [2 /*return*/];
            });
        });
    };
    Store.prototype.buildUrl = function (url, query, queryParams) {
        if (queryParams === void 0) { queryParams = []; }
        if (url) {
            return url;
        }
        var extraParams = queryParams.join('&');
        var user = (this.state.get('USER') || {}).data;
        return this.api + "?query=" + query + "&lang=" + user.language + "&username=" + user.username + "&password=" + user.password + "&mode=student&" + extraParams;
    };
    Store.prototype.getUser = function () {
        return __awaiter(this, void 0, void 0, function () {
            var user, state, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        user = void 0;
                        user = this.state.get('USER');
                        if (!!user) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.storage.get('STATE')];
                    case 1:
                        state = _a.sent();
                        user = state.USER;
                        this.log.debug('getUser: ', state);
                        _a.label = 2;
                    case 2:
                        if (user && this.date.getMonth() === new Date(user.date).getMonth()) {
                            return [2 /*return*/, user.data];
                        }
                        else {
                            return [2 /*return*/, null];
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _a.sent();
                        this.log.warn(e_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    Store.prototype.getLogin = function () {
        return __awaiter(this, void 0, void 0, function () {
            var login;
            return __generator(this, function (_a) {
                login = this.state.get('LOGIN');
                if (login && this.date.getMonth() === new Date(login.date).getMonth()) {
                    return [2 /*return*/, login.data];
                }
                else {
                    return [2 /*return*/, null];
                }
                return [2 /*return*/];
            });
        });
    };
    Store.prototype.persist = function () {
        this.state.save();
    };
    Store.prototype.setUser = function (user) {
        this.state.set('USER', {
            date: this.date,
            data: user
        });
    };
    Store.prototype.clear = function () {
        var _this = this;
        return this.storage.clear().then(function () {
            _this.log.debug('cleared storage');
            return _this.state.clear();
        });
    };
    return Store;
}());
Store = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6__state__["a" /* State */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__state__["a" /* State */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* Events */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* Events */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_7__log__["a" /* Log */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__log__["a" /* Log */]) === "function" && _e || Object])
], Store);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=store.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export User */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Auth; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__store__ = __webpack_require__(106);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var User = (function () {
    function User(username, password, language) {
        if (language === void 0) { language = 'en'; }
        this.username = username;
        this.password = password;
        this.language = language;
    }
    return User;
}());

var Auth = (function () {
    function Auth(http, store) {
        this.http = http;
        this.store = store;
    }
    Auth.prototype.login = function (credentials) {
        if (!credentials.username || !credentials.password) {
            return Promise.reject(null);
        }
        return this.http.get("https://db.nca.edu.ni/api/api_ewapp.php?mode=student&query=login&username=" + credentials.username + "&password=" + credentials.password + "&lang=" + credentials.language)
            .toPromise()
            .then(function (res) { return res.json(); });
    };
    Auth.prototype.getUser = function () {
        return Promise.resolve(this.currentUser || this.store.get('USER'));
    };
    Auth.prototype.logout = function () {
        var _this = this;
        return this.store.clear()
            .then(function () { return _this.currentUser = null; });
    };
    return Auth;
}());
Auth = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */],
        __WEBPACK_IMPORTED_MODULE_2__store__["a" /* Store */]])
], Auth);

//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 119:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 119;

/***/ }),

/***/ 160:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/cafeteria/cafeteria.module": [
		283,
		0
	],
	"../pages/events/events.module": [
		284,
		8
	],
	"../pages/grades-detail/grades-detail.module": [
		286,
		2
	],
	"../pages/grades/grades.module": [
		285,
		1
	],
	"../pages/homework/homework.module": [
		287,
		5
	],
	"../pages/login/login.module": [
		288,
		7
	],
	"../pages/profile/profile.module": [
		289,
		4
	],
	"../pages/records/records.module": [
		290,
		6
	],
	"../pages/staff/staff.module": [
		291,
		3
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 160;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Log; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var levels;
(function (levels) {
    levels[levels["none"] = 0] = "none";
    levels[levels["error"] = 1] = "error";
    levels[levels["warn"] = 2] = "warn";
    levels[levels["info"] = 3] = "info";
    levels[levels["debug"] = 4] = "debug";
})(levels || (levels = {}));
;
var Log = (function () {
    function Log() {
        this.level = levels.debug;
    }
    Log.prototype.debug = function () {
        var rest = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            rest[_i] = arguments[_i];
        }
        if (this.level < levels.debug) {
            return;
        }
        console.debug.apply(console, ["DEBUG [StudentAccess]"].concat(rest));
    };
    Log.prototype.info = function () {
        var rest = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            rest[_i] = arguments[_i];
        }
        if (this.level < levels.info) {
            return;
        }
        console.info.apply(console, ["%cINFO [StudentAccess]", 'color: blue'].concat(rest));
    };
    Log.prototype.warn = function () {
        var rest = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            rest[_i] = arguments[_i];
        }
        if (this.level < levels.warn) {
            return;
        }
        console.warn.apply(console, ["WARN [StudentAccess]"].concat(rest));
    };
    Log.prototype.error = function () {
        var rest = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            rest[_i] = arguments[_i];
        }
        if (this.level < levels.error) {
            return;
        }
        console.error.apply(console, ["ERROR [StudentAccess]"].concat(rest));
    };
    return Log;
}());
Log = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])()
], Log);

//# sourceMappingURL=log.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);



Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_20" /* enableProdMode */])();
// renamed to AppModule to solve prod env bug ¯\_(ツ)_/¯
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export createTranslateLoader */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngx_translate_http_loader__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_store__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_auth__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_state__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_log__ = __webpack_require__(205);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













function createTranslateLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_6__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
}
var AppModule = (function () {
    // renamed to AppModule to solve prod env bug ¯\_(ツ)_/¯
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_8__app__["a" /* StudentAccess */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* NoopAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_8__app__["a" /* StudentAccess */], {}, {
                links: [
                    { loadChildren: '../pages/cafeteria/cafeteria.module#CafeteriaModule', name: 'Cafeteria', segment: 'cafeteria', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/events/events.module#EventsModule', name: 'Events', segment: 'events', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/grades/grades.module#GradesModule', name: 'Grades', segment: 'grades', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/grades-detail/grades-detail.module#GradesDetailModule', name: 'GradesDetail', segment: 'grades', priority: 'low', defaultHistory: ['Grades'] },
                    { loadChildren: '../pages/homework/homework.module#HomeworkModule', name: 'Homework', segment: 'homework', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/login/login.module#LoginModule', name: 'Login', segment: 'login', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/profile/profile.module#ProfileModule', name: 'Profile', segment: 'profile', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/records/records.module#RecordsModule', name: 'Records', segment: 'profile', priority: 'low', defaultHistory: ['Profile'] },
                    { loadChildren: '../pages/staff/staff.module#StaffModule', name: 'Staff', segment: 'staff', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["a" /* IonicStorageModule */].forRoot({
                name: 'studentaccess',
                driverOrder: ['indexeddb', 'websql', 'localstorage']
            }),
            __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                loader: {
                    provide: __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["a" /* TranslateLoader */],
                    useFactory: createTranslateLoader,
                    deps: [__WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Http */]]
                }
            })
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicApp */]],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_8__app__["a" /* StudentAccess */]],
        providers: [
            __WEBPACK_IMPORTED_MODULE_9__providers_store__["a" /* Store */],
            __WEBPACK_IMPORTED_MODULE_10__providers_auth__["a" /* Auth */],
            __WEBPACK_IMPORTED_MODULE_11__providers_state__["a" /* State */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* HttpModule */],
            { provide: __WEBPACK_IMPORTED_MODULE_2__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_12__providers_log__["a" /* Log */],
        ]
    })
    // renamed to AppModule to solve prod env bug ¯\_(ツ)_/¯
], AppModule);

;
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentAccess; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_state__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_log__ = __webpack_require__(205);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var StudentAccess = (function () {
    function StudentAccess(loadingCtrl, events, storage, auth, state, log, translate) {
        var _this = this;
        this.loadingCtrl = loadingCtrl;
        this.events = events;
        this.storage = storage;
        this.auth = auth;
        this.state = state;
        this.log = log;
        this.translate = translate;
        this.rootPage = 'Profile';
        this.username = '';
        this.name = '';
        this.loading = this.loadingCtrl.create({
            dismissOnPageChange: true
        });
        this.loading.present();
        // load translations in background
        translate.getTranslation('en');
        translate.getTranslation('es');
        var preferedLang = navigator.language.slice(0, 2);
        if (preferedLang !== 'en' && preferedLang !== 'es') {
            preferedLang = 'en';
        }
        translate.setDefaultLang(preferedLang);
        this.events.subscribe('login', function (user, login, link) { return _this.login(user, login, link); });
        this.storage.ready()
            .then(function () { return _this.state.load(); })
            .then(function (fromStorage) {
            _this.loading.dismiss();
            var state = fromStorage;
            if (state && state.USER && state.LOGIN) {
                _this.login(state.USER.data, state.LOGIN.data);
            }
            else {
                _this.logout();
            }
        })
            .catch(this.log.warn);
        this.pages = [
            { title: 'PROFILE-name', component: 'Profile', icon: 'person' },
            { title: 'HOMEWORK-name', component: 'Homework', icon: 'bookmarks' },
            { title: 'GRADES-name', component: 'Grades', icon: 'checkmark-circle' },
            { title: 'EVENTS-name', component: 'Events', icon: 'calendar' },
            { title: 'CAFETERIA-name', component: 'Cafeteria', icon: 'card' },
            { title: 'STAFF-name', component: 'Staff', icon: 'people' }
        ];
    }
    StudentAccess.prototype.login = function (user, login, link) {
        this.username = user.username;
        this.name = login.person_name;
        this.translate.use(user.language);
        if (link) {
            this.openPage(link);
        }
        else {
            var hash = location.hash.slice(2);
            this.activePage = hash.charAt(0).toUpperCase() + hash.slice(1);
        }
    };
    StudentAccess.prototype.openPage = function (page) {
        this.activePage = page;
        this.nav.setRoot(page);
        this.log.debug('openPage: ', page, 'active Page: ', (this.nav.getActive() || {}).name);
    };
    StudentAccess.prototype.logout = function () {
        var _this = this;
        this.loading = this.loadingCtrl.create();
        this.loading.present()
            .then(function () { return _this.nav.setRoot('Login'); })
            .then(function () { return _this.auth.logout(); })
            .then(function () { return _this.loading.dismiss(); })
            .catch(this.log.warn);
    };
    return StudentAccess;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */]) === "function" && _a || Object)
], StudentAccess.prototype, "nav", void 0);
StudentAccess = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/home/obedm503/projects/ncai-developers/studentaccess/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-content>\n    <ion-list no-lines>\n      <ion-item color="secondary">{{ name }}</ion-item>\n      <ion-item color="primary">{{ username }}@nca.edu.ni</ion-item>\n      <button\n        ion-item\n        [class.light-gray]="item.component !== activePage"\n        [class.dark-gray]="item.component === activePage"\n        menuClose *ngFor="let item of pages"\n        (click)="openPage(item.component)"\n      >\n        <ion-icon class="menu-icon" [name]="item.icon"></ion-icon>\n        {{ item.title | translate }}\n      </button>\n      <button class="light-gray" menuClose ion-item (click)="logout()">\n        <ion-icon class="menu-icon" name="log-out"></ion-icon>\n        {{ \'MENU-logout\' | translate }}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"/home/obedm503/projects/ncai-developers/studentaccess/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__providers_auth__["a" /* Auth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_auth__["a" /* Auth */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__providers_state__["a" /* State */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__providers_state__["a" /* State */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_6__providers_log__["a" /* Log */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__providers_log__["a" /* Log */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */]) === "function" && _h || Object])
], StudentAccess);

var _a, _b, _c, _d, _e, _f, _g, _h;
//# sourceMappingURL=app.js.map

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return State; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_storage__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__log__ = __webpack_require__(205);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var State = (function () {
    function State(storage, log) {
        this.storage = storage;
        this.log = log;
        this.remember = true;
        this.keys = [
            {
                key: 'USER',
                valid: 'MONTH'
            }, {
                key: 'HOMEWORK',
                query: 'homework',
                valid: 'DAY'
            }, {
                key: 'LOGIN',
                query: 'login',
                valid: 'DAY'
            }, {
                key: 'MISSING',
                query: 'missing',
                valid: 'DAY'
            }, {
                key: 'IMAGE',
                query: 'myphoto',
                valid: 'MONTH'
            }, {
                key: 'SCHEDULES',
                url: './assets/schedules.json',
                valid: 'MONTH'
            }, {
                key: 'TRANSACTIONS',
                query: 'credit',
                queryParams: ['history=10'],
                valid: 'MONTH'
            }, {
                key: 'MENU',
                query: 'cafeteria',
                valid: 'WEEK'
            }, {
                key: 'EVENTS',
                query: 'events',
                valid: 'WEEK'
            }, {
                key: 'STAFF',
                query: 'staff',
                valid: 'MONTH'
            }, {
                key: 'RECORDS',
                query: 'records',
                valid: 'MONTH' // ?
            }, {
                key: 'TEACHERS',
                query: 'allteachers',
                valid: 'MONTH'
            }, {
                key: 'SCHEDULE',
                query: 'schedule',
                valid: 'MONTH'
            }, {
                key: 'ALLGRADES',
                query: 'allgrades',
                valid: 'DAY'
            }
        ];
        this.USER = null;
        this.HOMEWORK = null;
        this.LOGIN = null;
        this.MISSING = null;
        this.IMAGE = null;
        this.SCHEDULES = null;
        this.TRANSACTIONS = null;
        this.MENU = null;
        this.EVENTS = null;
        this.STAFF = null;
        this.TEACHERS = null;
        this.SCHEDULE = null;
        this.ALLGRADES = null;
        this.log.debug('new State()');
    }
    State.prototype.get = function (key) {
        this.log.debug("State.get('" + key + "')", this[key]);
        return this[key];
    };
    State.prototype.set = function (key, value) {
        // ignore null and undefined
        if (!value) {
            return;
        }
        this.log.debug("State.set('" + key + "')", value);
        this[key] = value;
        this.save();
    };
    State.prototype.save = function () {
        var _this = this;
        if (!this.remember) {
            return;
        }
        this.log.debug('State.save()');
        this.keys.forEach(function (_a) {
            var key = _a.key;
            var value = _this[key];
            if (value) {
                _this.storage.set(key, value);
            }
        });
    };
    State.prototype.load = function () {
        var _this = this;
        var proms = this.keys.map(function (_a) {
            var key = _a.key;
            return _this.storage.get(key);
        });
        return Promise.all(proms).then(function (state) {
            _this.log.debug('State.load() ', state);
            var reduced = state.reduce(function (accumulator, el, i) {
                accumulator[_this.keys[i].key] = el;
                return accumulator;
            }, {});
            // load state into memory
            Object.assign(_this, reduced);
            return reduced;
        }).catch(this.log.warn);
    };
    State.prototype.clear = function () {
        var _this = this;
        this.keys.forEach(function (key) { return _this[key.key] = null; });
    };
    return State;
}());
State = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__ionic_storage__["b" /* Storage */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__log__["a" /* Log */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__log__["a" /* Log */]) === "function" && _b || Object])
], State);

var _a, _b;
//# sourceMappingURL=state.js.map

/***/ })

},[207]);
//# sourceMappingURL=main.js.map