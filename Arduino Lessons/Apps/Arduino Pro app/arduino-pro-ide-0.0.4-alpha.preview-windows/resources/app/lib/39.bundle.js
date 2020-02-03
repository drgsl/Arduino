(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[39],{

/***/ "./node_modules/@theia/cpp/lib/browser/cpp-build-configurations-statusbar-element.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@theia/cpp/lib/browser/cpp-build-configurations-statusbar-element.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2018-2019 Ericsson
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v. 2.0 which is available at
 * http://www.eclipse.org/legal/epl-2.0.
 *
 * This Source Code may also be made available under the following Secondary
 * Licenses when the conditions for such availability set forth in the Eclipse
 * Public License v. 2.0 are satisfied: GNU General Public License, version 2
 * with the GNU Classpath Exception which is available at
 * https://www.gnu.org/software/classpath/license.html.
 *
 * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0
 ********************************************************************************/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "./node_modules/@theia/core/lib/browser/index.js");
var cpp_build_configurations_1 = __webpack_require__(/*! ./cpp-build-configurations */ "./node_modules/@theia/cpp/lib/browser/cpp-build-configurations.js");
var cpp_build_configurations_ui_1 = __webpack_require__(/*! ./cpp-build-configurations-ui */ "./node_modules/@theia/cpp/lib/browser/cpp-build-configurations-ui.js");
var browser_2 = __webpack_require__(/*! @theia/workspace/lib/browser */ "./node_modules/@theia/workspace/lib/browser/index.js");
var CppBuildConfigurationsStatusBarElement = /** @class */ (function () {
    function CppBuildConfigurationsStatusBarElement() {
        this.cppIdentifier = 'cpp-configurator';
    }
    /**
     * Display the `CppBuildConfiguration` status bar element,
     * and listen to changes to the active build configuration.
     */
    CppBuildConfigurationsStatusBarElement.prototype.show = function () {
        var _this = this;
        this.setCppBuildConfigElement(this.getValidActiveCount());
        this.cppManager.onActiveConfigChange2(function (configs) { return _this.setCppBuildConfigElement(configs.size); });
    };
    /**
     * Set the `CppBuildConfiguration` status bar element
     * used to create a new cpp build configuration and set the active build configuration.
     *
     * @param config the active `CppBuildConfiguration`.
     */
    CppBuildConfigurationsStatusBarElement.prototype.setCppBuildConfigElement = function (count) {
        this.statusBar.setElement(this.cppIdentifier, {
            text: "$(wrench) C/C++ Build Config (" + count + " of " + this.workspaceService.tryGetRoots().length + ")",
            tooltip: 'C/C++ Build Config',
            alignment: browser_1.StatusBarAlignment.RIGHT,
            command: cpp_build_configurations_ui_1.CPP_CHANGE_BUILD_CONFIGURATION.id,
            priority: 0.5,
        });
    };
    /**
     * Get the valid active configuration count.
     */
    CppBuildConfigurationsStatusBarElement.prototype.getValidActiveCount = function () {
        var items = [];
        if (this.cppManager.getAllActiveConfigs) {
            items = __spread(this.cppManager.getAllActiveConfigs().values()).filter(function (config) { return !!config; });
        }
        return items.length;
    };
    __decorate([
        inversify_1.inject(cpp_build_configurations_1.CppBuildConfigurationManager),
        __metadata("design:type", Object)
    ], CppBuildConfigurationsStatusBarElement.prototype, "cppManager", void 0);
    __decorate([
        inversify_1.inject(browser_1.StatusBar),
        __metadata("design:type", Object)
    ], CppBuildConfigurationsStatusBarElement.prototype, "statusBar", void 0);
    __decorate([
        inversify_1.inject(browser_2.WorkspaceService),
        __metadata("design:type", browser_2.WorkspaceService)
    ], CppBuildConfigurationsStatusBarElement.prototype, "workspaceService", void 0);
    CppBuildConfigurationsStatusBarElement = __decorate([
        inversify_1.injectable()
    ], CppBuildConfigurationsStatusBarElement);
    return CppBuildConfigurationsStatusBarElement;
}());
exports.CppBuildConfigurationsStatusBarElement = CppBuildConfigurationsStatusBarElement;


/***/ }),

/***/ "./node_modules/@theia/cpp/lib/browser/cpp-build-configurations-ui.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@theia/cpp/lib/browser/cpp-build-configurations-ui.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2018 Ericsson and others.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v. 2.0 which is available at
 * http://www.eclipse.org/legal/epl-2.0.
 *
 * This Source Code may also be made available under the following Secondary
 * Licenses when the conditions for such availability set forth in the Eclipse
 * Public License v. 2.0 are satisfied: GNU General Public License, version 2
 * with the GNU Classpath Exception which is available at
 * https://www.gnu.org/software/classpath/license.html.
 *
 * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0
 ********************************************************************************/
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
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
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
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @theia/core */ "./node_modules/@theia/core/lib/common/index.js");
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var quick_open_service_1 = __webpack_require__(/*! @theia/core/lib/browser/quick-open/quick-open-service */ "./node_modules/@theia/core/lib/browser/quick-open/quick-open-service.js");
var common_1 = __webpack_require__(/*! @theia/filesystem/lib/common */ "./node_modules/@theia/filesystem/lib/common/index.js");
var uri_1 = __webpack_require__(/*! @theia/core/lib/common/uri */ "./node_modules/@theia/core/lib/common/uri.js");
var browser_1 = __webpack_require__(/*! @theia/preferences/lib/browser */ "./node_modules/@theia/preferences/lib/browser/index.js");
var cpp_build_configurations_1 = __webpack_require__(/*! ./cpp-build-configurations */ "./node_modules/@theia/cpp/lib/browser/cpp-build-configurations.js");
var browser_2 = __webpack_require__(/*! @theia/editor/lib/browser */ "./node_modules/@theia/editor/lib/browser/index.js");
var browser_3 = __webpack_require__(/*! @theia/core/lib/browser */ "./node_modules/@theia/core/lib/browser/index.js");
var quick_pick_service_1 = __webpack_require__(/*! @theia/core/lib/common/quick-pick-service */ "./node_modules/@theia/core/lib/common/quick-pick-service.js");
var browser_4 = __webpack_require__(/*! @theia/workspace/lib/browser */ "./node_modules/@theia/workspace/lib/browser/index.js");
var CppBuildConfigurationChanger = /** @class */ (function () {
    function CppBuildConfigurationChanger() {
        /**
         * Item used to trigger creation of a new build configuration.
         */
        this.createItem = ({
            label: 'Create New',
            value: 'createNew',
            description: 'Create a new build configuration',
            iconClass: 'fa fa-plus'
        });
        /**
         * Item used to trigger reset of the active build configuration.
         */
        this.resetItem = ({
            label: 'None',
            value: 'reset',
            description: 'Reset the active build configuration',
            iconClass: 'fa fa-times'
        });
    }
    /**
     * Change the build configuration for a given root.
     * If multiple roots are available, prompt users a first time to select their desired root.
     * Once a root is determined, prompt users to select an active build configuration if applicable.
     */
    CppBuildConfigurationChanger.prototype.change = function () {
        return __awaiter(this, void 0, void 0, function () {
            var root, action;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.selectWorkspaceRoot()];
                    case 1:
                        root = _a.sent();
                        if (!root) {
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.selectCppAction(root)];
                    case 2:
                        action = _a.sent();
                        if (!action) {
                            return [2 /*return*/];
                        }
                        // Perform desired action.
                        if (action === 'createNew') {
                            this.commandService.executeCommand(exports.CPP_CREATE_NEW_BUILD_CONFIGURATION.id);
                        }
                        if (action === 'reset') {
                            this.cppBuildConfigurations.setActiveConfig(undefined, root);
                        }
                        if (action && cpp_build_configurations_1.isCppBuildConfiguration(action)) {
                            this.cppBuildConfigurations.setActiveConfig(action, root);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Pick a workspace root using the quick open menu.
     */
    CppBuildConfigurationChanger.prototype.selectWorkspaceRoot = function () {
        return __awaiter(this, void 0, void 0, function () {
            var roots;
            var _this = this;
            return __generator(this, function (_a) {
                roots = this.workspaceService.tryGetRoots();
                return [2 /*return*/, this.quickPick.show(roots.map(function (_a) {
                        var root = _a.uri;
                        var active = _this.cppBuildConfigurations.getActiveConfig(root);
                        return {
                            // See: WorkspaceUriLabelProviderContribution
                            // It will transform the path to a prettier display (adding a ~, etc).
                            label: _this.labelProvider.getName(new uri_1.default(root).withScheme('file')),
                            description: active ? active.name : 'undefined',
                            value: root,
                        };
                    }), { placeholder: 'Select workspace root' })];
            });
        });
    };
    /**
     * Lists the different options for a given root if specified, first else.
     * In this case, the options are to set/unset/create a build configuration.
     *
     * @param root the workspace root.
     */
    CppBuildConfigurationChanger.prototype.selectCppAction = function (root) {
        return __awaiter(this, void 0, void 0, function () {
            var items, configs, active;
            return __generator(this, function (_a) {
                items = [];
                // Add the 'Create New' item at all times.
                items.push(this.createItem);
                // Add the 'Reset' item if there currently is an active config.
                if (this.cppBuildConfigurations.getActiveConfig(root)) {
                    items.push(this.resetItem);
                }
                configs = this.cppBuildConfigurations.getValidConfigs(root);
                active = this.cppBuildConfigurations.getActiveConfig(root);
                configs.map(function (config) {
                    items.push({
                        label: config.name,
                        description: config.directory,
                        iconClass: active && cpp_build_configurations_1.equals(config, active) ? 'fa fa-check' : 'fa fa-empty-item',
                        value: {
                            name: config.name,
                            directory: config.directory,
                            commands: config.commands
                        },
                    });
                });
                return [2 /*return*/, this.quickPick.show(items, { placeholder: 'Select action' })];
            });
        });
    };
    /** Create a new build configuration with placeholder values.  */
    CppBuildConfigurationChanger.prototype.createConfig = function () {
        return __awaiter(this, void 0, void 0, function () {
            var configs;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.commandService.executeCommand(browser_3.CommonCommands.OPEN_PREFERENCES.id, browser_1.PreferenceScope.Workspace);
                        configs = this.cppBuildConfigurations.getConfigs().slice(0);
                        configs.push({ name: '', directory: '' });
                        return [4 /*yield*/, this.preferenceService.set(cpp_build_configurations_1.CPP_BUILD_CONFIGURATIONS_PREFERENCE_KEY, configs, browser_1.PreferenceScope.Workspace)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        inversify_1.inject(core_1.CommandService),
        __metadata("design:type", Object)
    ], CppBuildConfigurationChanger.prototype, "commandService", void 0);
    __decorate([
        inversify_1.inject(cpp_build_configurations_1.CppBuildConfigurationManager),
        __metadata("design:type", Object)
    ], CppBuildConfigurationChanger.prototype, "cppBuildConfigurations", void 0);
    __decorate([
        inversify_1.inject(browser_2.EditorManager),
        __metadata("design:type", browser_2.EditorManager)
    ], CppBuildConfigurationChanger.prototype, "editorManager", void 0);
    __decorate([
        inversify_1.inject(common_1.FileSystem),
        __metadata("design:type", Object)
    ], CppBuildConfigurationChanger.prototype, "fileSystem", void 0);
    __decorate([
        inversify_1.inject(browser_3.LabelProvider),
        __metadata("design:type", browser_3.LabelProvider)
    ], CppBuildConfigurationChanger.prototype, "labelProvider", void 0);
    __decorate([
        inversify_1.inject(quick_pick_service_1.QuickPickService),
        __metadata("design:type", Object)
    ], CppBuildConfigurationChanger.prototype, "quickPick", void 0);
    __decorate([
        inversify_1.inject(quick_open_service_1.QuickOpenService),
        __metadata("design:type", quick_open_service_1.QuickOpenService)
    ], CppBuildConfigurationChanger.prototype, "quickOpenService", void 0);
    __decorate([
        inversify_1.inject(browser_1.PreferenceService),
        __metadata("design:type", Object)
    ], CppBuildConfigurationChanger.prototype, "preferenceService", void 0);
    __decorate([
        inversify_1.inject(browser_4.WorkspaceService),
        __metadata("design:type", browser_4.WorkspaceService)
    ], CppBuildConfigurationChanger.prototype, "workspaceService", void 0);
    CppBuildConfigurationChanger = __decorate([
        inversify_1.injectable()
    ], CppBuildConfigurationChanger);
    return CppBuildConfigurationChanger;
}());
exports.CppBuildConfigurationChanger = CppBuildConfigurationChanger;
exports.CPP_CATEGORY = 'C/C++';
/**
 * Reset active build configuration if applicable.
 * Set active build configuration to `None`.
 */
exports.CPP_RESET_BUILD_CONFIGURATION = {
    id: 'cpp.resetBuildConfiguration',
    category: exports.CPP_CATEGORY,
    label: 'Reset Build Configuration'
};
/**
 * Create a new build configuration, and trigger opening the preferences widget.
 */
exports.CPP_CREATE_NEW_BUILD_CONFIGURATION = {
    id: 'cpp.createNewBuildConfiguration',
    category: exports.CPP_CATEGORY,
    label: 'Create New Build Configuration'
};
/**
 * Open the quick open menu to let the user change the active build configuration.
 */
exports.CPP_CHANGE_BUILD_CONFIGURATION = {
    id: 'cpp.change-build-configuration',
    category: exports.CPP_CATEGORY,
    label: 'Change Build Configuration'
};
var CppBuildConfigurationsContributions = /** @class */ (function () {
    function CppBuildConfigurationsContributions() {
    }
    /**
     * Register build configurations commands for C/C++.
     * Available commands include:
     * - Resetting C/C++ build configurations.
     * - Creating new C/C++ build configurations.
     * - Updating C/C++ build configurations.
     * @param commands the command registry.
     */
    CppBuildConfigurationsContributions.prototype.registerCommands = function (commands) {
        var _this = this;
        commands.registerCommand(exports.CPP_RESET_BUILD_CONFIGURATION, {
            isEnabled: function () { return !!_this.cppManager.getActiveConfig(); },
            isVisible: function () { return !!_this.cppManager.getActiveConfig(); },
            execute: function () { return _this.cppManager.setActiveConfig(undefined); }
        });
        commands.registerCommand(exports.CPP_CREATE_NEW_BUILD_CONFIGURATION, {
            execute: function () { return _this.cppChangeBuildConfiguration.createConfig(); }
        });
        commands.registerCommand(exports.CPP_CHANGE_BUILD_CONFIGURATION, {
            execute: function () { return _this.cppChangeBuildConfiguration.change(); }
        });
    };
    __decorate([
        inversify_1.inject(CppBuildConfigurationChanger),
        __metadata("design:type", CppBuildConfigurationChanger)
    ], CppBuildConfigurationsContributions.prototype, "cppChangeBuildConfiguration", void 0);
    __decorate([
        inversify_1.inject(cpp_build_configurations_1.CppBuildConfigurationManager),
        __metadata("design:type", Object)
    ], CppBuildConfigurationsContributions.prototype, "cppManager", void 0);
    CppBuildConfigurationsContributions = __decorate([
        inversify_1.injectable()
    ], CppBuildConfigurationsContributions);
    return CppBuildConfigurationsContributions;
}());
exports.CppBuildConfigurationsContributions = CppBuildConfigurationsContributions;


/***/ }),

/***/ "./node_modules/@theia/cpp/lib/browser/cpp-build-configurations.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@theia/cpp/lib/browser/cpp-build-configurations.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2018-2019 Ericsson and others.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v. 2.0 which is available at
 * http://www.eclipse.org/legal/epl-2.0.
 *
 * This Source Code may also be made available under the following Secondary
 * Licenses when the conditions for such availability set forth in the Eclipse
 * Public License v. 2.0 are satisfied: GNU General Public License, version 2
 * with the GNU Classpath Exception which is available at
 * https://www.gnu.org/software/classpath/license.html.
 *
 * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0
 ********************************************************************************/
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
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
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
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
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
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var core_1 = __webpack_require__(/*! @theia/core */ "./node_modules/@theia/core/lib/common/index.js");
var cpp_preferences_1 = __webpack_require__(/*! ./cpp-preferences */ "./node_modules/@theia/cpp/lib/browser/cpp-preferences.js");
var storage_service_1 = __webpack_require__(/*! @theia/core/lib/browser/storage-service */ "./node_modules/@theia/core/lib/browser/storage-service.js");
var browser_1 = __webpack_require__(/*! @theia/workspace/lib/browser */ "./node_modules/@theia/workspace/lib/browser/index.js");
var cpp_build_configuration_protocol_1 = __webpack_require__(/*! ../common/cpp-build-configuration-protocol */ "./node_modules/@theia/cpp/lib/common/cpp-build-configuration-protocol.js");
var browser_2 = __webpack_require__(/*! @theia/variable-resolver/lib/browser */ "./node_modules/@theia/variable-resolver/lib/browser/index.js");
var uri_1 = __webpack_require__(/*! @theia/core/lib/common/uri */ "./node_modules/@theia/core/lib/common/uri.js");
var core_2 = __webpack_require__(/*! @theia/core */ "./node_modules/@theia/core/lib/common/index.js");
/**
 * Determine if the argument is a C/C++ build configuration.
 *
 * @returns `true` if the argument is a C/C++ build configuration.
 */
// tslint:disable-next-line:no-any
function isCppBuildConfiguration(arg) {
    return arg.name !== undefined && arg.directory !== undefined;
}
exports.isCppBuildConfiguration = isCppBuildConfiguration;
/**
 * Determine if two C/C++ build configurations are equal.
 * @param a the first C/C++ build configuration.
 * @param b the second C/C++ build configuration.
 *
 * @returns `true` if both `a` and `b` are equal.
 */
function equals(a, b) {
    return (a.name === b.name &&
        a.directory === b.directory &&
        a.commands === b.commands);
}
exports.equals = equals;
/**
 * Representation of all saved build configurations per workspace root in local storage.
 */
var SavedActiveBuildConfigurations = /** @class */ (function () {
    function SavedActiveBuildConfigurations() {
    }
    return SavedActiveBuildConfigurations;
}());
exports.CppBuildConfigurationManager = Symbol('CppBuildConfigurationManager');
exports.CPP_BUILD_CONFIGURATIONS_PREFERENCE_KEY = 'cpp.buildConfigurations';
/**
 * Entry point to get the list of build configurations and get/set the active
 * build configuration.
 */
var CppBuildConfigurationManagerImpl = /** @class */ (function () {
    function CppBuildConfigurationManagerImpl() {
        /**
         * Resolved configurations, coming from the preferences.
         */
        this.resolvedConfigurations = new Map();
        /**
         * The current active build configurations map.
         */
        this.activeConfigurations = new Map();
        /**
         * @deprecated use `activeConfigChange2Emitter` instead.
         *
         * Emitter for when the active build configuration changes.
         */
        this.activeConfigChangeEmitter = new core_1.Emitter();
        /**
         * Emitter for when an active build configuration changes.
         */
        this.activeConfigChange2Emitter = new core_1.Emitter();
        /**
         * Persistent storage key for the active build configurations map.
         */
        this.ACTIVE_BUILD_CONFIGURATIONS_MAP_STORAGE_KEY = 'cpp.active-build-configurations-map';
    }
    /**
     * Initialize the manager.
     */
    CppBuildConfigurationManagerImpl.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                // Try to read the active build config from local storage.
                this.ready = new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
                    var loadActiveConfigurations;
                    var _this = this;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                loadActiveConfigurations = this.loadActiveConfigs();
                                return [4 /*yield*/, this.cppPreferences.ready];
                            case 1:
                                _a.sent();
                                return [4 /*yield*/, Promise.all([
                                        this.handlePreferencesUpdate(),
                                        loadActiveConfigurations,
                                    ])];
                            case 2:
                                _a.sent();
                                this.cppPreferences.onPreferenceChanged(function () { return _this.handlePreferencesUpdate(); });
                                resolve();
                                return [2 /*return*/];
                        }
                    });
                }); });
                return [2 /*return*/];
            });
        });
    };
    /**
     * Get the C/C++ build configuration from the preferences.
     * @param root the optional workspace root.
     *
     * @returns an array of build configurations.
     */
    CppBuildConfigurationManagerImpl.prototype.getConfigsFromPreferences = function (root) {
        if (root) {
            return Array.from(this.cppPreferences.get(exports.CPP_BUILD_CONFIGURATIONS_PREFERENCE_KEY, [], root));
        }
        return Array.from(this.cppPreferences[exports.CPP_BUILD_CONFIGURATIONS_PREFERENCE_KEY] || []);
    };
    /**
     * Load the active build configuration from persistent storage.
     */
    CppBuildConfigurationManagerImpl.prototype.loadActiveConfigs = function () {
        return __awaiter(this, void 0, void 0, function () {
            var savedConfig;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storageService.getData(this.ACTIVE_BUILD_CONFIGURATIONS_MAP_STORAGE_KEY)];
                    case 1:
                        savedConfig = _a.sent();
                        if (savedConfig !== undefined) {
                            // read from local storage and update the map.
                            this.activeConfigurations = new Map(savedConfig.configs);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Save the active build configuration to persistent storage.
     *
     * @param config the active `CppBuildConfiguration`.
     */
    CppBuildConfigurationManagerImpl.prototype.saveActiveConfigs = function (configs) {
        this.storageService.setData(this.ACTIVE_BUILD_CONFIGURATIONS_MAP_STORAGE_KEY, { configs: __spread(configs.entries()) });
    };
    /**
     * Update the active build configuration if applicable.
     */
    CppBuildConfigurationManagerImpl.prototype.handlePreferencesUpdate = function () {
        return __awaiter(this, void 0, void 0, function () {
            var roots, _loop_1, this_1, _a, _b, _c, root, active;
            var e_1, _d;
            var _this = this;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        roots = this.workspaceService.tryGetRoots();
                        // Resolve variables for all configurations.
                        return [4 /*yield*/, Promise.all(roots.map(function (_a) {
                                var root = _a.uri;
                                return __awaiter(_this, void 0, void 0, function () {
                                    var context, configs, resolvedConfigs;
                                    var _this = this;
                                    return __generator(this, function (_b) {
                                        switch (_b.label) {
                                            case 0:
                                                context = new uri_1.default(root);
                                                configs = this.getConfigsFromPreferences(root);
                                                resolvedConfigs = configs.map(function (config) { return core_2.deepClone(config); });
                                                return [4 /*yield*/, Promise.all(resolvedConfigs.map(function (config) { return __awaiter(_this, void 0, void 0, function () {
                                                        var _this = this;
                                                        return __generator(this, function (_a) {
                                                            return [2 /*return*/, Promise.all([
                                                                    this.variableResolver.resolve(config.directory, { context: context })
                                                                        .then(function (resolved) { return config.directory = resolved; }),
                                                                    config.commands && Promise.all(Object.keys(config.commands)
                                                                        .map(function (command) { return _this.variableResolver.resolve(config.commands[command], { context: context })
                                                                        .then(function (resolved) { return config.commands[command] = resolved; }); })),
                                                                ])];
                                                        });
                                                    }); }))];
                                            case 1:
                                                _b.sent();
                                                this.resolvedConfigurations.set(root, resolvedConfigs);
                                                return [2 /*return*/];
                                        }
                                    });
                                });
                            }))];
                    case 1:
                        // Resolve variables for all configurations.
                        _e.sent();
                        _loop_1 = function (root, active) {
                            if (!active) {
                                return "continue";
                            }
                            var configs = this_1.getValidConfigs(root);
                            var stillExists = configs.some(function (config) { return _this.equals(config, active); });
                            if (!stillExists) {
                                this_1.setActiveConfig(undefined, root);
                            }
                        };
                        this_1 = this;
                        try {
                            // Look for missing active configurations.
                            for (_a = __values(this.activeConfigurations.entries()), _b = _a.next(); !_b.done; _b = _a.next()) {
                                _c = __read(_b.value, 2), root = _c[0], active = _c[1];
                                _loop_1(root, active);
                            }
                        }
                        catch (e_1_1) { e_1 = { error: e_1_1 }; }
                        finally {
                            try {
                                if (_b && !_b.done && (_d = _a.return)) _d.call(_a);
                            }
                            finally { if (e_1) throw e_1.error; }
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Determine if two `CppBuildConfiguration` are equal.
     *
     * @param a `CppBuildConfiguration`.
     * @param b `CppBuildConfiguration`.
     */
    CppBuildConfigurationManagerImpl.prototype.equals = function (a, b) {
        return a.name === b.name && a.directory === b.directory;
    };
    /**
     * Get the active build configuration.
     * @param root the optional workspace root.
     *
     * @returns the active build configuration if it exists, else `undefined`.
     */
    CppBuildConfigurationManagerImpl.prototype.getActiveConfig = function (root) {
        // Get the active workspace root for the given uri, else for the first workspace root.
        var workspaceRoot = this.getRoot(root);
        if (!workspaceRoot) {
            return undefined;
        }
        return this.activeConfigurations.get(workspaceRoot);
    };
    /**
     * Get all active build configurations.
     * - If for a given root the build configuration is `undefined`, the root does not contain
     * an active build configuration.
     *
     * @returns the map of all active configurations if available, for each workspace root.
     */
    CppBuildConfigurationManagerImpl.prototype.getAllActiveConfigs = function () {
        return this.activeConfigurations;
    };
    /**
     * Set the active build configuration.
     * @param config the build configuration to be set. If `undefined` there will be no active configuration.
     * @param root the optional workspace root. If unprovided, fallback to the first workspace root if available.
     */
    CppBuildConfigurationManagerImpl.prototype.setActiveConfig = function (config, root) {
        var e_2, _a;
        // Set the active workspace root for the given uri, else for the first workspace root.
        var workspaceRoot = this.getRoot(root);
        if (!workspaceRoot) {
            return;
        }
        this.activeConfigurations.set(workspaceRoot, config);
        this.saveActiveConfigs(this.activeConfigurations);
        var activeConfigurations = new Map();
        try {
            for (var _b = __values(this.getAllActiveConfigs()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var _d = __read(_c.value, 2), source = _d[0], cppConfig = _d[1];
                if (typeof cppConfig !== 'undefined') {
                    activeConfigurations.set(source, cppConfig);
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
        this.activeConfigChange2Emitter.fire(activeConfigurations);
        this.activeConfigChangeEmitter.fire(config);
    };
    Object.defineProperty(CppBuildConfigurationManagerImpl.prototype, "onActiveConfigChange", {
        get: function () {
            return this.activeConfigChangeEmitter.event;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CppBuildConfigurationManagerImpl.prototype, "onActiveConfigChange2", {
        get: function () {
            return this.activeConfigChange2Emitter.event;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Get all build configurations.
     * @param root the optional workspace root.
     *
     * @returns an array of build configurations.
     */
    CppBuildConfigurationManagerImpl.prototype.getConfigs = function (root) {
        var workspaceRoot = this.getRoot(root);
        if (!workspaceRoot) {
            return [];
        }
        var configs = this.resolvedConfigurations.get(workspaceRoot);
        if (!configs) {
            this.resolvedConfigurations.set(workspaceRoot, configs = []);
        }
        return configs;
    };
    /**
     * Get all valid build configurations.
     * @param root the optional workspace root.
     *
     * @returns an array of build configurations.
     */
    CppBuildConfigurationManagerImpl.prototype.getValidConfigs = function (root) {
        return this.getConfigs(root)
            .filter(function (a) { return a.name !== '' && a.directory !== ''; })
            .sort(function (a, b) { return (a.name.localeCompare(b.name)); });
    };
    /**
     * Get the merged compilation database.
     */
    CppBuildConfigurationManagerImpl.prototype.getMergedCompilationDatabase = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                // TODO: Optimize by caching the merge result, based on the `CppBuildConfiguration.directory` field?
                return [2 /*return*/, this.buildConfigurationServer.getMergedCompilationDatabase(params)];
            });
        });
    };
    /**
     * Get the root directory.
     * @param root the optional workspace root.
     *
     * @returns the root directory if it is present, else `undefined`.
     */
    CppBuildConfigurationManagerImpl.prototype.getRoot = function (root) {
        if (root) {
            return root;
        }
        var roots = this.workspaceService.tryGetRoots();
        if (roots.length > 0) {
            return roots[0].uri;
        }
        return undefined;
    };
    __decorate([
        inversify_1.inject(cpp_preferences_1.CppPreferences),
        __metadata("design:type", Object)
    ], CppBuildConfigurationManagerImpl.prototype, "cppPreferences", void 0);
    __decorate([
        inversify_1.inject(storage_service_1.StorageService),
        __metadata("design:type", Object)
    ], CppBuildConfigurationManagerImpl.prototype, "storageService", void 0);
    __decorate([
        inversify_1.inject(browser_1.WorkspaceService),
        __metadata("design:type", browser_1.WorkspaceService)
    ], CppBuildConfigurationManagerImpl.prototype, "workspaceService", void 0);
    __decorate([
        inversify_1.inject(browser_2.VariableResolverService),
        __metadata("design:type", browser_2.VariableResolverService)
    ], CppBuildConfigurationManagerImpl.prototype, "variableResolver", void 0);
    __decorate([
        inversify_1.inject(cpp_build_configuration_protocol_1.CppBuildConfigurationServer),
        __metadata("design:type", Object)
    ], CppBuildConfigurationManagerImpl.prototype, "buildConfigurationServer", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], CppBuildConfigurationManagerImpl.prototype, "init", null);
    CppBuildConfigurationManagerImpl = __decorate([
        inversify_1.injectable()
    ], CppBuildConfigurationManagerImpl);
    return CppBuildConfigurationManagerImpl;
}());
exports.CppBuildConfigurationManagerImpl = CppBuildConfigurationManagerImpl;


/***/ }),

/***/ "./node_modules/@theia/cpp/lib/browser/cpp-commands.js":
/*!*************************************************************!*\
  !*** ./node_modules/@theia/cpp/lib/browser/cpp-commands.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2017 TypeFox and others.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v. 2.0 which is available at
 * http://www.eclipse.org/legal/epl-2.0.
 *
 * This Source Code may also be made available under the following Secondary
 * Licenses when the conditions for such availability set forth in the Eclipse
 * Public License v. 2.0 are satisfied: GNU General Public License, version 2
 * with the GNU Classpath Exception which is available at
 * https://www.gnu.org/software/classpath/license.html.
 *
 * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0
 ********************************************************************************/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
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
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
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
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var common_1 = __webpack_require__(/*! @theia/core/lib/common */ "./node_modules/@theia/core/lib/common/index.js");
var uri_1 = __webpack_require__(/*! @theia/core/lib/common/uri */ "./node_modules/@theia/core/lib/common/uri.js");
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "./node_modules/@theia/core/lib/browser/index.js");
var cpp_language_client_contribution_1 = __webpack_require__(/*! ./cpp-language-client-contribution */ "./node_modules/@theia/cpp/lib/browser/cpp-language-client-contribution.js");
var cpp_protocol_1 = __webpack_require__(/*! ./cpp-protocol */ "./node_modules/@theia/cpp/lib/browser/cpp-protocol.js");
var browser_2 = __webpack_require__(/*! @theia/languages/lib/browser */ "./node_modules/@theia/languages/lib/browser/index.js");
var browser_3 = __webpack_require__(/*! @theia/editor/lib/browser */ "./node_modules/@theia/editor/lib/browser/index.js");
var common_2 = __webpack_require__(/*! ../common */ "./node_modules/@theia/cpp/lib/common/index.js");
var vscode_languageserver_protocol_1 = __webpack_require__(/*! vscode-languageserver-protocol */ "./node_modules/vscode-languageserver-protocol/lib/main.js");
var cpp_preferences_1 = __webpack_require__(/*! ./cpp-preferences */ "./node_modules/@theia/cpp/lib/browser/cpp-preferences.js");
/**
 * The C/C++ command category.
 */
var CPP_CATEGORY = 'C/C++';
/**
 * Command to switch between source/header files.
 */
exports.SWITCH_SOURCE_HEADER = {
    id: 'switch_source_header',
    category: CPP_CATEGORY,
    label: 'Switch Between Source/Header File',
};
/**
 * Command that is used to show the references from a CodeLens.
 */
exports.SHOW_CLANGD_REFERENCES = {
    id: 'clangd.references'
};
/**
 * Command to dump file inclusions.
 */
exports.DUMP_INCLUSIONS = {
    id: 'clangd.dumpinclusions',
    category: CPP_CATEGORY,
    label: 'Dump File Inclusions (Debug)',
};
/**
 * Command to dump files included the active file.
 */
exports.DUMP_INCLUDED_BY = {
    id: 'clangd.dumpincludedby',
    category: CPP_CATEGORY,
    label: 'Dump Files Including this File (Debug)',
};
/**
 * Command to re-index the workspace.
 */
exports.REINDEX = {
    id: 'clangd.reindex',
    category: CPP_CATEGORY,
    label: 'Reindex Workspace (Debug)',
};
/**
 * Command to print index statistics.
 */
exports.PRINT_STATS = {
    id: 'clangd.printstats',
    category: CPP_CATEGORY,
    label: 'Print Index Statistics (Debug)',
};
/**
 * Command to open the file path.
 * @param path the file path.
 */
exports.FILE_OPEN_PATH = function (path) { return ({
    id: 'file:openPath'
}); };
/**
 * Determine if a C/C++ file is currently active (opened).
 * @param editorManager the editor manager if it is defined.
 *
 * @returns `true` if the current active editor is a C/C++ file.
 */
function editorContainsCppFiles(editorManager) {
    if (editorManager && editorManager.activeEditor) {
        var uri_2 = editorManager.activeEditor.editor.document.uri;
        return common_2.HEADER_AND_SOURCE_FILE_EXTENSIONS.some(function (value) { return uri_2.endsWith('.' + value); });
    }
    return false;
}
exports.editorContainsCppFiles = editorContainsCppFiles;
var CppCommandContribution = /** @class */ (function () {
    function CppCommandContribution(clientContribution, openerService, editorService, selectionService) {
        this.clientContribution = clientContribution;
        this.openerService = openerService;
        this.editorService = editorService;
        this.selectionService = selectionService;
    }
    /**
     * Register commands for C/C++.
     * @param commands the command registry.
     */
    CppCommandContribution.prototype.registerCommands = function (commands) {
        var _this = this;
        commands.registerCommand(exports.SWITCH_SOURCE_HEADER, {
            isEnabled: function () { return editorContainsCppFiles(_this.editorService); },
            execute: function () { return _this.switchSourceHeader(); }
        });
        commands.registerCommand(exports.SHOW_CLANGD_REFERENCES, {
            execute: function (doc, pos, locs) {
                return commands.executeCommand(browser_3.EditorCommands.SHOW_REFERENCES.id, doc.uri, pos, locs);
            }
        });
        commands.registerCommand(exports.REINDEX, {
            isEnabled: function () { return _this.cppPreferences['cpp.experimentalCommands']; },
            execute: function () { return _this.reindex(); }
        });
        commands.registerCommand(exports.DUMP_INCLUSIONS, {
            isEnabled: function () { return _this.cppPreferences['cpp.experimentalCommands'] && editorContainsCppFiles(_this.editorService); },
            execute: function () { return _this.dumpInclusions(); }
        });
        commands.registerCommand(exports.DUMP_INCLUDED_BY, {
            isEnabled: function () { return _this.cppPreferences['cpp.experimentalCommands'] && editorContainsCppFiles(_this.editorService); },
            execute: function () { return _this.dumpIncludedBy(); }
        });
        commands.registerCommand(exports.PRINT_STATS, {
            isEnabled: function () { return _this.cppPreferences['cpp.experimentalCommands']; },
            execute: function () { return _this.printStats(); }
        });
    };
    /**
     * Actually switch the source header.
     */
    CppCommandContribution.prototype.switchSourceHeader = function () {
        return __awaiter(this, void 0, void 0, function () {
            var uri, docIdentifier, languageClient, sourceUri;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uri = common_1.UriSelection.getUri(this.selectionService.selection);
                        if (!uri) {
                            return [2 /*return*/];
                        }
                        docIdentifier = browser_2.TextDocumentIdentifier.create(uri.toString());
                        return [4 /*yield*/, this.clientContribution.languageClient];
                    case 1:
                        languageClient = _a.sent();
                        return [4 /*yield*/, languageClient.sendRequest(cpp_protocol_1.SwitchSourceHeaderRequest.type, docIdentifier)];
                    case 2:
                        sourceUri = _a.sent();
                        if (sourceUri !== undefined) {
                            browser_1.open(this.openerService, new uri_1.default(sourceUri.toString()));
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Actually dump file inclusions.
     */
    CppCommandContribution.prototype.dumpInclusions = function () {
        return __awaiter(this, void 0, void 0, function () {
            var uri, docIdentifier, params, languageClient;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uri = common_1.UriSelection.getUri(this.selectionService.selection);
                        if (!uri) {
                            return [2 /*return*/];
                        }
                        docIdentifier = browser_2.TextDocumentIdentifier.create(uri.toString());
                        params = { command: exports.DUMP_INCLUSIONS.id, arguments: [docIdentifier] };
                        return [4 /*yield*/, this.clientContribution.languageClient];
                    case 1:
                        languageClient = _a.sent();
                        languageClient.sendRequest(vscode_languageserver_protocol_1.ExecuteCommandRequest.type, params);
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Actually dump files including the active file.
     */
    CppCommandContribution.prototype.dumpIncludedBy = function () {
        return __awaiter(this, void 0, void 0, function () {
            var uri, docIdentifier, params, languageClient;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uri = common_1.UriSelection.getUri(this.selectionService.selection);
                        if (!uri) {
                            return [2 /*return*/];
                        }
                        docIdentifier = browser_2.TextDocumentIdentifier.create(uri.toString());
                        params = { command: exports.DUMP_INCLUDED_BY.id, arguments: [docIdentifier] };
                        return [4 /*yield*/, this.clientContribution.languageClient];
                    case 1:
                        languageClient = _a.sent();
                        languageClient.sendRequest(vscode_languageserver_protocol_1.ExecuteCommandRequest.type, params);
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Actually perform re-index.
     */
    CppCommandContribution.prototype.reindex = function () {
        return __awaiter(this, void 0, void 0, function () {
            var params, languageClient;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = { command: exports.REINDEX.id };
                        return [4 /*yield*/, this.clientContribution.languageClient];
                    case 1:
                        languageClient = _a.sent();
                        languageClient.sendRequest(vscode_languageserver_protocol_1.ExecuteCommandRequest.type, params);
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Actually perform print stats.
     */
    CppCommandContribution.prototype.printStats = function () {
        return __awaiter(this, void 0, void 0, function () {
            var params, languageClient;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = { command: exports.PRINT_STATS.id };
                        return [4 /*yield*/, this.clientContribution.languageClient];
                    case 1:
                        languageClient = _a.sent();
                        languageClient.sendRequest(vscode_languageserver_protocol_1.ExecuteCommandRequest.type, params);
                        return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        inversify_1.inject(cpp_preferences_1.CppPreferences),
        __metadata("design:type", Object)
    ], CppCommandContribution.prototype, "cppPreferences", void 0);
    CppCommandContribution = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(cpp_language_client_contribution_1.CppLanguageClientContribution)),
        __param(1, inversify_1.inject(browser_1.OpenerService)),
        __param(2, inversify_1.inject(browser_3.EditorManager)),
        __metadata("design:paramtypes", [cpp_language_client_contribution_1.CppLanguageClientContribution, Object, browser_3.EditorManager,
            common_1.SelectionService])
    ], CppCommandContribution);
    return CppCommandContribution;
}());
exports.CppCommandContribution = CppCommandContribution;


/***/ }),

/***/ "./node_modules/@theia/cpp/lib/browser/cpp-frontend-module.js":
/*!********************************************************************!*\
  !*** ./node_modules/@theia/cpp/lib/browser/cpp-frontend-module.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2017 TypeFox and others.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v. 2.0 which is available at
 * http://www.eclipse.org/legal/epl-2.0.
 *
 * This Source Code may also be made available under the following Secondary
 * Licenses when the conditions for such availability set forth in the Eclipse
 * Public License v. 2.0 are satisfied: GNU General Public License, version 2
 * with the GNU Classpath Exception which is available at
 * https://www.gnu.org/software/classpath/license.html.
 *
 * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0
 ********************************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var common_1 = __webpack_require__(/*! @theia/core/lib/common */ "./node_modules/@theia/core/lib/common/index.js");
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "./node_modules/@theia/core/lib/browser/index.js");
var cpp_commands_1 = __webpack_require__(/*! ./cpp-commands */ "./node_modules/@theia/cpp/lib/browser/cpp-commands.js");
var browser_2 = __webpack_require__(/*! @theia/languages/lib/browser */ "./node_modules/@theia/languages/lib/browser/index.js");
var cpp_language_client_contribution_1 = __webpack_require__(/*! ./cpp-language-client-contribution */ "./node_modules/@theia/cpp/lib/browser/cpp-language-client-contribution.js");
var cpp_keybinding_1 = __webpack_require__(/*! ./cpp-keybinding */ "./node_modules/@theia/cpp/lib/browser/cpp-keybinding.js");
var cpp_preferences_1 = __webpack_require__(/*! ./cpp-preferences */ "./node_modules/@theia/cpp/lib/browser/cpp-preferences.js");
var cpp_build_configurations_ui_1 = __webpack_require__(/*! ./cpp-build-configurations-ui */ "./node_modules/@theia/cpp/lib/browser/cpp-build-configurations-ui.js");
var cpp_build_configurations_1 = __webpack_require__(/*! ./cpp-build-configurations */ "./node_modules/@theia/cpp/lib/browser/cpp-build-configurations.js");
var cpp_build_configurations_statusbar_element_1 = __webpack_require__(/*! ./cpp-build-configurations-statusbar-element */ "./node_modules/@theia/cpp/lib/browser/cpp-build-configurations-statusbar-element.js");
var cpp_task_provider_1 = __webpack_require__(/*! ./cpp-task-provider */ "./node_modules/@theia/cpp/lib/browser/cpp-task-provider.js");
var task_contribution_1 = __webpack_require__(/*! @theia/task/lib/browser/task-contribution */ "./node_modules/@theia/task/lib/browser/task-contribution.js");
var cpp_build_configuration_protocol_1 = __webpack_require__(/*! ../common/cpp-build-configuration-protocol */ "./node_modules/@theia/cpp/lib/common/cpp-build-configuration-protocol.js");
exports.default = new inversify_1.ContainerModule(function (bind) {
    bind(common_1.CommandContribution).to(cpp_commands_1.CppCommandContribution).inSingletonScope();
    bind(cpp_keybinding_1.CppKeybindingContext).toSelf().inSingletonScope();
    bind(browser_1.KeybindingContext).toService(cpp_keybinding_1.CppKeybindingContext);
    bind(browser_1.KeybindingContribution).to(cpp_keybinding_1.CppKeybindingContribution).inSingletonScope();
    bind(cpp_language_client_contribution_1.CppLanguageClientContribution).toSelf().inSingletonScope();
    bind(browser_2.LanguageClientContribution).toService(cpp_language_client_contribution_1.CppLanguageClientContribution);
    bind(cpp_task_provider_1.CppTaskProvider).toSelf().inSingletonScope();
    bind(cpp_build_configurations_1.CppBuildConfigurationManager).to(cpp_build_configurations_1.CppBuildConfigurationManagerImpl).inSingletonScope();
    bind(cpp_build_configurations_ui_1.CppBuildConfigurationChanger).toSelf().inSingletonScope();
    bind(cpp_build_configurations_ui_1.CppBuildConfigurationsContributions).toSelf().inSingletonScope();
    bind(task_contribution_1.TaskContribution).toService(cpp_task_provider_1.CppTaskProvider);
    bind(common_1.CommandContribution).toService(cpp_build_configurations_ui_1.CppBuildConfigurationsContributions);
    bind(cpp_build_configurations_statusbar_element_1.CppBuildConfigurationsStatusBarElement).toSelf().inSingletonScope();
    bind(cpp_build_configuration_protocol_1.CppBuildConfigurationServer).toDynamicValue(function (ctx) {
        return browser_1.WebSocketConnectionProvider.createProxy(ctx.container, cpp_build_configuration_protocol_1.cppBuildConfigurationServerPath);
    }).inSingletonScope();
    cpp_preferences_1.bindCppPreferences(bind);
});


/***/ }),

/***/ "./node_modules/@theia/cpp/lib/browser/cpp-keybinding.js":
/*!***************************************************************!*\
  !*** ./node_modules/@theia/cpp/lib/browser/cpp-keybinding.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2017 Ericsson and others.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v. 2.0 which is available at
 * http://www.eclipse.org/legal/epl-2.0.
 *
 * This Source Code may also be made available under the following Secondary
 * Licenses when the conditions for such availability set forth in the Eclipse
 * Public License v. 2.0 are satisfied: GNU General Public License, version 2
 * with the GNU Classpath Exception which is available at
 * https://www.gnu.org/software/classpath/license.html.
 *
 * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0
 ********************************************************************************/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var os_1 = __webpack_require__(/*! @theia/core/lib/common/os */ "./node_modules/@theia/core/lib/common/os.js");
var browser_1 = __webpack_require__(/*! @theia/editor/lib/browser */ "./node_modules/@theia/editor/lib/browser/index.js");
var cpp_commands_1 = __webpack_require__(/*! ./cpp-commands */ "./node_modules/@theia/cpp/lib/browser/cpp-commands.js");
var CppKeybindingContext = /** @class */ (function () {
    function CppKeybindingContext(editorService) {
        this.editorService = editorService;
        this.id = 'cpp.keybinding.context';
    }
    /**
     * Determine if the keybinding is enabled.
     * The keybinding is enabled if the editor currently contains an active C/C++ file.
     * @param arg the keybinding.
     *
     * @returns `true` if the keybinding is enabled.
     */
    CppKeybindingContext.prototype.isEnabled = function (arg) {
        return cpp_commands_1.editorContainsCppFiles(this.editorService);
    };
    CppKeybindingContext = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(browser_1.EditorManager)),
        __metadata("design:paramtypes", [browser_1.EditorManager])
    ], CppKeybindingContext);
    return CppKeybindingContext;
}());
exports.CppKeybindingContext = CppKeybindingContext;
var CppKeybindingContribution = /** @class */ (function () {
    function CppKeybindingContribution(cppKeybindingContext) {
        this.cppKeybindingContext = cppKeybindingContext;
    }
    /**
     * Register keybindings.
     * @param registry the keybinding registry.
     */
    CppKeybindingContribution.prototype.registerKeybindings = function (registry) {
        [
            {
                command: 'switch_source_header',
                context: this.cppKeybindingContext.id,
                keybinding: os_1.isOSX ? 'option+cmd+o' : 'alt+o'
            }
        ].forEach(function (binding) {
            registry.registerKeybinding(binding);
        });
    };
    CppKeybindingContribution = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(CppKeybindingContext)),
        __metadata("design:paramtypes", [CppKeybindingContext])
    ], CppKeybindingContribution);
    return CppKeybindingContribution;
}());
exports.CppKeybindingContribution = CppKeybindingContribution;


/***/ }),

/***/ "./node_modules/@theia/cpp/lib/browser/cpp-language-client-contribution.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@theia/cpp/lib/browser/cpp-language-client-contribution.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2017 TypeFox and others.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v. 2.0 which is available at
 * http://www.eclipse.org/legal/epl-2.0.
 *
 * This Source Code may also be made available under the following Secondary
 * Licenses when the conditions for such availability set forth in the Eclipse
 * Public License v. 2.0 are satisfied: GNU General Public License, version 2
 * with the GNU Classpath Exception which is available at
 * https://www.gnu.org/software/classpath/license.html.
 *
 * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0
 ********************************************************************************/
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
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
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
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
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
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var browser_1 = __webpack_require__(/*! @theia/languages/lib/browser */ "./node_modules/@theia/languages/lib/browser/index.js");
var browser_2 = __webpack_require__(/*! @theia/languages/lib/browser */ "./node_modules/@theia/languages/lib/browser/index.js");
var semantic_highlighting_service_1 = __webpack_require__(/*! @theia/editor/lib/browser/semantic-highlight/semantic-highlighting-service */ "./node_modules/@theia/editor/lib/browser/semantic-highlight/semantic-highlighting-service.js");
var logger_1 = __webpack_require__(/*! @theia/core/lib/common/logger */ "./node_modules/@theia/core/lib/common/logger.js");
var window_service_1 = __webpack_require__(/*! @theia/core/lib/browser/window/window-service */ "./node_modules/@theia/core/lib/browser/window/window-service.js");
var common_1 = __webpack_require__(/*! ../common */ "./node_modules/@theia/cpp/lib/common/index.js");
var cpp_build_configurations_1 = __webpack_require__(/*! ./cpp-build-configurations */ "./node_modules/@theia/cpp/lib/browser/cpp-build-configurations.js");
var cpp_build_configurations_statusbar_element_1 = __webpack_require__(/*! ./cpp-build-configurations-statusbar-element */ "./node_modules/@theia/cpp/lib/browser/cpp-build-configurations-statusbar-element.js");
var cpp_preferences_1 = __webpack_require__(/*! ./cpp-preferences */ "./node_modules/@theia/cpp/lib/browser/cpp-preferences.js");
var uri_1 = __webpack_require__(/*! @theia/core/lib/common/uri */ "./node_modules/@theia/core/lib/common/uri.js");
var CppLanguageClientContribution = /** @class */ (function (_super) {
    __extends(CppLanguageClientContribution, _super);
    function CppLanguageClientContribution(workspace, languages, languageClientFactory, semanticHighlightingService) {
        var _this = _super.call(this, workspace, languages, languageClientFactory) || this;
        _this.workspace = workspace;
        _this.languages = languages;
        _this.languageClientFactory = languageClientFactory;
        _this.semanticHighlightingService = semanticHighlightingService;
        _this.id = common_1.CPP_LANGUAGE_ID;
        _this.name = common_1.CPP_LANGUAGE_NAME;
        return _this;
    }
    /**
     * Initialize the client contribution.
     */
    CppLanguageClientContribution.prototype.init = function () {
        var _this = this;
        this.cppBuildConfigurations.onActiveConfigChange2(function () { return _this.onActiveBuildConfigChanged(); });
        this.cppPreferences.onPreferenceChanged(function () { return _this.restart(); });
    };
    /**
     * Handle the language client `onReady` event.
     * @param languageClient the language client.
     */
    CppLanguageClientContribution.prototype.onReady = function (languageClient) {
        _super.prototype.onReady.call(this, languageClient);
        // Display the C/C++ build configurations status bar element to select active build config
        this.cppBuildConfigurationsStatusBarElement.show();
    };
    /**
     * Create a compilation database map.
     * @param mergeCompilationDatabases flag determining whether to merge the compilation databases.
     *
     * @returns the compilation database map.
     */
    CppLanguageClientContribution.prototype.createCompilationDatabaseMap = function (mergeCompilationDatabases) {
        return __awaiter(this, void 0, void 0, function () {
            var activeConfigurations, databaseMap, _a, _b, _c, source, config, configs, mergedDatabaseUri, _d, error_1;
            var e_1, _e;
            return __generator(this, function (_f) {
                switch (_f.label) {
                    case 0:
                        activeConfigurations = new Map();
                        databaseMap = new Map();
                        try {
                            for (_a = __values(this.cppBuildConfigurations.getAllActiveConfigs().entries()), _b = _a.next(); !_b.done; _b = _a.next()) {
                                _c = __read(_b.value, 2), source = _c[0], config = _c[1];
                                if (config) {
                                    activeConfigurations.set(source, config);
                                    databaseMap.set(source, config.directory);
                                }
                            }
                        }
                        catch (e_1_1) { e_1 = { error: e_1_1 }; }
                        finally {
                            try {
                                if (_b && !_b.done && (_e = _a.return)) _e.call(_a);
                            }
                            finally { if (e_1) throw e_1.error; }
                        }
                        if (!(activeConfigurations.size > 1 && mergeCompilationDatabases)) return [3 /*break*/, 4];
                        databaseMap.clear(); // Use only one configuration.
                        configs = __spread(activeConfigurations.values());
                        _f.label = 1;
                    case 1:
                        _f.trys.push([1, 3, , 4]);
                        _d = uri_1.default.bind;
                        return [4 /*yield*/, this.cppBuildConfigurations.getMergedCompilationDatabase({
                                directories: configs.map(function (config) { return config.directory; }),
                            })];
                    case 2:
                        mergedDatabaseUri = new (_d.apply(uri_1.default, [void 0, _f.sent()]))();
                        databaseMap.set('undefined', mergedDatabaseUri.parent.path.toString());
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _f.sent();
                        this.logger.error(error_1);
                        databaseMap.set('undefined', configs[0].directory);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/, databaseMap];
                }
            });
        });
    };
    /**
     * Create the language client.
     * @param connection the message connection.
     *
     * @returns the language client.
     */
    CppLanguageClientContribution.prototype.createLanguageClient = function (connection) {
        var client = Object.assign(_super.prototype.createLanguageClient.call(this, connection), { languageId: this.id });
        client.registerFeature(semantic_highlighting_service_1.SemanticHighlightingService.createNewFeature(this.semanticHighlightingService, client));
        return client;
    };
    /**
     * Update the language initialization options.
     */
    CppLanguageClientContribution.prototype.updateInitializationOptions = function () {
        return __awaiter(this, void 0, void 0, function () {
            var clangdParams, experimentalCompilationDatabaseMap, databaseMap, lc;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        clangdParams = {};
                        experimentalCompilationDatabaseMap = this.cppPreferences['cpp.experimentalCompilationDatabaseMap'];
                        return [4 /*yield*/, this.createCompilationDatabaseMap(!experimentalCompilationDatabaseMap)];
                    case 1:
                        databaseMap = _a.sent();
                        if (databaseMap.size === 1) {
                            clangdParams.compilationDatabasePath = __spread(databaseMap.values())[0];
                        }
                        else if (databaseMap.size > 1 && experimentalCompilationDatabaseMap) {
                            clangdParams.compilationDatabaseMap = __spread(databaseMap.entries()).map(function (_a) {
                                var _b = __read(_a, 2), sourceDir = _b[0], dbPath = _b[1];
                                return ({ sourceDir: new uri_1.default(sourceDir).path.toString(), dbPath: dbPath, });
                            });
                        }
                        return [4 /*yield*/, this.languageClient];
                    case 2:
                        lc = _a.sent();
                        lc.clientOptions.initializationOptions = clangdParams;
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Handle the `activeBuildConfigChanged` event.
     */
    CppLanguageClientContribution.prototype.onActiveBuildConfigChanged = function () {
        this.restart();
    };
    Object.defineProperty(CppLanguageClientContribution.prototype, "documentSelector", {
        get: function () {
            // This is used (at least) to determine which files, when they are open,
            // trigger the launch of the C/C++ language server.
            return common_1.HEADER_AND_SOURCE_FILE_EXTENSIONS;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CppLanguageClientContribution.prototype, "globPatterns", {
        get: function () {
            // This is used (at least) to determine which files we watch.  Change
            // notifications are forwarded to the language server.
            return [
                '**/*.{' + common_1.HEADER_AND_SOURCE_FILE_EXTENSIONS.join() + '}',
                '**/compile_commands.json',
            ];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CppLanguageClientContribution.prototype, "configurationSection", {
        get: function () {
            return [this.id];
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Create the language client options.
     *
     * @returns the language client options.
     */
    CppLanguageClientContribution.prototype.createOptions = function () {
        var _this = this;
        var clientOptions = _super.prototype.createOptions.call(this);
        clientOptions.initializationFailedHandler = function () {
            var READ_INSTRUCTIONS_ACTION = 'Read Instructions';
            var ERROR_MESSAGE = 'Error starting C/C++ language server. ' +
                "Please make sure 'clangd' is installed on your system. " +
                'You can refer to the clangd page for instructions.';
            _this.messageService.error(ERROR_MESSAGE, READ_INSTRUCTIONS_ACTION).then(function (selected) {
                if (READ_INSTRUCTIONS_ACTION === selected) {
                    _this.windowService.openNewWindow('https://clang.llvm.org/extra/clangd.html', { external: true });
                }
            });
            _this.logger.error(ERROR_MESSAGE);
            return false;
        };
        return clientOptions;
    };
    /**
     * Get the language start options.
     *
     * @returns a promise resolving to the `CppStartParameters`.
     */
    CppLanguageClientContribution.prototype.getStartParameters = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: 
                    // getStartParameters is one of the only async steps in the LC
                    // initialization sequence, so we will update asynchronously the
                    // options here
                    return [4 /*yield*/, this.updateInitializationOptions()];
                    case 1:
                        // getStartParameters is one of the only async steps in the LC
                        // initialization sequence, so we will update asynchronously the
                        // options here
                        _a.sent();
                        return [2 /*return*/, {
                                clangdExecutable: this.cppPreferences['cpp.clangdExecutable'],
                                clangdArgs: this.cppPreferences['cpp.clangdArgs'],
                                clangTidy: this.cppPreferences['cpp.clangTidy'],
                                clangTidyChecks: this.cppPreferences['cpp.clangTidyChecks']
                            }];
                }
            });
        });
    };
    __decorate([
        inversify_1.inject(cpp_preferences_1.CppPreferences),
        __metadata("design:type", Object)
    ], CppLanguageClientContribution.prototype, "cppPreferences", void 0);
    __decorate([
        inversify_1.inject(cpp_build_configurations_1.CppBuildConfigurationManager),
        __metadata("design:type", Object)
    ], CppLanguageClientContribution.prototype, "cppBuildConfigurations", void 0);
    __decorate([
        inversify_1.inject(cpp_build_configurations_statusbar_element_1.CppBuildConfigurationsStatusBarElement),
        __metadata("design:type", cpp_build_configurations_statusbar_element_1.CppBuildConfigurationsStatusBarElement)
    ], CppLanguageClientContribution.prototype, "cppBuildConfigurationsStatusBarElement", void 0);
    __decorate([
        inversify_1.inject(window_service_1.WindowService),
        __metadata("design:type", Object)
    ], CppLanguageClientContribution.prototype, "windowService", void 0);
    __decorate([
        inversify_1.inject(logger_1.ILogger),
        __metadata("design:type", Object)
    ], CppLanguageClientContribution.prototype, "logger", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], CppLanguageClientContribution.prototype, "init", null);
    CppLanguageClientContribution = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(browser_2.Workspace)),
        __param(1, inversify_1.inject(browser_2.Languages)),
        __param(2, inversify_1.inject(browser_1.LanguageClientFactory)),
        __param(3, inversify_1.inject(semantic_highlighting_service_1.SemanticHighlightingService)),
        __metadata("design:paramtypes", [Object, Object, browser_1.LanguageClientFactory,
            semantic_highlighting_service_1.SemanticHighlightingService])
    ], CppLanguageClientContribution);
    return CppLanguageClientContribution;
}(browser_1.BaseLanguageClientContribution));
exports.CppLanguageClientContribution = CppLanguageClientContribution;


/***/ }),

/***/ "./node_modules/@theia/cpp/lib/browser/cpp-preferences.js":
/*!****************************************************************!*\
  !*** ./node_modules/@theia/cpp/lib/browser/cpp-preferences.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2018 Ericsson and others.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v. 2.0 which is available at
 * http://www.eclipse.org/legal/epl-2.0.
 *
 * This Source Code may also be made available under the following Secondary
 * Licenses when the conditions for such availability set forth in the Eclipse
 * Public License v. 2.0 are satisfied: GNU General Public License, version 2
 * with the GNU Classpath Exception which is available at
 * https://www.gnu.org/software/classpath/license.html.
 *
 * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0
 ********************************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
var preferences_1 = __webpack_require__(/*! @theia/core/lib/browser/preferences */ "./node_modules/@theia/core/lib/browser/preferences/index.js");
var common_1 = __webpack_require__(/*! ../common */ "./node_modules/@theia/cpp/lib/common/index.js");
/**
 * Representation of the C/C++ preference schema.
 */
exports.cppPreferencesSchema = {
    type: 'object',
    properties: {
        'cpp.buildConfigurations': {
            description: 'List of build configurations',
            type: 'array',
            items: {
                type: 'object',
                properties: {
                    'name': {
                        type: 'string'
                    },
                    'directory': {
                        type: 'string'
                    },
                    'commands': {
                        type: 'object',
                        properties: {
                            'build': {
                                type: 'string',
                            }
                        },
                    }
                },
                required: ['name', 'directory'],
            },
            scope: 'resource',
            default: [],
        },
        'cpp.experimentalCompilationDatabaseMap': {
            description: 'Enable experimental support for multiple compilation databases.',
            default: false,
            type: 'boolean'
        },
        'cpp.experimentalCommands': {
            description: 'Enable experimental commands mostly intended for Clangd developers.',
            default: false,
            type: 'boolean'
        },
        'cpp.clangdExecutable': {
            description: 'Specify the executable name/path to run in order to start clangd.',
            default: common_1.CLANGD_EXECUTABLE_DEFAULT,
            type: 'string'
        },
        'cpp.clangdArgs': {
            description: 'Specify the arguments to pass to clangd when starting the language server.',
            default: '',
            type: 'string'
        },
        'cpp.clangTidy': {
            description: 'Enable/disable C/C++ linting.',
            default: false,
            type: 'boolean'
        },
        'cpp.clangTidyChecks': {
            description: 'Specify comma separated arguments to pass to clang-tidy. Activated only if cpp.clang-tidy is enabled',
            default: '',
            type: 'string'
        }
    }
};
/**
 * Representation of C/C++ preference configuration.
 */
var CppConfiguration = /** @class */ (function () {
    function CppConfiguration() {
    }
    return CppConfiguration;
}());
exports.CppConfiguration = CppConfiguration;
exports.CppPreferences = Symbol('CppPreferences');
/**
 * Create the C/C++ preferences.
 * @param preferences the preference service.
 *
 * @returns the C/C++ preferences.
 */
function createCppPreferences(preferences) {
    return preferences_1.createPreferenceProxy(preferences, exports.cppPreferencesSchema);
}
exports.createCppPreferences = createCppPreferences;
/**
 * Bind the C/C++ preferences to the application.
 */
function bindCppPreferences(bind) {
    bind(exports.CppPreferences).toDynamicValue(function (ctx) {
        var preferences = ctx.container.get(preferences_1.PreferenceService);
        return createCppPreferences(preferences);
    }).inSingletonScope();
    bind(preferences_1.PreferenceContribution).toConstantValue({ schema: exports.cppPreferencesSchema });
}
exports.bindCppPreferences = bindCppPreferences;


/***/ }),

/***/ "./node_modules/@theia/cpp/lib/browser/cpp-protocol.js":
/*!*************************************************************!*\
  !*** ./node_modules/@theia/cpp/lib/browser/cpp-protocol.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2017-2018 TypeFox and others.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v. 2.0 which is available at
 * http://www.eclipse.org/legal/epl-2.0.
 *
 * This Source Code may also be made available under the following Secondary
 * Licenses when the conditions for such availability set forth in the Eclipse
 * Public License v. 2.0 are satisfied: GNU General Public License, version 2
 * with the GNU Classpath Exception which is available at
 * https://www.gnu.org/software/classpath/license.html.
 *
 * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0
 ********************************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
var browser_1 = __webpack_require__(/*! @theia/languages/lib/browser */ "./node_modules/@theia/languages/lib/browser/index.js");
var SwitchSourceHeaderRequest;
(function (SwitchSourceHeaderRequest) {
    SwitchSourceHeaderRequest.type = new browser_1.RequestType('textDocument/switchSourceHeader');
})(SwitchSourceHeaderRequest = exports.SwitchSourceHeaderRequest || (exports.SwitchSourceHeaderRequest = {}));


/***/ }),

/***/ "./node_modules/@theia/cpp/lib/browser/cpp-task-provider.js":
/*!******************************************************************!*\
  !*** ./node_modules/@theia/cpp/lib/browser/cpp-task-provider.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2018 Ericsson and others.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v. 2.0 which is available at
 * http://www.eclipse.org/legal/epl-2.0.
 *
 * This Source Code may also be made available under the following Secondary
 * Licenses when the conditions for such availability set forth in the Eclipse
 * Public License v. 2.0 are satisfied: GNU General Public License, version 2
 * with the GNU Classpath Exception which is available at
 * https://www.gnu.org/software/classpath/license.html.
 *
 * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0
 ********************************************************************************/
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
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
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
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
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
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
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
var parseArgv = __webpack_require__(/*! string-argv */ "./node_modules/string-argv/index.js");
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var task_contribution_1 = __webpack_require__(/*! @theia/task/lib/browser/task-contribution */ "./node_modules/@theia/task/lib/browser/task-contribution.js");
var cpp_build_configurations_1 = __webpack_require__(/*! ./cpp-build-configurations */ "./node_modules/@theia/cpp/lib/browser/cpp-build-configurations.js");
var task_definition_registry_1 = __webpack_require__(/*! @theia/task/lib/browser/task-definition-registry */ "./node_modules/@theia/task/lib/browser/task-definition-registry.js");
var task_problem_matcher_registry_1 = __webpack_require__(/*! @theia/task/lib/browser/task-problem-matcher-registry */ "./node_modules/@theia/task/lib/browser/task-problem-matcher-registry.js");
var task_problem_pattern_registry_1 = __webpack_require__(/*! @theia/task/lib/browser/task-problem-pattern-registry */ "./node_modules/@theia/task/lib/browser/task-problem-pattern-registry.js");
/**
 * The C/C++ build task type key.
 */
var CPP_BUILD_TASK_TYPE_KEY = 'cpp.build';
/**
 * The C/C++ build task source.
 */
var CPP_BUILD_TASK_SOURCE = 'cpp';
var CppTaskProvider = /** @class */ (function () {
    function CppTaskProvider() {
    }
    /**
     * Initialize the task provider.
     */
    CppTaskProvider.prototype.init = function () {
        this.registerTaskDefinition();
        this.problemPatternRegistry.register({
            'name': 'clangTidyPattern',
            'regexp': '^(.+):(\\d+):(\\d+):\\s+(error|warning|info|note):\\s+(.+?)\\s+\\[(.+)\\]$',
            'file': 1,
            'line': 2,
            'character': 3,
            'severity': 4,
            'message': 5,
            'code': 6
        });
        this.problemMatcherRegistry.register({
            'name': 'clangTidyMatcher',
            'label': 'Clang-tidy problems',
            'owner': 'clang-tidy',
            'source': 'clang-tidy-task',
            'applyTo': 'alldocuments',
            'fileLocation': [
                'absolute'
            ],
            'pattern': 'clangTidyPattern'
        });
    };
    /**
     * Register the task provider.
     * @param registry the task provider registry.
     */
    CppTaskProvider.prototype.registerProviders = function (registry) {
        registry.register(CPP_BUILD_TASK_SOURCE, this);
    };
    /**
     * Register the task resolver.
     * @param registry the task resolver registry.
     */
    CppTaskProvider.prototype.registerResolvers = function (registry) {
        registry.register(CPP_BUILD_TASK_TYPE_KEY, this);
    };
    /**
     * Resolve the C/C++ build task configuration.
     * @param task the C/C++ build task configuration.
     *
     * @returns a Promise resolving to the task configuration.
     */
    CppTaskProvider.prototype.resolveTask = function (task) {
        return __awaiter(this, void 0, void 0, function () {
            var resolver, buildCommand, argv, command, args, resolvedTask;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.taskResolverRegistry.getResolver('shell')];
                    case 1:
                        resolver = _a.sent();
                        if (!resolver) {
                            throw new Error('No shell resolver found, cannot build.');
                        }
                        buildCommand = task.config.commands && task.config.commands['build'];
                        if (buildCommand === undefined) {
                            throw new Error("No build command defined in build configuration " + task.config.name + ".");
                        }
                        argv = parseArgv(buildCommand);
                        if (argv.length === 0) {
                            throw new Error("Empty build command in the active build configuration (" + task.config.name + ")");
                        }
                        command = argv[0];
                        args = argv.slice(1);
                        resolvedTask = __assign(__assign({}, task), { type: 'shell', command: command,
                            args: args, options: {
                                cwd: task.config.directory,
                            } });
                        return [2 /*return*/, resolver.resolveTask(resolvedTask)];
                }
            });
        });
    };
    /**
     * Return a C/C++ build task configuration based on `config`, or undefined
     * if `config` doesn't specify a build command.
     */
    CppTaskProvider.prototype.makeTaskConfiguration = function (config) {
        if (config.commands && config.commands.build) {
            return {
                type: CPP_BUILD_TASK_TYPE_KEY,
                _source: CPP_BUILD_TASK_SOURCE,
                _scope: config.directory,
                label: "C/C++ Build - " + config.name,
                config: config
            };
        }
        return undefined;
    };
    /**
     * Return the C/C++ build tasks (one task per existing build config).
     */
    CppTaskProvider.prototype.provideTasks = function () {
        return __awaiter(this, void 0, void 0, function () {
            var buildConfigs, taskConfigs, buildConfigs_1, buildConfigs_1_1, buildConfig, taskConfig;
            var e_1, _a;
            return __generator(this, function (_b) {
                buildConfigs = this.cppBuildConfigurationManager.getConfigs();
                taskConfigs = [];
                try {
                    for (buildConfigs_1 = __values(buildConfigs), buildConfigs_1_1 = buildConfigs_1.next(); !buildConfigs_1_1.done; buildConfigs_1_1 = buildConfigs_1.next()) {
                        buildConfig = buildConfigs_1_1.value;
                        taskConfig = this.makeTaskConfiguration(buildConfig);
                        if (taskConfig) {
                            taskConfigs.push(taskConfig);
                        }
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (buildConfigs_1_1 && !buildConfigs_1_1.done && (_a = buildConfigs_1.return)) _a.call(buildConfigs_1);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
                return [2 /*return*/, taskConfigs];
            });
        });
    };
    /**
     * Register the task definition.
     */
    CppTaskProvider.prototype.registerTaskDefinition = function () {
        this.taskDefinitionRegistry.register({
            taskType: CPP_BUILD_TASK_TYPE_KEY,
            source: 'cpp',
            properties: {
                required: ['label'],
                all: ['label'],
                schema: {
                    type: CPP_BUILD_TASK_TYPE_KEY,
                    required: ['label'],
                    properties: {
                        label: {
                            type: 'string'
                        }
                    }
                }
            }
        });
    };
    __decorate([
        inversify_1.inject(task_contribution_1.TaskResolverRegistry),
        __metadata("design:type", task_contribution_1.TaskResolverRegistry)
    ], CppTaskProvider.prototype, "taskResolverRegistry", void 0);
    __decorate([
        inversify_1.inject(task_definition_registry_1.TaskDefinitionRegistry),
        __metadata("design:type", task_definition_registry_1.TaskDefinitionRegistry)
    ], CppTaskProvider.prototype, "taskDefinitionRegistry", void 0);
    __decorate([
        inversify_1.inject(cpp_build_configurations_1.CppBuildConfigurationManager),
        __metadata("design:type", Object)
    ], CppTaskProvider.prototype, "cppBuildConfigurationManager", void 0);
    __decorate([
        inversify_1.inject(task_problem_matcher_registry_1.ProblemMatcherRegistry),
        __metadata("design:type", task_problem_matcher_registry_1.ProblemMatcherRegistry)
    ], CppTaskProvider.prototype, "problemMatcherRegistry", void 0);
    __decorate([
        inversify_1.inject(task_problem_pattern_registry_1.ProblemPatternRegistry),
        __metadata("design:type", task_problem_pattern_registry_1.ProblemPatternRegistry)
    ], CppTaskProvider.prototype, "problemPatternRegistry", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], CppTaskProvider.prototype, "init", null);
    CppTaskProvider = __decorate([
        inversify_1.injectable()
    ], CppTaskProvider);
    return CppTaskProvider;
}());
exports.CppTaskProvider = CppTaskProvider;


/***/ }),

/***/ "./node_modules/@theia/cpp/lib/common/cpp-build-configuration-protocol.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@theia/cpp/lib/common/cpp-build-configuration-protocol.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2019 Ericsson and others.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v. 2.0 which is available at
 * http://www.eclipse.org/legal/epl-2.0.
 *
 * This Source Code may also be made available under the following Secondary
 * Licenses when the conditions for such availability set forth in the Eclipse
 * Public License v. 2.0 are satisfied: GNU General Public License, version 2
 * with the GNU Classpath Exception which is available at
 * https://www.gnu.org/software/classpath/license.html.
 *
 * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0
 ********************************************************************************/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
exports.cppBuildConfigurationServerPath = '/services/cppbuildconfigurationserver';
exports.CppBuildConfigurationServer = Symbol('CppBuildConfigurationServer');
var MockCppBuildConfigurationServer = /** @class */ (function () {
    function MockCppBuildConfigurationServer() {
    }
    /**
     * Dispose the configuration server.
     */
    MockCppBuildConfigurationServer.prototype.dispose = function () { };
    /**
     * Get the merged compilation database.
     * @param params the passed arguments including the list of directories to search from.
     */
    MockCppBuildConfigurationServer.prototype.getMergedCompilationDatabase = function (params) {
        return Promise.resolve('');
    };
    MockCppBuildConfigurationServer = __decorate([
        inversify_1.injectable(),
        __metadata("design:paramtypes", [])
    ], MockCppBuildConfigurationServer);
    return MockCppBuildConfigurationServer;
}());
exports.MockCppBuildConfigurationServer = MockCppBuildConfigurationServer;


/***/ }),

/***/ "./node_modules/@theia/cpp/lib/common/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/@theia/cpp/lib/common/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2017 TypeFox and others.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v. 2.0 which is available at
 * http://www.eclipse.org/legal/epl-2.0.
 *
 * This Source Code may also be made available under the following Secondary
 * Licenses when the conditions for such availability set forth in the Eclipse
 * Public License v. 2.0 are satisfied: GNU General Public License, version 2
 * with the GNU Classpath Exception which is available at
 * https://www.gnu.org/software/classpath/license.html.
 *
 * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0
 ********************************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * The C language ID.
 */
exports.C_LANGUAGE_ID = 'c';
/**
 * The C++ language ID.
 */
exports.CPP_LANGUAGE_ID = 'cpp';
/**
 * The human-readable name for the C/C++ language server.
 */
exports.CPP_LANGUAGE_NAME = 'C/C++';
// These should become preferences eventually and be forwarded to the server.
/**
 * The C/C++ header file extensions.
 */
exports.HEADER_FILE_EXTENSIONS = ['h', 'hxx', 'hh', 'hpp', 'inc'];
/**
 * The C/C++ source file extensions.
 */
exports.SOURCE_FILE_EXTENSIONS = ['c', 'cxx', 'C', 'c++', 'cc', 'cpp', 'cl'];
/**
 * The list of file extensions important to the C/C++ language server.
 */
exports.HEADER_AND_SOURCE_FILE_EXTENSIONS = exports.SOURCE_FILE_EXTENSIONS.concat(exports.HEADER_FILE_EXTENSIONS);
exports.CLANGD_EXECUTABLE_DEFAULT = 'clangd';


/***/ }),

/***/ "./node_modules/string-argv/index.js":
/*!*******************************************!*\
  !*** ./node_modules/string-argv/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = parseArgsStringToArgv;
module.exports.parseArgsStringToArgv = parseArgsStringToArgv;

function parseArgsStringToArgv(value, env, file) {
  // ([^\s'"]+(['"])([^\2]*?)\2) Match `text"quotes text"`

  // [^\s'"] or Match if not a space ' or "

  // (['"])([^\4]*?)\4 or Match "quoted text" without quotes
  // `\2` and `\4` are a backreference to the quote style (' or ") captured
  var myRegexp = /([^\s'"]+(['"])([^\2]*?)\2)|[^\s'"]+|(['"])([^\4]*?)\4/gi;
  var myString = value;
  var myArray = [
  ];
  if (env) {
    myArray.push(env);
  }
  if (file) {
    myArray.push(file);
  }
  var match;
  do {
        // Each call to exec returns the next regex match as an array
    match = myRegexp.exec(myString);
    if (match !== null) {
      // Index 1 in the array is the captured group if it exists
      // Index 0 is the matched text, which we use if no captured group exists
      myArray.push(firstString(match[1], match[5], match[0]));
    }
  } while (match !== null);

  return myArray;
}

// Accepts any number of arguments, and returns the first one that is a string
// (even an empty string)
function firstString() {
  for (var i = 0; i < arguments.length; i++) {
    var arg = arguments[i];
    if (typeof arg === "string") {
      return arg;
    }
  }
}


/***/ })

}]);
//# sourceMappingURL=39.bundle.js.map