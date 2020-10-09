(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _questions_questions_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./questions/questions.component */ "./src/app/questions/questions.component.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'questions';
    }
    AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, consts: [["title", "HAVE A QUESTION? WE CAN HELP"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-questions", 0);
        } }, directives: [_questions_questions_component__WEBPACK_IMPORTED_MODULE_1__["QuestionsComponent"]], styles: ["app-root[_nghost-%COMP%] {\n  display: block;\n  width: 100%;\n}\napp-root[_nghost-%COMP%]   app-questions[_ngcontent-%COMP%] {\n  display: block;\n  width: 80%;\n  margin: 20px auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxCbG9uZGFcXERvY3VtZW50c1xcV29ya1xcRGlyZWN0TGluZVxccXVlc3Rpb25zL3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSxXQUFBO0FDQ0Y7QURDRTtFQUNFLGNBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0KGFwcC1yb290KSB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgd2lkdGg6IDEwMCU7XHJcblxyXG4gIGFwcC1xdWVzdGlvbnMge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgbWFyZ2luOiAyMHB4IGF1dG87XHJcbiAgfVxyXG59XHJcbiIsIjpob3N0KGFwcC1yb290KSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbn1cbjpob3N0KGFwcC1yb290KSBhcHAtcXVlc3Rpb25zIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiA4MCU7XG4gIG1hcmdpbjogMjBweCBhdXRvO1xufSJdfQ== */"] });
    return AppComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-skeleton-loader */ "./node_modules/ngx-skeleton-loader/__ivy_ngcc__/fesm5/ngx-skeleton-loader.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/expansion.js");
/* harmony import */ var _questions_questions_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./questions/questions.component */ "./src/app/questions/questions.component.ts");
/* harmony import */ var _questions_accordion_accordion_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./questions/accordion/accordion.component */ "./src/app/questions/accordion/accordion.component.ts");










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]] });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_4__["NgxSkeletonLoaderModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_6__["MatExpansionModule"]
            ]] });
    return AppModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
        _questions_questions_component__WEBPACK_IMPORTED_MODULE_7__["QuestionsComponent"],
        _questions_accordion_accordion_component__WEBPACK_IMPORTED_MODULE_8__["AccordionComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
        ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_4__["NgxSkeletonLoaderModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_6__["MatExpansionModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                    _questions_questions_component__WEBPACK_IMPORTED_MODULE_7__["QuestionsComponent"],
                    _questions_accordion_accordion_component__WEBPACK_IMPORTED_MODULE_8__["AccordionComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                    ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_4__["NgxSkeletonLoaderModule"],
                    _angular_material_expansion__WEBPACK_IMPORTED_MODULE_6__["MatExpansionModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/questions/accordion/accordion.component.ts":
/*!************************************************************!*\
  !*** ./src/app/questions/accordion/accordion.component.ts ***!
  \************************************************************/
/*! exports provided: AccordionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionComponent", function() { return AccordionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/expansion.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");





function AccordionComponent_mat_expansion_panel_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-expansion-panel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-expansion-panel-header", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-panel-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var question_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Q", question_r1.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", question_r1.question, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](question_r1.answer);
} }
/**
 * Component which displays the list of questions in an accordion.
 * It uses the angular material component 'mat-accordion'
 */
var AccordionComponent = /** @class */ (function () {
    function AccordionComponent() {
    }
    AccordionComponent.prototype.ngOnInit = function () { };
    /**
     * Used for improving ngFor directive; called for every question displayed.
     * @param index The index of the question
     * @param question The question
     * @return An index to be used by ngFor for the question received as parameter
     */
    AccordionComponent.prototype.trackByFunction = function (index, question) {
        return index;
    };
    AccordionComponent.ɵfac = function AccordionComponent_Factory(t) { return new (t || AccordionComponent)(); };
    AccordionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AccordionComponent, selectors: [["app-accordion"]], viewQuery: function AccordionComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_expansion__WEBPACK_IMPORTED_MODULE_1__["MatAccordion"], true);
        } if (rf & 2) {
            var _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.accordion = _t.first);
        } }, inputs: { questions: "questions" }, decls: 2, vars: 2, consts: [["displayMode", "flat", "hideToggle", "true"], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["collapsedHeight", "auto", "expandedHeight", "auto"], [1, "question-index"], [1, "custom-indicator"], [1, "plus"]], template: function AccordionComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-accordion", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AccordionComponent_mat_expansion_panel_1_Template, 10, 3, "mat-expansion-panel", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.questions)("ngForTrackBy", ctx.trackByFunction);
        } }, directives: [_angular_material_expansion__WEBPACK_IMPORTED_MODULE_1__["MatAccordion"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_1__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_1__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_1__["MatExpansionPanelTitle"]], styles: ["@-webkit-keyframes open {\n  from {\n    -webkit-transform: rotate(0deg);\n  }\n  to {\n    -webkit-transform: rotate(45deg);\n  }\n}\n@keyframes open {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(45deg);\n  }\n}\n@-webkit-keyframes close {\n  from {\n    -webkit-transform: rotate(45deg);\n  }\n  to {\n    -webkit-transform: rotate(0deg);\n  }\n}\n@keyframes close {\n  from {\n    transform: rotate(45deg);\n  }\n  to {\n    transform: rotate(0deg);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcXVlc3Rpb25zL2FjY29yZGlvbi9DOlxcVXNlcnNcXEJsb25kYVxcRG9jdW1lbnRzXFxXb3JrXFxEaXJlY3RMaW5lXFxxdWVzdGlvbnMvc3JjXFxhcHBcXHF1ZXN0aW9uc1xcYWNjb3JkaW9uXFxhY2NvcmRpb24tYW5pbWF0aW9ucy5zY3NzIiwic3JjL2FwcC9xdWVzdGlvbnMvYWNjb3JkaW9uL2FjY29yZGlvbi1hbmltYXRpb25zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBVUE7RUFDRTtJQUNFLCtCQUFBO0VDREY7RURHQTtJQUNFLGdDQUFBO0VDREY7QUFDRjtBRElBO0VBQ0U7SUFFRSx1QkFBQTtFQ0ZGO0VESUE7SUFFRSx3QkFBQTtFQ0ZGO0FBQ0Y7QURnQkE7RUFDRTtJQUNFLGdDQUFBO0VDTkY7RURRQTtJQUNFLCtCQUFBO0VDTkY7QUFDRjtBRFNBO0VBQ0U7SUFFRSx3QkFBQTtFQ1BGO0VEU0E7SUFFRSx1QkFBQTtFQ1BGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9xdWVzdGlvbnMvYWNjb3JkaW9uL2FjY29yZGlvbi1hbmltYXRpb25zLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBhbmltYXRpb25zIGZvciB0aGUgcGx1cyBzaWduIGV4cGFuZGluZyBhbmQgY29sbGFwc2luZyBhIHF1ZXN0aW9uXHJcbkAtbW96LWtleWZyYW1lcyBvcGVuIHtcclxuICBmcm9tIHtcclxuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgfVxyXG4gIHRvIHtcclxuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gIH1cclxufVxyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIG9wZW4ge1xyXG4gIGZyb20ge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICB9XHJcbiAgdG8ge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIG9wZW4ge1xyXG4gIGZyb20ge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gIH1cclxuICB0byB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuICB9XHJcbn1cclxuXHJcblxyXG4vLyBhbmltYXRpb25zIGZvciB0aGUgcGx1cyBzaWduIGNvbGxhcHNpbmcgYSBxdWVzdGlvblxyXG5ALW1vei1rZXlmcmFtZXMgY2xvc2Uge1xyXG4gIGZyb20ge1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgfVxyXG4gIHRvIHtcclxuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgfVxyXG59XHJcblxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgY2xvc2Uge1xyXG4gIGZyb20ge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgfVxyXG4gIHRvIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGNsb3NlIHtcclxuICBmcm9tIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gIH1cclxuICB0byB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgfVxyXG59XHJcbiIsIkAtbW96LWtleWZyYW1lcyBvcGVuIHtcbiAgZnJvbSB7XG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxuICB0byB7XG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gIH1cbn1cbkAtd2Via2l0LWtleWZyYW1lcyBvcGVuIHtcbiAgZnJvbSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxuICB0byB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgb3BlbiB7XG4gIGZyb20ge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIH1cbiAgdG8ge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgfVxufVxuQC1tb3ota2V5ZnJhbWVzIGNsb3NlIHtcbiAgZnJvbSB7XG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gIH1cbiAgdG8ge1xuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIH1cbn1cbkAtd2Via2l0LWtleWZyYW1lcyBjbG9zZSB7XG4gIGZyb20ge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICB9XG4gIHRvIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGNsb3NlIHtcbiAgZnJvbSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICB9XG4gIHRvIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB9XG59Il19 */", "mat-accordion[_ngcontent-%COMP%]   .question-index[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 20px;\n  margin-right: 50px;\n}\nmat-accordion[_ngcontent-%COMP%]   mat-expansion-panel[_ngcontent-%COMP%] {\n  box-shadow: none;\n}\nmat-accordion[_ngcontent-%COMP%]   mat-expansion-panel[_ngcontent-%COMP%]:first-of-type {\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\nmat-accordion[_ngcontent-%COMP%]   mat-expansion-panel[_ngcontent-%COMP%]:last-of-type {\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\nmat-accordion[_ngcontent-%COMP%]   mat-expansion-panel.mat-expanded[_ngcontent-%COMP%] {\n  border-bottom: 2px solid black;\n}\nmat-accordion[_ngcontent-%COMP%]   mat-expansion-panel.mat-expanded[_ngcontent-%COMP%]   mat-expansion-panel-header[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.2);\n  border-bottom: 0;\n}\nmat-accordion[_ngcontent-%COMP%]   mat-expansion-panel.mat-expanded[_ngcontent-%COMP%]   mat-expansion-panel-header[_ngcontent-%COMP%]   .custom-indicator[_ngcontent-%COMP%]   .plus[_ngcontent-%COMP%] {\n  -webkit-animation: open 0.5s ease;\n  animation: open 0.5s ease;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n}\nmat-accordion[_ngcontent-%COMP%]   mat-expansion-panel[_ngcontent-%COMP%]   mat-expansion-panel-header[_ngcontent-%COMP%] {\n  padding: 20px;\n  height: auto;\n  border-bottom: 2px solid black;\n  font-family: Oswald, Roboto, \"Helvetica Neue\", sans-serif;\n}\nmat-accordion[_ngcontent-%COMP%]   mat-expansion-panel[_ngcontent-%COMP%]   mat-expansion-panel-header[_ngcontent-%COMP%]     .mat-content {\n  align-items: center;\n}\nmat-accordion[_ngcontent-%COMP%]   mat-expansion-panel[_ngcontent-%COMP%]   mat-expansion-panel-header[_ngcontent-%COMP%]     .mat-content mat-panel-title {\n  align-items: center;\n}\nmat-accordion[_ngcontent-%COMP%]   mat-expansion-panel[_ngcontent-%COMP%]   mat-expansion-panel-header[_ngcontent-%COMP%]   .custom-indicator[_ngcontent-%COMP%] {\n  display: inline-block;\n  text-align: center;\n  min-width: 40px;\n  height: 40px;\n  background-color: #FEC800;\n}\nmat-accordion[_ngcontent-%COMP%]   mat-expansion-panel[_ngcontent-%COMP%]   mat-expansion-panel-header[_ngcontent-%COMP%]   .custom-indicator[_ngcontent-%COMP%]   .plus[_ngcontent-%COMP%] {\n  display: inline-block;\n  position: relative;\n  top: calc(50% - 10px);\n  width: 20px;\n  height: 20px;\n  background-image: url('plus-icon.svg');\n  -webkit-animation: close 0.5s ease;\n  animation: close 0.5s ease;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n}\nmat-accordion[_ngcontent-%COMP%]   mat-expansion-panel[_ngcontent-%COMP%]  .mat-expansion-panel-content {\n  font-family: Oswald, Roboto, \"Helvetica Neue\", sans-serif;\n}\nmat-accordion[_ngcontent-%COMP%]   mat-expansion-panel[_ngcontent-%COMP%]  .mat-expansion-panel-content .mat-expansion-panel-body {\n  padding-top: 16px;\n  padding-bottom: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcXVlc3Rpb25zL2FjY29yZGlvbi9DOlxcVXNlcnNcXEJsb25kYVxcRG9jdW1lbnRzXFxXb3JrXFxEaXJlY3RMaW5lXFxxdWVzdGlvbnMvc3JjXFxhcHBcXHF1ZXN0aW9uc1xcYWNjb3JkaW9uXFxhY2NvcmRpb24uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3F1ZXN0aW9ucy9hY2NvcmRpb24vYWNjb3JkaW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNBSjtBREdFO0VBQ0UsZ0JBQUE7QUNESjtBRElJO0VBQ0UseUJBQUE7RUFDQSwwQkFBQTtBQ0ZOO0FESUk7RUFDRSw2QkFBQTtFQUNBLDRCQUFBO0FDRk47QURNSTtFQUNFLDhCQUFBO0FDSk47QURLTTtFQUNFLG9DQUFBO0VBQ0EsZ0JBQUE7QUNIUjtBREtVO0VBRUUsaUNBQUE7RUFFQSx5QkFBQTtFQUNBLHFDQUFBO1VBQUEsNkJBQUE7QUNKWjtBRFdJO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSw4QkFBQTtFQUNBLHlEQUFBO0FDVE47QURZUTtFQUNFLG1CQUFBO0FDVlY7QURXVTtFQUNFLG1CQUFBO0FDVFo7QURjTTtFQUNFLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0FDWlI7QURjUTtFQUNFLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esc0NBQUE7RUFHQSxrQ0FBQTtFQUVBLDBCQUFBO0VBQ0EscUNBQUE7VUFBQSw2QkFBQTtBQ2RWO0FEcUJNO0VBRUUseURBQUE7QUNwQlI7QURzQlE7RUFDRSxpQkFBQTtFQUNBLG9CQUFBO0FDcEJWIiwiZmlsZSI6InNyYy9hcHAvcXVlc3Rpb25zL2FjY29yZGlvbi9hY2NvcmRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtYWNjb3JkaW9uIHtcclxuICAucXVlc3Rpb24taW5kZXgge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDUwcHg7XHJcbiAgfVxyXG5cclxuICBtYXQtZXhwYW5zaW9uLXBhbmVsIHtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcblxyXG4gICAgLy8gb3ZlcnJpZGUgZGVmYXVsdCBwcm9wZXJ0aWVzIHRvIG1hdGNoIGRlc2lnbiAtIHdpdGhvdXQgcm91bmRlZCBjb3JuZXJzXHJcbiAgICAmOmZpcnN0LW9mLXR5cGUge1xyXG4gICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xyXG4gICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcclxuICAgIH1cclxuICAgICY6bGFzdC1vZi10eXBlIHtcclxuICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XHJcbiAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gc3R5bGUgdGhlIGV4cGFuZGVkIHF1ZXN0aW9uXHJcbiAgICAmLm1hdC1leHBhbmRlZCB7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBibGFjaztcclxuICAgICAgbWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAwO1xyXG4gICAgICAgIC5jdXN0b20taW5kaWNhdG9yIHtcclxuICAgICAgICAgIC5wbHVzIHtcclxuICAgICAgICAgICAgLy8gYW5pbWF0aW9ucyBmb3IgZXhwYW5kaW5nIGEgcXVlc3Rpb25cclxuICAgICAgICAgICAgLXdlYmtpdC1hbmltYXRpb246b3BlbiAwLjVzIGVhc2U7XHJcbiAgICAgICAgICAgIC1tb3otYW5pbWF0aW9uOm9wZW4gMC41cyBlYXNlO1xyXG4gICAgICAgICAgICBhbmltYXRpb246b3BlbiAwLjVzIGVhc2U7XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIHN0eWxlIHRoZSBoZWFkZXIgb2YgZWFjaCBxdWVzdGlvblxyXG4gICAgbWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXIge1xyXG4gICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBibGFjaztcclxuICAgICAgZm9udC1mYW1pbHk6IE9zd2FsZCwgUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XHJcblxyXG4gICAgICA6Om5nLWRlZXAge1xyXG4gICAgICAgIC5tYXQtY29udGVudCB7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgbWF0LXBhbmVsLXRpdGxlIHtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5jdXN0b20taW5kaWNhdG9yIHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIG1pbi13aWR0aDogNDBweDtcclxuICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0ZFQzgwMDtcclxuXHJcbiAgICAgICAgLnBsdXMge1xyXG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgdG9wOiBjYWxjKDUwJSAtIDEwcHgpO1xyXG4gICAgICAgICAgd2lkdGg6IDIwcHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vYXNzZXRzL3N2Z3MvcGx1cy1pY29uLnN2Zyk7XHJcblxyXG4gICAgICAgICAgLy8gYW5pbWF0aW9ucyBmb3IgY29sbGFwc2luZyBhIHF1ZXN0aW9uXHJcbiAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbjpjbG9zZSAwLjVzIGVhc2U7XHJcbiAgICAgICAgICAtbW96LWFuaW1hdGlvbjpjbG9zZSAwLjVzIGVhc2U7XHJcbiAgICAgICAgICBhbmltYXRpb246Y2xvc2UgMC41cyBlYXNlO1xyXG4gICAgICAgICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gc3R5bGUgdGhlIGNvbnRlbnQgb2YgZWFjaCBxdWVzdGlvblxyXG4gICAgJjo6bmctZGVlcCB7XHJcbiAgICAgIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWNvbnRlbnQge1xyXG4gICAgICAgIC8vIHN0eWxlIGN1c3RvbSBmb250IGZhbWlseVxyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBPc3dhbGQsIFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xyXG5cclxuICAgICAgICAubWF0LWV4cGFuc2lvbi1wYW5lbC1ib2R5IHtcclxuICAgICAgICAgIHBhZGRpbmctdG9wOiAxNnB4O1xyXG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDE2cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIm1hdC1hY2NvcmRpb24gLnF1ZXN0aW9uLWluZGV4IHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xufVxubWF0LWFjY29yZGlvbiBtYXQtZXhwYW5zaW9uLXBhbmVsIHtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cbm1hdC1hY2NvcmRpb24gbWF0LWV4cGFuc2lvbi1wYW5lbDpmaXJzdC1vZi10eXBlIHtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XG59XG5tYXQtYWNjb3JkaW9uIG1hdC1leHBhbnNpb24tcGFuZWw6bGFzdC1vZi10eXBlIHtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XG59XG5tYXQtYWNjb3JkaW9uIG1hdC1leHBhbnNpb24tcGFuZWwubWF0LWV4cGFuZGVkIHtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGJsYWNrO1xufVxubWF0LWFjY29yZGlvbiBtYXQtZXhwYW5zaW9uLXBhbmVsLm1hdC1leHBhbmRlZCBtYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgYm9yZGVyLWJvdHRvbTogMDtcbn1cbm1hdC1hY2NvcmRpb24gbWF0LWV4cGFuc2lvbi1wYW5lbC5tYXQtZXhwYW5kZWQgbWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXIgLmN1c3RvbS1pbmRpY2F0b3IgLnBsdXMge1xuICAtd2Via2l0LWFuaW1hdGlvbjogb3BlbiAwLjVzIGVhc2U7XG4gIC1tb3otYW5pbWF0aW9uOiBvcGVuIDAuNXMgZWFzZTtcbiAgYW5pbWF0aW9uOiBvcGVuIDAuNXMgZWFzZTtcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG59XG5tYXQtYWNjb3JkaW9uIG1hdC1leHBhbnNpb24tcGFuZWwgbWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXIge1xuICBwYWRkaW5nOiAyMHB4O1xuICBoZWlnaHQ6IGF1dG87XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBibGFjaztcbiAgZm9udC1mYW1pbHk6IE9zd2FsZCwgUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG59XG5tYXQtYWNjb3JkaW9uIG1hdC1leHBhbnNpb24tcGFuZWwgbWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXIgOjpuZy1kZWVwIC5tYXQtY29udGVudCB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5tYXQtYWNjb3JkaW9uIG1hdC1leHBhbnNpb24tcGFuZWwgbWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXIgOjpuZy1kZWVwIC5tYXQtY29udGVudCBtYXQtcGFuZWwtdGl0bGUge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxubWF0LWFjY29yZGlvbiBtYXQtZXhwYW5zaW9uLXBhbmVsIG1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyIC5jdXN0b20taW5kaWNhdG9yIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1pbi13aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkVDODAwO1xufVxubWF0LWFjY29yZGlvbiBtYXQtZXhwYW5zaW9uLXBhbmVsIG1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyIC5jdXN0b20taW5kaWNhdG9yIC5wbHVzIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogY2FsYyg1MCUgLSAxMHB4KTtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uL2Fzc2V0cy9zdmdzL3BsdXMtaWNvbi5zdmcpO1xuICAtd2Via2l0LWFuaW1hdGlvbjogY2xvc2UgMC41cyBlYXNlO1xuICAtbW96LWFuaW1hdGlvbjogY2xvc2UgMC41cyBlYXNlO1xuICBhbmltYXRpb246IGNsb3NlIDAuNXMgZWFzZTtcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG59XG5tYXQtYWNjb3JkaW9uIG1hdC1leHBhbnNpb24tcGFuZWw6Om5nLWRlZXAgLm1hdC1leHBhbnNpb24tcGFuZWwtY29udGVudCB7XG4gIGZvbnQtZmFtaWx5OiBPc3dhbGQsIFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xufVxubWF0LWFjY29yZGlvbiBtYXQtZXhwYW5zaW9uLXBhbmVsOjpuZy1kZWVwIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWNvbnRlbnQgLm1hdC1leHBhbnNpb24tcGFuZWwtYm9keSB7XG4gIHBhZGRpbmctdG9wOiAxNnB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTZweDtcbn0iXX0= */"] });
    return AccordionComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AccordionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-accordion',
                templateUrl: './accordion.component.html',
                styleUrls: ['./accordion-animations.scss', './accordion.component.scss']
            }]
    }], function () { return []; }, { accordion: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_expansion__WEBPACK_IMPORTED_MODULE_1__["MatAccordion"]]
        }], questions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/questions/questions.component.ts":
/*!**************************************************!*\
  !*** ./src/app/questions/questions.component.ts ***!
  \**************************************************/
/*! exports provided: QuestionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionsComponent", function() { return QuestionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _questions_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./questions.service */ "./src/app/questions/questions.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _accordion_accordion_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./accordion/accordion.component */ "./src/app/questions/accordion/accordion.component.ts");
/* harmony import */ var ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-skeleton-loader */ "./node_modules/ngx-skeleton-loader/__ivy_ngcc__/fesm5/ngx-skeleton-loader.js");








function QuestionsComponent_app_accordion_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-accordion", 5);
} if (rf & 2) {
    var questions_r3 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("questions", questions_r3);
} }
function QuestionsComponent_ng_template_6_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Error loading the questions. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function QuestionsComponent_ng_template_6_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ngx-skeleton-loader", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function QuestionsComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, QuestionsComponent_ng_template_6_div_0_Template, 2, 0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, QuestionsComponent_ng_template_6_ng_template_2_Template, 2, 0, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
} if (rf & 2) {
    var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 2, ctx_r2.error$))("ngIfElse", _r5);
} }
/**
 * Component which displays the data required by design:
 *  - the title
 *  - the separator
 *  - the list of questions
 * This component manages the loading state and the error state:
 *  - a skeleton loader is displayed until the information is ready from the backend
 *  - a dummy error message is displayed if the HTTP request fails
 */
var QuestionsComponent = /** @class */ (function () {
    function QuestionsComponent(questionsService) {
        this.questionsService = questionsService;
        /**
         * Observable object updated when fetching data from the backend fails.
         */
        this.error$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    QuestionsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.questions$ = this.questionsService.getQuestions().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) {
            // HTTP request failed
            Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error.message);
            _this.error$.next(true);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(undefined);
        }));
    };
    QuestionsComponent.ɵfac = function QuestionsComponent_Factory(t) { return new (t || QuestionsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_questions_service__WEBPACK_IMPORTED_MODULE_3__["QuestionsService"])); };
    QuestionsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: QuestionsComponent, selectors: [["app-questions"]], inputs: { title: "title" }, decls: 8, vars: 5, consts: [[1, "questions"], [1, "title"], [1, "separator"], [3, "questions", 4, "ngIf", "ngIfElse"], ["noDataTemplate", ""], [3, "questions"], ["class", "error", 4, "ngIf", "ngIfElse"], ["loading", ""], [1, "error"], [1, "loading"], ["count", "5"]], template: function QuestionsComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, QuestionsComponent_app_accordion_4_Template, 1, 1, "app-accordion", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "async");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, QuestionsComponent_ng_template_6_Template, 4, 4, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 3, ctx.questions$))("ngIfElse", _r1);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _accordion_accordion_component__WEBPACK_IMPORTED_MODULE_5__["AccordionComponent"], ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_6__["NgxSkeletonLoaderComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]], styles: ["app-questions[_nghost-%COMP%]   .questions[_ngcontent-%COMP%], app-questions   [_nghost-%COMP%]   .questions[_ngcontent-%COMP%] {\n  width: 100%;\n}\napp-questions[_nghost-%COMP%]   .questions[_ngcontent-%COMP%]   .separator[_ngcontent-%COMP%], app-questions   [_nghost-%COMP%]   .questions[_ngcontent-%COMP%]   .separator[_ngcontent-%COMP%] {\n  height: 20px;\n  background-color: rgba(0, 0, 0, 0.8);\n}\napp-questions[_nghost-%COMP%]   .questions[_ngcontent-%COMP%]   app-accordion[_ngcontent-%COMP%], app-questions   [_nghost-%COMP%]   .questions[_ngcontent-%COMP%]   app-accordion[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 20px;\n}\napp-questions[_nghost-%COMP%]   .questions[_ngcontent-%COMP%]   .error[_ngcontent-%COMP%], app-questions   [_nghost-%COMP%]   .questions[_ngcontent-%COMP%]   .error[_ngcontent-%COMP%], app-questions[_nghost-%COMP%]   .questions[_ngcontent-%COMP%]   .loading[_ngcontent-%COMP%], app-questions   [_nghost-%COMP%]   .questions[_ngcontent-%COMP%]   .loading[_ngcontent-%COMP%] {\n  padding: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcXVlc3Rpb25zL0M6XFxVc2Vyc1xcQmxvbmRhXFxEb2N1bWVudHNcXFdvcmtcXERpcmVjdExpbmVcXHF1ZXN0aW9ucy9zcmNcXGFwcFxccXVlc3Rpb25zXFxxdWVzdGlvbnMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3F1ZXN0aW9ucy9xdWVzdGlvbnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxXQUFBO0FDQUo7QURFSTtFQUNFLFlBQUE7RUFDQSxvQ0FBQTtBQ0FOO0FER0k7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7QUNETjtBRElJO0VBQ0UsYUFBQTtBQ0ZOIiwiZmlsZSI6InNyYy9hcHAvcXVlc3Rpb25zL3F1ZXN0aW9ucy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0LWNvbnRleHQoYXBwLXF1ZXN0aW9ucykge1xyXG4gIC5xdWVzdGlvbnMge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgLnNlcGFyYXRvciB7XHJcbiAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xyXG4gICAgfVxyXG5cclxuICAgIGFwcC1hY2NvcmRpb24ge1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIH1cclxuXHJcbiAgICAuZXJyb3IsIC5sb2FkaW5nIHtcclxuICAgICAgcGFkZGluZzogMzBweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiOmhvc3QtY29udGV4dChhcHAtcXVlc3Rpb25zKSAucXVlc3Rpb25zIHtcbiAgd2lkdGg6IDEwMCU7XG59XG46aG9zdC1jb250ZXh0KGFwcC1xdWVzdGlvbnMpIC5xdWVzdGlvbnMgLnNlcGFyYXRvciB7XG4gIGhlaWdodDogMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xufVxuOmhvc3QtY29udGV4dChhcHAtcXVlc3Rpb25zKSAucXVlc3Rpb25zIGFwcC1hY2NvcmRpb24ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cbjpob3N0LWNvbnRleHQoYXBwLXF1ZXN0aW9ucykgLnF1ZXN0aW9ucyAuZXJyb3IsIDpob3N0LWNvbnRleHQoYXBwLXF1ZXN0aW9ucykgLnF1ZXN0aW9ucyAubG9hZGluZyB7XG4gIHBhZGRpbmc6IDMwcHg7XG59Il19 */"] });
    return QuestionsComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](QuestionsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-questions',
                templateUrl: './questions.component.html',
                styleUrls: ['./questions.component.scss']
            }]
    }], function () { return [{ type: _questions_service__WEBPACK_IMPORTED_MODULE_3__["QuestionsService"] }]; }, { title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/questions/questions.service.ts":
/*!************************************************!*\
  !*** ./src/app/questions/questions.service.ts ***!
  \************************************************/
/*! exports provided: QuestionsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionsService", function() { return QuestionsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");



var QuestionsService = /** @class */ (function () {
    function QuestionsService(httpClient) {
        this.httpClient = httpClient;
        this.dataSourcePath = '../../assets/mocks/DataSource.json';
    }
    /**
     * Returns an Observable object with the data stored in assets/mocks/DataSource.json.
     */
    QuestionsService.prototype.getQuestions = function () {
        return this.httpClient.get(this.dataSourcePath);
    };
    QuestionsService.ɵfac = function QuestionsService_Factory(t) { return new (t || QuestionsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
    QuestionsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: QuestionsService, factory: QuestionsService.ɵfac, providedIn: 'root' });
    return QuestionsService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](QuestionsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Blonda\Documents\Work\DirectLine\questions\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map