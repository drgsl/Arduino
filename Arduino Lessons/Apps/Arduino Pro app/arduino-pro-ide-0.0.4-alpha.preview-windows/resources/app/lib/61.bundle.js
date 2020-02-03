(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[61],{

/***/ "./node_modules/arduino-ide-extension/lib/electron-browser/electron-arduino-menu-contribution.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/arduino-ide-extension/lib/electron-browser/electron-arduino-menu-contribution.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var electron_menu_contribution_1 = __webpack_require__(/*! @theia/core/lib/electron-browser/menu/electron-menu-contribution */ "./node_modules/@theia/core/lib/electron-browser/menu/electron-menu-contribution.js");
var ElectronArduinoMenuContribution = /** @class */ (function (_super) {
    __extends(ElectronArduinoMenuContribution, _super);
    function ElectronArduinoMenuContribution() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ElectronArduinoMenuContribution.prototype.hideTopPanel = function () {
        // NOOP
        // We reuse the `div` for the Arduino toolbar.
    };
    ElectronArduinoMenuContribution = __decorate([
        inversify_1.injectable()
    ], ElectronArduinoMenuContribution);
    return ElectronArduinoMenuContribution;
}(electron_menu_contribution_1.ElectronMenuContribution));
exports.ElectronArduinoMenuContribution = ElectronArduinoMenuContribution;


/***/ }),

/***/ "./node_modules/arduino-ide-extension/lib/electron-browser/electron-arduino-menu-module.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/arduino-ide-extension/lib/electron-browser/electron-arduino-menu-module.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var electron_menu_contribution_1 = __webpack_require__(/*! @theia/core/lib/electron-browser/menu/electron-menu-contribution */ "./node_modules/@theia/core/lib/electron-browser/menu/electron-menu-contribution.js");
var electron_arduino_menu_contribution_1 = __webpack_require__(/*! ./electron-arduino-menu-contribution */ "./node_modules/arduino-ide-extension/lib/electron-browser/electron-arduino-menu-contribution.js");
exports.default = new inversify_1.ContainerModule(function (bind, unbind, isBound, rebind) {
    bind(electron_arduino_menu_contribution_1.ElectronArduinoMenuContribution).toSelf().inSingletonScope();
    rebind(electron_menu_contribution_1.ElectronMenuContribution).to(electron_arduino_menu_contribution_1.ElectronArduinoMenuContribution);
});


/***/ })

}]);
//# sourceMappingURL=61.bundle.js.map