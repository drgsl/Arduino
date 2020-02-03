(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[26],{

/***/ "./node_modules/@theia/core/lib/common/severity.js":
/*!*********************************************************!*\
  !*** ./node_modules/@theia/core/lib/common/severity.js ***!
  \*********************************************************/
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
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
var vscode_languageserver_types_1 = __webpack_require__(/*! vscode-languageserver-types */ "./node_modules/vscode-languageserver-types/lib/esm/main.js");
var Severity;
(function (Severity) {
    Severity[Severity["Ignore"] = 0] = "Ignore";
    Severity[Severity["Error"] = 1] = "Error";
    Severity[Severity["Warning"] = 2] = "Warning";
    Severity[Severity["Info"] = 3] = "Info";
    Severity[Severity["Log"] = 4] = "Log";
})(Severity = exports.Severity || (exports.Severity = {}));
(function (Severity) {
    var error = 'Errors';
    var warning = 'Warnings';
    var info = 'Info';
    var log = 'Log';
    var ignore = 'All';
    function fromValue(value) {
        value = value && value.toLowerCase();
        if (!value) {
            return Severity.Ignore;
        }
        if (['error', 'errors'].indexOf(value) !== -1) {
            return Severity.Error;
        }
        if (['warn', 'warning', 'warnings'].indexOf(value) !== -1) {
            return Severity.Warning;
        }
        if (value === 'info') {
            return Severity.Info;
        }
        if (value === 'log') {
            return Severity.Log;
        }
        return Severity.Ignore;
    }
    Severity.fromValue = fromValue;
    function toDiagnosticSeverity(value) {
        switch (value) {
            case Severity.Ignore:
                return vscode_languageserver_types_1.DiagnosticSeverity.Hint;
            case Severity.Info:
                return vscode_languageserver_types_1.DiagnosticSeverity.Information;
            case Severity.Log:
                return vscode_languageserver_types_1.DiagnosticSeverity.Information;
            case Severity.Warning:
                return vscode_languageserver_types_1.DiagnosticSeverity.Warning;
            case Severity.Error:
                return vscode_languageserver_types_1.DiagnosticSeverity.Error;
            default:
                return vscode_languageserver_types_1.DiagnosticSeverity.Error;
        }
    }
    Severity.toDiagnosticSeverity = toDiagnosticSeverity;
    function toString(severity) {
        switch (severity) {
            case Severity.Error:
                return error;
            case Severity.Warning:
                return warning;
            case Severity.Info:
                return info;
            case Severity.Log:
                return log;
            default:
                return ignore;
        }
    }
    Severity.toString = toString;
    function toArray() {
        return [ignore, error, warning, info, log];
    }
    Severity.toArray = toArray;
})(Severity = exports.Severity || (exports.Severity = {}));


/***/ }),

/***/ "./node_modules/@theia/preferences/lib/browser/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/@theia/preferences/lib/browser/index.js ***!
  \**************************************************************/
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
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! @theia/core/lib/browser/preferences */ "./node_modules/@theia/core/lib/browser/preferences/index.js"));
__export(__webpack_require__(/*! ./abstract-resource-preference-provider */ "./node_modules/@theia/preferences/lib/browser/abstract-resource-preference-provider.js"));
__export(__webpack_require__(/*! ./user-preference-provider */ "./node_modules/@theia/preferences/lib/browser/user-preference-provider.js"));
__export(__webpack_require__(/*! ./workspace-preference-provider */ "./node_modules/@theia/preferences/lib/browser/workspace-preference-provider.js"));
__export(__webpack_require__(/*! ./folders-preferences-provider */ "./node_modules/@theia/preferences/lib/browser/folders-preferences-provider.js"));
__export(__webpack_require__(/*! ./folder-preference-provider */ "./node_modules/@theia/preferences/lib/browser/folder-preference-provider.js"));


/***/ }),

/***/ "./node_modules/@theia/task/lib/browser/task-contribution.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@theia/task/lib/browser/task-contribution.js ***!
  \*******************************************************************/
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
var event_1 = __webpack_require__(/*! @theia/core/lib/common/event */ "./node_modules/@theia/core/lib/common/event.js");
exports.TaskContribution = Symbol('TaskContribution');
var TaskResolverRegistry = /** @class */ (function () {
    function TaskResolverRegistry() {
        this.onWillProvideTaskResolverEmitter = new event_1.Emitter();
        this.onWillProvideTaskResolver = this.onWillProvideTaskResolverEmitter.event;
    }
    TaskResolverRegistry.prototype.init = function () {
        this.resolvers = new Map();
    };
    /** Registers the given Task Resolver to resolve the Task Configurations of the specified type. */
    TaskResolverRegistry.prototype.register = function (type, resolver) {
        var _this = this;
        this.resolvers.set(type, resolver);
        return {
            dispose: function () { return _this.resolvers.delete(type); }
        };
    };
    TaskResolverRegistry.prototype.getResolver = function (type) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, event_1.WaitUntilEvent.fire(this.onWillProvideTaskResolverEmitter, {})];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, this.resolvers.get(type)];
                }
            });
        });
    };
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], TaskResolverRegistry.prototype, "init", null);
    TaskResolverRegistry = __decorate([
        inversify_1.injectable()
    ], TaskResolverRegistry);
    return TaskResolverRegistry;
}());
exports.TaskResolverRegistry = TaskResolverRegistry;
var TaskProviderRegistry = /** @class */ (function () {
    function TaskProviderRegistry() {
        this.onWillProvideTaskProviderEmitter = new event_1.Emitter();
        this.onWillProvideTaskProvider = this.onWillProvideTaskProviderEmitter.event;
    }
    TaskProviderRegistry.prototype.init = function () {
        this.providers = new Map();
    };
    /** Registers the given Task Provider to return Task Configurations of the specified type. */
    TaskProviderRegistry.prototype.register = function (type, provider, handle) {
        var _this = this;
        var key = handle === undefined ? type : type + "::" + handle;
        this.providers.set(key, provider);
        return {
            dispose: function () { return _this.providers.delete(key); }
        };
    };
    TaskProviderRegistry.prototype.getProvider = function (type) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, event_1.WaitUntilEvent.fire(this.onWillProvideTaskProviderEmitter, {})];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, this.providers.get(type)];
                }
            });
        });
    };
    /** Returns all registered Task Providers. */
    TaskProviderRegistry.prototype.getProviders = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, event_1.WaitUntilEvent.fire(this.onWillProvideTaskProviderEmitter, {})];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, __spread(this.providers.values())];
                }
            });
        });
    };
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], TaskProviderRegistry.prototype, "init", null);
    TaskProviderRegistry = __decorate([
        inversify_1.injectable()
    ], TaskProviderRegistry);
    return TaskProviderRegistry;
}());
exports.TaskProviderRegistry = TaskProviderRegistry;


/***/ }),

/***/ "./node_modules/@theia/task/lib/browser/task-definition-registry.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@theia/task/lib/browser/task-definition-registry.js ***!
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
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
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var common_1 = __webpack_require__(/*! @theia/core/lib/common */ "./node_modules/@theia/core/lib/common/index.js");
var uri_1 = __webpack_require__(/*! @theia/core/lib/common/uri */ "./node_modules/@theia/core/lib/common/uri.js");
var disposable_1 = __webpack_require__(/*! @theia/core/lib/common/disposable */ "./node_modules/@theia/core/lib/common/disposable.js");
var TaskDefinitionRegistry = /** @class */ (function () {
    function TaskDefinitionRegistry() {
        // task type - array of task definitions
        this.definitions = new Map();
        this.onDidRegisterTaskDefinitionEmitter = new common_1.Emitter();
        this.onDidUnregisterTaskDefinitionEmitter = new common_1.Emitter();
    }
    Object.defineProperty(TaskDefinitionRegistry.prototype, "onDidRegisterTaskDefinition", {
        get: function () {
            return this.onDidRegisterTaskDefinitionEmitter.event;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TaskDefinitionRegistry.prototype, "onDidUnregisterTaskDefinition", {
        get: function () {
            return this.onDidUnregisterTaskDefinitionEmitter.event;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Returns all task definitions that are registered
     * @return the task definitions that are registered
     */
    TaskDefinitionRegistry.prototype.getAll = function () {
        var e_1, _a;
        var all = [];
        try {
            for (var _b = __values(this.definitions.values()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var definitions = _c.value;
                all.push.apply(all, __spread(definitions));
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return all;
    };
    /**
     * Finds the task definition(s) from the registry with the given `taskType`.
     *
     * @param taskType the type of the task
     * @return an array of the task definitions. If no task definitions are found, an empty array is returned.
     */
    TaskDefinitionRegistry.prototype.getDefinitions = function (taskType) {
        return this.definitions.get(taskType) || [];
    };
    /**
     * Finds the task definition from the registry for the task configuration.
     * The task configuration is considered as a "match" to the task definition if it has all the `required` properties.
     * In case that more than one task definition is found, return the one that has the biggest number of matched properties.
     *
     * @param taskConfiguration the task configuration
     * @return the task definition for the task configuration. If the task definition is not found, `undefined` is returned.
     */
    TaskDefinitionRegistry.prototype.getDefinition = function (taskConfiguration) {
        var e_2, _a;
        var definitions = this.getDefinitions(taskConfiguration.taskType || taskConfiguration.type);
        var matchedDefinition;
        var highest = -1;
        var _loop_1 = function (def) {
            var score = 0;
            if (!def.properties.required.every(function (requiredProp) { return taskConfiguration[requiredProp] !== undefined; })) {
                return "continue";
            }
            score += def.properties.required.length; // number of required properties
            var requiredProps = new Set(def.properties.required);
            // number of optional properties
            score += def.properties.all.filter(function (p) { return !requiredProps.has(p) && taskConfiguration[p] !== undefined; }).length;
            if (score > highest) {
                highest = score;
                matchedDefinition = def;
            }
        };
        try {
            for (var definitions_1 = __values(definitions), definitions_1_1 = definitions_1.next(); !definitions_1_1.done; definitions_1_1 = definitions_1.next()) {
                var def = definitions_1_1.value;
                _loop_1(def);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (definitions_1_1 && !definitions_1_1.done && (_a = definitions_1.return)) _a.call(definitions_1);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return matchedDefinition;
    };
    /**
     * Add a task definition to the registry.
     *
     * @param definition the task definition to be added.
     */
    TaskDefinitionRegistry.prototype.register = function (definition) {
        var _this = this;
        var taskType = definition.taskType;
        var definitions = this.definitions.get(taskType) || [];
        definitions.push(definition);
        this.definitions.set(taskType, definitions);
        this.onDidRegisterTaskDefinitionEmitter.fire(undefined);
        return disposable_1.Disposable.create(function () {
            var index = definitions.indexOf(definition);
            if (index !== -1) {
                definitions.splice(index, 1);
            }
            _this.onDidUnregisterTaskDefinitionEmitter.fire(undefined);
        });
    };
    TaskDefinitionRegistry.prototype.compareTasks = function (one, other) {
        var oneType = one.taskType || one.type;
        var otherType = other.taskType || other.type;
        if (oneType !== otherType) {
            return false;
        }
        var def = this.getDefinition(one);
        if (def) {
            var oneScope = new uri_1.default(one._scope).path.toString();
            var otherScope = new uri_1.default(other._scope).path.toString();
            return def.properties.all.every(function (p) { return p === 'type' || one[p] === other[p]; }) && oneScope === otherScope;
        }
        return one.label === other.label && one._source === other._source;
    };
    TaskDefinitionRegistry = __decorate([
        inversify_1.injectable()
    ], TaskDefinitionRegistry);
    return TaskDefinitionRegistry;
}());
exports.TaskDefinitionRegistry = TaskDefinitionRegistry;


/***/ }),

/***/ "./node_modules/@theia/task/lib/browser/task-problem-matcher-registry.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@theia/task/lib/browser/task-problem-matcher-registry.js ***!
  \*******************************************************************************/
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
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var common_1 = __webpack_require__(/*! @theia/core/lib/common */ "./node_modules/@theia/core/lib/common/index.js");
var disposable_1 = __webpack_require__(/*! @theia/core/lib/common/disposable */ "./node_modules/@theia/core/lib/common/disposable.js");
var common_2 = __webpack_require__(/*! ../common */ "./node_modules/@theia/task/lib/common/index.js");
var task_problem_pattern_registry_1 = __webpack_require__(/*! ./task-problem-pattern-registry */ "./node_modules/@theia/task/lib/browser/task-problem-pattern-registry.js");
var severity_1 = __webpack_require__(/*! @theia/core/lib/common/severity */ "./node_modules/@theia/core/lib/common/severity.js");
var ProblemMatcherRegistry = /** @class */ (function () {
    function ProblemMatcherRegistry() {
        this.matchers = new Map();
        this.onDidChangeProblemMatcherEmitter = new common_1.Emitter();
    }
    Object.defineProperty(ProblemMatcherRegistry.prototype, "onDidChangeProblemMatcher", {
        get: function () {
            return this.onDidChangeProblemMatcherEmitter.event;
        },
        enumerable: true,
        configurable: true
    });
    ProblemMatcherRegistry.prototype.init = function () {
        var _this = this;
        this.problemPatternRegistry.onReady().then(function () {
            _this.fillDefaults();
            _this.readyPromise = new Promise(function (res, rej) { return res(undefined); });
            _this.onDidChangeProblemMatcherEmitter.fire(undefined);
        });
    };
    ProblemMatcherRegistry.prototype.onReady = function () {
        return this.readyPromise;
    };
    /**
     * Add a problem matcher to the registry.
     *
     * @param definition the problem matcher to be added.
     */
    ProblemMatcherRegistry.prototype.register = function (matcher) {
        var _this = this;
        if (!matcher.name) {
            console.error('Only named Problem Matchers can be registered.');
            return disposable_1.Disposable.NULL;
        }
        var toDispose = new disposable_1.DisposableCollection(disposable_1.Disposable.create(function () {
            /* mark as not disposed */
            _this.onDidChangeProblemMatcherEmitter.fire(undefined);
        }));
        this.doRegister(matcher, toDispose).then(function () { return _this.onDidChangeProblemMatcherEmitter.fire(undefined); });
        return toDispose;
    };
    ProblemMatcherRegistry.prototype.doRegister = function (matcher, toDispose) {
        return __awaiter(this, void 0, void 0, function () {
            var problemMatcher;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getProblemMatcherFromContribution(matcher)];
                    case 1:
                        problemMatcher = _a.sent();
                        if (toDispose.disposed) {
                            return [2 /*return*/];
                        }
                        toDispose.push(this.add(problemMatcher));
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Finds the problem matcher from the registry by its name.
     *
     * @param name the name of the problem matcher
     * @return the problem matcher. If the task definition is not found, `undefined` is returned.
     */
    ProblemMatcherRegistry.prototype.get = function (name) {
        if (name.startsWith('$')) {
            return this.matchers.get(name.slice(1));
        }
        return this.matchers.get(name);
    };
    /**
     * Returns all registered problem matchers in the registry.
     */
    ProblemMatcherRegistry.prototype.getAll = function () {
        var e_1, _a;
        var all = [];
        try {
            for (var _b = __values(this.matchers.keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var matcherName = _c.value;
                all.push(this.get(matcherName));
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        all.sort(function (one, other) { return one.name.localeCompare(other.name); });
        return all;
    };
    /**
     * Transforms the `ProblemMatcherContribution` to a `ProblemMatcher`
     *
     * @return the problem matcher
     */
    ProblemMatcherRegistry.prototype.getProblemMatcherFromContribution = function (matcher) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, fileLocation, filePrefix, patterns, registeredPattern, problemMatcher;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this.getFileLocationKindAndPrefix(matcher), fileLocation = _a.fileLocation, filePrefix = _a.filePrefix;
                        patterns = [];
                        if (!matcher.pattern) return [3 /*break*/, 3];
                        if (!(typeof matcher.pattern === 'string')) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.problemPatternRegistry.onReady()];
                    case 1:
                        _b.sent();
                        registeredPattern = this.problemPatternRegistry.get(matcher.pattern);
                        if (Array.isArray(registeredPattern)) {
                            patterns.push.apply(patterns, __spread(registeredPattern));
                        }
                        else if (!!registeredPattern) {
                            patterns.push(registeredPattern);
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        if (Array.isArray(matcher.pattern)) {
                            patterns.push.apply(patterns, __spread(matcher.pattern.map(function (p) { return common_2.ProblemPattern.fromProblemPatternContribution(p); })));
                        }
                        else {
                            patterns.push(common_2.ProblemPattern.fromProblemPatternContribution(matcher.pattern));
                        }
                        _b.label = 3;
                    case 3:
                        problemMatcher = {
                            name: matcher.name,
                            label: matcher.label,
                            deprecated: matcher.deprecated,
                            owner: matcher.owner,
                            source: matcher.source,
                            applyTo: common_2.ApplyToKind.fromString(matcher.applyTo) || common_2.ApplyToKind.allDocuments,
                            fileLocation: fileLocation,
                            filePrefix: filePrefix,
                            pattern: patterns,
                            severity: severity_1.Severity.fromValue(matcher.severity),
                            watching: common_2.WatchingMatcher.fromWatchingMatcherContribution(matcher.background || matcher.watching)
                        };
                        return [2 /*return*/, problemMatcher];
                }
            });
        });
    };
    ProblemMatcherRegistry.prototype.add = function (matcher) {
        var _this = this;
        this.matchers.set(matcher.name, matcher);
        return disposable_1.Disposable.create(function () { return _this.matchers.delete(matcher.name); });
    };
    ProblemMatcherRegistry.prototype.getFileLocationKindAndPrefix = function (matcher) {
        var fileLocation = common_2.FileLocationKind.Relative;
        var filePrefix = '${workspaceFolder}';
        if (matcher.fileLocation !== undefined) {
            if (Array.isArray(matcher.fileLocation)) {
                if (matcher.fileLocation.length > 0) {
                    var locationKind = common_2.FileLocationKind.fromString(matcher.fileLocation[0]);
                    if (matcher.fileLocation.length === 1 && locationKind === common_2.FileLocationKind.Absolute) {
                        fileLocation = locationKind;
                    }
                    else if (matcher.fileLocation.length === 2 && locationKind === common_2.FileLocationKind.Relative && matcher.fileLocation[1]) {
                        fileLocation = locationKind;
                        filePrefix = matcher.fileLocation[1];
                    }
                }
            }
            else {
                var locationKind = common_2.FileLocationKind.fromString(matcher.fileLocation);
                if (locationKind) {
                    fileLocation = locationKind;
                    if (locationKind === common_2.FileLocationKind.Relative) {
                        filePrefix = '${workspaceFolder}';
                    }
                }
            }
        }
        return { fileLocation: fileLocation, filePrefix: filePrefix };
    };
    // copied from https://github.com/Microsoft/vscode/blob/1.33.1/src/vs/workbench/contrib/tasks/common/problemMatcher.ts
    ProblemMatcherRegistry.prototype.fillDefaults = function () {
        this.add({
            name: 'msCompile',
            label: 'Microsoft compiler problems',
            owner: 'msCompile',
            applyTo: common_2.ApplyToKind.allDocuments,
            fileLocation: common_2.FileLocationKind.Absolute,
            pattern: (this.problemPatternRegistry.get('msCompile'))
        });
        this.add({
            name: 'lessCompile',
            label: 'Less problems',
            deprecated: true,
            owner: 'lessCompile',
            source: 'less',
            applyTo: common_2.ApplyToKind.allDocuments,
            fileLocation: common_2.FileLocationKind.Absolute,
            pattern: (this.problemPatternRegistry.get('lessCompile')),
            severity: severity_1.Severity.Error
        });
        this.add({
            name: 'gulp-tsc',
            label: 'Gulp TSC Problems',
            owner: 'typescript',
            source: 'ts',
            applyTo: common_2.ApplyToKind.closedDocuments,
            fileLocation: common_2.FileLocationKind.Relative,
            filePrefix: '${workspaceFolder}',
            pattern: (this.problemPatternRegistry.get('gulp-tsc'))
        });
        this.add({
            name: 'jshint',
            label: 'JSHint problems',
            owner: 'jshint',
            source: 'jshint',
            applyTo: common_2.ApplyToKind.allDocuments,
            fileLocation: common_2.FileLocationKind.Absolute,
            pattern: (this.problemPatternRegistry.get('jshint'))
        });
        this.add({
            name: 'jshint-stylish',
            label: 'JSHint stylish problems',
            owner: 'jshint',
            source: 'jshint',
            applyTo: common_2.ApplyToKind.allDocuments,
            fileLocation: common_2.FileLocationKind.Absolute,
            pattern: (this.problemPatternRegistry.get('jshint-stylish'))
        });
        this.add({
            name: 'eslint-compact',
            label: 'ESLint compact problems',
            owner: 'eslint',
            source: 'eslint',
            applyTo: common_2.ApplyToKind.allDocuments,
            fileLocation: common_2.FileLocationKind.Absolute,
            filePrefix: '${workspaceFolder}',
            pattern: (this.problemPatternRegistry.get('eslint-compact'))
        });
        this.add({
            name: 'eslint-stylish',
            label: 'ESLint stylish problems',
            owner: 'eslint',
            source: 'eslint',
            applyTo: common_2.ApplyToKind.allDocuments,
            fileLocation: common_2.FileLocationKind.Absolute,
            pattern: (this.problemPatternRegistry.get('eslint-stylish'))
        });
        this.add({
            name: 'go',
            label: 'Go problems',
            owner: 'go',
            source: 'go',
            applyTo: common_2.ApplyToKind.allDocuments,
            fileLocation: common_2.FileLocationKind.Relative,
            filePrefix: '${workspaceFolder}',
            pattern: (this.problemPatternRegistry.get('go'))
        });
    };
    __decorate([
        inversify_1.inject(task_problem_pattern_registry_1.ProblemPatternRegistry),
        __metadata("design:type", task_problem_pattern_registry_1.ProblemPatternRegistry)
    ], ProblemMatcherRegistry.prototype, "problemPatternRegistry", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ProblemMatcherRegistry.prototype, "init", null);
    ProblemMatcherRegistry = __decorate([
        inversify_1.injectable()
    ], ProblemMatcherRegistry);
    return ProblemMatcherRegistry;
}());
exports.ProblemMatcherRegistry = ProblemMatcherRegistry;


/***/ }),

/***/ "./node_modules/@theia/task/lib/browser/task-problem-pattern-registry.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@theia/task/lib/browser/task-problem-pattern-registry.js ***!
  \*******************************************************************************/
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
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var common_1 = __webpack_require__(/*! ../common */ "./node_modules/@theia/task/lib/common/index.js");
var disposable_1 = __webpack_require__(/*! @theia/core/lib/common/disposable */ "./node_modules/@theia/core/lib/common/disposable.js");
var ProblemPatternRegistry = /** @class */ (function () {
    function ProblemPatternRegistry() {
        this.patterns = new Map();
    }
    ProblemPatternRegistry.prototype.init = function () {
        this.fillDefaults();
        this.readyPromise = new Promise(function (res, rej) { return res(undefined); });
    };
    ProblemPatternRegistry.prototype.onReady = function () {
        return this.readyPromise;
    };
    /**
     * Add a problem pattern to the registry.
     *
     * @param definition the problem pattern to be added.
     */
    ProblemPatternRegistry.prototype.register = function (value) {
        var _this = this;
        if (Array.isArray(value)) {
            var toDispose_1 = new disposable_1.DisposableCollection();
            value.forEach(function (problemPatternContribution) { return toDispose_1.push(_this.register(problemPatternContribution)); });
            return toDispose_1;
        }
        if (!value.name) {
            console.error('Only named Problem Patterns can be registered.');
            return disposable_1.Disposable.NULL;
        }
        var problemPattern = common_1.ProblemPattern.fromProblemPatternContribution(value);
        return this.add(problemPattern.name, problemPattern);
    };
    /**
     * Finds the problem pattern(s) from the registry with the given name.
     *
     * @param key the name of the problem patterns
     * @return a problem pattern or an array of the problem patterns associated with the name. If no problem patterns are found, `undefined` is returned.
     */
    ProblemPatternRegistry.prototype.get = function (key) {
        return this.patterns.get(key);
    };
    ProblemPatternRegistry.prototype.add = function (key, value) {
        var _this = this;
        var toAdd;
        if (Array.isArray(value)) {
            toAdd = value.map(function (v) { return Object.assign(v, { name: key }); });
        }
        else {
            toAdd = Object.assign(value, { name: key });
        }
        this.patterns.set(key, toAdd);
        return disposable_1.Disposable.create(function () { return _this.patterns.delete(key); });
    };
    // copied from https://github.com/Microsoft/vscode/blob/1.33.1/src/vs/workbench/contrib/tasks/common/problemMatcher.ts
    ProblemPatternRegistry.prototype.fillDefaults = function () {
        this.add('msCompile', {
            regexp: /^(?:\s+\d+\>)?([^\s].*)\((\d+|\d+,\d+|\d+,\d+,\d+,\d+)\)\s*:\s+(error|warning|info)\s+(\w{1,2}\d+)\s*:\s*(.*)$/.source,
            kind: common_1.ProblemLocationKind.Location,
            file: 1,
            location: 2,
            severity: 3,
            code: 4,
            message: 5
        });
        this.add('gulp-tsc', {
            regexp: /^([^\s].*)\((\d+|\d+,\d+|\d+,\d+,\d+,\d+)\):\s+(\d+)\s+(.*)$/.source,
            kind: common_1.ProblemLocationKind.Location,
            file: 1,
            location: 2,
            code: 3,
            message: 4
        });
        this.add('cpp', {
            regexp: /^([^\s].*)\((\d+|\d+,\d+|\d+,\d+,\d+,\d+)\):\s+(error|warning|info)\s+(C\d+)\s*:\s*(.*)$/.source,
            kind: common_1.ProblemLocationKind.Location,
            file: 1,
            location: 2,
            severity: 3,
            code: 4,
            message: 5
        });
        this.add('csc', {
            regexp: /^([^\s].*)\((\d+|\d+,\d+|\d+,\d+,\d+,\d+)\):\s+(error|warning|info)\s+(CS\d+)\s*:\s*(.*)$/.source,
            kind: common_1.ProblemLocationKind.Location,
            file: 1,
            location: 2,
            severity: 3,
            code: 4,
            message: 5
        });
        this.add('vb', {
            regexp: /^([^\s].*)\((\d+|\d+,\d+|\d+,\d+,\d+,\d+)\):\s+(error|warning|info)\s+(BC\d+)\s*:\s*(.*)$/.source,
            kind: common_1.ProblemLocationKind.Location,
            file: 1,
            location: 2,
            severity: 3,
            code: 4,
            message: 5
        });
        this.add('lessCompile', {
            regexp: /^\s*(.*) in file (.*) line no. (\d+)$/.source,
            kind: common_1.ProblemLocationKind.Location,
            message: 1,
            file: 2,
            line: 3
        });
        this.add('jshint', {
            regexp: /^(.*):\s+line\s+(\d+),\s+col\s+(\d+),\s(.+?)(?:\s+\((\w)(\d+)\))?$/.source,
            kind: common_1.ProblemLocationKind.Location,
            file: 1,
            line: 2,
            character: 3,
            message: 4,
            severity: 5,
            code: 6
        });
        this.add('jshint-stylish', [
            {
                regexp: /^(.+)$/.source,
                kind: common_1.ProblemLocationKind.Location,
                file: 1
            },
            {
                regexp: /^\s+line\s+(\d+)\s+col\s+(\d+)\s+(.+?)(?:\s+\((\w)(\d+)\))?$/.source,
                line: 1,
                character: 2,
                message: 3,
                severity: 4,
                code: 5,
                loop: true
            }
        ]);
        this.add('eslint-compact', {
            regexp: /^(.+):\sline\s(\d+),\scol\s(\d+),\s(Error|Warning|Info)\s-\s(.+)\s\((.+)\)$/.source,
            file: 1,
            kind: common_1.ProblemLocationKind.Location,
            line: 2,
            character: 3,
            severity: 4,
            message: 5,
            code: 6
        });
        this.add('eslint-stylish', [
            {
                regexp: /^([^\s].*)$/.source,
                kind: common_1.ProblemLocationKind.Location,
                file: 1
            },
            {
                regexp: /^\s+(\d+):(\d+)\s+(error|warning|info)\s+(.+?)(?:\s\s+(.*))?$/.source,
                line: 1,
                character: 2,
                severity: 3,
                message: 4,
                code: 5,
                loop: true
            }
        ]);
        this.add('go', {
            regexp: /^([^:]*: )?((.:)?[^:]*):(\d+)(:(\d+))?: (.*)$/.source,
            kind: common_1.ProblemLocationKind.Location,
            file: 2,
            line: 4,
            character: 6,
            message: 7
        });
    };
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ProblemPatternRegistry.prototype, "init", null);
    ProblemPatternRegistry = __decorate([
        inversify_1.injectable()
    ], ProblemPatternRegistry);
    return ProblemPatternRegistry;
}());
exports.ProblemPatternRegistry = ProblemPatternRegistry;


/***/ }),

/***/ "./node_modules/@theia/task/lib/common/index.js":
/*!******************************************************!*\
  !*** ./node_modules/@theia/task/lib/common/index.js ***!
  \******************************************************/
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
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./task-protocol */ "./node_modules/@theia/task/lib/common/task-protocol.js"));
__export(__webpack_require__(/*! ./task-watcher */ "./node_modules/@theia/task/lib/common/task-watcher.js"));
__export(__webpack_require__(/*! ./problem-matcher-protocol */ "./node_modules/@theia/task/lib/common/problem-matcher-protocol.js"));


/***/ }),

/***/ "./node_modules/@theia/task/lib/common/problem-matcher-protocol.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@theia/task/lib/common/problem-matcher-protocol.js ***!
  \*************************************************************************/
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
var ApplyToKind;
(function (ApplyToKind) {
    ApplyToKind[ApplyToKind["allDocuments"] = 0] = "allDocuments";
    ApplyToKind[ApplyToKind["openDocuments"] = 1] = "openDocuments";
    ApplyToKind[ApplyToKind["closedDocuments"] = 2] = "closedDocuments";
})(ApplyToKind = exports.ApplyToKind || (exports.ApplyToKind = {}));
(function (ApplyToKind) {
    function fromString(value) {
        if (value) {
            value = value.toLowerCase();
            if (value === 'alldocuments') {
                return ApplyToKind.allDocuments;
            }
            else if (value === 'opendocuments') {
                return ApplyToKind.openDocuments;
            }
            else if (value === 'closeddocuments') {
                return ApplyToKind.closedDocuments;
            }
        }
        return undefined;
    }
    ApplyToKind.fromString = fromString;
})(ApplyToKind = exports.ApplyToKind || (exports.ApplyToKind = {}));
var FileLocationKind;
(function (FileLocationKind) {
    FileLocationKind[FileLocationKind["Auto"] = 0] = "Auto";
    FileLocationKind[FileLocationKind["Relative"] = 1] = "Relative";
    FileLocationKind[FileLocationKind["Absolute"] = 2] = "Absolute";
})(FileLocationKind = exports.FileLocationKind || (exports.FileLocationKind = {}));
(function (FileLocationKind) {
    function fromString(value) {
        value = value.toLowerCase();
        if (value === 'absolute') {
            return FileLocationKind.Absolute;
        }
        else if (value === 'relative') {
            return FileLocationKind.Relative;
        }
        else {
            return undefined;
        }
    }
    FileLocationKind.fromString = fromString;
})(FileLocationKind = exports.FileLocationKind || (exports.FileLocationKind = {}));
var WatchingMatcher;
(function (WatchingMatcher) {
    function fromWatchingMatcherContribution(value) {
        if (!value) {
            return undefined;
        }
        return {
            activeOnStart: !!value.activeOnStart,
            beginsPattern: typeof value.beginsPattern === 'string' ? { regexp: value.beginsPattern } : value.beginsPattern,
            endsPattern: typeof value.endsPattern === 'string' ? { regexp: value.endsPattern } : value.endsPattern
        };
    }
    WatchingMatcher.fromWatchingMatcherContribution = fromWatchingMatcherContribution;
})(WatchingMatcher = exports.WatchingMatcher || (exports.WatchingMatcher = {}));
var ProblemLocationKind;
(function (ProblemLocationKind) {
    ProblemLocationKind[ProblemLocationKind["File"] = 0] = "File";
    ProblemLocationKind[ProblemLocationKind["Location"] = 1] = "Location";
})(ProblemLocationKind = exports.ProblemLocationKind || (exports.ProblemLocationKind = {}));
(function (ProblemLocationKind) {
    function fromString(value) {
        value = value.toLowerCase();
        if (value === 'file') {
            return ProblemLocationKind.File;
        }
        else if (value === 'location') {
            return ProblemLocationKind.Location;
        }
        else {
            return undefined;
        }
    }
    ProblemLocationKind.fromString = fromString;
})(ProblemLocationKind = exports.ProblemLocationKind || (exports.ProblemLocationKind = {}));
var ProblemMatcher;
(function (ProblemMatcher) {
    function isWatchModeWatcher(matcher) {
        return !!matcher.watching;
    }
    ProblemMatcher.isWatchModeWatcher = isWatchModeWatcher;
})(ProblemMatcher = exports.ProblemMatcher || (exports.ProblemMatcher = {}));
var ProblemPattern;
(function (ProblemPattern) {
    function fromProblemPatternContribution(value) {
        return {
            name: value.name,
            regexp: value.regexp,
            kind: value.kind ? ProblemLocationKind.fromString(value.kind) : undefined,
            file: value.file,
            message: value.message,
            location: value.location,
            line: value.line,
            character: value.column || value.character,
            endLine: value.endLine,
            endCharacter: value.endColumn || value.endCharacter,
            code: value.code,
            severity: value.severity,
            loop: value.loop
        };
    }
    ProblemPattern.fromProblemPatternContribution = fromProblemPatternContribution;
})(ProblemPattern = exports.ProblemPattern || (exports.ProblemPattern = {}));
var ProblemMatchData;
(function (ProblemMatchData) {
    function is(data) {
        return 'marker' in data;
    }
    ProblemMatchData.is = is;
})(ProblemMatchData = exports.ProblemMatchData || (exports.ProblemMatchData = {}));


/***/ }),

/***/ "./node_modules/@theia/task/lib/common/task-protocol.js":
/*!**************************************************************!*\
  !*** ./node_modules/@theia/task/lib/common/task-protocol.js ***!
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.taskPath = '/services/task';
exports.TaskServer = Symbol('TaskServer');
exports.TaskClient = Symbol('TaskClient');
var TaskCustomization;
(function (TaskCustomization) {
    function isBuildTask(task) {
        return task.group === 'build' || !!task.group && typeof task.group === 'object' && task.group.kind === 'build';
    }
    TaskCustomization.isBuildTask = isBuildTask;
    function isDefaultBuildTask(task) {
        return !!task.group && typeof task.group === 'object' && task.group.kind === 'build' && task.group.isDefault;
    }
    TaskCustomization.isDefaultBuildTask = isDefaultBuildTask;
    function isTestTask(task) {
        return task.group === 'test' || !!task.group && typeof task.group === 'object' && task.group.kind === 'test';
    }
    TaskCustomization.isTestTask = isTestTask;
    function isDefaultTestTask(task) {
        return !!task.group && typeof task.group === 'object' && task.group.kind === 'test' && task.group.isDefault;
    }
    TaskCustomization.isDefaultTestTask = isDefaultTestTask;
})(TaskCustomization = exports.TaskCustomization || (exports.TaskCustomization = {}));


/***/ }),

/***/ "./node_modules/@theia/task/lib/common/task-watcher.js":
/*!*************************************************************!*\
  !*** ./node_modules/@theia/task/lib/common/task-watcher.js ***!
  \*************************************************************/
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
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var event_1 = __webpack_require__(/*! @theia/core/lib/common/event */ "./node_modules/@theia/core/lib/common/event.js");
var TaskWatcher = /** @class */ (function () {
    function TaskWatcher() {
        this.onTaskCreatedEmitter = new event_1.Emitter();
        this.onTaskExitEmitter = new event_1.Emitter();
        this.onDidStartTaskProcessEmitter = new event_1.Emitter();
        this.onDidEndTaskProcessEmitter = new event_1.Emitter();
        this.onOutputProcessedEmitter = new event_1.Emitter();
    }
    TaskWatcher.prototype.getTaskClient = function () {
        var newTaskEmitter = this.onTaskCreatedEmitter;
        var exitEmitter = this.onTaskExitEmitter;
        var taskProcessStartedEmitter = this.onDidStartTaskProcessEmitter;
        var taskProcessEndedEmitter = this.onDidEndTaskProcessEmitter;
        var outputProcessedEmitter = this.onOutputProcessedEmitter;
        return {
            onTaskCreated: function (event) {
                newTaskEmitter.fire(event);
            },
            onTaskExit: function (event) {
                exitEmitter.fire(event);
            },
            onDidStartTaskProcess: function (event) {
                taskProcessStartedEmitter.fire(event);
            },
            onDidEndTaskProcess: function (event) {
                taskProcessEndedEmitter.fire(event);
            },
            onDidProcessTaskOutput: function (event) {
                outputProcessedEmitter.fire(event);
            }
        };
    };
    Object.defineProperty(TaskWatcher.prototype, "onTaskCreated", {
        get: function () {
            return this.onTaskCreatedEmitter.event;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TaskWatcher.prototype, "onTaskExit", {
        get: function () {
            return this.onTaskExitEmitter.event;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TaskWatcher.prototype, "onDidStartTaskProcess", {
        get: function () {
            return this.onDidStartTaskProcessEmitter.event;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TaskWatcher.prototype, "onDidEndTaskProcess", {
        get: function () {
            return this.onDidEndTaskProcessEmitter.event;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TaskWatcher.prototype, "onOutputProcessed", {
        get: function () {
            return this.onOutputProcessedEmitter.event;
        },
        enumerable: true,
        configurable: true
    });
    TaskWatcher = __decorate([
        inversify_1.injectable()
    ], TaskWatcher);
    return TaskWatcher;
}());
exports.TaskWatcher = TaskWatcher;


/***/ })

}]);
//# sourceMappingURL=26.bundle.js.map