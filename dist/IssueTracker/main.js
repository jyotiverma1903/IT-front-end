(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar-custom {\r\n    background: Green;\r\n    background-color:rgb(12, 182, 145);\r\n\r\n      \r\n       \r\n    }\r\n    #font-adjust{\r\n        font-family: Courier;\r\n        background: rgb(12, 182, 145);\r\n        font-weight:bold;\r\n        color:rgb(56, 58, 47);\r\n        cursor:pointer;\r\n        box-shadow: 0 3px 20px 0 #80105e;\r\n        \r\n       text-transform: uppercase;\r\n       position :center;\r\n       border-radius: 5px;\r\n       display: flex;\r\n       margin-left: auto;\r\n        margin-right: auto;}\r\n    .font-adjust:hover {\r\n            -webkit-transform: rotate(360deg);\r\n                    transform: rotate(360deg);\r\n            background: #9351A6;\r\n            border-radius: 50%;\r\n          }\r\n    P.blocktext {\r\n        margin-left: auto;\r\n        margin-right: auto;\r\n        width: 8em;\r\n        color:Red;\r\n    }\r\n    footer{\r\n        /* .set the height of the footer */\r\n        height: 30 px;\r\n        width: 100%;\r\n        /* just setting a color so you can see the footer */\r\n        background: rgb(12, 182, 145); \r\n        position: fixed;\r\n        flex-shrink: 0;\r\n        text-align: center;\r\n        -webkit-text-fill-color: rgb(2, 2, 2);\r\n        left: 0;\r\n        bottom: 0;\r\n    }\r\n\r\n    "

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<nav class=\"navbar navbar-expand-md navbar-custom navbar-light fixed-top \">\n    <div class=\"container-fluid\">\n         <a class=\"navbar-brand\" id=\"font-adjust\">\n          &#9202;  &#9202;  &#9202;    Issue Tracking Tool  &#9202;  &#9202;  &#9202;\n         </a>\n         <br>\n         \n\n           \n     </div>\n </nav>\n <br/>\n <br>\n <router-outlet></router-outlet>\n\n <br>\n <br>\n\n <footer>\n  &copy;  Developed by Jyoti Verma.\n</footer>\n\n \n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'IssueTracker';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: getAuthServiceConfigs, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAuthServiceConfigs", function() { return getAuthServiceConfigs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _user_user_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user/user.module */ "./src/app/user/user.module.ts");
/* harmony import */ var _user_register_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user/register/register.component */ "./src/app/user/register/register.component.ts");
/* harmony import */ var _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dashboard/dashboard.module */ "./src/app/dashboard/dashboard.module.ts");
/* harmony import */ var _dashboard_personal_dashboard_personal_dashboard_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dashboard/personal-dashboard/personal-dashboard.component */ "./src/app/dashboard/personal-dashboard/personal-dashboard.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./http.service */ "./src/app/http.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _error_page_error_page_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./error-page/error-page.component */ "./src/app/error-page/error-page.component.ts");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/not-found/not-found.component.ts");
/* harmony import */ var angular_6_social_login__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! angular-6-social-login */ "./node_modules/angular-6-social-login/angular-6-social-login.umd.js");
/* harmony import */ var angular_6_social_login__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(angular_6_social_login__WEBPACK_IMPORTED_MODULE_17__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















function getAuthServiceConfigs() {
    var config = new angular_6_social_login__WEBPACK_IMPORTED_MODULE_17__["AuthServiceConfig"]([
        {
            id: angular_6_social_login__WEBPACK_IMPORTED_MODULE_17__["GoogleLoginProvider"].PROVIDER_ID,
            provider: new angular_6_social_login__WEBPACK_IMPORTED_MODULE_17__["GoogleLoginProvider"]("153124374804-ofqennf96ise0ank2g2hv77a8qne166p.apps.googleusercontent.com")
        }
    ]);
    return config;
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _error_page_error_page_component__WEBPACK_IMPORTED_MODULE_15__["ErrorPageComponent"],
                _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_16__["NotFoundComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                angular_6_social_login__WEBPACK_IMPORTED_MODULE_17__["SocialLoginModule"],
                _user_user_module__WEBPACK_IMPORTED_MODULE_5__["UserModule"],
                _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_7__["DashboardModule"],
                ngx_spinner__WEBPACK_IMPORTED_MODULE_14__["NgxSpinnerModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_13__["ToastrModule"].forRoot(),
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot([
                    { path: 'home', component: _user_register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"] },
                    { path: 'error', component: _error_page_error_page_component__WEBPACK_IMPORTED_MODULE_15__["ErrorPageComponent"] },
                    { path: 'dashboard', component: _dashboard_personal_dashboard_personal_dashboard_component__WEBPACK_IMPORTED_MODULE_8__["PersonalDashboardComponent"] },
                    { path: '', redirectTo: 'home', pathMatch: 'full' },
                    { path: '**', component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_16__["NotFoundComponent"] }
                ])
            ],
            providers: [_http_service__WEBPACK_IMPORTED_MODULE_11__["HttpService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_12__["CookieService"], {
                    provide: angular_6_social_login__WEBPACK_IMPORTED_MODULE_17__["AuthServiceConfig"],
                    useFactory: getAuthServiceConfigs
                }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.module.ts":
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard.module.ts ***!
  \***********************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _personal_dashboard_personal_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./personal-dashboard/personal-dashboard.component */ "./src/app/dashboard/personal-dashboard/personal-dashboard.component.ts");
/* harmony import */ var _issue_desc_issue_desc_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./issue-desc/issue-desc.component */ "./src/app/dashboard/issue-desc/issue-desc.component.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng2_table_ng2_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-table/ng2-table */ "./node_modules/ng2-table/ng2-table.js");
/* harmony import */ var ng2_table_ng2_table__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ng2_table_ng2_table__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var angular_froala_wysiwyg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular-froala-wysiwyg */ "./node_modules/angular-froala-wysiwyg/index.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                ng2_table_ng2_table__WEBPACK_IMPORTED_MODULE_6__["Ng2TableModule"],
                ngx_spinner__WEBPACK_IMPORTED_MODULE_10__["NgxSpinnerModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_8__["PaginationModule"].forRoot(),
                ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrModule"].forRoot(),
                angular_froala_wysiwyg__WEBPACK_IMPORTED_MODULE_9__["FroalaEditorModule"].forRoot(),
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    { path: 'dashboard/:userId', component: _personal_dashboard_personal_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["PersonalDashboardComponent"] },
                    { path: 'issue/:userId', component: _issue_desc_issue_desc_component__WEBPACK_IMPORTED_MODULE_3__["IssueDescComponent"] }
                ])
            ],
            declarations: [_personal_dashboard_personal_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["PersonalDashboardComponent"], _issue_desc_issue_desc_component__WEBPACK_IMPORTED_MODULE_3__["IssueDescComponent"]]
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ }),

/***/ "./src/app/dashboard/issue-desc/issue-desc.component.css":
/*!***************************************************************!*\
  !*** ./src/app/dashboard/issue-desc/issue-desc.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "nav {\r\n    background-color:rgba(22, 136, 230, 0.603)\r\n}\r\n\r\n.fr-toolbar {\r\nborder-top:5px solid rgba(22, 136, 230, 0.603)!important;\r\n}\r\n\r\nh3 {\r\n    font-style: italic;\r\n    font-weight: bold;\r\n}\r\n\r\nli {\r\n    padding: 2vh;\r\n    cursor: pointer;\r\n    /* text-align: center; */\r\n}\r\n\r\n/* h3,i {\r\n    display: inline;\r\n} */\r\n\r\ninput[type=\"text\"]:focus,\r\ntextarea:focus,\r\nselect:focus,\r\n.description :focus\r\n {\r\nborder-color: rgba(22, 60, 230, 0.603);\r\nbox-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 8px rgba(22, 60, 230, 0.403);\r\noutline: 0 none;\r\n}\r\n\r\n.myspiner /deep/ .black-overlay{\r\n    position: fixed;}"

/***/ }),

/***/ "./src/app/dashboard/issue-desc/issue-desc.component.html":
/*!****************************************************************!*\
  !*** ./src/app/dashboard/issue-desc/issue-desc.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark \">\n    <a class=\"navbar-brand\" routerLink='/issue/{{userId}}'>Issue Tracker</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavAltMarkup\" aria-controls=\"navbarNavAltMarkup\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarNavAltMarkup\">\n      <div class=\"navbar-nav ml-auto\">\n          <a class=\"nav-item nav-link \" routerLink='/issue/{{userId}}'><b style='font-style: Bold'>Hello, {{userName}} </b><span class=\"sr-only\">(current)</span></a>\n\n        <a class=\"nav-item nav-link\" routerLink ='/dashboard/{{userId}}'>Dashboard <span class=\"sr-only\">(current)</span></a>\n        <a class=\"nav-item nav-link active\"  >Create <span class=\"sr-only\">(current)</span></a>\n        <a class=\"nav-item nav-link\" routerLink = '/home'><i class=\"fa fa-sign-out\" style=\"color:red\"  title=\"Logout\" aria-hidden=\"true\"></i>\n        </a>\n      </div>\n    </div>\n  </nav>\n<br/>\n\n\n\n<ng-template #watcherModal let-close=\"close\">\n  <div class=\"modal-header\">\n    <h5 class=\"modal-title mx-auto\"><strong>People Watching</strong></h5>\n    <button type=\"button\" class=\"close\" (click)=\"close()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <div class =\"row\">\n    <div class =\"col\"  *ngIf = 'watchers.length!==0'>\n      <h6  *ngFor= 'let p of watchers;let i =index'>{{i+1}}. &nbsp; &nbsp;{{p}}</h6>\n  </div>\n  <div class =\"col\"  *ngIf = 'watchers.length===0'>\n    <h6>No one is watching</h6>\n</div>\n  </div>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\"  ngbAutofocus class=\"btn btn-warning\"  (click)=\"close()\">OK</button>\n  </div>\n  </ng-template>\n\n\n  <ng-template #notifyModal let-close=\"close\">\n    <div class=\"modal-header\">\n      <h5 class=\"modal-title mx-auto\"><strong>Notification</strong></h5>\n      <button type=\"button\" class=\"close\" (click)=\"close()\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"modal-body\">\n      <div class =\"row\">\n      <div class =\"col\">\n        <h6>{{notification.msg}}</h6>\n    </div>\n    \n    </div>\n    </div>\n    <div class=\"modal-footer\">\n      <button type=\"button\"  ngbAutofocus class=\"btn btn-warning\"  (click)=\"openIssue(notification.issueId);close()\">Open</button>\n    </div>\n    </ng-template>\n\n\n<div class =\"container\" style =\"text-align: center\">\n  <div class = \"row\" >\n    <div class= \"col  mx-auto\">\n    <h3 *ngIf ='isCreate&&!isEdit'  style ='color: #14afa0;'>Report a Bug</h3>\n    <h3 *ngIf ='isEdit'>Edit Details</h3>\n    <h3 *ngIf ='isView'>Details</h3>\n    \n  </div>\n  <div class=\"btn-group open\"  *ngIf ='isView'>\n      <button class=\"btn btn-warning\" ><i class=\"fa fa-user fa-fw\"></i> Actions</button>\n      <button class=\"btn btn-warning dropdown-toggle\" data-toggle=\"dropdown\">\n      </button>\n      <ul class=\"dropdown-menu  dropdown-menu-right\">\n        <li  (click) = \"editIssue()\"><i class=\"fa fa-pencil fa-fw\" ></i> Edit</li>\n        <li (click) = \"deleteIssue()\" ><i class=\"fa fa-trash-o fa-fw\" ></i> Delete</li>\n        <li (click) = \"watchIssue()\" *ngIf ='isWatch' ><i class=\"fa fa-eye fa-fw\" ></i> Watch</li>\n        <li (click) = \"unWatchIssue()\"  *ngIf ='isUnWatch'><i class=\"fa fa-eye-slash fa-fw\" ></i> UnWatch</li>\n        <li (click) = \"getWatchers()\"><i class=\"fa fa-users fa-fw\" ></i> Watchers</li>\n      </ul>\n    </div>\n\n   </div> \n    <br/>\n    <div class =\"row mx-auto\">\n      <div class=\"col-12 mx-auto\">\n    <form  class=\"newIssue\"   #issueForm = 'ngForm'>\n        <div class=\"input-group mb-4 row\" >\n            <label class=\"col-sm-2 col-form-label\">Title*</label>\n            <div class=\"col-sm-10\">\n              <input type=\"text\" class=\"form-control\"   *ngIf = 'isCreate' [(ngModel)] = 'title' (ngModelChange) = 'isValueChanged = true'  name=\"issueTitle\" placeholder=\"Title\" required>\n              <input type=\"text\" class=\"form-control\"   *ngIf = 'isView' [(ngModel)] = 'title'  name=\"issueTitle\"  readonly>\n            </div>\n          </div>\n        <div class=\"input-group mb-4 row\">\n          <label for=\"exampleFormControlSelect1\"  class=\"col-sm-2 col-form-label\">Assign To*</label>\n          <div class=\"col-sm-10\">\n          <select class=\"form-control  custom-select\"  name=\"assignTo\"  (ngModelChange) = 'isValueChanged = true' *ngIf = 'isCreate' [(ngModel)] = 'assignee'  required>\n              <option selected>Choose here</option>\n            <option *ngFor = 'let user of userList' >\n              {{user.userName}}\n            </option>\n          </select>\n          <input type=\"text\" class=\"form-control\"  *ngIf = 'isView'  [(ngModel)] = 'assignee' name=\"assignTo\"  readonly>\n          </div>\n        </div>\n\n        <div class=\"input-group mb-4 row\">\n            <label   class=\"col-sm-2 col-form-label\">Status*</label>\n             <div class=\"col-sm-10\">\n          <span *ngFor = 'let val of checkboxValues;let i= index'>\n            <div class=\"custom-control custom-checkbox custom-control-inline\"  *ngIf = 'isCreate'\n             >\n                <input type=\"checkbox\" id= \"check{{i+1}}\"  class=\"custom-control-input\"  name =\"checkBox{{i+1}}\"\n                [(ngModel)] = \"val.checked\" (click) = 'updateSelection(val.title)' \n                (ngModelChange) = 'isValueChanged = true' >\n                <label class=\"custom-control-label\" for=\"check{{i+1}}\">{{val.title}}</label>\n              </div>\n            </span>\n          <input type=\"text\" class=\"form-control\"  *ngIf = 'isView'  [(ngModel)] = 'issueStatus' name=\"stat\"  readonly>\n          </div>\n        </div>\n        \n        <div class=\"input-group mb-4 row\">\n          <label   class=\"col-sm-2 col-form-label\">Description</label>\n          <!-- <textarea class=\"form-control\" id=\"exampleFormControlTextarea1\" rows=\"3\"></textarea> -->\n           <div class=\"col-sm-10\">\n          \n          <div [froalaEditor]   *ngIf = 'isCreate'    (ngModelChange) = 'isValueChanged = true' name=\"desc\" [(ngModel)] = 'description' ></div>\n          <div [froalaEditor]= 'options' *ngIf = 'isView'   name=\"desc\" [(ngModel)] = 'description' ></div>\n          <!-- <input class=\"form-control  formtext\"  type =\"text\" *ngIf = 'isView'  [(ngModel)] = 'description'  name=\"desc\" readonly > -->\n        </div>\n\n        </div> \n        <div class=\"input-group mb-4 row\">\n            <label  class=\"col-sm-2 col-form-label\">Comments</label>\n            <div class=\"col-sm-10\">\n                <textarea class=\"form-control\" *ngIf = 'isCreate'   (ngModelChange) = 'isValueChanged = true' [(ngModel)] = 'comments' name=\"comment\" \n                rows=\"2\" \n                placeholder=\"Add a comment\"></textarea>\n                <input type=\"text\" class=\"form-control\"  *ngIf = 'isView'  [(ngModel)] = 'comments' name=\"comment\"  readonly>\n          </div>\n  \n          </div>\n          <button class =\"btn btn-outline-info\"  *ngIf = 'isCreate&&!isEdit' (click) ='createIssue()' [disabled] = '!issueForm.form.valid' >Post</button>\n          &nbsp;&nbsp;<button class =\"btn btn-outline-danger\"  *ngIf = 'isCreate&&!isEdit' (click) ='cancelCreate()'>Cancel</button>\n          <button class =\"btn btn-outline-warning\"  *ngIf = 'isEdit'  [disabled] = '!issueForm.form.valid' (click) = 'editIssue()' >Edit</button>\n         &nbsp;&nbsp; <button class =\"btn btn-outline-danger\"   *ngIf = 'isEdit' (click) = 'cancelEdit()'  >Cancel</button>\n      </form>\n\n     \n    </div>\n    </div>\n      </div>\n"

/***/ }),

/***/ "./src/app/dashboard/issue-desc/issue-desc.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/dashboard/issue-desc/issue-desc.component.ts ***!
  \**************************************************************/
/*! exports provided: IssueDescComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IssueDescComponent", function() { return IssueDescComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/http.service */ "./src/app/http.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var src_app_socket_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/socket.service */ "./src/app/socket.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var IssueDescComponent = /** @class */ (function () {
    function IssueDescComponent(_router, route, toastr, spinner, httpService, cookie, socket, modal) {
        var _this = this;
        this._router = _router;
        this.route = route;
        this.toastr = toastr;
        this.spinner = spinner;
        this.httpService = httpService;
        this.cookie = cookie;
        this.socket = socket;
        this.modal = modal;
        this.issueStatus = 'New';
        this.isView = false;
        this.isCreate = true;
        this.isEdit = false;
        this.isWatch = true;
        this.isUnWatch = false;
        this.watchers = [];
        this.isValueChanged = false;
        this.checkboxValues = [{ title: 'New', checked: true },
            { title: 'In Progress', checked: false }, { title: 'In Test', checked: false }, { title: 'Done', checked: false },
            { title: 'Backlog', checked: false }];
        this.options = {
            events: {
                'froalaEditor.initialized': function (e, editor) {
                    editor.edit.off();
                }
            }
        };
        this.getIssueDetails = function () {
            _this.httpService.getIssueDetail(_this.issueId).subscribe(function (response) {
                if (response['status'] === 200) {
                    _this.title = response['data'].title;
                    _this.assignee = response['data'].assignee;
                    _this.description = response['data'].description;
                    _this.comments = response['data'].comments;
                    _this.updateSelection(response['data'].status);
                    if (response['data'].watchers.findIndex(function (val) { return val.id === _this.userId; }) !== -1) {
                        _this.isUnWatch = true;
                        _this.isWatch = false;
                    }
                    response['data'].watchers.forEach(function (val) {
                        if (val.id !== _this.userId) {
                            _this.watchers.push(val.name);
                        }
                        console.log(_this.watchers);
                    });
                }
            });
        };
        this.getUsersList = function () {
            _this.httpService.getAllUsers(_this.userId).subscribe(function (response) {
                if (response['status'] === 200) {
                    _this.userList = response['data'];
                }
                else if (response['status'] === 404) {
                    _this.toastr.warning(response['message']);
                    if (response['message'] === 'Invalid Or Expired Authentication Key') {
                        _this._router.navigate(['/login']);
                    }
                }
            });
        };
        this.openIssue = function (id) {
            _this.issueId = id;
            _this.getIssueDetails();
        };
        this.createIssue = function () {
            _this.spinner.show();
            _this.isCreate = true;
            _this.isView = false;
            _this.isEdit = false;
            var newIssue = {
                title: _this.title,
                desc: _this.description,
                comments: _this.comments,
                status: _this.issueStatus,
                assignee: _this.assignee,
                reporterId: _this.userId,
                reporterName: _this.userName
            };
            _this.httpService.createIssue(newIssue).subscribe(function (response) {
                _this.spinner.hide();
                if (response['status'] === 200) {
                    _this.toastr.success('Issue Created');
                    _this._router.navigate(['/dashboard/' + _this.userId]);
                }
                else if (response['status'] === 404) {
                    _this.toastr.warning(response['message']);
                    if (response['message'] === 'Invalid Or Expired Authentication Key') {
                        _this._router.navigate(['/login']);
                    }
                }
            }, function (err) {
                console.log(err);
                _this._router.navigate(['/error']);
            });
        };
        this.editIssue = function () {
            _this.isCreate = true;
            _this.isView = false;
            _this.isEdit = true;
            if (_this.isValueChanged) {
                var editedIssue = {
                    title: _this.title,
                    description: _this.description,
                    comments: _this.comments,
                    status: _this.issueStatus,
                    assignee: _this.assignee,
                    reporterId: _this.userId,
                    repName: _this.userName
                };
                _this.httpService.updateIssue(editedIssue, _this.issueId).subscribe(function (response) {
                    if (response['status'] === 200) {
                        _this.socket.changeIssue(_this.issueId);
                        _this._router.navigate(['/dashboard/' + _this.userId]);
                    }
                    else if (response['status'] === 404) {
                        _this.toastr.warning(response['message']);
                        if (response['message'] === 'Invalid Or Expired Authentication Key') {
                            _this._router.navigate(['/login']);
                        }
                    }
                }, function (err) {
                    console.log(err);
                    _this._router.navigate(['/error']);
                });
            }
        };
        this.cancelCreate = function () {
            _this._router.navigate(['/dashboard/' + _this.userId]);
        };
        this.updateSelection = function (selected) {
            _this.issueStatus = selected;
            _this.checkboxValues.forEach(function (value) {
                if (value.title === selected) {
                    value.checked = true;
                }
                else {
                    value.checked = false;
                }
            });
        };
        this.deleteIssue = function () {
            _this.httpService.deleteIssue(_this.issueId).subscribe(function (response) {
                if (response['status'] === 200) {
                    _this.toastr.success('Deleted Successfully');
                    _this._router.navigate(['/dashboard/' + _this.userId]);
                }
                else if (response['status'] === 404) {
                    _this.toastr.warning(response['message']);
                    if (response['message'] === 'Invalid Or Expired Authentication Key') {
                        _this._router.navigate(['/login']);
                    }
                }
                (function (err) {
                    console.log(err);
                    _this._router.navigate(['/error']);
                });
            });
        };
        this.cancelEdit = function () {
            _this.isCreate = false;
            _this.isView = true;
            _this.isEdit = false;
        };
        this.watchIssue = function () {
            _this.isUnWatch = true;
            _this.isWatch = false;
            var obj = {
                userId: _this.userId,
                userName: _this.userName
            };
            _this.httpService.watchIssue(_this.issueId, obj).subscribe(function (response) {
                if (response['status'] === 200) {
                    _this.toastr.success('Watching');
                    _this.socket.watchEvent(_this.issueId);
                }
                else if (response['status'] === 404) {
                    _this.toastr.warning(response['message']);
                    if (response['message'] === 'Invalid Or Expired Authentication Key') {
                        _this._router.navigate(['/login']);
                    }
                }
                (function (err) {
                    console.log(err);
                    _this._router.navigate(['/error']);
                });
            });
        };
        this.unWatchIssue = function () {
            _this.isWatch = true;
            _this.isUnWatch = false;
            _this.httpService.unWatchIssue(_this.issueId, _this.userId).subscribe(function (response) {
                if (response['status'] === 200) {
                    _this.toastr.warning('Not watching');
                    _this.socket.unWatchEvent(_this.issueId);
                }
                else if (response['status'] === 404) {
                    _this.toastr.warning(response['message']);
                    if (response['message'] === 'Invalid Or Expired Authentication Key') {
                        _this._router.navigate(['/login']);
                    }
                }
                (function (err) {
                    console.log(err);
                    _this._router.navigate(['/error']);
                });
            });
        };
        this.getWatchers = function () {
            _this.modal.open(_this.watcherModal, { size: 'sm' });
        };
        this.listenNotification = function () {
            _this.socket.notification().subscribe(function (data) {
                console.log(data);
                _this.notification = data;
                _this.modal.open(_this.notifyModal, { size: 'sm' });
            });
        };
    }
    IssueDescComponent.prototype.ngOnInit = function () {
        this.userId = this.route.snapshot.paramMap.get('userId');
        this.issueId = this.route.snapshot.paramMap.get('issue');
        this.userName = this.cookie.get('userName');
        this.getUsersList();
        if (this.issueId !== undefined && this.issueId !== null) {
            this.isView = true;
            this.isCreate = false;
            this.getIssueDetails();
        }
        else {
            this.isCreate = true;
            this.isView = false;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('watcherModal'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], IssueDescComponent.prototype, "watcherModal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('notifyModal'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], IssueDescComponent.prototype, "notifyModal", void 0);
    IssueDescComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-issue-desc',
            template: __webpack_require__(/*! ./issue-desc.component.html */ "./src/app/dashboard/issue-desc/issue-desc.component.html"),
            styles: [__webpack_require__(/*! ./issue-desc.component.css */ "./src/app/dashboard/issue-desc/issue-desc.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"], ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"],
            src_app_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"], src_app_socket_service__WEBPACK_IMPORTED_MODULE_7__["SocketService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"]])
    ], IssueDescComponent);
    return IssueDescComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/personal-dashboard/personal-dashboard.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/dashboard/personal-dashboard/personal-dashboard.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ng-table {\r\n    width: 80vw;\r\n}\r\n\r\n\r\nnav {\r\n    background-color:rgba(22, 136, 230, 0.603)\r\n}\r\n\r\n\r\nh3 {\r\n    font-weight: bold;\r\n    font-style: italic;\r\n    color: #dc3545;\r\n}\r\n "

/***/ }),

/***/ "./src/app/dashboard/personal-dashboard/personal-dashboard.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/dashboard/personal-dashboard/personal-dashboard.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark \">\n  <a class=\"navbar-brand\" routerLink='/dashboard/{{userId}}'>Issue Tracker</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavAltMarkup\" aria-controls=\"navbarNavAltMarkup\"\n    aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarNavAltMarkup\">\n    <div class=\"navbar-nav ml-auto\">\n        <a class=\"nav-item nav-link \" routerLink='/dashboard/{{userId}}'><b style='font-style: bold'>Hello, {{userName}} </b><span class=\"sr-only\">(current)</span></a>\n\n      <a class=\"nav-item nav-link active\" routerLink='/dashboard/{{userId}}'>DashBoard <span class=\"sr-only\">(current)</span></a>\n      <a class=\"nav-item nav-link \" routerLink='/issue/{{userId}}'>Create <span class=\"sr-only\">(current)</span></a>\n      <a class=\"nav-item nav-link\" routerLink='/home'><i class=\"fa fa-sign-out\" style=\"color:red;\" aria-hidden=\"true\" title='LogOut'></i>\n      </a>\n    </div>\n  </div>\n</nav>\n<br />\n\n\n\n\n\n<div class=\"container\" style=\"text-align: center\">\n  <div class=\"row mt-2 \">\n    <div class=\"col-md-4   mx-auto\">\n      <h3>Your assigned Issues</h3>\n    </div>\n\n  </div>\n  <div class=\"row mt-4 \">\n    <div class=\" col-12 col-lg-4  mx-auto\">\n      <div class=\"input-group mb-3\">\n        <input type=\"text\" class=\"form-control\" placeholder ='Search Any Issue'  [(ngModel)] ='searchText'>\n        <div class=\"input-group-append\">\n          <span class=\"input-group-text\">\n            <i class=\"fa fa-search\" aria-hidden=\"true\" (click) ='searchAnIssue()'  title ='Search By Title' style='cursor: pointer;'></i>\n          </span>\n        </div>\n      </div>\n    </div>\n    <div class=\" col-8 col-lg-4  mx-auto\">\n      <input *ngIf=\"config.filtering\" placeholder=\"Filter Issues\" [ngTableFiltering]=\"config.filtering\" class=\"form-control\"\n        (tableChanged)=\"onChangeTable(config)\" />\n    </div>\n    <div class=\"col-4 col-lg-2  mx-auto\">\n\n      <button class=\"btn btn-success\" (click)=\"createIssue()\"  style='cursor:pointer' title ='New Issue'>Create</button>\n    </div>\n  </div>\n\n  <div class=\"row mt-4 \">\n    <div class=\"col-md-4  mx-auto\" style ='display: inline-flex'>\n    \n    </div>\n  </div>\n<br />\n<div class=\"row\">\n  <div class=\"col-12 mx-auto\">\n    <ng-table [config]=\"config\" (tableChanged)=\"onChangeTable(config)\"\n     (cellClicked)=\"onCellClick($event)\" [rows]=\"rows\"\n      [columns]=\"columns\">\n    </ng-table>\n  </div>\n\n</div>\n\n<div class=\"row\">\n  <div class=\"col-md-4\">\n    <pagination *ngIf=\"config.paging&&length>5\" class=\"pagination-sm\" [(ngModel)]=\"page\" [totalItems]=\"length\"\n      [itemsPerPage]=\"itemsPerPage\" [maxSize]=\"maxSize\" [boundaryLinks]=\"true\" [rotate]=\"false\" (pageChanged)=\"onChangeTable(config, $event)\"\n      (numPages)=\"numPages = $event\">\n    </pagination>\n    <pre *ngIf=\"config.paging&&length>5\" class=\"card card-block card-header\">Page: {{page}} / {{numPages}}</pre>\n  </div>\n</div>\n</div>\n\n\n<ng-template #notifyModal let-close=\"close\">\n  <div class=\"modal-header\">\n    <h5 class=\"modal-title mx-auto\"><strong>Notification</strong></h5>\n    <button type=\"button\" class=\"close\" (click)=\"close()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <div class =\"row\">\n    <div class =\"col\">\n      <h6 >{{notification.msg}}</h6>\n  </div>\n  \n  </div>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\"  ngbAutofocus class=\"btn btn-warning\"  (click)=\"openIssue(notification.issueId);close()\">Open</button>\n  </div>\n  </ng-template>"

/***/ }),

/***/ "./src/app/dashboard/personal-dashboard/personal-dashboard.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/dashboard/personal-dashboard/personal-dashboard.component.ts ***!
  \******************************************************************************/
/*! exports provided: PersonalDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalDashboardComponent", function() { return PersonalDashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var src_app_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/http.service */ "./src/app/http.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var src_app_socket_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/socket.service */ "./src/app/socket.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var PersonalDashboardComponent = /** @class */ (function () {
    function PersonalDashboardComponent(_router, route, cookie, httpService, toastr, socket, modal) {
        // this.length = this.data.length;
        var _this = this;
        this._router = _router;
        this.route = route;
        this.cookie = cookie;
        this.httpService = httpService;
        this.toastr = toastr;
        this.socket = socket;
        this.modal = modal;
        this.isChanged = false;
        this.rows = [];
        this.columns = [
            { title: 'Id', name: 'issueId' },
            {
                title: 'Title',
                name: 'title',
                sort: true,
                filtering: { filterString: '', placeholder: 'Filter by Title' }
            },
            { title: 'Reporter', className: ['office-header', 'text-success'], name: 'repName', sort: 'asc',
                filtering: { filterString: '', placeholder: 'Filter by Reporter' } },
            { title: 'Status', name: 'status', sort: '', filtering: { filterString: '', placeholder: 'Filter by status' } },
            { title: 'Date', className: 'text-warning', name: 'createdOn' }
        ];
        this.page = 1;
        this.itemsPerPage = 5;
        this.maxSize = 5;
        this.numPages = 1;
        this.length = 0;
        this.config = {
            paging: true,
            sorting: { columns: this.columns },
            filtering: { filterString: '' },
            className: ['table-striped', 'table-bordered', 'table-responsive-md']
        };
        this.data = [];
        this.openIssue = function (issueId) {
            _this._router.navigate(['/issue/' + _this.userId, { issue: issueId }]);
        };
        this.searchAnIssue = function () {
            if (_this.searchText) {
                _this.httpService.searchIssues(_this.searchText).subscribe(function (response) {
                    // console.log(response+'---------');
                    if (response['status'] === 200) {
                        _this.data = response['data'];
                        _this.length = _this.data.length;
                        _this.onChangeTable(_this.config, true);
                    }
                    else if (response['status'] === 404) {
                        _this.toastr.warning(response['message']);
                        if (response['message'] === 'Invalid Or Expired Authentication Key') {
                            _this._router.navigate(['/login']);
                        }
                    }
                }, function (err) {
                    _this._router.navigate(['/error']);
                });
            }
        };
        this.listenNotification = function () {
            _this.socket.notification().subscribe(function (data) {
                console.log(data);
                _this.notification = data;
                _this.modal.open(_this.notifyModal, { size: 'sm' });
            });
        };
        this.createIssue = function () {
            _this.userId = _this.route.snapshot.paramMap.get('userId');
            _this._router.navigate(['/issue/' + _this.userId]);
        };
        this.logOut = function () {
            _this.httpService.logOutFunction()
                .subscribe(function (resp) {
                if (resp.status === 200) {
                    _this.cookie.deleteAll();
                    _this.socket.exitSocket();
                    _this._router.navigate(['/']);
                }
                else {
                    _this.toastr.error(resp.message);
                }
            }, function (err) {
                console.log(err);
                _this._router.navigate(['/error']);
            });
        };
    }
    PersonalDashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userName = this.cookie.get('userName');
        this.userId = this.cookie.get('userId');
        this.httpService.getAllIssues(this.userName).subscribe(function (response) {
            if (response['status'] === 200) {
                _this.data = response['data'];
                _this.length = _this.data.length;
                // this.userId = this.cookie.get('userId');
                _this.onChangeTable(_this.config, true);
            }
            else if (response['status'] === 404) {
                _this.toastr.warning(response['message']);
                if (response['message'] === 'Invalid Or Expired Authentication Key') {
                    _this._router.navigate(['/login']);
                }
            }
        }, function (err) {
            _this._router.navigate(['/error']);
        });
        this.listenNotification();
    };
    PersonalDashboardComponent.prototype.changePage = function (page, data) {
        if (data === void 0) { data = this.data; }
        var start = (page.page - 1) * page.itemsPerPage;
        var end = page.itemsPerPage > -1 ? (start + page.itemsPerPage) : data.length;
        return data.slice(start, end);
    };
    PersonalDashboardComponent.prototype.changeSort = function (data, config) {
        if (!config.sorting) {
            return data;
        }
        var columns = this.config.sorting.columns || [];
        var columnName = void 0;
        var sort = void 0;
        for (var i = 0; i < columns.length; i++) {
            if (columns[i].sort !== '' && columns[i].sort !== false) {
                columnName = columns[i].name;
                sort = columns[i].sort;
            }
        }
        if (!columnName) {
            return data;
        }
        // simple sorting
        return data.sort(function (previous, current) {
            if (previous[columnName] > current[columnName]) {
                return sort === 'desc' ? -1 : 1;
            }
            else if (previous[columnName] < current[columnName]) {
                return sort === 'asc' ? -1 : 1;
            }
            return 0;
        });
    };
    PersonalDashboardComponent.prototype.changeFilter = function (data, config) {
        var _this = this;
        var filteredData = data;
        this.columns.forEach(function (column) {
            // console.log(column.filtering)
            if (column.filtering && column.filtering.filterString) {
                filteredData = filteredData.filter(function (item) {
                    return item[column.name].match(column.filtering.filterString);
                });
            }
        });
        if (!config.filtering) {
            return filteredData;
        }
        if (config.filtering.columnName) {
            return filteredData.filter(function (item) {
                return item[config.filtering.columnName].match(_this.config.filtering.filterString);
            });
        }
        var tempArray = [];
        filteredData.forEach(function (item) {
            var flag = false;
            _this.columns.forEach(function (column) {
                if (item[column.name].toString().match(_this.config.filtering.filterString)) {
                    flag = true;
                }
            });
            if (flag) {
                tempArray.push(item);
            }
        });
        filteredData = tempArray;
        return filteredData;
    };
    PersonalDashboardComponent.prototype.onChangeTable = function (config, page) {
        if (page === void 0) { page = { page: this.page, itemsPerPage: this.itemsPerPage }; }
        if (config.filtering) {
            Object.assign(this.config.filtering, config.filtering);
        }
        if (config.sorting) {
            Object.assign(this.config.sorting, config.sorting);
        }
        var filteredData = this.changeFilter(this.data, this.config);
        var sortedData = this.changeSort(filteredData, this.config);
        this.rows = page && config.paging ? this.changePage(page, sortedData) : sortedData;
        this.length = sortedData.length;
    };
    PersonalDashboardComponent.prototype.onCellClick = function (data) {
        // console.log(data);
        this._router.navigate(['/issue/' + this.userId, { issue: data.row.issueId }]);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('notifyModal'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], PersonalDashboardComponent.prototype, "notifyModal", void 0);
    PersonalDashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-personal-dashboard',
            template: __webpack_require__(/*! ./personal-dashboard.component.html */ "./src/app/dashboard/personal-dashboard/personal-dashboard.component.html"),
            styles: [__webpack_require__(/*! ./personal-dashboard.component.css */ "./src/app/dashboard/personal-dashboard/personal-dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"],
            src_app_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"], src_app_socket_service__WEBPACK_IMPORTED_MODULE_5__["SocketService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"]])
    ], PersonalDashboardComponent);
    return PersonalDashboardComponent;
}());



/***/ }),

/***/ "./src/app/error-page/error-page.component.html":
/*!******************************************************!*\
  !*** ./src/app/error-page/error-page.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark \">\n  <a class=\"navbar-brand\" href=\"#\">Issue Tracker</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavAltMarkup\" aria-controls=\"navbarNavAltMarkup\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarNavAltMarkup\">\n    <div class=\"navbar-nav ml-auto\">\n      <a class=\"nav-item nav-link active\" routerLink = '/home'><i class=\"fa fa-sign-out\" style=\"color:white\"  title=\"Logout\" aria-hidden=\"true\"></i>\n      </a>\n    </div>\n  </div>\n</nav>\n<br/>\n\n\n\n\n\n\n<div class=\"container\">\n  <div class =\"row\">\n    <div class=\"col\">\n  <img src =\"assets/error-page.gif\"  class=\"rounded  img-fluid mx-auto image d-block\" style =\"width : 50vw;\">\n</div>\n  \n  </div>\n  </div>"

/***/ }),

/***/ "./src/app/error-page/error-page.component.ts":
/*!****************************************************!*\
  !*** ./src/app/error-page/error-page.component.ts ***!
  \****************************************************/
/*! exports provided: ErrorPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorPageComponent", function() { return ErrorPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ErrorPageComponent = /** @class */ (function () {
    function ErrorPageComponent(_route) {
        this._route = _route;
    }
    ErrorPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this._route.navigate(['/login']);
        }, 2000);
    };
    ErrorPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-error-page',
            template: __webpack_require__(/*! ./error-page.component.html */ "./src/app/error-page/error-page.component.html")
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ErrorPageComponent);
    return ErrorPageComponent;
}());



/***/ }),

/***/ "./src/app/http.service.ts":
/*!*********************************!*\
  !*** ./src/app/http.service.ts ***!
  \*********************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HttpService = /** @class */ (function () {
    function HttpService(_http, cookieService) {
        var _this = this;
        this._http = _http;
        this.cookieService = cookieService;
        // public baseUrl = 'http://api.jyotivermprojects.info';
        this.baseUrl = 'http://api.jyotivermprojects.info';
        this.sendResetLink = function (userName) {
            return _this._http.get(_this.baseUrl + "/api/v1/users/send/resetLink/" + userName);
        };
        this.pwdService = function (data) {
            return _this._http.put(_this.baseUrl + "/api/v1/users/newpassword", data);
        };
        this.getAllUsers = function (id) {
            return _this._http.get(_this.baseUrl + "/api/v1/users/get/all?authToken=" + _this.cookieService.get('authToken') + "&id=" + id);
        };
        this.findUser = function (userName) {
            return _this._http.get(_this.baseUrl + "/api/v1/users/findUser/" + userName);
        };
        this.createIssue = function (issue) {
            issue.authToken = _this.cookieService.get('authToken');
            return _this._http.post(_this.baseUrl + "/api/v1/issues/create", issue);
        };
        this.getIssueDetail = function (id) {
            return _this._http.get(_this.baseUrl + "/api/v1/issues/detail/" + id + "?authToken=" + _this.cookieService.get('authToken'));
        };
        this.updateIssue = function (issue, id) {
            issue.authToken = _this.cookieService.get('authToken');
            return _this._http.put(_this.baseUrl + "/api/v1/issues/update/" + id, issue);
        };
        this.deleteIssue = function (id) {
            var obj = { authToken: _this.cookieService.get('authToken') };
            return _this._http.post(_this.baseUrl + "/api/v1/issues/delete/" + id, obj);
        };
        this.watchIssue = function (id, obj) {
            obj.authToken = _this.cookieService.get('authToken');
            return _this._http.post(_this.baseUrl + "/api/v1/issues/watch/" + id, obj);
        };
        this.unWatchIssue = function (issueId, userId) {
            return _this._http.get(_this.baseUrl + "/api/v1/issues/unWatch/" + issueId + "/" + userId + "?authToken=" + _this.cookieService.get('authToken'));
        };
        this.getWatchers = function (issueId, userId) {
            return _this._http.get(_this.baseUrl + "/api/v1/issues/unWatch/" + issueId + "/" + userId + "?authToken=" + _this.cookieService.get('authToken'));
        };
    }
    HttpService.prototype.register = function (data) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set('userName', data.userName)
            .set('email', data.emailId)
            .set('mobile', data.mobile)
            .set('dob', data.dob)
            .set('password', data.password);
        return (this._http.post(this.baseUrl + "/api/v1/users/register", params));
    };
    HttpService.prototype.signIn = function (data) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set('userName', data.userName)
            .set('password', data.password);
        return (this._http.post(this.baseUrl + "/api/v1/users/login", params));
    };
    HttpService.prototype.getAllIssues = function (userName) {
        return this._http.get(this.baseUrl + "/api/v1/issues/get/all/" + userName + "?authToken=" + this.cookieService.get('authToken'));
    };
    HttpService.prototype.searchIssues = function (searchText) {
        return this._http.get(this.baseUrl + "/api/v1/issues/search/" + searchText + "?authToken=" + this.cookieService.get('authToken'));
    };
    HttpService.prototype.logOutFunction = function () {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set('authToken', this.cookieService.get('authToken'));
        return (this._http.post(this.baseUrl + "/api/v1/users/logout", params));
    };
    HttpService.prototype.handleError = function (err) {
        var errorMessage = '';
        if (err.error instanceof Error) {
            errorMessage = "An error occurred: " + err.error.message;
        }
        else {
            errorMessage = "Server returned code: " + err.status + ", error message is: " + err.message;
        } // end condition *if
        console.error(errorMessage);
        return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(errorMessage);
    };
    HttpService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"]])
    ], HttpService);
    return HttpService;
}());



/***/ }),

/***/ "./src/app/not-found/not-found.component.css":
/*!***************************************************!*\
  !*** ./src/app/not-found/not-found.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cursorPointer {\r\n    cursor: pointer;\r\n}\r\n\r\n.image {\r\n    height: 60vh;\r\n    margin-top: 20vh;\r\n}"

/***/ }),

/***/ "./src/app/not-found/not-found.component.html":
/*!****************************************************!*\
  !*** ./src/app/not-found/not-found.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class =\"row\">\n    <div class=\"col\">\n  <img src =\"assets/error-page.gif\" class=\"rounded  img-fluid mx-auto image d-block\">\n</div>\n  </div>\n  <div class =\"row\">\n    <button class =\"btn btn-outline-warning\" (click) =\"goBackToPreviousPage()\" >Back</button>\n  </div>\n  </div>\n"

/***/ }),

/***/ "./src/app/not-found/not-found.component.ts":
/*!**************************************************!*\
  !*** ./src/app/not-found/not-found.component.ts ***!
  \**************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent(location) {
        this.location = location;
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent.prototype.goBackToPreviousPage = function () {
        this.location.back();
    };
    NotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-not-found',
            template: __webpack_require__(/*! ./not-found.component.html */ "./src/app/not-found/not-found.component.html"),
            styles: [__webpack_require__(/*! ./not-found.component.css */ "./src/app/not-found/not-found.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/socket.service.ts":
/*!***********************************!*\
  !*** ./src/app/socket.service.ts ***!
  \***********************************/
/*! exports provided: SocketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocketService", function() { return SocketService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SocketService = /** @class */ (function () {
    function SocketService(_http, cookieService) {
        var _this = this;
        this._http = _http;
        this.cookieService = cookieService;
        // public baseUrl = 'http://api.jyotivermprojects.info';
        this.baseUrl = 'http://api.jyotivermprojects.info';
        // // Events to be listened----
        this.disConnect = function () {
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
                _this.socket.on('disconnect', function () {
                    observer.next();
                });
            });
        };
        this.notification = function () {
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
                _this.socket.on('issueUpdate', function (data) {
                    observer.next(data);
                });
            });
        };
        // // events to be emitted---------
        this.setUser = function (authToken) {
            _this.socket.emit('set-user', authToken);
        };
        this.changeIssue = function (issueId) {
            _this.socket.emit('modifyIssue', issueId);
        };
        this.watchEvent = function (issueId) {
            _this.socket.emit('watchIssue', issueId);
        };
        this.unWatchEvent = function (issueId) {
            _this.socket.emit('unWatchIssue', issueId);
        };
        this.exitSocket = function () {
            _this.socket.disconnect();
        };
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_4__(this.baseUrl);
    }
    SocketService.prototype.handleError = function (err) {
        var errorMessage = '';
        if (err.error instanceof Error) {
            errorMessage = "An error occurred: " + err.error.message;
        }
        else {
            errorMessage = "Server returned code: " + err.status + ", error message is: " + err.message;
        } // end condition *if
        console.error(errorMessage);
        return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(errorMessage);
    };
    SocketService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"]])
    ], SocketService);
    return SocketService;
}());



/***/ }),

/***/ "./src/app/user/forgot-pwd/forgot-pwd.component.css":
/*!**********************************************************!*\
  !*** ./src/app/user/forgot-pwd/forgot-pwd.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\r\n    /* height: 100vh;\r\n    width: 100vw; */\r\n    margin-top: 20vh;\r\n}\r\nh3 {\r\n    color: rgb(77, 77, 219);\r\n}\r\n.pwdForm {\r\n    padding:4vh;\r\n    height: 40vh;\r\n    margin-top: 30vh;\r\n}\r\nmat-icon {\r\n    font-size: 20px;\r\n    width: 12px;\r\n    padding-right: 17px;\r\n    padding-top: 2px;\r\n}\r\ninput[type=\"text\"]:focus,\r\ninput[type=\"password\"]:focus {\r\nborder-color: rgba(22, 60, 230, 0.603);\r\nbox-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 8px rgba(22, 60, 230, 0.403);\r\noutline: 0 none;\r\n}"

/***/ }),

/***/ "./src/app/user/forgot-pwd/forgot-pwd.component.html":
/*!***********************************************************!*\
  !*** ./src/app/user/forgot-pwd/forgot-pwd.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n<ngx-spinner\nbdColor=\"rgba(51,51,51,0.8)\"\nsize=\"medium\"\ncolor=\"#fff\"\ntype=\"ball-scale-multiple\">\n<p style=\"font-size: 20px; color: white\">Sending...</p>\n</ngx-spinner>\n\n\n<div class=\"container\">\n  <div class=\"row\">\n    <div class =\"col-12 col-md-6\">\n        <img   class=\"img-fluid\"  src=\"assets/img1.jpg\" >\n    </div>\n     <div class =\"col-md-1\"></div> \n     <div class=\" col-12 col-md-4 pwdForm  mx-auto shadow bg-white rounded\" style =\"text-align: center\">\n      <h3 class = \"mb-4\">Reset Password</h3> \n      \n      <form class=\"addForm\"  [formGroup] = 'resetPwdForm' (ngSubmit)=\"forgotPwd()\">\n        \n          <div class=\"input-group mb-4\">\n              <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-user\" aria-hidden=\"true\"></i>&nbsp;\n                  </div>\n                </div>\n                <input type=\"text\" class=\"form-control\"  formControlName=\"userName\"  placeholder=\"Username\" required>\n              \n            </div>\n         \n          \n          \n          <button class =\"btn btn-block btn-danger mb-2\" type=\"submit\" [disabled]='!resetPwdForm.valid'>Send Link</button>\n        <small><a routerLink ='/login'><strong>Login Here</strong></a></small><br/>\n       \n\n      </form>\n      \n            </div>    \n          </div>\n        </div>\n"

/***/ }),

/***/ "./src/app/user/forgot-pwd/forgot-pwd.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/user/forgot-pwd/forgot-pwd.component.ts ***!
  \*********************************************************/
/*! exports provided: ForgotPwdComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPwdComponent", function() { return ForgotPwdComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/http.service */ "./src/app/http.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ForgotPwdComponent = /** @class */ (function () {
    function ForgotPwdComponent(httpService, toastr, _router, spinner) {
        var _this = this;
        this.httpService = httpService;
        this.toastr = toastr;
        this._router = _router;
        this.spinner = spinner;
        this.forgotPwd = function () {
            _this.spinner.show();
            var userName = _this.resetPwdForm.get('userName').value;
            _this.httpService.sendResetLink(userName).subscribe(function (resp) {
                if (resp['status'] === 200) {
                    _this.spinner.hide();
                    // this.isSent = true;
                    _this._router.navigate(['/login']);
                }
                else {
                    _this.toastr.warning(resp['message']);
                }
            }, function (err) {
                _this.toastr.error(err);
                _this._router.navigate(['/error']);
            });
        };
    }
    ForgotPwdComponent.prototype.ngOnInit = function () {
        this.resetPwdForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            userName: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('')
        });
    };
    ForgotPwdComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-forgot-pwd',
            template: __webpack_require__(/*! ./forgot-pwd.component.html */ "./src/app/user/forgot-pwd/forgot-pwd.component.html"),
            styles: [__webpack_require__(/*! ./forgot-pwd.component.css */ "./src/app/user/forgot-pwd/forgot-pwd.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"]])
    ], ForgotPwdComponent);
    return ForgotPwdComponent;
}());



/***/ }),

/***/ "./src/app/user/login/login.component.css":
/*!************************************************!*\
  !*** ./src/app/user/login/login.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\r\n    /* height: 100vh;\r\n    width: 100vw; */\r\n    margin-top: 20vh;\r\n}\r\nh3 {\r\n    color: rgb(77, 77, 219);\r\n}\r\n.loginForm {\r\n    padding:4vh;\r\n    height: 65vh;\r\n    margin-top: 20vh;\r\n}\r\n.signIn {\r\n    height: 6vh;\r\n    width: 30vh;\r\n    margin-top :0;\r\n    cursor: pointer\r\n}\r\nmat-icon {\r\n    font-size: 20px;\r\n    width: 12px;\r\n    padding-right: 17px;\r\n    padding-top: 2px;\r\n}\r\ninput[type=\"text\"]:focus,\r\ninput[type=\"password\"]:focus {\r\nborder-color: rgba(22, 60, 230, 0.603);\r\nbox-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 8px rgba(22, 60, 230, 0.403);\r\noutline: 0 none;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/user/login/login.component.html":
/*!*************************************************!*\
  !*** ./src/app/user/login/login.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n    <div class=\"row\">\n      <div class =\"col-12 col-md-6\">\n          <img   class=\"img-fluid\"  src=\"assets/img1.jpg\" >\n      </div>\n       <div class =\"col-md-1\"></div> \n       <div class=\" col-12 col-md-4 loginForm  mx-auto shadow bg-white rounded\" style =\"text-align: center\">\n        <h3 class = \"mb-4\">Login</h3> \n        \n        <form class=\"addForm\"  [formGroup] = 'loginForm' (ngSubmit)=\"loginUser()\">\n          \n            <div class=\"input-group mb-4\">\n                <div class=\"input-group-prepend\">\n                    <div class=\"input-group-text\"><i class=\"fa fa-user\" aria-hidden=\"true\"></i>&nbsp;\n                    </div>\n                  </div>\n                  <input type=\"text\" class=\"form-control\"  formControlName=\"userName\"  placeholder=\"Username\" required>\n                \n              \n              </div>\n         \n             \n              <div class=\"input-group mb-4\">\n                  <div class=\"input-group-prepend\">\n                    <div class=\"input-group-text\">\n                      <mat-icon matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility' : 'visibility_off'}}</mat-icon>\n                    </div>\n                  </div>\n                  <input class=\"form-control\"  formControlName=\"password\" \n                  [type]=\"hide ? 'password' : 'text'\"    placeholder=\"Password\"  required>\n                </div>\n            \n            \n            <button class =\"btn btn-block btn-info mb-2\" type=\"submit\" [disabled]='!loginForm.valid'>Login</button>\n            \n          \n       \n\n        </form><br/>\n\n  \n          \n         \n          <small>New User?  <a routerLink ='/home'><strong>Register Here</strong></a></small><br/>\n           <small><a routerLink =\"/forgotPwd\"  style=\"float: right;color: red;cursor: pointer\">Forgot Password?</a></small>\n\n\n          \n\n              </div>    \n            </div>\n          </div>\n"

/***/ }),

/***/ "./src/app/user/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/user/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../http.service */ "./src/app/http.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_socket_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/socket.service */ "./src/app/socket.service.ts");
/* harmony import */ var angular_6_social_login__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular-6-social-login */ "./node_modules/angular-6-social-login/angular-6-social-login.umd.js");
/* harmony import */ var angular_6_social_login__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(angular_6_social_login__WEBPACK_IMPORTED_MODULE_8__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// import { SocketService } from '../../socket.service';




var LoginComponent = /** @class */ (function () {
    function LoginComponent(httpService, toastr, _router, cookie, spinner, socket, socialAuthService) {
        var _this = this;
        this.httpService = httpService;
        this.toastr = toastr;
        this._router = _router;
        this.cookie = cookie;
        this.spinner = spinner;
        this.socket = socket;
        this.socialAuthService = socialAuthService;
        this.hide = true;
        this.loginUser = function () {
            _this.spinner.show();
            var userData = {
                userName: _this.loginForm.get('userName').value,
                password: _this.loginForm.get('password').value
            };
            _this.userSignIn(userData);
        };
        this.userSignIn = function (userData) {
            _this.httpService.signIn(userData).subscribe(function (resp) {
                // console.log(resp+'response-----------')
                if (resp.status === 200) {
                    _this.spinner.hide();
                    _this.toastr.success(resp.message);
                    _this.cookie.set('authToken', resp.data.authToken);
                    _this.cookie.set('userId', resp.data.userDetails.userId);
                    _this.cookie.set('userName', resp.data.userDetails.userName);
                    _this.socket.setUser(_this.cookie.get('authToken'));
                    _this.cookie.set('userName', resp.data.userDetails.userName);
                    _this._router.navigate(['/dashboard/' + resp.data.userDetails.userId]);
                }
                else if (resp['status'] === 500) {
                    _this._router.navigate(['/error']);
                }
                else {
                    _this.toastr.warning(resp.data.message);
                }
            }, function (err) {
                _this.toastr.error(err.error.data.message);
                _this._router.navigate(['/error']);
            });
        };
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroup"]({
            userName: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('')
        });
    };
    LoginComponent.prototype.socialSignIn = function (socialPlatform) {
        var _this = this;
        var socialPlatformProvider;
        if (socialPlatform == "facebook") {
            socialPlatformProvider = angular_6_social_login__WEBPACK_IMPORTED_MODULE_8__["FacebookLoginProvider"].PROVIDER_ID;
        }
        else if (socialPlatform == "google") {
            socialPlatformProvider = angular_6_social_login__WEBPACK_IMPORTED_MODULE_8__["GoogleLoginProvider"].PROVIDER_ID;
        }
        else if (socialPlatform == "linkedin") {
            socialPlatformProvider = angular_6_social_login__WEBPACK_IMPORTED_MODULE_8__["LinkedinLoginProvider"].PROVIDER_ID;
        }
        this.socialAuthService.signIn(socialPlatformProvider).then(function (userData) {
            var newUser = {
                emailId: userData.email,
                userName: userData.name,
                password: userData.name,
                mobile: 567,
                dob: '11-11-0090'
            };
            console.log(socialPlatform + " sign in data : ", userData);
            // Now sign-in with userData
            // ...
            _this.httpService.findUser(userData.name).subscribe(function (resp) {
                if (resp['status'] === 200) {
                    _this.userSignIn(newUser);
                }
                else {
                    _this.httpService.register(newUser).subscribe(function (response) {
                        if (response['status'] === 200) {
                            _this.userSignIn(newUser);
                        }
                        else {
                            _this.toastr.info(response.message);
                        }
                    }, function (err) {
                        _this._router.navigate(['/error']);
                    });
                }
            }, function (err) {
                _this._router.navigate(['/error']);
            });
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/user/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/user/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"], ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"], src_app_socket_service__WEBPACK_IMPORTED_MODULE_7__["SocketService"],
            angular_6_social_login__WEBPACK_IMPORTED_MODULE_8__["AuthService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/user/register/register.component.css":
/*!******************************************************!*\
  !*** ./src/app/user/register/register.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* .container-fluid { */\r\n    /* margin: 0; */\r\n    /* padding-left:0; */\r\n    /* } */\r\n    /* .form-field {\r\n    width: 80%;\r\n    } */\r\n    h5 {\r\n        color: orange;\r\n    }\r\n    mat-icon {\r\n        font-size: 20px;\r\n        width: 12px;\r\n        padding-right: 17px;\r\n        padding-top: 2px;\r\n    }\r\n    img {\r\n        /* height: 100vh;\r\n        width: 100vw; */\r\n        margin-top: 20vh;\r\n    }\r\n    h3 {\r\n        color: rgb(77, 77, 219);\r\n    }\r\n    .registerForm {\r\n        padding:4vh;\r\n        height: 80vh;\r\n        margin-top: 10vh;\r\n    }\r\n    input[type=\"text\"]:focus,\r\ninput[type=\"password\"]:focus,\r\ninput[type=\"date\"]:focus,\r\ninput[type=\"tel\"]:focus {\r\n    border-color: rgba(22, 60, 230, 0.603);\r\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 8px rgba(22, 60, 230, 0.403);\r\n  outline: 0 none;\r\n}"

/***/ }),

/***/ "./src/app/user/register/register.component.html":
/*!*******************************************************!*\
  !*** ./src/app/user/register/register.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n<ng-template #notifyModal let-close=\"close\">\n<div class=\"modal-header\">\n  <h5 class=\"modal-title mx-auto\"><strong>Warning</strong></h5>\n  <button type=\"button\" class=\"close\" (click)=\"close()\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n<div class=\"modal-body\">\n  <div class =\"row\">\n  <div class =\"col\">\n    <h6>{{registerResponse.message}}</h6>\n      <small>*Email should be valid.</small><br/>\n      <small>*Password should have Minimum 8 characters which contain only characters,numeric digits, \n        underscore and first character must be a letter.</small><br/>\n        <small>*MobileNumber should be valid(10 digits).</small><br/>\n</div>\n</div>\n</div>\n<div class=\"modal-footer\">\n  <button type=\"button\"  ngbAutofocus class=\"btn btn-warning\"  (click)=\"close()\">OK</button>\n</div>\n</ng-template>\n\n<ngx-spinner\n  bdColor=\"rgba(51,51,51,0.8)\"\n  size=\"medium\"\n  color=\"#fff\"\n  type=\"ball-scale-multiple\">\n <p style=\"font-size: 20px; color: white\">Registering...</p>\n</ngx-spinner>\n\n\n\n<div class=\"container\">\n  <div class=\"row\">\n    <div class =\"col-12 col-md-6\">\n        <img   class=\"img-fluid\"  src=\"assets/img1.jpg\" >\n    </div>\n     <div class =\"col-md-1\"></div> \n     <div class=\" col-12 col-md-4 registerForm  mx-auto shadow bg-white rounded\" style =\"text-align: center\">\n      <h3 class = \"mb-4\">Register Here</h3> \n       \n      <form  [formGroup]=\"signUpForm\"   (ngSubmit)=\"registerUser()\">\n          <div class=\"input-group mb-4\">\n              <div class=\"input-group-prepend\">\n                <div class=\"input-group-text\"><i class=\"fa fa-envelope\" aria-hidden=\"true\"></i>\n                </div>\n              </div>\n              <input type=\"text\" class=\"form-control\"  formControlName=\"emailId\" \n               placeholder=\"Email Id\" required>\n            </div>\n        <div class=\"input-group mb-4\">\n          <div class=\"input-group-prepend\">\n            <div class=\"input-group-text\"><i class=\"fa fa-user\" aria-hidden=\"true\"></i>&nbsp;\n            </div>\n          </div>\n          <input type=\"text\" class=\"form-control\"  formControlName=\"userName\"  \n            placeholder=\"Username\" required>\n        </div>\n      \n        <div class=\"input-group mb-4\">\n            <div class=\"input-group-prepend\">\n              <div class=\"input-group-text\">\n                  <!-- <i class=\"fa fa-lock\" aria-hidden=\"true\"></i>&nbsp; -->\n                <mat-icon matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility' : 'visibility_off'}}</mat-icon> \n               </div>\n            </div>\n            <input class=\"form-control\" \n            [type]=\"hide ? 'password' : 'text'\"   formControlName=\"password\"  \n             \n           placeholder=\"Password\"  required>           \n          </div>\n                       \n\n          \n\n          <div class=\"input-group mb-4\">\n            <div class=\"input-group-prepend\">\n              <div class=\"input-group-text\"><i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>\n              </div>\n            </div>\n            <input type=\"date\" class=\"form-control\" formControlName=\"dob\" \n              placeholder=\"Date Of Birth\" required>\n          </div>\n          <div class=\"input-group mb-4\">\n            <div class=\"input-group-prepend\">\n              <div class=\"input-group-text\"><i class=\"fa fa-mobile fa-lg\" aria-hidden=\"true\"></i>&nbsp;\n              </div>\n            </div>\n            <input type=\"tel\" class=\"form-control\" formControlName=\"mobile\" \n             placeholder=\"Mobile\" required>\n          </div>\n          <button class =\"btn btn-block btn-success mb-2\" type=\"submit\" [disabled]='!signUpForm.valid'>Register</button>\n          <small>Already Registered?<a routerLink ='/login'><strong>Login Here</strong></a></small>\n      </form> \n      \n             </div>  \n          </div>\n        </div>\n"

/***/ }),

/***/ "./src/app/user/register/register.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/user/register/register.component.ts ***!
  \*****************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var src_app_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/http.service */ "./src/app/http.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






// import { SocketService } from 'src/app/socket.service';

var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(httpService, toastr, _router, spinner, modal) {
        var _this = this;
        this.httpService = httpService;
        this.toastr = toastr;
        this._router = _router;
        this.spinner = spinner;
        this.modal = modal;
        this.hide = true;
        this.registerUser = function () {
            _this.spinner.show();
            var newUser = {
                emailId: _this.signUpForm.get('emailId').value,
                userName: _this.signUpForm.get('userName').value,
                password: _this.signUpForm.get('password').value,
                dob: _this.signUpForm.get('dob').value,
                mobile: _this.signUpForm.get('mobile').value
            };
            console.log(newUser);
            _this.httpService.register(newUser).subscribe(function (response) {
                _this.registerResponse = response;
                // console.log(response);
                if (response['status'] === 200) {
                    _this.spinner.hide();
                    _this.toastr.success('User Created successfully!!');
                    // this.socketService.newUser(response.data);
                    setTimeout(function () {
                        _this._router.navigate(['/login']);
                    });
                }
                else if (response['status'] === 500) {
                    _this.spinner.hide();
                    _this._router.navigate(['/error']);
                }
                else {
                    _this.spinner.hide();
                    // this.toastr.warning(response.message);
                    _this.modal.open(_this.notifyModal, { size: 'lg' });
                    _this.signUpForm.reset();
                }
            }, function (err) {
                console.log(err);
                _this._router.navigate(['/error']);
            });
        };
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.signUpForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            emailId: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            userName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(4)),
            dob: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            mobile: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(10))
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('notifyModal'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], RegisterComponent.prototype, "notifyModal", void 0);
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/user/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/user/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/user/reset-pwd/reset-pwd.component.css":
/*!********************************************************!*\
  !*** ./src/app/user/reset-pwd/reset-pwd.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\r\n    /* height: 100vh;\r\n    width: 100vw; */\r\n    margin-top: 20vh;\r\n}\r\nh3 {\r\n    color: rgb(77, 77, 219);\r\n}\r\n.resetForm {\r\n    padding:4vh;\r\n    height: 50vh;\r\n    margin-top: 22vh;\r\n}\r\nmat-icon {\r\n    font-size: 20px;\r\n    width: 12px;\r\n    padding-right: 17px;\r\n    padding-top: 2px;\r\n}\r\ninput[type=\"text\"]:focus,\r\ninput[type=\"password\"]:focus {\r\nborder-color: rgba(22, 60, 230, 0.603);\r\nbox-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 8px rgba(22, 60, 230, 0.403);\r\noutline: 0 none;\r\n}"

/***/ }),

/***/ "./src/app/user/reset-pwd/reset-pwd.component.html":
/*!*********************************************************!*\
  !*** ./src/app/user/reset-pwd/reset-pwd.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n<ngx-spinner\nbdColor=\"rgba(51,51,51,0.8)\"\nsize=\"medium\"\ncolor=\"#fff\"\ntype=\"ball-scale-multiple\">\n<p style=\"font-size: 20px; color: white\">Resetting...</p>\n</ngx-spinner>\n\n\n<div class=\"container\">\n  <div class=\"row\">\n    <div class =\"col-12 col-md-6\">\n        <img   class=\"img-fluid\"  src=\"assets/img1.jpg\" >\n    </div>\n     <div class =\"col-md-1\"></div> \n     <div class=\" col-12 col-md-4 resetForm  mx-auto shadow bg-white rounded\" style =\"text-align: center\">\n      <h3 class = \"mb-4\">Reset Password</h3> \n      \n      <form class=\"addForm\"  [formGroup] = 'newPwdForm' (ngSubmit)=\"resetPassword()\">\n        \n          <div class=\"input-group mb-4\">\n              <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-user\" aria-hidden=\"true\"></i>&nbsp;\n                  </div>\n                </div>\n                <input type=\"text\" class=\"form-control\"  formControlName=\"userName\"  placeholder=\"Username\" required readonly>\n              \n            </div>\n            <div class=\"input-group mb-4\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\">\n                    <mat-icon matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility' : 'visibility_off'}}</mat-icon>\n                  </div>\n                </div>\n                <input class=\"form-control\"  formControlName=\"password\" \n                [type]=\"hide ? 'password' : 'text'\"    placeholder=\"New Password\"  required>\n              </div>\n          \n          \n          <button class =\"btn btn-block btn-success mb-2\" type=\"submit\" [disabled]='!newPwdForm.valid'>Reset</button>\n        <small><a routerLink ='/login'><strong>Login Here</strong></a></small><br/>\n       <!-- <small><a routerLink =\"/forgotPwd\"  style=\"float: right;color: red;cursor: pointer\">Forgot Password?</a></small>  -->\n\n      </form>\n      \n            </div>    \n          </div>\n        </div>\n"

/***/ }),

/***/ "./src/app/user/reset-pwd/reset-pwd.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/user/reset-pwd/reset-pwd.component.ts ***!
  \*******************************************************/
/*! exports provided: ResetPwdComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPwdComponent", function() { return ResetPwdComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var src_app_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/http.service */ "./src/app/http.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ResetPwdComponent = /** @class */ (function () {
    function ResetPwdComponent(_router, route, toastr, spinner, httpService) {
        var _this = this;
        this._router = _router;
        this.route = route;
        this.toastr = toastr;
        this.spinner = spinner;
        this.httpService = httpService;
        this.hide = true;
        this.resetPassword = function () {
            // this.spinner.show();
            var data = {
                userId: _this.route.snapshot.paramMap.get('userId'),
                password: _this.newPwdForm.get('password').value
            };
            _this.httpService.pwdService(data).subscribe(function (resp) {
                if (resp['status'] === 200) {
                    _this._router.navigate(['/login']);
                    _this.toastr.success('Password reset successful');
                }
                else {
                    _this.toastr.warning('Try Again');
                }
            }, function (err) {
                console.log(err);
                _this._router.navigate(['/error']);
            });
        };
    }
    ResetPwdComponent.prototype.ngOnInit = function () {
        this.newPwdForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
            userName: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](this.route.snapshot.queryParamMap.get('userName')),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('')
        });
        console.log(this.route.snapshot.paramMap.get('userId'));
    };
    ResetPwdComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-reset-pwd',
            template: __webpack_require__(/*! ./reset-pwd.component.html */ "./src/app/user/reset-pwd/reset-pwd.component.html"),
            styles: [__webpack_require__(/*! ./reset-pwd.component.css */ "./src/app/user/reset-pwd/reset-pwd.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"],
            src_app_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]])
    ], ResetPwdComponent);
    return ResetPwdComponent;
}());



/***/ }),

/***/ "./src/app/user/user.module.ts":
/*!*************************************!*\
  !*** ./src/app/user/user.module.ts ***!
  \*************************************/
/*! exports provided: UserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModule", function() { return UserModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/user/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./register/register.component */ "./src/app/user/register/register.component.ts");
/* harmony import */ var _forgot_pwd_forgot_pwd_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./forgot-pwd/forgot-pwd.component */ "./src/app/user/forgot-pwd/forgot-pwd.component.ts");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _reset_pwd_reset_pwd_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./reset-pwd/reset-pwd.component */ "./src/app/user/reset-pwd/reset-pwd.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var UserModule = /** @class */ (function () {
    function UserModule() {
    }
    UserModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModule"],
                ngx_spinner__WEBPACK_IMPORTED_MODULE_12__["NgxSpinnerModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_11__["ToastrModule"].forRoot(),
                _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"].forChild([
                    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
                    { path: 'forgotPwd', component: _forgot_pwd_forgot_pwd_component__WEBPACK_IMPORTED_MODULE_5__["ForgotPwdComponent"] },
                    { path: 'resetPwd/:userId', component: _reset_pwd_reset_pwd_component__WEBPACK_IMPORTED_MODULE_13__["ResetPwdComponent"] }
                ])
            ],
            declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"], _forgot_pwd_forgot_pwd_component__WEBPACK_IMPORTED_MODULE_5__["ForgotPwdComponent"], _reset_pwd_reset_pwd_component__WEBPACK_IMPORTED_MODULE_13__["ResetPwdComponent"]]
        })
    ], UserModule);
    return UserModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\riksw\Desktop\Issuetracker\IT Tracker\IssueTracker-Front\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map