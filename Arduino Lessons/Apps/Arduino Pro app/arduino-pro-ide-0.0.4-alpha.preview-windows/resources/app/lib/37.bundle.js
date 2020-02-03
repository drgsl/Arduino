(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[37],{

/***/ "./node_modules/@theia/task/lib/browser/process/process-task-contribution.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@theia/task/lib/browser/process/process-task-contribution.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2018 Red Hat, Inc. and others.
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
var process_task_resolver_1 = __webpack_require__(/*! ./process-task-resolver */ "./node_modules/@theia/task/lib/browser/process/process-task-resolver.js");
var ProcessTaskContribution = /** @class */ (function () {
    function ProcessTaskContribution() {
    }
    ProcessTaskContribution.prototype.registerResolvers = function (resolvers) {
        resolvers.register('process', this.processTaskResolver);
        resolvers.register('shell', this.processTaskResolver);
    };
    __decorate([
        inversify_1.inject(process_task_resolver_1.ProcessTaskResolver),
        __metadata("design:type", process_task_resolver_1.ProcessTaskResolver)
    ], ProcessTaskContribution.prototype, "processTaskResolver", void 0);
    ProcessTaskContribution = __decorate([
        inversify_1.injectable()
    ], ProcessTaskContribution);
    return ProcessTaskContribution;
}());
exports.ProcessTaskContribution = ProcessTaskContribution;


/***/ }),

/***/ "./node_modules/@theia/task/lib/browser/process/process-task-frontend-module.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@theia/task/lib/browser/process/process-task-frontend-module.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2018 Red Hat, Inc. and others.
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
var process_task_contribution_1 = __webpack_require__(/*! ./process-task-contribution */ "./node_modules/@theia/task/lib/browser/process/process-task-contribution.js");
var process_task_resolver_1 = __webpack_require__(/*! ./process-task-resolver */ "./node_modules/@theia/task/lib/browser/process/process-task-resolver.js");
var task_contribution_1 = __webpack_require__(/*! ../task-contribution */ "./node_modules/@theia/task/lib/browser/task-contribution.js");
function bindProcessTaskModule(bind) {
    bind(process_task_resolver_1.ProcessTaskResolver).toSelf().inSingletonScope();
    bind(process_task_contribution_1.ProcessTaskContribution).toSelf().inSingletonScope();
    bind(task_contribution_1.TaskContribution).toService(process_task_contribution_1.ProcessTaskContribution);
}
exports.bindProcessTaskModule = bindProcessTaskModule;


/***/ }),

/***/ "./node_modules/@theia/task/lib/browser/process/process-task-resolver.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@theia/task/lib/browser/process/process-task-resolver.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2018 Red Hat, Inc. and others.
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
var browser_1 = __webpack_require__(/*! @theia/variable-resolver/lib/browser */ "./node_modules/@theia/variable-resolver/lib/browser/index.js");
var task_definition_registry_1 = __webpack_require__(/*! ../task-definition-registry */ "./node_modules/@theia/task/lib/browser/task-definition-registry.js");
var uri_1 = __webpack_require__(/*! @theia/core/lib/common/uri */ "./node_modules/@theia/core/lib/common/uri.js");
var ProcessTaskResolver = /** @class */ (function () {
    function ProcessTaskResolver() {
    }
    /**
     * Perform some adjustments to the task launch configuration, before sending
     * it to the backend to be executed. We can make sure that parameters that
     * are optional to the user but required by the server will be defined, with
     * sane default values. Also, resolve all known variables, e.g. `${workspaceFolder}`.
     */
    ProcessTaskResolver.prototype.resolveTask = function (taskConfig) {
        return __awaiter(this, void 0, void 0, function () {
            var context, variableResolverOptions, processTaskConfig, result, _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
            return __generator(this, function (_p) {
                switch (_p.label) {
                    case 0:
                        if (taskConfig.type !== 'process' && taskConfig.type !== 'shell') {
                            throw new Error('Unsupported task configuration type.');
                        }
                        context = new uri_1.default(this.taskDefinitionRegistry.getDefinition(taskConfig) ? taskConfig.scope : taskConfig._source).withScheme('file');
                        variableResolverOptions = {
                            context: context, configurationSection: 'tasks'
                        };
                        processTaskConfig = taskConfig;
                        _a = [{}, processTaskConfig];
                        _b = {};
                        return [4 /*yield*/, this.variableResolverService.resolve(processTaskConfig.command, variableResolverOptions)];
                    case 1:
                        _b.command = _p.sent();
                        if (!processTaskConfig.args) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.variableResolverService.resolveArray(processTaskConfig.args, variableResolverOptions)];
                    case 2:
                        _c = _p.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        _c = undefined;
                        _p.label = 4;
                    case 4:
                        _b.args = _c;
                        if (!processTaskConfig.windows) return [3 /*break*/, 9];
                        _e = {};
                        return [4 /*yield*/, this.variableResolverService.resolve(processTaskConfig.windows.command, variableResolverOptions)];
                    case 5:
                        _e.command = _p.sent();
                        if (!processTaskConfig.windows.args) return [3 /*break*/, 7];
                        return [4 /*yield*/, this.variableResolverService.resolveArray(processTaskConfig.windows.args, variableResolverOptions)];
                    case 6:
                        _f = _p.sent();
                        return [3 /*break*/, 8];
                    case 7:
                        _f = undefined;
                        _p.label = 8;
                    case 8:
                        _d = (_e.args = _f,
                            _e.options = processTaskConfig.windows.options,
                            _e);
                        return [3 /*break*/, 10];
                    case 9:
                        _d = undefined;
                        _p.label = 10;
                    case 10:
                        _b.windows = _d;
                        if (!processTaskConfig.osx) return [3 /*break*/, 15];
                        _h = {};
                        return [4 /*yield*/, this.variableResolverService.resolve(processTaskConfig.osx.command, variableResolverOptions)];
                    case 11:
                        _h.command = _p.sent();
                        if (!processTaskConfig.osx.args) return [3 /*break*/, 13];
                        return [4 /*yield*/, this.variableResolverService.resolveArray(processTaskConfig.osx.args, variableResolverOptions)];
                    case 12:
                        _j = _p.sent();
                        return [3 /*break*/, 14];
                    case 13:
                        _j = undefined;
                        _p.label = 14;
                    case 14:
                        _g = (_h.args = _j,
                            _h.options = processTaskConfig.osx.options,
                            _h);
                        return [3 /*break*/, 16];
                    case 15:
                        _g = undefined;
                        _p.label = 16;
                    case 16:
                        _b.osx = _g;
                        if (!processTaskConfig.linux) return [3 /*break*/, 21];
                        _l = {};
                        return [4 /*yield*/, this.variableResolverService.resolve(processTaskConfig.linux.command, variableResolverOptions)];
                    case 17:
                        _l.command = _p.sent();
                        if (!processTaskConfig.linux.args) return [3 /*break*/, 19];
                        return [4 /*yield*/, this.variableResolverService.resolveArray(processTaskConfig.linux.args, variableResolverOptions)];
                    case 18:
                        _m = _p.sent();
                        return [3 /*break*/, 20];
                    case 19:
                        _m = undefined;
                        _p.label = 20;
                    case 20:
                        _k = (_l.args = _m,
                            _l.options = processTaskConfig.linux.options,
                            _l);
                        return [3 /*break*/, 22];
                    case 21:
                        _k = undefined;
                        _p.label = 22;
                    case 22:
                        _b.linux = _k;
                        _o = {};
                        return [4 /*yield*/, this.variableResolverService.resolve(processTaskConfig.options && processTaskConfig.options.cwd || '${workspaceFolder}', variableResolverOptions)];
                    case 23:
                        result = __assign.apply(void 0, _a.concat([(_b.options = (_o.cwd = _p.sent(),
                                _o.env = processTaskConfig.options && processTaskConfig.options.env,
                                _o.shell = processTaskConfig.options && processTaskConfig.options.shell,
                                _o), _b)]));
                        return [2 /*return*/, result];
                }
            });
        });
    };
    __decorate([
        inversify_1.inject(browser_1.VariableResolverService),
        __metadata("design:type", browser_1.VariableResolverService)
    ], ProcessTaskResolver.prototype, "variableResolverService", void 0);
    __decorate([
        inversify_1.inject(task_definition_registry_1.TaskDefinitionRegistry),
        __metadata("design:type", task_definition_registry_1.TaskDefinitionRegistry)
    ], ProcessTaskResolver.prototype, "taskDefinitionRegistry", void 0);
    ProcessTaskResolver = __decorate([
        inversify_1.injectable()
    ], ProcessTaskResolver);
    return ProcessTaskResolver;
}());
exports.ProcessTaskResolver = ProcessTaskResolver;


/***/ }),

/***/ "./node_modules/@theia/task/lib/browser/provided-task-configurations.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@theia/task/lib/browser/provided-task-configurations.js ***!
  \******************************************************************************/
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
var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var task_contribution_1 = __webpack_require__(/*! ./task-contribution */ "./node_modules/@theia/task/lib/browser/task-contribution.js");
var task_definition_registry_1 = __webpack_require__(/*! ./task-definition-registry */ "./node_modules/@theia/task/lib/browser/task-definition-registry.js");
var uri_1 = __webpack_require__(/*! @theia/core/lib/common/uri */ "./node_modules/@theia/core/lib/common/uri.js");
var ProvidedTaskConfigurations = /** @class */ (function () {
    function ProvidedTaskConfigurations() {
        /**
         * Map of source (name of extension, or path of root folder that the task config comes from) and `task config map`.
         * For the inner map (i.e., `task config map`), the key is task label and value TaskConfiguration
         */
        this.tasksMap = new Map();
    }
    /** returns a list of provided tasks */
    ProvidedTaskConfigurations.prototype.getTasks = function () {
        return __awaiter(this, void 0, void 0, function () {
            var providers, providedTasks;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.taskProviderRegistry.getProviders()];
                    case 1:
                        providers = _a.sent();
                        return [4 /*yield*/, Promise.all(providers.map(function (p) { return p.provideTasks(); }))];
                    case 2:
                        providedTasks = (_a.sent())
                            .reduce(function (acc, taskArray) { return acc.concat(taskArray); }, []);
                        this.cacheTasks(providedTasks);
                        return [2 /*return*/, providedTasks];
                }
            });
        });
    };
    /** returns the task configuration for a given source and label or undefined if none */
    ProvidedTaskConfigurations.prototype.getTask = function (source, taskLabel) {
        return __awaiter(this, void 0, void 0, function () {
            var task;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        task = this.getCachedTask(source, taskLabel);
                        if (!task) return [3 /*break*/, 1];
                        return [2 /*return*/, task];
                    case 1: return [4 /*yield*/, this.getTasks()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, this.getCachedTask(source, taskLabel)];
                }
            });
        });
    };
    /**
     * Finds the detected task for the given task customization.
     * The detected task is considered as a "match" to the task customization if it has all the `required` properties.
     * In case that more than one customization is found, return the one that has the biggest number of matched properties.
     *
     * @param customization the task customization
     * @return the detected task for the given task customization. If the task customization is not found, `undefined` is returned.
     */
    ProvidedTaskConfigurations.prototype.getTaskToCustomize = function (customization, rootFolderPath) {
        return __awaiter(this, void 0, void 0, function () {
            var definition, matchedTasks, highest, tasks, _loop_1, tasks_1, tasks_1_1, task, rootFolderUri, matchedTask;
            var e_1, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        definition = this.taskDefinitionRegistry.getDefinition(customization);
                        if (!definition) {
                            return [2 /*return*/, undefined];
                        }
                        matchedTasks = [];
                        highest = -1;
                        return [4 /*yield*/, this.getTasks()];
                    case 1:
                        tasks = _b.sent();
                        _loop_1 = function (task) {
                            var score = 0;
                            if (!definition.properties.required.every(function (requiredProp) { return customization[requiredProp] !== undefined; })) {
                                return "continue";
                            }
                            score += definition.properties.required.length; // number of required properties
                            var requiredProps = new Set(definition.properties.required);
                            // number of optional properties
                            score += definition.properties.all.filter(function (p) { return !requiredProps.has(p) && customization[p] !== undefined; }).length;
                            if (score >= highest) {
                                if (score > highest) {
                                    highest = score;
                                    matchedTasks.length = 0;
                                }
                                matchedTasks.push(task);
                            }
                        };
                        try {
                            for (tasks_1 = __values(tasks), tasks_1_1 = tasks_1.next(); !tasks_1_1.done; tasks_1_1 = tasks_1.next()) {
                                task = tasks_1_1.value;
                                _loop_1(task);
                            }
                        }
                        catch (e_1_1) { e_1 = { error: e_1_1 }; }
                        finally {
                            try {
                                if (tasks_1_1 && !tasks_1_1.done && (_a = tasks_1.return)) _a.call(tasks_1);
                            }
                            finally { if (e_1) throw e_1.error; }
                        }
                        rootFolderUri = new uri_1.default(rootFolderPath).toString();
                        matchedTask = matchedTasks.filter(function (t) {
                            return rootFolderUri === t._scope && definition.properties.all.every(function (p) { return t[p] === customization[p]; });
                        })[0];
                        return [2 /*return*/, matchedTask];
                }
            });
        });
    };
    ProvidedTaskConfigurations.prototype.getCachedTask = function (source, taskLabel) {
        var labelConfigMap = this.tasksMap.get(source);
        if (labelConfigMap) {
            return labelConfigMap.get(taskLabel);
        }
    };
    ProvidedTaskConfigurations.prototype.cacheTasks = function (tasks) {
        var e_2, _a;
        try {
            for (var tasks_2 = __values(tasks), tasks_2_1 = tasks_2.next(); !tasks_2_1.done; tasks_2_1 = tasks_2.next()) {
                var task = tasks_2_1.value;
                var label = task.label;
                var source = task._source;
                if (this.tasksMap.has(source)) {
                    this.tasksMap.get(source).set(label, task);
                }
                else {
                    var labelTaskMap = new Map();
                    labelTaskMap.set(label, task);
                    this.tasksMap.set(source, labelTaskMap);
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (tasks_2_1 && !tasks_2_1.done && (_a = tasks_2.return)) _a.call(tasks_2);
            }
            finally { if (e_2) throw e_2.error; }
        }
    };
    __decorate([
        inversify_1.inject(task_contribution_1.TaskProviderRegistry),
        __metadata("design:type", task_contribution_1.TaskProviderRegistry)
    ], ProvidedTaskConfigurations.prototype, "taskProviderRegistry", void 0);
    __decorate([
        inversify_1.inject(task_definition_registry_1.TaskDefinitionRegistry),
        __metadata("design:type", task_definition_registry_1.TaskDefinitionRegistry)
    ], ProvidedTaskConfigurations.prototype, "taskDefinitionRegistry", void 0);
    ProvidedTaskConfigurations = __decorate([
        inversify_1.injectable()
    ], ProvidedTaskConfigurations);
    return ProvidedTaskConfigurations;
}());
exports.ProvidedTaskConfigurations = ProvidedTaskConfigurations;


/***/ }),

/***/ "./node_modules/@theia/task/lib/browser/quick-open-task.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@theia/task/lib/browser/quick-open-task.js ***!
  \*****************************************************************/
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
var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var task_service_1 = __webpack_require__(/*! ./task-service */ "./node_modules/@theia/task/lib/browser/task-service.js");
var task_protocol_1 = __webpack_require__(/*! ../common/task-protocol */ "./node_modules/@theia/task/lib/common/task-protocol.js");
var task_definition_registry_1 = __webpack_require__(/*! ./task-definition-registry */ "./node_modules/@theia/task/lib/browser/task-definition-registry.js");
var uri_1 = __webpack_require__(/*! @theia/core/lib/common/uri */ "./node_modules/@theia/core/lib/common/uri.js");
var task_action_provider_1 = __webpack_require__(/*! ./task-action-provider */ "./node_modules/@theia/task/lib/browser/task-action-provider.js");
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "./node_modules/@theia/core/lib/browser/index.js");
var browser_2 = __webpack_require__(/*! @theia/workspace/lib/browser */ "./node_modules/@theia/workspace/lib/browser/index.js");
var terminal_service_1 = __webpack_require__(/*! @theia/terminal/lib/browser/base/terminal-service */ "./node_modules/@theia/terminal/lib/browser/base/terminal-service.js");
var common_1 = __webpack_require__(/*! @theia/filesystem/lib/common */ "./node_modules/@theia/filesystem/lib/common/index.js");
var quick_open_model_1 = __webpack_require__(/*! @theia/core/lib/common/quick-open-model */ "./node_modules/@theia/core/lib/common/quick-open-model.js");
var browser_3 = __webpack_require__(/*! @theia/core/lib/browser */ "./node_modules/@theia/core/lib/browser/index.js");
var task_name_resolver_1 = __webpack_require__(/*! ./task-name-resolver */ "./node_modules/@theia/task/lib/browser/task-name-resolver.js");
var task_configuration_manager_1 = __webpack_require__(/*! ./task-configuration-manager */ "./node_modules/@theia/task/lib/browser/task-configuration-manager.js");
var QuickOpenTask = /** @class */ (function () {
    function QuickOpenTask() {
        this.prefix = 'task ';
        this.description = 'Run Task';
    }
    /** Initialize this quick open model with the tasks. */
    QuickOpenTask.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            var recentTasks, configuredTasks, providedTasks, _a, filteredRecentTasks, filteredConfiguredTasks, filteredProvidedTasks, isMulti;
            var _b;
            var _this = this;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        recentTasks = this.taskService.recentTasks;
                        return [4 /*yield*/, this.taskService.getConfiguredTasks()];
                    case 1:
                        configuredTasks = _c.sent();
                        return [4 /*yield*/, this.taskService.getProvidedTasks()];
                    case 2:
                        providedTasks = _c.sent();
                        _a = this.getFilteredTasks(recentTasks, configuredTasks, providedTasks), filteredRecentTasks = _a.filteredRecentTasks, filteredConfiguredTasks = _a.filteredConfiguredTasks, filteredProvidedTasks = _a.filteredProvidedTasks;
                        isMulti = this.workspaceService.isMultiRootWorkspaceOpened;
                        this.items = [];
                        (_b = this.items).push.apply(_b, __spread(filteredRecentTasks.map(function (task, index) {
                            var item = new TaskRunQuickOpenItem(task, _this.taskService, isMulti, {
                                groupLabel: index === 0 ? 'recently used tasks' : undefined,
                                showBorder: false
                            }, _this.taskNameResolver);
                            item['taskDefinitionRegistry'] = _this.taskDefinitionRegistry;
                            return item;
                        }), filteredConfiguredTasks.map(function (task, index) {
                            var item = new TaskRunQuickOpenItem(task, _this.taskService, isMulti, {
                                groupLabel: index === 0 ? 'configured tasks' : undefined,
                                showBorder: (filteredRecentTasks.length <= 0
                                    ? false
                                    : index === 0 ? true : false)
                            }, _this.taskNameResolver);
                            item['taskDefinitionRegistry'] = _this.taskDefinitionRegistry;
                            return item;
                        }), filteredProvidedTasks.map(function (task, index) {
                            var item = new TaskRunQuickOpenItem(task, _this.taskService, isMulti, {
                                groupLabel: index === 0 ? 'detected tasks' : undefined,
                                showBorder: (filteredRecentTasks.length <= 0 && filteredConfiguredTasks.length <= 0
                                    ? false
                                    : index === 0 ? true : false)
                            }, _this.taskNameResolver);
                            item['taskDefinitionRegistry'] = _this.taskDefinitionRegistry;
                            return item;
                        })));
                        this.actionProvider = this.items.length ? this.taskActionProvider : undefined;
                        return [2 /*return*/];
                }
            });
        });
    };
    QuickOpenTask.prototype.open = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.init()];
                    case 1:
                        _a.sent();
                        if (!this.items.length) {
                            this.items.push(new quick_open_model_1.QuickOpenItem({
                                label: 'No task to run found. Configure Tasks...',
                                run: function (mode) {
                                    if (mode !== quick_open_model_1.QuickOpenMode.OPEN) {
                                        return false;
                                    }
                                    _this.configure();
                                    return true;
                                }
                            }));
                        }
                        this.quickOpenService.open(this, {
                            placeholder: 'Select the task to run',
                            fuzzyMatchLabel: true,
                            fuzzySort: false
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    QuickOpenTask.prototype.getModel = function () {
        return this;
    };
    QuickOpenTask.prototype.getOptions = function () {
        return {
            fuzzyMatchLabel: true,
            fuzzySort: false
        };
    };
    QuickOpenTask.prototype.attach = function () {
        var _this = this;
        this.items = [];
        this.actionProvider = undefined;
        this.taskService.getRunningTasks().then(function (tasks) {
            var e_1, _a;
            if (!tasks.length) {
                _this.items.push(new quick_open_model_1.QuickOpenItem({
                    label: 'No tasks found',
                    run: function (_mode) { return false; }
                }));
            }
            try {
                for (var tasks_1 = __values(tasks), tasks_1_1 = tasks_1.next(); !tasks_1_1.done; tasks_1_1 = tasks_1.next()) {
                    var task = tasks_1_1.value;
                    // can only attach to terminal processes, so only list those
                    if (task.terminalId) {
                        _this.items.push(new TaskAttachQuickOpenItem(task, _this.getRunningTaskLabel(task), _this.taskService));
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (tasks_1_1 && !tasks_1_1.done && (_a = tasks_1.return)) _a.call(tasks_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            _this.quickOpenService.open(_this, {
                placeholder: 'Choose task to open',
                fuzzyMatchLabel: true,
                fuzzySort: true
            });
        });
    };
    QuickOpenTask.prototype.configure = function () {
        return __awaiter(this, void 0, void 0, function () {
            var isMulti, configuredTasks, providedTasks, isFirstGroup, _a, filteredConfiguredTasks, filteredProvidedTasks, groupedTasks, configs, rootUris, _loop_1, this_1, rootUris_1, rootUris_1_1, rootFolder;
            var _b, e_2, _c;
            var _this = this;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        this.items = [];
                        this.actionProvider = undefined;
                        isMulti = this.workspaceService.isMultiRootWorkspaceOpened;
                        return [4 /*yield*/, this.taskService.getConfiguredTasks()];
                    case 1:
                        configuredTasks = _d.sent();
                        return [4 /*yield*/, this.taskService.getProvidedTasks()];
                    case 2:
                        providedTasks = _d.sent();
                        isFirstGroup = true;
                        _a = this.getFilteredTasks([], configuredTasks, providedTasks), filteredConfiguredTasks = _a.filteredConfiguredTasks, filteredProvidedTasks = _a.filteredProvidedTasks;
                        groupedTasks = this.getGroupedTasksByWorkspaceFolder(__spread(filteredConfiguredTasks, filteredProvidedTasks));
                        if (groupedTasks.has(undefined)) {
                            configs = groupedTasks.get(undefined);
                            (_b = this.items).push.apply(_b, __spread(configs.map(function (taskConfig) {
                                var item = new TaskConfigureQuickOpenItem(taskConfig, _this.taskService, _this.taskNameResolver, _this.workspaceService, isMulti, { showBorder: false });
                                item['taskDefinitionRegistry'] = _this.taskDefinitionRegistry;
                                return item;
                            })));
                            isFirstGroup = false;
                        }
                        return [4 /*yield*/, this.workspaceService.roots];
                    case 3:
                        rootUris = (_d.sent()).map(function (rootStat) { return rootStat.uri; });
                        _loop_1 = function (rootFolder) {
                            var _a;
                            var uri = new uri_1.default(rootFolder).withScheme('file');
                            var folderName = uri.displayName;
                            if (groupedTasks.has(uri.toString())) {
                                var configs = groupedTasks.get(uri.toString());
                                (_a = this_1.items).push.apply(_a, __spread(configs.map(function (taskConfig, index) {
                                    var item = new TaskConfigureQuickOpenItem(taskConfig, _this.taskService, _this.taskNameResolver, _this.workspaceService, isMulti, {
                                        groupLabel: index === 0 && isMulti ? folderName : '',
                                        showBorder: !isFirstGroup && index === 0
                                    });
                                    item['taskDefinitionRegistry'] = _this.taskDefinitionRegistry;
                                    return item;
                                })));
                            }
                            else {
                                var configUri = this_1.preferences.resolve('tasks', [], uri.toString()).configUri;
                                var existTaskConfigFile = !!configUri;
                                this_1.items.push(new quick_open_model_1.QuickOpenGroupItem({
                                    label: existTaskConfigFile ? 'Open tasks.json file' : 'Create tasks.json file from template',
                                    run: function (mode) {
                                        if (mode !== quick_open_model_1.QuickOpenMode.OPEN) {
                                            return false;
                                        }
                                        setTimeout(function () { return _this.taskConfigurationManager.openConfiguration(uri.toString()); });
                                        return true;
                                    },
                                    showBorder: !isFirstGroup,
                                    groupLabel: isMulti ? folderName : ''
                                }));
                            }
                            isFirstGroup = false;
                        };
                        this_1 = this;
                        try {
                            for (rootUris_1 = __values(rootUris), rootUris_1_1 = rootUris_1.next(); !rootUris_1_1.done; rootUris_1_1 = rootUris_1.next()) {
                                rootFolder = rootUris_1_1.value;
                                _loop_1(rootFolder);
                            }
                        }
                        catch (e_2_1) { e_2 = { error: e_2_1 }; }
                        finally {
                            try {
                                if (rootUris_1_1 && !rootUris_1_1.done && (_c = rootUris_1.return)) _c.call(rootUris_1);
                            }
                            finally { if (e_2) throw e_2.error; }
                        }
                        if (this.items.length === 0) {
                            this.items.push(new quick_open_model_1.QuickOpenItem({
                                label: 'No tasks found',
                                run: function (_mode) { return false; }
                            }));
                        }
                        this.quickOpenService.open(this, {
                            placeholder: 'Select a task to configure',
                            fuzzyMatchLabel: true,
                            fuzzySort: false
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    QuickOpenTask.prototype.runBuildOrTestTask = function (buildOrTestType) {
        return __awaiter(this, void 0, void 0, function () {
            var shouldRunBuildTask, buildOrTestTasks, defaultBuildOrTestTasks, defaultBuildOrTestTask, taskToRun;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        shouldRunBuildTask = buildOrTestType === 'build';
                        return [4 /*yield*/, this.init()];
                    case 1:
                        _a.sent();
                        if (this.items.length > 1 ||
                            this.items.length === 1 && this.items[0].getTask !== undefined) { // the item in `this.items` is not 'No tasks found'
                            buildOrTestTasks = this.items.filter(function (t) {
                                return shouldRunBuildTask ? task_protocol_1.TaskCustomization.isBuildTask(t.getTask()) : task_protocol_1.TaskCustomization.isTestTask(t.getTask());
                            });
                            this.actionProvider = undefined;
                            if (buildOrTestTasks.length > 0) { // build / test tasks are defined in the workspace
                                defaultBuildOrTestTasks = buildOrTestTasks.filter(function (t) {
                                    return shouldRunBuildTask ? task_protocol_1.TaskCustomization.isDefaultBuildTask(t.getTask()) : task_protocol_1.TaskCustomization.isDefaultTestTask(t.getTask());
                                });
                                if (defaultBuildOrTestTasks.length === 1) { // run the default build / test task
                                    defaultBuildOrTestTask = defaultBuildOrTestTasks[0];
                                    taskToRun = defaultBuildOrTestTask.getTask();
                                    if (this.taskDefinitionRegistry && !!this.taskDefinitionRegistry.getDefinition(taskToRun)) {
                                        this.taskService.run(taskToRun.source, taskToRun.label);
                                    }
                                    else {
                                        this.taskService.run(taskToRun._source, taskToRun.label);
                                    }
                                    return [2 /*return*/];
                                }
                                // if default build / test task is not found, or there are more than one default,
                                // display the list of build /test tasks to let the user decide which to run
                                this.items = buildOrTestTasks;
                            }
                            else { // no build / test tasks, display an action item to configure the build / test task
                                this.items = [new quick_open_model_1.QuickOpenItem({
                                        label: "No " + buildOrTestType + " task to run found. Configure " + (buildOrTestType.charAt(0).toUpperCase() + buildOrTestType.slice(1)) + " Task...",
                                        run: function (mode) {
                                            if (mode !== quick_open_model_1.QuickOpenMode.OPEN) {
                                                return false;
                                            }
                                            _this.init().then(function () {
                                                // update the `tasks.json` file, instead of running the task itself
                                                _this.items = _this.items.map(function (item) {
                                                    var newItem = new ConfigureBuildOrTestTaskQuickOpenItem(item.getTask(), _this.taskService, _this.workspaceService.isMultiRootWorkspaceOpened, item.options, _this.taskNameResolver, shouldRunBuildTask, _this.taskConfigurationManager);
                                                    newItem['taskDefinitionRegistry'] = _this.taskDefinitionRegistry;
                                                    return newItem;
                                                });
                                                _this.quickOpenService.open(_this, {
                                                    placeholder: "Select the task to be used as the default " + buildOrTestType + " task",
                                                    fuzzyMatchLabel: true,
                                                    fuzzySort: false
                                                });
                                            });
                                            return true;
                                        }
                                    })];
                            }
                        }
                        else { // no tasks are currently present, prompt users if they'd like to configure a task.
                            this.items = [
                                new quick_open_model_1.QuickOpenItem({
                                    label: "No " + buildOrTestType + " task to run found. Configure " + (buildOrTestType.charAt(0).toUpperCase() + buildOrTestType.slice(1)) + " Task...",
                                    run: function (mode) {
                                        if (mode !== quick_open_model_1.QuickOpenMode.OPEN) {
                                            return false;
                                        }
                                        _this.configure();
                                        return true;
                                    }
                                })
                            ];
                        }
                        this.quickOpenService.open(this, {
                            placeholder: "Select the " + buildOrTestType + " task to run",
                            fuzzyMatchLabel: true,
                            fuzzySort: false
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    QuickOpenTask.prototype.onType = function (lookFor, acceptor) {
        acceptor(this.items, this.actionProvider);
    };
    QuickOpenTask.prototype.getRunningTaskLabel = function (task) {
        return "Task id: " + task.taskId + ", label: " + task.config.label;
    };
    QuickOpenTask.prototype.getFilteredTasks = function (recentTasks, configuredTasks, providedTasks) {
        var _this = this;
        var filteredRecentTasks = [];
        recentTasks.forEach(function (recent) {
            var originalTaskConfig = __spread(configuredTasks, providedTasks).find(function (t) { return _this.taskDefinitionRegistry.compareTasks(recent, t); });
            if (originalTaskConfig) {
                filteredRecentTasks.push(originalTaskConfig);
            }
        });
        var filteredProvidedTasks = [];
        providedTasks.forEach(function (provided) {
            var exist = __spread(filteredRecentTasks, configuredTasks).some(function (t) { return _this.taskDefinitionRegistry.compareTasks(provided, t); });
            if (!exist) {
                filteredProvidedTasks.push(provided);
            }
        });
        var filteredConfiguredTasks = [];
        configuredTasks.forEach(function (configured) {
            var exist = filteredRecentTasks.some(function (t) { return _this.taskDefinitionRegistry.compareTasks(configured, t); });
            if (!exist) {
                filteredConfiguredTasks.push(configured);
            }
        });
        return {
            filteredRecentTasks: filteredRecentTasks, filteredConfiguredTasks: filteredConfiguredTasks, filteredProvidedTasks: filteredProvidedTasks
        };
    };
    QuickOpenTask.prototype.getGroupedTasksByWorkspaceFolder = function (tasks) {
        var e_3, _a, e_4, _b;
        var grouped = new Map();
        try {
            for (var tasks_2 = __values(tasks), tasks_2_1 = tasks_2.next(); !tasks_2_1.done; tasks_2_1 = tasks_2.next()) {
                var task = tasks_2_1.value;
                var folder = task._scope;
                if (grouped.has(folder)) {
                    grouped.get(folder).push(task);
                }
                else {
                    grouped.set(folder, [task]);
                }
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (tasks_2_1 && !tasks_2_1.done && (_a = tasks_2.return)) _a.call(tasks_2);
            }
            finally { if (e_3) throw e_3.error; }
        }
        try {
            for (var _c = __values(grouped.values()), _d = _c.next(); !_d.done; _d = _c.next()) {
                var taskConfigs = _d.value;
                taskConfigs.sort(function (t1, t2) { return t1.label.localeCompare(t2.label); });
            }
        }
        catch (e_4_1) { e_4 = { error: e_4_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
            }
            finally { if (e_4) throw e_4.error; }
        }
        return grouped;
    };
    __decorate([
        inversify_1.inject(task_service_1.TaskService),
        __metadata("design:type", task_service_1.TaskService)
    ], QuickOpenTask.prototype, "taskService", void 0);
    __decorate([
        inversify_1.inject(browser_1.QuickOpenService),
        __metadata("design:type", browser_1.QuickOpenService)
    ], QuickOpenTask.prototype, "quickOpenService", void 0);
    __decorate([
        inversify_1.inject(task_action_provider_1.TaskActionProvider),
        __metadata("design:type", task_action_provider_1.TaskActionProvider)
    ], QuickOpenTask.prototype, "taskActionProvider", void 0);
    __decorate([
        inversify_1.inject(browser_2.WorkspaceService),
        __metadata("design:type", browser_2.WorkspaceService)
    ], QuickOpenTask.prototype, "workspaceService", void 0);
    __decorate([
        inversify_1.inject(task_definition_registry_1.TaskDefinitionRegistry),
        __metadata("design:type", task_definition_registry_1.TaskDefinitionRegistry)
    ], QuickOpenTask.prototype, "taskDefinitionRegistry", void 0);
    __decorate([
        inversify_1.inject(task_name_resolver_1.TaskNameResolver),
        __metadata("design:type", task_name_resolver_1.TaskNameResolver)
    ], QuickOpenTask.prototype, "taskNameResolver", void 0);
    __decorate([
        inversify_1.inject(common_1.FileSystem),
        __metadata("design:type", Object)
    ], QuickOpenTask.prototype, "fileSystem", void 0);
    __decorate([
        inversify_1.inject(task_configuration_manager_1.TaskConfigurationManager),
        __metadata("design:type", task_configuration_manager_1.TaskConfigurationManager)
    ], QuickOpenTask.prototype, "taskConfigurationManager", void 0);
    __decorate([
        inversify_1.inject(browser_3.PreferenceService),
        __metadata("design:type", Object)
    ], QuickOpenTask.prototype, "preferences", void 0);
    QuickOpenTask = __decorate([
        inversify_1.injectable()
    ], QuickOpenTask);
    return QuickOpenTask;
}());
exports.QuickOpenTask = QuickOpenTask;
var TaskRunQuickOpenItem = /** @class */ (function (_super) {
    __extends(TaskRunQuickOpenItem, _super);
    function TaskRunQuickOpenItem(task, taskService, isMulti, options, taskNameResolver) {
        var _this = _super.call(this, options) || this;
        _this.task = task;
        _this.taskService = taskService;
        _this.isMulti = isMulti;
        _this.options = options;
        _this.taskNameResolver = taskNameResolver;
        return _this;
    }
    TaskRunQuickOpenItem.prototype.getTask = function () {
        return this.task;
    };
    TaskRunQuickOpenItem.prototype.getLabel = function () {
        return this.taskNameResolver.resolve(this.task);
    };
    TaskRunQuickOpenItem.prototype.getGroupLabel = function () {
        return this.options.groupLabel || '';
    };
    TaskRunQuickOpenItem.prototype.getDescription = function () {
        if (!this.isMulti) {
            return '';
        }
        if (this.taskDefinitionRegistry && !!this.taskDefinitionRegistry.getDefinition(this.task)) {
            if (this.task._scope) {
                return new uri_1.default(this.task._scope).displayName;
            }
            return this.task._source;
        }
        else {
            return new uri_1.default(this.task._source).displayName;
        }
    };
    TaskRunQuickOpenItem.prototype.run = function (mode) {
        if (mode !== quick_open_model_1.QuickOpenMode.OPEN) {
            return false;
        }
        if (this.taskDefinitionRegistry && !!this.taskDefinitionRegistry.getDefinition(this.task)) {
            this.taskService.run(this.task.source || this.task._source, this.task.label);
        }
        else {
            this.taskService.run(this.task._source, this.task.label);
        }
        return true;
    };
    return TaskRunQuickOpenItem;
}(quick_open_model_1.QuickOpenGroupItem));
exports.TaskRunQuickOpenItem = TaskRunQuickOpenItem;
var ConfigureBuildOrTestTaskQuickOpenItem = /** @class */ (function (_super) {
    __extends(ConfigureBuildOrTestTaskQuickOpenItem, _super);
    function ConfigureBuildOrTestTaskQuickOpenItem(task, taskService, isMulti, options, taskNameResolver, isBuildTask, taskConfigurationManager) {
        var _this = _super.call(this, task, taskService, isMulti, options, taskNameResolver) || this;
        _this.task = task;
        _this.taskService = taskService;
        _this.isMulti = isMulti;
        _this.options = options;
        _this.taskNameResolver = taskNameResolver;
        _this.isBuildTask = isBuildTask;
        _this.taskConfigurationManager = taskConfigurationManager;
        return _this;
    }
    ConfigureBuildOrTestTaskQuickOpenItem.prototype.run = function (mode) {
        var _this = this;
        if (mode !== quick_open_model_1.QuickOpenMode.OPEN) {
            return false;
        }
        this.taskService.updateTaskConfiguration(this.task, { group: { kind: this.isBuildTask ? 'build' : 'test', isDefault: true } })
            .then(function () {
            if (_this.task._scope) {
                _this.taskConfigurationManager.openConfiguration(_this.task._scope);
            }
        });
        return true;
    };
    return ConfigureBuildOrTestTaskQuickOpenItem;
}(TaskRunQuickOpenItem));
exports.ConfigureBuildOrTestTaskQuickOpenItem = ConfigureBuildOrTestTaskQuickOpenItem;
var TaskAttachQuickOpenItem = /** @class */ (function (_super) {
    __extends(TaskAttachQuickOpenItem, _super);
    function TaskAttachQuickOpenItem(task, taskLabel, taskService) {
        var _this = _super.call(this) || this;
        _this.task = task;
        _this.taskLabel = taskLabel;
        _this.taskService = taskService;
        return _this;
    }
    TaskAttachQuickOpenItem.prototype.getLabel = function () {
        return this.taskLabel;
    };
    TaskAttachQuickOpenItem.prototype.run = function (mode) {
        if (mode !== quick_open_model_1.QuickOpenMode.OPEN) {
            return false;
        }
        if (this.task.terminalId) {
            this.taskService.attach(this.task.terminalId, this.task.taskId);
        }
        return true;
    };
    return TaskAttachQuickOpenItem;
}(quick_open_model_1.QuickOpenItem));
exports.TaskAttachQuickOpenItem = TaskAttachQuickOpenItem;
var TaskConfigureQuickOpenItem = /** @class */ (function (_super) {
    __extends(TaskConfigureQuickOpenItem, _super);
    function TaskConfigureQuickOpenItem(task, taskService, taskNameResolver, workspaceService, isMulti, options) {
        var _this = _super.call(this, options) || this;
        _this.task = task;
        _this.taskService = taskService;
        _this.taskNameResolver = taskNameResolver;
        _this.workspaceService = workspaceService;
        _this.isMulti = isMulti;
        _this.options = options;
        var stat = _this.workspaceService.workspace;
        _this.isMulti = stat ? !stat.isDirectory : false;
        return _this;
    }
    TaskConfigureQuickOpenItem.prototype.getLabel = function () {
        return this.taskNameResolver.resolve(this.task);
    };
    TaskConfigureQuickOpenItem.prototype.getGroupLabel = function () {
        return this.options.groupLabel || '';
    };
    TaskConfigureQuickOpenItem.prototype.getDescription = function () {
        if (!this.isMulti) {
            return '';
        }
        if (this.taskDefinitionRegistry && !!this.taskDefinitionRegistry.getDefinition(this.task)) {
            if (this.task._scope) {
                return new uri_1.default(this.task._scope).displayName;
            }
            return this.task._source;
        }
        else {
            return new uri_1.default(this.task._source).displayName;
        }
    };
    TaskConfigureQuickOpenItem.prototype.run = function (mode) {
        if (mode !== quick_open_model_1.QuickOpenMode.OPEN) {
            return false;
        }
        this.taskService.configure(this.task);
        return true;
    };
    return TaskConfigureQuickOpenItem;
}(quick_open_model_1.QuickOpenGroupItem));
exports.TaskConfigureQuickOpenItem = TaskConfigureQuickOpenItem;
var TaskTerminateQuickOpen = /** @class */ (function () {
    function TaskTerminateQuickOpen() {
    }
    TaskTerminateQuickOpen.prototype.onType = function (_lookFor, acceptor) {
        return __awaiter(this, void 0, void 0, function () {
            var items, runningTasks;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        items = [];
                        return [4 /*yield*/, this.taskService.getRunningTasks()];
                    case 1:
                        runningTasks = _a.sent();
                        if (runningTasks.length <= 0) {
                            items.push(new quick_open_model_1.QuickOpenItem({
                                label: 'No task is currently running',
                                run: function () { return false; },
                            }));
                        }
                        else {
                            runningTasks.forEach(function (task) {
                                items.push(new quick_open_model_1.QuickOpenItem({
                                    label: task.config.label,
                                    run: function (mode) {
                                        if (mode !== quick_open_model_1.QuickOpenMode.OPEN) {
                                            return false;
                                        }
                                        _this.taskService.kill(task.taskId);
                                        return true;
                                    }
                                }));
                            });
                            if (runningTasks.length > 1) {
                                items.push(new quick_open_model_1.QuickOpenItem({
                                    label: 'All running tasks',
                                    run: function (mode) {
                                        if (mode !== quick_open_model_1.QuickOpenMode.OPEN) {
                                            return false;
                                        }
                                        runningTasks.forEach(function (t) {
                                            _this.taskService.kill(t.taskId);
                                        });
                                        return true;
                                    }
                                }));
                            }
                        }
                        acceptor(items);
                        return [2 /*return*/];
                }
            });
        });
    };
    TaskTerminateQuickOpen.prototype.open = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.quickOpenService.open(this, {
                    placeholder: 'Select task to terminate',
                    fuzzyMatchLabel: true,
                    fuzzyMatchDescription: true,
                });
                return [2 /*return*/];
            });
        });
    };
    __decorate([
        inversify_1.inject(browser_1.QuickOpenService),
        __metadata("design:type", browser_1.QuickOpenService)
    ], TaskTerminateQuickOpen.prototype, "quickOpenService", void 0);
    __decorate([
        inversify_1.inject(task_service_1.TaskService),
        __metadata("design:type", task_service_1.TaskService)
    ], TaskTerminateQuickOpen.prototype, "taskService", void 0);
    TaskTerminateQuickOpen = __decorate([
        inversify_1.injectable()
    ], TaskTerminateQuickOpen);
    return TaskTerminateQuickOpen;
}());
exports.TaskTerminateQuickOpen = TaskTerminateQuickOpen;
var TaskRunningQuickOpen = /** @class */ (function () {
    function TaskRunningQuickOpen() {
    }
    TaskRunningQuickOpen.prototype.onType = function (_lookFor, acceptor) {
        return __awaiter(this, void 0, void 0, function () {
            var items, runningTasks;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        items = [];
                        return [4 /*yield*/, this.taskService.getRunningTasks()];
                    case 1:
                        runningTasks = _a.sent();
                        if (runningTasks.length <= 0) {
                            items.push(new quick_open_model_1.QuickOpenItem({
                                label: 'No task is currently running',
                                run: function () { return false; },
                            }));
                        }
                        else {
                            runningTasks.forEach(function (task) {
                                items.push(new quick_open_model_1.QuickOpenItem({
                                    label: task.config.label,
                                    run: function (mode) {
                                        if (mode !== quick_open_model_1.QuickOpenMode.OPEN) {
                                            return false;
                                        }
                                        if (task.terminalId) {
                                            var terminal = _this.terminalService.getById('terminal-' + task.terminalId);
                                            if (terminal) {
                                                _this.terminalService.open(terminal);
                                            }
                                        }
                                        return true;
                                    }
                                }));
                            });
                        }
                        acceptor(items);
                        return [2 /*return*/];
                }
            });
        });
    };
    TaskRunningQuickOpen.prototype.open = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.quickOpenService.open(this, {
                    placeholder: 'Select the task to show its output',
                    fuzzyMatchLabel: true,
                    fuzzyMatchDescription: true,
                });
                return [2 /*return*/];
            });
        });
    };
    __decorate([
        inversify_1.inject(browser_1.QuickOpenService),
        __metadata("design:type", browser_1.QuickOpenService)
    ], TaskRunningQuickOpen.prototype, "quickOpenService", void 0);
    __decorate([
        inversify_1.inject(task_service_1.TaskService),
        __metadata("design:type", task_service_1.TaskService)
    ], TaskRunningQuickOpen.prototype, "taskService", void 0);
    __decorate([
        inversify_1.inject(terminal_service_1.TerminalService),
        __metadata("design:type", Object)
    ], TaskRunningQuickOpen.prototype, "terminalService", void 0);
    TaskRunningQuickOpen = __decorate([
        inversify_1.injectable()
    ], TaskRunningQuickOpen);
    return TaskRunningQuickOpen;
}());
exports.TaskRunningQuickOpen = TaskRunningQuickOpen;


/***/ }),

/***/ "./node_modules/@theia/task/lib/browser/task-action-provider.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@theia/task/lib/browser/task-action-provider.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2019 Red Hat, Inc. and others.
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
var task_service_1 = __webpack_require__(/*! ./task-service */ "./node_modules/@theia/task/lib/browser/task-service.js");
var quick_open_task_1 = __webpack_require__(/*! ./quick-open-task */ "./node_modules/@theia/task/lib/browser/quick-open-task.js");
var quick_open_1 = __webpack_require__(/*! @theia/core/lib/browser/quick-open */ "./node_modules/@theia/core/lib/browser/quick-open/index.js");
var theming_1 = __webpack_require__(/*! @theia/core/lib/browser/theming */ "./node_modules/@theia/core/lib/browser/theming.js");
var ConfigureTaskAction = /** @class */ (function (_super) {
    __extends(ConfigureTaskAction, _super);
    function ConfigureTaskAction() {
        var _this = _super.call(this, { id: 'configure:task' }) || this;
        _this.updateTheme();
        theming_1.ThemeService.get().onThemeChange(function () { return _this.updateTheme(); });
        return _this;
    }
    ConfigureTaskAction.prototype.run = function (item) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (item instanceof quick_open_task_1.TaskRunQuickOpenItem) {
                    this.taskService.configure(item.getTask());
                }
                return [2 /*return*/];
            });
        });
    };
    ConfigureTaskAction.prototype.updateTheme = function () {
        var theme = theming_1.ThemeService.get().getCurrentTheme().id;
        if (theme === 'dark') {
            this.class = 'quick-open-task-configure-dark';
        }
        else if (theme === 'light') {
            this.class = 'quick-open-task-configure-bright';
        }
    };
    __decorate([
        inversify_1.inject(task_service_1.TaskService),
        __metadata("design:type", task_service_1.TaskService)
    ], ConfigureTaskAction.prototype, "taskService", void 0);
    ConfigureTaskAction = __decorate([
        inversify_1.injectable(),
        __metadata("design:paramtypes", [])
    ], ConfigureTaskAction);
    return ConfigureTaskAction;
}(quick_open_1.QuickOpenBaseAction));
exports.ConfigureTaskAction = ConfigureTaskAction;
var TaskActionProvider = /** @class */ (function () {
    function TaskActionProvider() {
    }
    TaskActionProvider.prototype.hasActions = function () {
        return true;
    };
    TaskActionProvider.prototype.getActions = function () {
        return [this.configureTaskAction];
    };
    __decorate([
        inversify_1.inject(ConfigureTaskAction),
        __metadata("design:type", ConfigureTaskAction)
    ], TaskActionProvider.prototype, "configureTaskAction", void 0);
    TaskActionProvider = __decorate([
        inversify_1.injectable()
    ], TaskActionProvider);
    return TaskActionProvider;
}());
exports.TaskActionProvider = TaskActionProvider;


/***/ }),

/***/ "./node_modules/@theia/task/lib/browser/task-configuration-manager.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@theia/task/lib/browser/task-configuration-manager.js ***!
  \****************************************************************************/
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
var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
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
var debounce = __webpack_require__(/*! p-debounce */ "./node_modules/p-debounce/index.js");
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var uri_1 = __webpack_require__(/*! @theia/core/lib/common/uri */ "./node_modules/@theia/core/lib/common/uri.js");
var event_1 = __webpack_require__(/*! @theia/core/lib/common/event */ "./node_modules/@theia/core/lib/common/event.js");
var browser_1 = __webpack_require__(/*! @theia/editor/lib/browser */ "./node_modules/@theia/editor/lib/browser/index.js");
var browser_2 = __webpack_require__(/*! @theia/core/lib/browser */ "./node_modules/@theia/core/lib/browser/index.js");
var quick_pick_service_1 = __webpack_require__(/*! @theia/core/lib/common/quick-pick-service */ "./node_modules/@theia/core/lib/common/quick-pick-service.js");
var workspace_service_1 = __webpack_require__(/*! @theia/workspace/lib/browser/workspace-service */ "./node_modules/@theia/workspace/lib/browser/workspace-service.js");
var task_configuration_model_1 = __webpack_require__(/*! ./task-configuration-model */ "./node_modules/@theia/task/lib/browser/task-configuration-model.js");
var task_templates_1 = __webpack_require__(/*! ./task-templates */ "./node_modules/@theia/task/lib/browser/task-templates.js");
var workspace_variable_contribution_1 = __webpack_require__(/*! @theia/workspace/lib/browser/workspace-variable-contribution */ "./node_modules/@theia/workspace/lib/browser/workspace-variable-contribution.js");
var common_1 = __webpack_require__(/*! @theia/filesystem/lib/common */ "./node_modules/@theia/filesystem/lib/common/index.js");
var filesystem_watcher_protocol_1 = __webpack_require__(/*! @theia/filesystem/lib/common/filesystem-watcher-protocol */ "./node_modules/@theia/filesystem/lib/common/filesystem-watcher-protocol.js");
var preference_configurations_1 = __webpack_require__(/*! @theia/core/lib/browser/preferences/preference-configurations */ "./node_modules/@theia/core/lib/browser/preferences/preference-configurations.js");
var TaskConfigurationManager = /** @class */ (function () {
    function TaskConfigurationManager() {
        var _this = this;
        this.onDidChangeTaskConfigEmitter = new event_1.Emitter();
        this.onDidChangeTaskConfig = this.onDidChangeTaskConfigEmitter.event;
        this.models = new Map();
        this.updateModels = debounce(function () { return __awaiter(_this, void 0, void 0, function () {
            var roots, toDelete, _loop_1, this_1, roots_1, roots_1_1, rootStat, toDelete_1, toDelete_1_1, uri, model;
            var e_1, _a, e_2, _b;
            var _this = this;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, this.workspaceService.roots];
                    case 1:
                        roots = _c.sent();
                        toDelete = new Set(this.models.keys());
                        _loop_1 = function (rootStat) {
                            var key = rootStat.uri;
                            toDelete.delete(key);
                            if (!this_1.models.has(key)) {
                                var model = new task_configuration_model_1.TaskConfigurationModel(key, this_1.preferences);
                                model.onDidChange(function () { return _this.onDidChangeTaskConfigEmitter.fire({ uri: key, type: filesystem_watcher_protocol_1.FileChangeType.UPDATED }); });
                                model.onDispose(function () { return _this.models.delete(key); });
                                this_1.models.set(key, model);
                                this_1.onDidChangeTaskConfigEmitter.fire({ uri: key, type: filesystem_watcher_protocol_1.FileChangeType.UPDATED });
                            }
                        };
                        this_1 = this;
                        try {
                            for (roots_1 = __values(roots), roots_1_1 = roots_1.next(); !roots_1_1.done; roots_1_1 = roots_1.next()) {
                                rootStat = roots_1_1.value;
                                _loop_1(rootStat);
                            }
                        }
                        catch (e_1_1) { e_1 = { error: e_1_1 }; }
                        finally {
                            try {
                                if (roots_1_1 && !roots_1_1.done && (_a = roots_1.return)) _a.call(roots_1);
                            }
                            finally { if (e_1) throw e_1.error; }
                        }
                        try {
                            for (toDelete_1 = __values(toDelete), toDelete_1_1 = toDelete_1.next(); !toDelete_1_1.done; toDelete_1_1 = toDelete_1.next()) {
                                uri = toDelete_1_1.value;
                                model = this.models.get(uri);
                                if (model) {
                                    model.dispose();
                                }
                                this.onDidChangeTaskConfigEmitter.fire({ uri: uri, type: filesystem_watcher_protocol_1.FileChangeType.DELETED });
                            }
                        }
                        catch (e_2_1) { e_2 = { error: e_2_1 }; }
                        finally {
                            try {
                                if (toDelete_1_1 && !toDelete_1_1.done && (_b = toDelete_1.return)) _b.call(toDelete_1);
                            }
                            finally { if (e_2) throw e_2.error; }
                        }
                        return [2 /*return*/];
                }
            });
        }); }, 500);
    }
    TaskConfigurationManager.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.updateModels();
                this.preferences.onPreferenceChanged(function (e) {
                    if (e.preferenceName === 'tasks') {
                        _this.updateModels();
                    }
                });
                this.workspaceService.onWorkspaceChanged(function () {
                    _this.updateModels();
                });
                return [2 /*return*/];
            });
        });
    };
    TaskConfigurationManager.prototype.getTasks = function (sourceFolderUri) {
        if (this.models.has(sourceFolderUri)) {
            var taskPrefModel = this.models.get(sourceFolderUri);
            return taskPrefModel.configurations;
        }
        return [];
    };
    TaskConfigurationManager.prototype.getTask = function (name, sourceFolderUri) {
        var e_3, _a;
        var taskPrefModel = this.getModel(sourceFolderUri);
        if (taskPrefModel) {
            try {
                for (var _b = __values(taskPrefModel.configurations), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var configuration = _c.value;
                    if (configuration.name === name) {
                        return configuration;
                    }
                }
            }
            catch (e_3_1) { e_3 = { error: e_3_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_3) throw e_3.error; }
            }
        }
    };
    TaskConfigurationManager.prototype.openConfiguration = function (sourceFolderUri) {
        return __awaiter(this, void 0, void 0, function () {
            var taskPrefModel;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        taskPrefModel = this.getModel(sourceFolderUri);
                        if (!taskPrefModel) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.doOpen(taskPrefModel)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    TaskConfigurationManager.prototype.addTaskConfiguration = function (sourceFolderUri, taskConfig) {
        return __awaiter(this, void 0, void 0, function () {
            var taskPrefModel, configurations;
            return __generator(this, function (_a) {
                taskPrefModel = this.getModel(sourceFolderUri);
                if (taskPrefModel) {
                    configurations = taskPrefModel.configurations;
                    return [2 /*return*/, this.setTaskConfigurations(sourceFolderUri, __spread(configurations, [taskConfig]))];
                }
                return [2 /*return*/];
            });
        });
    };
    TaskConfigurationManager.prototype.setTaskConfigurations = function (sourceFolderUri, taskConfigs) {
        return __awaiter(this, void 0, void 0, function () {
            var taskPrefModel;
            return __generator(this, function (_a) {
                taskPrefModel = this.getModel(sourceFolderUri);
                if (taskPrefModel) {
                    return [2 /*return*/, taskPrefModel.setConfigurations(taskConfigs)];
                }
                return [2 /*return*/];
            });
        });
    };
    TaskConfigurationManager.prototype.getModel = function (sourceFolderUri) {
        var e_4, _a;
        if (!sourceFolderUri) {
            return undefined;
        }
        try {
            for (var _b = __values(this.models.values()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var model = _c.value;
                if (model.workspaceFolderUri === sourceFolderUri) {
                    return model;
                }
            }
        }
        catch (e_4_1) { e_4 = { error: e_4_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_4) throw e_4.error; }
        }
    };
    TaskConfigurationManager.prototype.doOpen = function (model) {
        return __awaiter(this, void 0, void 0, function () {
            var uri;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uri = model.uri;
                        if (!!uri) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.doCreate(model)];
                    case 1:
                        uri = _a.sent();
                        _a.label = 2;
                    case 2:
                        if (uri) {
                            return [2 /*return*/, this.editorManager.open(uri, {
                                    mode: 'activate'
                                })];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    TaskConfigurationManager.prototype.doCreate = function (model) {
        return __awaiter(this, void 0, void 0, function () {
            var content, configUri, uri, fileStat;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getInitialConfigurationContent()];
                    case 1:
                        content = _a.sent();
                        if (!content) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.preferences.set('tasks', {}, browser_2.PreferenceScope.Folder, model.workspaceFolderUri)];
                    case 2:
                        _a.sent(); // create dummy tasks.json in the correct place
                        configUri = this.preferences.resolve('tasks', [], model.workspaceFolderUri).configUri;
                        uri = void 0;
                        if (configUri && configUri.path.base === 'tasks.json') {
                            uri = configUri;
                        }
                        else { // fallback
                            uri = new uri_1.default(model.workspaceFolderUri).resolve(this.preferenceConfigurations.getPaths()[0] + "/tasks.json");
                        }
                        return [4 /*yield*/, this.filesystem.getFileStat(uri.toString())];
                    case 3:
                        fileStat = _a.sent();
                        if (!fileStat) {
                            throw new Error("file not found: " + uri.toString());
                        }
                        try {
                            this.filesystem.setContent(fileStat, content);
                        }
                        catch (e) {
                            if (!common_1.FileSystemError.FileExists.is(e)) {
                                throw e;
                            }
                        }
                        return [2 /*return*/, uri];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    TaskConfigurationManager.prototype.getInitialConfigurationContent = function () {
        return __awaiter(this, void 0, void 0, function () {
            var selected;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.quickPick.show(this.taskTemplateSelector.selectTemplates(), {
                            placeholder: 'Select a Task Template'
                        })];
                    case 1:
                        selected = _a.sent();
                        if (selected) {
                            return [2 /*return*/, selected.content];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        inversify_1.inject(workspace_service_1.WorkspaceService),
        __metadata("design:type", workspace_service_1.WorkspaceService)
    ], TaskConfigurationManager.prototype, "workspaceService", void 0);
    __decorate([
        inversify_1.inject(browser_1.EditorManager),
        __metadata("design:type", browser_1.EditorManager)
    ], TaskConfigurationManager.prototype, "editorManager", void 0);
    __decorate([
        inversify_1.inject(quick_pick_service_1.QuickPickService),
        __metadata("design:type", Object)
    ], TaskConfigurationManager.prototype, "quickPick", void 0);
    __decorate([
        inversify_1.inject(common_1.FileSystem),
        __metadata("design:type", Object)
    ], TaskConfigurationManager.prototype, "filesystem", void 0);
    __decorate([
        inversify_1.inject(browser_2.PreferenceService),
        __metadata("design:type", Object)
    ], TaskConfigurationManager.prototype, "preferences", void 0);
    __decorate([
        inversify_1.inject(preference_configurations_1.PreferenceConfigurations),
        __metadata("design:type", preference_configurations_1.PreferenceConfigurations)
    ], TaskConfigurationManager.prototype, "preferenceConfigurations", void 0);
    __decorate([
        inversify_1.inject(workspace_variable_contribution_1.WorkspaceVariableContribution),
        __metadata("design:type", workspace_variable_contribution_1.WorkspaceVariableContribution)
    ], TaskConfigurationManager.prototype, "workspaceVariables", void 0);
    __decorate([
        inversify_1.inject(task_templates_1.TaskTemplateSelector),
        __metadata("design:type", task_templates_1.TaskTemplateSelector)
    ], TaskConfigurationManager.prototype, "taskTemplateSelector", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], TaskConfigurationManager.prototype, "init", null);
    TaskConfigurationManager = __decorate([
        inversify_1.injectable()
    ], TaskConfigurationManager);
    return TaskConfigurationManager;
}());
exports.TaskConfigurationManager = TaskConfigurationManager;


/***/ }),

/***/ "./node_modules/@theia/task/lib/browser/task-configuration-model.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@theia/task/lib/browser/task-configuration-model.js ***!
  \**************************************************************************/
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
var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
Object.defineProperty(exports, "__esModule", { value: true });
var event_1 = __webpack_require__(/*! @theia/core/lib/common/event */ "./node_modules/@theia/core/lib/common/event.js");
var disposable_1 = __webpack_require__(/*! @theia/core/lib/common/disposable */ "./node_modules/@theia/core/lib/common/disposable.js");
var preference_service_1 = __webpack_require__(/*! @theia/core/lib/browser/preferences/preference-service */ "./node_modules/@theia/core/lib/browser/preferences/preference-service.js");
var TaskConfigurationModel = /** @class */ (function () {
    function TaskConfigurationModel(workspaceFolderUri, preferences) {
        var _this = this;
        this.workspaceFolderUri = workspaceFolderUri;
        this.preferences = preferences;
        this.onDidChangeEmitter = new event_1.Emitter();
        this.onDidChange = this.onDidChangeEmitter.event;
        this.toDispose = new disposable_1.DisposableCollection(this.onDidChangeEmitter);
        this.reconcile();
        this.toDispose.push(this.preferences.onPreferenceChanged(function (e) {
            if (e.preferenceName === 'tasks' && e.affects(workspaceFolderUri)) {
                _this.reconcile();
            }
        }));
    }
    Object.defineProperty(TaskConfigurationModel.prototype, "uri", {
        get: function () {
            return this.json.uri;
        },
        enumerable: true,
        configurable: true
    });
    TaskConfigurationModel.prototype.dispose = function () {
        this.toDispose.dispose();
    };
    Object.defineProperty(TaskConfigurationModel.prototype, "onDispose", {
        get: function () {
            return this.toDispose.onDispose;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TaskConfigurationModel.prototype, "configurations", {
        get: function () {
            return this.json.configurations;
        },
        enumerable: true,
        configurable: true
    });
    TaskConfigurationModel.prototype.reconcile = function () {
        this.json = this.parseConfigurations();
        this.onDidChangeEmitter.fire(undefined);
    };
    TaskConfigurationModel.prototype.setConfigurations = function (value) {
        return this.preferences.set('tasks.tasks', value, preference_service_1.PreferenceScope.Folder, this.workspaceFolderUri);
    };
    TaskConfigurationModel.prototype.parseConfigurations = function () {
        var e_1, _a;
        var configurations = [];
        // tslint:disable-next-line:no-any
        var _b = this.preferences.resolve('tasks', undefined, this.workspaceFolderUri), configUri = _b.configUri, value = _b.value;
        if (value && typeof value === 'object' && 'tasks' in value) {
            if (Array.isArray(value.tasks)) {
                try {
                    for (var _c = __values(value.tasks), _d = _c.next(); !_d.done; _d = _c.next()) {
                        var taskConfig = _d.value;
                        configurations.push(taskConfig);
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
            }
        }
        return {
            uri: configUri,
            configurations: configurations
        };
    };
    return TaskConfigurationModel;
}());
exports.TaskConfigurationModel = TaskConfigurationModel;


/***/ }),

/***/ "./node_modules/@theia/task/lib/browser/task-configurations.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@theia/task/lib/browser/task-configurations.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2017-2018 Ericsson and others.
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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
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
var Ajv = __webpack_require__(/*! ajv */ "./node_modules/ajv/lib/ajv.js");
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var task_definition_registry_1 = __webpack_require__(/*! ./task-definition-registry */ "./node_modules/@theia/task/lib/browser/task-definition-registry.js");
var provided_task_configurations_1 = __webpack_require__(/*! ./provided-task-configurations */ "./node_modules/@theia/task/lib/browser/provided-task-configurations.js");
var task_configuration_manager_1 = __webpack_require__(/*! ./task-configuration-manager */ "./node_modules/@theia/task/lib/browser/task-configuration-manager.js");
var task_schema_updater_1 = __webpack_require__(/*! ./task-schema-updater */ "./node_modules/@theia/task/lib/browser/task-schema-updater.js");
var task_source_resolver_1 = __webpack_require__(/*! ./task-source-resolver */ "./node_modules/@theia/task/lib/browser/task-source-resolver.js");
var common_1 = __webpack_require__(/*! @theia/core/lib/common */ "./node_modules/@theia/core/lib/common/index.js");
var uri_1 = __webpack_require__(/*! @theia/core/lib/common/uri */ "./node_modules/@theia/core/lib/common/uri.js");
var filesystem_watcher_protocol_1 = __webpack_require__(/*! @theia/filesystem/lib/common/filesystem-watcher-protocol */ "./node_modules/@theia/filesystem/lib/common/filesystem-watcher-protocol.js");
var browser_1 = __webpack_require__(/*! @theia/workspace/lib/browser */ "./node_modules/@theia/workspace/lib/browser/index.js");
var browser_2 = __webpack_require__(/*! @theia/core/lib/browser */ "./node_modules/@theia/core/lib/browser/index.js");
/**
 * Watches a tasks.json configuration file and provides a parsed version of the contained task configurations
 */
var TaskConfigurations = /** @class */ (function () {
    function TaskConfigurations() {
        var _this = this;
        this.toDispose = new common_1.DisposableCollection();
        /**
         * Map of source (path of root folder that the task configs come from) and task config map.
         * For the inner map (i.e., task config map), the key is task label and value TaskConfiguration
         */
        this.tasksMap = new Map();
        /**
         * Map of source (path of root folder that the task configs come from) and task customizations map.
         */
        this.taskCustomizationMap = new Map();
        /** last directory element under which we look for task config */
        this.TASKFILEPATH = '.theia';
        /** task configuration file name */
        this.TASKFILE = 'tasks.json';
        this.client = undefined;
        /**
         * Map of source (path of root folder that the task configs come from) and raw task configurations / customizations.
         * This map is used to store the data from `tasks.json` files in workspace.
         */
        this.rawTaskConfigurations = new Map();
        this.toDispose.push(common_1.Disposable.create(function () {
            _this.tasksMap.clear();
            _this.taskCustomizationMap.clear();
            _this.rawTaskConfigurations.clear();
            _this.client = undefined;
        }));
    }
    TaskConfigurations.prototype.init = function () {
        var _this = this;
        this.toDispose.push(this.taskConfigurationManager.onDidChangeTaskConfig(function (change) { return __awaiter(_this, void 0, void 0, function () {
            var err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.onDidTaskFileChange([change])];
                    case 1:
                        _a.sent();
                        if (this.client) {
                            this.client.taskConfigurationChanged(this.getTaskLabels());
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        err_1 = _a.sent();
                        console.error(err_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); }));
        this.reorgnizeTasks();
        this.toDispose.push(this.taskSchemaUpdater.onDidChangeTaskSchema(function () { return _this.reorgnizeTasks(); }));
    };
    TaskConfigurations.prototype.setClient = function (client) {
        this.client = client;
    };
    TaskConfigurations.prototype.dispose = function () {
        this.toDispose.dispose();
    };
    /** returns the list of known task labels */
    TaskConfigurations.prototype.getTaskLabels = function () {
        return Array.from(this.tasksMap.values()).reduce(function (acc, labelConfigMap) { return acc.concat(Array.from(labelConfigMap.keys())); }, []);
    };
    /**
     * returns a collection of known tasks, which includes:
     * - all the configured tasks in `tasks.json`, and
     * - the customized detected tasks.
     *
     * The invalid task configs are not returned.
     */
    TaskConfigurations.prototype.getTasks = function () {
        return __awaiter(this, void 0, void 0, function () {
            var configuredTasks, detectedTasksAsConfigured, _a, _b, _c, rootFolder, customizations, customizations_1, customizations_1_1, cus, detected, e_1_1, e_2_1;
            var e_2, _d, e_1, _e;
            return __generator(this, function (_f) {
                switch (_f.label) {
                    case 0:
                        configuredTasks = Array.from(this.tasksMap.values()).reduce(function (acc, labelConfigMap) { return acc.concat(Array.from(labelConfigMap.values())); }, []);
                        detectedTasksAsConfigured = [];
                        _f.label = 1;
                    case 1:
                        _f.trys.push([1, 12, 13, 14]);
                        _a = __values(Array.from(this.taskCustomizationMap.entries())), _b = _a.next();
                        _f.label = 2;
                    case 2:
                        if (!!_b.done) return [3 /*break*/, 11];
                        _c = __read(_b.value, 2), rootFolder = _c[0], customizations = _c[1];
                        _f.label = 3;
                    case 3:
                        _f.trys.push([3, 8, 9, 10]);
                        customizations_1 = (e_1 = void 0, __values(customizations)), customizations_1_1 = customizations_1.next();
                        _f.label = 4;
                    case 4:
                        if (!!customizations_1_1.done) return [3 /*break*/, 7];
                        cus = customizations_1_1.value;
                        return [4 /*yield*/, this.providedTaskConfigurations.getTaskToCustomize(cus, rootFolder)];
                    case 5:
                        detected = _f.sent();
                        if (detected) {
                            detectedTasksAsConfigured.push(__assign({}, detected, cus));
                        }
                        _f.label = 6;
                    case 6:
                        customizations_1_1 = customizations_1.next();
                        return [3 /*break*/, 4];
                    case 7: return [3 /*break*/, 10];
                    case 8:
                        e_1_1 = _f.sent();
                        e_1 = { error: e_1_1 };
                        return [3 /*break*/, 10];
                    case 9:
                        try {
                            if (customizations_1_1 && !customizations_1_1.done && (_e = customizations_1.return)) _e.call(customizations_1);
                        }
                        finally { if (e_1) throw e_1.error; }
                        return [7 /*endfinally*/];
                    case 10:
                        _b = _a.next();
                        return [3 /*break*/, 2];
                    case 11: return [3 /*break*/, 14];
                    case 12:
                        e_2_1 = _f.sent();
                        e_2 = { error: e_2_1 };
                        return [3 /*break*/, 14];
                    case 13:
                        try {
                            if (_b && !_b.done && (_d = _a.return)) _d.call(_a);
                        }
                        finally { if (e_2) throw e_2.error; }
                        return [7 /*endfinally*/];
                    case 14: return [2 /*return*/, __spread(configuredTasks, detectedTasksAsConfigured)];
                }
            });
        });
    };
    /**
     * returns a collection of invalid task configs as per the task schema defined in Theia.
     */
    TaskConfigurations.prototype.getInvalidTaskConfigurations = function () {
        var e_3, _a, e_4, _b;
        var invalidTaskConfigs = [];
        try {
            for (var _c = __values(this.rawTaskConfigurations.values()), _d = _c.next(); !_d.done; _d = _c.next()) {
                var taskConfigs = _d.value;
                try {
                    for (var taskConfigs_1 = (e_4 = void 0, __values(taskConfigs)), taskConfigs_1_1 = taskConfigs_1.next(); !taskConfigs_1_1.done; taskConfigs_1_1 = taskConfigs_1.next()) {
                        var taskConfig = taskConfigs_1_1.value;
                        var isValid = this.isTaskConfigValid(taskConfig);
                        if (!isValid) {
                            invalidTaskConfigs.push(taskConfig);
                        }
                    }
                }
                catch (e_4_1) { e_4 = { error: e_4_1 }; }
                finally {
                    try {
                        if (taskConfigs_1_1 && !taskConfigs_1_1.done && (_b = taskConfigs_1.return)) _b.call(taskConfigs_1);
                    }
                    finally { if (e_4) throw e_4.error; }
                }
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
            }
            finally { if (e_3) throw e_3.error; }
        }
        return invalidTaskConfigs;
    };
    /** returns the task configuration for a given label or undefined if none */
    TaskConfigurations.prototype.getTask = function (rootFolderPath, taskLabel) {
        var labelConfigMap = this.tasksMap.get(rootFolderPath);
        if (labelConfigMap) {
            return labelConfigMap.get(taskLabel);
        }
    };
    /** removes tasks configured in the given task config file */
    TaskConfigurations.prototype.removeTasks = function (configFileUri) {
        var source = this.getSourceFolderFromConfigUri(configFileUri);
        this.tasksMap.delete(source);
        this.taskCustomizationMap.delete(source);
    };
    /**
     * Removes task customization objects found in the given task config file from the memory.
     * Please note: this function does not modify the task config file.
     */
    TaskConfigurations.prototype.removeTaskCustomizations = function (configFileUri) {
        var source = this.getSourceFolderFromConfigUri(configFileUri);
        this.taskCustomizationMap.delete(source);
    };
    /**
     * Returns the task customizations by type from a given root folder in the workspace.
     * @param type the type of task customizations
     * @param rootFolder the root folder to find task customizations from. If `undefined`, this function returns an empty array.
     */
    TaskConfigurations.prototype.getTaskCustomizations = function (type, rootFolder) {
        if (!rootFolder) {
            return [];
        }
        var customizationInRootFolder = this.taskCustomizationMap.get(new uri_1.default(rootFolder).toString());
        if (customizationInRootFolder) {
            return customizationInRootFolder.filter(function (c) { return c.type === type; });
        }
        return [];
    };
    /**
     * Returns the customization object in `tasks.json` for the given task. Please note, this function
     * returns `undefined` if the given task is not a detected task, because configured tasks don't need
     * customization objects - users can modify its config directly in `tasks.json`.
     * @param taskConfig The task config, which could either be a configured task or a detected task.
     */
    TaskConfigurations.prototype.getCustomizationForTask = function (taskConfig) {
        if (!this.isDetectedTask(taskConfig)) {
            return undefined;
        }
        var customizationByType = this.getTaskCustomizations(taskConfig.taskType || taskConfig.type, taskConfig._scope) || [];
        var hasCustomization = customizationByType.length > 0;
        if (hasCustomization) {
            var taskDefinition_1 = this.taskDefinitionRegistry.getDefinition(taskConfig);
            if (taskDefinition_1) {
                var cus = customizationByType.filter(function (customization) {
                    return taskDefinition_1.properties.required.every(function (rp) { return customization[rp] === taskConfig[rp]; });
                })[0]; // Only support having one customization per task
                return cus;
            }
        }
        return undefined;
    };
    /** returns the string uri of where the config file would be, if it existed under a given root directory */
    TaskConfigurations.prototype.getConfigFileUri = function (rootDir) {
        return new uri_1.default(rootDir).resolve(this.TASKFILEPATH).resolve(this.TASKFILE).toString();
    };
    /**
     * Called when a change, to a config file we watch, is detected.
     */
    TaskConfigurations.prototype.onDidTaskFileChange = function (fileChanges) {
        return __awaiter(this, void 0, void 0, function () {
            var fileChanges_1, fileChanges_1_1, change, e_5_1;
            var e_5, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 6, 7, 8]);
                        fileChanges_1 = __values(fileChanges), fileChanges_1_1 = fileChanges_1.next();
                        _b.label = 1;
                    case 1:
                        if (!!fileChanges_1_1.done) return [3 /*break*/, 5];
                        change = fileChanges_1_1.value;
                        if (!(change.type === filesystem_watcher_protocol_1.FileChangeType.DELETED)) return [3 /*break*/, 2];
                        this.removeTasks(change.uri);
                        return [3 /*break*/, 4];
                    case 2: 
                    // re-parse the config file
                    return [4 /*yield*/, this.refreshTasks(change.uri)];
                    case 3:
                        // re-parse the config file
                        _b.sent();
                        _b.label = 4;
                    case 4:
                        fileChanges_1_1 = fileChanges_1.next();
                        return [3 /*break*/, 1];
                    case 5: return [3 /*break*/, 8];
                    case 6:
                        e_5_1 = _b.sent();
                        e_5 = { error: e_5_1 };
                        return [3 /*break*/, 8];
                    case 7:
                        try {
                            if (fileChanges_1_1 && !fileChanges_1_1.done && (_a = fileChanges_1.return)) _a.call(fileChanges_1);
                        }
                        finally { if (e_5) throw e_5.error; }
                        return [7 /*endfinally*/];
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Read the task configs from the task configuration manager, and updates the list of available tasks.
     */
    TaskConfigurations.prototype.refreshTasks = function (rootFolderUri) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.readTasks(rootFolderUri)];
                    case 1:
                        _a.sent();
                        this.removeTasks(rootFolderUri);
                        this.removeTaskCustomizations(rootFolderUri);
                        this.reorgnizeTasks();
                        return [2 /*return*/];
                }
            });
        });
    };
    /** parses a config file and extracts the tasks launch configurations */
    TaskConfigurations.prototype.readTasks = function (rootFolderUri) {
        return __awaiter(this, void 0, void 0, function () {
            var configArray, tasks;
            var _this = this;
            return __generator(this, function (_a) {
                configArray = this.taskConfigurationManager.getTasks(rootFolderUri);
                if (this.rawTaskConfigurations.has(rootFolderUri)) {
                    this.rawTaskConfigurations.delete(rootFolderUri);
                }
                tasks = configArray.map(function (config) {
                    if (_this.isDetectedTask(config)) {
                        var def = _this.getTaskDefinition(config);
                        return __assign({}, config, { _source: def.source, _scope: rootFolderUri });
                    }
                    return __assign({}, config, { _source: rootFolderUri, _scope: rootFolderUri });
                });
                this.rawTaskConfigurations.set(rootFolderUri, tasks);
                return [2 /*return*/, tasks];
            });
        });
    };
    /** Adds given task to a config file and opens the file to provide ability to edit task configuration. */
    TaskConfigurations.prototype.configure = function (task) {
        return __awaiter(this, void 0, void 0, function () {
            var workspace, sourceFolderUri, configuredAndCustomizedTasks, e_6;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        workspace = this.workspaceService.workspace;
                        if (!workspace) {
                            return [2 /*return*/];
                        }
                        sourceFolderUri = this.taskSourceResolver.resolve(task);
                        if (!sourceFolderUri) {
                            console.error('Global task cannot be customized');
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.getTasks()];
                    case 1:
                        configuredAndCustomizedTasks = _a.sent();
                        if (!!configuredAndCustomizedTasks.some(function (t) { return _this.taskDefinitionRegistry.compareTasks(t, task); })) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.saveTask(sourceFolderUri, __assign({}, task, { problemMatcher: [] }))];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        _a.trys.push([3, 5, , 6]);
                        return [4 /*yield*/, this.taskConfigurationManager.openConfiguration(sourceFolderUri)];
                    case 4:
                        _a.sent();
                        return [3 /*break*/, 6];
                    case 5:
                        e_6 = _a.sent();
                        console.error("Error occurred while opening: " + this.TASKFILE + ".", e_6);
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    TaskConfigurations.prototype.getTaskCustomizationTemplate = function (task) {
        var definition = this.getTaskDefinition(task);
        if (!definition) {
            console.error('Detected / Contributed tasks should have a task definition.');
            return;
        }
        var customization = { type: task.taskType || task.type };
        definition.properties.all.forEach(function (p) {
            if (task[p] !== undefined) {
                customization[p] = task[p];
            }
        });
        if ('problemMatcher' in task) {
            var problemMatcher = [];
            if (Array.isArray(task.problemMatcher)) {
                problemMatcher.push.apply(problemMatcher, __spread(task.problemMatcher.map(function (t) {
                    if (typeof t === 'string') {
                        return t;
                    }
                    else {
                        return t.name;
                    }
                })));
            }
            else if (typeof task.problemMatcher === 'string') {
                problemMatcher.push(task.problemMatcher);
            }
            else if (task.problemMatcher) {
                problemMatcher.push(task.problemMatcher.name);
            }
            customization.problemMatcher = problemMatcher.map(function (name) { return name.startsWith('$') ? name : "$" + name; });
        }
        if (task.group) {
            customization.group = task.group;
        }
        return __assign({}, customization);
    };
    /** Writes the task to a config file. Creates a config file if this one does not exist */
    TaskConfigurations.prototype.saveTask = function (sourceFolderUri, task) {
        var _source = task._source, $ident = task.$ident, preparedTask = __rest(task, ["_source", "$ident"]);
        var customizedTaskTemplate = this.getTaskCustomizationTemplate(task) || preparedTask;
        return this.taskConfigurationManager.addTaskConfiguration(sourceFolderUri, customizedTaskTemplate);
    };
    /**
     * This function is called after a change in TaskDefinitionRegistry happens.
     * It checks all tasks that have been loaded, and re-organized them in `tasksMap` and `taskCustomizationMap`.
     */
    TaskConfigurations.prototype.reorgnizeTasks = function () {
        var e_7, _a, e_8, _b;
        var newTaskMap = new Map();
        var newTaskCustomizationMap = new Map();
        var addCustomization = function (rootFolder, customization) {
            if (newTaskCustomizationMap.has(rootFolder)) {
                newTaskCustomizationMap.get(rootFolder).push(customization);
            }
            else {
                newTaskCustomizationMap.set(rootFolder, [customization]);
            }
        };
        var addConfiguredTask = function (rootFolder, label, configuredTask) {
            if (newTaskMap.has(rootFolder)) {
                newTaskMap.get(rootFolder).set(label, configuredTask);
            }
            else {
                var newConfigMap = new Map();
                newConfigMap.set(label, configuredTask);
                newTaskMap.set(rootFolder, newConfigMap);
            }
        };
        try {
            for (var _c = __values(this.rawTaskConfigurations.entries()), _d = _c.next(); !_d.done; _d = _c.next()) {
                var _e = __read(_d.value, 2), rootFolder = _e[0], taskConfigs = _e[1];
                try {
                    for (var taskConfigs_2 = (e_8 = void 0, __values(taskConfigs)), taskConfigs_2_1 = taskConfigs_2.next(); !taskConfigs_2_1.done; taskConfigs_2_1 = taskConfigs_2.next()) {
                        var taskConfig = taskConfigs_2_1.value;
                        var isValid = this.isTaskConfigValid(taskConfig);
                        if (!isValid) {
                            continue;
                        }
                        if (this.isDetectedTask(taskConfig)) {
                            addCustomization(rootFolder, taskConfig);
                        }
                        else {
                            addConfiguredTask(rootFolder, taskConfig['label'], taskConfig);
                        }
                    }
                }
                catch (e_8_1) { e_8 = { error: e_8_1 }; }
                finally {
                    try {
                        if (taskConfigs_2_1 && !taskConfigs_2_1.done && (_b = taskConfigs_2.return)) _b.call(taskConfigs_2);
                    }
                    finally { if (e_8) throw e_8.error; }
                }
            }
        }
        catch (e_7_1) { e_7 = { error: e_7_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
            }
            finally { if (e_7) throw e_7.error; }
        }
        this.taskCustomizationMap = newTaskCustomizationMap;
        this.tasksMap = newTaskMap;
    };
    /**
     * Returns `true` if the given task configuration is valid as per the task schema defined in Theia
     * or contributed by Theia extensions and plugins, `false` otherwise.
     */
    TaskConfigurations.prototype.isTaskConfigValid = function (task) {
        var schema = this.taskSchemaUpdater.getTaskSchema();
        var ajv = new Ajv();
        var validateSchema = ajv.compile(schema);
        return !!validateSchema({ tasks: [task] });
    };
    /**
     * Updates the task config in the `tasks.json`.
     * The task config, together with updates, will be written into the `tasks.json` if it is not found in the file.
     *
     * @param task task that the updates will be applied to
     * @param update the updates to be appplied
     */
    // tslint:disable-next-line:no-any
    TaskConfigurations.prototype.updateTaskConfig = function (task, update) {
        return __awaiter(this, void 0, void 0, function () {
            var sourceFolderUri, configuredAndCustomizedTasks, jsonTasks, ind;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        sourceFolderUri = this.taskSourceResolver.resolve(task);
                        if (!sourceFolderUri) {
                            console.error('Global task cannot be customized');
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.getTasks()];
                    case 1:
                        configuredAndCustomizedTasks = _a.sent();
                        if (configuredAndCustomizedTasks.some(function (t) { return _this.taskDefinitionRegistry.compareTasks(t, task); })) { // task is already in `tasks.json`
                            jsonTasks = this.taskConfigurationManager.getTasks(sourceFolderUri);
                            if (jsonTasks) {
                                ind = jsonTasks.findIndex(function (t) {
                                    if (t.type !== (task.taskType || task.type)) {
                                        return false;
                                    }
                                    var def = _this.taskDefinitionRegistry.getDefinition(t);
                                    if (def) {
                                        return def.properties.all.every(function (p) { return t[p] === task[p]; });
                                    }
                                    return t.label === task.label;
                                });
                                jsonTasks[ind] = __assign({}, jsonTasks[ind], update);
                            }
                            this.taskConfigurationManager.setTaskConfigurations(sourceFolderUri, jsonTasks);
                        }
                        else { // task is not in `tasks.json`
                            Object.keys(update).forEach(function (taskProperty) {
                                task[taskProperty] = update[taskProperty];
                            });
                            this.saveTask(sourceFolderUri, task);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    TaskConfigurations.prototype.getSourceFolderFromConfigUri = function (configFileUri) {
        return new uri_1.default(configFileUri).parent.parent.path.toString();
    };
    /** checks if the config is a detected / contributed task */
    TaskConfigurations.prototype.isDetectedTask = function (task) {
        var taskDefinition = this.getTaskDefinition(task);
        // it is considered as a customization if the task definition registry finds a def for the task configuration
        return !!taskDefinition;
    };
    TaskConfigurations.prototype.getTaskDefinition = function (task) {
        return this.taskDefinitionRegistry.getDefinition(__assign({}, task, { type: task.taskType || task.type }));
    };
    __decorate([
        inversify_1.inject(browser_1.WorkspaceService),
        __metadata("design:type", browser_1.WorkspaceService)
    ], TaskConfigurations.prototype, "workspaceService", void 0);
    __decorate([
        inversify_1.inject(common_1.ResourceProvider),
        __metadata("design:type", Function)
    ], TaskConfigurations.prototype, "resourceProvider", void 0);
    __decorate([
        inversify_1.inject(browser_2.OpenerService),
        __metadata("design:type", Object)
    ], TaskConfigurations.prototype, "openerService", void 0);
    __decorate([
        inversify_1.inject(task_definition_registry_1.TaskDefinitionRegistry),
        __metadata("design:type", task_definition_registry_1.TaskDefinitionRegistry)
    ], TaskConfigurations.prototype, "taskDefinitionRegistry", void 0);
    __decorate([
        inversify_1.inject(provided_task_configurations_1.ProvidedTaskConfigurations),
        __metadata("design:type", provided_task_configurations_1.ProvidedTaskConfigurations)
    ], TaskConfigurations.prototype, "providedTaskConfigurations", void 0);
    __decorate([
        inversify_1.inject(task_configuration_manager_1.TaskConfigurationManager),
        __metadata("design:type", task_configuration_manager_1.TaskConfigurationManager)
    ], TaskConfigurations.prototype, "taskConfigurationManager", void 0);
    __decorate([
        inversify_1.inject(task_schema_updater_1.TaskSchemaUpdater),
        __metadata("design:type", task_schema_updater_1.TaskSchemaUpdater)
    ], TaskConfigurations.prototype, "taskSchemaUpdater", void 0);
    __decorate([
        inversify_1.inject(task_source_resolver_1.TaskSourceResolver),
        __metadata("design:type", task_source_resolver_1.TaskSourceResolver)
    ], TaskConfigurations.prototype, "taskSourceResolver", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], TaskConfigurations.prototype, "init", null);
    TaskConfigurations = __decorate([
        inversify_1.injectable(),
        __metadata("design:paramtypes", [])
    ], TaskConfigurations);
    return TaskConfigurations;
}());
exports.TaskConfigurations = TaskConfigurations;


/***/ }),

/***/ "./node_modules/@theia/task/lib/browser/task-folder-preference-provider.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@theia/task/lib/browser/task-folder-preference-provider.js ***!
  \*********************************************************************************/
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
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var folder_preference_provider_1 = __webpack_require__(/*! @theia/preferences/lib/browser/folder-preference-provider */ "./node_modules/@theia/preferences/lib/browser/folder-preference-provider.js");
var TaskFolderPreferenceProvider = /** @class */ (function (_super) {
    __extends(TaskFolderPreferenceProvider, _super);
    function TaskFolderPreferenceProvider() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // tslint:disable-next-line:no-any
    TaskFolderPreferenceProvider.prototype.parse = function (content) {
        var tasks = _super.prototype.parse.call(this, content);
        if (tasks === undefined) {
            return undefined;
        }
        return { tasks: __assign({}, tasks) };
    };
    TaskFolderPreferenceProvider.prototype.getPath = function (preferenceName) {
        if (preferenceName === 'tasks') {
            return [];
        }
        if (preferenceName.startsWith('tasks.')) {
            return [preferenceName.substr('tasks.'.length)];
        }
        return undefined;
    };
    TaskFolderPreferenceProvider = __decorate([
        inversify_1.injectable()
    ], TaskFolderPreferenceProvider);
    return TaskFolderPreferenceProvider;
}(folder_preference_provider_1.FolderPreferenceProvider));
exports.TaskFolderPreferenceProvider = TaskFolderPreferenceProvider;


/***/ }),

/***/ "./node_modules/@theia/task/lib/browser/task-frontend-contribution.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@theia/task/lib/browser/task-frontend-contribution.js ***!
  \****************************************************************************/
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
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var common_1 = __webpack_require__(/*! @theia/core/lib/common */ "./node_modules/@theia/core/lib/common/index.js");
var quick_open_task_1 = __webpack_require__(/*! ./quick-open-task */ "./node_modules/@theia/task/lib/browser/quick-open-task.js");
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "./node_modules/@theia/core/lib/browser/index.js");
var widget_manager_1 = __webpack_require__(/*! @theia/core/lib/browser/widget-manager */ "./node_modules/@theia/core/lib/browser/widget-manager.js");
var task_contribution_1 = __webpack_require__(/*! ./task-contribution */ "./node_modules/@theia/task/lib/browser/task-contribution.js");
var task_service_1 = __webpack_require__(/*! ./task-service */ "./node_modules/@theia/task/lib/browser/task-service.js");
var terminal_frontend_contribution_1 = __webpack_require__(/*! @theia/terminal/lib/browser/terminal-frontend-contribution */ "./node_modules/@theia/terminal/lib/browser/terminal-frontend-contribution.js");
var task_schema_updater_1 = __webpack_require__(/*! ./task-schema-updater */ "./node_modules/@theia/task/lib/browser/task-schema-updater.js");
var common_2 = __webpack_require__(/*! ../common */ "./node_modules/@theia/task/lib/common/index.js");
var browser_2 = __webpack_require__(/*! @theia/editor/lib/browser */ "./node_modules/@theia/editor/lib/browser/index.js");
var workspace_service_1 = __webpack_require__(/*! @theia/workspace/lib/browser/workspace-service */ "./node_modules/@theia/workspace/lib/browser/workspace-service.js");
var TaskCommands;
(function (TaskCommands) {
    var TASK_CATEGORY = 'Task';
    TaskCommands.TASK_RUN = {
        id: 'task:run',
        category: TASK_CATEGORY,
        label: 'Run Task...'
    };
    TaskCommands.TASK_RUN_BUILD = {
        id: 'task:run:build',
        category: TASK_CATEGORY,
        label: 'Run Build Task...'
    };
    TaskCommands.TASK_RUN_TEST = {
        id: 'task:run:test',
        category: TASK_CATEGORY,
        label: 'Run Test Task...'
    };
    TaskCommands.WORKBENCH_RUN_TASK = {
        id: 'workbench.action.tasks.runTask',
        category: TASK_CATEGORY
    };
    TaskCommands.TASK_RUN_LAST = {
        id: 'task:run:last',
        category: TASK_CATEGORY,
        label: 'Run Last Task'
    };
    TaskCommands.TASK_ATTACH = {
        id: 'task:attach',
        category: TASK_CATEGORY,
        label: 'Attach Task...'
    };
    TaskCommands.TASK_RUN_TEXT = {
        id: 'task:run:text',
        category: TASK_CATEGORY,
        label: 'Run Selected Text'
    };
    TaskCommands.TASK_CONFIGURE = {
        id: 'task:configure',
        category: TASK_CATEGORY,
        label: 'Configure Tasks...'
    };
    TaskCommands.TASK_CLEAR_HISTORY = {
        id: 'task:clear-history',
        category: TASK_CATEGORY,
        label: 'Clear History'
    };
    TaskCommands.TASK_SHOW_RUNNING = {
        id: 'task:show-running',
        category: TASK_CATEGORY,
        label: 'Show Running Tasks'
    };
    TaskCommands.TASK_TERMINATE = {
        id: 'task:terminate',
        category: TASK_CATEGORY,
        label: 'Terminate Task'
    };
})(TaskCommands = exports.TaskCommands || (exports.TaskCommands = {}));
var TASKS_STORAGE_KEY = 'tasks';
var TaskFrontendContribution = /** @class */ (function () {
    function TaskFrontendContribution() {
    }
    TaskFrontendContribution.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.taskWatcher.onTaskCreated(function () { return _this.updateRunningTasksItem(); });
                this.taskWatcher.onTaskExit(function () { return _this.updateRunningTasksItem(); });
                return [2 /*return*/];
            });
        });
    };
    TaskFrontendContribution.prototype.onStart = function () {
        var _this = this;
        this.contributionProvider.getContributions().forEach(function (contrib) {
            if (contrib.registerResolvers) {
                contrib.registerResolvers(_this.taskResolverRegistry);
            }
            if (contrib.registerProviders) {
                contrib.registerProviders(_this.taskProviderRegistry);
            }
        });
        this.schemaUpdater.update();
        this.storageService.getData(TASKS_STORAGE_KEY, { recent: [] })
            .then(function (tasks) { return _this.taskService.recentTasks = tasks.recent; });
    };
    TaskFrontendContribution.prototype.onStop = function () {
        var recent = this.taskService.recentTasks;
        this.storageService.setData(TASKS_STORAGE_KEY, { recent: recent });
    };
    /**
     * Contribute a status-bar item to trigger
     * the `Show Running Tasks` command.
     */
    TaskFrontendContribution.prototype.updateRunningTasksItem = function () {
        return __awaiter(this, void 0, void 0, function () {
            var id, items;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = 'show-running-tasks';
                        return [4 /*yield*/, this.taskService.getRunningTasks()];
                    case 1:
                        items = _a.sent();
                        if (!!items.length) {
                            this.statusBar.setElement(id, {
                                text: "$(tools) " + items.length,
                                tooltip: 'Show Running Tasks',
                                alignment: browser_1.StatusBarAlignment.LEFT,
                                priority: 2,
                                command: TaskCommands.TASK_SHOW_RUNNING.id,
                            });
                        }
                        else {
                            this.statusBar.removeElement(id);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    TaskFrontendContribution.prototype.registerCommands = function (registry) {
        var _this = this;
        registry.registerCommand(TaskCommands.WORKBENCH_RUN_TASK, {
            isEnabled: function () { return true; },
            execute: function (label) { return __awaiter(_this, void 0, void 0, function () {
                var didExecute;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.taskService.runTaskByLabel(label)];
                        case 1:
                            didExecute = _a.sent();
                            if (!didExecute) {
                                this.quickOpenTask.open();
                            }
                            return [2 /*return*/];
                    }
                });
            }); }
        });
        registry.registerCommand(TaskCommands.TASK_RUN, {
            isEnabled: function () { return true; },
            // tslint:disable-next-line:no-any
            execute: function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                var _a = __read(args, 2), source = _a[0], label = _a[1];
                if (source && label) {
                    return _this.taskService.run(source, label);
                }
                return _this.quickOpenTask.open();
            }
        });
        registry.registerCommand(TaskCommands.TASK_RUN_BUILD, {
            isEnabled: function () { return _this.workspaceService.opened; },
            // tslint:disable-next-line:no-any
            execute: function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return _this.quickOpenTask.runBuildOrTestTask('build');
            }
        });
        registry.registerCommand(TaskCommands.TASK_RUN_TEST, {
            isEnabled: function () { return _this.workspaceService.opened; },
            // tslint:disable-next-line:no-any
            execute: function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return _this.quickOpenTask.runBuildOrTestTask('test');
            }
        });
        registry.registerCommand(TaskCommands.TASK_ATTACH, {
            isEnabled: function () { return true; },
            execute: function () { return _this.quickOpenTask.attach(); }
        });
        registry.registerCommand(TaskCommands.TASK_RUN_LAST, {
            isEnabled: function () { return !!_this.taskService.getLastTask(); },
            execute: function () { return _this.taskService.runLastTask(); }
        });
        registry.registerCommand(TaskCommands.TASK_RUN_TEXT, {
            isVisible: function () { return !!_this.editorManager.currentEditor; },
            isEnabled: function () { return !!_this.editorManager.currentEditor; },
            execute: function () { return _this.taskService.runSelectedText(); }
        });
        registry.registerCommand(TaskCommands.TASK_CONFIGURE, {
            execute: function () { return _this.quickOpenTask.configure(); }
        });
        registry.registerCommand(TaskCommands.TASK_CLEAR_HISTORY, {
            execute: function () { return _this.taskService.clearRecentTasks(); }
        });
        registry.registerCommand(TaskCommands.TASK_SHOW_RUNNING, {
            execute: function () { return _this.taskRunningQuickOpen.open(); }
        });
        registry.registerCommand(TaskCommands.TASK_TERMINATE, {
            execute: function () { return _this.taskTerminateQuickOpen.open(); }
        });
    };
    TaskFrontendContribution.prototype.registerMenus = function (menus) {
        menus.registerMenuAction(terminal_frontend_contribution_1.TerminalMenus.TERMINAL_TASKS, {
            commandId: TaskCommands.TASK_RUN.id,
            order: '0'
        });
        menus.registerMenuAction(terminal_frontend_contribution_1.TerminalMenus.TERMINAL_TASKS, {
            commandId: TaskCommands.TASK_RUN_BUILD.id,
            order: '1'
        });
        menus.registerMenuAction(terminal_frontend_contribution_1.TerminalMenus.TERMINAL_TASKS, {
            commandId: TaskCommands.TASK_RUN_TEST.id,
            order: '2'
        });
        menus.registerMenuAction(terminal_frontend_contribution_1.TerminalMenus.TERMINAL_TASKS, {
            commandId: TaskCommands.TASK_RUN_LAST.id,
            order: '3'
        });
        menus.registerMenuAction(terminal_frontend_contribution_1.TerminalMenus.TERMINAL_TASKS, {
            commandId: TaskCommands.TASK_ATTACH.id,
            order: '4'
        });
        menus.registerMenuAction(terminal_frontend_contribution_1.TerminalMenus.TERMINAL_TASKS, {
            commandId: TaskCommands.TASK_RUN_TEXT.id,
            order: '5'
        });
        menus.registerMenuAction(terminal_frontend_contribution_1.TerminalMenus.TERMINAL_TASKS_INFO, {
            commandId: TaskCommands.TASK_SHOW_RUNNING.id,
            label: 'Show Running Tasks...',
            order: '0'
        });
        menus.registerMenuAction(terminal_frontend_contribution_1.TerminalMenus.TERMINAL_TASKS_INFO, {
            commandId: TaskCommands.TASK_TERMINATE.id,
            label: 'Terminate Task...',
            order: '1'
        });
        menus.registerMenuAction(terminal_frontend_contribution_1.TerminalMenus.TERMINAL_TASKS_CONFIG, {
            commandId: TaskCommands.TASK_CONFIGURE.id,
            order: '0'
        });
    };
    TaskFrontendContribution.prototype.registerQuickOpenHandlers = function (handlers) {
        handlers.registerHandler(this.quickOpenTask);
    };
    TaskFrontendContribution.prototype.registerKeybindings = function (keybindings) {
        keybindings.registerKeybinding({
            command: TaskCommands.TASK_RUN_LAST.id,
            keybinding: 'ctrlcmd+shift+k'
        });
    };
    __decorate([
        inversify_1.inject(quick_open_task_1.QuickOpenTask),
        __metadata("design:type", quick_open_task_1.QuickOpenTask)
    ], TaskFrontendContribution.prototype, "quickOpenTask", void 0);
    __decorate([
        inversify_1.inject(browser_2.EditorManager),
        __metadata("design:type", browser_2.EditorManager)
    ], TaskFrontendContribution.prototype, "editorManager", void 0);
    __decorate([
        inversify_1.inject(browser_1.FrontendApplication),
        __metadata("design:type", browser_1.FrontendApplication)
    ], TaskFrontendContribution.prototype, "app", void 0);
    __decorate([
        inversify_1.inject(common_1.ILogger), inversify_1.named('task'),
        __metadata("design:type", Object)
    ], TaskFrontendContribution.prototype, "logger", void 0);
    __decorate([
        inversify_1.inject(widget_manager_1.WidgetManager),
        __metadata("design:type", widget_manager_1.WidgetManager)
    ], TaskFrontendContribution.prototype, "widgetManager", void 0);
    __decorate([
        inversify_1.inject(common_1.ContributionProvider), inversify_1.named(task_contribution_1.TaskContribution),
        __metadata("design:type", Object)
    ], TaskFrontendContribution.prototype, "contributionProvider", void 0);
    __decorate([
        inversify_1.inject(task_contribution_1.TaskProviderRegistry),
        __metadata("design:type", task_contribution_1.TaskProviderRegistry)
    ], TaskFrontendContribution.prototype, "taskProviderRegistry", void 0);
    __decorate([
        inversify_1.inject(task_contribution_1.TaskResolverRegistry),
        __metadata("design:type", task_contribution_1.TaskResolverRegistry)
    ], TaskFrontendContribution.prototype, "taskResolverRegistry", void 0);
    __decorate([
        inversify_1.inject(task_service_1.TaskService),
        __metadata("design:type", task_service_1.TaskService)
    ], TaskFrontendContribution.prototype, "taskService", void 0);
    __decorate([
        inversify_1.inject(task_schema_updater_1.TaskSchemaUpdater),
        __metadata("design:type", task_schema_updater_1.TaskSchemaUpdater)
    ], TaskFrontendContribution.prototype, "schemaUpdater", void 0);
    __decorate([
        inversify_1.inject(browser_1.StorageService),
        __metadata("design:type", Object)
    ], TaskFrontendContribution.prototype, "storageService", void 0);
    __decorate([
        inversify_1.inject(quick_open_task_1.TaskRunningQuickOpen),
        __metadata("design:type", quick_open_task_1.TaskRunningQuickOpen)
    ], TaskFrontendContribution.prototype, "taskRunningQuickOpen", void 0);
    __decorate([
        inversify_1.inject(quick_open_task_1.TaskTerminateQuickOpen),
        __metadata("design:type", quick_open_task_1.TaskTerminateQuickOpen)
    ], TaskFrontendContribution.prototype, "taskTerminateQuickOpen", void 0);
    __decorate([
        inversify_1.inject(common_2.TaskWatcher),
        __metadata("design:type", common_2.TaskWatcher)
    ], TaskFrontendContribution.prototype, "taskWatcher", void 0);
    __decorate([
        inversify_1.inject(browser_1.StatusBar),
        __metadata("design:type", Object)
    ], TaskFrontendContribution.prototype, "statusBar", void 0);
    __decorate([
        inversify_1.inject(workspace_service_1.WorkspaceService),
        __metadata("design:type", workspace_service_1.WorkspaceService)
    ], TaskFrontendContribution.prototype, "workspaceService", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], TaskFrontendContribution.prototype, "init", null);
    TaskFrontendContribution = __decorate([
        inversify_1.injectable()
    ], TaskFrontendContribution);
    return TaskFrontendContribution;
}());
exports.TaskFrontendContribution = TaskFrontendContribution;


/***/ }),

/***/ "./node_modules/@theia/task/lib/browser/task-frontend-module.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@theia/task/lib/browser/task-frontend-module.js ***!
  \**********************************************************************/
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
var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "./node_modules/@theia/core/lib/browser/index.js");
var common_1 = __webpack_require__(/*! @theia/core/lib/common */ "./node_modules/@theia/core/lib/common/index.js");
var messaging_1 = __webpack_require__(/*! @theia/core/lib/browser/messaging */ "./node_modules/@theia/core/lib/browser/messaging/index.js");
var quick_open_task_1 = __webpack_require__(/*! ./quick-open-task */ "./node_modules/@theia/task/lib/browser/quick-open-task.js");
var task_contribution_1 = __webpack_require__(/*! ./task-contribution */ "./node_modules/@theia/task/lib/browser/task-contribution.js");
var task_service_1 = __webpack_require__(/*! ./task-service */ "./node_modules/@theia/task/lib/browser/task-service.js");
var task_configurations_1 = __webpack_require__(/*! ./task-configurations */ "./node_modules/@theia/task/lib/browser/task-configurations.js");
var provided_task_configurations_1 = __webpack_require__(/*! ./provided-task-configurations */ "./node_modules/@theia/task/lib/browser/provided-task-configurations.js");
var task_frontend_contribution_1 = __webpack_require__(/*! ./task-frontend-contribution */ "./node_modules/@theia/task/lib/browser/task-frontend-contribution.js");
var task_common_module_1 = __webpack_require__(/*! ../common/task-common-module */ "./node_modules/@theia/task/lib/common/task-common-module.js");
var task_protocol_1 = __webpack_require__(/*! ../common/task-protocol */ "./node_modules/@theia/task/lib/common/task-protocol.js");
var task_watcher_1 = __webpack_require__(/*! ../common/task-watcher */ "./node_modules/@theia/task/lib/common/task-watcher.js");
var process_task_frontend_module_1 = __webpack_require__(/*! ./process/process-task-frontend-module */ "./node_modules/@theia/task/lib/browser/process/process-task-frontend-module.js");
var task_schema_updater_1 = __webpack_require__(/*! ./task-schema-updater */ "./node_modules/@theia/task/lib/browser/task-schema-updater.js");
var task_action_provider_1 = __webpack_require__(/*! ./task-action-provider */ "./node_modules/@theia/task/lib/browser/task-action-provider.js");
var task_definition_registry_1 = __webpack_require__(/*! ./task-definition-registry */ "./node_modules/@theia/task/lib/browser/task-definition-registry.js");
var task_problem_matcher_registry_1 = __webpack_require__(/*! ./task-problem-matcher-registry */ "./node_modules/@theia/task/lib/browser/task-problem-matcher-registry.js");
var task_problem_pattern_registry_1 = __webpack_require__(/*! ./task-problem-pattern-registry */ "./node_modules/@theia/task/lib/browser/task-problem-pattern-registry.js");
var task_configuration_manager_1 = __webpack_require__(/*! ./task-configuration-manager */ "./node_modules/@theia/task/lib/browser/task-configuration-manager.js");
var task_preferences_1 = __webpack_require__(/*! ./task-preferences */ "./node_modules/@theia/task/lib/browser/task-preferences.js");
__webpack_require__(/*! ../../src/browser/style/index.css */ "./node_modules/@theia/task/src/browser/style/index.css");
__webpack_require__(/*! ./tasks-monaco-contribution */ "./node_modules/@theia/task/lib/browser/tasks-monaco-contribution.js");
var task_name_resolver_1 = __webpack_require__(/*! ./task-name-resolver */ "./node_modules/@theia/task/lib/browser/task-name-resolver.js");
var task_source_resolver_1 = __webpack_require__(/*! ./task-source-resolver */ "./node_modules/@theia/task/lib/browser/task-source-resolver.js");
var task_templates_1 = __webpack_require__(/*! ./task-templates */ "./node_modules/@theia/task/lib/browser/task-templates.js");
exports.default = new inversify_1.ContainerModule(function (bind) {
    var e_1, _a;
    bind(task_frontend_contribution_1.TaskFrontendContribution).toSelf().inSingletonScope();
    bind(task_service_1.TaskService).toSelf().inSingletonScope();
    bind(task_action_provider_1.TaskActionProvider).toSelf().inSingletonScope();
    bind(task_action_provider_1.ConfigureTaskAction).toSelf().inSingletonScope();
    try {
        for (var _b = __values([browser_1.FrontendApplicationContribution, common_1.CommandContribution, browser_1.KeybindingContribution, common_1.MenuContribution, browser_1.QuickOpenContribution]), _c = _b.next(); !_c.done; _c = _b.next()) {
            var identifier = _c.value;
            bind(identifier).toService(task_frontend_contribution_1.TaskFrontendContribution);
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_1) throw e_1.error; }
    }
    bind(quick_open_task_1.QuickOpenTask).toSelf().inSingletonScope();
    bind(quick_open_task_1.TaskRunningQuickOpen).toSelf().inSingletonScope();
    bind(quick_open_task_1.TaskTerminateQuickOpen).toSelf().inSingletonScope();
    bind(task_configurations_1.TaskConfigurations).toSelf().inSingletonScope();
    bind(provided_task_configurations_1.ProvidedTaskConfigurations).toSelf().inSingletonScope();
    bind(task_configuration_manager_1.TaskConfigurationManager).toSelf().inSingletonScope();
    bind(task_protocol_1.TaskServer).toDynamicValue(function (ctx) {
        var connection = ctx.container.get(messaging_1.WebSocketConnectionProvider);
        var taskWatcher = ctx.container.get(task_watcher_1.TaskWatcher);
        return connection.createProxy(task_protocol_1.taskPath, taskWatcher.getTaskClient());
    }).inSingletonScope();
    bind(task_definition_registry_1.TaskDefinitionRegistry).toSelf().inSingletonScope();
    bind(task_problem_matcher_registry_1.ProblemMatcherRegistry).toSelf().inSingletonScope();
    bind(task_problem_pattern_registry_1.ProblemPatternRegistry).toSelf().inSingletonScope();
    task_common_module_1.createCommonBindings(bind);
    bind(task_contribution_1.TaskProviderRegistry).toSelf().inSingletonScope();
    bind(task_contribution_1.TaskResolverRegistry).toSelf().inSingletonScope();
    common_1.bindContributionProvider(bind, task_contribution_1.TaskContribution);
    bind(task_schema_updater_1.TaskSchemaUpdater).toSelf().inSingletonScope();
    bind(task_name_resolver_1.TaskNameResolver).toSelf().inSingletonScope();
    bind(task_source_resolver_1.TaskSourceResolver).toSelf().inSingletonScope();
    bind(task_templates_1.TaskTemplateSelector).toSelf().inSingletonScope();
    process_task_frontend_module_1.bindProcessTaskModule(bind);
    task_preferences_1.bindTaskPreferences(bind);
});


/***/ }),

/***/ "./node_modules/@theia/task/lib/browser/task-name-resolver.js":
/*!********************************************************************!*\
  !*** ./node_modules/@theia/task/lib/browser/task-name-resolver.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2019 Red Hat, Inc. and others.
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
var task_definition_registry_1 = __webpack_require__(/*! ./task-definition-registry */ "./node_modules/@theia/task/lib/browser/task-definition-registry.js");
var TaskNameResolver = /** @class */ (function () {
    function TaskNameResolver() {
    }
    /**
     * Returns task name to display.
     * It is aligned with VS Code.
     */
    TaskNameResolver.prototype.resolve = function (task) {
        if (this.isDetectedTask(task)) {
            return (task.source || task._source) + ": " + task.label;
        }
        // it is a hack, when task is customized but extension is absent
        return task.label || task.type + ": " + task.task;
    };
    TaskNameResolver.prototype.isDetectedTask = function (task) {
        return !!this.taskDefinitionRegistry.getDefinition(task);
    };
    __decorate([
        inversify_1.inject(task_definition_registry_1.TaskDefinitionRegistry),
        __metadata("design:type", task_definition_registry_1.TaskDefinitionRegistry)
    ], TaskNameResolver.prototype, "taskDefinitionRegistry", void 0);
    TaskNameResolver = __decorate([
        inversify_1.injectable()
    ], TaskNameResolver);
    return TaskNameResolver;
}());
exports.TaskNameResolver = TaskNameResolver;


/***/ }),

/***/ "./node_modules/@theia/task/lib/browser/task-preferences.js":
/*!******************************************************************!*\
  !*** ./node_modules/@theia/task/lib/browser/task-preferences.js ***!
  \******************************************************************/
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
Object.defineProperty(exports, "__esModule", { value: true });
var preference_contribution_1 = __webpack_require__(/*! @theia/core/lib/browser/preferences/preference-contribution */ "./node_modules/@theia/core/lib/browser/preferences/preference-contribution.js");
var task_schema_updater_1 = __webpack_require__(/*! ./task-schema-updater */ "./node_modules/@theia/task/lib/browser/task-schema-updater.js");
var task_folder_preference_provider_1 = __webpack_require__(/*! ./task-folder-preference-provider */ "./node_modules/@theia/task/lib/browser/task-folder-preference-provider.js");
var browser_1 = __webpack_require__(/*! @theia/preferences/lib/browser */ "./node_modules/@theia/preferences/lib/browser/index.js");
var preference_configurations_1 = __webpack_require__(/*! @theia/core/lib/browser/preferences/preference-configurations */ "./node_modules/@theia/core/lib/browser/preferences/preference-configurations.js");
exports.taskPreferencesSchema = {
    type: 'object',
    scope: 'resource',
    properties: {
        tasks: {
            $ref: task_schema_updater_1.taskSchemaId,
            description: 'Task definition file',
            defaultValue: {
                tasks: []
            }
        }
    }
};
function bindTaskPreferences(bind) {
    bind(preference_contribution_1.PreferenceContribution).toConstantValue({ schema: exports.taskPreferencesSchema });
    bind(browser_1.FolderPreferenceProvider).to(task_folder_preference_provider_1.TaskFolderPreferenceProvider).inTransientScope().whenTargetNamed('tasks');
    bind(preference_configurations_1.PreferenceConfiguration).toConstantValue({ name: 'tasks' });
}
exports.bindTaskPreferences = bindTaskPreferences;


/***/ }),

/***/ "./node_modules/@theia/task/lib/browser/task-schema-updater.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@theia/task/lib/browser/task-schema-updater.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2019 Red Hat, Inc. and others.
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
// This file is inspired by VSCode and partially copied from https://github.com/Microsoft/vscode/blob/1.33.1/src/vs/workbench/contrib/tasks/common/problemMatcher.ts
// 'problemMatcher.ts' copyright:
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
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
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var json_schema_store_1 = __webpack_require__(/*! @theia/core/lib/browser/json-schema-store */ "./node_modules/@theia/core/lib/browser/json-schema-store.js");
var common_1 = __webpack_require__(/*! @theia/core/lib/common */ "./node_modules/@theia/core/lib/common/index.js");
var variable_input_schema_1 = __webpack_require__(/*! @theia/variable-resolver/lib/browser/variable-input-schema */ "./node_modules/@theia/variable-resolver/lib/browser/variable-input-schema.js");
var uri_1 = __webpack_require__(/*! @theia/core/lib/common/uri */ "./node_modules/@theia/core/lib/common/uri.js");
var task_problem_matcher_registry_1 = __webpack_require__(/*! ./task-problem-matcher-registry */ "./node_modules/@theia/task/lib/browser/task-problem-matcher-registry.js");
var task_definition_registry_1 = __webpack_require__(/*! ./task-definition-registry */ "./node_modules/@theia/task/lib/browser/task-definition-registry.js");
var common_2 = __webpack_require__(/*! ../common */ "./node_modules/@theia/task/lib/common/index.js");
exports.taskSchemaId = 'vscode://schemas/tasks';
var TaskSchemaUpdater = /** @class */ (function () {
    function TaskSchemaUpdater() {
        this.onDidChangeTaskSchemaEmitter = new common_1.Emitter();
        this.onDidChangeTaskSchema = this.onDidChangeTaskSchemaEmitter.event;
    }
    TaskSchemaUpdater.prototype.init = function () {
        var _this = this;
        var taskSchemaUri = new uri_1.default(exports.taskSchemaId);
        this.jsonSchemaStore.onDidChangeSchema(function (uri) {
            if (uri.toString() === taskSchemaUri.toString()) {
                _this.onDidChangeTaskSchemaEmitter.fire(undefined);
            }
        });
        this.updateProblemMatcherNames();
        this.updateSupportedTaskTypes();
        // update problem matcher names in the task schema every time a problem matcher is added or disposed
        this.problemMatcherRegistry.onDidChangeProblemMatcher(function () { return _this.updateProblemMatcherNames(); });
        // update supported task types in the task schema every time a task definition is registered or removed
        this.taskDefinitionRegistry.onDidRegisterTaskDefinition(function () { return _this.updateSupportedTaskTypes(); });
        this.taskDefinitionRegistry.onDidUnregisterTaskDefinition(function () { return _this.updateSupportedTaskTypes(); });
    };
    TaskSchemaUpdater.prototype.update = function () {
        var taskSchemaUri = new uri_1.default(exports.taskSchemaId);
        taskConfigurationSchema.anyOf = __spread([processTaskConfigurationSchema], customizedDetectedTasks, customSchemas);
        var schemaContent = this.getStrigifiedTaskSchema();
        try {
            this.inmemoryResources.update(taskSchemaUri, schemaContent);
        }
        catch (e) {
            this.inmemoryResources.add(taskSchemaUri, schemaContent);
            this.jsonSchemaStore.registerSchema({
                fileMatch: ['tasks.json'],
                url: taskSchemaUri.toString()
            });
        }
    };
    /**
     * Adds given task schema to `taskConfigurationSchema` as `oneOf` subschema.
     * Replaces existed subschema by given schema if the corrresponding `$id` properties are equal.
     *
     * Note: please provide `$id` property for subschema to have ability remove/replace it.
     * @param schema subschema for adding to `taskConfigurationSchema`
     */
    TaskSchemaUpdater.prototype.addSubschema = function (schema) {
        var schemaId = schema.$id;
        if (schemaId) {
            this.doRemoveSubschema(schemaId);
        }
        customSchemas.push(schema);
        this.update();
    };
    /**
     * Removes task subschema from `taskConfigurationSchema`.
     *
     * @param arg `$id` property of subschema
     */
    TaskSchemaUpdater.prototype.removeSubschema = function (arg) {
        var isRemoved = this.doRemoveSubschema(arg);
        if (isRemoved) {
            this.update();
        }
    };
    /**
     * Removes task subschema from `customSchemas`, use `update()` to apply the changes for `taskConfigurationSchema`.
     *
     * @param arg `$id` property of subschema
     * @returns `true` if subschema was removed, `false` otherwise
     */
    TaskSchemaUpdater.prototype.doRemoveSubschema = function (arg) {
        var index = customSchemas.findIndex(function (existed) { return !!existed.$id && existed.$id === arg; });
        if (index > -1) {
            customSchemas.splice(index, 1);
            return true;
        }
        return false;
    };
    /** Returns an array of task types that are registered, including the default types */
    TaskSchemaUpdater.prototype.getRegisteredTaskTypes = function () {
        return __awaiter(this, void 0, void 0, function () {
            var serverSupportedTypes, browserSupportedTypes, allTypes;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.taskServer.getRegisteredTaskTypes()];
                    case 1:
                        serverSupportedTypes = _a.sent();
                        browserSupportedTypes = this.taskDefinitionRegistry.getAll().map(function (def) { return def.taskType; });
                        allTypes = new Set(__spread(serverSupportedTypes, browserSupportedTypes));
                        return [2 /*return*/, Array.from(allTypes.values()).sort()];
                }
            });
        });
    };
    TaskSchemaUpdater.prototype.updateSchemasForRegisteredTasks = function () {
        customizedDetectedTasks.length = 0;
        var definitions = this.taskDefinitionRegistry.getAll();
        definitions.forEach(function (def) {
            var customizedDetectedTask = {
                type: 'object',
                required: ['type'],
                properties: {}
            };
            var taskType = __assign({}, defaultTaskType, { enum: [def.taskType], default: def.taskType, description: 'The task type to customize' });
            customizedDetectedTask.properties.type = taskType;
            def.properties.all.forEach(function (taskProp) {
                if (!!def.properties.required.find(function (requiredProp) { return requiredProp === taskProp; })) { // property is mandatory
                    customizedDetectedTask.required.push(taskProp);
                }
                customizedDetectedTask.properties[taskProp] = __assign({}, def.properties.schema.properties[taskProp]);
            });
            customizedDetectedTask.properties.problemMatcher = problemMatcher;
            customizedDetectedTask.properties.options = commandOptionsSchema;
            customizedDetectedTask.properties.group = group;
            customizedDetectedTask.additionalProperties = true;
            customizedDetectedTasks.push(customizedDetectedTask);
        });
    };
    /** Returns the task's JSON schema */
    TaskSchemaUpdater.prototype.getTaskSchema = function () {
        return {
            type: 'object',
            properties: {
                version: {
                    type: 'string'
                },
                tasks: {
                    type: 'array',
                    items: __assign({}, common_1.deepClone(taskConfigurationSchema))
                },
                inputs: variable_input_schema_1.inputsSchema.definitions.inputs
            },
            additionalProperties: false
        };
    };
    /** Returns the task's JSON schema as a string */
    TaskSchemaUpdater.prototype.getStrigifiedTaskSchema = function () {
        return JSON.stringify(this.getTaskSchema());
    };
    /** Gets the most up-to-date names of problem matchers from the registry and update the task schema */
    TaskSchemaUpdater.prototype.updateProblemMatcherNames = function () {
        var matcherNames = this.problemMatcherRegistry.getAll().map(function (m) { return m.name.startsWith('$') ? m.name : "$" + m.name; });
        problemMatcherNames.length = 0;
        problemMatcherNames.push.apply(problemMatcherNames, __spread(matcherNames));
        this.update();
    };
    TaskSchemaUpdater.prototype.updateSupportedTaskTypes = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.updateSchemasForRegisteredTasks();
                this.update();
                return [2 /*return*/];
            });
        });
    };
    __decorate([
        inversify_1.inject(json_schema_store_1.JsonSchemaStore),
        __metadata("design:type", json_schema_store_1.JsonSchemaStore)
    ], TaskSchemaUpdater.prototype, "jsonSchemaStore", void 0);
    __decorate([
        inversify_1.inject(common_1.InMemoryResources),
        __metadata("design:type", common_1.InMemoryResources)
    ], TaskSchemaUpdater.prototype, "inmemoryResources", void 0);
    __decorate([
        inversify_1.inject(task_problem_matcher_registry_1.ProblemMatcherRegistry),
        __metadata("design:type", task_problem_matcher_registry_1.ProblemMatcherRegistry)
    ], TaskSchemaUpdater.prototype, "problemMatcherRegistry", void 0);
    __decorate([
        inversify_1.inject(task_definition_registry_1.TaskDefinitionRegistry),
        __metadata("design:type", task_definition_registry_1.TaskDefinitionRegistry)
    ], TaskSchemaUpdater.prototype, "taskDefinitionRegistry", void 0);
    __decorate([
        inversify_1.inject(common_2.TaskServer),
        __metadata("design:type", Object)
    ], TaskSchemaUpdater.prototype, "taskServer", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], TaskSchemaUpdater.prototype, "init", null);
    TaskSchemaUpdater = __decorate([
        inversify_1.injectable()
    ], TaskSchemaUpdater);
    return TaskSchemaUpdater;
}());
exports.TaskSchemaUpdater = TaskSchemaUpdater;
var commandSchema = {
    type: 'string',
    description: 'The actual command or script to execute'
};
var commandArgSchema = {
    type: 'array',
    description: 'A list of strings, each one being one argument to pass to the command',
    items: {
        type: 'string'
    }
};
var commandOptionsSchema = {
    type: 'object',
    description: 'The command options used when the command is executed',
    properties: {
        cwd: {
            type: 'string',
            description: 'The directory in which the command will be executed',
            default: '${workspaceFolder}'
        },
        env: {
            type: 'object',
            description: 'The environment of the executed program or shell. If omitted the parent process\' environment is used'
        },
        shell: {
            type: 'object',
            description: 'Configuration of the shell when task type is `shell`',
            properties: {
                executable: {
                    type: 'string',
                    description: 'The shell to use'
                },
                args: {
                    type: 'array',
                    description: "The arguments to be passed to the shell executable to run in command mode\n                        (e.g ['-c'] for bash or ['/S', '/C'] for cmd.exe)",
                    items: {
                        type: 'string'
                    }
                }
            }
        }
    }
};
var problemMatcherNames = [];
var defaultTaskTypes = ['shell', 'process'];
var supportedTaskTypes = __spread(defaultTaskTypes);
var taskLabel = {
    type: 'string',
    description: 'A unique string that identifies the task that is also used as task\'s user interface label'
};
var defaultTaskType = {
    type: 'string',
    enum: supportedTaskTypes,
    default: defaultTaskTypes[0],
    description: 'Determines what type of process will be used to execute the task. Only shell types will have output shown on the user interface'
};
var commandAndArgs = {
    command: commandSchema,
    args: commandArgSchema,
    options: commandOptionsSchema
};
var group = {
    oneOf: [
        {
            type: 'string'
        },
        {
            type: 'object',
            properties: {
                kind: {
                    type: 'string',
                    default: 'none',
                    description: 'The task\'s execution group.'
                },
                isDefault: {
                    type: 'boolean',
                    default: false,
                    description: 'Defines if this task is the default task in the group.'
                }
            }
        }
    ],
    enum: [
        { kind: 'build', isDefault: true },
        { kind: 'test', isDefault: true },
        'build',
        'test',
        'none'
    ],
    enumDescriptions: [
        'Marks the task as the default build task.',
        'Marks the task as the default test task.',
        'Marks the task as a build task accessible through the \'Run Build Task\' command.',
        'Marks the task as a test task accessible through the \'Run Test Task\' command.',
        'Assigns the task to no group'
    ],
    // tslint:disable-next-line:max-line-length
    description: 'Defines to which execution group this task belongs to. It supports "build" to add it to the build group and "test" to add it to the test group.'
};
var problemPattern = {
    default: {
        regexp: '^([^\\\\s].*)\\\\((\\\\d+,\\\\d+)\\\\):\\\\s*(.*)$',
        file: 1,
        location: 2,
        message: 3
    },
    type: 'object',
    properties: {
        regexp: {
            type: 'string',
            description: 'The regular expression to find an error, warning or info in the output.'
        },
        kind: {
            type: 'string',
            description: 'whether the pattern matches a location (file and line) or only a file.'
        },
        file: {
            type: 'integer',
            description: 'The match group index of the filename. If omitted 1 is used.'
        },
        location: {
            type: 'integer',
            description: 'The match group index of the problem\'s location. Valid location patterns are: (line), (line,column) and (startLine,startColumn,endLine,endColumn). If omitted (line,column) is assumed.'
        },
        line: {
            type: 'integer',
            description: 'The match group index of the problem\'s line. Defaults to 2'
        },
        column: {
            type: 'integer',
            description: 'The match group index of the problem\'s line character. Defaults to 3'
        },
        endLine: {
            type: 'integer',
            description: 'The match group index of the problem\'s end line. Defaults to undefined'
        },
        endColumn: {
            type: 'integer',
            description: 'The match group index of the problem\'s end line character. Defaults to undefined'
        },
        severity: {
            type: 'integer',
            description: 'The match group index of the problem\'s severity. Defaults to undefined'
        },
        code: {
            type: 'integer',
            description: 'The match group index of the problem\'s code. Defaults to undefined'
        },
        message: {
            type: 'integer',
            description: 'The match group index of the message. If omitted it defaults to 4 if location is specified. Otherwise it defaults to 5.'
        },
        loop: {
            type: 'boolean',
            description: 'In a multi line matcher loop indicated whether this pattern is executed in a loop as long as it matches. Can only specified on a last pattern in a multi line pattern.'
        }
    }
};
var multiLineProblemPattern = {
    type: 'array',
    items: problemPattern
};
var watchingPattern = {
    type: 'object',
    additionalProperties: false,
    properties: {
        regexp: {
            type: 'string',
            description: 'The regular expression to detect the begin or end of a background task.'
        },
        file: {
            type: 'integer',
            description: 'The match group index of the filename. Can be omitted.'
        },
    }
};
var patternType = {
    anyOf: [
        {
            type: 'string',
            description: 'The name of a contributed or predefined pattern'
        },
        problemPattern,
        multiLineProblemPattern
    ],
    description: 'A problem pattern or the name of a contributed or predefined problem pattern. Can be omitted if base is specified.'
};
var problemMatcherObject = {
    type: 'object',
    properties: {
        base: {
            type: 'string',
            description: 'The name of a base problem matcher to use.'
        },
        owner: {
            type: 'string',
            description: 'The owner of the problem inside Code. Can be omitted if base is specified. Defaults to \'external\' if omitted and base is not specified.'
        },
        source: {
            type: 'string',
            description: 'A human-readable string describing the source of this diagnostic, e.g. \'typescript\' or \'super lint\'.'
        },
        severity: {
            type: 'string',
            enum: ['error', 'warning', 'info'],
            description: 'The default severity for captures problems. Is used if the pattern doesn\'t define a match group for severity.'
        },
        applyTo: {
            type: 'string',
            enum: ['allDocuments', 'openDocuments', 'closedDocuments'],
            description: 'Controls if a problem reported on a text document is applied only to open, closed or all documents.'
        },
        pattern: patternType,
        fileLocation: {
            oneOf: [
                {
                    type: 'string',
                    enum: ['absolute', 'relative', 'autoDetect']
                },
                {
                    type: 'array',
                    items: {
                        type: 'string'
                    }
                }
            ],
            description: 'Defines how file names reported in a problem pattern should be interpreted.'
        },
        background: {
            type: 'object',
            additionalProperties: false,
            description: 'Patterns to track the begin and end of a matcher active on a background task.',
            properties: {
                activeOnStart: {
                    type: 'boolean',
                    description: 'If set to true the background monitor is in active mode when the task starts. This is equals of issuing a line that matches the beginsPattern'
                },
                beginsPattern: {
                    oneOf: [
                        {
                            type: 'string'
                        },
                        watchingPattern
                    ],
                    description: 'If matched in the output the start of a background task is signaled.'
                },
                endsPattern: {
                    oneOf: [
                        {
                            type: 'string'
                        },
                        watchingPattern
                    ],
                    description: 'If matched in the output the end of a background task is signaled.'
                }
            }
        },
        watching: {
            type: 'object',
            additionalProperties: false,
            deprecationMessage: 'The watching property is deprecated. Use background instead.',
            description: 'Patterns to track the begin and end of a watching matcher.',
            properties: {
                activeOnStart: {
                    type: 'boolean',
                    description: 'If set to true the watcher is in active mode when the task starts. This is equals of issuing a line that matches the beginPattern'
                },
                beginsPattern: {
                    oneOf: [
                        {
                            type: 'string'
                        },
                        watchingPattern
                    ],
                    description: 'If matched in the output the start of a watching task is signaled.'
                },
                endsPattern: {
                    oneOf: [
                        {
                            type: 'string'
                        },
                        watchingPattern
                    ],
                    description: 'If matched in the output the end of a watching task is signaled.'
                }
            }
        }
    }
};
var problemMatcher = {
    anyOf: [
        {
            type: 'string',
            description: 'Name of the problem matcher to parse the output of the task',
            enum: problemMatcherNames
        },
        {
            type: 'array',
            description: 'Name(s) of the problem matcher(s) to parse the output of the task',
            items: {
                type: 'string',
                enum: problemMatcherNames
            }
        },
        problemMatcherObject,
        {
            type: 'array',
            description: 'User defined problem matcher(s) to parse the output of the task',
            items: problemMatcherObject
        }
    ]
};
var processTaskConfigurationSchema = {
    type: 'object',
    required: ['type', 'label', 'command'],
    properties: __assign({ label: taskLabel, type: defaultTaskType }, commandAndArgs, { windows: {
            type: 'object',
            description: 'Windows specific command configuration that overrides the command, args, and options',
            properties: commandAndArgs
        }, osx: {
            type: 'object',
            description: 'MacOS specific command configuration that overrides the command, args, and options',
            properties: commandAndArgs
        }, linux: {
            type: 'object',
            description: 'Linux specific command configuration that overrides the default command, args, and options',
            properties: commandAndArgs
        }, group: group,
        problemMatcher: problemMatcher }),
    additionalProperties: true
};
var customizedDetectedTasks = [];
var customSchemas = [];
var taskConfigurationSchema = {
    $id: exports.taskSchemaId,
    anyOf: __spread([processTaskConfigurationSchema], customizedDetectedTasks, customSchemas)
};


/***/ }),

/***/ "./node_modules/@theia/task/lib/browser/task-service.js":
/*!**************************************************************!*\
  !*** ./node_modules/@theia/task/lib/browser/task-service.js ***!
  \**************************************************************/
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
var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
Object.defineProperty(exports, "__esModule", { value: true });
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "./node_modules/@theia/core/lib/browser/index.js");
var opener_service_1 = __webpack_require__(/*! @theia/core/lib/browser/opener-service */ "./node_modules/@theia/core/lib/browser/opener-service.js");
var common_1 = __webpack_require__(/*! @theia/core/lib/common */ "./node_modules/@theia/core/lib/common/index.js");
var message_service_1 = __webpack_require__(/*! @theia/core/lib/common/message-service */ "./node_modules/@theia/core/lib/common/message-service.js");
var promise_util_1 = __webpack_require__(/*! @theia/core/lib/common/promise-util */ "./node_modules/@theia/core/lib/common/promise-util.js");
var quick_pick_service_1 = __webpack_require__(/*! @theia/core/lib/common/quick-pick-service */ "./node_modules/@theia/core/lib/common/quick-pick-service.js");
var label_provider_1 = __webpack_require__(/*! @theia/core/lib/browser/label-provider */ "./node_modules/@theia/core/lib/browser/label-provider.js");
var uri_1 = __webpack_require__(/*! @theia/core/lib/common/uri */ "./node_modules/@theia/core/lib/common/uri.js");
var browser_2 = __webpack_require__(/*! @theia/editor/lib/browser */ "./node_modules/@theia/editor/lib/browser/index.js");
var problem_manager_1 = __webpack_require__(/*! @theia/markers/lib/browser/problem/problem-manager */ "./node_modules/@theia/markers/lib/browser/problem/problem-manager.js");
var terminal_service_1 = __webpack_require__(/*! @theia/terminal/lib/browser/base/terminal-service */ "./node_modules/@theia/terminal/lib/browser/base/terminal-service.js");
var terminal_widget_impl_1 = __webpack_require__(/*! @theia/terminal/lib/browser/terminal-widget-impl */ "./node_modules/@theia/terminal/lib/browser/terminal-widget-impl.js");
var browser_3 = __webpack_require__(/*! @theia/variable-resolver/lib/browser */ "./node_modules/@theia/variable-resolver/lib/browser/index.js");
var workspace_service_1 = __webpack_require__(/*! @theia/workspace/lib/browser/workspace-service */ "./node_modules/@theia/workspace/lib/browser/workspace-service.js");
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var vscode_languageserver_types_1 = __webpack_require__(/*! vscode-languageserver-types */ "./node_modules/vscode-languageserver-types/lib/esm/main.js");
var common_2 = __webpack_require__(/*! ../common */ "./node_modules/@theia/task/lib/common/index.js");
var task_watcher_1 = __webpack_require__(/*! ../common/task-watcher */ "./node_modules/@theia/task/lib/common/task-watcher.js");
var provided_task_configurations_1 = __webpack_require__(/*! ./provided-task-configurations */ "./node_modules/@theia/task/lib/browser/provided-task-configurations.js");
var task_configurations_1 = __webpack_require__(/*! ./task-configurations */ "./node_modules/@theia/task/lib/browser/task-configurations.js");
var task_contribution_1 = __webpack_require__(/*! ./task-contribution */ "./node_modules/@theia/task/lib/browser/task-contribution.js");
var task_definition_registry_1 = __webpack_require__(/*! ./task-definition-registry */ "./node_modules/@theia/task/lib/browser/task-definition-registry.js");
var task_name_resolver_1 = __webpack_require__(/*! ./task-name-resolver */ "./node_modules/@theia/task/lib/browser/task-name-resolver.js");
var task_source_resolver_1 = __webpack_require__(/*! ./task-source-resolver */ "./node_modules/@theia/task/lib/browser/task-source-resolver.js");
var task_problem_matcher_registry_1 = __webpack_require__(/*! ./task-problem-matcher-registry */ "./node_modules/@theia/task/lib/browser/task-problem-matcher-registry.js");
var task_schema_updater_1 = __webpack_require__(/*! ./task-schema-updater */ "./node_modules/@theia/task/lib/browser/task-schema-updater.js");
var task_configuration_manager_1 = __webpack_require__(/*! ./task-configuration-manager */ "./node_modules/@theia/task/lib/browser/task-configuration-manager.js");
var problem_widget_1 = __webpack_require__(/*! @theia/markers/lib/browser/problem/problem-widget */ "./node_modules/@theia/markers/lib/browser/problem/problem-widget.js");
var TaskService = /** @class */ (function () {
    function TaskService() {
        /**
         * The last executed task.
         */
        this.lastTask = undefined;
        this.cachedRecentTasks = [];
        this.runningTasks = new Map();
    }
    TaskService.prototype.init = function () {
        var _this = this;
        this.getRunningTasks().then(function (tasks) {
            return tasks.forEach(function (task) {
                if (!_this.runningTasks.has(task.taskId)) {
                    _this.runningTasks.set(task.taskId, { exitCode: new promise_util_1.Deferred(), terminateSignal: new promise_util_1.Deferred() });
                }
            });
        });
        // notify user that task has started
        this.taskWatcher.onTaskCreated(function (event) {
            if (!_this.isEventForThisClient(event.ctx)) {
                return;
            }
            _this.runningTasks.set(event.taskId, { exitCode: new promise_util_1.Deferred(), terminateSignal: new promise_util_1.Deferred() });
            var taskConfig = event.config;
            var taskIdentifier = taskConfig ? _this.getTaskIdentifier(taskConfig) : event.taskId.toString();
            _this.messageService.info("Task '" + taskIdentifier + "' has been started.");
        });
        this.taskWatcher.onOutputProcessed(function (event) {
            if (!_this.isEventForThisClient(event.ctx)) {
                return;
            }
            if (event.problems) {
                event.problems.forEach(function (problem) {
                    var existingMarkers = _this.problemManager.findMarkers({ owner: problem.description.owner });
                    var uris = new Set();
                    existingMarkers.forEach(function (marker) { return uris.add(marker.uri); });
                    if (common_2.ProblemMatchData.is(problem) && problem.resource) {
                        var uri_2 = new uri_1.default(problem.resource.path).withScheme(problem.resource.scheme);
                        if (uris.has(uri_2.toString())) {
                            var newData = __spread(existingMarkers
                                .filter(function (marker) { return marker.uri === uri_2.toString(); })
                                .map(function (markerData) { return markerData.data; }), [
                                problem.marker
                            ]);
                            _this.problemManager.setMarkers(uri_2, problem.description.owner, newData);
                        }
                        else {
                            _this.problemManager.setMarkers(uri_2, problem.description.owner, [problem.marker]);
                        }
                    }
                    else { // should have received an event for finding the "background task begins" pattern
                        uris.forEach(function (uriString) { return _this.problemManager.setMarkers(new uri_1.default(uriString), problem.description.owner, []); });
                    }
                });
            }
        });
        // notify user that task has finished
        this.taskWatcher.onTaskExit(function (event) {
            if (!_this.isEventForThisClient(event.ctx)) {
                return;
            }
            if (!_this.runningTasks.has(event.taskId)) {
                _this.runningTasks.set(event.taskId, { exitCode: new promise_util_1.Deferred(), terminateSignal: new promise_util_1.Deferred() });
            }
            _this.runningTasks.get(event.taskId).exitCode.resolve(event.code);
            _this.runningTasks.get(event.taskId).terminateSignal.resolve(event.signal);
            setTimeout(function () { return _this.runningTasks.delete(event.taskId); }, 60 * 1000);
            var taskConfig = event.config;
            var taskIdentifier = taskConfig ? _this.getTaskIdentifier(taskConfig) : event.taskId.toString();
            if (event.code !== undefined) {
                var message = "Task '" + taskIdentifier + "' has exited with code " + event.code + ".";
                if (event.code === 0) {
                    _this.messageService.info(message);
                }
                else {
                    _this.messageService.error(message);
                }
            }
            else if (event.signal !== undefined) {
                _this.messageService.info("Task '" + taskIdentifier + "' was terminated by signal " + event.signal + ".");
            }
            else {
                console.error('Invalid TaskExitedEvent received, neither code nor signal is set.');
            }
        });
    };
    TaskService.prototype.getTaskIdentifier = function (taskConfig) {
        var taskName = this.taskNameResolver.resolve(taskConfig);
        var sourceStrUri = this.taskSourceResolver.resolve(taskConfig);
        return taskName + " (" + this.labelProvider.getName(new uri_1.default(sourceStrUri)) + ")";
    };
    /** Returns an array of the task configurations configured in tasks.json and provided by the extensions. */
    TaskService.prototype.getTasks = function () {
        return __awaiter(this, void 0, void 0, function () {
            var configuredTasks, providedTasks, notCustomizedProvidedTasks;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getConfiguredTasks()];
                    case 1:
                        configuredTasks = _a.sent();
                        return [4 /*yield*/, this.getProvidedTasks()];
                    case 2:
                        providedTasks = _a.sent();
                        notCustomizedProvidedTasks = providedTasks.filter(function (provided) {
                            return !configuredTasks.some(function (configured) { return _this.taskDefinitionRegistry.compareTasks(configured, provided); });
                        });
                        return [2 /*return*/, __spread(configuredTasks, notCustomizedProvidedTasks)];
                }
            });
        });
    };
    /** Returns an array of the valid task configurations which are configured in tasks.json files */
    TaskService.prototype.getConfiguredTasks = function () {
        return __awaiter(this, void 0, void 0, function () {
            var invalidTaskConfig, widget, isProblemsWidgetVisible_1, currentEditorUri, isInvalidTaskConfigFileOpen, folderUri, warningMessage, validTaskConfigs;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        invalidTaskConfig = this.taskConfigurations.getInvalidTaskConfigurations()[0];
                        if (!invalidTaskConfig) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.widgetManager.getOrCreateWidget(problem_widget_1.PROBLEMS_WIDGET_ID)];
                    case 1:
                        widget = _a.sent();
                        isProblemsWidgetVisible_1 = widget && widget.isVisible;
                        currentEditorUri = this.editorManager.currentEditor && this.editorManager.currentEditor.editor.getResourceUri();
                        isInvalidTaskConfigFileOpen = false;
                        if (currentEditorUri) {
                            folderUri = this.workspaceService.getWorkspaceRootUri(currentEditorUri);
                            if (folderUri && folderUri.toString() === invalidTaskConfig._scope) {
                                isInvalidTaskConfigFileOpen = true;
                            }
                        }
                        warningMessage = 'Invalid task configurations are found. Open tasks.json and find details in the Problems view.';
                        if (!isProblemsWidgetVisible_1 || !isInvalidTaskConfigFileOpen) {
                            this.messageService.warn(warningMessage, 'Open').then(function (actionOpen) {
                                if (actionOpen) {
                                    if (invalidTaskConfig && invalidTaskConfig._scope) {
                                        _this.taskConfigurationManager.openConfiguration(invalidTaskConfig._scope);
                                    }
                                    if (!isProblemsWidgetVisible_1) {
                                        _this.commands.executeCommand('problemsView:toggle');
                                    }
                                }
                            });
                        }
                        else {
                            this.messageService.warn(warningMessage);
                        }
                        _a.label = 2;
                    case 2: return [4 /*yield*/, this.taskConfigurations.getTasks()];
                    case 3:
                        validTaskConfigs = _a.sent();
                        return [2 /*return*/, validTaskConfigs];
                }
            });
        });
    };
    /** Returns an array of the task configurations which are provided by the extensions. */
    TaskService.prototype.getProvidedTasks = function () {
        return this.providedTaskConfigurations.getTasks();
    };
    TaskService.prototype.addRecentTasks = function (tasks) {
        var _this = this;
        if (Array.isArray(tasks)) {
            tasks.forEach(function (task) { return _this.addRecentTasks(task); });
        }
        else {
            var ind = this.cachedRecentTasks.findIndex(function (recent) { return _this.taskDefinitionRegistry.compareTasks(recent, tasks); });
            if (ind >= 0) {
                this.cachedRecentTasks.splice(ind, 1);
            }
            this.cachedRecentTasks.unshift(tasks);
        }
    };
    Object.defineProperty(TaskService.prototype, "recentTasks", {
        get: function () {
            return this.cachedRecentTasks;
        },
        set: function (recent) {
            this.cachedRecentTasks = recent;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Clears the list of recently used tasks.
     */
    TaskService.prototype.clearRecentTasks = function () {
        this.cachedRecentTasks = [];
    };
    /**
     * Returns a task configuration provided by an extension by task source and label.
     * If there are no task configuration, returns undefined.
     */
    TaskService.prototype.getProvidedTask = function (source, label) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.providedTaskConfigurations.getTask(source, label)];
            });
        });
    };
    /** Returns an array of running tasks 'TaskInfo' objects */
    TaskService.prototype.getRunningTasks = function () {
        return this.taskServer.getTasks(this.getContext());
    };
    /** Returns an array of task types that are registered, including the default types */
    TaskService.prototype.getRegisteredTaskTypes = function () {
        return this.taskSchemaUpdater.getRegisteredTaskTypes();
    };
    /**
     * Get the last executed task.
     *
     * @returns the last executed task or `undefined`.
     */
    TaskService.prototype.getLastTask = function () {
        return this.lastTask;
    };
    /**
     * Runs a task, by task configuration label.
     * Note, it looks for a task configured in tasks.json only.
     */
    TaskService.prototype.runConfiguredTask = function (source, taskLabel) {
        return __awaiter(this, void 0, void 0, function () {
            var task;
            return __generator(this, function (_a) {
                task = this.taskConfigurations.getTask(source, taskLabel);
                if (!task) {
                    this.logger.error("Can't get task launch configuration for label: " + taskLabel);
                    return [2 /*return*/];
                }
                this.run(source, taskLabel);
                return [2 /*return*/];
            });
        });
    };
    /**
     * Run the last executed task.
     */
    TaskService.prototype.runLastTask = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, source, taskLabel;
            return __generator(this, function (_b) {
                if (!this.lastTask) {
                    return [2 /*return*/];
                }
                _a = this.lastTask, source = _a.source, taskLabel = _a.taskLabel;
                return [2 /*return*/, this.run(source, taskLabel)];
            });
        });
    };
    /**
     * Runs a task, by the source and label of the task configuration.
     * It looks for configured and detected tasks.
     */
    TaskService.prototype.run = function (source, taskLabel) {
        return __awaiter(this, void 0, void 0, function () {
            var task, customizationObject, items, selected, matcherNames, resolvedMatchers;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getProvidedTask(source, taskLabel)];
                    case 1:
                        task = _a.sent();
                        if (!task) { // if a detected task cannot be found, search from tasks.json
                            task = this.taskConfigurations.getTask(source, taskLabel);
                            if (!task) {
                                this.logger.error("Can't get task launch configuration for label: " + taskLabel);
                                return [2 /*return*/];
                            }
                        }
                        return [4 /*yield*/, this.getTaskCustomization(task)];
                    case 2:
                        customizationObject = _a.sent();
                        if (!!customizationObject.problemMatcher) return [3 /*break*/, 4];
                        items = this.getCustomizeProblemMatcherItems();
                        return [4 /*yield*/, this.quickPick.show(items, {
                                placeholder: 'Select for which kind of errors and warnings to scan the task output'
                            })];
                    case 3:
                        selected = _a.sent();
                        if (selected) {
                            if (selected.problemMatchers) {
                                matcherNames = [];
                                if (selected.problemMatchers && selected.problemMatchers.length === 0) { // never parse output for this task
                                    matcherNames = [];
                                }
                                else if (selected.problemMatchers && selected.problemMatchers.length > 0) { // continue with user-selected parser
                                    matcherNames = selected.problemMatchers.map(function (matcher) { return matcher.name; });
                                }
                                customizationObject.problemMatcher = matcherNames;
                                // write the selected matcher (or the decision of "never parse") into the `tasks.json`
                                this.updateTaskConfiguration(task, { problemMatcher: matcherNames });
                            }
                            else if (selected.learnMore) { // user wants to learn more about parsing task output
                                opener_service_1.open(this.openerService, new uri_1.default('https://code.visualstudio.com/docs/editor/tasks#_processing-task-output-with-problem-matchers'));
                            }
                            // else, continue the task with no parser
                        }
                        else { // do not start the task in case that the user did not select any item from the list
                            return [2 /*return*/];
                        }
                        _a.label = 4;
                    case 4: return [4 /*yield*/, this.resolveProblemMatchers(task, customizationObject)];
                    case 5:
                        resolvedMatchers = _a.sent();
                        return [2 /*return*/, this.runTask(task, {
                                customization: __assign({}, customizationObject, { problemMatcher: resolvedMatchers })
                            })];
                }
            });
        });
    };
    TaskService.prototype.runTask = function (task, option) {
        return __awaiter(this, void 0, void 0, function () {
            var runningTasksInfo, matchedRunningTaskInfo, taskName, terminalId, terminal, selectedAction;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getRunningTasks()];
                    case 1:
                        runningTasksInfo = _a.sent();
                        matchedRunningTaskInfo = runningTasksInfo.find(function (taskInfo) {
                            var taskConfig = taskInfo.config;
                            return _this.taskDefinitionRegistry.compareTasks(taskConfig, task);
                        });
                        if (!matchedRunningTaskInfo) return [3 /*break*/, 6];
                        taskName = this.taskNameResolver.resolve(task);
                        terminalId = matchedRunningTaskInfo.terminalId;
                        if (terminalId) {
                            terminal = this.terminalService.getById(this.getTerminalWidgetId(terminalId));
                            if (terminal) {
                                this.shell.activateWidget(terminal.id); // make the terminal visible and assign focus
                            }
                        }
                        return [4 /*yield*/, this.messageService.info("The task '" + taskName + "' is already active", 'Terminate Task', 'Restart Task')];
                    case 2:
                        selectedAction = _a.sent();
                        if (!(selectedAction === 'Terminate Task')) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.terminateTask(matchedRunningTaskInfo)];
                    case 3:
                        _a.sent();
                        return [3 /*break*/, 5];
                    case 4:
                        if (selectedAction === 'Restart Task') {
                            return [2 /*return*/, this.restartTask(matchedRunningTaskInfo, option)];
                        }
                        _a.label = 5;
                    case 5: return [3 /*break*/, 7];
                    case 6: // run task as the task is not active
                    return [2 /*return*/, this.doRunTask(task, option)];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Terminates a task that is actively running.
     * @param activeTaskInfo the TaskInfo of the task that is actively running
     */
    TaskService.prototype.terminateTask = function (activeTaskInfo) {
        return __awaiter(this, void 0, void 0, function () {
            var taskId;
            return __generator(this, function (_a) {
                taskId = activeTaskInfo.taskId;
                return [2 /*return*/, this.kill(taskId)];
            });
        });
    };
    /**
     * Terminates a task that is actively running, and restarts it.
     * @param activeTaskInfo the TaskInfo of the task that is actively running
     */
    TaskService.prototype.restartTask = function (activeTaskInfo, option) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.terminateTask(activeTaskInfo)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, this.doRunTask(activeTaskInfo.config, option)];
                }
            });
        });
    };
    TaskService.prototype.doRunTask = function (task, option) {
        return __awaiter(this, void 0, void 0, function () {
            var taskDefinition_1, resolvedTask;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (option && option.customization) {
                            taskDefinition_1 = this.taskDefinitionRegistry.getDefinition(task);
                            if (taskDefinition_1) { // use the customization object to override the task config
                                Object.keys(option.customization).forEach(function (customizedProperty) {
                                    // properties used to define the task cannot be customized
                                    if (customizedProperty !== 'type' && !taskDefinition_1.properties.all.some(function (pDefinition) { return pDefinition === customizedProperty; })) {
                                        task[customizedProperty] = option.customization[customizedProperty];
                                    }
                                });
                            }
                        }
                        return [4 /*yield*/, this.getResolvedTask(task)];
                    case 1:
                        resolvedTask = _a.sent();
                        if (!resolvedTask) return [3 /*break*/, 3];
                        // remove problem markers from the same source before running the task
                        return [4 /*yield*/, this.removeProblemMarks(option)];
                    case 2:
                        // remove problem markers from the same source before running the task
                        _a.sent();
                        return [2 /*return*/, this.runResolvedTask(resolvedTask, option)];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    TaskService.prototype.runTaskByLabel = function (taskLabel) {
        return __awaiter(this, void 0, void 0, function () {
            var tasks, tasks_1, tasks_1_1, task;
            var e_1, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.getTasks()];
                    case 1:
                        tasks = _b.sent();
                        try {
                            for (tasks_1 = __values(tasks), tasks_1_1 = tasks_1.next(); !tasks_1_1.done; tasks_1_1 = tasks_1.next()) {
                                task = tasks_1_1.value;
                                if (task.label === taskLabel) {
                                    return [2 /*return*/, this.runTask(task)];
                                }
                            }
                        }
                        catch (e_1_1) { e_1 = { error: e_1_1 }; }
                        finally {
                            try {
                                if (tasks_1_1 && !tasks_1_1.done && (_a = tasks_1.return)) _a.call(tasks_1);
                            }
                            finally { if (e_1) throw e_1.error; }
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    TaskService.prototype.runWorkspaceTask = function (workspaceFolderUri, taskName) {
        return __awaiter(this, void 0, void 0, function () {
            var tasks, task, taskCustomization, resolvedMatchers;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getWorkspaceTasks(workspaceFolderUri)];
                    case 1:
                        tasks = _a.sent();
                        task = tasks.filter(function (t) { return taskName === _this.taskNameResolver.resolve(t); })[0];
                        if (!task) {
                            return [2 /*return*/, undefined];
                        }
                        return [4 /*yield*/, this.getTaskCustomization(task)];
                    case 2:
                        taskCustomization = _a.sent();
                        return [4 /*yield*/, this.resolveProblemMatchers(task, taskCustomization)];
                    case 3:
                        resolvedMatchers = _a.sent();
                        return [2 /*return*/, this.runTask(task, {
                                customization: __assign({}, taskCustomization, { problemMatcher: resolvedMatchers })
                            })];
                }
            });
        });
    };
    /**
     * Updates the task configuration in the `tasks.json`.
     * The task config, together with updates, will be written into the `tasks.json` if it is not found in the file.
     *
     * @param task task that the updates will be applied to
     * @param update the updates to be appplied
     */
    // tslint:disable-next-line:no-any
    TaskService.prototype.updateTaskConfiguration = function (task, update) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (update.problemMatcher) {
                    if (Array.isArray(update.problemMatcher)) {
                        update.problemMatcher.forEach(function (name, index) {
                            if (!name.startsWith('$')) {
                                update.problemMatcher[index] = "$" + update.problemMatcher[index];
                            }
                        });
                    }
                    else if (!update.problemMatcher.startsWith('$')) {
                        update.problemMatcher = "$" + update.problemMatcher;
                    }
                }
                this.taskConfigurations.updateTaskConfig(task, update);
                return [2 /*return*/];
            });
        });
    };
    TaskService.prototype.getWorkspaceTasks = function (workspaceFolderUri) {
        return __awaiter(this, void 0, void 0, function () {
            var tasks;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getTasks()];
                    case 1:
                        tasks = _a.sent();
                        return [2 /*return*/, tasks.filter(function (t) { return t._scope === workspaceFolderUri || t._scope === undefined; })];
                }
            });
        });
    };
    TaskService.prototype.resolveProblemMatchers = function (task, customizationObject) {
        return __awaiter(this, void 0, void 0, function () {
            var notResolvedMatchers, resolvedMatchers, notResolvedMatchers_1, notResolvedMatchers_1_1, matcher, resolvedMatcher, scope, options, resolvedPrefix, e_2_1;
            var e_2, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        notResolvedMatchers = customizationObject.problemMatcher ?
                            (Array.isArray(customizationObject.problemMatcher) ? customizationObject.problemMatcher : [customizationObject.problemMatcher]) : undefined;
                        resolvedMatchers = [];
                        if (!notResolvedMatchers) return [3 /*break*/, 14];
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 11, 12, 13]);
                        notResolvedMatchers_1 = __values(notResolvedMatchers), notResolvedMatchers_1_1 = notResolvedMatchers_1.next();
                        _b.label = 2;
                    case 2:
                        if (!!notResolvedMatchers_1_1.done) return [3 /*break*/, 10];
                        matcher = notResolvedMatchers_1_1.value;
                        resolvedMatcher = void 0;
                        return [4 /*yield*/, this.problemMatcherRegistry.onReady()];
                    case 3:
                        _b.sent();
                        if (!(typeof matcher === 'string')) return [3 /*break*/, 4];
                        resolvedMatcher = this.problemMatcherRegistry.get(matcher);
                        return [3 /*break*/, 6];
                    case 4: return [4 /*yield*/, this.problemMatcherRegistry.getProblemMatcherFromContribution(matcher)];
                    case 5:
                        resolvedMatcher = _b.sent();
                        _b.label = 6;
                    case 6:
                        if (!resolvedMatcher) return [3 /*break*/, 9];
                        scope = task._scope || task._source;
                        if (!(resolvedMatcher.filePrefix && scope)) return [3 /*break*/, 8];
                        options = {
                            context: new uri_1.default(scope).withScheme('file'),
                            configurationSection: 'tasks'
                        };
                        return [4 /*yield*/, this.variableResolverService.resolve(resolvedMatcher.filePrefix, options)];
                    case 7:
                        resolvedPrefix = _b.sent();
                        Object.assign(resolvedMatcher, { filePrefix: resolvedPrefix });
                        _b.label = 8;
                    case 8:
                        resolvedMatchers.push(resolvedMatcher);
                        _b.label = 9;
                    case 9:
                        notResolvedMatchers_1_1 = notResolvedMatchers_1.next();
                        return [3 /*break*/, 2];
                    case 10: return [3 /*break*/, 13];
                    case 11:
                        e_2_1 = _b.sent();
                        e_2 = { error: e_2_1 };
                        return [3 /*break*/, 13];
                    case 12:
                        try {
                            if (notResolvedMatchers_1_1 && !notResolvedMatchers_1_1.done && (_a = notResolvedMatchers_1.return)) _a.call(notResolvedMatchers_1);
                        }
                        finally { if (e_2) throw e_2.error; }
                        return [7 /*endfinally*/];
                    case 13: return [3 /*break*/, 15];
                    case 14:
                        resolvedMatchers = undefined;
                        _b.label = 15;
                    case 15: return [2 /*return*/, resolvedMatchers];
                }
            });
        });
    };
    TaskService.prototype.getTaskCustomization = function (task) {
        return __awaiter(this, void 0, void 0, function () {
            var customizationObject, customizationFound;
            return __generator(this, function (_a) {
                customizationObject = { type: '' };
                customizationFound = this.taskConfigurations.getCustomizationForTask(task);
                if (customizationFound) {
                    Object.assign(customizationObject, customizationFound);
                }
                else {
                    Object.assign(customizationObject, {
                        type: task.type,
                        problemMatcher: task.problemMatcher
                    });
                }
                return [2 /*return*/, customizationObject];
            });
        });
    };
    TaskService.prototype.removeProblemMarks = function (option) {
        return __awaiter(this, void 0, void 0, function () {
            var matchersFromOption, _loop_1, this_1, matchersFromOption_1, matchersFromOption_1_1, matcher;
            var e_3, _a;
            var _this = this;
            return __generator(this, function (_b) {
                if (option && option.customization) {
                    matchersFromOption = option.customization.problemMatcher || [];
                    _loop_1 = function (matcher) {
                        if (matcher && matcher.owner) {
                            var existingMarkers = this_1.problemManager.findMarkers({ owner: matcher.owner });
                            var uris_1 = new Set();
                            existingMarkers.forEach(function (marker) { return uris_1.add(marker.uri); });
                            uris_1.forEach(function (uriString) { return _this.problemManager.setMarkers(new uri_1.default(uriString), matcher.owner, []); });
                        }
                    };
                    this_1 = this;
                    try {
                        for (matchersFromOption_1 = __values(matchersFromOption), matchersFromOption_1_1 = matchersFromOption_1.next(); !matchersFromOption_1_1.done; matchersFromOption_1_1 = matchersFromOption_1.next()) {
                            matcher = matchersFromOption_1_1.value;
                            _loop_1(matcher);
                        }
                    }
                    catch (e_3_1) { e_3 = { error: e_3_1 }; }
                    finally {
                        try {
                            if (matchersFromOption_1_1 && !matchersFromOption_1_1.done && (_a = matchersFromOption_1.return)) _a.call(matchersFromOption_1);
                        }
                        finally { if (e_3) throw e_3.error; }
                    }
                }
                return [2 /*return*/];
            });
        });
    };
    TaskService.prototype.getResolvedTask = function (task) {
        return __awaiter(this, void 0, void 0, function () {
            var resolver, resolvedTask, _a, error_1, errMessage;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.taskResolverRegistry.getResolver(task.type)];
                    case 1:
                        resolver = _b.sent();
                        _b.label = 2;
                    case 2:
                        _b.trys.push([2, 6, , 7]);
                        if (!resolver) return [3 /*break*/, 4];
                        return [4 /*yield*/, resolver.resolveTask(task)];
                    case 3:
                        _a = _b.sent();
                        return [3 /*break*/, 5];
                    case 4:
                        _a = task;
                        _b.label = 5;
                    case 5:
                        resolvedTask = _a;
                        this.addRecentTasks(task);
                        return [2 /*return*/, resolvedTask];
                    case 6:
                        error_1 = _b.sent();
                        errMessage = "Error resolving task '" + task.label + "': " + error_1;
                        this.logger.error(errMessage);
                        this.messageService.error(errMessage);
                        return [3 /*break*/, 7];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Runs the resolved task and opens terminal widget if the task is based on a terminal process
     * @param resolvedTask the resolved task
     * @param option options to run the resolved task
     */
    TaskService.prototype.runResolvedTask = function (resolvedTask, option) {
        return __awaiter(this, void 0, void 0, function () {
            var source, taskLabel, taskInfo, error_2, errorStr;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        source = resolvedTask._source;
                        taskLabel = resolvedTask.label;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.taskServer.run(resolvedTask, this.getContext(), option)];
                    case 2:
                        taskInfo = _a.sent();
                        this.lastTask = { source: source, taskLabel: taskLabel };
                        this.logger.debug("Task created. Task id: " + taskInfo.taskId);
                        /**
                         * open terminal widget if the task is based on a terminal process (type: 'shell' or 'process')
                         *
                         * @todo Use a different mechanism to determine if the task should be attached?
                         *       Reason: Maybe a new task type wants to also be displayed in a terminal.
                         */
                        if (typeof taskInfo.terminalId === 'number') {
                            this.attach(taskInfo.terminalId, taskInfo.taskId);
                        }
                        return [2 /*return*/, taskInfo];
                    case 3:
                        error_2 = _a.sent();
                        errorStr = "Error launching task '" + taskLabel + "': " + error_2.message;
                        this.logger.error(errorStr);
                        this.messageService.error(errorStr);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    TaskService.prototype.getCustomizeProblemMatcherItems = function () {
        var items = [];
        items.push({
            label: 'Continue without scanning the task output',
            value: { problemMatchers: undefined }
        });
        items.push({
            label: 'Never scan the task output',
            value: { problemMatchers: [] }
        });
        items.push({
            label: 'Learn more about scanning the task output',
            value: { problemMatchers: undefined, learnMore: true }
        });
        items.push({ type: 'separator', label: 'registered parsers' });
        var registeredProblemMatchers = this.problemMatcherRegistry.getAll();
        items.push.apply(items, __spread(registeredProblemMatchers.map(function (matcher) {
            return ({
                label: matcher.label,
                value: { problemMatchers: [matcher] },
                description: matcher.name.startsWith('$') ? matcher.name : "$" + matcher.name
            });
        })));
        return items;
    };
    /**
     * Run selected text in the last active terminal.
     */
    TaskService.prototype.runSelectedText = function () {
        return __awaiter(this, void 0, void 0, function () {
            var startLine, startCharacter, endLine, endCharacter, selectedRange, selectedText, terminal;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.editorManager.currentEditor) {
                            return [2 /*return*/];
                        }
                        startLine = this.editorManager.currentEditor.editor.selection.start.line;
                        startCharacter = this.editorManager.currentEditor.editor.selection.start.character;
                        endLine = this.editorManager.currentEditor.editor.selection.end.line;
                        endCharacter = this.editorManager.currentEditor.editor.selection.end.character;
                        selectedRange = vscode_languageserver_types_1.Range.create(startLine, startCharacter, endLine, endCharacter);
                        // if no text is selected, default to selecting entire line
                        if (startLine === endLine && startCharacter === endCharacter) {
                            selectedRange = vscode_languageserver_types_1.Range.create(startLine, 0, endLine + 1, 0);
                        }
                        selectedText = this.editorManager.currentEditor.editor.document.getText(selectedRange).trimRight() + '\n';
                        terminal = this.terminalService.currentTerminal;
                        if (!!terminal) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.terminalService.newTerminal({ created: new Date().toString() })];
                    case 1:
                        terminal = (_a.sent());
                        return [4 /*yield*/, terminal.start()];
                    case 2:
                        _a.sent();
                        this.terminalService.activateTerminal(terminal);
                        _a.label = 3;
                    case 3:
                        terminal.sendText(selectedText);
                        return [2 /*return*/];
                }
            });
        });
    };
    TaskService.prototype.attach = function (processId, taskId) {
        return __awaiter(this, void 0, void 0, function () {
            var runningTasks, taskInfo, widget;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getRunningTasks()];
                    case 1:
                        runningTasks = _a.sent();
                        taskInfo = runningTasks.find(function (t) { return t.taskId === taskId; });
                        return [4 /*yield*/, this.widgetManager.getOrCreateWidget(terminal_widget_impl_1.TERMINAL_WIDGET_FACTORY_ID, {
                                created: new Date().toString(),
                                id: this.getTerminalWidgetId(processId),
                                title: taskInfo
                                    ? "Task: " + taskInfo.config.label
                                    : "Task: #" + taskId,
                                destroyTermOnClose: true
                            })];
                    case 2:
                        widget = _a.sent();
                        this.shell.addWidget(widget, { area: 'bottom' });
                        this.shell.activateWidget(widget.id);
                        widget.start(processId);
                        return [2 /*return*/];
                }
            });
        });
    };
    TaskService.prototype.getTerminalWidgetId = function (terminalId) {
        return terminal_widget_impl_1.TERMINAL_WIDGET_FACTORY_ID + "-" + terminalId;
    };
    TaskService.prototype.configure = function (task) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.taskConfigurations.configure(task)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    TaskService.prototype.isEventForThisClient = function (context) {
        if (context === this.getContext()) {
            return true;
        }
        return false;
    };
    TaskService.prototype.taskConfigurationChanged = function (event) {
        // do nothing for now
    };
    TaskService.prototype.getContext = function () {
        return this.workspaceService.workspace && this.workspaceService.workspace.uri;
    };
    /** Kill task for a given id if task is found */
    TaskService.prototype.kill = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.taskServer.kill(id)];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        error_3 = _a.sent();
                        this.logger.error("Error killing task '" + id + "': " + error_3);
                        this.messageService.error("Error killing task '" + id + "': " + error_3);
                        return [2 /*return*/];
                    case 3:
                        this.logger.debug("Task killed. Task id: " + id);
                        return [2 /*return*/];
                }
            });
        });
    };
    TaskService.prototype.getExitCode = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var completedTask;
            return __generator(this, function (_a) {
                completedTask = this.runningTasks.get(id);
                return [2 /*return*/, completedTask && completedTask.exitCode.promise];
            });
        });
    };
    TaskService.prototype.getTerminateSignal = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var completedTask;
            return __generator(this, function (_a) {
                completedTask = this.runningTasks.get(id);
                return [2 /*return*/, completedTask && completedTask.terminateSignal.promise];
            });
        });
    };
    __decorate([
        inversify_1.inject(browser_1.FrontendApplication),
        __metadata("design:type", browser_1.FrontendApplication)
    ], TaskService.prototype, "app", void 0);
    __decorate([
        inversify_1.inject(browser_1.ApplicationShell),
        __metadata("design:type", browser_1.ApplicationShell)
    ], TaskService.prototype, "shell", void 0);
    __decorate([
        inversify_1.inject(common_2.TaskServer),
        __metadata("design:type", Object)
    ], TaskService.prototype, "taskServer", void 0);
    __decorate([
        inversify_1.inject(common_1.ILogger), inversify_1.named('task'),
        __metadata("design:type", Object)
    ], TaskService.prototype, "logger", void 0);
    __decorate([
        inversify_1.inject(browser_1.WidgetManager),
        __metadata("design:type", browser_1.WidgetManager)
    ], TaskService.prototype, "widgetManager", void 0);
    __decorate([
        inversify_1.inject(task_watcher_1.TaskWatcher),
        __metadata("design:type", task_watcher_1.TaskWatcher)
    ], TaskService.prototype, "taskWatcher", void 0);
    __decorate([
        inversify_1.inject(message_service_1.MessageService),
        __metadata("design:type", message_service_1.MessageService)
    ], TaskService.prototype, "messageService", void 0);
    __decorate([
        inversify_1.inject(workspace_service_1.WorkspaceService),
        __metadata("design:type", workspace_service_1.WorkspaceService)
    ], TaskService.prototype, "workspaceService", void 0);
    __decorate([
        inversify_1.inject(task_configurations_1.TaskConfigurations),
        __metadata("design:type", task_configurations_1.TaskConfigurations)
    ], TaskService.prototype, "taskConfigurations", void 0);
    __decorate([
        inversify_1.inject(provided_task_configurations_1.ProvidedTaskConfigurations),
        __metadata("design:type", provided_task_configurations_1.ProvidedTaskConfigurations)
    ], TaskService.prototype, "providedTaskConfigurations", void 0);
    __decorate([
        inversify_1.inject(browser_3.VariableResolverService),
        __metadata("design:type", browser_3.VariableResolverService)
    ], TaskService.prototype, "variableResolverService", void 0);
    __decorate([
        inversify_1.inject(task_contribution_1.TaskResolverRegistry),
        __metadata("design:type", task_contribution_1.TaskResolverRegistry)
    ], TaskService.prototype, "taskResolverRegistry", void 0);
    __decorate([
        inversify_1.inject(terminal_service_1.TerminalService),
        __metadata("design:type", Object)
    ], TaskService.prototype, "terminalService", void 0);
    __decorate([
        inversify_1.inject(browser_2.EditorManager),
        __metadata("design:type", browser_2.EditorManager)
    ], TaskService.prototype, "editorManager", void 0);
    __decorate([
        inversify_1.inject(problem_manager_1.ProblemManager),
        __metadata("design:type", problem_manager_1.ProblemManager)
    ], TaskService.prototype, "problemManager", void 0);
    __decorate([
        inversify_1.inject(task_definition_registry_1.TaskDefinitionRegistry),
        __metadata("design:type", task_definition_registry_1.TaskDefinitionRegistry)
    ], TaskService.prototype, "taskDefinitionRegistry", void 0);
    __decorate([
        inversify_1.inject(task_problem_matcher_registry_1.ProblemMatcherRegistry),
        __metadata("design:type", task_problem_matcher_registry_1.ProblemMatcherRegistry)
    ], TaskService.prototype, "problemMatcherRegistry", void 0);
    __decorate([
        inversify_1.inject(quick_pick_service_1.QuickPickService),
        __metadata("design:type", Object)
    ], TaskService.prototype, "quickPick", void 0);
    __decorate([
        inversify_1.inject(opener_service_1.OpenerService),
        __metadata("design:type", Object)
    ], TaskService.prototype, "openerService", void 0);
    __decorate([
        inversify_1.inject(task_name_resolver_1.TaskNameResolver),
        __metadata("design:type", task_name_resolver_1.TaskNameResolver)
    ], TaskService.prototype, "taskNameResolver", void 0);
    __decorate([
        inversify_1.inject(task_source_resolver_1.TaskSourceResolver),
        __metadata("design:type", task_source_resolver_1.TaskSourceResolver)
    ], TaskService.prototype, "taskSourceResolver", void 0);
    __decorate([
        inversify_1.inject(task_schema_updater_1.TaskSchemaUpdater),
        __metadata("design:type", task_schema_updater_1.TaskSchemaUpdater)
    ], TaskService.prototype, "taskSchemaUpdater", void 0);
    __decorate([
        inversify_1.inject(task_configuration_manager_1.TaskConfigurationManager),
        __metadata("design:type", task_configuration_manager_1.TaskConfigurationManager)
    ], TaskService.prototype, "taskConfigurationManager", void 0);
    __decorate([
        inversify_1.inject(common_1.CommandService),
        __metadata("design:type", Object)
    ], TaskService.prototype, "commands", void 0);
    __decorate([
        inversify_1.inject(label_provider_1.LabelProvider),
        __metadata("design:type", label_provider_1.LabelProvider)
    ], TaskService.prototype, "labelProvider", void 0);
    __decorate([
        inversify_1.inject(task_contribution_1.TaskProviderRegistry),
        __metadata("design:type", task_contribution_1.TaskProviderRegistry)
    ], TaskService.prototype, "taskProviderRegistry", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], TaskService.prototype, "init", null);
    TaskService = __decorate([
        inversify_1.injectable()
    ], TaskService);
    return TaskService;
}());
exports.TaskService = TaskService;


/***/ }),

/***/ "./node_modules/@theia/task/lib/browser/task-source-resolver.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@theia/task/lib/browser/task-source-resolver.js ***!
  \**********************************************************************/
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
var task_definition_registry_1 = __webpack_require__(/*! ./task-definition-registry */ "./node_modules/@theia/task/lib/browser/task-definition-registry.js");
var TaskSourceResolver = /** @class */ (function () {
    function TaskSourceResolver() {
    }
    /**
     * Returns task source to display.
     */
    TaskSourceResolver.prototype.resolve = function (task) {
        var isDetectedTask = this.isDetectedTask(task);
        var sourceFolderUri;
        if (isDetectedTask) {
            sourceFolderUri = task._scope;
        }
        else {
            sourceFolderUri = task._source;
        }
        return sourceFolderUri;
    };
    TaskSourceResolver.prototype.isDetectedTask = function (task) {
        return !!this.taskDefinitionRegistry.getDefinition(task);
    };
    __decorate([
        inversify_1.inject(task_definition_registry_1.TaskDefinitionRegistry),
        __metadata("design:type", task_definition_registry_1.TaskDefinitionRegistry)
    ], TaskSourceResolver.prototype, "taskDefinitionRegistry", void 0);
    TaskSourceResolver = __decorate([
        inversify_1.injectable()
    ], TaskSourceResolver);
    return TaskSourceResolver;
}());
exports.TaskSourceResolver = TaskSourceResolver;


/***/ }),

/***/ "./node_modules/@theia/task/lib/browser/task-templates.js":
/*!****************************************************************!*\
  !*** ./node_modules/@theia/task/lib/browser/task-templates.js ***!
  \****************************************************************/
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
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var dotnetBuild = {
    id: 'dotnetCore',
    label: '.NET Core',
    sort: 'NET Core',
    autoDetect: false,
    description: 'Executes .NET Core build command',
    content: [
        '{',
        '\t// See https://go.microsoft.com/fwlink/?LinkId=733558',
        '\t// for the documentation about the tasks.json format',
        '\t"version": "2.0.0",',
        '\t"tasks": [',
        '\t\t{',
        '\t\t\t"label": "build",',
        '\t\t\t"command": "dotnet",',
        '\t\t\t"type": "shell",',
        '\t\t\t"args": [',
        '\t\t\t\t"build",',
        '\t\t\t\t// Ask dotnet build to generate full paths for file names.',
        '\t\t\t\t"/property:GenerateFullPaths=true",',
        '\t\t\t\t// Do not generate summary otherwise it leads to duplicate errors in Problems panel',
        '\t\t\t\t"/consoleloggerparameters:NoSummary"',
        '\t\t\t],',
        '\t\t\t"group": "build",',
        '\t\t\t"presentation": {',
        '\t\t\t\t"reveal": "silent"',
        '\t\t\t},',
        '\t\t\t"problemMatcher": "$msCompile"',
        '\t\t}',
        '\t]',
        '}'
    ].join('\n')
};
var msbuild = {
    id: 'msbuild',
    label: 'MSBuild',
    autoDetect: false,
    description: 'Executes the build target',
    content: [
        '{',
        '\t// See https://go.microsoft.com/fwlink/?LinkId=733558',
        '\t// for the documentation about the tasks.json format',
        '\t"version": "2.0.0",',
        '\t"tasks": [',
        '\t\t{',
        '\t\t\t"label": "build",',
        '\t\t\t"type": "shell",',
        '\t\t\t"command": "msbuild",',
        '\t\t\t"args": [',
        '\t\t\t\t// Ask msbuild to generate full paths for file names.',
        '\t\t\t\t"/property:GenerateFullPaths=true",',
        '\t\t\t\t"/t:build",',
        '\t\t\t\t// Do not generate summary otherwise it leads to duplicate errors in Problems panel',
        '\t\t\t\t"/consoleloggerparameters:NoSummary"',
        '\t\t\t],',
        '\t\t\t"group": "build",',
        '\t\t\t"presentation": {',
        '\t\t\t\t// Reveal the output only if unrecognized errors occur.',
        '\t\t\t\t"reveal": "silent"',
        '\t\t\t},',
        '\t\t\t// Use the standard MS compiler pattern to detect errors, warnings and infos',
        '\t\t\t"problemMatcher": "$msCompile"',
        '\t\t}',
        '\t]',
        '}'
    ].join('\n')
};
var maven = {
    id: 'maven',
    label: 'maven',
    sort: 'MVN',
    autoDetect: false,
    description: 'Executes common maven commands',
    content: [
        '{',
        '\t// See https://go.microsoft.com/fwlink/?LinkId=733558',
        '\t// for the documentation about the tasks.json format',
        '\t"version": "2.0.0",',
        '\t"tasks": [',
        '\t\t{',
        '\t\t\t"label": "verify",',
        '\t\t\t"type": "shell",',
        '\t\t\t"command": "mvn -B verify",',
        '\t\t\t"group": "build"',
        '\t\t},',
        '\t\t{',
        '\t\t\t"label": "test",',
        '\t\t\t"type": "shell",',
        '\t\t\t"command": "mvn -B test",',
        '\t\t\t"group": "test"',
        '\t\t}',
        '\t]',
        '}'
    ].join('\n')
};
var command = {
    id: 'externalCommand',
    label: 'Others',
    autoDetect: false,
    description: 'Example to run an arbitrary external command',
    content: [
        '{',
        '\t// See https://go.microsoft.com/fwlink/?LinkId=733558',
        '\t// for the documentation about the tasks.json format',
        '\t"version": "2.0.0",',
        '\t"tasks": [',
        '\t\t{',
        '\t\t\t"label": "echo",',
        '\t\t\t"type": "shell",',
        '\t\t\t"command": "echo Hello"',
        '\t\t}',
        '\t]',
        '}'
    ].join('\n')
};
var TaskTemplateSelector = /** @class */ (function () {
    function TaskTemplateSelector() {
    }
    TaskTemplateSelector.prototype.selectTemplates = function () {
        var templates = [
            dotnetBuild, msbuild, maven
        ].sort(function (a, b) {
            return (a.sort || a.label).localeCompare(b.sort || b.label);
        });
        templates.push(command);
        return templates.map(function (t) { return ({
            label: t.label,
            description: t.description,
            value: t
        }); });
    };
    TaskTemplateSelector = __decorate([
        inversify_1.injectable()
    ], TaskTemplateSelector);
    return TaskTemplateSelector;
}());
exports.TaskTemplateSelector = TaskTemplateSelector;


/***/ }),

/***/ "./node_modules/@theia/task/lib/browser/tasks-monaco-contribution.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@theia/task/lib/browser/tasks-monaco-contribution.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

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
monaco.languages.register({
    id: 'jsonc',
    'aliases': [
        'JSON with Comments'
    ],
    'filenames': [
        'tasks.json'
    ]
});


/***/ }),

/***/ "./node_modules/@theia/task/lib/common/task-common-module.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@theia/task/lib/common/task-common-module.js ***!
  \*******************************************************************/
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
var core_1 = __webpack_require__(/*! @theia/core */ "./node_modules/@theia/core/lib/common/index.js");
var task_watcher_1 = __webpack_require__(/*! ./task-watcher */ "./node_modules/@theia/task/lib/common/task-watcher.js");
/**
 * Create the bindings common to node and browser.
 *
 * @param bind The bind function from inversify.
 */
function createCommonBindings(bind) {
    bind(core_1.ILogger).toDynamicValue(function (ctx) {
        var logger = ctx.container.get(core_1.ILogger);
        return logger.child('task');
    }).inSingletonScope().whenTargetNamed('task');
    bind(task_watcher_1.TaskWatcher).toSelf().inSingletonScope();
}
exports.createCommonBindings = createCommonBindings;


/***/ }),

/***/ "./node_modules/@theia/task/src/browser/style/configure-inverse.svg":
/*!**************************************************************************!*\
  !*** ./node_modules/@theia/task/src/browser/style/configure-inverse.svg ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PCEtLUNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLi0tPgo8IS0tTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi4tLT4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiI+PGcgZmlsbD0iI0M1QzVDNSI+PHBhdGggZD0iTTEyLjcxNCA5LjYwM2MtLjA3LjIwNy0uMTUuNDA3LS4yNDYuNjAxbDEuMDE3IDIuMTM5Yy0uMzM1LjQyNC0uNzE4LjgwNy0xLjE0MiAxLjE0M2wtMi4xNC0xLjAxOGMtLjE5My4wOTctLjM5NC4xNzYtLjYwMS4yNDdsLS43OTUgMi4yMzVjLS4yNjUuMDMtLjUzNC4wNS0uODA3LjA1LS4yNzIgMC0uNTQxLS4wMi0uODA2LS4wNWwtLjc5NS0yLjIzNWMtLjIwNy0uMDcxLS40MDgtLjE1LS42MDItLjI0N2wtMi4xNCAxLjAxN2MtLjQyNC0uMzM2LS44MDctLjcxOS0xLjE0My0xLjE0M2wxLjAxNy0yLjEzOWMtLjA5NC0uMTkzLS4xNzUtLjM5My0uMjQ1LS42bC0yLjIzNi0uNzk2Yy0uMDMtLjI2NS0uMDUtLjUzNC0uMDUtLjgwN3MuMDItLjU0Mi4wNS0uODA3bDIuMjM2LS43OTVjLjA3LS4yMDcuMTUtLjQwNy4yNDYtLjYwMWwtMS4wMTYtMi4xMzljLjMzNi0uNDIzLjcxOS0uODA3IDEuMTQzLTEuMTQybDIuMTQgMS4wMTdjLjE5My0uMDk2LjM5NC0uMTc2LjYwMi0uMjQ3bC43OTMtMi4yMzZjLjI2NS0uMDMuNTM0LS4wNS44MDYtLjA1LjI3MyAwIC41NDIuMDIuODA4LjA1bC43OTUgMi4yMzZjLjIwNy4wNy40MDcuMTUuNjAxLjI0NmwyLjE0LTEuMDE3Yy40MjQuMzM1LjgwNy43MTkgMS4xNDIgMS4xNDJsLTEuMDE3IDIuMTM5Yy4wOTYuMTk0LjE3Ni4zOTQuMjQ2LjYwMWwyLjIzNi43OTVjLjAyOS4yNjYuMDQ5LjUzNS4wNDkuODA4cy0uMDIuNTQyLS4wNS44MDdsLTIuMjM2Ljc5NnptLTQuNzE0LTQuNjAzYy0xLjY1NyAwLTMgMS4zNDMtMyAzczEuMzQzIDMgMyAzIDMtMS4zNDMgMy0zLTEuMzQzLTMtMy0zeiIvPjxjaXJjbGUgY3g9IjgiIGN5PSI4IiByPSIxLjUiLz48L2c+PC9zdmc+Cg=="

/***/ }),

/***/ "./node_modules/@theia/task/src/browser/style/configure.svg":
/*!******************************************************************!*\
  !*** ./node_modules/@theia/task/src/browser/style/configure.svg ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PCEtLUNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLi0tPgo8IS0tTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi4tLT4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiI+PGcgZmlsbD0iIzQyNDI0MiI+PHBhdGggZD0iTTEyLjcxNCA5LjYwM2MtLjA3LjIwNy0uMTUuNDA3LS4yNDYuNjAxbDEuMDE3IDIuMTM5Yy0uMzM1LjQyNC0uNzE4LjgwNy0xLjE0MiAxLjE0M2wtMi4xNC0xLjAxOGMtLjE5My4wOTctLjM5NC4xNzYtLjYwMS4yNDdsLS43OTUgMi4yMzVjLS4yNjUuMDMtLjUzNC4wNS0uODA3LjA1LS4yNzIgMC0uNTQxLS4wMi0uODA2LS4wNWwtLjc5NS0yLjIzNWMtLjIwNy0uMDcxLS40MDgtLjE1LS42MDItLjI0N2wtMi4xNCAxLjAxN2MtLjQyNC0uMzM2LS44MDctLjcxOS0xLjE0My0xLjE0M2wxLjAxNy0yLjEzOWMtLjA5NC0uMTkzLS4xNzUtLjM5My0uMjQ1LS42bC0yLjIzNi0uNzk2Yy0uMDMtLjI2NS0uMDUtLjUzNC0uMDUtLjgwN3MuMDItLjU0Mi4wNS0uODA3bDIuMjM2LS43OTVjLjA3LS4yMDcuMTUtLjQwNy4yNDYtLjYwMWwtMS4wMTYtMi4xMzljLjMzNi0uNDIzLjcxOS0uODA3IDEuMTQzLTEuMTQybDIuMTQgMS4wMTdjLjE5My0uMDk2LjM5NC0uMTc2LjYwMi0uMjQ3bC43OTMtMi4yMzZjLjI2NS0uMDMuNTM0LS4wNS44MDYtLjA1LjI3MyAwIC41NDIuMDIuODA4LjA1bC43OTUgMi4yMzZjLjIwNy4wNy40MDcuMTUuNjAxLjI0NmwyLjE0LTEuMDE3Yy40MjQuMzM1LjgwNy43MTkgMS4xNDIgMS4xNDJsLTEuMDE3IDIuMTM5Yy4wOTYuMTk0LjE3Ni4zOTQuMjQ2LjYwMWwyLjIzNi43OTVjLjAyOS4yNjYuMDQ5LjUzNS4wNDkuODA4cy0uMDIuNTQyLS4wNS44MDdsLTIuMjM2Ljc5NnptLTQuNzE0LTQuNjAzYy0xLjY1NyAwLTMgMS4zNDMtMyAzczEuMzQzIDMgMyAzIDMtMS4zNDMgMy0zLTEuMzQzLTMtMy0zeiIvPjxjaXJjbGUgY3g9IjgiIGN5PSI4IiByPSIxLjUiLz48L2c+PC9zdmc+Cg=="

/***/ }),

/***/ "./node_modules/@theia/task/src/browser/style/index.css":
/*!**************************************************************!*\
  !*** ./node_modules/@theia/task/src/browser/style/index.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../css-loader!./index.css */ "./node_modules/css-loader/index.js!./node_modules/@theia/task/src/browser/style/index.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/@theia/variable-resolver/lib/browser/variable-input-schema.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@theia/variable-resolver/lib/browser/variable-input-schema.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2019 TypeFox and others.
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
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
/*
 * copied from
 * https://github.com/microsoft/vscode/blob/0a34756cae4fc67739e60c708b04637089f8bb0d/src/vs/workbench/services/configurationResolver/common/configurationResolverSchema.ts#L23
 */
Object.defineProperty(exports, "__esModule", { value: true });
var idDescription = "The input's id is used to associate an input with a variable of the form ${input:id}.";
var typeDescription = 'The type of user input prompt to use.';
var descriptionDescription = 'The description is shown when the user is prompted for input.';
var defaultDescription = 'The default value for the input.';
exports.inputsSchema = {
    definitions: {
        inputs: {
            type: 'array',
            description: 'User inputs. Used for defining user input prompts, such as free string input or a choice from several options.',
            items: {
                oneOf: [
                    {
                        type: 'object',
                        required: ['id', 'type', 'description'],
                        additionalProperties: false,
                        properties: {
                            id: {
                                type: 'string',
                                description: idDescription
                            },
                            type: {
                                type: 'string',
                                description: typeDescription,
                                enum: ['promptString'],
                                enumDescriptions: [
                                    "The 'promptString' type opens an input box to ask the user for input."
                                ]
                            },
                            description: {
                                type: 'string',
                                description: descriptionDescription
                            },
                            default: {
                                type: 'string',
                                description: defaultDescription
                            },
                        }
                    },
                    {
                        type: 'object',
                        required: ['id', 'type', 'description', 'options'],
                        additionalProperties: false,
                        properties: {
                            id: {
                                type: 'string',
                                description: idDescription
                            },
                            type: {
                                type: 'string',
                                description: typeDescription,
                                enum: ['pickString'],
                                enumDescriptions: [
                                    "The 'pickString' type shows a selection list.",
                                ]
                            },
                            description: {
                                type: 'string',
                                description: descriptionDescription
                            },
                            default: {
                                type: 'string',
                                description: defaultDescription
                            },
                            options: {
                                type: 'array',
                                description: 'An array of strings that defines the options for a quick pick.',
                                items: {
                                    type: 'string'
                                }
                            }
                        }
                    },
                    {
                        type: 'object',
                        required: ['id', 'type', 'command'],
                        additionalProperties: false,
                        properties: {
                            id: {
                                type: 'string',
                                description: idDescription
                            },
                            type: {
                                type: 'string',
                                description: typeDescription,
                                enum: ['command'],
                                enumDescriptions: [
                                    "The 'command' type executes a command.",
                                ]
                            },
                            command: {
                                type: 'string',
                                description: 'The command to execute for this input variable.'
                            },
                            args: {
                                type: 'object',
                                description: 'Optional arguments passed to the command.'
                            }
                        }
                    }
                ]
            }
        }
    }
};


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/@theia/task/src/browser/style/index.css":
/*!****************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/@theia/task/src/browser/style/index.css ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(/*! ../../../../../css-loader/lib/url/escape.js */ "./node_modules/css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__(/*! ../../../../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/********************************************************************************\n * Copyright (C) 2019 Red Hat, Inc. and others.\n *\n * This program and the accompanying materials are made available under the\n * terms of the Eclipse Public License v. 2.0 which is available at\n * http://www.eclipse.org/legal/epl-2.0.\n *\n * This Source Code may also be made available under the following Secondary\n * Licenses when the conditions for such availability set forth in the Eclipse\n * Public License v. 2.0 are satisfied: GNU General Public License, version 2\n * with the GNU Classpath Exception which is available at\n * https://www.gnu.org/software/classpath/license.html.\n *\n * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0\n ********************************************************************************/\n\n .quick-open-task-configure-dark {\n    background-image: url(" + escape(__webpack_require__(/*! ./configure-inverse.svg */ "./node_modules/@theia/task/src/browser/style/configure-inverse.svg")) + ");\n    background-position-y: -2px;\n}\n\n.quick-open-task-configure-bright {\n    background-image: url(" + escape(__webpack_require__(/*! ./configure.svg */ "./node_modules/@theia/task/src/browser/style/configure.svg")) + ");\n    background-position-y: -2px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/p-debounce/index.js":
/*!******************************************!*\
  !*** ./node_modules/p-debounce/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const pDebounce = (fn, wait, options = {}) => {
	if (!Number.isFinite(wait)) {
		throw new TypeError('Expected `wait` to be a finite number');
	}

	let leadingValue;
	let timer;
	let resolveList = [];

	return function (...arguments_) {
		return new Promise(resolve => {
			const runImmediately = options.leading && !timer;

			clearTimeout(timer);

			timer = setTimeout(() => {
				timer = null;

				const result = options.leading ? leadingValue : fn.apply(this, arguments_);

				for (resolve of resolveList) {
					resolve(result);
				}

				resolveList = [];
			}, wait);

			if (runImmediately) {
				leadingValue = fn.apply(this, arguments_);
				resolve(leadingValue);
			} else {
				resolveList.push(resolve);
			}
		});
	};
};

module.exports = pDebounce;
// TODO: Remove this for the next major release
module.exports.default = pDebounce;


/***/ })

}]);
//# sourceMappingURL=37.bundle.js.map