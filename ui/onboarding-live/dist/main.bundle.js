webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_add_candidate_add_candidate_component__ = __webpack_require__("../../../../../src/app/pages/add-candidate/add-candidate.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/pages/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_candidate_details_candidate_details_component__ = __webpack_require__("../../../../../src/app/pages/candidate-details/candidate-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_idrf_idrf_component__ = __webpack_require__("../../../../../src/app/pages/idrf/idrf.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_settings_settings_component__ = __webpack_require__("../../../../../src/app/pages/settings/settings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__common_error_error_component__ = __webpack_require__("../../../../../src/app/common/error/error.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var appRoutes = [
    {
        path: 'add-candidate',
        component: __WEBPACK_IMPORTED_MODULE_3__pages_add_candidate_add_candidate_component__["a" /* AddCandidateComponent */]
    }, {
        path: 'dashboard',
        component: __WEBPACK_IMPORTED_MODULE_4__pages_dashboard_dashboard_component__["a" /* DashboardComponent */]
    }, {
        path: 'candidate-details/:id',
        component: __WEBPACK_IMPORTED_MODULE_5__pages_candidate_details_candidate_details_component__["a" /* CandidateDetailsComponent */]
    }, {
        path: 'candidate-details',
        pathMatch: 'full',
        component: __WEBPACK_IMPORTED_MODULE_8__common_error_error_component__["a" /* ErrorComponent */],
        data: { msg: 'Missing Mandatory info to display Candidate Details' }
    }, {
        path: 'idrf/:id',
        component: __WEBPACK_IMPORTED_MODULE_6__pages_idrf_idrf_component__["a" /* IdrfComponent */]
    }, {
        path: 'idrf',
        pathMatch: 'full',
        component: __WEBPACK_IMPORTED_MODULE_8__common_error_error_component__["a" /* ErrorComponent */],
        data: { msg: 'Missing Mandatory info to Display IDRF Form' }
    }, {
        path: 'settings',
        component: __WEBPACK_IMPORTED_MODULE_7__pages_settings_settings_component__["a" /* SettingsComponent */]
    }, {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    }
    // { path: '**', component: PageNotFoundComponent }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["k" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forRoot(appRoutes, { enableTracing: true } // <-- debugging purposes only
            ),
        ],
        declarations: []
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "  <app-header></app-header>\r\n  <div id=\"body\" class=\"container-fluid body-container\">\r\n\r\n    <router-outlet></router-outlet>\r\n  \t\r\n  </div>\r\n  <app-footer></app-footer>\r\n "

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Onboarding Live';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_header_header_component__ = __webpack_require__("../../../../../src/app/common/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common_footer_footer_component__ = __webpack_require__("../../../../../src/app/common/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_add_candidate_add_candidate_component__ = __webpack_require__("../../../../../src/app/pages/add-candidate/add-candidate.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__common_menu_menu_component__ = __webpack_require__("../../../../../src/app/common/menu/menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/pages/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_candidate_details_candidate_details_component__ = __webpack_require__("../../../../../src/app/pages/candidate-details/candidate-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_idrf_idrf_component__ = __webpack_require__("../../../../../src/app/pages/idrf/idrf.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_settings_settings_component__ = __webpack_require__("../../../../../src/app/pages/settings/settings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__common_error_error_component__ = __webpack_require__("../../../../../src/app/common/error/error.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_candidate_progress_candidate_progress_component__ = __webpack_require__("../../../../../src/app/pages/candidate-progress/candidate-progress.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__common_accordian_accordian_component__ = __webpack_require__("../../../../../src/app/common/accordian/accordian.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__common_page_heading_page_heading_component__ = __webpack_require__("../../../../../src/app/common/page-heading/page-heading.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_config_service__ = __webpack_require__("../../../../../src/app/services/config.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




















var AppModule = (function () {
    // Diagnostic only: inspect router configuration
    function AppModule(router) {
        //  console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__common_header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_6__common_footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_8__common_menu_menu_component__["a" /* MenuComponent */],
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__pages_add_candidate_add_candidate_component__["a" /* AddCandidateComponent */],
            __WEBPACK_IMPORTED_MODULE_9__pages_dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_10__pages_candidate_details_candidate_details_component__["a" /* CandidateDetailsComponent */],
            __WEBPACK_IMPORTED_MODULE_11__pages_idrf_idrf_component__["a" /* IdrfComponent */],
            __WEBPACK_IMPORTED_MODULE_12__pages_settings_settings_component__["a" /* SettingsComponent */],
            __WEBPACK_IMPORTED_MODULE_13__common_error_error_component__["a" /* ErrorComponent */],
            __WEBPACK_IMPORTED_MODULE_14__pages_candidate_progress_candidate_progress_component__["a" /* CandidateProgressComponent */],
            __WEBPACK_IMPORTED_MODULE_15__common_accordian_accordian_component__["a" /* AccordianComponent */],
            __WEBPACK_IMPORTED_MODULE_16__common_page_heading_page_heading_component__["a" /* PageHeadingComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_17__angular_common_http__["a" /* HttpClientModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_18__services_config_service__["a" /* ConfigService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _a || Object])
], AppModule);

var _a;
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/common/accordian/accordian.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\n  <div class=\"panel-heading\">{{tittle}}</div>\n  <div class=\"panel-body\">\n    <ng-content></ng-content>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/common/accordian/accordian.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/common/accordian/accordian.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccordianComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AccordianComponent = (function () {
    function AccordianComponent() {
    }
    AccordianComponent.prototype.ngOnInit = function () {
    };
    return AccordianComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Input */])(),
    __metadata("design:type", String)
], AccordianComponent.prototype, "tittle", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Input */])(),
    __metadata("design:type", Boolean)
], AccordianComponent.prototype, "isOpen", void 0);
AccordianComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-accordian',
        template: __webpack_require__("../../../../../src/app/common/accordian/accordian.component.html"),
        styles: [__webpack_require__("../../../../../src/app/common/accordian/accordian.component.less")]
    }),
    __metadata("design:paramtypes", [])
], AccordianComponent);

//# sourceMappingURL=accordian.component.js.map

/***/ }),

/***/ "../../../../../src/app/common/error/error.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/common/error/error.component.html":
/***/ (function(module, exports) {

module.exports = "<app-page-heading heading=\"Error :(\"></app-page-heading>\n<p class=\"bg-danger\">{{msg}}</p>\n\n"

/***/ }),

/***/ "../../../../../src/app/common/error/error.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ErrorComponent = (function () {
    function ErrorComponent(route) {
        this.msg = route.snapshot.data.msg || 'Not Sure';
    }
    ErrorComponent.prototype.ngOnInit = function () {
    };
    return ErrorComponent;
}());
ErrorComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-error',
        template: __webpack_require__("../../../../../src/app/common/error/error.component.html"),
        styles: [__webpack_require__("../../../../../src/app/common/error/error.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object])
], ErrorComponent);

var _a;
//# sourceMappingURL=error.component.js.map

/***/ }),

/***/ "../../../../../src/app/common/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<footer>\r\n<p class=\"text-right\">\r\n    © 2017  Corporation. All Rights Reserved.\r\n</p>\r\n</footer>\r\n\r\n "

/***/ }),

/***/ "../../../../../src/app/common/footer/footer.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/common/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-footer',
        template: __webpack_require__("../../../../../src/app/common/footer/footer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/common/footer/footer.component.less")]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/common/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<app-menu></app-menu>"

/***/ }),

/***/ "../../../../../src/app/common/header/header.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/common/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-header',
        template: __webpack_require__("../../../../../src/app/common/header/header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/common/header/header.component.less")]
    }),
    __metadata("design:paramtypes", [])
], HeaderComponent);

//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ "../../../../../src/app/common/menu/menu.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"navbar-header\">\r\n                <button type=\"button\" \r\n                        class=\"navbar-toggle collapsed\"\r\n                        (click)=\"toggleState()\">\r\n                <span class=\"sr-only\">Toggle navigation</span>\r\n                <span class=\"icon-bar\"></span>\r\n                <span class=\"icon-bar\"></span>\r\n                <span class=\"icon-bar\"></span>\r\n            </button>\r\n            <a class=\"navbar-brand\">{{appName}}</a>\r\n        </div>\r\n         <div class=\"collapse navbar-collapse\"\r\n              [ngClass]=\"{ 'in': displayChildMenuFlg }\">\r\n            <ul class=\"nav navbar-nav\">\r\n              <li><a  (click)=\"collapseMenu()\" routerLink=\"/dashboard\" routerLinkActive=\"active\">Dashboard</a></li>\r\n              <li><a  (click)=\"collapseMenu()\" routerLink=\"/add-candidate\" routerLinkActive=\"active\">add-candidate</a></li>\r\n              <li><a  (click)=\"collapseMenu()\" routerLink=\"/candidate-details/123\" routerLinkActive=\"active\">Candidate Details</a></li>\r\n              <li><a  (click)=\"collapseMenu()\" routerLink=\"/idrf\" routerLinkActive=\"active\">IDRF</a></li>\r\n              <li><a  (click)=\"collapseMenu()\" routerLink=\"/settings\" routerLinkActive=\"active\">Settings</a></li>\r\n              <li><a  (click)=\"collapseMenu()\" routerLink=\"\" routerLinkActive=\"active\">Home</a></li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</nav>"

/***/ }),

/***/ "../../../../../src/app/common/menu/menu.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".body-container {\n  background-color: #f5f5f5;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/common/menu/menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MenuComponent = (function () {
    function MenuComponent() {
        this.appName = 'Onboarding Live';
        this.displayChildMenuFlg = false; // store state
    }
    MenuComponent.prototype.toggleState = function () {
        this.displayChildMenuFlg = !this.displayChildMenuFlg;
    };
    MenuComponent.prototype.collapseMenu = function () {
        this.displayChildMenuFlg = false;
    };
    MenuComponent.prototype.ngOnInit = function () {
    };
    return MenuComponent;
}());
MenuComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-menu',
        template: __webpack_require__("../../../../../src/app/common/menu/menu.component.html"),
        styles: [__webpack_require__("../../../../../src/app/common/menu/menu.component.less")]
    }),
    __metadata("design:paramtypes", [])
], MenuComponent);

//# sourceMappingURL=menu.component.js.map

/***/ }),

/***/ "../../../../../src/app/common/page-heading/page-heading.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 class=\"well well-sm\">{{heading}}</h1>"

/***/ }),

/***/ "../../../../../src/app/common/page-heading/page-heading.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h1 {\n  margin: 0px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/common/page-heading/page-heading.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageHeadingComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageHeadingComponent = (function () {
    function PageHeadingComponent() {
    }
    PageHeadingComponent.prototype.ngOnInit = function () {
    };
    return PageHeadingComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Input */])(),
    __metadata("design:type", String)
], PageHeadingComponent.prototype, "heading", void 0);
PageHeadingComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-page-heading',
        template: __webpack_require__("../../../../../src/app/common/page-heading/page-heading.component.html"),
        styles: [__webpack_require__("../../../../../src/app/common/page-heading/page-heading.component.less")]
    }),
    __metadata("design:paramtypes", [])
], PageHeadingComponent);

//# sourceMappingURL=page-heading.component.js.map

/***/ }),

/***/ "../../../../../src/app/models/candidateBasicInfo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CandidateBasicInfo; });
var CandidateBasicInfo = (function () {
    function CandidateBasicInfo() {
    }
    return CandidateBasicInfo;
}());

//# sourceMappingURL=candidateBasicInfo.js.map

/***/ }),

/***/ "../../../../../src/app/pages/add-candidate/add-candidate.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/add-candidate/add-candidate.component.html":
/***/ (function(module, exports) {

module.exports = "<app-page-heading heading=\"Add Candidate\">\n\n<p>\n  add-candidate works! \n</p>\n"

/***/ }),

/***/ "../../../../../src/app/pages/add-candidate/add-candidate.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddCandidateComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AddCandidateComponent = (function () {
    function AddCandidateComponent(route) {
        this.candidateId = route.snapshot.params['id']; // 3
    }
    AddCandidateComponent.prototype.ngOnInit = function () {
    };
    return AddCandidateComponent;
}());
AddCandidateComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-add-candidate',
        template: __webpack_require__("../../../../../src/app/pages/add-candidate/add-candidate.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/add-candidate/add-candidate.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object])
], AddCandidateComponent);

var _a;
//# sourceMappingURL=add-candidate.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/candidate-details/candidate-details.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/candidate-details/candidate-details.component.html":
/***/ (function(module, exports) {

module.exports = "<app-page-heading heading=\"Candidate Details\">\n</app-page-heading>\n \n\n     Candidate Basic Info Displayed here    Candidate ID = {{candidateId}}  \n    <app-accordian tittle=\"Candidate Basic Info\" isOpen=\"true\">\n     <div class=\"row\">\n      <div class=\"\">\n        <dl class=\"col-xs-12 col-sm-6 dl-horizontal\">\n          <dt  class=\"text-left\">Name </dt>\n          <dd> {{candidateBasicInfo.firstName}} {{candidateBasicInfo.middleName}} {{candidateBasicInfo.lastName}} </dd>\n        </dl>\n        <dl class=\"col-xs-12 col-sm-6  dl-horizontal\">\n          <dt  class=\"text-left\">Aid </dt>\n          <dd> {{candidateBasicInfo.aid}}  </dd>\n    \n        </dl>\n        <dl class=\"col-xs-12 col-sm-6  dl-horizontal\">\n          <dt  class=\"text-left\">Contact # </dt>\n          <dd> {{candidateBasicInfo.contactNumber}} </dd>\n        </dl>\n        <dl class=\"col-xs-12 col-sm-6  dl-horizontal\">\n          <dt  class=\"text-left\">Email Id </dt>\n          <dd> {{candidateBasicInfo.email}} </dd>\n        </dl>\n\n      </div>\n    </div> \n    </app-accordian>\n\n    <app-accordian tittle=\"Current Status\" isOpen=\"true\">\n     <app-candidate-progress status={{currentStaus}}></app-candidate-progress>     \n      \n    </app-accordian>\n\n    <app-accordian tittle=\"IDRF\" isOpen=\"true\">\n     Candidate FOrm here    \n   </app-accordian>\n\n    <app-accordian tittle=\"Audit History\" isOpen=\"true\">\n      Audit History       \n    </app-accordian>\n"

/***/ }),

/***/ "../../../../../src/app/pages/candidate-details/candidate-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_candidateBasicInfo__ = __webpack_require__("../../../../../src/app/models/candidateBasicInfo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_config_service__ = __webpack_require__("../../../../../src/app/services/config.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CandidateDetailsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CandidateDetailsComponent = (function () {
    function CandidateDetailsComponent(http, route, configService) {
        this.http = http;
        this.configService = configService;
        this.candidateBasicInfo = new __WEBPACK_IMPORTED_MODULE_3__models_candidateBasicInfo__["a" /* CandidateBasicInfo */]();
        this.candidateId = route.snapshot.params['id'];
    }
    CandidateDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Make the HTTP request: 
        // this.http.get('/data/candidateDetails.json?/'+this.candidateId).subscribe(serviceResp => {
        this.http.get(this.configService.getAPIURL('getCandidateDetails') + '/' + this.candidateId).subscribe(function (serviceResp) {
            // Read the result field from the JSON response.
            _this.populateBasicInfo(serviceResp);
            console.warn(serviceResp);
        });
    };
    CandidateDetailsComponent.prototype.populateBasicInfo = function (serviceResp) {
        this.candidateBasicInfo.aid = serviceResp.aid;
        this.candidateBasicInfo.firstName = serviceResp.firstName;
        this.candidateBasicInfo.lastName = serviceResp.lastName;
        this.candidateBasicInfo.middleName = serviceResp.midInitial;
        this.candidateBasicInfo.email = serviceResp.email;
        this.candidateBasicInfo.contactNumber = serviceResp.contactPhone;
        this.currentStaus = serviceResp.curStatus;
    };
    return CandidateDetailsComponent;
}());
CandidateDetailsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-candidate-details',
        template: __webpack_require__("../../../../../src/app/pages/candidate-details/candidate-details.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/candidate-details/candidate-details.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_config_service__["a" /* ConfigService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_config_service__["a" /* ConfigService */]) === "function" && _c || Object])
], CandidateDetailsComponent);

var _a, _b, _c;
//# sourceMappingURL=candidate-details.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/candidate-progress/candidate-progress.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\nThis is Candidate progess parital \n </p>\n<p class=\"bg-info\">current status : {{status}} </p>\n"

/***/ }),

/***/ "../../../../../src/app/pages/candidate-progress/candidate-progress.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/candidate-progress/candidate-progress.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CandidateProgressComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CandidateProgressComponent = (function () {
    function CandidateProgressComponent() {
    }
    CandidateProgressComponent.prototype.ngOnInit = function () {
    };
    return CandidateProgressComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Input */])(),
    __metadata("design:type", String)
], CandidateProgressComponent.prototype, "status", void 0);
CandidateProgressComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-candidate-progress',
        template: __webpack_require__("../../../../../src/app/pages/candidate-progress/candidate-progress.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/candidate-progress/candidate-progress.component.less")]
    }),
    __metadata("design:paramtypes", [])
], CandidateProgressComponent);

//# sourceMappingURL=candidate-progress.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<app-page-heading heading=\"Dashboard\">\n<div class=\"row\">\n  <div class=\"\">\n \n</div>\n <div class=\"row\">\n    <div class=\"col-sm-12\" style=\"background-color:yellow;\">\n      <p> dashboard works!</p>\n    </div>\n\n  </div>"

/***/ }),

/***/ "../../../../../src/app/pages/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-dashboard',
        template: __webpack_require__("../../../../../src/app/pages/dashboard/dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/dashboard/dashboard.component.css")]
    }),
    __metadata("design:paramtypes", [])
], DashboardComponent);

//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/idrf/idrf.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/idrf/idrf.component.html":
/***/ (function(module, exports) {

module.exports = "<app-page-heading heading=\"IDRF\">\n<p>\n  idrf works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/pages/idrf/idrf.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IdrfComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var IdrfComponent = (function () {
    function IdrfComponent() {
    }
    IdrfComponent.prototype.ngOnInit = function () {
    };
    return IdrfComponent;
}());
IdrfComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-idrf',
        template: __webpack_require__("../../../../../src/app/pages/idrf/idrf.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/idrf/idrf.component.css")]
    }),
    __metadata("design:paramtypes", [])
], IdrfComponent);

//# sourceMappingURL=idrf.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/settings/settings.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/settings/settings.component.html":
/***/ (function(module, exports) {

module.exports = "<app-page-heading heading=\"Settings\">\n<p>\n  settings works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/pages/settings/settings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SettingsComponent = (function () {
    function SettingsComponent() {
    }
    SettingsComponent.prototype.ngOnInit = function () {
    };
    return SettingsComponent;
}());
SettingsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-settings',
        template: __webpack_require__("../../../../../src/app/pages/settings/settings.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/settings/settings.component.css")]
    }),
    __metadata("design:paramtypes", [])
], SettingsComponent);

//# sourceMappingURL=settings.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/api-urls.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return APIURLs; });
var APIURLs = {
    'getCandidateDetails': {
        default: '/candidates',
        dev: '/candidateDetails.json?',
        qa: '/candidates',
        prod: '/candidates',
        isExternal: false
    },
    'candidateList': {
        default: '/candidates/all',
        dev: '/allCandidate.json?'
    },
    'addCandidate': {
        default: '/candidates/add',
        dev: '/addCandidate.json?'
    },
    'updateCandidate': {
        default: '/candidates/update'
    },
    'getContracts': {
        default: '/contracts'
    }
};
//# sourceMappingURL=api-urls.js.map

/***/ }),

/***/ "../../../../../src/app/services/config.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_services_api_urls__ = __webpack_require__("../../../../../src/app/services/api-urls.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ConfigService = (function () {
    function ConfigService() {
    }
    ConfigService.prototype.getEnv = function () {
        return __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].envName;
    };
    ConfigService.prototype.getDomainURL = function () {
        return __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].domainURL;
    };
    ConfigService.prototype.getBasePath = function () {
        return __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].basePath;
    };
    ConfigService.prototype.getBaseURL = function () {
        return this.getDomainURL() + this.getBasePath();
    };
    ConfigService.prototype.getAPIURL = function (serviceName) {
        var serviceObj = __WEBPACK_IMPORTED_MODULE_2__app_services_api_urls__["a" /* APIURLs */][serviceName];
        var finalDerivedURL = '';
        if (serviceObj) {
            finalDerivedURL = serviceObj[this.getEnv()] || serviceObj.default;
        }
        if (finalDerivedURL) {
            finalDerivedURL = this.getBaseURL() + finalDerivedURL;
        }
        else {
            console.error('NO_URL_FOUND For:"' + serviceName + '"');
        }
        return finalDerivedURL;
    };
    return ConfigService;
}());
ConfigService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], ConfigService);

//# sourceMappingURL=config.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true,
    envName: 'prod',
    domainURL: '',
    //  domainURL: 'http://example.com',
    basePath: '/api'
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map