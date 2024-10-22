(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[36],{

/***/ "./node_modules/@theia/git/lib/browser/blame/blame-contribution.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@theia/git/lib/browser/blame/blame-contribution.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2018 TypeFox and others.
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
var common_1 = __webpack_require__(/*! @theia/core/lib/common */ "./node_modules/@theia/core/lib/common/index.js");
var blame_decorator_1 = __webpack_require__(/*! ./blame-decorator */ "./node_modules/@theia/git/lib/browser/blame/blame-decorator.js");
var browser_1 = __webpack_require__(/*! @theia/editor/lib/browser */ "./node_modules/@theia/editor/lib/browser/index.js");
var blame_manager_1 = __webpack_require__(/*! ./blame-manager */ "./node_modules/@theia/git/lib/browser/blame/blame-manager.js");
var git_contribution_1 = __webpack_require__(/*! ../git-contribution */ "./node_modules/@theia/git/lib/browser/git-contribution.js");
var debounce = __webpack_require__(/*! lodash.debounce */ "./node_modules/lodash.debounce/index.js");
var BlameCommands;
(function (BlameCommands) {
    BlameCommands.TOGGLE_GIT_ANNOTATIONS = {
        id: 'git.editor.toggle.annotations',
        category: 'Git',
        label: 'Toggle Blame Annotations'
    };
    BlameCommands.CLEAR_GIT_ANNOTATIONS = {
        id: 'git.editor.clear.annotations'
    };
})(BlameCommands = exports.BlameCommands || (exports.BlameCommands = {}));
var BlameContribution = /** @class */ (function () {
    function BlameContribution() {
        this.appliedDecorations = new Map();
    }
    BlameContribution.prototype.registerCommands = function (commands) {
        var _this = this;
        commands.registerCommand(BlameCommands.TOGGLE_GIT_ANNOTATIONS, {
            execute: function () {
                var editorWidget = _this.currentFileEditorWidget;
                if (editorWidget) {
                    if (_this.showsBlameAnnotations(editorWidget.editor.uri)) {
                        _this.clearBlame(editorWidget.editor.uri);
                    }
                    else {
                        _this.showBlame(editorWidget);
                    }
                }
            },
            isVisible: function () {
                return !!_this.currentFileEditorWidget;
            },
            isEnabled: function () {
                var editorWidget = _this.currentFileEditorWidget;
                return !!editorWidget && _this.isBlameable(editorWidget.editor.uri);
            }
        });
        commands.registerCommand(BlameCommands.CLEAR_GIT_ANNOTATIONS, {
            execute: function () {
                var editorWidget = _this.currentFileEditorWidget;
                if (editorWidget) {
                    _this.clearBlame(editorWidget.editor.uri);
                }
            },
            isVisible: function () {
                return !!_this.currentFileEditorWidget;
            },
            isEnabled: function () {
                var editorWidget = _this.currentFileEditorWidget;
                var enabled = !!editorWidget && _this.showsBlameAnnotations(editorWidget.editor.uri);
                return enabled;
            }
        });
    };
    BlameContribution.prototype.showsBlameAnnotations = function (uri) {
        return this.appliedDecorations.has(uri.toString());
    };
    Object.defineProperty(BlameContribution.prototype, "currentFileEditorWidget", {
        get: function () {
            var editorWidget = this.editorManager.currentEditor;
            if (editorWidget) {
                if (editorWidget.editor.uri.scheme === 'file') {
                    return editorWidget;
                }
            }
            return undefined;
        },
        enumerable: true,
        configurable: true
    });
    BlameContribution.prototype.isBlameable = function (uri) {
        return this.blameManager.isBlameable(uri.toString());
    };
    BlameContribution.prototype.showBlame = function (editorWidget) {
        return __awaiter(this, void 0, void 0, function () {
            var uri, editor, document, content, blame, toDispose_1;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uri = editorWidget.editor.uri.toString();
                        if (this.appliedDecorations.get(uri)) {
                            return [2 /*return*/];
                        }
                        editor = editorWidget.editor;
                        document = editor.document;
                        content = document.dirty ? document.getText() : undefined;
                        return [4 /*yield*/, this.blameManager.getBlame(uri, content)];
                    case 1:
                        blame = _a.sent();
                        if (blame) {
                            toDispose_1 = new common_1.DisposableCollection();
                            this.appliedDecorations.set(uri, toDispose_1);
                            toDispose_1.push(this.decorator.decorate(blame, editor, editor.cursor.line));
                            toDispose_1.push(editor.onDocumentContentChanged(function () { return _this.clearBlame(uri); }));
                            toDispose_1.push(editor.onCursorPositionChanged(debounce(function (_position) {
                                if (!toDispose_1.disposed) {
                                    _this.decorator.decorate(blame, editor, editor.cursor.line);
                                }
                            }, 50)));
                            editorWidget.disposed.connect(function () { return _this.clearBlame(uri); });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    BlameContribution.prototype.clearBlame = function (uri) {
        var decorations = this.appliedDecorations.get(uri.toString());
        if (decorations) {
            this.appliedDecorations.delete(uri.toString());
            decorations.dispose();
        }
    };
    BlameContribution.prototype.registerMenus = function (menus) {
        menus.registerMenuAction(git_contribution_1.EDITOR_CONTEXT_MENU_GIT, {
            commandId: BlameCommands.TOGGLE_GIT_ANNOTATIONS.id,
        });
    };
    BlameContribution.prototype.registerKeybindings = function (keybindings) {
        keybindings.registerKeybinding({
            command: BlameCommands.TOGGLE_GIT_ANNOTATIONS.id,
            context: browser_1.EditorKeybindingContexts.editorTextFocus,
            keybinding: 'alt+b'
        });
        keybindings.registerKeybinding({
            command: BlameCommands.CLEAR_GIT_ANNOTATIONS.id,
            context: BlameAnnotationsKeybindingContext.showsBlameAnnotations,
            keybinding: 'esc'
        });
    };
    __decorate([
        inversify_1.inject(browser_1.EditorManager),
        __metadata("design:type", browser_1.EditorManager)
    ], BlameContribution.prototype, "editorManager", void 0);
    __decorate([
        inversify_1.inject(blame_decorator_1.BlameDecorator),
        __metadata("design:type", blame_decorator_1.BlameDecorator)
    ], BlameContribution.prototype, "decorator", void 0);
    __decorate([
        inversify_1.inject(blame_manager_1.BlameManager),
        __metadata("design:type", blame_manager_1.BlameManager)
    ], BlameContribution.prototype, "blameManager", void 0);
    BlameContribution = __decorate([
        inversify_1.injectable()
    ], BlameContribution);
    return BlameContribution;
}());
exports.BlameContribution = BlameContribution;
var BlameAnnotationsKeybindingContext = /** @class */ (function (_super) {
    __extends(BlameAnnotationsKeybindingContext, _super);
    function BlameAnnotationsKeybindingContext() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.id = BlameAnnotationsKeybindingContext_1.showsBlameAnnotations;
        return _this;
    }
    BlameAnnotationsKeybindingContext_1 = BlameAnnotationsKeybindingContext;
    BlameAnnotationsKeybindingContext.prototype.canHandle = function (widget) {
        return this.base.isEnabled() && this.blameContribution.showsBlameAnnotations(widget.editor.uri);
    };
    var BlameAnnotationsKeybindingContext_1;
    __decorate([
        inversify_1.inject(BlameContribution),
        __metadata("design:type", BlameContribution)
    ], BlameAnnotationsKeybindingContext.prototype, "blameContribution", void 0);
    __decorate([
        inversify_1.inject(browser_1.StrictEditorTextFocusContext),
        __metadata("design:type", browser_1.StrictEditorTextFocusContext)
    ], BlameAnnotationsKeybindingContext.prototype, "base", void 0);
    BlameAnnotationsKeybindingContext = BlameAnnotationsKeybindingContext_1 = __decorate([
        inversify_1.injectable()
    ], BlameAnnotationsKeybindingContext);
    return BlameAnnotationsKeybindingContext;
}(browser_1.EditorTextFocusContext));
exports.BlameAnnotationsKeybindingContext = BlameAnnotationsKeybindingContext;
(function (BlameAnnotationsKeybindingContext) {
    BlameAnnotationsKeybindingContext.showsBlameAnnotations = 'showsBlameAnnotations';
})(BlameAnnotationsKeybindingContext = exports.BlameAnnotationsKeybindingContext || (exports.BlameAnnotationsKeybindingContext = {}));
exports.BlameAnnotationsKeybindingContext = BlameAnnotationsKeybindingContext;


/***/ }),

/***/ "./node_modules/@theia/git/lib/browser/blame/blame-decorator.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@theia/git/lib/browser/blame/blame-decorator.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2018 TypeFox and others.
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
var browser_1 = __webpack_require__(/*! @theia/editor/lib/browser */ "./node_modules/@theia/editor/lib/browser/index.js");
var core_1 = __webpack_require__(/*! @theia/core */ "./node_modules/@theia/core/lib/common/index.js");
var moment = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
var browser_2 = __webpack_require__(/*! @theia/languages/lib/browser */ "./node_modules/@theia/languages/lib/browser/index.js");
var uri_1 = __webpack_require__(/*! @theia/core/lib/common/uri */ "./node_modules/@theia/core/lib/common/uri.js");
var BlameDecorator = /** @class */ (function () {
    function BlameDecorator() {
        this.emptyHover = { contents: '' };
        this.appliedDecorations = new Map();
        this.now = moment();
    }
    BlameDecorator_1 = BlameDecorator;
    BlameDecorator.prototype.registerHoverProvider = function (uri) {
        if (this.languages.registerHoverProvider) {
            return this.languages.registerHoverProvider([{ pattern: new uri_1.default(uri).path.toString() }], this);
        }
        return core_1.Disposable.NULL;
    };
    BlameDecorator.prototype.provideHover = function (params, token) {
        return __awaiter(this, void 0, void 0, function () {
            var line, uri, applications, blame, commitLine, sha, commit, date, commitMessage, message, hover;
            return __generator(this, function (_a) {
                line = params.position.line;
                uri = params.textDocument.uri;
                applications = this.appliedDecorations.get(uri);
                if (!applications) {
                    return [2 /*return*/, this.emptyHover];
                }
                blame = applications.blame;
                if (!blame) {
                    return [2 /*return*/, this.emptyHover];
                }
                commitLine = blame.lines.find(function (l) { return l.line === line; });
                if (!commitLine) {
                    return [2 /*return*/, this.emptyHover];
                }
                sha = commitLine.sha;
                commit = blame.commits.find(function (c) { return c.sha === sha; });
                date = new Date(commit.author.timestamp);
                commitMessage = commit.summary + '\n' + (commit.body || '');
                commitMessage = commitMessage.replace(/[`\>\#\*\_\-\+]/g, '\\$&').replace(/\n/g, '  \n');
                message = commit.sha + "\n \n " + commit.author.name + ", " + date.toString() + "\n \n> " + commitMessage;
                hover = {
                    contents: [message],
                    range: browser_1.Range.create(browser_1.Position.create(line, 0), browser_1.Position.create(line, 10 ^ 10))
                };
                return [2 /*return*/, hover];
            });
        });
    };
    BlameDecorator.prototype.decorate = function (blame, editor, highlightLine) {
        var _a;
        var _this = this;
        var uri = editor.uri.toString();
        var applications = this.appliedDecorations.get(uri);
        if (!applications) {
            var that_1 = applications = new AppliedBlameDecorations();
            this.appliedDecorations.set(uri, applications);
            applications.toDispose.push(this.registerHoverProvider(uri));
            applications.toDispose.push(core_1.Disposable.create(function () {
                _this.appliedDecorations.delete(uri);
            }));
            applications.toDispose.push(core_1.Disposable.create(function () {
                editor.deltaDecorations({ oldDecorations: that_1.previousDecorations, newDecorations: [] });
            }));
        }
        if (applications.highlightedSha) {
            var sha = this.getShaForLine(blame, highlightLine);
            if (applications.highlightedSha === sha) {
                return applications;
            }
            applications.highlightedSha = sha;
        }
        var blameDecorations = this.toDecorations(blame, highlightLine);
        applications.previousStyles.dispose();
        applications.previousStyles.pushAll(blameDecorations.styles);
        var newDecorations = blameDecorations.editorDecorations;
        var oldDecorations = applications.previousDecorations;
        var appliedDecorations = editor.deltaDecorations({ oldDecorations: oldDecorations, newDecorations: newDecorations });
        applications.previousDecorations.length = 0;
        (_a = applications.previousDecorations).push.apply(_a, __spread(appliedDecorations));
        applications.blame = blame;
        return applications;
    };
    BlameDecorator.prototype.getShaForLine = function (blame, line) {
        var commitLines = blame.lines;
        var commitLine = commitLines.find(function (c) { return c.line === line; });
        return commitLine ? commitLine.sha : undefined;
    };
    BlameDecorator.prototype.toDecorations = function (blame, highlightLine) {
        var e_1, _a, e_2, _b;
        var beforeContentStyles = new Map();
        var commits = blame.commits;
        var _loop_1 = function (commit) {
            var sha = commit.sha;
            var commitTime = moment(commit.author.timestamp);
            var heat = this_1.getHeatColor(commitTime);
            var content = this_1.formatContentLine(commit, commitTime);
            var short = sha.substr(0, 7);
            var selector = 'git-' + short + '::before';
            beforeContentStyles.set(sha, new browser_1.EditorDecorationStyle(selector, function (style) {
                browser_1.EditorDecorationStyle.copyStyle(BlameDecorator_1.defaultGutterStyles, style);
                style.content = "'" + content + "'";
                style.borderColor = heat;
            }));
        };
        var this_1 = this;
        try {
            for (var commits_1 = __values(commits), commits_1_1 = commits_1.next(); !commits_1_1.done; commits_1_1 = commits_1.next()) {
                var commit = commits_1_1.value;
                _loop_1(commit);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (commits_1_1 && !commits_1_1.done && (_a = commits_1.return)) _a.call(commits_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        var commitLines = blame.lines;
        var highlightedSha = this.getShaForLine(blame, highlightLine) || '';
        var previousLineSha = '';
        var editorDecorations = [];
        try {
            for (var commitLines_1 = __values(commitLines), commitLines_1_1 = commitLines_1.next(); !commitLines_1_1.done; commitLines_1_1 = commitLines_1.next()) {
                var commitLine = commitLines_1_1.value;
                var line = commitLine.line, sha = commitLine.sha;
                var beforeContentClassName = beforeContentStyles.get(sha).className;
                var options = {
                    beforeContentClassName: beforeContentClassName,
                };
                if (sha === highlightedSha) {
                    options.beforeContentClassName += ' ' + BlameDecorator_1.highlightStyle.className;
                }
                if (sha === previousLineSha) {
                    options.beforeContentClassName += ' ' + BlameDecorator_1.continuationStyle.className;
                }
                previousLineSha = sha;
                var range = browser_1.Range.create(browser_1.Position.create(line, 0), browser_1.Position.create(line, 0));
                editorDecorations.push({ range: range, options: options });
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (commitLines_1_1 && !commitLines_1_1.done && (_b = commitLines_1.return)) _b.call(commitLines_1);
            }
            finally { if (e_2) throw e_2.error; }
        }
        var styles = __spread(beforeContentStyles.values());
        return { editorDecorations: editorDecorations, styles: styles };
    };
    BlameDecorator.prototype.formatContentLine = function (commit, commitTime) {
        var when = commitTime.fromNow();
        var contentWidth = BlameDecorator_1.maxWidth - when.length - 2;
        var content = commit.summary.substring(0, contentWidth + 1);
        content = content.replace('\n', '↩︎').replace(/'/g, "\\'");
        if (content.length > contentWidth) {
            var cropAt = content.lastIndexOf(' ', contentWidth - 4);
            if (cropAt < contentWidth / 2) {
                cropAt = contentWidth - 3;
            }
            content = content.substring(0, cropAt) + '...';
        }
        if (content.length < contentWidth) {
            content = content + '\u2007'.repeat(contentWidth - content.length); // fill up with blanks
        }
        return content + " " + when;
    };
    BlameDecorator.prototype.getHeatColor = function (commitTime) {
        var daysFromNow = this.now.diff(commitTime, 'days');
        if (daysFromNow <= 2) {
            return 'var(--md-orange-50)';
        }
        if (daysFromNow <= 5) {
            return 'var(--md-orange-100)';
        }
        if (daysFromNow <= 10) {
            return 'var(--md-orange-200)';
        }
        if (daysFromNow <= 15) {
            return 'var(--md-orange-300)';
        }
        if (daysFromNow <= 60) {
            return 'var(--md-orange-400)';
        }
        if (daysFromNow <= 180) {
            return 'var(--md-deep-orange-600)';
        }
        if (daysFromNow <= 365) {
            return 'var(--md-deep-orange-700)';
        }
        if (daysFromNow <= 720) {
            return 'var(--md-deep-orange-800)';
        }
        return 'var(--md-deep-orange-900)';
    };
    var BlameDecorator_1;
    __decorate([
        inversify_1.inject(browser_1.EditorManager),
        __metadata("design:type", browser_1.EditorManager)
    ], BlameDecorator.prototype, "editorManager", void 0);
    __decorate([
        inversify_1.inject(browser_2.Languages),
        __metadata("design:type", Object)
    ], BlameDecorator.prototype, "languages", void 0);
    BlameDecorator = BlameDecorator_1 = __decorate([
        inversify_1.injectable(),
        __metadata("design:paramtypes", [])
    ], BlameDecorator);
    return BlameDecorator;
}());
exports.BlameDecorator = BlameDecorator;
(function (BlameDecorator) {
    BlameDecorator.maxWidth = 50; // character
    BlameDecorator.defaultGutterStyles = {
        width: BlameDecorator.maxWidth + "ch",
        color: 'var(--theia-ui-font-color0)',
        backgroundColor: 'var(--theia-layout-color1)',
        height: '100%',
        margin: '0 26px -1px 0',
        display: 'inline-block',
        borderRight: '2px solid',
    };
    BlameDecorator.continuationStyle = new browser_1.EditorDecorationStyle('git-blame-continuation-line::before', function (style) {
        style.content = "'\u2007'"; // blank
    });
    BlameDecorator.highlightStyle = new browser_1.EditorDecorationStyle('git-blame-highlight::before', function (style) {
        style.backgroundColor = 'var(--theia-layout-color2)';
    });
})(BlameDecorator = exports.BlameDecorator || (exports.BlameDecorator = {}));
exports.BlameDecorator = BlameDecorator;
var AppliedBlameDecorations = /** @class */ (function () {
    function AppliedBlameDecorations() {
        this.toDispose = new core_1.DisposableCollection();
        this.previousStyles = new core_1.DisposableCollection();
        this.previousDecorations = [];
    }
    AppliedBlameDecorations.prototype.dispose = function () {
        this.previousStyles.dispose();
        this.toDispose.dispose();
        this.blame = undefined;
    };
    return AppliedBlameDecorations;
}());
exports.AppliedBlameDecorations = AppliedBlameDecorations;


/***/ }),

/***/ "./node_modules/@theia/git/lib/browser/blame/blame-manager.js":
/*!********************************************************************!*\
  !*** ./node_modules/@theia/git/lib/browser/blame/blame-manager.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2018 TypeFox and others.
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
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var common_1 = __webpack_require__(/*! ../../common */ "./node_modules/@theia/git/lib/common/index.js");
var git_repository_tracker_1 = __webpack_require__(/*! ../git-repository-tracker */ "./node_modules/@theia/git/lib/browser/git-repository-tracker.js");
var uri_1 = __webpack_require__(/*! @theia/core/lib/common/uri */ "./node_modules/@theia/core/lib/common/uri.js");
var BlameManager = /** @class */ (function () {
    function BlameManager() {
    }
    BlameManager.prototype.isBlameable = function (uri) {
        return !!this.repositoryTracker.getPath(new uri_1.default(uri));
    };
    BlameManager.prototype.getBlame = function (uri, content) {
        return __awaiter(this, void 0, void 0, function () {
            var repository;
            return __generator(this, function (_a) {
                repository = this.repositoryTracker.selectedRepository;
                if (!repository) {
                    return [2 /*return*/, undefined];
                }
                return [2 /*return*/, this.git.blame(repository, uri, { content: content })];
            });
        });
    };
    __decorate([
        inversify_1.inject(common_1.Git),
        __metadata("design:type", Object)
    ], BlameManager.prototype, "git", void 0);
    __decorate([
        inversify_1.inject(git_repository_tracker_1.GitRepositoryTracker),
        __metadata("design:type", git_repository_tracker_1.GitRepositoryTracker)
    ], BlameManager.prototype, "repositoryTracker", void 0);
    BlameManager = __decorate([
        inversify_1.injectable()
    ], BlameManager);
    return BlameManager;
}());
exports.BlameManager = BlameManager;


/***/ }),

/***/ "./node_modules/@theia/git/lib/browser/blame/blame-module.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@theia/git/lib/browser/blame/blame-module.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2018 TypeFox and others.
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
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "./node_modules/@theia/core/lib/browser/index.js");
var common_1 = __webpack_require__(/*! @theia/core/lib/common */ "./node_modules/@theia/core/lib/common/index.js");
var blame_contribution_1 = __webpack_require__(/*! ./blame-contribution */ "./node_modules/@theia/git/lib/browser/blame/blame-contribution.js");
var blame_decorator_1 = __webpack_require__(/*! ./blame-decorator */ "./node_modules/@theia/git/lib/browser/blame/blame-decorator.js");
var blame_manager_1 = __webpack_require__(/*! ./blame-manager */ "./node_modules/@theia/git/lib/browser/blame/blame-manager.js");
function bindBlame(bind) {
    var e_1, _a;
    bind(blame_contribution_1.BlameContribution).toSelf().inSingletonScope();
    bind(blame_manager_1.BlameManager).toSelf().inSingletonScope();
    bind(blame_decorator_1.BlameDecorator).toSelf().inSingletonScope();
    try {
        for (var _b = __values([common_1.CommandContribution, browser_1.KeybindingContribution, common_1.MenuContribution]), _c = _b.next(); !_c.done; _c = _b.next()) {
            var serviceIdentifier = _c.value;
            bind(serviceIdentifier).toService(blame_contribution_1.BlameContribution);
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_1) throw e_1.error; }
    }
    bind(blame_contribution_1.BlameAnnotationsKeybindingContext).toSelf().inSingletonScope();
    bind(browser_1.KeybindingContext).toService(blame_contribution_1.BlameAnnotationsKeybindingContext);
}
exports.bindBlame = bindBlame;


/***/ }),

/***/ "./node_modules/@theia/git/lib/browser/diff/git-diff-contribution.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@theia/git/lib/browser/diff/git-diff-contribution.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2018 TypeFox and others.
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
var common_1 = __webpack_require__(/*! @theia/core/lib/common */ "./node_modules/@theia/core/lib/common/index.js");
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "./node_modules/@theia/core/lib/browser/index.js");
var widget_manager_1 = __webpack_require__(/*! @theia/core/lib/browser/widget-manager */ "./node_modules/@theia/core/lib/browser/widget-manager.js");
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var git_diff_widget_1 = __webpack_require__(/*! ./git-diff-widget */ "./node_modules/@theia/git/lib/browser/diff/git-diff-widget.js");
var browser_2 = __webpack_require__(/*! @theia/core/lib/browser */ "./node_modules/@theia/core/lib/browser/index.js");
var navigator_contribution_1 = __webpack_require__(/*! @theia/navigator/lib/browser/navigator-contribution */ "./node_modules/@theia/navigator/lib/browser/navigator-contribution.js");
var git_quick_open_service_1 = __webpack_require__(/*! ../git-quick-open-service */ "./node_modules/@theia/git/lib/browser/git-quick-open-service.js");
var common_2 = __webpack_require__(/*! @theia/filesystem/lib/common */ "./node_modules/@theia/filesystem/lib/common/index.js");
var diff_uris_1 = __webpack_require__(/*! @theia/core/lib/browser/diff-uris */ "./node_modules/@theia/core/lib/browser/diff-uris.js");
var git_resource_1 = __webpack_require__(/*! ../git-resource */ "./node_modules/@theia/git/lib/browser/git-resource.js");
var git_repository_provider_1 = __webpack_require__(/*! ../git-repository-provider */ "./node_modules/@theia/git/lib/browser/git-repository-provider.js");
var workspace_commands_1 = __webpack_require__(/*! @theia/workspace/lib/browser/workspace-commands */ "./node_modules/@theia/workspace/lib/browser/workspace-commands.js");
var browser_3 = __webpack_require__(/*! @theia/workspace/lib/browser */ "./node_modules/@theia/workspace/lib/browser/index.js");
var GitDiffCommands;
(function (GitDiffCommands) {
    GitDiffCommands.OPEN_FILE_DIFF = {
        id: 'git-diff:open-file-diff',
        category: 'Git Diff',
        label: 'Compare With...'
    };
})(GitDiffCommands = exports.GitDiffCommands || (exports.GitDiffCommands = {}));
var ScmNavigatorMoreToolbarGroups;
(function (ScmNavigatorMoreToolbarGroups) {
    ScmNavigatorMoreToolbarGroups.SCM = '3_navigator_scm';
})(ScmNavigatorMoreToolbarGroups = exports.ScmNavigatorMoreToolbarGroups || (exports.ScmNavigatorMoreToolbarGroups = {}));
var GitDiffContribution = /** @class */ (function (_super) {
    __extends(GitDiffContribution, _super);
    function GitDiffContribution(selectionService, widgetManager, app, quickOpenService, fileSystem, openerService, notifications, repositoryProvider) {
        var _this = _super.call(this, {
            widgetId: git_diff_widget_1.GIT_DIFF,
            widgetName: 'Git diff',
            defaultWidgetOptions: {
                area: 'left',
                rank: 500
            }
        }) || this;
        _this.selectionService = selectionService;
        _this.widgetManager = widgetManager;
        _this.app = app;
        _this.quickOpenService = quickOpenService;
        _this.fileSystem = fileSystem;
        _this.openerService = openerService;
        _this.notifications = notifications;
        _this.repositoryProvider = repositoryProvider;
        return _this;
    }
    GitDiffContribution.prototype.registerMenus = function (menus) {
        menus.registerMenuAction(navigator_contribution_1.NavigatorContextMenu.COMPARE, {
            commandId: GitDiffCommands.OPEN_FILE_DIFF.id
        });
    };
    GitDiffContribution.prototype.registerCommands = function (commands) {
        var _this = this;
        commands.registerCommand(GitDiffCommands.OPEN_FILE_DIFF, this.newWorkspaceRootUriAwareCommandHandler({
            isVisible: function (uri) { return !!_this.repositoryProvider.findRepository(uri); },
            isEnabled: function (uri) { return !!_this.repositoryProvider.findRepository(uri); },
            execute: function (fileUri) { return __awaiter(_this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.quickOpenService.chooseTagsAndBranches(function (fromRevision, toRevision) { return __awaiter(_this, void 0, void 0, function () {
                                var uri, fileStat, options, fromURI, toURI, diffUri;
                                var _this = this;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            uri = fileUri.toString();
                                            return [4 /*yield*/, this.fileSystem.getFileStat(uri)];
                                        case 1:
                                            fileStat = _a.sent();
                                            options = {
                                                uri: uri,
                                                range: {
                                                    fromRevision: fromRevision
                                                }
                                            };
                                            if (fileStat) {
                                                if (fileStat.isDirectory) {
                                                    this.showWidget(options);
                                                }
                                                else {
                                                    fromURI = fileUri.withScheme(git_resource_1.GIT_RESOURCE_SCHEME).withQuery(fromRevision);
                                                    toURI = fileUri;
                                                    diffUri = diff_uris_1.DiffUris.encode(fromURI, toURI);
                                                    if (diffUri) {
                                                        browser_2.open(this.openerService, diffUri).catch(function (e) {
                                                            _this.notifications.error(e.message);
                                                        });
                                                    }
                                                }
                                            }
                                            return [2 /*return*/];
                                    }
                                });
                            }); }, this.repositoryProvider.findRepository(fileUri))];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            }); }
        }));
    };
    GitDiffContribution.prototype.registerToolbarItems = function (registry) {
        this.fileNavigatorContribution.registerMoreToolbarItem({
            id: GitDiffCommands.OPEN_FILE_DIFF.id,
            command: GitDiffCommands.OPEN_FILE_DIFF.id,
            tooltip: GitDiffCommands.OPEN_FILE_DIFF.label,
            group: ScmNavigatorMoreToolbarGroups.SCM,
        });
    };
    GitDiffContribution.prototype.showWidget = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            var widget;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.widget];
                    case 1:
                        widget = _a.sent();
                        return [4 /*yield*/, widget.setContent(options)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, this.openView({
                                activate: true
                            })];
                }
            });
        });
    };
    GitDiffContribution.prototype.newWorkspaceRootUriAwareCommandHandler = function (handler) {
        return new workspace_commands_1.WorkspaceRootUriAwareCommandHandler(this.workspaceService, this.selectionService, handler);
    };
    __decorate([
        inversify_1.inject(common_1.CommandRegistry),
        __metadata("design:type", common_1.CommandRegistry)
    ], GitDiffContribution.prototype, "commandRegistry", void 0);
    __decorate([
        inversify_1.inject(navigator_contribution_1.FileNavigatorContribution),
        __metadata("design:type", navigator_contribution_1.FileNavigatorContribution)
    ], GitDiffContribution.prototype, "fileNavigatorContribution", void 0);
    __decorate([
        inversify_1.inject(browser_3.WorkspaceService),
        __metadata("design:type", browser_3.WorkspaceService)
    ], GitDiffContribution.prototype, "workspaceService", void 0);
    GitDiffContribution = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(common_1.SelectionService)),
        __param(1, inversify_1.inject(widget_manager_1.WidgetManager)),
        __param(2, inversify_1.inject(browser_1.FrontendApplication)),
        __param(3, inversify_1.inject(git_quick_open_service_1.GitQuickOpenService)),
        __param(4, inversify_1.inject(common_2.FileSystem)),
        __param(5, inversify_1.inject(browser_2.OpenerService)),
        __param(6, inversify_1.inject(common_1.MessageService)),
        __param(7, inversify_1.inject(git_repository_provider_1.GitRepositoryProvider)),
        __metadata("design:paramtypes", [common_1.SelectionService,
            widget_manager_1.WidgetManager,
            browser_1.FrontendApplication,
            git_quick_open_service_1.GitQuickOpenService, Object, Object, common_1.MessageService,
            git_repository_provider_1.GitRepositoryProvider])
    ], GitDiffContribution);
    return GitDiffContribution;
}(browser_1.AbstractViewContribution));
exports.GitDiffContribution = GitDiffContribution;


/***/ }),

/***/ "./node_modules/@theia/git/lib/browser/diff/git-diff-frontend-module.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@theia/git/lib/browser/diff/git-diff-frontend-module.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2018 TypeFox and others.
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
var git_diff_contribution_1 = __webpack_require__(/*! ./git-diff-contribution */ "./node_modules/@theia/git/lib/browser/diff/git-diff-contribution.js");
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "./node_modules/@theia/core/lib/browser/index.js");
var git_diff_widget_1 = __webpack_require__(/*! ./git-diff-widget */ "./node_modules/@theia/git/lib/browser/diff/git-diff-widget.js");
var tab_bar_toolbar_1 = __webpack_require__(/*! @theia/core/lib/browser/shell/tab-bar-toolbar */ "./node_modules/@theia/core/lib/browser/shell/tab-bar-toolbar.js");
__webpack_require__(/*! ../../../src/browser/style/diff.css */ "./node_modules/@theia/git/src/browser/style/diff.css");
function bindGitDiffModule(bind) {
    bind(git_diff_widget_1.GitDiffWidget).toSelf();
    bind(browser_1.WidgetFactory).toDynamicValue(function (ctx) { return ({
        id: git_diff_widget_1.GIT_DIFF,
        createWidget: function () { return ctx.container.get(git_diff_widget_1.GitDiffWidget); }
    }); });
    browser_1.bindViewContribution(bind, git_diff_contribution_1.GitDiffContribution);
    bind(tab_bar_toolbar_1.TabBarToolbarContribution).toService(git_diff_contribution_1.GitDiffContribution);
}
exports.bindGitDiffModule = bindGitDiffModule;


/***/ }),

/***/ "./node_modules/@theia/git/lib/browser/diff/git-diff-widget.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@theia/git/lib/browser/diff/git-diff-widget.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2018 TypeFox and others.
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
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var uri_1 = __webpack_require__(/*! @theia/core/lib/common/uri */ "./node_modules/@theia/core/lib/common/uri.js");
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "./node_modules/@theia/core/lib/browser/index.js");
var browser_2 = __webpack_require__(/*! @theia/editor/lib/browser */ "./node_modules/@theia/editor/lib/browser/index.js");
var common_1 = __webpack_require__(/*! ../../common */ "./node_modules/@theia/git/lib/common/index.js");
var common_2 = __webpack_require__(/*! ../../common */ "./node_modules/@theia/git/lib/common/index.js");
var git_resource_1 = __webpack_require__(/*! ../git-resource */ "./node_modules/@theia/git/lib/browser/git-resource.js");
var git_navigable_list_widget_1 = __webpack_require__(/*! ../git-navigable-list-widget */ "./node_modules/@theia/git/lib/browser/git-navigable-list-widget.js");
var git_file_change_node_1 = __webpack_require__(/*! ../git-file-change-node */ "./node_modules/@theia/git/lib/browser/git-file-change-node.js");
var promise_util_1 = __webpack_require__(/*! @theia/core/lib/common/promise-util */ "./node_modules/@theia/core/lib/common/promise-util.js");
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
// tslint:disable:no-null-keyword
exports.GIT_DIFF = 'git-diff';
var GitDiffWidget = /** @class */ (function (_super) {
    __extends(GitDiffWidget, _super);
    function GitDiffWidget() {
        var _this = _super.call(this) || this;
        _this.GIT_DIFF_TITLE = 'Diff';
        _this.fileChangeNodes = [];
        _this.deferredListContainer = new promise_util_1.Deferred();
        _this.showPreviousChange = function () { return _this.doShowPreviousChange(); };
        _this.showNextChange = function () { return _this.doShowNextChange(); };
        _this.setListContainer = function (listContainerElement) { return _this.deferredListContainer.resolve(listContainerElement); };
        _this.addGitDiffListKeyListeners = function (id) { return _this.doAddGitDiffListKeyListeners(id); };
        _this.id = exports.GIT_DIFF;
        _this.scrollContainer = 'git-diff-list-container';
        _this.title.label = _this.GIT_DIFF_TITLE;
        _this.title.caption = _this.GIT_DIFF_TITLE;
        _this.title.closable = true;
        _this.title.iconClass = 'theia-git-diff-icon';
        _this.addClass('theia-git');
        return _this;
    }
    GitDiffWidget.prototype.init = function () {
        var _this = this;
        this.toDispose.push(this.gitWatcher.onGitEvent(function (gitEvent) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (this.options) {
                    this.setContent(this.options);
                }
                return [2 /*return*/];
            });
        }); }));
        this.toDispose.push(this.labelProvider.onDidChange(function (event) {
            var affectsFiles = _this.fileChangeNodes.some(function (node) { return event.affects(new uri_1.default(node.uri)); });
            if (_this.options && affectsFiles) {
                _this.setContent(_this.options);
            }
        }));
    };
    GitDiffWidget.prototype.getScrollContainer = function () {
        return this.deferredListContainer.promise;
    };
    Object.defineProperty(GitDiffWidget.prototype, "toRevision", {
        get: function () {
            return this.options.range && this.options.range.toRevision;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GitDiffWidget.prototype, "fromRevision", {
        get: function () {
            return this.options.range && this.options.range.fromRevision;
        },
        enumerable: true,
        configurable: true
    });
    GitDiffWidget.prototype.setContent = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            var repository, fileChanges, fileChangeNodes, fileChanges_1, fileChanges_1_1, fileChange, fileChangeUri, _a, icon, label, description, caption, e_1_1;
            var e_1, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        this.options = options;
                        repository = this.repositoryProvider.findRepositoryOrSelected(options);
                        if (!repository) return [3 /*break*/, 10];
                        return [4 /*yield*/, this.git.diff(repository, {
                                range: options.range,
                                uri: options.uri
                            })];
                    case 1:
                        fileChanges = _c.sent();
                        fileChangeNodes = [];
                        _c.label = 2;
                    case 2:
                        _c.trys.push([2, 7, 8, 9]);
                        fileChanges_1 = __values(fileChanges), fileChanges_1_1 = fileChanges_1.next();
                        _c.label = 3;
                    case 3:
                        if (!!fileChanges_1_1.done) return [3 /*break*/, 6];
                        fileChange = fileChanges_1_1.value;
                        fileChangeUri = new uri_1.default(fileChange.uri);
                        return [4 /*yield*/, Promise.all([
                                this.labelProvider.getIcon(fileChangeUri),
                                this.labelProvider.getName(fileChangeUri),
                                this.relativePath(fileChangeUri.parent)
                            ])];
                    case 4:
                        _a = __read.apply(void 0, [_c.sent(), 3]), icon = _a[0], label = _a[1], description = _a[2];
                        caption = this.computeCaption(fileChange);
                        fileChangeNodes.push(__assign({}, fileChange, { icon: icon, label: label, description: description, caption: caption }));
                        _c.label = 5;
                    case 5:
                        fileChanges_1_1 = fileChanges_1.next();
                        return [3 /*break*/, 3];
                    case 6: return [3 /*break*/, 9];
                    case 7:
                        e_1_1 = _c.sent();
                        e_1 = { error: e_1_1 };
                        return [3 /*break*/, 9];
                    case 8:
                        try {
                            if (fileChanges_1_1 && !fileChanges_1_1.done && (_b = fileChanges_1.return)) _b.call(fileChanges_1);
                        }
                        finally { if (e_1) throw e_1.error; }
                        return [7 /*endfinally*/];
                    case 9:
                        this.fileChangeNodes = fileChangeNodes;
                        this.update();
                        _c.label = 10;
                    case 10: return [2 /*return*/];
                }
            });
        });
    };
    GitDiffWidget.prototype.storeState = function () {
        var _a = this, fileChangeNodes = _a.fileChangeNodes, options = _a.options;
        return {
            fileChangeNodes: fileChangeNodes,
            options: options
        };
    };
    // tslint:disable-next-line:no-any
    GitDiffWidget.prototype.restoreState = function (oldState) {
        this.fileChangeNodes = oldState['fileChangeNodes'];
        this.options = oldState['options'];
        this.update();
    };
    GitDiffWidget.prototype.onActivateRequest = function (msg) {
        _super.prototype.onActivateRequest.call(this, msg);
        if (this.listView) {
            this.listView.focus();
        }
    };
    GitDiffWidget.prototype.render = function () {
        this.gitNodes = this.fileChangeNodes;
        var commitishBar = this.renderDiffListHeader();
        var fileChangeList = this.renderFileChangeList();
        return React.createElement("div", { className: 'git-diff-container' },
            commitishBar,
            fileChangeList);
    };
    GitDiffWidget.prototype.renderDiffListHeader = function () {
        return this.doRenderDiffListHeader(this.renderRepositoryHeader(), this.renderPathHeader(), this.renderRevisionHeader(), this.renderToolbar());
    };
    GitDiffWidget.prototype.doRenderDiffListHeader = function () {
        var children = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            children[_i] = arguments[_i];
        }
        return React.createElement("div", { className: 'diff-header' }, children);
    };
    GitDiffWidget.prototype.renderRepositoryHeader = function () {
        if (this.options && this.options.uri) {
            return this.renderHeaderRow({ name: 'repository', value: this.getRepositoryLabel(this.options.uri) });
        }
        return undefined;
    };
    GitDiffWidget.prototype.renderPathHeader = function () {
        return this.renderHeaderRow({
            classNames: ['diff-header'],
            name: 'path',
            value: this.renderPath()
        });
    };
    GitDiffWidget.prototype.renderPath = function () {
        if (this.options.uri) {
            var path = this.relativePath(this.options.uri);
            if (path.length > 0) {
                return '/' + path;
            }
            else {
                return this.labelProvider.getLongName(new uri_1.default(this.options.uri));
            }
        }
        return null;
    };
    GitDiffWidget.prototype.renderRevisionHeader = function () {
        return this.renderHeaderRow({
            classNames: ['diff-header'],
            name: 'revision: ',
            value: this.renderRevision()
        });
    };
    GitDiffWidget.prototype.renderRevision = function () {
        if (!this.fromRevision) {
            return null;
        }
        if (typeof this.fromRevision === 'string') {
            return this.fromRevision;
        }
        return (this.toRevision || 'HEAD') + '~' + this.fromRevision;
    };
    GitDiffWidget.prototype.renderToolbar = function () {
        return this.doRenderToolbar(this.renderNavigationLeft(), this.renderNavigationRight());
    };
    GitDiffWidget.prototype.doRenderToolbar = function () {
        var children = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            children[_i] = arguments[_i];
        }
        return this.renderHeaderRow({
            classNames: ['diff-nav', 'space-between'],
            name: 'Files changed',
            value: React.createElement("div", { className: 'lrBtns' }, children)
        });
    };
    GitDiffWidget.prototype.doShowPreviousChange = function () {
        this.navigateLeft();
    };
    GitDiffWidget.prototype.renderNavigationLeft = function () {
        return React.createElement("span", { key: 'lnav', className: 'fa fa-arrow-left', title: 'Previous Change', onClick: this.showPreviousChange });
    };
    GitDiffWidget.prototype.doShowNextChange = function () {
        this.navigateRight();
    };
    GitDiffWidget.prototype.renderNavigationRight = function () {
        return React.createElement("span", { key: 'rnav', className: 'fa fa-arrow-right', title: 'Next Change', onClick: this.showNextChange });
    };
    GitDiffWidget.prototype.renderFileChangeList = function () {
        var e_2, _a;
        var _this = this;
        var files = [];
        try {
            for (var _b = __values(this.fileChangeNodes), _c = _b.next(); !_c.done; _c = _b.next()) {
                var fileChange = _c.value;
                var fileChangeElement = this.renderGitItem(fileChange);
                files.push(fileChangeElement);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
        if (!files.length) {
            return React.createElement("div", null, "No files changed.");
        }
        return React.createElement(GitDiffListContainer, { ref: function (ref) { return _this.listView = ref || undefined; }, id: this.scrollContainer, files: files, addDiffListKeyListeners: this.addGitDiffListKeyListeners, setListContainer: this.setListContainer });
    };
    GitDiffWidget.prototype.doAddGitDiffListKeyListeners = function (id) {
        var container = document.getElementById(id);
        if (container) {
            this.addGitListNavigationKeyListeners(container);
        }
    };
    GitDiffWidget.prototype.renderGitItem = function (change) {
        var _this = this;
        return React.createElement("div", { key: change.uri.toString(), className: "gitItem noselect" + (change.selected ? ' ' + browser_1.SELECTED_CLASS : '') },
            React.createElement("div", { title: change.caption, className: 'noWrapInfo', onDoubleClick: function () {
                    _this.revealChange(change);
                }, onClick: function () {
                    _this.selectNode(change);
                } },
                React.createElement("span", { className: change.icon + ' file-icon' }),
                React.createElement("span", { className: 'name' }, change.label + ' '),
                React.createElement("span", { className: 'path' }, change.description)),
            change.extraIconClassName ? React.createElement("div", { title: change.caption, className: change.extraIconClassName })
                : '',
            React.createElement("div", { title: change.caption, className: 'status staged ' + common_1.GitFileStatus[change.status].toLowerCase() }, this.getStatusCaption(change.status, true).charAt(0)));
    };
    GitDiffWidget.prototype.navigateRight = function () {
        var _this = this;
        var selected = this.getSelected();
        if (selected && git_file_change_node_1.GitFileChangeNode.is(selected)) {
            var uri = this.getUriToOpen(selected);
            this.editorManager.getByUri(uri).then(function (widget) {
                if (widget) {
                    var diffNavigator = _this.diffNavigatorProvider(widget.editor);
                    if (diffNavigator.canNavigate() && diffNavigator.hasNext()) {
                        diffNavigator.next();
                    }
                    else {
                        _this.selectNextNode();
                        _this.openSelected();
                    }
                }
                else {
                    _this.revealChange(selected);
                }
            });
        }
        else if (this.gitNodes.length > 0) {
            this.selectNode(this.gitNodes[0]);
            this.openSelected();
        }
    };
    GitDiffWidget.prototype.navigateLeft = function () {
        var _this = this;
        var selected = this.getSelected();
        if (git_file_change_node_1.GitFileChangeNode.is(selected)) {
            var uri = this.getUriToOpen(selected);
            this.editorManager.getByUri(uri).then(function (widget) {
                if (widget) {
                    var diffNavigator = _this.diffNavigatorProvider(widget.editor);
                    if (diffNavigator.canNavigate() && diffNavigator.hasPrevious()) {
                        diffNavigator.previous();
                    }
                    else {
                        _this.selectPreviousNode();
                        _this.openSelected();
                    }
                }
                else {
                    _this.revealChange(selected);
                }
            });
        }
    };
    GitDiffWidget.prototype.selectNextNode = function () {
        var idx = this.indexOfSelected;
        if (idx >= 0 && idx < this.gitNodes.length - 1) {
            this.selectNode(this.gitNodes[idx + 1]);
        }
        else if (this.gitNodes.length > 0 && (idx === -1 || idx === this.gitNodes.length - 1)) {
            this.selectNode(this.gitNodes[0]);
        }
    };
    GitDiffWidget.prototype.selectPreviousNode = function () {
        var idx = this.indexOfSelected;
        if (idx > 0) {
            this.selectNode(this.gitNodes[idx - 1]);
        }
        else if (idx === 0) {
            this.selectNode(this.gitNodes[this.gitNodes.length - 1]);
        }
    };
    GitDiffWidget.prototype.handleListEnter = function () {
        this.openSelected();
    };
    GitDiffWidget.prototype.openSelected = function () {
        var selected = this.getSelected();
        if (selected) {
            this.revealChange(selected);
        }
    };
    GitDiffWidget.prototype.getUriToOpen = function (change) {
        var uri = new uri_1.default(change.uri);
        var fromURI = uri;
        if (change.oldUri) { // set on renamed and copied
            fromURI = new uri_1.default(change.oldUri);
        }
        if (this.fromRevision !== undefined) {
            if (typeof this.fromRevision !== 'number') {
                fromURI = fromURI.withScheme(git_resource_1.GIT_RESOURCE_SCHEME).withQuery(this.fromRevision);
            }
            else {
                fromURI = fromURI.withScheme(git_resource_1.GIT_RESOURCE_SCHEME).withQuery(this.toRevision + '~' + this.fromRevision);
            }
        }
        else {
            // default is to compare with previous revision
            fromURI = fromURI.withScheme(git_resource_1.GIT_RESOURCE_SCHEME).withQuery(this.toRevision + '~1');
        }
        var toURI = uri;
        if (this.toRevision) {
            toURI = toURI.withScheme(git_resource_1.GIT_RESOURCE_SCHEME).withQuery(this.toRevision);
        }
        var uriToOpen = uri;
        if (change.status === common_1.GitFileStatus.Deleted) {
            uriToOpen = fromURI;
        }
        else if (change.status === common_1.GitFileStatus.New) {
            uriToOpen = toURI;
        }
        else {
            uriToOpen = browser_1.DiffUris.encode(fromURI, toURI);
        }
        return uriToOpen;
    };
    GitDiffWidget.prototype.openChanges = function (uri, options) {
        return __awaiter(this, void 0, void 0, function () {
            var stringUri, change;
            return __generator(this, function (_a) {
                stringUri = uri.toString();
                change = this.fileChangeNodes.find(function (n) { return n.uri.toString() === stringUri; });
                return [2 /*return*/, change && this.openChange(change, options)];
            });
        });
    };
    GitDiffWidget.prototype.openChange = function (change, options) {
        var uriToOpen = this.getUriToOpen(change);
        return this.editorManager.open(uriToOpen, options);
    };
    GitDiffWidget.prototype.revealChange = function (change) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.openChange(change, { mode: 'reveal' })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        inversify_1.inject(common_1.Git),
        __metadata("design:type", Object)
    ], GitDiffWidget.prototype, "git", void 0);
    __decorate([
        inversify_1.inject(browser_2.DiffNavigatorProvider),
        __metadata("design:type", Function)
    ], GitDiffWidget.prototype, "diffNavigatorProvider", void 0);
    __decorate([
        inversify_1.inject(browser_2.EditorManager),
        __metadata("design:type", browser_2.EditorManager)
    ], GitDiffWidget.prototype, "editorManager", void 0);
    __decorate([
        inversify_1.inject(common_2.GitWatcher),
        __metadata("design:type", common_2.GitWatcher)
    ], GitDiffWidget.prototype, "gitWatcher", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], GitDiffWidget.prototype, "init", null);
    GitDiffWidget = __decorate([
        inversify_1.injectable(),
        __metadata("design:paramtypes", [])
    ], GitDiffWidget);
    return GitDiffWidget;
}(git_navigable_list_widget_1.GitNavigableListWidget));
exports.GitDiffWidget = GitDiffWidget;
var GitDiffListContainer = /** @class */ (function (_super) {
    __extends(GitDiffListContainer, _super);
    function GitDiffListContainer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GitDiffListContainer.prototype.render = function () {
        var _this = this;
        var _a = this.props, id = _a.id, files = _a.files;
        return React.createElement("div", { ref: function (ref) { return _this.listContainer = ref || undefined; }, className: 'listContainer filesChanged', id: id, tabIndex: 0 }, files);
    };
    GitDiffListContainer.prototype.componentDidMount = function () {
        this.props.addDiffListKeyListeners(this.props.id);
        if (this.listContainer) {
            this.props.setListContainer(this.listContainer);
        }
    };
    GitDiffListContainer.prototype.focus = function () {
        if (this.listContainer) {
            this.listContainer.focus({ preventScroll: true });
        }
    };
    return GitDiffListContainer;
}(React.Component));
exports.GitDiffListContainer = GitDiffListContainer;


/***/ }),

/***/ "./node_modules/@theia/git/lib/browser/dirty-diff/dirty-diff-contribution.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@theia/git/lib/browser/dirty-diff/dirty-diff-contribution.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2018 TypeFox and others.
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
var dirty_diff_decorator_1 = __webpack_require__(/*! @theia/scm/lib/browser/dirty-diff/dirty-diff-decorator */ "./node_modules/@theia/scm/lib/browser/dirty-diff/dirty-diff-decorator.js");
var dirty_diff_manager_1 = __webpack_require__(/*! ./dirty-diff-manager */ "./node_modules/@theia/git/lib/browser/dirty-diff/dirty-diff-manager.js");
var DirtyDiffContribution = /** @class */ (function () {
    function DirtyDiffContribution(dirtyDiffManager, dirtyDiffDecorator) {
        this.dirtyDiffManager = dirtyDiffManager;
        this.dirtyDiffDecorator = dirtyDiffDecorator;
    }
    DirtyDiffContribution.prototype.onStart = function (app) {
        var _this = this;
        this.dirtyDiffManager.onDirtyDiffUpdate(function (update) { return _this.dirtyDiffDecorator.applyDecorations(update); });
    };
    DirtyDiffContribution = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(dirty_diff_manager_1.DirtyDiffManager)),
        __param(1, inversify_1.inject(dirty_diff_decorator_1.DirtyDiffDecorator)),
        __metadata("design:paramtypes", [dirty_diff_manager_1.DirtyDiffManager,
            dirty_diff_decorator_1.DirtyDiffDecorator])
    ], DirtyDiffContribution);
    return DirtyDiffContribution;
}());
exports.DirtyDiffContribution = DirtyDiffContribution;


/***/ }),

/***/ "./node_modules/@theia/git/lib/browser/dirty-diff/dirty-diff-manager.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@theia/git/lib/browser/dirty-diff/dirty-diff-manager.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2018 TypeFox and others.
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
var browser_1 = __webpack_require__(/*! @theia/editor/lib/browser */ "./node_modules/@theia/editor/lib/browser/index.js");
var uri_1 = __webpack_require__(/*! @theia/core/lib/common/uri */ "./node_modules/@theia/core/lib/common/uri.js");
var core_1 = __webpack_require__(/*! @theia/core */ "./node_modules/@theia/core/lib/common/index.js");
var content_lines_1 = __webpack_require__(/*! @theia/scm/lib/browser/dirty-diff/content-lines */ "./node_modules/@theia/scm/lib/browser/dirty-diff/content-lines.js");
var diff_computer_1 = __webpack_require__(/*! @theia/scm/lib/browser/dirty-diff/diff-computer */ "./node_modules/@theia/scm/lib/browser/dirty-diff/diff-computer.js");
var git_preferences_1 = __webpack_require__(/*! ../git-preferences */ "./node_modules/@theia/git/lib/browser/git-preferences.js");
var git_resource_1 = __webpack_require__(/*! ../git-resource */ "./node_modules/@theia/git/lib/browser/git-resource.js");
var git_resource_resolver_1 = __webpack_require__(/*! ../git-resource-resolver */ "./node_modules/@theia/git/lib/browser/git-resource-resolver.js");
var common_1 = __webpack_require__(/*! ../../common */ "./node_modules/@theia/git/lib/common/index.js");
var git_repository_tracker_1 = __webpack_require__(/*! ../git-repository-tracker */ "./node_modules/@theia/git/lib/browser/git-repository-tracker.js");
var throttle = __webpack_require__(/*! lodash.throttle */ "./node_modules/lodash.throttle/index.js");
var DirtyDiffManager = /** @class */ (function () {
    function DirtyDiffManager() {
        this.models = new Map();
        this.onDirtyDiffUpdateEmitter = new core_1.Emitter();
        this.onDirtyDiffUpdate = this.onDirtyDiffUpdateEmitter.event;
    }
    DirtyDiffManager.prototype.initialize = function () {
        return __awaiter(this, void 0, void 0, function () {
            var gitStatus, repository;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.editorManager.onCreated(function (e) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                            return [2 /*return*/, this.handleEditorCreated(e)];
                        }); }); });
                        this.repositoryTracker.onGitEvent(throttle(function (event) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                            return [2 /*return*/, this.handleGitStatusUpdate(event && event.source, event && event.status)];
                        }); }); }, 500));
                        gitStatus = this.repositoryTracker.selectedRepositoryStatus;
                        repository = this.repositoryTracker.selectedRepository;
                        if (!(gitStatus && repository)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.handleGitStatusUpdate(repository, gitStatus)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    DirtyDiffManager.prototype.handleEditorCreated = function (editorWidget) {
        return __awaiter(this, void 0, void 0, function () {
            var editor, uri, toDispose, model, gitStatus, repository, changes;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        editor = editorWidget.editor;
                        uri = editor.uri.toString();
                        if (editor.uri.scheme !== 'file') {
                            return [2 /*return*/];
                        }
                        toDispose = new core_1.DisposableCollection();
                        model = this.createNewModel(editor);
                        toDispose.push(model);
                        this.models.set(uri, model);
                        toDispose.push(editor.onDocumentContentChanged(throttle(function (event) { return model.handleDocumentChanged(event.document); }, 1000)));
                        editorWidget.disposed.connect(function () {
                            _this.models.delete(uri);
                            toDispose.dispose();
                        });
                        gitStatus = this.repositoryTracker.selectedRepositoryStatus;
                        repository = this.repositoryTracker.selectedRepository;
                        if (!(gitStatus && repository)) return [3 /*break*/, 2];
                        changes = gitStatus.changes.filter(function (c) { return c.uri === uri; });
                        return [4 /*yield*/, model.handleGitStatusUpdate(repository, changes)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        model.handleDocumentChanged(editor.document);
                        return [2 /*return*/];
                }
            });
        });
    };
    DirtyDiffManager.prototype.createNewModel = function (editor) {
        var _this = this;
        var previousRevision = this.createPreviousFileRevision(editor.uri);
        var model = new DirtyDiffModel(editor, this.preferences, previousRevision);
        model.onDirtyDiffUpdate(function (e) { return _this.onDirtyDiffUpdateEmitter.fire(e); });
        return model;
    };
    DirtyDiffManager.prototype.createPreviousFileRevision = function (fileUri) {
        var _this = this;
        return {
            fileUri: fileUri,
            getContents: function (staged) { return __awaiter(_this, void 0, void 0, function () {
                var query, uri, gitResource;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            query = staged ? '' : 'HEAD';
                            uri = fileUri.withScheme(git_resource_1.GIT_RESOURCE_SCHEME).withQuery(query);
                            return [4 /*yield*/, this.gitResourceResolver.getResource(uri)];
                        case 1:
                            gitResource = _a.sent();
                            return [2 /*return*/, gitResource.readContents()];
                    }
                });
            }); },
            isVersionControlled: function () { return __awaiter(_this, void 0, void 0, function () {
                var repository;
                return __generator(this, function (_a) {
                    repository = this.repositoryTracker.selectedRepository;
                    if (repository) {
                        return [2 /*return*/, this.git.lsFiles(repository, fileUri.toString(), { errorUnmatch: true })];
                    }
                    return [2 /*return*/, false];
                });
            }); }
        };
    };
    DirtyDiffManager.prototype.handleGitStatusUpdate = function (repository, status) {
        return __awaiter(this, void 0, void 0, function () {
            var uris, relevantChanges, _loop_1, _a, _b, model, e_1_1;
            var e_1, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        uris = new Set(this.models.keys());
                        relevantChanges = status ? status.changes.filter(function (c) { return uris.has(c.uri); }) : [];
                        _loop_1 = function (model) {
                            var uri, changes;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        uri = model.editor.uri.toString();
                                        changes = relevantChanges.filter(function (c) { return c.uri === uri; });
                                        return [4 /*yield*/, model.handleGitStatusUpdate(repository, changes)];
                                    case 1:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        };
                        _d.label = 1;
                    case 1:
                        _d.trys.push([1, 6, 7, 8]);
                        _a = __values(this.models.values()), _b = _a.next();
                        _d.label = 2;
                    case 2:
                        if (!!_b.done) return [3 /*break*/, 5];
                        model = _b.value;
                        return [5 /*yield**/, _loop_1(model)];
                    case 3:
                        _d.sent();
                        _d.label = 4;
                    case 4:
                        _b = _a.next();
                        return [3 /*break*/, 2];
                    case 5: return [3 /*break*/, 8];
                    case 6:
                        e_1_1 = _d.sent();
                        e_1 = { error: e_1_1 };
                        return [3 /*break*/, 8];
                    case 7:
                        try {
                            if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                        }
                        finally { if (e_1) throw e_1.error; }
                        return [7 /*endfinally*/];
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        inversify_1.inject(common_1.Git),
        __metadata("design:type", Object)
    ], DirtyDiffManager.prototype, "git", void 0);
    __decorate([
        inversify_1.inject(git_repository_tracker_1.GitRepositoryTracker),
        __metadata("design:type", git_repository_tracker_1.GitRepositoryTracker)
    ], DirtyDiffManager.prototype, "repositoryTracker", void 0);
    __decorate([
        inversify_1.inject(git_resource_resolver_1.GitResourceResolver),
        __metadata("design:type", git_resource_resolver_1.GitResourceResolver)
    ], DirtyDiffManager.prototype, "gitResourceResolver", void 0);
    __decorate([
        inversify_1.inject(browser_1.EditorManager),
        __metadata("design:type", browser_1.EditorManager)
    ], DirtyDiffManager.prototype, "editorManager", void 0);
    __decorate([
        inversify_1.inject(git_preferences_1.GitPreferences),
        __metadata("design:type", Object)
    ], DirtyDiffManager.prototype, "preferences", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], DirtyDiffManager.prototype, "initialize", null);
    DirtyDiffManager = __decorate([
        inversify_1.injectable()
    ], DirtyDiffManager);
    return DirtyDiffManager;
}());
exports.DirtyDiffManager = DirtyDiffManager;
var DirtyDiffModel = /** @class */ (function () {
    function DirtyDiffModel(editor, preferences, previousRevision) {
        var _this = this;
        this.editor = editor;
        this.preferences = preferences;
        this.previousRevision = previousRevision;
        this.toDispose = new core_1.DisposableCollection();
        this.enabled = true;
        this.onDirtyDiffUpdateEmitter = new core_1.Emitter();
        this.onDirtyDiffUpdate = this.onDirtyDiffUpdateEmitter.event;
        this.toDispose.push(this.preferences.onPreferenceChanged(function (e) { return _this.handlePreferenceChange(e); }));
    }
    DirtyDiffModel.prototype.handlePreferenceChange = function (event) {
        return __awaiter(this, void 0, void 0, function () {
            var preferenceName, newValue, enabled;
            return __generator(this, function (_a) {
                preferenceName = event.preferenceName, newValue = event.newValue;
                if (preferenceName === 'git.editor.decorations.enabled') {
                    enabled = !!newValue;
                    this.enabled = enabled;
                    this.update();
                }
                if (preferenceName === 'git.editor.dirtyDiff.linesLimit') {
                    this.update();
                }
                return [2 /*return*/];
            });
        });
    };
    Object.defineProperty(DirtyDiffModel.prototype, "linesLimit", {
        get: function () {
            var limit = this.preferences['git.editor.dirtyDiff.linesLimit'];
            return limit > 0 ? limit : Number.MAX_SAFE_INTEGER;
        },
        enumerable: true,
        configurable: true
    });
    DirtyDiffModel.prototype.shouldRender = function () {
        if (!this.enabled || !this.previousContent || !this.currentContent) {
            return false;
        }
        var limit = this.linesLimit;
        return this.previousContent.length < limit && this.currentContent.length < limit;
    };
    DirtyDiffModel.prototype.update = function () {
        var _this = this;
        var editor = this.editor;
        if (!this.shouldRender()) {
            this.onDirtyDiffUpdateEmitter.fire({ editor: editor, added: [], removed: [], modified: [] });
            return;
        }
        if (this.updateTimeout) {
            window.clearTimeout(this.updateTimeout);
        }
        this.updateTimeout = window.setTimeout(function () {
            var previous = _this.previousContent;
            var current = _this.currentContent;
            if (!previous || !current) {
                return;
            }
            _this.updateTimeout = undefined;
            var dirtyDiff = DirtyDiffModel.computeDirtyDiff(previous, current);
            if (!dirtyDiff) {
                // if the computation fails, it might be because of changes in the editor, in that case
                // a new update task should be scheduled anyway.
                return;
            }
            var dirtyDiffUpdate = __assign({ editor: editor }, dirtyDiff);
            _this.onDirtyDiffUpdateEmitter.fire(dirtyDiffUpdate);
        }, 100);
    };
    DirtyDiffModel.prototype.handleDocumentChanged = function (document) {
        this.currentContent = DirtyDiffModel.documentContentLines(document);
        this.update();
    };
    DirtyDiffModel.prototype.handleGitStatusUpdate = function (repository, relevantChanges) {
        return __awaiter(this, void 0, void 0, function () {
            var noRelevantChanges, isNewAndStaged, isNewAndUnstaged, modifiedChange, isModified, readPreviousRevisionContent, inGitRepository;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        noRelevantChanges = relevantChanges.length === 0;
                        isNewAndStaged = relevantChanges.some(function (c) { return c.status === common_1.GitFileStatus.New && !!c.staged; });
                        isNewAndUnstaged = relevantChanges.some(function (c) { return c.status === common_1.GitFileStatus.New && !c.staged; });
                        modifiedChange = relevantChanges.find(function (c) { return c.status === common_1.GitFileStatus.Modified; });
                        isModified = !!modifiedChange;
                        readPreviousRevisionContent = function () { return __awaiter(_this, void 0, void 0, function () {
                            var _a, _b;
                            return __generator(this, function (_c) {
                                switch (_c.label) {
                                    case 0:
                                        _c.trys.push([0, 2, , 3]);
                                        _a = this;
                                        return [4 /*yield*/, this.getPreviousRevisionContent()];
                                    case 1:
                                        _a.previousContent = _c.sent();
                                        return [3 /*break*/, 3];
                                    case 2:
                                        _b = _c.sent();
                                        this.previousContent = undefined;
                                        return [3 /*break*/, 3];
                                    case 3: return [2 /*return*/];
                                }
                            });
                        }); };
                        if (!(isModified || isNewAndStaged)) return [3 /*break*/, 2];
                        this.staged = isNewAndStaged || modifiedChange.staged || false;
                        return [4 /*yield*/, readPreviousRevisionContent()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        if (isNewAndUnstaged && !isNewAndStaged) {
                            this.previousContent = undefined;
                        }
                        if (!noRelevantChanges) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.isInGitRepository(repository)];
                    case 3:
                        inGitRepository = _a.sent();
                        if (!inGitRepository) return [3 /*break*/, 5];
                        return [4 /*yield*/, readPreviousRevisionContent()];
                    case 4:
                        _a.sent();
                        _a.label = 5;
                    case 5:
                        this.update();
                        return [2 /*return*/];
                }
            });
        });
    };
    DirtyDiffModel.prototype.isInGitRepository = function (repository) {
        return __awaiter(this, void 0, void 0, function () {
            var modelUri, repoUri;
            return __generator(this, function (_a) {
                if (!repository) {
                    return [2 /*return*/, false];
                }
                modelUri = this.editor.uri.withScheme('file').toString();
                repoUri = new uri_1.default(repository.localUri).withScheme('file').toString();
                return [2 /*return*/, modelUri.startsWith(repoUri) && this.previousRevision.isVersionControlled()];
            });
        });
    };
    DirtyDiffModel.prototype.getPreviousRevisionContent = function () {
        return __awaiter(this, void 0, void 0, function () {
            var contents;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.previousRevision.getContents(this.staged)];
                    case 1:
                        contents = _a.sent();
                        return [2 /*return*/, contents ? content_lines_1.ContentLines.fromString(contents) : undefined];
                }
            });
        });
    };
    DirtyDiffModel.prototype.dispose = function () {
        this.toDispose.dispose();
        this.onDirtyDiffUpdateEmitter.dispose();
    };
    return DirtyDiffModel;
}());
exports.DirtyDiffModel = DirtyDiffModel;
(function (DirtyDiffModel) {
    var diffComputer = new diff_computer_1.DiffComputer();
    /**
     * Returns an eventually consistent result. E.g. it can happen, that lines are deleted during the computation,
     * which will internally produce 'line out of bound' errors, then it will return `undefined`.
     *
     * `ContentLines` are to avoid copying contents which improves the performance, therefore handling of the `undefined`
     * result, and rescheduling of the computation should be done by caller.
     */
    function computeDirtyDiff(previous, current) {
        try {
            return diffComputer.computeDirtyDiff(content_lines_1.ContentLines.arrayLike(previous), content_lines_1.ContentLines.arrayLike(current));
        }
        catch (_a) {
            return undefined;
        }
    }
    DirtyDiffModel.computeDirtyDiff = computeDirtyDiff;
    function documentContentLines(document) {
        return {
            length: document.lineCount,
            getLineContent: function (line) { return document.getLineContent(line + 1); },
        };
    }
    DirtyDiffModel.documentContentLines = documentContentLines;
})(DirtyDiffModel = exports.DirtyDiffModel || (exports.DirtyDiffModel = {}));
exports.DirtyDiffModel = DirtyDiffModel;


/***/ }),

/***/ "./node_modules/@theia/git/lib/browser/dirty-diff/dirty-diff-module.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@theia/git/lib/browser/dirty-diff/dirty-diff-module.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2018 TypeFox and others.
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
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "./node_modules/@theia/core/lib/browser/index.js");
var dirty_diff_contribution_1 = __webpack_require__(/*! ./dirty-diff-contribution */ "./node_modules/@theia/git/lib/browser/dirty-diff/dirty-diff-contribution.js");
var dirty_diff_manager_1 = __webpack_require__(/*! ./dirty-diff-manager */ "./node_modules/@theia/git/lib/browser/dirty-diff/dirty-diff-manager.js");
__webpack_require__(/*! ../../../src/browser/style/dirty-diff.css */ "./node_modules/@theia/git/src/browser/style/dirty-diff.css");
function bindDirtyDiff(bind) {
    bind(dirty_diff_manager_1.DirtyDiffManager).toSelf().inSingletonScope();
    bind(dirty_diff_contribution_1.DirtyDiffContribution).toSelf().inSingletonScope();
    bind(browser_1.FrontendApplicationContribution).toService(dirty_diff_contribution_1.DirtyDiffContribution);
}
exports.bindDirtyDiff = bindDirtyDiff;


/***/ }),

/***/ "./node_modules/@theia/git/lib/browser/git-commit-message-validator.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@theia/git/lib/browser/git-commit-message-validator.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2018 TypeFox and others.
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
var GitCommitMessageValidator = /** @class */ (function () {
    function GitCommitMessageValidator() {
    }
    GitCommitMessageValidator_1 = GitCommitMessageValidator;
    /**
     * Validates the input and returns with either a validation result with the status and message, or `undefined` if everything went fine.
     */
    GitCommitMessageValidator.prototype.validate = function (input) {
        if (input) {
            var lines = input.split(/\r?\n/);
            for (var i = 0; i < lines.length; i++) {
                var line = lines[i];
                var result = this.isLineValid(line, i);
                if (!!result) {
                    return result;
                }
            }
        }
        return undefined;
    };
    GitCommitMessageValidator.prototype.isLineValid = function (line, index) {
        if (index === 1 && line.length !== 0) {
            return {
                status: 'warning',
                message: 'The second line should be empty to separate the commit message from the body'
            };
        }
        var diff = line.length - this.maxCharsPerLine();
        if (diff > 0) {
            return {
                status: 'warning',
                message: diff + " characters over " + this.maxCharsPerLine() + " in current line"
            };
        }
        return undefined;
    };
    GitCommitMessageValidator.prototype.maxCharsPerLine = function () {
        return GitCommitMessageValidator_1.MAX_CHARS_PER_LINE;
    };
    var GitCommitMessageValidator_1;
    GitCommitMessageValidator.MAX_CHARS_PER_LINE = 72;
    GitCommitMessageValidator = GitCommitMessageValidator_1 = __decorate([
        inversify_1.injectable()
    ], GitCommitMessageValidator);
    return GitCommitMessageValidator;
}());
exports.GitCommitMessageValidator = GitCommitMessageValidator;
(function (GitCommitMessageValidator) {
    var Result;
    (function (Result) {
        /**
         * `true` if the `message` and the `status` properties are the same on both `left` and `right`. Or both arguments are `undefined`. Otherwise, `false`.
         */
        function equal(left, right) {
            if (left && right) {
                return left.message === right.message && left.status === right.status;
            }
            return left === right;
        }
        Result.equal = equal;
    })(Result = GitCommitMessageValidator.Result || (GitCommitMessageValidator.Result = {}));
})(GitCommitMessageValidator = exports.GitCommitMessageValidator || (exports.GitCommitMessageValidator = {}));
exports.GitCommitMessageValidator = GitCommitMessageValidator;


/***/ }),

/***/ "./node_modules/@theia/git/lib/browser/git-contribution.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@theia/git/lib/browser/git-contribution.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
/********************************************************************************
 * Copyright (C) 2018 TypeFox and others.
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
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var uri_1 = __webpack_require__(/*! @theia/core/lib/common/uri */ "./node_modules/@theia/core/lib/common/uri.js");
var core_1 = __webpack_require__(/*! @theia/core */ "./node_modules/@theia/core/lib/common/index.js");
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "./node_modules/@theia/core/lib/browser/index.js");
var browser_2 = __webpack_require__(/*! @theia/editor/lib/browser */ "./node_modules/@theia/editor/lib/browser/index.js");
var common_1 = __webpack_require__(/*! ../common */ "./node_modules/@theia/git/lib/common/index.js");
var git_repository_tracker_1 = __webpack_require__(/*! ./git-repository-tracker */ "./node_modules/@theia/git/lib/browser/git-repository-tracker.js");
var git_quick_open_service_1 = __webpack_require__(/*! ./git-quick-open-service */ "./node_modules/@theia/git/lib/browser/git-quick-open-service.js");
var git_sync_service_1 = __webpack_require__(/*! ./git-sync-service */ "./node_modules/@theia/git/lib/browser/git-sync-service.js");
var browser_3 = __webpack_require__(/*! @theia/workspace/lib/browser */ "./node_modules/@theia/workspace/lib/browser/index.js");
var git_repository_provider_1 = __webpack_require__(/*! ./git-repository-provider */ "./node_modules/@theia/git/lib/browser/git-repository-provider.js");
var git_error_handler_1 = __webpack_require__(/*! ../browser/git-error-handler */ "./node_modules/@theia/git/lib/browser/git-error-handler.js");
var scm_widget_1 = __webpack_require__(/*! @theia/scm/lib/browser/scm-widget */ "./node_modules/@theia/scm/lib/browser/scm-widget.js");
var progress_service_1 = __webpack_require__(/*! @theia/core/lib/common/progress-service */ "./node_modules/@theia/core/lib/common/progress-service.js");
var git_preferences_1 = __webpack_require__(/*! ./git-preferences */ "./node_modules/@theia/git/lib/browser/git-preferences.js");
exports.EDITOR_CONTEXT_MENU_GIT = __spread(browser_2.EDITOR_CONTEXT_MENU, ['3_git']);
var GIT_COMMANDS;
(function (GIT_COMMANDS) {
    GIT_COMMANDS.CLONE = {
        id: 'git.clone',
        label: 'Git: Clone...'
    };
    GIT_COMMANDS.FETCH = {
        id: 'git.fetch',
        label: 'Git: Fetch...'
    };
    GIT_COMMANDS.PULL_DEFAULT = {
        id: 'git.pull.default',
        label: 'Git: Pull'
    };
    GIT_COMMANDS.PULL = {
        id: 'git.pull',
        label: 'Git: Pull from...'
    };
    GIT_COMMANDS.PUSH_DEFAULT = {
        id: 'git.push.default',
        label: 'Git: Push'
    };
    GIT_COMMANDS.PUSH = {
        id: 'git.push',
        label: 'Git: Push to...'
    };
    GIT_COMMANDS.MERGE = {
        id: 'git.merge',
        label: 'Git: Merge...'
    };
    GIT_COMMANDS.CHECKOUT = {
        id: 'git.checkout',
        label: 'Git: Checkout'
    };
    GIT_COMMANDS.COMMIT = {
        id: 'git.commit.all',
        tooltip: 'Commit all the staged changes',
        iconClass: 'fa fa-check',
        label: 'Commit',
    };
    GIT_COMMANDS.COMMIT_ADD_SIGN_OFF = {
        id: 'git-commit-add-sign-off',
        label: 'Add Signed-off-by',
        iconClass: 'fa fa-pencil-square-o',
        category: 'Git'
    };
    GIT_COMMANDS.COMMIT_AMEND = {
        id: 'git.commit.amend'
    };
    GIT_COMMANDS.COMMIT_SIGN_OFF = {
        id: 'git.commit.signOff'
    };
    GIT_COMMANDS.OPEN_FILE = {
        id: 'git.open.file',
        category: 'Git',
        label: 'Open File',
        iconClass: 'theia-open-file-icon'
    };
    GIT_COMMANDS.OPEN_CHANGED_FILE = {
        id: 'git.open.changed.file',
        category: 'Git',
        label: 'Open File',
        iconClass: 'open-file'
    };
    GIT_COMMANDS.OPEN_CHANGES = {
        id: 'git.open.changes',
        category: 'Git',
        label: 'Open Changes',
        iconClass: 'theia-open-change-icon'
    };
    GIT_COMMANDS.SYNC = {
        id: 'git.sync',
        label: 'Git: Sync'
    };
    GIT_COMMANDS.PUBLISH = {
        id: 'git.publish',
        label: 'Git: Publish Branch'
    };
    GIT_COMMANDS.STAGE = {
        id: 'git.stage',
        category: 'Git',
        label: 'Stage Changes',
        iconClass: 'fa fa-plus'
    };
    GIT_COMMANDS.STAGE_ALL = {
        id: 'git.stage.all',
        category: 'Git',
        label: 'Stage All Changes',
        iconClass: 'fa fa-plus',
    };
    GIT_COMMANDS.UNSTAGE = {
        id: 'git.unstage',
        iconClass: 'fa fa-minus',
        category: 'Git',
        label: 'Unstage Changes'
    };
    GIT_COMMANDS.UNSTAGE_ALL = {
        id: 'git.unstage.all',
        iconClass: 'fa fa-minus',
        category: 'Git',
        label: 'Unstage All',
    };
    GIT_COMMANDS.DISCARD = {
        id: 'git.discard',
        iconClass: 'fa fa-undo',
        category: 'Git',
        label: 'Discard Changes'
    };
    GIT_COMMANDS.DISCARD_ALL = {
        id: 'git.discard.all',
        iconClass: 'fa fa-undo',
        category: 'Git',
        label: 'Discard All Changes',
    };
    GIT_COMMANDS.STASH = {
        id: 'git.stash',
        category: 'Git',
        label: 'Stash...'
    };
    GIT_COMMANDS.APPLY_STASH = {
        id: 'git.stash.apply',
        category: 'Git',
        label: 'Apply Stash...'
    };
    GIT_COMMANDS.APPLY_LATEST_STASH = {
        id: 'git.stash.apply.latest',
        category: 'Git',
        label: 'Apply Latest Stash'
    };
    GIT_COMMANDS.POP_STASH = {
        id: 'git.stash.pop',
        category: 'Git',
        label: 'Pop Stash...'
    };
    GIT_COMMANDS.POP_LATEST_STASH = {
        id: 'git.stash.pop.latest',
        category: 'Git',
        label: 'Pop Latest Stash'
    };
    GIT_COMMANDS.DROP_STASH = {
        id: 'git.stash.drop',
        category: 'Git',
        label: 'Drop Stash...'
    };
    GIT_COMMANDS.REFRESH = {
        id: 'git-refresh',
        label: 'Refresh',
        iconClass: 'fa fa-refresh',
        category: 'Git'
    };
    GIT_COMMANDS.INIT_REPOSITORY = {
        id: 'git-init',
        label: 'Initialize Repository',
        iconClass: 'fa fa-plus',
        category: 'Git'
    };
})(GIT_COMMANDS = exports.GIT_COMMANDS || (exports.GIT_COMMANDS = {}));
var GitContribution = /** @class */ (function () {
    function GitContribution() {
        this.toDispose = new core_1.DisposableCollection();
    }
    GitContribution.prototype.onStart = function () {
        var _this = this;
        this.updateStatusBar();
        this.repositoryTracker.onGitEvent(function () { return _this.updateStatusBar(); });
        this.syncService.onDidChange(function () { return _this.updateStatusBar(); });
    };
    GitContribution.prototype.registerMenus = function (menus) {
        menus.registerMenuAction(browser_2.EditorContextMenu.NAVIGATION, {
            commandId: GIT_COMMANDS.OPEN_FILE.id
        });
        menus.registerMenuAction(browser_2.EditorContextMenu.NAVIGATION, {
            commandId: GIT_COMMANDS.OPEN_CHANGES.id
        });
        var registerResourceAction = function (group, action) {
            menus.registerMenuAction(scm_widget_1.ScmWidget.RESOURCE_INLINE_MENU, action);
            menus.registerMenuAction(__spread(scm_widget_1.ScmWidget.RESOURCE_CONTEXT_MENU, [group]), action);
        };
        registerResourceAction('navigation', {
            commandId: GIT_COMMANDS.OPEN_CHANGED_FILE.id,
            when: 'scmProvider == git && scmResourceGroup == workingTree'
        });
        registerResourceAction('1_modification', {
            commandId: GIT_COMMANDS.DISCARD.id,
            when: 'scmProvider == git && scmResourceGroup == workingTree'
        });
        registerResourceAction('1_modification', {
            commandId: GIT_COMMANDS.STAGE.id,
            when: 'scmProvider == git && scmResourceGroup == workingTree'
        });
        registerResourceAction('navigation', {
            commandId: GIT_COMMANDS.OPEN_CHANGED_FILE.id,
            when: 'scmProvider == git && scmResourceGroup == index'
        });
        registerResourceAction('1_modification', {
            commandId: GIT_COMMANDS.UNSTAGE.id,
            when: 'scmProvider == git && scmResourceGroup == index'
        });
        registerResourceAction('navigation', {
            commandId: GIT_COMMANDS.OPEN_CHANGED_FILE.id,
            when: 'scmProvider == git && scmResourceGroup == merge'
        });
        registerResourceAction('1_modification', {
            commandId: GIT_COMMANDS.DISCARD.id,
            when: 'scmProvider == git && scmResourceGroup == merge'
        });
        registerResourceAction('1_modification', {
            commandId: GIT_COMMANDS.STAGE.id,
            when: 'scmProvider == git && scmResourceGroup == merge'
        });
        var registerResourceGroupAction = function (group, action) {
            menus.registerMenuAction(scm_widget_1.ScmWidget.RESOURCE_GROUP_INLINE_MENU, action);
            menus.registerMenuAction(__spread(scm_widget_1.ScmWidget.RESOURCE_GROUP_CONTEXT_MENU, [group]), action);
        };
        registerResourceGroupAction('1_modification', {
            commandId: GIT_COMMANDS.STAGE_ALL.id,
            when: 'scmProvider == git && scmResourceGroup == merge',
        });
        registerResourceGroupAction('1_modification', {
            commandId: GIT_COMMANDS.UNSTAGE_ALL.id,
            when: 'scmProvider == git && scmResourceGroup == index',
        });
        registerResourceGroupAction('1_modification', {
            commandId: GIT_COMMANDS.STAGE_ALL.id,
            when: 'scmProvider == git && scmResourceGroup == workingTree',
        });
        registerResourceGroupAction('1_modification', {
            commandId: GIT_COMMANDS.DISCARD_ALL.id,
            when: 'scmProvider == git && scmResourceGroup == workingTree',
        });
    };
    GitContribution.prototype.registerCommands = function (registry) {
        var _this = this;
        registry.registerCommand(GIT_COMMANDS.FETCH, {
            execute: function () { return _this.withProgress(function () { return _this.quickOpenService.fetch(); }); },
            isEnabled: function () { return !!_this.repositoryTracker.selectedRepository; }
        });
        registry.registerCommand(GIT_COMMANDS.PULL_DEFAULT, {
            execute: function () { return _this.withProgress(function () { return _this.quickOpenService.performDefaultGitAction(git_quick_open_service_1.GitAction.PULL); }); },
            isEnabled: function () { return !!_this.repositoryTracker.selectedRepository; }
        });
        registry.registerCommand(GIT_COMMANDS.PULL, {
            execute: function () { return _this.withProgress(function () { return _this.quickOpenService.pull(); }); },
            isEnabled: function () { return !!_this.repositoryTracker.selectedRepository; }
        });
        registry.registerCommand(GIT_COMMANDS.PUSH_DEFAULT, {
            execute: function () { return _this.withProgress(function () { return _this.quickOpenService.performDefaultGitAction(git_quick_open_service_1.GitAction.PUSH); }); },
            isEnabled: function () { return !!_this.repositoryTracker.selectedRepository; }
        });
        registry.registerCommand(GIT_COMMANDS.PUSH, {
            execute: function () { return _this.withProgress(function () { return _this.quickOpenService.push(); }); },
            isEnabled: function () { return !!_this.repositoryTracker.selectedRepository; }
        });
        registry.registerCommand(GIT_COMMANDS.MERGE, {
            execute: function () { return _this.withProgress(function () { return _this.quickOpenService.merge(); }); },
            isEnabled: function () { return !!_this.repositoryTracker.selectedRepository; }
        });
        registry.registerCommand(GIT_COMMANDS.CHECKOUT, {
            execute: function () { return _this.withProgress(function () { return _this.quickOpenService.checkout(); }); },
            isEnabled: function () { return !!_this.repositoryTracker.selectedRepository; }
        });
        registry.registerCommand(GIT_COMMANDS.COMMIT_SIGN_OFF, {
            execute: function () { return _this.withProgress(function () { return _this.commit({ signOff: true }); }); },
            isEnabled: function () { return !!_this.repositoryTracker.selectedRepository; }
        });
        registry.registerCommand(GIT_COMMANDS.COMMIT_AMEND, {
            execute: function () { return _this.withProgress(function () { return __awaiter(_this, void 0, void 0, function () {
                var message, e_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 3, , 4]);
                            return [4 /*yield*/, this.quickOpenService.commitMessageForAmend()];
                        case 1:
                            message = _a.sent();
                            return [4 /*yield*/, this.commit({ message: message, amend: true })];
                        case 2:
                            _a.sent();
                            return [3 /*break*/, 4];
                        case 3:
                            e_1 = _a.sent();
                            if (!(e_1 instanceof Error) || e_1.message !== 'User abort.') {
                                throw e_1;
                            }
                            return [3 /*break*/, 4];
                        case 4: return [2 /*return*/];
                    }
                });
            }); }); },
            isEnabled: function () { return !!_this.repositoryTracker.selectedRepository; }
        });
        registry.registerCommand(GIT_COMMANDS.STAGE_ALL, {
            execute: function () {
                var provider = _this.repositoryProvider.selectedScmProvider;
                return provider && _this.withProgress(function () { return provider.stageAll(); });
            },
            isEnabled: function () { return !!_this.repositoryProvider.selectedScmProvider; }
        });
        registry.registerCommand(GIT_COMMANDS.UNSTAGE_ALL, {
            execute: function () {
                var provider = _this.repositoryProvider.selectedScmProvider;
                return provider && _this.withProgress(function () { return provider.unstageAll(); });
            },
            isEnabled: function () { return !!_this.repositoryProvider.selectedScmProvider; }
        });
        registry.registerCommand(GIT_COMMANDS.DISCARD_ALL, {
            execute: function () {
                var provider = _this.repositoryProvider.selectedScmProvider;
                return provider && _this.withProgress(function () { return provider.discardAll(); });
            },
            isEnabled: function () { return !!_this.repositoryProvider.selectedScmProvider; }
        });
        registry.registerCommand(GIT_COMMANDS.OPEN_FILE, {
            execute: function (widget) { return _this.openFile(widget); },
            isEnabled: function (widget) { return !!_this.getOpenFileOptions(widget); },
            isVisible: function (widget) { return !!_this.getOpenFileOptions(widget); }
        });
        registry.registerCommand(GIT_COMMANDS.OPEN_CHANGES, {
            execute: function (widget) { return _this.openChanges(widget); },
            isEnabled: function (widget) { return !!_this.getOpenChangesOptions(widget); },
            isVisible: function (widget) { return !!_this.getOpenChangesOptions(widget); }
        });
        registry.registerCommand(GIT_COMMANDS.SYNC, {
            execute: function () { return _this.withProgress(function () { return _this.syncService.sync(); }); },
            isEnabled: function () { return _this.syncService.canSync(); },
            isVisible: function () { return _this.syncService.canSync(); }
        });
        registry.registerCommand(GIT_COMMANDS.PUBLISH, {
            execute: function () { return _this.withProgress(function () { return _this.syncService.publish(); }); },
            isEnabled: function () { return _this.syncService.canPublish(); },
            isVisible: function () { return _this.syncService.canPublish(); }
        });
        registry.registerCommand(GIT_COMMANDS.CLONE, {
            isEnabled: function () { return _this.workspaceService.opened; },
            execute: function (url, folder, branch) {
                return _this.quickOpenService.clone(url, folder, branch);
            }
        });
        registry.registerCommand(GIT_COMMANDS.COMMIT, {
            execute: function () { return _this.withProgress(function () { return _this.commit(); }); },
            isEnabled: function () { return !!_this.repositoryTracker.selectedRepository; }
        });
        registry.registerCommand(GIT_COMMANDS.REFRESH, {
            execute: function () { return _this.withProgress(function () { return _this.repositoryProvider.refresh(); }); }
        });
        registry.registerCommand(GIT_COMMANDS.COMMIT_ADD_SIGN_OFF, {
            execute: function () { return __awaiter(_this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.withProgress(function () { return _this.addSignOff(); })];
                });
            }); },
            isEnabled: function () { return !!_this.repositoryTracker.selectedRepository; }
        });
        registry.registerCommand(GIT_COMMANDS.UNSTAGE, {
            execute: function (arg) {
                var uri = typeof arg === 'string' ? arg : arg.sourceUri.toString();
                var provider = _this.repositoryProvider.selectedScmProvider;
                return provider && _this.withProgress(function () { return provider.unstage(uri); });
            },
            isEnabled: function () { return !!_this.repositoryProvider.selectedScmProvider; }
        });
        registry.registerCommand(GIT_COMMANDS.STAGE, {
            execute: function (arg) {
                var uri = typeof arg === 'string' ? arg : arg.sourceUri.toString();
                var provider = _this.repositoryProvider.selectedScmProvider;
                return provider && _this.withProgress(function () { return provider.stage(uri); });
            },
            isEnabled: function () { return !!_this.repositoryProvider.selectedScmProvider; }
        });
        registry.registerCommand(GIT_COMMANDS.DISCARD, {
            execute: function (arg) {
                var uri = typeof arg === 'string' ? arg : arg.sourceUri.toString();
                var provider = _this.repositoryProvider.selectedScmProvider;
                return provider && _this.withProgress(function () { return provider.discard(uri); });
            },
            isEnabled: function () { return !!_this.repositoryProvider.selectedScmProvider; }
        });
        registry.registerCommand(GIT_COMMANDS.OPEN_CHANGED_FILE, {
            execute: function (arg) {
                var uri = typeof arg === 'string' ? new uri_1.default(arg) : arg.sourceUri;
                _this.editorManager.open(uri, { mode: 'reveal' });
            }
        });
        registry.registerCommand(GIT_COMMANDS.STASH, {
            execute: function () { return _this.quickOpenService.stash(); },
            isEnabled: function () { return !!_this.repositoryTracker.selectedRepository &&
                !!_this.repositoryTracker.selectedRepositoryStatus &&
                _this.repositoryTracker.selectedRepositoryStatus.changes.length > 0; }
        });
        registry.registerCommand(GIT_COMMANDS.APPLY_STASH, {
            execute: function () { return _this.quickOpenService.applyStash(); },
            isEnabled: function () { return !!_this.repositoryTracker.selectedRepository; }
        });
        registry.registerCommand(GIT_COMMANDS.APPLY_LATEST_STASH, {
            execute: function () { return _this.quickOpenService.applyLatestStash(); },
            isEnabled: function () { return !!_this.repositoryTracker.selectedRepository; }
        });
        registry.registerCommand(GIT_COMMANDS.POP_STASH, {
            execute: function () { return _this.quickOpenService.popStash(); },
            isEnabled: function () { return !!_this.repositoryTracker.selectedRepository; }
        });
        registry.registerCommand(GIT_COMMANDS.POP_LATEST_STASH, {
            execute: function () { return _this.quickOpenService.popLatestStash(); },
            isEnabled: function () { return !!_this.repositoryTracker.selectedRepository; }
        });
        registry.registerCommand(GIT_COMMANDS.DROP_STASH, {
            execute: function () { return _this.quickOpenService.dropStash(); },
            isEnabled: function () { return !!_this.repositoryTracker.selectedRepository; }
        });
        registry.registerCommand(GIT_COMMANDS.INIT_REPOSITORY, {
            execute: function () { return _this.quickOpenService.initRepository(); },
            isEnabled: function (widget) { return (!widget || widget instanceof scm_widget_1.ScmWidget) && !_this.repositoryProvider.selectedRepository; },
            isVisible: function (widget) { return (!widget || widget instanceof scm_widget_1.ScmWidget) && !_this.repositoryProvider.selectedRepository; }
        });
    };
    GitContribution.prototype.withProgress = function (task) {
        return this.progressService.withProgress('', 'scm', task);
    };
    GitContribution.prototype.registerToolbarItems = function (registry) {
        var _this = this;
        registry.registerItem({
            id: GIT_COMMANDS.OPEN_FILE.id,
            command: GIT_COMMANDS.OPEN_FILE.id,
            tooltip: GIT_COMMANDS.OPEN_FILE.label
        });
        registry.registerItem({
            id: GIT_COMMANDS.OPEN_CHANGES.id,
            command: GIT_COMMANDS.OPEN_CHANGES.id,
            tooltip: GIT_COMMANDS.OPEN_CHANGES.label
        });
        registry.registerItem({
            id: GIT_COMMANDS.INIT_REPOSITORY.id,
            command: GIT_COMMANDS.INIT_REPOSITORY.id,
            tooltip: GIT_COMMANDS.INIT_REPOSITORY.label
        });
        var registerItem = function (item) {
            var commandId = item.command;
            var id = '__git.tabbar.toolbar.' + commandId;
            var command = _this.commands.getCommand(commandId);
            _this.commands.registerCommand({ id: id, iconClass: command && command.iconClass }, {
                execute: function (widget) {
                    var _a;
                    var args = [];
                    for (var _i = 1; _i < arguments.length; _i++) {
                        args[_i - 1] = arguments[_i];
                    }
                    return widget instanceof scm_widget_1.ScmWidget && (_a = _this.commands).executeCommand.apply(_a, __spread([commandId], args));
                },
                isEnabled: function (widget) {
                    var _a;
                    var args = [];
                    for (var _i = 1; _i < arguments.length; _i++) {
                        args[_i - 1] = arguments[_i];
                    }
                    return widget instanceof scm_widget_1.ScmWidget && (_a = _this.commands).isEnabled.apply(_a, __spread([commandId], args));
                },
                isVisible: function (widget) {
                    var _a;
                    var args = [];
                    for (var _i = 1; _i < arguments.length; _i++) {
                        args[_i - 1] = arguments[_i];
                    }
                    return widget instanceof scm_widget_1.ScmWidget && (_a = _this.commands).isVisible.apply(_a, __spread([commandId], args)) &&
                        !!_this.repositoryProvider.selectedRepository;
                }
            });
            item.command = id;
            registry.registerItem(item);
        };
        registerItem({
            id: GIT_COMMANDS.COMMIT.id,
            command: GIT_COMMANDS.COMMIT.id,
            tooltip: GIT_COMMANDS.COMMIT.label
        });
        registerItem({
            id: GIT_COMMANDS.REFRESH.id,
            command: GIT_COMMANDS.REFRESH.id,
            tooltip: GIT_COMMANDS.REFRESH.label
        });
        registerItem({
            id: GIT_COMMANDS.COMMIT_ADD_SIGN_OFF.id,
            command: GIT_COMMANDS.COMMIT_ADD_SIGN_OFF.id,
            tooltip: GIT_COMMANDS.COMMIT_ADD_SIGN_OFF.label
        });
        registerItem({
            id: GIT_COMMANDS.COMMIT_AMEND.id,
            command: GIT_COMMANDS.COMMIT_AMEND.id,
            tooltip: 'Commit (Amend)',
            group: '1_input'
        });
        registerItem({
            id: GIT_COMMANDS.COMMIT_SIGN_OFF.id,
            command: GIT_COMMANDS.COMMIT_SIGN_OFF.id,
            tooltip: 'Commit (Signed Off)',
            group: '1_input'
        });
        [GIT_COMMANDS.FETCH, GIT_COMMANDS.PULL_DEFAULT, GIT_COMMANDS.PULL, GIT_COMMANDS.PUSH_DEFAULT, GIT_COMMANDS.PUSH, GIT_COMMANDS.MERGE].forEach(function (command) {
            return registerItem({
                id: command.id,
                command: command.id,
                tooltip: command.label.slice('Git: '.length),
                group: '2_other'
            });
        });
        [GIT_COMMANDS.STASH, GIT_COMMANDS.APPLY_STASH,
            GIT_COMMANDS.APPLY_LATEST_STASH, GIT_COMMANDS.POP_STASH,
            GIT_COMMANDS.POP_LATEST_STASH, GIT_COMMANDS.DROP_STASH].forEach(function (command) {
            return registerItem({
                id: command.id,
                command: command.id,
                tooltip: command.label,
                group: '3_other'
            });
        });
        registerItem({
            id: GIT_COMMANDS.STAGE_ALL.id,
            command: GIT_COMMANDS.STAGE_ALL.id,
            tooltip: 'Stage All Changes',
            group: '3_batch'
        });
        registerItem({
            id: GIT_COMMANDS.UNSTAGE_ALL.id,
            command: GIT_COMMANDS.UNSTAGE_ALL.id,
            tooltip: 'Unstage All Changes',
            group: '3_batch'
        });
        registerItem({
            id: GIT_COMMANDS.DISCARD_ALL.id,
            command: GIT_COMMANDS.DISCARD_ALL.id,
            tooltip: 'Discard All Changes',
            group: '3_batch'
        });
    };
    GitContribution.prototype.hasConflicts = function (changes) {
        return changes.some(function (c) { return c.status === common_1.GitFileStatus.Conflicted; });
    };
    GitContribution.prototype.allStaged = function (changes) {
        return !changes.some(function (c) { return !c.staged; });
    };
    GitContribution.prototype.openFile = function (widget) {
        return __awaiter(this, void 0, void 0, function () {
            var options;
            return __generator(this, function (_a) {
                options = this.getOpenFileOptions(widget);
                return [2 /*return*/, options && this.editorManager.open(options.uri, options.options)];
            });
        });
    };
    GitContribution.prototype.getOpenFileOptions = function (widget) {
        var ref = widget ? widget : this.editorManager.currentEditor;
        if (ref instanceof browser_2.EditorWidget && browser_1.DiffUris.isDiffUri(ref.editor.uri)) {
            var _a = __read(browser_1.DiffUris.decode(ref.editor.uri), 2), right = _a[1];
            var uri = right.withScheme('file');
            var selection = ref.editor.selection;
            return { uri: uri, options: { selection: selection, widgetOptions: { ref: ref } } };
        }
        return undefined;
    };
    GitContribution.prototype.openChanges = function (widget) {
        return __awaiter(this, void 0, void 0, function () {
            var options, provider;
            return __generator(this, function (_a) {
                options = this.getOpenChangesOptions(widget);
                if (options) {
                    provider = this.repositoryProvider.selectedScmProvider;
                    return [2 /*return*/, provider && provider.openChange(options.change, options.options)];
                }
                return [2 /*return*/, undefined];
            });
        });
    };
    GitContribution.prototype.getOpenChangesOptions = function (widget) {
        var provider = this.repositoryProvider.selectedScmProvider;
        if (!provider) {
            return undefined;
        }
        var ref = widget ? widget : this.editorManager.currentEditor;
        if (ref instanceof browser_2.EditorWidget && !browser_1.DiffUris.isDiffUri(ref.editor.uri)) {
            var uri = ref.editor.uri;
            var change = provider.findChange(uri);
            if (change && provider.getUriToOpen(change).toString() !== uri.toString()) {
                var selection = ref.editor.selection;
                return { change: change, options: { selection: selection, widgetOptions: { ref: ref } } };
            }
        }
        return undefined;
    };
    GitContribution.prototype.updateStatusBar = function () {
        var scmProvider = this.repositoryProvider.selectedScmProvider;
        if (!scmProvider) {
            return;
        }
        var statusBarCommands = [];
        var checkoutCommand = this.getCheckoutStatusBarCommand();
        if (checkoutCommand) {
            statusBarCommands.push(checkoutCommand);
        }
        var syncCommand = this.getSyncStatusBarCommand();
        if (syncCommand) {
            statusBarCommands.push(syncCommand);
        }
        scmProvider.statusBarCommands = statusBarCommands;
    };
    GitContribution.prototype.getCheckoutStatusBarCommand = function () {
        var scmProvider = this.repositoryProvider.selectedScmProvider;
        if (!scmProvider) {
            return undefined;
        }
        var status = scmProvider.getStatus();
        if (!status) {
            return undefined;
        }
        var branch = status.branch ? status.branch : status.currentHead ? status.currentHead.substring(0, 8) : 'NO-HEAD';
        var changes = (scmProvider.unstagedChanges.length > 0 ? '*' : '')
            + (scmProvider.stagedChanges.length > 0 ? '+' : '')
            + (scmProvider.mergeChanges.length > 0 ? '!' : '');
        return {
            command: GIT_COMMANDS.CHECKOUT.id,
            title: "$(code-fork) " + branch + changes,
            tooltip: 'Checkout...'
        };
    };
    GitContribution.prototype.getSyncStatusBarCommand = function () {
        var status = this.repositoryTracker.selectedRepositoryStatus;
        if (!status || !status.branch) {
            return undefined;
        }
        if (this.syncService.isSyncing()) {
            return {
                title: '$(refresh~spin)',
                tooltip: 'Synchronizing Changes...'
            };
        }
        var upstreamBranch = status.upstreamBranch, aheadBehind = status.aheadBehind;
        if (upstreamBranch) {
            return {
                title: '$(refresh)' + (aheadBehind && (aheadBehind.ahead + aheadBehind.behind) > 0 ? " " + aheadBehind.behind + "\u2193 " + aheadBehind.ahead + "\u2191" : ''),
                command: GIT_COMMANDS.SYNC.id,
                tooltip: 'Synchronize Changes'
            };
        }
        return {
            title: '$(cloud-upload)',
            command: GIT_COMMANDS.PUBLISH.id,
            tooltip: 'Publish Changes'
        };
    };
    GitContribution.prototype.commit = function (options) {
        if (options === void 0) { options = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var scmRepository, message, amend, signOff, repository, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        scmRepository = this.repositoryProvider.selectedScmRepository;
                        if (!scmRepository) {
                            return [2 /*return*/];
                        }
                        message = options.message || scmRepository.input.value;
                        if (!message.trim()) {
                            scmRepository.input.issue = {
                                type: 'error',
                                message: 'Please provide a commit message'
                            };
                            scmRepository.input.focus();
                            return [2 /*return*/];
                        }
                        if (!scmRepository.provider.stagedChanges.length) {
                            scmRepository.input.issue = {
                                type: 'error',
                                message: 'No changes added to commit'
                            };
                            scmRepository.input.focus();
                            return [2 /*return*/];
                        }
                        scmRepository.input.issue = undefined;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        amend = options.amend;
                        signOff = options.signOff || this.gitPreferences['git.alwaysSignOff'];
                        repository = scmRepository.provider.repository;
                        return [4 /*yield*/, this.git.commit(repository, message, { signOff: signOff, amend: amend })];
                    case 2:
                        _a.sent();
                        scmRepository.input.value = '';
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        this.gitErrorHandler.handleError(error_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    GitContribution.prototype.addSignOff = function () {
        return __awaiter(this, void 0, void 0, function () {
            var scmRepository, repository, _a, username, email, signOff, value, e_2;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        scmRepository = this.repositoryProvider.selectedScmRepository;
                        if (!scmRepository) {
                            return [2 /*return*/];
                        }
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        repository = scmRepository.provider.repository;
                        return [4 /*yield*/, Promise.all([
                                this.git.exec(repository, ['config', 'user.name']),
                                this.git.exec(repository, ['config', 'user.email'])
                            ])];
                    case 2:
                        _a = __read.apply(void 0, [(_b.sent()).map(function (result) { return result.stdout.trim(); }), 2]), username = _a[0], email = _a[1];
                        signOff = "\n\nSigned-off-by: " + username + " <" + email + ">";
                        value = scmRepository.input.value;
                        if (value.endsWith(signOff)) {
                            scmRepository.input.value = value.substr(0, value.length - signOff.length);
                        }
                        else {
                            scmRepository.input.value = "" + value + signOff;
                        }
                        scmRepository.input.focus();
                        return [3 /*break*/, 4];
                    case 3:
                        e_2 = _b.sent();
                        scmRepository.input.issue = {
                            type: 'warning',
                            message: 'Make sure you configure your \'user.name\' and \'user.email\' in git.'
                        };
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    GitContribution.GIT_CHECKOUT = 'git.checkout';
    GitContribution.GIT_SYNC_STATUS = 'git-sync-status';
    __decorate([
        inversify_1.inject(browser_2.EditorManager),
        __metadata("design:type", browser_2.EditorManager)
    ], GitContribution.prototype, "editorManager", void 0);
    __decorate([
        inversify_1.inject(git_quick_open_service_1.GitQuickOpenService),
        __metadata("design:type", git_quick_open_service_1.GitQuickOpenService)
    ], GitContribution.prototype, "quickOpenService", void 0);
    __decorate([
        inversify_1.inject(git_repository_tracker_1.GitRepositoryTracker),
        __metadata("design:type", git_repository_tracker_1.GitRepositoryTracker)
    ], GitContribution.prototype, "repositoryTracker", void 0);
    __decorate([
        inversify_1.inject(git_sync_service_1.GitSyncService),
        __metadata("design:type", git_sync_service_1.GitSyncService)
    ], GitContribution.prototype, "syncService", void 0);
    __decorate([
        inversify_1.inject(browser_3.WorkspaceService),
        __metadata("design:type", browser_3.WorkspaceService)
    ], GitContribution.prototype, "workspaceService", void 0);
    __decorate([
        inversify_1.inject(git_repository_provider_1.GitRepositoryProvider),
        __metadata("design:type", git_repository_provider_1.GitRepositoryProvider)
    ], GitContribution.prototype, "repositoryProvider", void 0);
    __decorate([
        inversify_1.inject(common_1.Git),
        __metadata("design:type", Object)
    ], GitContribution.prototype, "git", void 0);
    __decorate([
        inversify_1.inject(git_error_handler_1.GitErrorHandler),
        __metadata("design:type", git_error_handler_1.GitErrorHandler)
    ], GitContribution.prototype, "gitErrorHandler", void 0);
    __decorate([
        inversify_1.inject(core_1.CommandRegistry),
        __metadata("design:type", core_1.CommandRegistry)
    ], GitContribution.prototype, "commands", void 0);
    __decorate([
        inversify_1.inject(progress_service_1.ProgressService),
        __metadata("design:type", progress_service_1.ProgressService)
    ], GitContribution.prototype, "progressService", void 0);
    __decorate([
        inversify_1.inject(git_preferences_1.GitPreferences),
        __metadata("design:type", Object)
    ], GitContribution.prototype, "gitPreferences", void 0);
    GitContribution = __decorate([
        inversify_1.injectable()
    ], GitContribution);
    return GitContribution;
}());
exports.GitContribution = GitContribution;


/***/ }),

/***/ "./node_modules/@theia/git/lib/browser/git-decorator.js":
/*!**************************************************************!*\
  !*** ./node_modules/@theia/git/lib/browser/git-decorator.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2018 TypeFox and others.
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
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var uri_1 = __webpack_require__(/*! @theia/core/lib/common/uri */ "./node_modules/@theia/core/lib/common/uri.js");
var logger_1 = __webpack_require__(/*! @theia/core/lib/common/logger */ "./node_modules/@theia/core/lib/common/logger.js");
var event_1 = __webpack_require__(/*! @theia/core/lib/common/event */ "./node_modules/@theia/core/lib/common/event.js");
var tree_iterator_1 = __webpack_require__(/*! @theia/core/lib/browser/tree/tree-iterator */ "./node_modules/@theia/core/lib/browser/tree/tree-iterator.js");
var git_1 = __webpack_require__(/*! ../common/git */ "./node_modules/@theia/git/lib/common/git.js");
var git_model_1 = __webpack_require__(/*! ../common/git-model */ "./node_modules/@theia/git/lib/common/git-model.js");
var git_preferences_1 = __webpack_require__(/*! ./git-preferences */ "./node_modules/@theia/git/lib/browser/git-preferences.js");
var git_repository_tracker_1 = __webpack_require__(/*! ./git-repository-tracker */ "./node_modules/@theia/git/lib/browser/git-repository-tracker.js");
var browser_1 = __webpack_require__(/*! @theia/filesystem/lib/browser */ "./node_modules/@theia/filesystem/lib/browser/index.js");
var GitDecorator = /** @class */ (function () {
    function GitDecorator() {
        this.id = 'theia-git-decorator';
        this.emitter = new event_1.Emitter();
    }
    GitDecorator.prototype.init = function () {
        var _this = this;
        this.repositories.onGitEvent(function (event) { return _this.fireDidChangeDecorations(function (tree) { return _this.collectDecorators(tree, event && event.status); }); });
        this.preferences.onPreferenceChanged(function (event) { return _this.handlePreferenceChange(event); });
        this.enabled = this.preferences['git.decorations.enabled'];
        this.showColors = this.preferences['git.decorations.colors'];
    };
    GitDecorator.prototype.decorations = function (tree) {
        return __awaiter(this, void 0, void 0, function () {
            var status;
            return __generator(this, function (_a) {
                status = this.repositories.selectedRepositoryStatus;
                if (status) {
                    return [2 /*return*/, this.collectDecorators(tree, status)];
                }
                return [2 /*return*/, new Map()];
            });
        });
    };
    Object.defineProperty(GitDecorator.prototype, "onDidChangeDecorations", {
        get: function () {
            return this.emitter.event;
        },
        enumerable: true,
        configurable: true
    });
    GitDecorator.prototype.fireDidChangeDecorations = function (event) {
        this.emitter.fire(event);
    };
    GitDecorator.prototype.collectDecorators = function (tree, status) {
        var e_1, _a;
        var _this = this;
        var result = new Map();
        if (tree.root === undefined || !this.enabled) {
            return result;
        }
        var markers = this.appendContainerChanges(tree, status ? status.changes : []);
        try {
            for (var _b = __values(new tree_iterator_1.DepthFirstTreeIterator(tree.root)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var treeNode = _c.value;
                var uri = browser_1.FileStatNode.getUri(treeNode);
                if (uri) {
                    var marker = markers.get(uri);
                    if (marker) {
                        result.set(treeNode.id, marker);
                    }
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return new Map(Array.from(result.entries()).map(function (m) { return [m[0], _this.toDecorator(m[1])]; }));
    };
    GitDecorator.prototype.appendContainerChanges = function (tree, changes) {
        var e_2, _a;
        var result = new Map();
        try {
            // We traverse up and assign the highest Git file change status the container directory.
            // Note, instead of stopping at the WS root, we traverse up the driver root.
            // We will filter them later based on the expansion state of the tree.
            for (var _b = __values(new Map(changes.map(function (m) { return [new uri_1.default(m.uri), m]; })).entries()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var _d = __read(_c.value, 2), uri = _d[0], change = _d[1];
                var uriString = uri.toString();
                result.set(uriString, change);
                var parentUri = uri.parent;
                while (parentUri && !parentUri.path.isRoot) {
                    var parentUriString = parentUri.toString();
                    var existing = result.get(parentUriString);
                    if (existing === undefined || this.compare(existing, change) < 0) {
                        result.set(parentUriString, {
                            uri: parentUriString,
                            status: change.status,
                            staged: !!change.staged
                        });
                        parentUri = parentUri.parent;
                    }
                    else {
                        parentUri = undefined;
                    }
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
        return result;
    };
    GitDecorator.prototype.toDecorator = function (change) {
        var data = git_model_1.GitFileStatus.toAbbreviation(change.status, change.staged);
        var color = git_model_1.GitFileStatus.getColor(change.status, change.staged);
        var tooltip = git_model_1.GitFileStatus.toString(change.status, change.staged);
        var decorationData = {
            tailDecorations: [
                {
                    data: data,
                    fontData: {
                        color: color
                    },
                    tooltip: tooltip
                }
            ]
        };
        if (this.showColors) {
            decorationData = __assign({}, decorationData, { fontData: {
                    color: color
                } });
        }
        return decorationData;
    };
    GitDecorator.prototype.compare = function (left, right) {
        return git_model_1.GitFileStatus.statusCompare(left.status, right.status);
    };
    GitDecorator.prototype.handlePreferenceChange = function (event) {
        return __awaiter(this, void 0, void 0, function () {
            var refresh, preferenceName, newValue, enabled, showColors, status;
            var _this = this;
            return __generator(this, function (_a) {
                refresh = false;
                preferenceName = event.preferenceName, newValue = event.newValue;
                if (preferenceName === 'git.decorations.enabled') {
                    enabled = !!newValue;
                    if (this.enabled !== enabled) {
                        this.enabled = enabled;
                        refresh = true;
                    }
                }
                if (preferenceName === 'git.decorations.colors') {
                    showColors = !!newValue;
                    if (this.showColors !== showColors) {
                        this.showColors = showColors;
                        refresh = true;
                    }
                }
                status = this.repositories.selectedRepositoryStatus;
                if (refresh && status) {
                    this.fireDidChangeDecorations(function (tree) { return _this.collectDecorators(tree, status); });
                }
                return [2 /*return*/];
            });
        });
    };
    __decorate([
        inversify_1.inject(git_1.Git),
        __metadata("design:type", Object)
    ], GitDecorator.prototype, "git", void 0);
    __decorate([
        inversify_1.inject(git_repository_tracker_1.GitRepositoryTracker),
        __metadata("design:type", git_repository_tracker_1.GitRepositoryTracker)
    ], GitDecorator.prototype, "repositories", void 0);
    __decorate([
        inversify_1.inject(git_preferences_1.GitPreferences),
        __metadata("design:type", Object)
    ], GitDecorator.prototype, "preferences", void 0);
    __decorate([
        inversify_1.inject(logger_1.ILogger),
        __metadata("design:type", Object)
    ], GitDecorator.prototype, "logger", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], GitDecorator.prototype, "init", null);
    GitDecorator = __decorate([
        inversify_1.injectable()
    ], GitDecorator);
    return GitDecorator;
}());
exports.GitDecorator = GitDecorator;


/***/ }),

/***/ "./node_modules/@theia/git/lib/browser/git-error-handler.js":
/*!******************************************************************!*\
  !*** ./node_modules/@theia/git/lib/browser/git-error-handler.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2018 TypeFox and others.
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
var core_1 = __webpack_require__(/*! @theia/core */ "./node_modules/@theia/core/lib/common/index.js");
var GitErrorHandler = /** @class */ (function () {
    function GitErrorHandler() {
    }
    // tslint:disable-next-line:no-any
    GitErrorHandler.prototype.handleError = function (error) {
        var message = error instanceof Error ? error.message : error;
        if (message) {
            this.messageService.error(message, { timeout: 0 });
        }
    };
    __decorate([
        inversify_1.inject(core_1.MessageService),
        __metadata("design:type", core_1.MessageService)
    ], GitErrorHandler.prototype, "messageService", void 0);
    GitErrorHandler = __decorate([
        inversify_1.injectable()
    ], GitErrorHandler);
    return GitErrorHandler;
}());
exports.GitErrorHandler = GitErrorHandler;


/***/ }),

/***/ "./node_modules/@theia/git/lib/browser/git-file-change-node.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@theia/git/lib/browser/git-file-change-node.js ***!
  \*********************************************************************/
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
var GitFileChangeNode;
(function (GitFileChangeNode) {
    function is(node) {
        return !!node && 'uri' in node && 'status' in node && 'description' in node && 'label' in node && 'icon' in node;
    }
    GitFileChangeNode.is = is;
})(GitFileChangeNode = exports.GitFileChangeNode || (exports.GitFileChangeNode = {}));


/***/ }),

/***/ "./node_modules/@theia/git/lib/browser/git-frontend-module.js":
/*!********************************************************************!*\
  !*** ./node_modules/@theia/git/lib/browser/git-frontend-module.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2018 TypeFox and others.
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
__webpack_require__(/*! ../../src/browser/style/index.css */ "./node_modules/@theia/git/src/browser/style/index.css");
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var common_1 = __webpack_require__(/*! @theia/core/lib/common */ "./node_modules/@theia/core/lib/common/index.js");
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "./node_modules/@theia/core/lib/browser/index.js");
var tab_bar_toolbar_1 = __webpack_require__(/*! @theia/core/lib/browser/shell/tab-bar-toolbar */ "./node_modules/@theia/core/lib/browser/shell/tab-bar-toolbar.js");
var browser_2 = __webpack_require__(/*! @theia/navigator/lib/browser */ "./node_modules/@theia/navigator/lib/browser/index.js");
var common_2 = __webpack_require__(/*! ../common */ "./node_modules/@theia/git/lib/common/index.js");
var git_contribution_1 = __webpack_require__(/*! ./git-contribution */ "./node_modules/@theia/git/lib/browser/git-contribution.js");
var git_diff_frontend_module_1 = __webpack_require__(/*! ./diff/git-diff-frontend-module */ "./node_modules/@theia/git/lib/browser/diff/git-diff-frontend-module.js");
var git_history_frontend_module_1 = __webpack_require__(/*! ./history/git-history-frontend-module */ "./node_modules/@theia/git/lib/browser/history/git-history-frontend-module.js");
var git_resource_resolver_1 = __webpack_require__(/*! ./git-resource-resolver */ "./node_modules/@theia/git/lib/browser/git-resource-resolver.js");
var git_repository_provider_1 = __webpack_require__(/*! ./git-repository-provider */ "./node_modules/@theia/git/lib/browser/git-repository-provider.js");
var git_quick_open_service_1 = __webpack_require__(/*! ./git-quick-open-service */ "./node_modules/@theia/git/lib/browser/git-quick-open-service.js");
var git_uri_label_contribution_1 = __webpack_require__(/*! ./git-uri-label-contribution */ "./node_modules/@theia/git/lib/browser/git-uri-label-contribution.js");
var git_decorator_1 = __webpack_require__(/*! ./git-decorator */ "./node_modules/@theia/git/lib/browser/git-decorator.js");
var git_preferences_1 = __webpack_require__(/*! ./git-preferences */ "./node_modules/@theia/git/lib/browser/git-preferences.js");
var dirty_diff_module_1 = __webpack_require__(/*! ./dirty-diff/dirty-diff-module */ "./node_modules/@theia/git/lib/browser/dirty-diff/dirty-diff-module.js");
var blame_module_1 = __webpack_require__(/*! ./blame/blame-module */ "./node_modules/@theia/git/lib/browser/blame/blame-module.js");
var git_repository_tracker_1 = __webpack_require__(/*! ./git-repository-tracker */ "./node_modules/@theia/git/lib/browser/git-repository-tracker.js");
var git_commit_message_validator_1 = __webpack_require__(/*! ./git-commit-message-validator */ "./node_modules/@theia/git/lib/browser/git-commit-message-validator.js");
var git_sync_service_1 = __webpack_require__(/*! ./git-sync-service */ "./node_modules/@theia/git/lib/browser/git-sync-service.js");
var git_error_handler_1 = __webpack_require__(/*! ./git-error-handler */ "./node_modules/@theia/git/lib/browser/git-error-handler.js");
var git_scm_provider_1 = __webpack_require__(/*! ./git-scm-provider */ "./node_modules/@theia/git/lib/browser/git-scm-provider.js");
exports.default = new inversify_1.ContainerModule(function (bind) {
    git_preferences_1.bindGitPreferences(bind);
    git_diff_frontend_module_1.bindGitDiffModule(bind);
    git_history_frontend_module_1.bindGitHistoryModule(bind);
    dirty_diff_module_1.bindDirtyDiff(bind);
    blame_module_1.bindBlame(bind);
    bind(git_repository_tracker_1.GitRepositoryTracker).toSelf().inSingletonScope();
    bind(common_2.GitWatcherServerProxy).toDynamicValue(function (context) { return browser_1.WebSocketConnectionProvider.createProxy(context.container, common_2.GitWatcherPath); }).inSingletonScope();
    bind(common_2.GitWatcherServer).to(common_2.ReconnectingGitWatcherServer).inSingletonScope();
    bind(common_2.GitWatcher).toSelf().inSingletonScope();
    bind(common_2.Git).toDynamicValue(function (context) { return browser_1.WebSocketConnectionProvider.createProxy(context.container, common_2.GitPath); }).inSingletonScope();
    bind(git_contribution_1.GitContribution).toSelf().inSingletonScope();
    bind(common_1.CommandContribution).toService(git_contribution_1.GitContribution);
    bind(common_1.MenuContribution).toService(git_contribution_1.GitContribution);
    bind(browser_1.FrontendApplicationContribution).toService(git_contribution_1.GitContribution);
    bind(tab_bar_toolbar_1.TabBarToolbarContribution).toService(git_contribution_1.GitContribution);
    bind(git_resource_resolver_1.GitResourceResolver).toSelf().inSingletonScope();
    bind(common_1.ResourceResolver).toService(git_resource_resolver_1.GitResourceResolver);
    bind(git_scm_provider_1.GitScmProvider.Factory).toFactory(git_scm_provider_1.GitScmProvider.createFactory);
    bind(git_repository_provider_1.GitRepositoryProvider).toSelf().inSingletonScope();
    bind(git_quick_open_service_1.GitQuickOpenService).toSelf().inSingletonScope();
    bind(browser_1.LabelProviderContribution).to(git_uri_label_contribution_1.GitUriLabelProviderContribution).inSingletonScope();
    bind(browser_2.NavigatorTreeDecorator).to(git_decorator_1.GitDecorator).inSingletonScope();
    bind(git_commit_message_validator_1.GitCommitMessageValidator).toSelf().inSingletonScope();
    bind(git_sync_service_1.GitSyncService).toSelf().inSingletonScope();
    bind(git_error_handler_1.GitErrorHandler).toSelf().inSingletonScope();
});


/***/ }),

/***/ "./node_modules/@theia/git/lib/browser/git-navigable-list-widget.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@theia/git/lib/browser/git-navigable-list-widget.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2018 TypeFox and others.
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
Object.defineProperty(exports, "__esModule", { value: true });
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "./node_modules/@theia/core/lib/browser/index.js");
var common_1 = __webpack_require__(/*! ../common */ "./node_modules/@theia/git/lib/common/index.js");
var uri_1 = __webpack_require__(/*! @theia/core/lib/common/uri */ "./node_modules/@theia/core/lib/common/uri.js");
var git_repository_provider_1 = __webpack_require__(/*! ./git-repository-provider */ "./node_modules/@theia/git/lib/browser/git-repository-provider.js");
var label_provider_1 = __webpack_require__(/*! @theia/core/lib/browser/label-provider */ "./node_modules/@theia/core/lib/browser/label-provider.js");
var domutils_1 = __webpack_require__(/*! @phosphor/domutils */ "./node_modules/@phosphor/domutils/lib/index.js");
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var react_widget_1 = __webpack_require__(/*! @theia/core/lib/browser/widgets/react-widget */ "./node_modules/@theia/core/lib/browser/widgets/react-widget.js");
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var GitNavigableListWidget = /** @class */ (function (_super) {
    __extends(GitNavigableListWidget, _super);
    function GitNavigableListWidget() {
        var _this = _super.call(this) || this;
        _this.node.tabIndex = 0;
        return _this;
    }
    GitNavigableListWidget.prototype.onActivateRequest = function (msg) {
        _super.prototype.onActivateRequest.call(this, msg);
        this.update();
        this.node.focus();
    };
    Object.defineProperty(GitNavigableListWidget.prototype, "scrollContainer", {
        get: function () {
            return this._scrollContainer;
        },
        set: function (id) {
            this._scrollContainer = id + Date.now();
        },
        enumerable: true,
        configurable: true
    });
    GitNavigableListWidget.prototype.onUpdateRequest = function (msg) {
        var _this = this;
        if (!this.isAttached || !this.isVisible) {
            return;
        }
        _super.prototype.onUpdateRequest.call(this, msg);
        (function () { return __awaiter(_this, void 0, void 0, function () {
            var selected, container;
            return __generator(this, function (_a) {
                selected = this.node.getElementsByClassName(browser_1.SELECTED_CLASS)[0];
                if (selected) {
                    container = document.getElementById(this.scrollContainer);
                    if (container) {
                        domutils_1.ElementExt.scrollIntoViewIfNeeded(container, selected);
                    }
                }
                return [2 /*return*/];
            });
        }); })();
    };
    GitNavigableListWidget.prototype.onResize = function (msg) {
        _super.prototype.onResize.call(this, msg);
        this.update();
    };
    GitNavigableListWidget.prototype.getStatusCaption = function (status, staged) {
        return common_1.GitFileStatus.toString(status, staged);
    };
    GitNavigableListWidget.prototype.getAbbreviatedStatusCaption = function (status, staged) {
        return common_1.GitFileStatus.toAbbreviation(status, staged);
    };
    GitNavigableListWidget.prototype.relativePath = function (uri) {
        var parsedUri = typeof uri === 'string' ? new uri_1.default(uri) : uri;
        var repo = this.repositoryProvider.findRepository(parsedUri);
        var relativePath = repo && common_1.Repository.relativePath(repo, parsedUri);
        if (relativePath) {
            return relativePath.toString();
        }
        return this.labelProvider.getLongName(parsedUri);
    };
    GitNavigableListWidget.prototype.getRepositoryLabel = function (uri) {
        var repository = this.repositoryProvider.findRepository(new uri_1.default(uri));
        var isSelectedRepo = this.repositoryProvider.selectedRepository && repository && this.repositoryProvider.selectedRepository.localUri === repository.localUri;
        return repository && !isSelectedRepo ? this.labelProvider.getLongName(new uri_1.default(repository.localUri)) : undefined;
    };
    GitNavigableListWidget.prototype.computeCaption = function (fileChange) {
        var result = this.relativePath(fileChange.uri) + " - " + this.getStatusCaption(fileChange.status, true);
        if (fileChange.oldUri) {
            result = this.relativePath(fileChange.oldUri) + " -> " + result;
        }
        return result;
    };
    GitNavigableListWidget.prototype.renderHeaderRow = function (_a) {
        var name = _a.name, value = _a.value, classNames = _a.classNames, title = _a.title;
        if (!value) {
            return;
        }
        var className = __spread(['header-row'], (classNames || [])).join(' ');
        return React.createElement("div", { key: name, className: className, title: title },
            React.createElement("div", { className: 'theia-header' }, name),
            React.createElement("div", { className: 'header-value' }, value));
    };
    GitNavigableListWidget.prototype.addGitListNavigationKeyListeners = function (container) {
        var _this = this;
        this.addKeyListener(container, browser_1.Key.ARROW_LEFT, function () { return _this.navigateLeft(); });
        this.addKeyListener(container, browser_1.Key.ARROW_RIGHT, function () { return _this.navigateRight(); });
        this.addKeyListener(container, browser_1.Key.ARROW_UP, function () { return _this.navigateUp(); });
        this.addKeyListener(container, browser_1.Key.ARROW_DOWN, function () { return _this.navigateDown(); });
        this.addKeyListener(container, browser_1.Key.ENTER, function () { return _this.handleListEnter(); });
    };
    GitNavigableListWidget.prototype.navigateLeft = function () {
        this.selectPreviousNode();
    };
    GitNavigableListWidget.prototype.navigateRight = function () {
        this.selectNextNode();
    };
    GitNavigableListWidget.prototype.navigateUp = function () {
        this.selectPreviousNode();
    };
    GitNavigableListWidget.prototype.navigateDown = function () {
        this.selectNextNode();
    };
    GitNavigableListWidget.prototype.handleListEnter = function () {
    };
    GitNavigableListWidget.prototype.getSelected = function () {
        return this.gitNodes ? this.gitNodes.find(function (c) { return c.selected || false; }) : undefined;
    };
    GitNavigableListWidget.prototype.selectNode = function (node) {
        var n = this.getSelected();
        if (n) {
            n.selected = false;
        }
        node.selected = true;
        this.update();
    };
    GitNavigableListWidget.prototype.selectNextNode = function () {
        var idx = this.indexOfSelected;
        if (idx >= 0 && idx < this.gitNodes.length - 1) {
            this.selectNode(this.gitNodes[idx + 1]);
        }
        else if (this.gitNodes.length > 0 && idx === -1) {
            this.selectNode(this.gitNodes[0]);
        }
    };
    GitNavigableListWidget.prototype.selectPreviousNode = function () {
        var idx = this.indexOfSelected;
        if (idx > 0) {
            this.selectNode(this.gitNodes[idx - 1]);
        }
    };
    Object.defineProperty(GitNavigableListWidget.prototype, "indexOfSelected", {
        get: function () {
            if (this.gitNodes && this.gitNodes.length > 0) {
                return this.gitNodes.findIndex(function (c) { return c.selected || false; });
            }
            return -1;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        inversify_1.inject(git_repository_provider_1.GitRepositoryProvider),
        __metadata("design:type", git_repository_provider_1.GitRepositoryProvider)
    ], GitNavigableListWidget.prototype, "repositoryProvider", void 0);
    __decorate([
        inversify_1.inject(label_provider_1.LabelProvider),
        __metadata("design:type", label_provider_1.LabelProvider)
    ], GitNavigableListWidget.prototype, "labelProvider", void 0);
    GitNavigableListWidget = __decorate([
        inversify_1.injectable(),
        __metadata("design:paramtypes", [])
    ], GitNavigableListWidget);
    return GitNavigableListWidget;
}(react_widget_1.ReactWidget));
exports.GitNavigableListWidget = GitNavigableListWidget;


/***/ }),

/***/ "./node_modules/@theia/git/lib/browser/git-preferences.js":
/*!****************************************************************!*\
  !*** ./node_modules/@theia/git/lib/browser/git-preferences.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2018 TypeFox and others.
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
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "./node_modules/@theia/core/lib/browser/index.js");
exports.GitConfigSchema = {
    'type': 'object',
    'properties': {
        'git.decorations.enabled': {
            'type': 'boolean',
            'description': 'Show Git file status in the navigator.',
            'default': true
        },
        'git.decorations.colors': {
            'type': 'boolean',
            'description': 'Use color decoration in the navigator.',
            'default': false
        },
        'git.editor.decorations.enabled': {
            'type': 'boolean',
            'description': 'Show git decorations in the editor.',
            'default': true
        },
        'git.editor.dirtyDiff.linesLimit': {
            'type': 'number',
            'description': 'Do not show dirty diff decorations, if editor\'s line count exceeds this limit.',
            'default': 1000
        },
        'git.alwaysSignOff': {
            'type': 'boolean',
            'description': 'Always sign off commits.',
            'default': false
        }
    }
};
exports.GitPreferences = Symbol('GitPreferences');
function createGitPreferences(preferences) {
    return browser_1.createPreferenceProxy(preferences, exports.GitConfigSchema);
}
exports.createGitPreferences = createGitPreferences;
function bindGitPreferences(bind) {
    bind(exports.GitPreferences).toDynamicValue(function (ctx) {
        var preferences = ctx.container.get(browser_1.PreferenceService);
        return createGitPreferences(preferences);
    });
    bind(browser_1.PreferenceContribution).toConstantValue({ schema: exports.GitConfigSchema });
}
exports.bindGitPreferences = bindGitPreferences;


/***/ }),

/***/ "./node_modules/@theia/git/lib/browser/git-quick-open-service.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@theia/git/lib/browser/git-quick-open-service.js ***!
  \***********************************************************************/
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
var quick_open_model_1 = __webpack_require__(/*! @theia/core/lib/common/quick-open-model */ "./node_modules/@theia/core/lib/common/quick-open-model.js");
var quick_open_service_1 = __webpack_require__(/*! @theia/core/lib/browser/quick-open/quick-open-service */ "./node_modules/@theia/core/lib/browser/quick-open/quick-open-service.js");
var common_1 = __webpack_require__(/*! ../common */ "./node_modules/@theia/git/lib/common/index.js");
var git_repository_provider_1 = __webpack_require__(/*! ./git-repository-provider */ "./node_modules/@theia/git/lib/browser/git-repository-provider.js");
var message_service_1 = __webpack_require__(/*! @theia/core/lib/common/message-service */ "./node_modules/@theia/core/lib/common/message-service.js");
var workspace_service_1 = __webpack_require__(/*! @theia/workspace/lib/browser/workspace-service */ "./node_modules/@theia/workspace/lib/browser/workspace-service.js");
var common_2 = __webpack_require__(/*! @theia/filesystem/lib/common */ "./node_modules/@theia/filesystem/lib/common/index.js");
var git_error_handler_1 = __webpack_require__(/*! ./git-error-handler */ "./node_modules/@theia/git/lib/browser/git-error-handler.js");
var progress_service_1 = __webpack_require__(/*! @theia/core/lib/common/progress-service */ "./node_modules/@theia/core/lib/common/progress-service.js");
var uri_1 = __webpack_require__(/*! @theia/core/lib/common/uri */ "./node_modules/@theia/core/lib/common/uri.js");
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "./node_modules/@theia/core/lib/browser/index.js");
var GitAction;
(function (GitAction) {
    GitAction[GitAction["PULL"] = 0] = "PULL";
    GitAction[GitAction["PUSH"] = 1] = "PUSH";
})(GitAction = exports.GitAction || (exports.GitAction = {}));
/**
 * Service delegating into the `Quick Open Service`, so that the Git commands can be further refined.
 * For instance, the `remote` can be specified for `pull`, `push`, and `fetch`. And the branch can be
 * specified for `git merge`.
 */
var GitQuickOpenService = /** @class */ (function () {
    function GitQuickOpenService(git, repositoryProvider, quickOpenService, messageService, workspaceService, fileSystem) {
        var _this = this;
        this.git = git;
        this.repositoryProvider = repositoryProvider;
        this.quickOpenService = quickOpenService;
        this.messageService = messageService;
        this.workspaceService = workspaceService;
        this.fileSystem = fileSystem;
        this.buildDefaultProjectPath = this.doBuildDefaultProjectPath.bind(this);
        this.wrapWithProgress = function (fn) { return _this.doWrapWithProgress(fn); };
    }
    GitQuickOpenService.prototype.clone = function (url, folder, branch) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, this.withProgress(function () { return __awaiter(_this, void 0, void 0, function () {
                        var roots, repo, _a, _b, _c, _d, gitCloneLocalTargetFolder, _e, git, buildDefaultProjectPath, gitErrorHandler, wrapWithProgress, cloneRepoModel;
                        return __generator(this, function (_f) {
                            switch (_f.label) {
                                case 0:
                                    if (!!folder) return [3 /*break*/, 2];
                                    return [4 /*yield*/, this.workspaceService.roots];
                                case 1:
                                    roots = _f.sent();
                                    folder = roots[0].uri;
                                    _f.label = 2;
                                case 2:
                                    if (!url) return [3 /*break*/, 5];
                                    _b = (_a = this.git).clone;
                                    _c = [url];
                                    _d = {};
                                    return [4 /*yield*/, this.buildDefaultProjectPath(folder, url)];
                                case 3: return [4 /*yield*/, _b.apply(_a, _c.concat([(_d.localUri = _f.sent(),
                                            _d.branch = branch,
                                            _d)]))];
                                case 4:
                                    repo = _f.sent();
                                    return [2 /*return*/, repo.localUri];
                                case 5:
                                    gitCloneLocalTargetFolder = folder;
                                    _e = this, git = _e.git, buildDefaultProjectPath = _e.buildDefaultProjectPath, gitErrorHandler = _e.gitErrorHandler, wrapWithProgress = _e.wrapWithProgress;
                                    cloneRepoModel = {
                                        onType: function (lookFor, acceptor) {
                                            var _this = this;
                                            var dynamicItems = [];
                                            var suffix = "Press 'Enter' to confirm or 'Escape' to cancel.";
                                            if (lookFor === undefined || lookFor.length === 0) {
                                                dynamicItems.push(new SingleStringInputOpenItem("Please provide a Git repository location. " + suffix, function () { }, function () { return false; }));
                                            }
                                            else {
                                                dynamicItems.push(new SingleStringInputOpenItem("Clone the Git repository: " + lookFor + ". " + suffix, wrapWithProgress(function () { return __awaiter(_this, void 0, void 0, function () {
                                                    var _a, _b, _c, _d, error_1;
                                                    return __generator(this, function (_e) {
                                                        switch (_e.label) {
                                                            case 0:
                                                                _e.trys.push([0, 3, , 4]);
                                                                _b = (_a = git).clone;
                                                                _c = [lookFor];
                                                                _d = {};
                                                                return [4 /*yield*/, buildDefaultProjectPath(gitCloneLocalTargetFolder, lookFor)];
                                                            case 1: return [4 /*yield*/, _b.apply(_a, _c.concat([(_d.localUri = _e.sent(), _d)]))];
                                                            case 2:
                                                                _e.sent();
                                                                return [3 /*break*/, 4];
                                                            case 3:
                                                                error_1 = _e.sent();
                                                                gitErrorHandler.handleError(error_1);
                                                                return [3 /*break*/, 4];
                                                            case 4: return [2 /*return*/];
                                                        }
                                                    });
                                                }); })));
                                            }
                                            acceptor(dynamicItems);
                                        }
                                    };
                                    this.quickOpenService.open(cloneRepoModel, this.getOptions('Git repository location:', false));
                                    return [2 /*return*/];
                            }
                        });
                    }); })];
            });
        });
    };
    GitQuickOpenService.prototype.doBuildDefaultProjectPath = function (folderPath, gitURI) {
        return __awaiter(this, void 0, void 0, function () {
            var uriSplitted, projectPath;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.fileSystem.exists(folderPath)];
                    case 1:
                        if (!(_a.sent())) {
                            // user specifies its own project path, doesn't want us to guess it
                            return [2 /*return*/, folderPath];
                        }
                        uriSplitted = gitURI.split('/');
                        projectPath = folderPath + '/' + (uriSplitted.pop() || uriSplitted.pop());
                        if (projectPath.endsWith('.git')) {
                            projectPath = projectPath.substring(0, projectPath.length - '.git'.length);
                        }
                        return [2 /*return*/, projectPath];
                }
            });
        });
    };
    GitQuickOpenService.prototype.fetch = function () {
        return __awaiter(this, void 0, void 0, function () {
            var repository;
            var _this = this;
            return __generator(this, function (_a) {
                repository = this.getRepository();
                if (!repository) {
                    return [2 /*return*/];
                }
                return [2 /*return*/, this.withProgress(function () { return __awaiter(_this, void 0, void 0, function () {
                        var remotes, execute, items;
                        var _this = this;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, this.getRemotes()];
                                case 1:
                                    remotes = _a.sent();
                                    execute = function (item) { return __awaiter(_this, void 0, void 0, function () {
                                        var error_2;
                                        return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0:
                                                    _a.trys.push([0, 2, , 3]);
                                                    return [4 /*yield*/, this.git.fetch(repository, { remote: item.getLabel() })];
                                                case 1:
                                                    _a.sent();
                                                    return [3 /*break*/, 3];
                                                case 2:
                                                    error_2 = _a.sent();
                                                    this.gitErrorHandler.handleError(error_2);
                                                    return [3 /*break*/, 3];
                                                case 3: return [2 /*return*/];
                                            }
                                        });
                                    }); };
                                    items = remotes.map(function (remote) {
                                        var toLabel = function () { return remote.name; };
                                        var toDescription = function () { return remote.fetch; };
                                        return new GitQuickOpenItem(remote.name, _this.wrapWithProgress(execute), toLabel, toDescription);
                                    });
                                    this.open(items, 'Pick a remote to fetch from:');
                                    return [2 /*return*/];
                            }
                        });
                    }); })];
            });
        });
    };
    GitQuickOpenService.prototype.performDefaultGitAction = function (action) {
        return __awaiter(this, void 0, void 0, function () {
            var remote, defaultRemote, repository;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getRemotes()];
                    case 1:
                        remote = _a.sent();
                        defaultRemote = remote[0].name;
                        repository = this.getRepository();
                        if (!repository) {
                            return [2 /*return*/];
                        }
                        return [2 /*return*/, this.withProgress(function () { return __awaiter(_this, void 0, void 0, function () {
                                var error_3;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            _a.trys.push([0, 5, , 6]);
                                            if (!(action === GitAction.PULL)) return [3 /*break*/, 2];
                                            return [4 /*yield*/, this.git.pull(repository, { remote: defaultRemote })];
                                        case 1:
                                            _a.sent();
                                            console.log("Git Pull: successfully completed from " + defaultRemote + ".");
                                            return [3 /*break*/, 4];
                                        case 2:
                                            if (!(action === GitAction.PUSH)) return [3 /*break*/, 4];
                                            return [4 /*yield*/, this.git.push(repository, { remote: defaultRemote })];
                                        case 3:
                                            _a.sent();
                                            console.log("Git Push: successfully completed to " + defaultRemote + ".");
                                            _a.label = 4;
                                        case 4: return [3 /*break*/, 6];
                                        case 5:
                                            error_3 = _a.sent();
                                            this.gitErrorHandler.handleError(error_3);
                                            return [3 /*break*/, 6];
                                        case 6: return [2 /*return*/];
                                    }
                                });
                            }); })];
                }
            });
        });
    };
    GitQuickOpenService.prototype.push = function () {
        return __awaiter(this, void 0, void 0, function () {
            var repository;
            var _this = this;
            return __generator(this, function (_a) {
                repository = this.getRepository();
                if (!repository) {
                    return [2 /*return*/];
                }
                return [2 /*return*/, this.withProgress(function () { return __awaiter(_this, void 0, void 0, function () {
                        var _a, remotes, currentBranch, execute, items, branchName;
                        var _this = this;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0: return [4 /*yield*/, Promise.all([this.getRemotes(), this.getCurrentBranch()])];
                                case 1:
                                    _a = __read.apply(void 0, [_b.sent(), 2]), remotes = _a[0], currentBranch = _a[1];
                                    execute = function (item) { return __awaiter(_this, void 0, void 0, function () {
                                        var error_4;
                                        return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0:
                                                    _a.trys.push([0, 2, , 3]);
                                                    return [4 /*yield*/, this.git.push(repository, { remote: item.getLabel() })];
                                                case 1:
                                                    _a.sent();
                                                    return [3 /*break*/, 3];
                                                case 2:
                                                    error_4 = _a.sent();
                                                    this.gitErrorHandler.handleError(error_4);
                                                    return [3 /*break*/, 3];
                                                case 3: return [2 /*return*/];
                                            }
                                        });
                                    }); };
                                    items = remotes.map(function (remote) {
                                        var toLabel = function () { return remote.name; };
                                        var toDescription = function () { return remote.push; };
                                        return new GitQuickOpenItem(remote.name, _this.wrapWithProgress(execute), toLabel, toDescription);
                                    });
                                    branchName = currentBranch ? "'" + currentBranch.name + "' " : '';
                                    this.open(items, "Pick a remote to push the currently active branch " + branchName + "to:");
                                    return [2 /*return*/];
                            }
                        });
                    }); })];
            });
        });
    };
    GitQuickOpenService.prototype.pull = function () {
        return __awaiter(this, void 0, void 0, function () {
            var repository;
            var _this = this;
            return __generator(this, function (_a) {
                repository = this.getRepository();
                if (!repository) {
                    return [2 /*return*/];
                }
                return [2 /*return*/, this.withProgress(function () { return __awaiter(_this, void 0, void 0, function () {
                        var remotes, defaultRemote, executeRemote, remoteItems;
                        var _this = this;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, this.getRemotes()];
                                case 1:
                                    remotes = _a.sent();
                                    defaultRemote = remotes[0].name;
                                    executeRemote = function (remoteItem) { return __awaiter(_this, void 0, void 0, function () {
                                        var error_5, branches, executeBranch_1, toLabel_1, branchItems;
                                        var _this = this;
                                        return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0:
                                                    if (!(remoteItem.ref.name === defaultRemote)) return [3 /*break*/, 5];
                                                    _a.label = 1;
                                                case 1:
                                                    _a.trys.push([1, 3, , 4]);
                                                    return [4 /*yield*/, this.git.pull(repository, { remote: remoteItem.getLabel() })];
                                                case 2:
                                                    _a.sent();
                                                    return [3 /*break*/, 4];
                                                case 3:
                                                    error_5 = _a.sent();
                                                    this.gitErrorHandler.handleError(error_5);
                                                    return [3 /*break*/, 4];
                                                case 4: return [3 /*break*/, 7];
                                                case 5: return [4 /*yield*/, this.getBranches()];
                                                case 6:
                                                    branches = _a.sent();
                                                    executeBranch_1 = function (branchItem) { return __awaiter(_this, void 0, void 0, function () {
                                                        var error_6;
                                                        return __generator(this, function (_a) {
                                                            switch (_a.label) {
                                                                case 0:
                                                                    _a.trys.push([0, 2, , 3]);
                                                                    return [4 /*yield*/, this.git.pull(repository, { remote: remoteItem.ref.name, branch: branchItem.ref.nameWithoutRemote })];
                                                                case 1:
                                                                    _a.sent();
                                                                    return [3 /*break*/, 3];
                                                                case 2:
                                                                    error_6 = _a.sent();
                                                                    this.gitErrorHandler.handleError(error_6);
                                                                    return [3 /*break*/, 3];
                                                                case 3: return [2 /*return*/];
                                                            }
                                                        });
                                                    }); };
                                                    toLabel_1 = function (branchItem) { return branchItem.ref.name; };
                                                    branchItems = branches
                                                        .filter(function (branch) { return branch.type === common_1.BranchType.Remote; })
                                                        .filter(function (branch) { return (branch.name || '').startsWith(remoteItem.ref + "/"); })
                                                        .map(function (branch) { return new GitQuickOpenItem(branch, _this.wrapWithProgress(executeBranch_1), toLabel_1); });
                                                    this.open(branchItems, 'Select the branch to pull the changes from:');
                                                    _a.label = 7;
                                                case 7: return [2 /*return*/];
                                            }
                                        });
                                    }); };
                                    remoteItems = remotes.map(function (remote) {
                                        var toLabel = function () { return remote.name; };
                                        var toDescription = function () { return remote.fetch; };
                                        return new GitQuickOpenItem(remote, _this.wrapWithProgress(executeRemote), toLabel, toDescription);
                                    });
                                    this.open(remoteItems, 'Pick a remote to pull the branch from:');
                                    return [2 /*return*/];
                            }
                        });
                    }); })];
            });
        });
    };
    GitQuickOpenService.prototype.merge = function () {
        return __awaiter(this, void 0, void 0, function () {
            var repository;
            var _this = this;
            return __generator(this, function (_a) {
                repository = this.getRepository();
                if (!repository) {
                    return [2 /*return*/];
                }
                return [2 /*return*/, this.withProgress(function () { return __awaiter(_this, void 0, void 0, function () {
                        var _a, branches, currentBranch, execute, toLabel, items, branchName;
                        var _this = this;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0: return [4 /*yield*/, Promise.all([this.getBranches(), this.getCurrentBranch()])];
                                case 1:
                                    _a = __read.apply(void 0, [_b.sent(), 2]), branches = _a[0], currentBranch = _a[1];
                                    execute = function (item) { return __awaiter(_this, void 0, void 0, function () {
                                        var error_7;
                                        return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0:
                                                    _a.trys.push([0, 2, , 3]);
                                                    return [4 /*yield*/, this.git.merge(repository, { branch: item.getLabel() })];
                                                case 1:
                                                    _a.sent();
                                                    return [3 /*break*/, 3];
                                                case 2:
                                                    error_7 = _a.sent();
                                                    this.gitErrorHandler.handleError(error_7);
                                                    return [3 /*break*/, 3];
                                                case 3: return [2 /*return*/];
                                            }
                                        });
                                    }); };
                                    toLabel = function (item) { return item.ref.name; };
                                    items = branches.map(function (branch) { return new GitQuickOpenItem(branch, _this.wrapWithProgress(execute), toLabel); });
                                    branchName = currentBranch ? "'" + currentBranch.name + "' " : '';
                                    this.open(items, "Pick a branch to merge into the currently active " + branchName + "branch:");
                                    return [2 /*return*/];
                            }
                        });
                    }); })];
            });
        });
    };
    GitQuickOpenService.prototype.checkout = function () {
        return __awaiter(this, void 0, void 0, function () {
            var repository;
            var _this = this;
            return __generator(this, function (_a) {
                repository = this.getRepository();
                if (!repository) {
                    return [2 /*return*/];
                }
                return [2 /*return*/, this.withProgress(function () { return __awaiter(_this, void 0, void 0, function () {
                        var _a, branches, currentBranch, index, switchBranch, toLabel, toDescription, items, createBranchItem;
                        var _this = this;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0: return [4 /*yield*/, Promise.all([this.getBranches(), this.getCurrentBranch()])];
                                case 1:
                                    _a = __read.apply(void 0, [_b.sent(), 2]), branches = _a[0], currentBranch = _a[1];
                                    if (currentBranch) {
                                        index = branches.findIndex(function (branch) { return branch && branch.name === currentBranch.name; });
                                        branches.splice(index, 1);
                                    }
                                    switchBranch = function (item) { return __awaiter(_this, void 0, void 0, function () {
                                        var error_8;
                                        return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0:
                                                    _a.trys.push([0, 2, , 3]);
                                                    return [4 /*yield*/, this.git.checkout(repository, { branch: item.ref.nameWithoutRemote })];
                                                case 1:
                                                    _a.sent();
                                                    return [3 /*break*/, 3];
                                                case 2:
                                                    error_8 = _a.sent();
                                                    this.gitErrorHandler.handleError(error_8);
                                                    return [3 /*break*/, 3];
                                                case 3: return [2 /*return*/];
                                            }
                                        });
                                    }); };
                                    toLabel = function (item) {
                                        var branch = item.ref;
                                        return branch.type === common_1.BranchType.Remote ? branch.name : branch.nameWithoutRemote;
                                    };
                                    toDescription = function (item) {
                                        var branch = item.ref;
                                        // We have only the long SHA1, but getting the first seven characters is the same.
                                        var tip = branch.tip.sha.length > 8 ? " " + branch.tip.sha.slice(0, 7) : '';
                                        return branch.type === common_1.BranchType.Remote ? "Remote branch at" + tip : "" + tip;
                                    };
                                    items = branches.map(function (branch) { return new GitQuickOpenItem(branch, _this.wrapWithProgress(switchBranch), toLabel, toDescription); });
                                    createBranchItem = function (item) { return __awaiter(_this, void 0, void 0, function () {
                                        var _a, git, gitErrorHandler, wrapWithProgress, createBranchModel;
                                        return __generator(this, function (_b) {
                                            _a = this, git = _a.git, gitErrorHandler = _a.gitErrorHandler, wrapWithProgress = _a.wrapWithProgress;
                                            createBranchModel = {
                                                onType: function (lookFor, acceptor) {
                                                    var _this = this;
                                                    var dynamicItems = [];
                                                    var suffix = "Press 'Enter' to confirm or 'Escape' to cancel.";
                                                    if (lookFor === undefined || lookFor.length === 0) {
                                                        dynamicItems.push(new SingleStringInputOpenItem("Please provide a branch name. " + suffix, function () { }, function () { return false; }));
                                                    }
                                                    else {
                                                        dynamicItems.push(new SingleStringInputOpenItem("Create a new local branch with name: " + lookFor + ". " + suffix, wrapWithProgress(function () { return __awaiter(_this, void 0, void 0, function () {
                                                            var error_9;
                                                            return __generator(this, function (_a) {
                                                                switch (_a.label) {
                                                                    case 0:
                                                                        _a.trys.push([0, 3, , 4]);
                                                                        return [4 /*yield*/, git.branch(repository, { toCreate: lookFor })];
                                                                    case 1:
                                                                        _a.sent();
                                                                        return [4 /*yield*/, git.checkout(repository, { branch: lookFor })];
                                                                    case 2:
                                                                        _a.sent();
                                                                        return [3 /*break*/, 4];
                                                                    case 3:
                                                                        error_9 = _a.sent();
                                                                        gitErrorHandler.handleError(error_9);
                                                                        return [3 /*break*/, 4];
                                                                    case 4: return [2 /*return*/];
                                                                }
                                                            });
                                                        }); })));
                                                    }
                                                    acceptor(dynamicItems);
                                                }
                                            };
                                            this.quickOpenService.open(createBranchModel, this.getOptions('The name of the branch:', false));
                                            return [2 /*return*/];
                                        });
                                    }); };
                                    items.unshift(new SingleStringInputOpenItem('Create new branch...', this.wrapWithProgress(createBranchItem), function (mode) { return mode === quick_open_model_1.QuickOpenMode.OPEN; }, function () { return false; }));
                                    this.open(items, 'Select a ref to checkout or create a new local branch:');
                                    return [2 /*return*/];
                            }
                        });
                    }); })];
            });
        });
    };
    GitQuickOpenService.prototype.chooseTagsAndBranches = function (execFunc, repository) {
        if (repository === void 0) { repository = this.getRepository(); }
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                if (!repository) {
                    return [2 /*return*/];
                }
                return [2 /*return*/, this.withProgress(function () { return __awaiter(_this, void 0, void 0, function () {
                        var _a, branches, tags, currentBranch, execute, toLabel, branchItems, branchName, tagItems;
                        var _this = this;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0: return [4 /*yield*/, Promise.all([this.getBranches(repository), this.getTags(repository), this.getCurrentBranch(repository)])];
                                case 1:
                                    _a = __read.apply(void 0, [_b.sent(), 3]), branches = _a[0], tags = _a[1], currentBranch = _a[2];
                                    execute = function (item) { return __awaiter(_this, void 0, void 0, function () {
                                        return __generator(this, function (_a) {
                                            execFunc(item.ref.name, currentBranch ? currentBranch.name : '');
                                            return [2 /*return*/];
                                        });
                                    }); };
                                    toLabel = function (item) { return item.ref.name; };
                                    branchItems = branches.map(function (branch) { return new GitQuickOpenItem(branch, _this.wrapWithProgress(execute), toLabel); });
                                    branchName = currentBranch ? "'" + currentBranch.name + "' " : '';
                                    tagItems = tags.map(function (tag) { return new GitQuickOpenItem(tag, execute, toLabel); });
                                    this.open(__spread(branchItems, tagItems), "Pick a branch or tag to compare with the currently active " + branchName + " branch:");
                                    return [2 /*return*/];
                            }
                        });
                    }); })];
            });
        });
    };
    GitQuickOpenService.prototype.commitMessageForAmend = function () {
        return __awaiter(this, void 0, void 0, function () {
            var repository;
            var _this = this;
            return __generator(this, function (_a) {
                repository = this.getRepository();
                if (!repository) {
                    throw new Error('No repositories were selected.');
                }
                return [2 /*return*/, this.withProgress(function () { return __awaiter(_this, void 0, void 0, function () {
                        var lastMessage, message, result;
                        var _this = this;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, this.git.exec(repository, ['log', '--format=%B', '-n', '1'])];
                                case 1:
                                    lastMessage = (_a.sent()).stdout.trim();
                                    if (lastMessage.length === 0) {
                                        throw new Error("Repository " + repository.localUri + " is not yet initialized.");
                                    }
                                    message = lastMessage.replace(/[\r\n]+/g, ' ');
                                    return [4 /*yield*/, new Promise(function (resolve, reject) {
                                            var createEditCommitMessageModel = {
                                                onType: function (lookFor, acceptor) {
                                                    var dynamicItems = [];
                                                    if (!lookFor) {
                                                        var description_1 = "To reuse the last commit message, press 'Enter' or 'Escape' to cancel.";
                                                        dynamicItems.push(new GitQuickOpenItem(description_1, function () { return resolve(lastMessage); }, function () { return description_1; }));
                                                    }
                                                    else {
                                                        dynamicItems.push(new GitQuickOpenItem("Rewrite previous commit message. Press 'Enter' to confirm or 'Escape' to cancel.", function (item) { return resolve(lookFor); }));
                                                    }
                                                    acceptor(dynamicItems);
                                                },
                                            };
                                            var onClose = function (canceled) {
                                                if (canceled) {
                                                    reject(new Error('User abort.'));
                                                }
                                            };
                                            _this.quickOpenService.open(createEditCommitMessageModel, _this.getOptions(message, false, onClose));
                                        })];
                                case 2:
                                    result = _a.sent();
                                    return [2 /*return*/, result];
                            }
                        });
                    }); })];
            });
        });
    };
    GitQuickOpenService.prototype.stash = function () {
        return __awaiter(this, void 0, void 0, function () {
            var repository;
            var _this = this;
            return __generator(this, function (_a) {
                repository = this.getRepository();
                if (!repository) {
                    return [2 /*return*/];
                }
                return [2 /*return*/, this.withProgress(function () { return __awaiter(_this, void 0, void 0, function () {
                        var doStash, quickOpenModel;
                        var _this = this;
                        return __generator(this, function (_a) {
                            doStash = this.wrapWithProgress(function (message) { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    this.git.stash(repository, { message: message });
                                    return [2 /*return*/];
                                });
                            }); });
                            quickOpenModel = {
                                onType: function (lookFor, acceptor) {
                                    var dynamicItems = [];
                                    var suffix = "Press 'Enter' to confirm or 'Escape' to cancel.";
                                    if (lookFor === undefined || lookFor.length === 0) {
                                        dynamicItems.push(new SingleStringInputOpenItem("Stash changes. " + suffix, function () { return doStash(lookFor); }));
                                    }
                                    else {
                                        dynamicItems.push(new SingleStringInputOpenItem("Stash changes with message: " + lookFor + ". " + suffix, function () { return doStash(lookFor); }));
                                    }
                                    acceptor(dynamicItems);
                                }
                            };
                            this.quickOpenService.open(quickOpenModel, this.getOptions('Stash message', false));
                            return [2 /*return*/];
                        });
                    }); })];
            });
        });
    };
    GitQuickOpenService.prototype.doStashAction = function (action, text, getMessage) {
        return __awaiter(this, void 0, void 0, function () {
            var repository;
            var _this = this;
            return __generator(this, function (_a) {
                repository = this.getRepository();
                if (!repository) {
                    return [2 /*return*/];
                }
                return [2 /*return*/, this.withProgress(function () { return __awaiter(_this, void 0, void 0, function () {
                        var list, quickOpenItems;
                        var _this = this;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, this.git.stash(repository, { action: 'list' })];
                                case 1:
                                    list = _a.sent();
                                    if (list) {
                                        quickOpenItems = list.map(function (stash) { return new GitQuickOpenItem(stash, _this.wrapWithProgress(function () { return __awaiter(_this, void 0, void 0, function () {
                                            var _a, _b, error_10;
                                            return __generator(this, function (_c) {
                                                switch (_c.label) {
                                                    case 0:
                                                        _c.trys.push([0, 4, , 5]);
                                                        return [4 /*yield*/, this.git.stash(repository, {
                                                                action: action,
                                                                id: stash.id
                                                            })];
                                                    case 1:
                                                        _c.sent();
                                                        if (!getMessage) return [3 /*break*/, 3];
                                                        _b = (_a = this.messageService).info;
                                                        return [4 /*yield*/, getMessage()];
                                                    case 2:
                                                        _b.apply(_a, [_c.sent()]);
                                                        _c.label = 3;
                                                    case 3: return [3 /*break*/, 5];
                                                    case 4:
                                                        error_10 = _c.sent();
                                                        this.gitErrorHandler.handleError(error_10);
                                                        return [3 /*break*/, 5];
                                                    case 5: return [2 /*return*/];
                                                }
                                            });
                                        }); }), function () { return stash.message; }); });
                                        this.open(quickOpenItems, text);
                                    }
                                    return [2 /*return*/];
                            }
                        });
                    }); })];
            });
        });
    };
    GitQuickOpenService.prototype.applyStash = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.doStashAction('apply', 'Select a stash to \'apply\'.');
                return [2 /*return*/];
            });
        });
    };
    GitQuickOpenService.prototype.popStash = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.doStashAction('pop', 'Select a stash to \'pop\'.');
                return [2 /*return*/];
            });
        });
    };
    GitQuickOpenService.prototype.dropStash = function () {
        return __awaiter(this, void 0, void 0, function () {
            var repository;
            var _this = this;
            return __generator(this, function (_a) {
                repository = this.getRepository();
                if (!repository) {
                    return [2 /*return*/];
                }
                this.doStashAction('drop', 'Select a stash entry to remove it from the list of stash entries.', function () { return __awaiter(_this, void 0, void 0, function () {
                    var list, listString;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, this.git.stash(repository, { action: 'list' })];
                            case 1:
                                list = _a.sent();
                                listString = '';
                                list.forEach(function (stashEntry) {
                                    listString += stashEntry.message + '\n';
                                });
                                return [2 /*return*/, "Stash successfully removed.\n                There " + (list.length === 1 ? 'is' : 'are') + " " + (list.length || 'no') + " more entry in stash list.\n                \n" + listString];
                        }
                    });
                }); });
                return [2 /*return*/];
            });
        });
    };
    GitQuickOpenService.prototype.applyLatestStash = function () {
        return __awaiter(this, void 0, void 0, function () {
            var repository;
            var _this = this;
            return __generator(this, function (_a) {
                repository = this.getRepository();
                if (!repository) {
                    return [2 /*return*/];
                }
                return [2 /*return*/, this.withProgress(function () { return __awaiter(_this, void 0, void 0, function () {
                        var error_11;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    _a.trys.push([0, 2, , 3]);
                                    return [4 /*yield*/, this.git.stash(repository, {
                                            action: 'apply'
                                        })];
                                case 1:
                                    _a.sent();
                                    return [3 /*break*/, 3];
                                case 2:
                                    error_11 = _a.sent();
                                    this.gitErrorHandler.handleError(error_11);
                                    return [3 /*break*/, 3];
                                case 3: return [2 /*return*/];
                            }
                        });
                    }); })];
            });
        });
    };
    GitQuickOpenService.prototype.popLatestStash = function () {
        return __awaiter(this, void 0, void 0, function () {
            var repository;
            var _this = this;
            return __generator(this, function (_a) {
                repository = this.getRepository();
                if (!repository) {
                    return [2 /*return*/];
                }
                return [2 /*return*/, this.withProgress(function () { return __awaiter(_this, void 0, void 0, function () {
                        var error_12;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    _a.trys.push([0, 2, , 3]);
                                    return [4 /*yield*/, this.git.stash(repository, {
                                            action: 'pop'
                                        })];
                                case 1:
                                    _a.sent();
                                    return [3 /*break*/, 3];
                                case 2:
                                    error_12 = _a.sent();
                                    this.gitErrorHandler.handleError(error_12);
                                    return [3 /*break*/, 3];
                                case 3: return [2 /*return*/];
                            }
                        });
                    }); })];
            });
        });
    };
    GitQuickOpenService.prototype.initRepository = function () {
        return __awaiter(this, void 0, void 0, function () {
            var wsRoots, placeholder, items, rootUri;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.workspaceService.roots];
                    case 1:
                        wsRoots = _a.sent();
                        if (wsRoots && wsRoots.length > 1) {
                            placeholder = 'Choose workspace root to initialize git repo in';
                            items = wsRoots.map(function (root) { return _this.toRepositoryPathQuickOpenItem(root); });
                            this.open(items, placeholder);
                        }
                        else {
                            rootUri = new uri_1.default(wsRoots[0].uri);
                            this.doInitRepository(rootUri.toString());
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    GitQuickOpenService.prototype.doInitRepository = function (uri) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.withProgress(function () { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                    return [2 /*return*/, this.git.exec({ localUri: uri }, ['init'])];
                }); }); });
                return [2 /*return*/];
            });
        });
    };
    GitQuickOpenService.prototype.toRepositoryPathQuickOpenItem = function (root) {
        var _this = this;
        var rootUri = new uri_1.default(root.uri);
        var toLabel = function (item) { return _this.labelProvider.getName(item.ref); };
        var toDescription = function (item) { return _this.labelProvider.getLongName(item.ref.parent); };
        var execute = function (item) { return __awaiter(_this, void 0, void 0, function () {
            var wsRoot;
            return __generator(this, function (_a) {
                wsRoot = item.ref.toString();
                this.doInitRepository(wsRoot);
                return [2 /*return*/];
            });
        }); };
        return new GitQuickOpenItem(rootUri, execute, toLabel, toDescription);
    };
    GitQuickOpenService.prototype.open = function (items, placeholder) {
        this.quickOpenService.open(this.getModel(Array.isArray(items) ? items : [items]), this.getOptions(placeholder));
    };
    GitQuickOpenService.prototype.getOptions = function (placeholder, fuzzyMatchLabel, onClose) {
        if (fuzzyMatchLabel === void 0) { fuzzyMatchLabel = true; }
        if (onClose === void 0) { onClose = function () { }; }
        return quick_open_service_1.QuickOpenOptions.resolve({
            placeholder: placeholder,
            fuzzyMatchLabel: fuzzyMatchLabel,
            fuzzySort: false,
            onClose: onClose
        });
    };
    GitQuickOpenService.prototype.getModel = function (items) {
        return {
            onType: function (lookFor, acceptor) {
                acceptor(Array.isArray(items) ? items : [items]);
            }
        };
    };
    GitQuickOpenService.prototype.getRepository = function () {
        return this.repositoryProvider.selectedRepository;
    };
    GitQuickOpenService.prototype.getRemotes = function () {
        return __awaiter(this, void 0, void 0, function () {
            var repository;
            var _this = this;
            return __generator(this, function (_a) {
                repository = this.getRepository();
                if (!repository) {
                    return [2 /*return*/, []];
                }
                return [2 /*return*/, this.withProgress(function () { return __awaiter(_this, void 0, void 0, function () {
                        var error_13;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    _a.trys.push([0, 2, , 3]);
                                    return [4 /*yield*/, this.git.remote(repository, { verbose: true })];
                                case 1: return [2 /*return*/, _a.sent()];
                                case 2:
                                    error_13 = _a.sent();
                                    this.gitErrorHandler.handleError(error_13);
                                    return [2 /*return*/, []];
                                case 3: return [2 /*return*/];
                            }
                        });
                    }); })];
            });
        });
    };
    GitQuickOpenService.prototype.getTags = function (repository) {
        if (repository === void 0) { repository = this.getRepository(); }
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                if (!repository) {
                    return [2 /*return*/, []];
                }
                return [2 /*return*/, this.withProgress(function () { return __awaiter(_this, void 0, void 0, function () {
                        var result;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, this.git.exec(repository, ['tag', '--sort=-creatordate'])];
                                case 1:
                                    result = _a.sent();
                                    return [2 /*return*/, result.stdout !== '' ? result.stdout.trim().split('\n').map(function (tag) { return ({ name: tag }); }) : []];
                            }
                        });
                    }); })];
            });
        });
    };
    GitQuickOpenService.prototype.getBranches = function (repository) {
        if (repository === void 0) { repository = this.getRepository(); }
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                if (!repository) {
                    return [2 /*return*/, []];
                }
                return [2 /*return*/, this.withProgress(function () { return __awaiter(_this, void 0, void 0, function () {
                        var _a, local, remote, error_14;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0:
                                    _b.trys.push([0, 2, , 3]);
                                    return [4 /*yield*/, Promise.all([
                                            this.git.branch(repository, { type: 'local' }),
                                            this.git.branch(repository, { type: 'remote' })
                                        ])];
                                case 1:
                                    _a = __read.apply(void 0, [_b.sent(), 2]), local = _a[0], remote = _a[1];
                                    return [2 /*return*/, __spread(local, remote)];
                                case 2:
                                    error_14 = _b.sent();
                                    this.gitErrorHandler.handleError(error_14);
                                    return [2 /*return*/, []];
                                case 3: return [2 /*return*/];
                            }
                        });
                    }); })];
            });
        });
    };
    GitQuickOpenService.prototype.getCurrentBranch = function (repository) {
        if (repository === void 0) { repository = this.getRepository(); }
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                if (!repository) {
                    return [2 /*return*/, undefined];
                }
                return [2 /*return*/, this.withProgress(function () { return __awaiter(_this, void 0, void 0, function () {
                        var error_15;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    _a.trys.push([0, 2, , 3]);
                                    return [4 /*yield*/, this.git.branch(repository, { type: 'current' })];
                                case 1: return [2 /*return*/, _a.sent()];
                                case 2:
                                    error_15 = _a.sent();
                                    this.gitErrorHandler.handleError(error_15);
                                    return [2 /*return*/, undefined];
                                case 3: return [2 /*return*/];
                            }
                        });
                    }); })];
            });
        });
    };
    GitQuickOpenService.prototype.withProgress = function (fn) {
        return this.progressService.withProgress('', 'scm', fn);
    };
    GitQuickOpenService.prototype.doWrapWithProgress = function (fn) {
        var _this = this;
        return function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return _this.withProgress(function () { return fn.apply(void 0, __spread(args)); });
        };
    };
    __decorate([
        inversify_1.inject(git_error_handler_1.GitErrorHandler),
        __metadata("design:type", git_error_handler_1.GitErrorHandler)
    ], GitQuickOpenService.prototype, "gitErrorHandler", void 0);
    __decorate([
        inversify_1.inject(progress_service_1.ProgressService),
        __metadata("design:type", progress_service_1.ProgressService)
    ], GitQuickOpenService.prototype, "progressService", void 0);
    __decorate([
        inversify_1.inject(browser_1.LabelProvider),
        __metadata("design:type", browser_1.LabelProvider)
    ], GitQuickOpenService.prototype, "labelProvider", void 0);
    GitQuickOpenService = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(common_1.Git)),
        __param(1, inversify_1.inject(git_repository_provider_1.GitRepositoryProvider)),
        __param(2, inversify_1.inject(quick_open_service_1.QuickOpenService)),
        __param(3, inversify_1.inject(message_service_1.MessageService)),
        __param(4, inversify_1.inject(workspace_service_1.WorkspaceService)),
        __param(5, inversify_1.inject(common_2.FileSystem)),
        __metadata("design:paramtypes", [Object, git_repository_provider_1.GitRepositoryProvider,
            quick_open_service_1.QuickOpenService,
            message_service_1.MessageService,
            workspace_service_1.WorkspaceService, Object])
    ], GitQuickOpenService);
    return GitQuickOpenService;
}());
exports.GitQuickOpenService = GitQuickOpenService;
/**
 * Git specific quick open item that wraps a branch a remote name or something else.
 */
var GitQuickOpenItem = /** @class */ (function (_super) {
    __extends(GitQuickOpenItem, _super);
    function GitQuickOpenItem(ref, execute, toLabel, toDescription) {
        if (toLabel === void 0) { toLabel = function (item) { return "" + ref; }; }
        if (toDescription === void 0) { toDescription = function (item) { return undefined; }; }
        var _this = _super.call(this) || this;
        _this.ref = ref;
        _this.execute = execute;
        _this.toLabel = toLabel;
        _this.toDescription = toDescription;
        return _this;
    }
    GitQuickOpenItem.prototype.run = function (mode) {
        if (mode !== quick_open_model_1.QuickOpenMode.OPEN) {
            return false;
        }
        this.execute(this);
        return true;
    };
    GitQuickOpenItem.prototype.getLabel = function () {
        return this.toLabel(this);
    };
    GitQuickOpenItem.prototype.getDescription = function () {
        return this.toDescription(this);
    };
    return GitQuickOpenItem;
}(quick_open_model_1.QuickOpenItem));
var SingleStringInputOpenItem = /** @class */ (function (_super) {
    __extends(SingleStringInputOpenItem, _super);
    function SingleStringInputOpenItem(label, execute, canRun, canClose) {
        if (execute === void 0) { execute = function () { }; }
        if (canRun === void 0) { canRun = function (mode) { return mode === quick_open_model_1.QuickOpenMode.OPEN; }; }
        if (canClose === void 0) { canClose = function (mode) { return true; }; }
        var _this = _super.call(this) || this;
        _this.label = label;
        _this.execute = execute;
        _this.canRun = canRun;
        _this.canClose = canClose;
        return _this;
    }
    SingleStringInputOpenItem.prototype.getLabel = function () {
        return this.label;
    };
    SingleStringInputOpenItem.prototype.run = function (mode) {
        if (!this.canRun(mode)) {
            return false;
        }
        this.execute(this);
        return this.canClose(mode);
    };
    return SingleStringInputOpenItem;
}(quick_open_model_1.QuickOpenItem));


/***/ }),

/***/ "./node_modules/@theia/git/lib/browser/git-repository-provider.js":
/*!************************************************************************!*\
  !*** ./node_modules/@theia/git/lib/browser/git-repository-provider.js ***!
  \************************************************************************/
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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
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
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
var debounce = __webpack_require__(/*! lodash.debounce */ "./node_modules/lodash.debounce/index.js");
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var workspace_service_1 = __webpack_require__(/*! @theia/workspace/lib/browser/workspace-service */ "./node_modules/@theia/workspace/lib/browser/workspace-service.js");
var common_1 = __webpack_require__(/*! @theia/filesystem/lib/common */ "./node_modules/@theia/filesystem/lib/common/index.js");
var event_1 = __webpack_require__(/*! @theia/core/lib/common/event */ "./node_modules/@theia/core/lib/common/event.js");
var storage_service_1 = __webpack_require__(/*! @theia/core/lib/browser/storage-service */ "./node_modules/@theia/core/lib/browser/storage-service.js");
var uri_1 = __webpack_require__(/*! @theia/core/lib/common/uri */ "./node_modules/@theia/core/lib/common/uri.js");
var filesystem_watcher_1 = __webpack_require__(/*! @theia/filesystem/lib/browser/filesystem-watcher */ "./node_modules/@theia/filesystem/lib/browser/filesystem-watcher.js");
var common_2 = __webpack_require__(/*! ../common */ "./node_modules/@theia/git/lib/common/index.js");
var git_commit_message_validator_1 = __webpack_require__(/*! ./git-commit-message-validator */ "./node_modules/@theia/git/lib/browser/git-commit-message-validator.js");
var git_scm_provider_1 = __webpack_require__(/*! ./git-scm-provider */ "./node_modules/@theia/git/lib/browser/git-scm-provider.js");
var scm_service_1 = __webpack_require__(/*! @theia/scm/lib/browser/scm-service */ "./node_modules/@theia/scm/lib/browser/scm-service.js");
var GitRepositoryProvider = /** @class */ (function () {
    function GitRepositoryProvider(git, workspaceService, watcher, fileSystem, scmService, storageService) {
        var _this = this;
        this.git = git;
        this.workspaceService = workspaceService;
        this.watcher = watcher;
        this.fileSystem = fileSystem;
        this.scmService = scmService;
        this.storageService = storageService;
        this.onDidChangeRepositoryEmitter = new event_1.Emitter();
        this.selectedRepoStorageKey = 'theia-git-selected-repository';
        this.allRepoStorageKey = 'theia-git-all-repositories';
        this.lazyRefresh = debounce(function () { return _this.refresh(); }, 1000);
        this.initialize();
    }
    GitRepositoryProvider.prototype.initialize = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, selectedRepository, allRepositories;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, Promise.all([
                            this.storageService.getData(this.selectedRepoStorageKey),
                            this.storageService.getData(this.allRepoStorageKey)
                        ])];
                    case 1:
                        _a = __read.apply(void 0, [_b.sent(), 2]), selectedRepository = _a[0], allRepositories = _a[1];
                        this.scmService.onDidChangeSelectedRepository(function (scmRepository) { return _this.fireDidChangeRepository(_this.toGitRepository(scmRepository)); });
                        if (!allRepositories) return [3 /*break*/, 2];
                        this.updateRepositories(allRepositories);
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.refresh({ maxCount: 1 })];
                    case 3:
                        _b.sent();
                        _b.label = 4;
                    case 4:
                        this.selectedRepository = selectedRepository;
                        return [4 /*yield*/, this.refresh()];
                    case 5:
                        _b.sent();
                        this.watcher.onFilesChanged(function (_changedFiles) { return _this.lazyRefresh(); });
                        return [2 /*return*/];
                }
            });
        });
    };
    Object.defineProperty(GitRepositoryProvider.prototype, "selectedRepository", {
        /**
         * Returns with the previously selected repository, or if no repository has been selected yet,
         * it picks the first available repository from the backend and sets it as the selected one and returns with that.
         * If no repositories are available, returns `undefined`.
         */
        get: function () {
            return this.toGitRepository(this.scmService.selectedRepository);
        },
        /**
         * Sets the selected repository, but do nothing if the given repository is not a Git repository
         * registered with the SCM service.  We must be sure not to clear the selection if the selected
         * repository is managed by an SCM other than Git.
         */
        set: function (repository) {
            var scmRepository = this.toScmRepository(repository);
            if (scmRepository) {
                this.scmService.selectedRepository = scmRepository;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GitRepositoryProvider.prototype, "selectedScmRepository", {
        get: function () {
            return this.toGitScmRepository(this.scmService.selectedRepository);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GitRepositoryProvider.prototype, "selectedScmProvider", {
        get: function () {
            return this.toGitScmProvider(this.scmService.selectedRepository);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GitRepositoryProvider.prototype, "onDidChangeRepository", {
        get: function () {
            return this.onDidChangeRepositoryEmitter.event;
        },
        enumerable: true,
        configurable: true
    });
    GitRepositoryProvider.prototype.fireDidChangeRepository = function (repository) {
        this.storageService.setData(this.selectedRepoStorageKey, repository);
        this.onDidChangeRepositoryEmitter.fire(repository);
    };
    Object.defineProperty(GitRepositoryProvider.prototype, "allRepositories", {
        /**
         * Returns with all know repositories.
         */
        get: function () {
            var e_1, _a;
            var repositories = [];
            try {
                for (var _b = __values(this.scmService.repositories), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var scmRepository = _c.value;
                    var repository = this.toGitRepository(scmRepository);
                    if (repository) {
                        repositories.push(repository);
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
            return repositories;
        },
        enumerable: true,
        configurable: true
    });
    GitRepositoryProvider.prototype.findRepository = function (uri) {
        var reposSorted = this.allRepositories.sort(common_2.Repository.sortComparator);
        return reposSorted.find(function (repo) { return new uri_1.default(repo.localUri).isEqualOrParent(uri); });
    };
    GitRepositoryProvider.prototype.findRepositoryOrSelected = function (arg) {
        var uri;
        if (arg) {
            if (arg instanceof uri_1.default || typeof arg === 'string') {
                uri = arg;
            }
            else if (typeof arg === 'object' && 'uri' in arg && arg.uri) {
                uri = arg.uri;
            }
            if (uri) {
                if (typeof uri === 'string') {
                    uri = new uri_1.default(uri);
                }
                return this.findRepository(uri);
            }
        }
        return this.selectedRepository;
    };
    GitRepositoryProvider.prototype.refresh = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            var repositories, refreshing, _a, _b, root, e_2_1;
            var e_2, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        repositories = [];
                        refreshing = [];
                        _d.label = 1;
                    case 1:
                        _d.trys.push([1, 6, 7, 8]);
                        return [4 /*yield*/, this.workspaceService.roots];
                    case 2:
                        _a = __values.apply(void 0, [_d.sent()]), _b = _a.next();
                        _d.label = 3;
                    case 3:
                        if (!!_b.done) return [3 /*break*/, 5];
                        root = _b.value;
                        refreshing.push(this.git.repositories(root.uri, __assign({}, options)).then(function (result) { repositories.push.apply(repositories, __spread(result)); }, function () { }));
                        _d.label = 4;
                    case 4:
                        _b = _a.next();
                        return [3 /*break*/, 3];
                    case 5: return [3 /*break*/, 8];
                    case 6:
                        e_2_1 = _d.sent();
                        e_2 = { error: e_2_1 };
                        return [3 /*break*/, 8];
                    case 7:
                        try {
                            if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                        }
                        finally { if (e_2) throw e_2.error; }
                        return [7 /*endfinally*/];
                    case 8: return [4 /*yield*/, Promise.all(refreshing)];
                    case 9:
                        _d.sent();
                        this.updateRepositories(repositories);
                        return [2 /*return*/];
                }
            });
        });
    };
    GitRepositoryProvider.prototype.updateRepositories = function (repositories) {
        var e_3, _a, e_4, _b, e_5, _c;
        this.storageService.setData(this.allRepoStorageKey, repositories);
        var registered = new Set();
        var toUnregister = new Map();
        try {
            for (var _d = __values(this.scmService.repositories), _e = _d.next(); !_e.done; _e = _d.next()) {
                var scmRepository = _e.value;
                var repository = this.toGitRepository(scmRepository);
                if (repository) {
                    registered.add(repository.localUri);
                    toUnregister.set(repository.localUri, scmRepository);
                }
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_e && !_e.done && (_a = _d.return)) _a.call(_d);
            }
            finally { if (e_3) throw e_3.error; }
        }
        try {
            for (var repositories_1 = __values(repositories), repositories_1_1 = repositories_1.next(); !repositories_1_1.done; repositories_1_1 = repositories_1.next()) {
                var repository = repositories_1_1.value;
                toUnregister.delete(repository.localUri);
                if (!registered.has(repository.localUri)) {
                    registered.add(repository.localUri);
                    this.registerScmProvider(repository);
                }
            }
        }
        catch (e_4_1) { e_4 = { error: e_4_1 }; }
        finally {
            try {
                if (repositories_1_1 && !repositories_1_1.done && (_b = repositories_1.return)) _b.call(repositories_1);
            }
            finally { if (e_4) throw e_4.error; }
        }
        try {
            for (var toUnregister_1 = __values(toUnregister), toUnregister_1_1 = toUnregister_1.next(); !toUnregister_1_1.done; toUnregister_1_1 = toUnregister_1.next()) {
                var _f = __read(toUnregister_1_1.value, 2), scmRepository = _f[1];
                scmRepository.dispose();
            }
        }
        catch (e_5_1) { e_5 = { error: e_5_1 }; }
        finally {
            try {
                if (toUnregister_1_1 && !toUnregister_1_1.done && (_c = toUnregister_1.return)) _c.call(toUnregister_1);
            }
            finally { if (e_5) throw e_5.error; }
        }
    };
    GitRepositoryProvider.prototype.registerScmProvider = function (repository) {
        var _this = this;
        var provider = this.scmProviderFactory({ repository: repository });
        this.scmService.registerScmProvider(provider, {
            input: {
                placeholder: 'Message (press {0} to commit)',
                validator: function (value) { return __awaiter(_this, void 0, void 0, function () {
                    var issue;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, this.commitMessageValidator.validate(value)];
                            case 1:
                                issue = _a.sent();
                                return [2 /*return*/, issue && {
                                        message: issue.message,
                                        type: issue.status
                                    }];
                        }
                    });
                }); }
            }
        });
    };
    GitRepositoryProvider.prototype.toScmRepository = function (repository) {
        var _this = this;
        return repository && this.scmService.repositories.find(function (scmRepository) { return common_2.Repository.equal(_this.toGitRepository(scmRepository), repository); });
    };
    GitRepositoryProvider.prototype.toGitRepository = function (scmRepository) {
        var provider = this.toGitScmProvider(scmRepository);
        return provider && provider.repository;
    };
    GitRepositoryProvider.prototype.toGitScmProvider = function (scmRepository) {
        var gitScmRepository = this.toGitScmRepository(scmRepository);
        return gitScmRepository && gitScmRepository.provider;
    };
    GitRepositoryProvider.prototype.toGitScmRepository = function (scmRepository) {
        return GitScmRepository.is(scmRepository) ? scmRepository : undefined;
    };
    __decorate([
        inversify_1.inject(git_scm_provider_1.GitScmProvider.Factory),
        __metadata("design:type", Function)
    ], GitRepositoryProvider.prototype, "scmProviderFactory", void 0);
    __decorate([
        inversify_1.inject(git_commit_message_validator_1.GitCommitMessageValidator),
        __metadata("design:type", git_commit_message_validator_1.GitCommitMessageValidator)
    ], GitRepositoryProvider.prototype, "commitMessageValidator", void 0);
    GitRepositoryProvider = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(common_2.Git)),
        __param(1, inversify_1.inject(workspace_service_1.WorkspaceService)),
        __param(2, inversify_1.inject(filesystem_watcher_1.FileSystemWatcher)),
        __param(3, inversify_1.inject(common_1.FileSystem)),
        __param(4, inversify_1.inject(scm_service_1.ScmService)),
        __param(5, inversify_1.inject(storage_service_1.StorageService)),
        __metadata("design:paramtypes", [Object, workspace_service_1.WorkspaceService,
            filesystem_watcher_1.FileSystemWatcher, Object, scm_service_1.ScmService, Object])
    ], GitRepositoryProvider);
    return GitRepositoryProvider;
}());
exports.GitRepositoryProvider = GitRepositoryProvider;
var GitScmRepository;
(function (GitScmRepository) {
    function is(scmRepository) {
        return !!scmRepository && scmRepository.provider instanceof git_scm_provider_1.GitScmProvider;
    }
    GitScmRepository.is = is;
})(GitScmRepository = exports.GitScmRepository || (exports.GitScmRepository = {}));


/***/ }),

/***/ "./node_modules/@theia/git/lib/browser/git-repository-tracker.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@theia/git/lib/browser/git-repository-tracker.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2018 TypeFox and others.
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
var common_1 = __webpack_require__(/*! ../common */ "./node_modules/@theia/git/lib/common/index.js");
var core_1 = __webpack_require__(/*! @theia/core */ "./node_modules/@theia/core/lib/common/index.js");
var git_repository_provider_1 = __webpack_require__(/*! ./git-repository-provider */ "./node_modules/@theia/git/lib/browser/git-repository-provider.js");
var git_watcher_1 = __webpack_require__(/*! ../common/git-watcher */ "./node_modules/@theia/git/lib/common/git-watcher.js");
var uri_1 = __webpack_require__(/*! @theia/core/lib/common/uri */ "./node_modules/@theia/core/lib/common/uri.js");
var debounce = __webpack_require__(/*! lodash.debounce */ "./node_modules/lodash.debounce/index.js");
/**
 * The repository tracker watches the selected repository for status changes. It provides a convenient way to listen on status updates.
 */
var GitRepositoryTracker = /** @class */ (function () {
    function GitRepositoryTracker(git, repositoryProvider, gitWatcher) {
        var _this = this;
        this.git = git;
        this.repositoryProvider = repositoryProvider;
        this.gitWatcher = gitWatcher;
        this.toDispose = new core_1.DisposableCollection();
        this.onGitEventEmitter = new core_1.Emitter();
        this.updateStatus = debounce(function () { return __awaiter(_this, void 0, void 0, function () {
            var tokenSource, token, source, status_1, _a, _b;
            var _this = this;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        this.toDispose.dispose();
                        tokenSource = new core_1.CancellationTokenSource();
                        this.toDispose.push(core_1.Disposable.create(function () { return tokenSource.cancel(); }));
                        token = tokenSource.token;
                        source = this.selectedRepository;
                        if (!source) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.git.status(source)];
                    case 1:
                        status_1 = _c.sent();
                        this.setStatus({ source: source, status: status_1 }, token);
                        this.toDispose.push(this.gitWatcher.onGitEvent(function (event) {
                            if (event.source.localUri === source.localUri) {
                                _this.setStatus(event, token);
                            }
                        }));
                        _b = (_a = this.toDispose).push;
                        return [4 /*yield*/, this.gitWatcher.watchGitChanges(source)];
                    case 2:
                        _b.apply(_a, [_c.sent()]);
                        return [3 /*break*/, 4];
                    case 3:
                        this.setStatus(undefined, token);
                        _c.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        }); }, 50);
    }
    GitRepositoryTracker.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.updateStatus();
                this.repositoryProvider.onDidChangeRepository(function () { return _this.updateStatus(); });
                return [2 /*return*/];
            });
        });
    };
    GitRepositoryTracker.prototype.setStatus = function (event, token) {
        return __awaiter(this, void 0, void 0, function () {
            var status, scmProvider;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        status = event && event.status;
                        scmProvider = this.repositoryProvider.selectedScmProvider;
                        if (!scmProvider) return [3 /*break*/, 2];
                        return [4 /*yield*/, scmProvider.setStatus(status, token)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        if (token.isCancellationRequested) {
                            return [2 /*return*/];
                        }
                        this.workingDirectoryStatus = status;
                        this.onGitEventEmitter.fire(event);
                        return [2 /*return*/];
                }
            });
        });
    };
    Object.defineProperty(GitRepositoryTracker.prototype, "selectedRepository", {
        /**
         * Returns the selected repository, or `undefined` if no repositories are available.
         */
        get: function () {
            return this.repositoryProvider.selectedRepository;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GitRepositoryTracker.prototype, "allRepositories", {
        /**
         * Returns all known repositories.
         */
        get: function () {
            return this.repositoryProvider.allRepositories;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GitRepositoryTracker.prototype, "selectedRepositoryStatus", {
        /**
         * Returns the last known status of the selected respository, or `undefined` if no repositories are available.
         */
        get: function () {
            return this.workingDirectoryStatus;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GitRepositoryTracker.prototype, "onDidChangeRepository", {
        /**
         * Emits when the selected repository has changed.
         */
        get: function () {
            return this.repositoryProvider.onDidChangeRepository;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GitRepositoryTracker.prototype, "onGitEvent", {
        /**
         * Emits when status has changed in the selected repository.
         */
        get: function () {
            return this.onGitEventEmitter.event;
        },
        enumerable: true,
        configurable: true
    });
    GitRepositoryTracker.prototype.getPath = function (uri) {
        var repositoryUri = this.repositoryUri;
        var relativePath = repositoryUri && common_1.Repository.relativePath(repositoryUri, uri);
        return relativePath && relativePath.toString();
    };
    GitRepositoryTracker.prototype.getUri = function (path) {
        var repositoryUri = this.repositoryUri;
        return repositoryUri && repositoryUri.resolve(path);
    };
    Object.defineProperty(GitRepositoryTracker.prototype, "repositoryUri", {
        get: function () {
            var repository = this.selectedRepository;
            return repository && new uri_1.default(repository.localUri);
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], GitRepositoryTracker.prototype, "init", null);
    GitRepositoryTracker = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(common_1.Git)),
        __param(1, inversify_1.inject(git_repository_provider_1.GitRepositoryProvider)),
        __param(2, inversify_1.inject(git_watcher_1.GitWatcher)),
        __metadata("design:paramtypes", [Object, git_repository_provider_1.GitRepositoryProvider,
            git_watcher_1.GitWatcher])
    ], GitRepositoryTracker);
    return GitRepositoryTracker;
}());
exports.GitRepositoryTracker = GitRepositoryTracker;


/***/ }),

/***/ "./node_modules/@theia/git/lib/browser/git-resource-resolver.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@theia/git/lib/browser/git-resource-resolver.js ***!
  \**********************************************************************/
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
var common_1 = __webpack_require__(/*! ../common */ "./node_modules/@theia/git/lib/common/index.js");
var uri_1 = __webpack_require__(/*! @theia/core/lib/common/uri */ "./node_modules/@theia/core/lib/common/uri.js");
var git_repository_provider_1 = __webpack_require__(/*! ./git-repository-provider */ "./node_modules/@theia/git/lib/browser/git-repository-provider.js");
var git_resource_1 = __webpack_require__(/*! ./git-resource */ "./node_modules/@theia/git/lib/browser/git-resource.js");
var GitResourceResolver = /** @class */ (function () {
    function GitResourceResolver(git, repositoryProvider) {
        this.git = git;
        this.repositoryProvider = repositoryProvider;
    }
    GitResourceResolver.prototype.resolve = function (uri) {
        if (uri.scheme !== git_resource_1.GIT_RESOURCE_SCHEME) {
            throw new Error("Expected a URI with " + git_resource_1.GIT_RESOURCE_SCHEME + " scheme. Was: " + uri + ".");
        }
        return this.getResource(uri);
    };
    GitResourceResolver.prototype.getResource = function (uri) {
        return __awaiter(this, void 0, void 0, function () {
            var repository;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getRepository(uri)];
                    case 1:
                        repository = _a.sent();
                        return [2 /*return*/, new git_resource_1.GitResource(uri, repository, this.git)];
                }
            });
        });
    };
    GitResourceResolver.prototype.getRepository = function (uri) {
        return __awaiter(this, void 0, void 0, function () {
            var fileUri, repositories, sortedRepositories, sortedRepositories_1, sortedRepositories_1_1, repository, localUri, localUriStr;
            var e_1, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        fileUri = uri.withScheme('file');
                        repositories = this.repositoryProvider.allRepositories;
                        if (!(repositories.length === 0)) return [3 /*break*/, 2];
                        // So let's make sure, the repository provider state is in sync with the backend.
                        return [4 /*yield*/, this.repositoryProvider.refresh()];
                    case 1:
                        // So let's make sure, the repository provider state is in sync with the backend.
                        _b.sent();
                        repositories.push.apply(repositories, __spread(this.repositoryProvider.allRepositories));
                        _b.label = 2;
                    case 2:
                        sortedRepositories = repositories.sort(function (a, b) { return b.localUri.length - a.localUri.length; });
                        try {
                            for (sortedRepositories_1 = __values(sortedRepositories), sortedRepositories_1_1 = sortedRepositories_1.next(); !sortedRepositories_1_1.done; sortedRepositories_1_1 = sortedRepositories_1.next()) {
                                repository = sortedRepositories_1_1.value;
                                localUri = new uri_1.default(repository.localUri);
                                localUriStr = localUri.withScheme('file').toString();
                                if (fileUri.toString().startsWith(localUriStr)) {
                                    return [2 /*return*/, { localUri: localUriStr }];
                                }
                            }
                        }
                        catch (e_1_1) { e_1 = { error: e_1_1 }; }
                        finally {
                            try {
                                if (sortedRepositories_1_1 && !sortedRepositories_1_1.done && (_a = sortedRepositories_1.return)) _a.call(sortedRepositories_1);
                            }
                            finally { if (e_1) throw e_1.error; }
                        }
                        return [2 /*return*/, undefined];
                }
            });
        });
    };
    GitResourceResolver = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(common_1.Git)),
        __param(1, inversify_1.inject(git_repository_provider_1.GitRepositoryProvider)),
        __metadata("design:paramtypes", [Object, git_repository_provider_1.GitRepositoryProvider])
    ], GitResourceResolver);
    return GitResourceResolver;
}());
exports.GitResourceResolver = GitResourceResolver;


/***/ }),

/***/ "./node_modules/@theia/git/lib/browser/git-resource.js":
/*!*************************************************************!*\
  !*** ./node_modules/@theia/git/lib/browser/git-resource.js ***!
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
exports.GIT_RESOURCE_SCHEME = 'gitrev';
var GitResource = /** @class */ (function () {
    function GitResource(uri, repository, git) {
        this.uri = uri;
        this.repository = repository;
        this.git = git;
    }
    GitResource.prototype.readContents = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            var commitish;
            return __generator(this, function (_a) {
                if (this.repository) {
                    commitish = this.uri.query;
                    return [2 /*return*/, this.git.show(this.repository, this.uri.toString(), Object.assign({ commitish: commitish }, options))];
                }
                return [2 /*return*/, ''];
            });
        });
    };
    GitResource.prototype.dispose = function () { };
    return GitResource;
}());
exports.GitResource = GitResource;


/***/ }),

/***/ "./node_modules/@theia/git/lib/browser/git-scm-provider.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@theia/git/lib/browser/git-scm-provider.js ***!
  \*****************************************************************/
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
var uri_1 = __webpack_require__(/*! @theia/core/lib/common/uri */ "./node_modules/@theia/core/lib/common/uri.js");
var diff_uris_1 = __webpack_require__(/*! @theia/core/lib/browser/diff-uris */ "./node_modules/@theia/core/lib/browser/diff-uris.js");
var event_1 = __webpack_require__(/*! @theia/core/lib/common/event */ "./node_modules/@theia/core/lib/common/event.js");
var disposable_1 = __webpack_require__(/*! @theia/core/lib/common/disposable */ "./node_modules/@theia/core/lib/common/disposable.js");
var command_1 = __webpack_require__(/*! @theia/core/lib/common/command */ "./node_modules/@theia/core/lib/common/command.js");
var label_provider_1 = __webpack_require__(/*! @theia/core/lib/browser/label-provider */ "./node_modules/@theia/core/lib/browser/label-provider.js");
var dialogs_1 = __webpack_require__(/*! @theia/core/lib/browser/dialogs */ "./node_modules/@theia/core/lib/browser/dialogs.js");
var editor_manager_1 = __webpack_require__(/*! @theia/editor/lib/browser/editor-manager */ "./node_modules/@theia/editor/lib/browser/editor-manager.js");
var common_1 = __webpack_require__(/*! @theia/filesystem/lib/common */ "./node_modules/@theia/filesystem/lib/common/index.js");
var browser_1 = __webpack_require__(/*! @theia/workspace/lib/browser */ "./node_modules/@theia/workspace/lib/browser/index.js");
var common_2 = __webpack_require__(/*! ../common */ "./node_modules/@theia/git/lib/common/index.js");
var git_resource_1 = __webpack_require__(/*! ./git-resource */ "./node_modules/@theia/git/lib/browser/git-resource.js");
var git_error_handler_1 = __webpack_require__(/*! ./git-error-handler */ "./node_modules/@theia/git/lib/browser/git-error-handler.js");
var GitScmProviderOptions = /** @class */ (function () {
    function GitScmProviderOptions() {
    }
    GitScmProviderOptions = __decorate([
        inversify_1.injectable()
    ], GitScmProviderOptions);
    return GitScmProviderOptions;
}());
exports.GitScmProviderOptions = GitScmProviderOptions;
var GitScmProvider = /** @class */ (function () {
    function GitScmProvider() {
        this.onDidChangeEmitter = new event_1.Emitter();
        this.onDidChange = this.onDidChangeEmitter.event;
        this.onDidChangeStatusBarCommandsEmitter = new event_1.Emitter();
        this.onDidChangeStatusBarCommands = this.onDidChangeStatusBarCommandsEmitter.event;
        this.toDispose = new disposable_1.DisposableCollection(this.onDidChangeEmitter, this.onDidChangeStatusBarCommandsEmitter);
        this.id = 'git';
        this.label = 'Git';
        this.state = GitScmProvider_1.initState();
    }
    GitScmProvider_1 = GitScmProvider;
    GitScmProvider.prototype.fireDidChange = function () {
        this.onDidChangeEmitter.fire(undefined);
    };
    GitScmProvider.prototype.dispose = function () {
        this.toDispose.dispose();
    };
    GitScmProvider.prototype.init = function () {
        this._amendSupport = new GitAmendSupport(this.repository, this.git);
    };
    Object.defineProperty(GitScmProvider.prototype, "repository", {
        get: function () {
            return this.options.repository;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GitScmProvider.prototype, "rootUri", {
        get: function () {
            return this.repository.localUri;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GitScmProvider.prototype, "amendSupport", {
        get: function () {
            return this._amendSupport;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GitScmProvider.prototype, "acceptInputCommand", {
        get: function () {
            return {
                command: 'git.commit.all',
                tooltip: 'Commit all the staged changes',
                title: 'Commit'
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GitScmProvider.prototype, "statusBarCommands", {
        get: function () {
            return this._statusBarCommands;
        },
        set: function (statusBarCommands) {
            this._statusBarCommands = statusBarCommands;
            this.onDidChangeStatusBarCommandsEmitter.fire(statusBarCommands);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GitScmProvider.prototype, "groups", {
        get: function () {
            return this.state.groups;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GitScmProvider.prototype, "stagedChanges", {
        get: function () {
            return this.state.stagedChanges;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GitScmProvider.prototype, "unstagedChanges", {
        get: function () {
            return this.state.unstagedChanges;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GitScmProvider.prototype, "mergeChanges", {
        get: function () {
            return this.state.mergeChanges;
        },
        enumerable: true,
        configurable: true
    });
    GitScmProvider.prototype.getStatus = function () {
        return this.state.status;
    };
    GitScmProvider.prototype.setStatus = function (status, token) {
        return __awaiter(this, void 0, void 0, function () {
            var state, _a, _b, change, _c, _d, _e, _f, _g, _h;
            var e_1, _j;
            return __generator(this, function (_k) {
                switch (_k.label) {
                    case 0:
                        state = GitScmProvider_1.initState(status);
                        if (status) {
                            try {
                                for (_a = __values(status.changes), _b = _a.next(); !_b.done; _b = _a.next()) {
                                    change = _b.value;
                                    if (common_2.GitFileStatus[common_2.GitFileStatus.Conflicted.valueOf()] !== common_2.GitFileStatus[change.status]) {
                                        if (change.staged) {
                                            state.stagedChanges.push(change);
                                        }
                                        else {
                                            state.unstagedChanges.push(change);
                                        }
                                    }
                                    else {
                                        if (!change.staged) {
                                            state.mergeChanges.push(change);
                                        }
                                    }
                                }
                            }
                            catch (e_1_1) { e_1 = { error: e_1_1 }; }
                            finally {
                                try {
                                    if (_b && !_b.done && (_j = _a.return)) _j.call(_a);
                                }
                                finally { if (e_1) throw e_1.error; }
                            }
                        }
                        _d = (_c = state.groups).push;
                        return [4 /*yield*/, this.createGroup('merge', 'Merge Changes', state.mergeChanges, true)];
                    case 1:
                        _d.apply(_c, [_k.sent()]);
                        if (token.isCancellationRequested) {
                            return [2 /*return*/];
                        }
                        _f = (_e = state.groups).push;
                        return [4 /*yield*/, this.createGroup('index', 'Staged changes', state.stagedChanges, true)];
                    case 2:
                        _f.apply(_e, [_k.sent()]);
                        if (token.isCancellationRequested) {
                            return [2 /*return*/];
                        }
                        _h = (_g = state.groups).push;
                        return [4 /*yield*/, this.createGroup('workingTree', 'Changes', state.unstagedChanges, false)];
                    case 3:
                        _h.apply(_g, [_k.sent()]);
                        if (token.isCancellationRequested) {
                            return [2 /*return*/];
                        }
                        this.state = state;
                        this.fireDidChange();
                        return [2 /*return*/];
                }
            });
        });
    };
    GitScmProvider.prototype.createGroup = function (id, label, changes, hideWhenEmpty) {
        return __awaiter(this, void 0, void 0, function () {
            var group, creatingResources, changes_1, changes_1_1, change;
            var e_2, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        group = {
                            id: id,
                            label: label,
                            hideWhenEmpty: hideWhenEmpty,
                            provider: this,
                            resources: [],
                            dispose: function () { }
                        };
                        creatingResources = [];
                        try {
                            for (changes_1 = __values(changes), changes_1_1 = changes_1.next(); !changes_1_1.done; changes_1_1 = changes_1.next()) {
                                change = changes_1_1.value;
                                creatingResources.push(this.addScmResource(group, change));
                            }
                        }
                        catch (e_2_1) { e_2 = { error: e_2_1 }; }
                        finally {
                            try {
                                if (changes_1_1 && !changes_1_1.done && (_a = changes_1.return)) _a.call(changes_1);
                            }
                            finally { if (e_2) throw e_2.error; }
                        }
                        return [4 /*yield*/, Promise.all(creatingResources)];
                    case 1:
                        _b.sent();
                        return [2 /*return*/, group];
                }
            });
        });
    };
    GitScmProvider.prototype.addScmResource = function (group, change) {
        return __awaiter(this, void 0, void 0, function () {
            var sourceUri, icon;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        sourceUri = new uri_1.default(change.uri);
                        return [4 /*yield*/, this.labelProvider.getIcon(sourceUri)];
                    case 1:
                        icon = _a.sent();
                        group.resources.push({
                            group: group,
                            sourceUri: sourceUri,
                            decorations: {
                                icon: icon,
                                letter: common_2.GitFileStatus.toAbbreviation(change.status, change.staged),
                                color: common_2.GitFileStatus.getColor(change.status, change.staged),
                                tooltip: common_2.GitFileStatus.toString(change.status)
                            },
                            open: function () { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                                return [2 /*return*/, this.open(change, { mode: 'reveal' })];
                            }); }); }
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    GitScmProvider.prototype.open = function (change, options) {
        return __awaiter(this, void 0, void 0, function () {
            var uriToOpen;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uriToOpen = this.getUriToOpen(change);
                        return [4 /*yield*/, this.editorManager.open(uriToOpen, options)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    GitScmProvider.prototype.getUriToOpen = function (change) {
        var changeUri = new uri_1.default(change.uri);
        if (change.status !== common_2.GitFileStatus.New) {
            if (change.staged) {
                return diff_uris_1.DiffUris.encode(changeUri.withScheme(git_resource_1.GIT_RESOURCE_SCHEME).withQuery('HEAD'), changeUri.withScheme(git_resource_1.GIT_RESOURCE_SCHEME), changeUri.displayName + ' (Index)');
            }
            if (this.stagedChanges.find(function (c) { return c.uri === change.uri; })) {
                return diff_uris_1.DiffUris.encode(changeUri.withScheme(git_resource_1.GIT_RESOURCE_SCHEME), changeUri, changeUri.displayName + ' (Working tree)');
            }
            if (this.mergeChanges.find(function (c) { return c.uri === change.uri; })) {
                return changeUri;
            }
            return diff_uris_1.DiffUris.encode(changeUri.withScheme(git_resource_1.GIT_RESOURCE_SCHEME).withQuery('HEAD'), changeUri, changeUri.displayName + ' (Working tree)');
        }
        if (change.staged) {
            return changeUri.withScheme(git_resource_1.GIT_RESOURCE_SCHEME);
        }
        if (this.stagedChanges.find(function (c) { return c.uri === change.uri; })) {
            return diff_uris_1.DiffUris.encode(changeUri.withScheme(git_resource_1.GIT_RESOURCE_SCHEME), changeUri, changeUri.displayName + ' (Working tree)');
        }
        return changeUri;
    };
    GitScmProvider.prototype.openChange = function (change, options) {
        return __awaiter(this, void 0, void 0, function () {
            var uriToOpen;
            return __generator(this, function (_a) {
                uriToOpen = this.getUriToOpen(change);
                return [2 /*return*/, this.editorManager.open(uriToOpen, options)];
            });
        });
    };
    GitScmProvider.prototype.findChange = function (uri) {
        var stringUri = uri.toString();
        var merge = this.mergeChanges.find(function (c) { return c.uri.toString() === stringUri; });
        if (merge) {
            return merge;
        }
        var unstaged = this.unstagedChanges.find(function (c) { return c.uri.toString() === stringUri; });
        if (unstaged) {
            return unstaged;
        }
        return this.stagedChanges.find(function (c) { return c.uri.toString() === stringUri; });
    };
    GitScmProvider.prototype.stageAll = function () {
        return __awaiter(this, void 0, void 0, function () {
            var error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        // TODO resolve deletion conflicts
                        // TODO confirm staging unresolved files
                        return [4 /*yield*/, this.git.add(this.repository, [])];
                    case 1:
                        // TODO resolve deletion conflicts
                        // TODO confirm staging unresolved files
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        this.gitErrorHandler.handleError(error_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    GitScmProvider.prototype.stage = function (uri) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, repository, unstagedChanges, mergeChanges, hasUnstagedChanges, error_2;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 3, , 4]);
                        _a = this, repository = _a.repository, unstagedChanges = _a.unstagedChanges, mergeChanges = _a.mergeChanges;
                        hasUnstagedChanges = unstagedChanges.some(function (change) { return change.uri === uri; }) || mergeChanges.some(function (change) { return change.uri === uri; });
                        if (!hasUnstagedChanges) return [3 /*break*/, 2];
                        // TODO resolve deletion conflicts
                        // TODO confirm staging of a unresolved file
                        return [4 /*yield*/, this.git.add(repository, uri)];
                    case 1:
                        // TODO resolve deletion conflicts
                        // TODO confirm staging of a unresolved file
                        _b.sent();
                        _b.label = 2;
                    case 2: return [3 /*break*/, 4];
                    case 3:
                        error_2 = _b.sent();
                        this.gitErrorHandler.handleError(error_2);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    GitScmProvider.prototype.unstageAll = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, repository, stagedChanges, uris, error_3;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        _a = this, repository = _a.repository, stagedChanges = _a.stagedChanges;
                        uris = stagedChanges.map(function (c) { return c.uri; });
                        return [4 /*yield*/, this.git.unstage(repository, uris)];
                    case 1:
                        _b.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        error_3 = _b.sent();
                        this.gitErrorHandler.handleError(error_3);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    GitScmProvider.prototype.unstage = function (uri) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, repository, stagedChanges, error_4;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 3, , 4]);
                        _a = this, repository = _a.repository, stagedChanges = _a.stagedChanges;
                        if (!stagedChanges.some(function (change) { return change.uri === uri; })) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.git.unstage(repository, uri)];
                    case 1:
                        _b.sent();
                        _b.label = 2;
                    case 2: return [3 /*break*/, 4];
                    case 3:
                        error_4 = _b.sent();
                        this.gitErrorHandler.handleError(error_4);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    GitScmProvider.prototype.discardAll = function () {
        return __awaiter(this, void 0, void 0, function () {
            var newUris, uris, error_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.confirmAll()];
                    case 1:
                        if (!_a.sent()) return [3 /*break*/, 5];
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        newUris = this.unstagedChanges.filter(function (c) { return c.status === common_2.GitFileStatus.New; }).map(function (c) { return c.uri; });
                        this.deleteAll(newUris);
                        uris = this.unstagedChanges.map(function (c) { return c.uri; });
                        return [4 /*yield*/, this.git.unstage(this.repository, uris, { treeish: 'HEAD', reset: 'working-tree' })];
                    case 3:
                        _a.sent();
                        return [3 /*break*/, 5];
                    case 4:
                        error_5 = _a.sent();
                        this.gitErrorHandler.handleError(error_5);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    GitScmProvider.prototype.discard = function (uri) {
        return __awaiter(this, void 0, void 0, function () {
            var repository, status, error_6;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        repository = this.repository;
                        status = this.getStatus();
                        if (!(status && status.changes.some(function (change) { return change.uri === uri; }))) {
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.git.lsFiles(repository, uri, { errorUnmatch: true })];
                    case 1:
                        if (!_a.sent()) return [3 /*break*/, 7];
                        return [4 /*yield*/, this.confirm(uri)];
                    case 2:
                        if (!_a.sent()) return [3 /*break*/, 6];
                        _a.label = 3;
                    case 3:
                        _a.trys.push([3, 5, , 6]);
                        return [4 /*yield*/, this.git.unstage(repository, uri, { treeish: 'HEAD', reset: 'working-tree' })];
                    case 4:
                        _a.sent();
                        return [3 /*break*/, 6];
                    case 5:
                        error_6 = _a.sent();
                        this.gitErrorHandler.handleError(error_6);
                        return [3 /*break*/, 6];
                    case 6: return [3 /*break*/, 9];
                    case 7: return [4 /*yield*/, this.commands.executeCommand(browser_1.WorkspaceCommands.FILE_DELETE.id, new uri_1.default(uri))];
                    case 8:
                        _a.sent();
                        _a.label = 9;
                    case 9: return [2 /*return*/];
                }
            });
        });
    };
    GitScmProvider.prototype.confirm = function (path) {
        var uri = new uri_1.default(path);
        return new dialogs_1.ConfirmDialog({
            title: 'Discard changes',
            msg: "Do you really want to discard changes in " + uri.displayName + "?"
        }).open();
    };
    GitScmProvider.prototype.confirmAll = function () {
        return new dialogs_1.ConfirmDialog({
            title: 'Discard All Changes',
            msg: 'Do you really want to discard all changes?'
        }).open();
    };
    GitScmProvider.prototype.delete = function (uri) {
        return __awaiter(this, void 0, void 0, function () {
            var e_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.fileSystem.delete(uri.toString())];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        e_3 = _a.sent();
                        console.error(e_3);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    GitScmProvider.prototype.deleteAll = function (uris) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Promise.all(uris.map(function (uri) { return _this.delete(new uri_1.default(uri)); }))];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    var GitScmProvider_1;
    __decorate([
        inversify_1.inject(editor_manager_1.EditorManager),
        __metadata("design:type", editor_manager_1.EditorManager)
    ], GitScmProvider.prototype, "editorManager", void 0);
    __decorate([
        inversify_1.inject(git_error_handler_1.GitErrorHandler),
        __metadata("design:type", git_error_handler_1.GitErrorHandler)
    ], GitScmProvider.prototype, "gitErrorHandler", void 0);
    __decorate([
        inversify_1.inject(common_1.FileSystem),
        __metadata("design:type", Object)
    ], GitScmProvider.prototype, "fileSystem", void 0);
    __decorate([
        inversify_1.inject(common_2.Git),
        __metadata("design:type", Object)
    ], GitScmProvider.prototype, "git", void 0);
    __decorate([
        inversify_1.inject(command_1.CommandService),
        __metadata("design:type", Object)
    ], GitScmProvider.prototype, "commands", void 0);
    __decorate([
        inversify_1.inject(label_provider_1.LabelProvider),
        __metadata("design:type", label_provider_1.LabelProvider)
    ], GitScmProvider.prototype, "labelProvider", void 0);
    __decorate([
        inversify_1.inject(GitScmProviderOptions),
        __metadata("design:type", GitScmProviderOptions)
    ], GitScmProvider.prototype, "options", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], GitScmProvider.prototype, "init", null);
    GitScmProvider = GitScmProvider_1 = __decorate([
        inversify_1.injectable()
    ], GitScmProvider);
    return GitScmProvider;
}());
exports.GitScmProvider = GitScmProvider;
(function (GitScmProvider) {
    function initState(status) {
        return {
            status: status,
            stagedChanges: [],
            unstagedChanges: [],
            mergeChanges: [],
            groups: []
        };
    }
    GitScmProvider.initState = initState;
    GitScmProvider.Factory = Symbol('GitScmProvider.Factory');
    function createFactory(ctx) {
        return function (options) {
            var container = ctx.container.createChild();
            container.bind(GitScmProviderOptions).toConstantValue(options);
            container.bind(GitScmProvider).toSelf().inSingletonScope();
            return container.get(GitScmProvider);
        };
    }
    GitScmProvider.createFactory = createFactory;
})(GitScmProvider = exports.GitScmProvider || (exports.GitScmProvider = {}));
exports.GitScmProvider = GitScmProvider;
var GitAmendSupport = /** @class */ (function () {
    function GitAmendSupport(repository, git) {
        this.repository = repository;
        this.git = git;
    }
    GitAmendSupport.prototype.getInitialAmendingCommits = function (amendingHeadCommitSha, latestCommitSha) {
        return __awaiter(this, void 0, void 0, function () {
            var commits;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.git.log(this.repository, {
                            range: { toRevision: amendingHeadCommitSha, fromRevision: latestCommitSha },
                            firstParent: true,
                            maxCount: 50
                        })];
                    case 1:
                        commits = _a.sent();
                        return [2 /*return*/, commits.map(this.createScmCommit)];
                }
            });
        });
    };
    GitAmendSupport.prototype.getMessage = function (commit) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.git.exec(this.repository, ['log', '-n', '1', '--format=%B', commit])];
                    case 1: return [2 /*return*/, (_a.sent()).stdout.trim()];
                }
            });
        });
    };
    GitAmendSupport.prototype.reset = function (commit) {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = commit === 'HEAD~';
                        if (!_a) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.isHeadInitialCommit()];
                    case 1:
                        _a = (_b.sent());
                        _b.label = 2;
                    case 2:
                        if (!_a) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.git.exec(this.repository, ['update-ref', '-d', 'HEAD'])];
                    case 3:
                        _b.sent();
                        return [3 /*break*/, 6];
                    case 4: return [4 /*yield*/, this.git.exec(this.repository, ['reset', commit, '--soft'])];
                    case 5:
                        _b.sent();
                        _b.label = 6;
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    GitAmendSupport.prototype.isHeadInitialCommit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.git.revParse(this.repository, { ref: 'HEAD~' })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, !result];
                }
            });
        });
    };
    GitAmendSupport.prototype.getLastCommit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var commits;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.git.log(this.repository, { maxCount: 1 })];
                    case 1:
                        commits = _a.sent();
                        if (commits.length > 0) {
                            return [2 /*return*/, this.createScmCommit(commits[0])];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    GitAmendSupport.prototype.createScmCommit = function (gitCommit) {
        return {
            id: gitCommit.sha,
            summary: gitCommit.summary,
            authorName: gitCommit.author.name,
            authorEmail: gitCommit.author.email,
            authorDateRelative: gitCommit.authorDateRelative
        };
    };
    return GitAmendSupport;
}());
exports.GitAmendSupport = GitAmendSupport;


/***/ }),

/***/ "./node_modules/@theia/git/lib/browser/git-sync-service.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@theia/git/lib/browser/git-sync-service.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2018 TypeFox and others.
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
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var core_1 = __webpack_require__(/*! @theia/core */ "./node_modules/@theia/core/lib/common/index.js");
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "./node_modules/@theia/core/lib/browser/index.js");
var git_repository_tracker_1 = __webpack_require__(/*! ./git-repository-tracker */ "./node_modules/@theia/git/lib/browser/git-repository-tracker.js");
var common_1 = __webpack_require__(/*! ../common */ "./node_modules/@theia/git/lib/common/index.js");
var git_error_handler_1 = __webpack_require__(/*! ./git-error-handler */ "./node_modules/@theia/git/lib/browser/git-error-handler.js");
var GitSyncService = /** @class */ (function () {
    function GitSyncService() {
        this.onDidChangeEmitter = new core_1.Emitter();
        this.onDidChange = this.onDidChangeEmitter.event;
        this.syncing = false;
    }
    GitSyncService.prototype.fireDidChange = function () {
        this.onDidChangeEmitter.fire(undefined);
    };
    GitSyncService.prototype.isSyncing = function () {
        return this.syncing;
    };
    GitSyncService.prototype.setSyncing = function (syncing) {
        this.syncing = syncing;
        this.fireDidChange();
    };
    GitSyncService.prototype.canSync = function () {
        if (this.isSyncing()) {
            return false;
        }
        var status = this.repositoryTracker.selectedRepositoryStatus;
        return !!status && !!status.branch && !!status.upstreamBranch;
    };
    GitSyncService.prototype.sync = function () {
        return __awaiter(this, void 0, void 0, function () {
            var repository, status_1, method, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        repository = this.repositoryTracker.selectedRepository;
                        if (!this.canSync() || !repository) {
                            return [2 /*return*/];
                        }
                        this.setSyncing(true);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 10, 11, 12]);
                        return [4 /*yield*/, this.git.fetch(repository)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.git.status(repository)];
                    case 3:
                        status_1 = _a.sent();
                        this.setSyncing(false);
                        return [4 /*yield*/, this.getSyncMethod(status_1)];
                    case 4:
                        method = _a.sent();
                        if (method === undefined) {
                            return [2 /*return*/];
                        }
                        this.setSyncing(true);
                        if (!(method === 'pull-push' || method === 'rebase-push')) return [3 /*break*/, 7];
                        return [4 /*yield*/, this.git.pull(repository, {
                                rebase: method === 'rebase-push'
                            })];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, this.git.status(repository)];
                    case 6:
                        status_1 = _a.sent();
                        _a.label = 7;
                    case 7:
                        if (!this.shouldPush(status_1)) return [3 /*break*/, 9];
                        return [4 /*yield*/, this.git.push(repository, {
                                force: method === 'force-push'
                            })];
                    case 8:
                        _a.sent();
                        _a.label = 9;
                    case 9: return [3 /*break*/, 12];
                    case 10:
                        error_1 = _a.sent();
                        this.gitErrorHandler.handleError(error_1);
                        return [3 /*break*/, 12];
                    case 11:
                        this.setSyncing(false);
                        return [7 /*endfinally*/];
                    case 12: return [2 /*return*/];
                }
            });
        });
    };
    GitSyncService.prototype.getSyncMethod = function (status) {
        return __awaiter(this, void 0, void 0, function () {
            var branch, upstreamBranch, methods, method, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!status.upstreamBranch || !status.branch) {
                            return [2 /*return*/, undefined];
                        }
                        branch = status.branch, upstreamBranch = status.upstreamBranch;
                        if (!this.shouldPull(status) && !this.shouldPush(status)) {
                            this.messageService.info(branch + " is already in sync with " + upstreamBranch);
                            return [2 /*return*/, undefined];
                        }
                        methods = [{
                                label: "Pull and push commits from and to '" + upstreamBranch + "'",
                                warning: "This action will pull and push commits from and to '" + upstreamBranch + "'.",
                                value: 'pull-push'
                            }, {
                                label: "Fetch, rebase and push commits from and to '" + upstreamBranch + "'",
                                warning: "This action will fetch, rebase and push commits from and to '" + upstreamBranch + "'.",
                                value: 'rebase-push'
                            }, {
                                label: "Force push commits to '" + upstreamBranch + "'",
                                warning: "This action will override commits in '" + upstreamBranch + "'.",
                                value: 'force-push'
                            }];
                        return [4 /*yield*/, this.quickPickService.show(methods, {
                                placeholder: 'Pick how changes should be synchronized:'
                            })];
                    case 1:
                        method = _b.sent();
                        _a = method;
                        if (!_a) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.confirm('Synchronize Changes', methods.find(function (_a) {
                                var value = _a.value;
                                return value === method;
                            }).warning)];
                    case 2:
                        _a = (_b.sent());
                        _b.label = 3;
                    case 3:
                        if (_a) {
                            return [2 /*return*/, method];
                        }
                        return [2 /*return*/, undefined];
                }
            });
        });
    };
    GitSyncService.prototype.canPublish = function () {
        if (this.isSyncing()) {
            return false;
        }
        var status = this.repositoryTracker.selectedRepositoryStatus;
        return !!status && !!status.branch && !status.upstreamBranch;
    };
    GitSyncService.prototype.publish = function () {
        return __awaiter(this, void 0, void 0, function () {
            var repository, status, localBranch, remote, _a, error_2;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        repository = this.repositoryTracker.selectedRepository;
                        status = this.repositoryTracker.selectedRepositoryStatus;
                        localBranch = status && status.branch;
                        if (!this.canPublish() || !repository || !localBranch) {
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.getRemote(repository, localBranch)];
                    case 1:
                        remote = _b.sent();
                        _a = remote;
                        if (!_a) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.confirm('Publish changes', "This action will push commits to '" + remote + "/" + localBranch + "' and track it as an upstream branch.")];
                    case 2:
                        _a = (_b.sent());
                        _b.label = 3;
                    case 3:
                        if (!_a) return [3 /*break*/, 7];
                        _b.label = 4;
                    case 4:
                        _b.trys.push([4, 6, , 7]);
                        return [4 /*yield*/, this.git.push(repository, {
                                remote: remote, localBranch: localBranch, setUpstream: true
                            })];
                    case 5:
                        _b.sent();
                        return [3 /*break*/, 7];
                    case 6:
                        error_2 = _b.sent();
                        this.gitErrorHandler.handleError(error_2);
                        return [3 /*break*/, 7];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    GitSyncService.prototype.getRemote = function (repository, branch) {
        return __awaiter(this, void 0, void 0, function () {
            var remotes;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.git.remote(repository)];
                    case 1:
                        remotes = _a.sent();
                        if (remotes.length === 0) {
                            this.messageService.warn('Your repository has no remotes configured to publish to.');
                        }
                        return [2 /*return*/, this.quickPickService.show(remotes, {
                                placeholder: "Pick a remote to publish the branch " + branch + " to:"
                            })];
                }
            });
        });
    };
    GitSyncService.prototype.shouldPush = function (status) {
        return status.aheadBehind ? status.aheadBehind.ahead > 0 : true;
    };
    GitSyncService.prototype.shouldPull = function (status) {
        return status.aheadBehind ? status.aheadBehind.behind > 0 : true;
    };
    GitSyncService.prototype.confirm = function (title, msg) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new browser_1.ConfirmDialog({ title: title, msg: msg, }).open()];
                    case 1: return [2 /*return*/, !!(_a.sent())];
                }
            });
        });
    };
    __decorate([
        inversify_1.inject(common_1.Git),
        __metadata("design:type", Object)
    ], GitSyncService.prototype, "git", void 0);
    __decorate([
        inversify_1.inject(git_repository_tracker_1.GitRepositoryTracker),
        __metadata("design:type", git_repository_tracker_1.GitRepositoryTracker)
    ], GitSyncService.prototype, "repositoryTracker", void 0);
    __decorate([
        inversify_1.inject(core_1.MessageService),
        __metadata("design:type", core_1.MessageService)
    ], GitSyncService.prototype, "messageService", void 0);
    __decorate([
        inversify_1.inject(git_error_handler_1.GitErrorHandler),
        __metadata("design:type", git_error_handler_1.GitErrorHandler)
    ], GitSyncService.prototype, "gitErrorHandler", void 0);
    __decorate([
        inversify_1.inject(browser_1.QuickPickService),
        __metadata("design:type", Object)
    ], GitSyncService.prototype, "quickPickService", void 0);
    GitSyncService = __decorate([
        inversify_1.injectable()
    ], GitSyncService);
    return GitSyncService;
}());
exports.GitSyncService = GitSyncService;


/***/ }),

/***/ "./node_modules/@theia/git/lib/browser/git-uri-label-contribution.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@theia/git/lib/browser/git-uri-label-contribution.js ***!
  \***************************************************************************/
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
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var label_provider_1 = __webpack_require__(/*! @theia/core/lib/browser/label-provider */ "./node_modules/@theia/core/lib/browser/label-provider.js");
var uri_1 = __webpack_require__(/*! @theia/core/lib/common/uri */ "./node_modules/@theia/core/lib/common/uri.js");
var git_resource_1 = __webpack_require__(/*! ./git-resource */ "./node_modules/@theia/git/lib/browser/git-resource.js");
var GitUriLabelProviderContribution = /** @class */ (function () {
    function GitUriLabelProviderContribution(labelProvider) {
        this.labelProvider = labelProvider;
    }
    GitUriLabelProviderContribution.prototype.canHandle = function (element) {
        if (element instanceof uri_1.default && element.scheme === git_resource_1.GIT_RESOURCE_SCHEME) {
            return 20;
        }
        return 0;
    };
    GitUriLabelProviderContribution.prototype.getLongName = function (uri) {
        return this.labelProvider.getLongName(this.toFileUri(uri).withoutQuery().withoutFragment());
    };
    GitUriLabelProviderContribution.prototype.getName = function (uri) {
        return this.labelProvider.getName(this.toFileUri(uri)) + this.getTagSuffix(uri);
    };
    GitUriLabelProviderContribution.prototype.getIcon = function (uri) {
        return this.labelProvider.getIcon(this.toFileUri(uri));
    };
    GitUriLabelProviderContribution.prototype.getConstituentUris = function (element) {
        var fileUri = this.toFileUri(element);
        return [
            fileUri,
            fileUri.withoutQuery().withoutFragment(),
        ];
    };
    GitUriLabelProviderContribution.prototype.toFileUri = function (uri) {
        return uri.withScheme('file');
    };
    GitUriLabelProviderContribution.prototype.getTagSuffix = function (uri) {
        if (uri.query) {
            return " (" + uri.query + ")";
        }
        else {
            return '';
        }
    };
    GitUriLabelProviderContribution = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(label_provider_1.LabelProvider)),
        __metadata("design:paramtypes", [label_provider_1.LabelProvider])
    ], GitUriLabelProviderContribution);
    return GitUriLabelProviderContribution;
}());
exports.GitUriLabelProviderContribution = GitUriLabelProviderContribution;


/***/ }),

/***/ "./node_modules/@theia/git/lib/browser/history/git-commit-detail-open-handler.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@theia/git/lib/browser/history/git-commit-detail-open-handler.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2018 TypeFox and others.
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
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "./node_modules/@theia/core/lib/browser/index.js");
var uri_1 = __webpack_require__(/*! @theia/core/lib/common/uri */ "./node_modules/@theia/core/lib/common/uri.js");
var git_commit_detail_widget_1 = __webpack_require__(/*! ./git-commit-detail-widget */ "./node_modules/@theia/git/lib/browser/history/git-commit-detail-widget.js");
var GitCommitDetailUri;
(function (GitCommitDetailUri) {
    GitCommitDetailUri.scheme = git_commit_detail_widget_1.GIT_COMMIT_DETAIL;
    function toUri(commitSha) {
        return new uri_1.default('').withScheme(GitCommitDetailUri.scheme).withFragment(commitSha);
    }
    GitCommitDetailUri.toUri = toUri;
    function toCommitSha(uri) {
        if (uri.scheme === GitCommitDetailUri.scheme) {
            return uri.fragment;
        }
        throw new Error('The given uri is not an commit detail URI, uri: ' + uri);
    }
    GitCommitDetailUri.toCommitSha = toCommitSha;
})(GitCommitDetailUri = exports.GitCommitDetailUri || (exports.GitCommitDetailUri = {}));
var GitCommitDetailOpenHandler = /** @class */ (function (_super) {
    __extends(GitCommitDetailOpenHandler, _super);
    function GitCommitDetailOpenHandler() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.id = git_commit_detail_widget_1.GIT_COMMIT_DETAIL;
        return _this;
    }
    GitCommitDetailOpenHandler.prototype.canHandle = function (uri) {
        try {
            GitCommitDetailUri.toCommitSha(uri);
            return 200;
        }
        catch (_a) {
            return 0;
        }
    };
    GitCommitDetailOpenHandler.prototype.doOpen = function (widget, options) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        widget.setContent({ range: options.range });
                        return [4 /*yield*/, _super.prototype.doOpen.call(this, widget, options)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    GitCommitDetailOpenHandler.prototype.createWidgetOptions = function (uri, commit) {
        return this.getCommitDetailWidgetOptions(commit);
    };
    GitCommitDetailOpenHandler.prototype.getCommitDetailWidgetOptions = function (commit) {
        var range = {
            fromRevision: commit.commitSha + '~1',
            toRevision: commit.commitSha
        };
        return {
            range: range,
            authorAvatar: commit.authorAvatar,
            authorDate: commit.authorDate,
            authorDateRelative: commit.authorDateRelative,
            authorEmail: commit.authorEmail,
            authorName: commit.authorName,
            commitMessage: commit.commitMessage,
            fileChangeNodes: commit.fileChangeNodes,
            messageBody: commit.messageBody,
            commitSha: commit.commitSha
        };
    };
    GitCommitDetailOpenHandler = __decorate([
        inversify_1.injectable()
    ], GitCommitDetailOpenHandler);
    return GitCommitDetailOpenHandler;
}(browser_1.WidgetOpenHandler));
exports.GitCommitDetailOpenHandler = GitCommitDetailOpenHandler;


/***/ }),

/***/ "./node_modules/@theia/git/lib/browser/history/git-commit-detail-widget.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@theia/git/lib/browser/history/git-commit-detail-widget.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2018 TypeFox and others.
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
var widgets_1 = __webpack_require__(/*! @phosphor/widgets */ "./node_modules/@phosphor/widgets/lib/index.js");
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "./node_modules/@theia/core/lib/browser/index.js");
var git_diff_widget_1 = __webpack_require__(/*! ../diff/git-diff-widget */ "./node_modules/@theia/git/lib/browser/diff/git-diff-widget.js");
var git_repository_provider_1 = __webpack_require__(/*! ../git-repository-provider */ "./node_modules/@theia/git/lib/browser/git-repository-provider.js");
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
exports.GIT_COMMIT_DETAIL = 'git-commit-detail-widget';
exports.GitCommitDetailWidgetOptions = Symbol('GitCommitDetailWidgetOptions');
var GitCommitDetailWidget = /** @class */ (function (_super) {
    __extends(GitCommitDetailWidget, _super);
    function GitCommitDetailWidget(repositoryProvider, labelProvider, commitDetailOptions) {
        var _this = _super.call(this) || this;
        _this.repositoryProvider = repositoryProvider;
        _this.labelProvider = labelProvider;
        _this.commitDetailOptions = commitDetailOptions;
        _this.id = 'commit' + commitDetailOptions.commitSha;
        _this.title.label = commitDetailOptions.commitSha;
        _this.options = { range: commitDetailOptions.range };
        _this.title.closable = true;
        _this.title.iconClass = 'icon-git-commit tab-git-icon';
        return _this;
    }
    GitCommitDetailWidget.prototype.renderDiffListHeader = function () {
        var authorEMail = this.commitDetailOptions.authorEmail;
        var subject = React.createElement("div", { className: 'subject' }, this.commitDetailOptions.commitMessage);
        var body = React.createElement("div", { className: 'body' }, this.commitDetailOptions.messageBody || '');
        var subjectRow = React.createElement("div", { className: 'header-row' },
            React.createElement("div", { className: 'subjectContainer' },
                subject,
                body));
        var author = React.createElement("div", { className: 'author header-value noWrapInfo' }, this.commitDetailOptions.authorName);
        var mail = React.createElement("div", { className: 'mail header-value noWrapInfo' }, "<" + authorEMail + ">");
        var authorRow = React.createElement("div", { className: 'header-row noWrapInfo' },
            React.createElement("div", { className: 'theia-header' }, "author: "),
            author);
        var mailRow = React.createElement("div", { className: 'header-row noWrapInfo' },
            React.createElement("div", { className: 'theia-header' }, "e-mail: "),
            mail);
        var authorDate = new Date(this.commitDetailOptions.authorDate);
        var dateStr = authorDate.toLocaleDateString('en', {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
            hour12: true,
            hour: 'numeric',
            minute: 'numeric'
        });
        var date = React.createElement("div", { className: 'date header-value noWrapInfo' }, dateStr);
        var dateRow = React.createElement("div", { className: 'header-row noWrapInfo' },
            React.createElement("div", { className: 'theia-header' }, "date: "),
            date);
        var revisionRow = React.createElement("div", { className: 'header-row noWrapInfo' },
            React.createElement("div", { className: 'theia-header' }, "revision: "),
            React.createElement("div", { className: 'header-value noWrapInfo' }, this.commitDetailOptions.commitSha));
        var gravatar = React.createElement("div", { className: 'image-container' },
            React.createElement("img", { className: 'gravatar', src: this.commitDetailOptions.authorAvatar }));
        var commitInfo = React.createElement("div", { className: 'header-row commit-info-row' },
            gravatar,
            React.createElement("div", { className: 'commit-info' },
                authorRow,
                mailRow,
                dateRow,
                revisionRow));
        var header = React.createElement("div", { className: 'theia-header' }, "Files changed");
        return React.createElement("div", { className: 'diff-header' },
            subjectRow,
            commitInfo,
            header);
    };
    GitCommitDetailWidget.prototype.revealChange = function (change) {
        return __awaiter(this, void 0, void 0, function () {
            var ref, widget;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        ref = this.ref;
                        return [4 /*yield*/, this.openChange(change, {
                                mode: 'reveal',
                                widgetOptions: ref ?
                                    { area: 'main', mode: 'tab-after', ref: ref } :
                                    { area: 'main', mode: 'split-right', ref: this }
                            })];
                    case 1:
                        widget = _a.sent();
                        this.ref = widget instanceof widgets_1.Widget ? widget : undefined;
                        if (this.ref) {
                            this.ref.disposed.connect(function () {
                                if (_this.ref === widget) {
                                    _this.ref = undefined;
                                }
                            });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    GitCommitDetailWidget = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(git_repository_provider_1.GitRepositoryProvider)),
        __param(1, inversify_1.inject(browser_1.LabelProvider)),
        __param(2, inversify_1.inject(exports.GitCommitDetailWidgetOptions)),
        __metadata("design:paramtypes", [git_repository_provider_1.GitRepositoryProvider,
            browser_1.LabelProvider, Object])
    ], GitCommitDetailWidget);
    return GitCommitDetailWidget;
}(git_diff_widget_1.GitDiffWidget));
exports.GitCommitDetailWidget = GitCommitDetailWidget;


/***/ }),

/***/ "./node_modules/@theia/git/lib/browser/history/git-history-contribution.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@theia/git/lib/browser/history/git-history-contribution.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2018 TypeFox and others.
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
var core_1 = __webpack_require__(/*! @theia/core */ "./node_modules/@theia/core/lib/common/index.js");
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "./node_modules/@theia/core/lib/browser/index.js");
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var navigator_contribution_1 = __webpack_require__(/*! @theia/navigator/lib/browser/navigator-contribution */ "./node_modules/@theia/navigator/lib/browser/navigator-contribution.js");
var uri_command_handler_1 = __webpack_require__(/*! @theia/core/lib/common/uri-command-handler */ "./node_modules/@theia/core/lib/common/uri-command-handler.js");
var git_repository_tracker_1 = __webpack_require__(/*! ../git-repository-tracker */ "./node_modules/@theia/git/lib/browser/git-repository-tracker.js");
var git_repository_provider_1 = __webpack_require__(/*! ../git-repository-provider */ "./node_modules/@theia/git/lib/browser/git-repository-provider.js");
var git_contribution_1 = __webpack_require__(/*! ../git-contribution */ "./node_modules/@theia/git/lib/browser/git-contribution.js");
exports.GIT_HISTORY_ID = 'git-history';
exports.GIT_HISTORY_LABEL = 'Git History';
exports.GIT_HISTORY_TOGGLE_KEYBINDING = 'alt+h';
exports.GIT_HISTORY_MAX_COUNT = 100;
var GitHistoryCommands;
(function (GitHistoryCommands) {
    GitHistoryCommands.OPEN_FILE_HISTORY = {
        id: 'git-history:open-file-history',
    };
    GitHistoryCommands.OPEN_BRANCH_HISTORY = {
        id: 'git-history:open-branch-history',
        label: exports.GIT_HISTORY_LABEL
    };
})(GitHistoryCommands = exports.GitHistoryCommands || (exports.GitHistoryCommands = {}));
var GitHistoryContribution = /** @class */ (function (_super) {
    __extends(GitHistoryContribution, _super);
    function GitHistoryContribution() {
        return _super.call(this, {
            widgetId: exports.GIT_HISTORY_ID,
            widgetName: exports.GIT_HISTORY_LABEL,
            defaultWidgetOptions: {
                area: 'left',
                rank: 500
            },
            toggleCommandId: GitHistoryCommands.OPEN_BRANCH_HISTORY.id,
            toggleKeybinding: exports.GIT_HISTORY_TOGGLE_KEYBINDING
        }) || this;
    }
    GitHistoryContribution.prototype.init = function () {
        var _this = this;
        this.repositoryTracker.onDidChangeRepository(function (repository) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.refreshWidget(repository ? repository.localUri : undefined);
                return [2 /*return*/];
            });
        }); });
        this.repositoryTracker.onGitEvent(function (event) {
            var _a = event || { source: undefined, status: undefined, oldStatus: undefined }, source = _a.source, status = _a.status, oldStatus = _a.oldStatus;
            var isBranchChanged = false;
            var isHeaderChanged = false;
            if (oldStatus) {
                isBranchChanged = !!status && status.branch !== oldStatus.branch;
                isHeaderChanged = !!status && status.currentHead !== oldStatus.currentHead;
            }
            if (isBranchChanged || isHeaderChanged || oldStatus === undefined) {
                _this.refreshWidget(source && source.localUri);
            }
        });
    };
    GitHistoryContribution.prototype.openView = function (args) {
        return __awaiter(this, void 0, void 0, function () {
            var widget;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, _super.prototype.openView.call(this, args)];
                    case 1:
                        widget = _a.sent();
                        this.refreshWidget(args.uri);
                        return [2 /*return*/, widget];
                }
            });
        });
    };
    GitHistoryContribution.prototype.registerMenus = function (menus) {
        menus.registerMenuAction(navigator_contribution_1.NavigatorContextMenu.SEARCH, {
            commandId: GitHistoryCommands.OPEN_FILE_HISTORY.id,
            label: exports.GIT_HISTORY_LABEL
        });
        menus.registerMenuAction(git_contribution_1.EDITOR_CONTEXT_MENU_GIT, {
            commandId: GitHistoryCommands.OPEN_FILE_HISTORY.id,
            label: exports.GIT_HISTORY_LABEL
        });
        _super.prototype.registerMenus.call(this, menus);
    };
    GitHistoryContribution.prototype.registerCommands = function (commands) {
        var _this = this;
        commands.registerCommand(GitHistoryCommands.OPEN_FILE_HISTORY, this.newUriAwareCommandHandler({
            isEnabled: function (uri) { return !!_this.repositoryProvider.findRepository(uri); },
            isVisible: function (uri) { return !!_this.repositoryProvider.findRepository(uri); },
            execute: function (uri) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, this.openView({ activate: true, uri: uri.toString() })];
            }); }); },
        }));
        _super.prototype.registerCommands.call(this, commands);
    };
    GitHistoryContribution.prototype.refreshWidget = function (uri) {
        return __awaiter(this, void 0, void 0, function () {
            var widget, options;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        widget = this.tryGetWidget();
                        if (!widget) {
                            // the widget doesn't exist, so don't wake it up
                            return [2 /*return*/];
                        }
                        options = {
                            uri: uri,
                            maxCount: exports.GIT_HISTORY_MAX_COUNT,
                            shortSha: true
                        };
                        return [4 /*yield*/, widget.setContent(options)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    GitHistoryContribution.prototype.newUriAwareCommandHandler = function (handler) {
        return new uri_command_handler_1.UriAwareCommandHandler(this.selectionService, handler);
    };
    __decorate([
        inversify_1.inject(core_1.SelectionService),
        __metadata("design:type", core_1.SelectionService)
    ], GitHistoryContribution.prototype, "selectionService", void 0);
    __decorate([
        inversify_1.inject(git_repository_tracker_1.GitRepositoryTracker),
        __metadata("design:type", git_repository_tracker_1.GitRepositoryTracker)
    ], GitHistoryContribution.prototype, "repositoryTracker", void 0);
    __decorate([
        inversify_1.inject(git_repository_provider_1.GitRepositoryProvider),
        __metadata("design:type", git_repository_provider_1.GitRepositoryProvider)
    ], GitHistoryContribution.prototype, "repositoryProvider", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], GitHistoryContribution.prototype, "init", null);
    GitHistoryContribution = __decorate([
        inversify_1.injectable(),
        __metadata("design:paramtypes", [])
    ], GitHistoryContribution);
    return GitHistoryContribution;
}(browser_1.AbstractViewContribution));
exports.GitHistoryContribution = GitHistoryContribution;


/***/ }),

/***/ "./node_modules/@theia/git/lib/browser/history/git-history-frontend-module.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@theia/git/lib/browser/history/git-history-frontend-module.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2018 TypeFox and others.
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
var git_history_contribution_1 = __webpack_require__(/*! ./git-history-contribution */ "./node_modules/@theia/git/lib/browser/history/git-history-contribution.js");
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "./node_modules/@theia/core/lib/browser/index.js");
var git_history_widget_1 = __webpack_require__(/*! ./git-history-widget */ "./node_modules/@theia/git/lib/browser/history/git-history-widget.js");
var git_commit_detail_widget_1 = __webpack_require__(/*! ./git-commit-detail-widget */ "./node_modules/@theia/git/lib/browser/history/git-commit-detail-widget.js");
__webpack_require__(/*! ../../../src/browser/style/history.css */ "./node_modules/@theia/git/src/browser/style/history.css");
__webpack_require__(/*! ../../../src/browser/style/git-icons.css */ "./node_modules/@theia/git/src/browser/style/git-icons.css");
var git_commit_detail_open_handler_1 = __webpack_require__(/*! ./git-commit-detail-open-handler */ "./node_modules/@theia/git/lib/browser/history/git-commit-detail-open-handler.js");
function bindGitHistoryModule(bind) {
    bind(git_history_widget_1.GitHistoryWidget).toSelf();
    bind(browser_1.WidgetFactory).toDynamicValue(function (ctx) { return ({
        id: git_history_contribution_1.GIT_HISTORY_ID,
        createWidget: function () { return ctx.container.get(git_history_widget_1.GitHistoryWidget); }
    }); });
    bind(browser_1.WidgetFactory).toDynamicValue(function (ctx) { return ({
        id: git_commit_detail_widget_1.GIT_COMMIT_DETAIL,
        createWidget: function (options) {
            var child = new inversify_1.Container({ defaultScope: 'Singleton' });
            child.parent = ctx.container;
            child.bind(git_commit_detail_widget_1.GitCommitDetailWidget).toSelf();
            child.bind(git_commit_detail_widget_1.GitCommitDetailWidgetOptions).toConstantValue(options);
            return child.get(git_commit_detail_widget_1.GitCommitDetailWidget);
        }
    }); });
    bind(git_commit_detail_open_handler_1.GitCommitDetailOpenHandler).toSelf();
    bind(browser_1.OpenHandler).toService(git_commit_detail_open_handler_1.GitCommitDetailOpenHandler);
    browser_1.bindViewContribution(bind, git_history_contribution_1.GitHistoryContribution);
}
exports.bindGitHistoryModule = bindGitHistoryModule;


/***/ }),

/***/ "./node_modules/@theia/git/lib/browser/history/git-history-widget.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@theia/git/lib/browser/history/git-history-widget.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2018 TypeFox and others.
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
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
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
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var diff_uris_1 = __webpack_require__(/*! @theia/core/lib/browser/diff-uris */ "./node_modules/@theia/core/lib/browser/diff-uris.js");
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "./node_modules/@theia/core/lib/browser/index.js");
var cancellation_1 = __webpack_require__(/*! @theia/core/lib/common/cancellation */ "./node_modules/@theia/core/lib/common/cancellation.js");
var react_virtualized_1 = __webpack_require__(/*! react-virtualized */ "./node_modules/react-virtualized/dist/es/index.js");
var git_resource_1 = __webpack_require__(/*! ../git-resource */ "./node_modules/@theia/git/lib/browser/git-resource.js");
var uri_1 = __webpack_require__(/*! @theia/core/lib/common/uri */ "./node_modules/@theia/core/lib/common/uri.js");
var git_history_contribution_1 = __webpack_require__(/*! ./git-history-contribution */ "./node_modules/@theia/git/lib/browser/history/git-history-contribution.js");
var common_1 = __webpack_require__(/*! ../../common */ "./node_modules/@theia/git/lib/common/index.js");
var common_2 = __webpack_require__(/*! @theia/filesystem/lib/common */ "./node_modules/@theia/filesystem/lib/common/index.js");
var git_diff_contribution_1 = __webpack_require__(/*! ../diff/git-diff-contribution */ "./node_modules/@theia/git/lib/browser/diff/git-diff-contribution.js");
var scm_avatar_service_1 = __webpack_require__(/*! @theia/scm/lib/browser/scm-avatar-service */ "./node_modules/@theia/scm/lib/browser/scm-avatar-service.js");
var git_commit_detail_open_handler_1 = __webpack_require__(/*! ./git-commit-detail-open-handler */ "./node_modules/@theia/git/lib/browser/history/git-commit-detail-open-handler.js");
var git_navigable_list_widget_1 = __webpack_require__(/*! ../git-navigable-list-widget */ "./node_modules/@theia/git/lib/browser/git-navigable-list-widget.js");
var git_file_change_node_1 = __webpack_require__(/*! ../git-file-change-node */ "./node_modules/@theia/git/lib/browser/git-file-change-node.js");
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var alert_message_1 = __webpack_require__(/*! @theia/core/lib/browser/widgets/alert-message */ "./node_modules/@theia/core/lib/browser/widgets/alert-message.js");
var GitCommitNode;
(function (GitCommitNode) {
    // tslint:disable-next-line:no-any
    function is(node) {
        return !!node && 'commitSha' in node && 'commitMessage' in node && 'fileChangeNodes' in node;
    }
    GitCommitNode.is = is;
})(GitCommitNode = exports.GitCommitNode || (exports.GitCommitNode = {}));
var GitHistoryWidget = /** @class */ (function (_super) {
    __extends(GitHistoryWidget, _super);
    function GitHistoryWidget(openerService, detailOpenHandler, shell, fileSystem, git, avatarService, widgetManager, diffContribution) {
        var _this = _super.call(this) || this;
        _this.openerService = openerService;
        _this.detailOpenHandler = detailOpenHandler;
        _this.shell = shell;
        _this.fileSystem = fileSystem;
        _this.git = git;
        _this.avatarService = avatarService;
        _this.widgetManager = widgetManager;
        _this.diffContribution = diffContribution;
        _this.handleScroll = function (info) { return _this.doHandleScroll(info); };
        _this.loadMoreRows = function (params) { return _this.doLoadMoreRows(params); };
        _this.renderCommit = function (commit) { return _this.doRenderCommit(commit); };
        _this.renderFileChangeList = function (fileChange) { return _this.doRenderFileChangeList(fileChange); };
        _this.id = git_history_contribution_1.GIT_HISTORY_ID;
        _this.scrollContainer = 'git-history-list-container';
        _this.title.label = git_history_contribution_1.GIT_HISTORY_LABEL;
        _this.title.caption = git_history_contribution_1.GIT_HISTORY_LABEL;
        _this.title.iconClass = 'fa git-history-tab-icon';
        _this.title.closable = true;
        _this.addClass('theia-git');
        _this.resetState();
        _this.cancelIndicator = new cancellation_1.CancellationTokenSource();
        return _this;
    }
    GitHistoryWidget.prototype.init = function () {
        var _this = this;
        this.toDispose.push(this.labelProvider.onDidChange(function (event) { return _this.refreshLabels(event); }));
    };
    GitHistoryWidget.prototype.refreshLabels = function (event) {
        return __awaiter(this, void 0, void 0, function () {
            var isAnyAffectedNodes, i, gitNode, uri, label, icon;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        isAnyAffectedNodes = false;
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < this.gitNodes.length)) return [3 /*break*/, 4];
                        gitNode = this.gitNodes[i];
                        if (!git_file_change_node_1.GitFileChangeNode.is(gitNode)) return [3 /*break*/, 3];
                        uri = new uri_1.default(gitNode.uri);
                        if (!event.affects(uri)) return [3 /*break*/, 3];
                        label = this.labelProvider.getName(uri);
                        return [4 /*yield*/, this.labelProvider.getIcon(uri)];
                    case 2:
                        icon = _a.sent();
                        this.gitNodes[i] = __assign({}, gitNode, { label: label, icon: icon });
                        isAnyAffectedNodes = true;
                        _a.label = 3;
                    case 3:
                        i++;
                        return [3 /*break*/, 1];
                    case 4:
                        if (isAnyAffectedNodes) {
                            this.update();
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    GitHistoryWidget.prototype.onAfterAttach = function (msg) {
        var _this = this;
        _super.prototype.onAfterAttach.call(this, msg);
        this.addGitListNavigationKeyListeners(this.node);
        // tslint:disable-next-line:no-any
        this.addEventListener(this.node, 'ps-scroll-y', function (e) {
            if (_this.listView && _this.listView.list && _this.listView.list.Grid) {
                var scrollTop = e.target.scrollTop;
                _this.listView.list.Grid.handleScrollEvent({ scrollTop: scrollTop });
            }
        });
    };
    GitHistoryWidget.prototype.update = function () {
        if (this.listView && this.listView.list) {
            this.listView.list.forceUpdateGrid();
        }
        _super.prototype.update.call(this);
    };
    GitHistoryWidget.prototype.setContent = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            var fileStat;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.resetState(options);
                        if (!(options && options.uri)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.fileSystem.getFileStat(options.uri)];
                    case 1:
                        fileStat = _a.sent();
                        this.singleFileMode = !!fileStat && !fileStat.isDirectory;
                        _a.label = 2;
                    case 2: return [4 /*yield*/, this.addCommits(options)];
                    case 3:
                        _a.sent();
                        this.onDataReady();
                        if (this.gitNodes.length > 0) {
                            this.selectNode(this.gitNodes[0]);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    GitHistoryWidget.prototype.resetState = function (options) {
        this.options = options || {};
        this.status = { state: 'loading' };
        this.gitNodes = [];
        this.hasMoreCommits = true;
        this.allowScrollToSelected = true;
    };
    GitHistoryWidget.prototype.addCommits = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            var repository, token, currentCommits, changes, commits, changes_1, changes_1_1, commit, fileChangeNodes, avatarUrl, e_1_1, pathIsUnderVersionControl, error_1;
            var e_1, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        repository = this.repositoryProvider.findRepositoryOrSelected(options);
                        this.cancelIndicator.cancel();
                        this.cancelIndicator = new cancellation_1.CancellationTokenSource();
                        token = this.cancelIndicator.token;
                        if (!repository) return [3 /*break*/, 16];
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 14, , 15]);
                        currentCommits = this.status.state === 'ready' ? this.status.commits : [];
                        return [4 /*yield*/, this.git.log(repository, options)];
                    case 2:
                        changes = _b.sent();
                        if (token.isCancellationRequested || !this.hasMoreCommits) {
                            return [2 /*return*/];
                        }
                        if (options && ((options.maxCount && changes.length < options.maxCount) || (!options.maxCount && currentCommits))) {
                            this.hasMoreCommits = false;
                        }
                        if (currentCommits.length > 0) {
                            changes = changes.slice(1);
                        }
                        if (!(changes.length > 0)) return [3 /*break*/, 11];
                        commits = [];
                        _b.label = 3;
                    case 3:
                        _b.trys.push([3, 8, 9, 10]);
                        changes_1 = __values(changes), changes_1_1 = changes_1.next();
                        _b.label = 4;
                    case 4:
                        if (!!changes_1_1.done) return [3 /*break*/, 7];
                        commit = changes_1_1.value;
                        fileChangeNodes = [];
                        return [4 /*yield*/, this.avatarService.getAvatar(commit.author.email)];
                    case 5:
                        avatarUrl = _b.sent();
                        commits.push({
                            authorName: commit.author.name,
                            authorDate: new Date(commit.author.timestamp),
                            authorEmail: commit.author.email,
                            authorDateRelative: commit.authorDateRelative,
                            authorAvatar: avatarUrl,
                            commitSha: commit.sha,
                            commitMessage: commit.summary,
                            messageBody: commit.body,
                            fileChangeNodes: fileChangeNodes,
                            fileChanges: commit.fileChanges,
                            expanded: false,
                            selected: false
                        });
                        _b.label = 6;
                    case 6:
                        changes_1_1 = changes_1.next();
                        return [3 /*break*/, 4];
                    case 7: return [3 /*break*/, 10];
                    case 8:
                        e_1_1 = _b.sent();
                        e_1 = { error: e_1_1 };
                        return [3 /*break*/, 10];
                    case 9:
                        try {
                            if (changes_1_1 && !changes_1_1.done && (_a = changes_1.return)) _a.call(changes_1);
                        }
                        finally { if (e_1) throw e_1.error; }
                        return [7 /*endfinally*/];
                    case 10:
                        currentCommits.push.apply(currentCommits, __spread(commits));
                        this.status = { state: 'ready', commits: currentCommits };
                        return [3 /*break*/, 13];
                    case 11:
                        if (!(options && options.uri && repository)) return [3 /*break*/, 13];
                        return [4 /*yield*/, this.git.lsFiles(repository, options.uri, { errorUnmatch: true })];
                    case 12:
                        pathIsUnderVersionControl = _b.sent();
                        if (!pathIsUnderVersionControl) {
                            this.status = { state: 'error', errorMessage: React.createElement(React.Fragment, null, " It is not under version control.") };
                        }
                        else {
                            this.status = { state: 'error', errorMessage: React.createElement(React.Fragment, null, " No commits have been committed.") };
                        }
                        _b.label = 13;
                    case 13: return [3 /*break*/, 15];
                    case 14:
                        error_1 = _b.sent();
                        this.status = { state: 'error', errorMessage: error_1.message };
                        return [3 /*break*/, 15];
                    case 15: return [3 /*break*/, 17];
                    case 16:
                        this.status = { state: 'error', errorMessage: React.createElement(React.Fragment, null, "There is no repository selected in this workspace.") };
                        _b.label = 17;
                    case 17: return [2 /*return*/];
                }
            });
        });
    };
    GitHistoryWidget.prototype.addOrRemoveFileChangeNodes = function (commit) {
        return __awaiter(this, void 0, void 0, function () {
            var id;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = this.gitNodes.findIndex(function (node) { return node === commit; });
                        if (!commit.expanded) return [3 /*break*/, 1];
                        this.removeFileChangeNodes(commit, id);
                        return [3 /*break*/, 3];
                    case 1: return [4 /*yield*/, this.addFileChangeNodes(commit, id)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        commit.expanded = !commit.expanded;
                        this.update();
                        return [2 /*return*/];
                }
            });
        });
    };
    GitHistoryWidget.prototype.addFileChangeNodes = function (commit, gitNodesArrayIndex) {
        return __awaiter(this, void 0, void 0, function () {
            var fileChangeNodes_1;
            var _a;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!commit.fileChanges) return [3 /*break*/, 2];
                        fileChangeNodes_1 = [];
                        return [4 /*yield*/, Promise.all(commit.fileChanges.map(function (fileChange) { return __awaiter(_this, void 0, void 0, function () {
                                var fileChangeUri, icon, label, description, caption;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            fileChangeUri = new uri_1.default(fileChange.uri);
                                            return [4 /*yield*/, this.labelProvider.getIcon(fileChangeUri)];
                                        case 1:
                                            icon = _a.sent();
                                            label = this.labelProvider.getName(fileChangeUri);
                                            description = this.relativePath(fileChangeUri.parent);
                                            caption = this.computeCaption(fileChange);
                                            fileChangeNodes_1.push(__assign({}, fileChange, { icon: icon, label: label, description: description, caption: caption, commitSha: commit.commitSha }));
                                            return [2 /*return*/];
                                    }
                                });
                            }); }))];
                    case 1:
                        _b.sent();
                        (_a = this.gitNodes).splice.apply(_a, __spread([gitNodesArrayIndex + 1, 0], fileChangeNodes_1));
                        _b.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    GitHistoryWidget.prototype.removeFileChangeNodes = function (commit, gitNodesArrayIndex) {
        if (commit.fileChanges) {
            this.gitNodes.splice(gitNodesArrayIndex + 1, commit.fileChanges.length);
        }
    };
    GitHistoryWidget.prototype.storeState = function () {
        var _a = this, options = _a.options, singleFileMode = _a.singleFileMode;
        return {
            options: options,
            singleFileMode: singleFileMode
        };
    };
    // tslint:disable-next-line:no-any
    GitHistoryWidget.prototype.restoreState = function (oldState) {
        this.options = oldState['options'];
        this.singleFileMode = oldState['singleFileMode'];
        this.setContent(this.options);
    };
    GitHistoryWidget.prototype.onDataReady = function () {
        if (this.status.state === 'ready') {
            this.gitNodes = this.status.commits;
        }
        this.update();
    };
    GitHistoryWidget.prototype.render = function () {
        var content;
        switch (this.status.state) {
            case 'ready':
                content = React.createElement(React.Fragment, null,
                    this.renderHistoryHeader(),
                    this.renderCommitList());
                break;
            case 'error':
                var path = '';
                var reason = void 0;
                reason = this.status.errorMessage;
                if (this.options.uri) {
                    var relPathEncoded = this.relativePath(this.options.uri);
                    var relPath = relPathEncoded ? "" + decodeURIComponent(relPathEncoded) : '';
                    var repo = this.repositoryProvider.findRepository(new uri_1.default(this.options.uri));
                    var repoName = repo ? "" + new uri_1.default(repo.localUri).displayName : '';
                    var relPathAndRepo = [relPath, repoName].filter(Boolean).join(' in ');
                    path = " for " + relPathAndRepo;
                }
                content = React.createElement(alert_message_1.AlertMessage, { type: 'WARNING', header: "There is no Git history available" + path + "." }, reason);
                break;
            case 'loading':
                content = React.createElement("div", { className: 'spinnerContainer' },
                    React.createElement("span", { className: 'fa fa-spinner fa-pulse fa-3x fa-fw' }));
                break;
        }
        return React.createElement("div", { className: 'git-diff-container' }, content);
    };
    GitHistoryWidget.prototype.renderHistoryHeader = function () {
        if (this.options.uri) {
            var path = this.relativePath(this.options.uri);
            var fileName = path.split('/').pop();
            return React.createElement("div", { className: 'diff-header' },
                this.renderHeaderRow({ name: 'repository', value: this.getRepositoryLabel(this.options.uri) }),
                this.renderHeaderRow({ name: 'file', value: fileName, title: path }),
                React.createElement("div", { className: 'theia-header' }, "Commits"));
        }
    };
    GitHistoryWidget.prototype.renderCommitList = function () {
        var _this = this;
        var list = React.createElement("div", { className: 'listContainer', id: this.scrollContainer },
            React.createElement(GitHistoryList, { ref: function (listView) { return _this.listView = (listView || undefined); }, rows: this.gitNodes, hasMoreRows: this.hasMoreCommits, indexOfSelected: this.allowScrollToSelected ? this.indexOfSelected : -1, handleScroll: this.handleScroll, loadMoreRows: this.loadMoreRows, renderCommit: this.renderCommit, renderFileChangeList: this.renderFileChangeList }));
        this.allowScrollToSelected = true;
        return list;
    };
    GitHistoryWidget.prototype.doHandleScroll = function (info) {
        this.node.scrollTop = info.scrollTop;
    };
    // tslint:disable-next-line:no-any
    GitHistoryWidget.prototype.doLoadMoreRows = function (params) {
        var _this = this;
        var resolver;
        var promise = new Promise(function (resolve) { return resolver = resolve; });
        var lastRow = this.gitNodes[params.stopIndex - 1];
        if (GitCommitNode.is(lastRow)) {
            var toRevision = lastRow.commitSha;
            this.addCommits({
                range: { toRevision: toRevision },
                maxCount: git_history_contribution_1.GIT_HISTORY_MAX_COUNT,
                uri: this.options.uri
            }).then(function () {
                _this.allowScrollToSelected = false;
                _this.onDataReady();
                resolver();
            });
        }
        return promise;
    };
    GitHistoryWidget.prototype.doRenderCommit = function (commit) {
        var _this = this;
        var expansionToggleIcon = 'caret-right';
        if (commit && commit.expanded) {
            expansionToggleIcon = 'caret-down';
        }
        return React.createElement("div", { className: "containerHead" + (commit.selected ? ' ' + browser_1.SELECTED_CLASS : ''), onClick: function (e) {
                if (commit.selected && !_this.singleFileMode) {
                    _this.addOrRemoveFileChangeNodes(commit);
                }
                else {
                    _this.selectNode(commit);
                }
                e.preventDefault();
            }, onDoubleClick: function (e) {
                if (_this.singleFileMode && commit.fileChanges && commit.fileChanges.length > 0) {
                    _this.openFile(commit.fileChanges[0], commit.commitSha);
                }
                e.preventDefault();
            } },
            React.createElement("div", { className: 'headContent' },
                React.createElement("div", { className: 'image-container' },
                    React.createElement("img", { className: 'gravatar', src: commit.authorAvatar })),
                React.createElement("div", { className: "headLabelContainer" + (this.singleFileMode ? ' singleFileMode' : '') },
                    React.createElement("div", { className: 'headLabel noWrapInfo noselect' }, commit.commitMessage),
                    React.createElement("div", { className: 'commitTime noWrapInfo noselect' }, commit.authorDateRelative + ' by ' + commit.authorName)),
                React.createElement("div", { className: 'fa fa-eye detailButton', onClick: function () { return _this.openDetailWidget(commit); } }),
                !this.singleFileMode ? React.createElement("div", { className: 'expansionToggle noselect' },
                    React.createElement("div", { className: 'toggle' },
                        React.createElement("div", { className: 'number' }, (commit.fileChanges && commit.fileChanges.length || commit.fileChangeNodes.length).toString()),
                        React.createElement("div", { className: 'icon fa fa-' + expansionToggleIcon })))
                    : ''));
    };
    GitHistoryWidget.prototype.openDetailWidget = function (commit) {
        return __awaiter(this, void 0, void 0, function () {
            var commitDetails;
            return __generator(this, function (_a) {
                commitDetails = this.detailOpenHandler.getCommitDetailWidgetOptions(commit);
                this.detailOpenHandler.open(git_commit_detail_open_handler_1.GitCommitDetailUri.toUri(commit.commitSha), __assign({}, commitDetails));
                return [2 /*return*/];
            });
        });
    };
    GitHistoryWidget.prototype.doRenderFileChangeList = function (fileChange) {
        var fileChangeElement = this.renderGitItem(fileChange, fileChange.commitSha || '');
        return fileChangeElement;
    };
    GitHistoryWidget.prototype.renderGitItem = function (change, commitSha) {
        var _this = this;
        return React.createElement("div", { key: change.uri.toString(), className: "gitItem noselect" + (change.selected ? ' ' + browser_1.SELECTED_CLASS : '') },
            React.createElement("div", { title: change.caption, className: 'noWrapInfo', onDoubleClick: function () {
                    _this.openFile(change, commitSha);
                }, onClick: function () {
                    _this.selectNode(change);
                } },
                React.createElement("span", { className: change.icon + ' file-icon' }),
                React.createElement("span", { className: 'name' }, change.label + ' '),
                React.createElement("span", { className: 'path' }, change.description)),
            change.extraIconClassName ? React.createElement("div", { title: change.caption, className: change.extraIconClassName })
                : '',
            React.createElement("div", { title: change.caption, className: 'status staged ' + common_1.GitFileStatus[change.status].toLowerCase() }, this.getStatusCaption(change.status, true).charAt(0)));
    };
    GitHistoryWidget.prototype.navigateLeft = function () {
        var selected = this.getSelected();
        if (selected && this.status.state === 'ready') {
            var idx = this.status.commits.findIndex(function (c) { return c.commitSha === selected.commitSha; });
            if (GitCommitNode.is(selected)) {
                if (selected.expanded) {
                    this.addOrRemoveFileChangeNodes(selected);
                }
                else {
                    if (idx > 0) {
                        this.selectNode(this.status.commits[idx - 1]);
                    }
                }
            }
            else if (git_file_change_node_1.GitFileChangeNode.is(selected)) {
                this.selectNode(this.status.commits[idx]);
            }
        }
        this.update();
    };
    GitHistoryWidget.prototype.navigateRight = function () {
        var selected = this.getSelected();
        if (selected) {
            if (GitCommitNode.is(selected) && !selected.expanded && !this.singleFileMode) {
                this.addOrRemoveFileChangeNodes(selected);
            }
            else {
                this.selectNextNode();
            }
        }
        this.update();
    };
    GitHistoryWidget.prototype.handleListEnter = function () {
        var selected = this.getSelected();
        if (selected) {
            if (GitCommitNode.is(selected)) {
                if (this.singleFileMode) {
                    this.openFile(selected.fileChangeNodes[0], selected.commitSha);
                }
                else {
                    this.openDetailWidget(selected);
                }
            }
            else if (git_file_change_node_1.GitFileChangeNode.is(selected)) {
                this.openFile(selected, selected.commitSha || '');
            }
        }
        this.update();
    };
    GitHistoryWidget.prototype.openFile = function (change, commitSha) {
        var uri = new uri_1.default(change.uri);
        var fromURI = change.oldUri ? new uri_1.default(change.oldUri) : uri; // set oldUri on renamed and copied
        fromURI = fromURI.withScheme(git_resource_1.GIT_RESOURCE_SCHEME).withQuery(commitSha + '~1');
        var toURI = uri.withScheme(git_resource_1.GIT_RESOURCE_SCHEME).withQuery(commitSha);
        var uriToOpen = uri;
        if (change.status === common_1.GitFileStatus.Deleted) {
            uriToOpen = fromURI;
        }
        else if (change.status === common_1.GitFileStatus.New) {
            uriToOpen = toURI;
        }
        else {
            uriToOpen = diff_uris_1.DiffUris.encode(fromURI, toURI);
        }
        browser_1.open(this.openerService, uriToOpen, { mode: 'reveal' });
    };
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], GitHistoryWidget.prototype, "init", null);
    GitHistoryWidget = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(browser_1.OpenerService)),
        __param(1, inversify_1.inject(git_commit_detail_open_handler_1.GitCommitDetailOpenHandler)),
        __param(2, inversify_1.inject(browser_1.ApplicationShell)),
        __param(3, inversify_1.inject(common_2.FileSystem)),
        __param(4, inversify_1.inject(common_1.Git)),
        __param(5, inversify_1.inject(scm_avatar_service_1.ScmAvatarService)),
        __param(6, inversify_1.inject(browser_1.WidgetManager)),
        __param(7, inversify_1.inject(git_diff_contribution_1.GitDiffContribution)),
        __metadata("design:paramtypes", [Object, git_commit_detail_open_handler_1.GitCommitDetailOpenHandler,
            browser_1.ApplicationShell, Object, Object, scm_avatar_service_1.ScmAvatarService,
            browser_1.WidgetManager,
            git_diff_contribution_1.GitDiffContribution])
    ], GitHistoryWidget);
    return GitHistoryWidget;
}(git_navigable_list_widget_1.GitNavigableListWidget));
exports.GitHistoryWidget = GitHistoryWidget;
var GitHistoryList = /** @class */ (function (_super) {
    __extends(GitHistoryList, _super);
    function GitHistoryList() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.checkIfRowIsLoaded = function (opts) { return _this.doCheckIfRowIsLoaded(opts); };
        _this.measureCache = new react_virtualized_1.CellMeasurerCache();
        _this.measureRowRenderer = function (params) {
            var index = params.index, key = params.key, parent = params.parent;
            return (React.createElement(react_virtualized_1.CellMeasurer, { cache: _this.measureCache, columnIndex: 0, key: key, rowIndex: index, parent: parent }, function () { return _this.renderRow(params); }));
        };
        _this.renderRow = function (_a) {
            var index = _a.index, key = _a.key, style = _a.style;
            if (_this.checkIfRowIsLoaded({ index: index })) {
                var row = _this.props.rows[index];
                if (GitCommitNode.is(row)) {
                    var head = _this.props.renderCommit(row);
                    return React.createElement("div", { key: key, style: style, className: "commitListElement" + (index === 0 ? ' first' : '') }, head);
                }
                else if (git_file_change_node_1.GitFileChangeNode.is(row)) {
                    return React.createElement("div", { key: key, style: style, className: 'fileChangeListElement' }, _this.props.renderFileChangeList(row));
                }
            }
            else {
                return React.createElement("div", { key: key, style: style, className: "commitListElement" + (index === 0 ? ' first' : '') },
                    React.createElement("span", { className: 'fa fa-spinner fa-pulse fa-fw' }));
            }
        };
        return _this;
    }
    GitHistoryList.prototype.doCheckIfRowIsLoaded = function (opts) {
        var row = this.props.rows[opts.index];
        return !!row;
    };
    GitHistoryList.prototype.render = function () {
        var _this = this;
        return React.createElement(react_virtualized_1.InfiniteLoader, { isRowLoaded: this.checkIfRowIsLoaded, loadMoreRows: this.props.loadMoreRows, rowCount: this.props.rows.length + 1, threshold: 15 }, function (_a) {
            var onRowsRendered = _a.onRowsRendered, registerChild = _a.registerChild;
            return (React.createElement(react_virtualized_1.AutoSizer, null, function (_a) {
                var width = _a.width, height = _a.height;
                return React.createElement(react_virtualized_1.List, { className: 'commitList', ref: function (list) {
                        _this.list = (list || undefined);
                        registerChild(list);
                    }, width: width, height: height, onRowsRendered: onRowsRendered, rowRenderer: _this.measureRowRenderer, rowHeight: _this.measureCache.rowHeight, rowCount: _this.props.hasMoreRows ? _this.props.rows.length + 1 : _this.props.rows.length, tabIndex: -1, onScroll: _this.props.handleScroll, scrollToIndex: _this.props.indexOfSelected, style: {
                        overflowY: 'visible',
                        overflowX: 'visible'
                    } });
            }));
        });
    };
    GitHistoryList.prototype.componentWillUpdate = function () {
        this.measureCache.clearAll();
    };
    return GitHistoryList;
}(React.Component));
exports.GitHistoryList = GitHistoryList;


/***/ }),

/***/ "./node_modules/@theia/git/lib/common/git-model.js":
/*!*********************************************************!*\
  !*** ./node_modules/@theia/git/lib/common/git-model.js ***!
  \*********************************************************/
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
var uri_1 = __webpack_require__(/*! @theia/core/lib/common/uri */ "./node_modules/@theia/core/lib/common/uri.js");
var WorkingDirectoryStatus;
(function (WorkingDirectoryStatus) {
    /**
     * `true` if the directory statuses are deep equal, otherwise `false`.
     */
    function equals(left, right) {
        if (left && right) {
            return left.exists === right.exists
                && left.branch === right.branch
                && left.upstreamBranch === right.upstreamBranch
                && left.currentHead === right.currentHead
                && (left.aheadBehind ? left.aheadBehind.ahead : -1) === (right.aheadBehind ? right.aheadBehind.ahead : -1)
                && (left.aheadBehind ? left.aheadBehind.behind : -1) === (right.aheadBehind ? right.aheadBehind.behind : -1)
                && left.changes.length === right.changes.length
                && !!left.incomplete === !!right.incomplete
                && JSON.stringify(left) === JSON.stringify(right);
        }
        else {
            return left === right;
        }
    }
    WorkingDirectoryStatus.equals = equals;
})(WorkingDirectoryStatus = exports.WorkingDirectoryStatus || (exports.WorkingDirectoryStatus = {}));
/**
 * Enumeration of states that a file resource can have in the working directory.
 */
var GitFileStatus;
(function (GitFileStatus) {
    GitFileStatus[GitFileStatus["New"] = 0] = "New";
    GitFileStatus[GitFileStatus["Copied"] = 1] = "Copied";
    GitFileStatus[GitFileStatus["Modified"] = 2] = "Modified";
    GitFileStatus[GitFileStatus["Renamed"] = 3] = "Renamed";
    GitFileStatus[GitFileStatus["Deleted"] = 4] = "Deleted";
    GitFileStatus[GitFileStatus["Conflicted"] = 5] = "Conflicted";
})(GitFileStatus = exports.GitFileStatus || (exports.GitFileStatus = {}));
(function (GitFileStatus) {
    /**
     * Compares the statuses based on the natural order of the enumeration.
     */
    GitFileStatus.statusCompare = function (left, right) { return left - right; };
    /**
     * Returns with human readable representation of the Git file status argument. If the `staged` argument is `undefined`,
     * it will be treated as `false`.
     */
    GitFileStatus.toString = function (status, staged) {
        switch (status) {
            case GitFileStatus.New: return !!staged ? 'Added' : 'Unstaged';
            case GitFileStatus.Renamed: return 'Renamed';
            case GitFileStatus.Copied: return 'Copied';
            case GitFileStatus.Modified: return 'Modified';
            case GitFileStatus.Deleted: return 'Deleted';
            case GitFileStatus.Conflicted: return 'Conflicted';
            default: throw new Error("Unexpected Git file stats: " + status + ".");
        }
    };
    /**
     * Returns with the human readable abbreviation of the Git file status argument. `staged` argument defaults to `false`.
     */
    GitFileStatus.toAbbreviation = function (status, staged) { return GitFileStatus.toString(status, staged).charAt(0); };
    function getColor(status, staged) {
        switch (status) {
            case GitFileStatus.New: return 'var(--theia-success-color0)';
            case GitFileStatus.Renamed: // Fall through.
            case GitFileStatus.Copied: // Fall through.
            case GitFileStatus.Modified: return 'var(--theia-brand-color0)';
            case GitFileStatus.Deleted: return 'var(--theia-warn-color0)';
            case GitFileStatus.Conflicted: return 'var(--theia-error-color0)';
        }
    }
    GitFileStatus.getColor = getColor;
})(GitFileStatus = exports.GitFileStatus || (exports.GitFileStatus = {}));
var Repository;
(function (Repository) {
    function equal(repository, repository2) {
        if (repository && repository2) {
            return repository.localUri === repository2.localUri;
        }
        return repository === repository2;
    }
    Repository.equal = equal;
    function is(repository) {
        return !!repository && 'localUri' in repository;
    }
    Repository.is = is;
    function relativePath(repository, uri) {
        var repositoryUri = new uri_1.default(Repository.is(repository) ? repository.localUri : String(repository));
        return repositoryUri.relative(new uri_1.default(String(uri)));
    }
    Repository.relativePath = relativePath;
    Repository.sortComparator = function (ra, rb) { return rb.localUri.length - ra.localUri.length; };
})(Repository = exports.Repository || (exports.Repository = {}));
/**
 * The branch type. Either local or remote.
 * The order matters.
 */
var BranchType;
(function (BranchType) {
    /**
     * The local branch type.
     */
    BranchType[BranchType["Local"] = 0] = "Local";
    /**
     * The remote branch type.
     */
    BranchType[BranchType["Remote"] = 1] = "Remote";
})(BranchType = exports.BranchType || (exports.BranchType = {}));
/**
 * The Git errors which can be parsed from failed Git commands.
 */
var GitError;
(function (GitError) {
    GitError[GitError["SSHKeyAuditUnverified"] = 0] = "SSHKeyAuditUnverified";
    GitError[GitError["SSHAuthenticationFailed"] = 1] = "SSHAuthenticationFailed";
    GitError[GitError["SSHPermissionDenied"] = 2] = "SSHPermissionDenied";
    GitError[GitError["HTTPSAuthenticationFailed"] = 3] = "HTTPSAuthenticationFailed";
    GitError[GitError["RemoteDisconnection"] = 4] = "RemoteDisconnection";
    GitError[GitError["HostDown"] = 5] = "HostDown";
    GitError[GitError["RebaseConflicts"] = 6] = "RebaseConflicts";
    GitError[GitError["MergeConflicts"] = 7] = "MergeConflicts";
    GitError[GitError["HTTPSRepositoryNotFound"] = 8] = "HTTPSRepositoryNotFound";
    GitError[GitError["SSHRepositoryNotFound"] = 9] = "SSHRepositoryNotFound";
    GitError[GitError["PushNotFastForward"] = 10] = "PushNotFastForward";
    GitError[GitError["BranchDeletionFailed"] = 11] = "BranchDeletionFailed";
    GitError[GitError["DefaultBranchDeletionFailed"] = 12] = "DefaultBranchDeletionFailed";
    GitError[GitError["RevertConflicts"] = 13] = "RevertConflicts";
    GitError[GitError["EmptyRebasePatch"] = 14] = "EmptyRebasePatch";
    GitError[GitError["NoMatchingRemoteBranch"] = 15] = "NoMatchingRemoteBranch";
    GitError[GitError["NothingToCommit"] = 16] = "NothingToCommit";
    GitError[GitError["NoSubmoduleMapping"] = 17] = "NoSubmoduleMapping";
    GitError[GitError["SubmoduleRepositoryDoesNotExist"] = 18] = "SubmoduleRepositoryDoesNotExist";
    GitError[GitError["InvalidSubmoduleSHA"] = 19] = "InvalidSubmoduleSHA";
    GitError[GitError["LocalPermissionDenied"] = 20] = "LocalPermissionDenied";
    GitError[GitError["InvalidMerge"] = 21] = "InvalidMerge";
    GitError[GitError["InvalidRebase"] = 22] = "InvalidRebase";
    GitError[GitError["NonFastForwardMergeIntoEmptyHead"] = 23] = "NonFastForwardMergeIntoEmptyHead";
    GitError[GitError["PatchDoesNotApply"] = 24] = "PatchDoesNotApply";
    GitError[GitError["BranchAlreadyExists"] = 25] = "BranchAlreadyExists";
    GitError[GitError["BadRevision"] = 26] = "BadRevision";
    GitError[GitError["NotAGitRepository"] = 27] = "NotAGitRepository";
    GitError[GitError["CannotMergeUnrelatedHistories"] = 28] = "CannotMergeUnrelatedHistories";
    GitError[GitError["LFSAttributeDoesNotMatch"] = 29] = "LFSAttributeDoesNotMatch";
    GitError[GitError["BranchRenameFailed"] = 30] = "BranchRenameFailed";
    GitError[GitError["PathDoesNotExist"] = 31] = "PathDoesNotExist";
    GitError[GitError["InvalidObjectName"] = 32] = "InvalidObjectName";
    GitError[GitError["OutsideRepository"] = 33] = "OutsideRepository";
    GitError[GitError["LockFileAlreadyExists"] = 34] = "LockFileAlreadyExists";
    // GitHub-specific error codes
    GitError[GitError["PushWithFileSizeExceedingLimit"] = 35] = "PushWithFileSizeExceedingLimit";
    GitError[GitError["HexBranchNameRejected"] = 36] = "HexBranchNameRejected";
    GitError[GitError["ForcePushRejected"] = 37] = "ForcePushRejected";
    GitError[GitError["InvalidRefLength"] = 38] = "InvalidRefLength";
    GitError[GitError["ProtectedBranchRequiresReview"] = 39] = "ProtectedBranchRequiresReview";
    GitError[GitError["ProtectedBranchForcePush"] = 40] = "ProtectedBranchForcePush";
    GitError[GitError["ProtectedBranchDeleteRejected"] = 41] = "ProtectedBranchDeleteRejected";
    GitError[GitError["ProtectedBranchRequiredStatus"] = 42] = "ProtectedBranchRequiredStatus";
    GitError[GitError["PushWithPrivateEmail"] = 43] = "PushWithPrivateEmail";
})(GitError = exports.GitError || (exports.GitError = {}));


/***/ }),

/***/ "./node_modules/@theia/git/lib/common/git-watcher.js":
/*!***********************************************************!*\
  !*** ./node_modules/@theia/git/lib/common/git-watcher.js ***!
  \***********************************************************/
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
var common_1 = __webpack_require__(/*! @theia/core/lib/common */ "./node_modules/@theia/core/lib/common/index.js");
var GitStatusChangeEvent;
(function (GitStatusChangeEvent) {
    /**
     * `true` if the argument is a `GitStatusEvent`, otherwise `false`.
     * @param event the argument to check whether it is a Git status change event or not.
     */
    // tslint:disable-next-line:no-any
    function is(event) {
        return !!event && ('source' in event) && ('status' in event);
    }
    GitStatusChangeEvent.is = is;
})(GitStatusChangeEvent = exports.GitStatusChangeEvent || (exports.GitStatusChangeEvent = {}));
/**
 * The symbol of the Git watcher backend for DI.
 */
exports.GitWatcherServer = Symbol('GitWatcherServer');
exports.GitWatcherServerProxy = Symbol('GitWatcherServerProxy');
var ReconnectingGitWatcherServer = /** @class */ (function () {
    function ReconnectingGitWatcherServer(proxy) {
        var _this = this;
        this.proxy = proxy;
        this.watcherSequence = 1;
        this.watchParams = new Map();
        this.localToRemoteWatcher = new Map();
        this.proxy.onDidOpenConnection(function () { return _this.reconnect(); });
    }
    ReconnectingGitWatcherServer.prototype.watchGitChanges = function (repository) {
        return __awaiter(this, void 0, void 0, function () {
            var watcher;
            return __generator(this, function (_a) {
                watcher = this.watcherSequence++;
                this.watchParams.set(watcher, repository);
                return [2 /*return*/, this.doWatchGitChanges([watcher, repository])];
            });
        });
    };
    ReconnectingGitWatcherServer.prototype.unwatchGitChanges = function (watcher) {
        return __awaiter(this, void 0, void 0, function () {
            var remote;
            return __generator(this, function (_a) {
                this.watchParams.delete(watcher);
                remote = this.localToRemoteWatcher.get(watcher);
                if (remote) {
                    this.localToRemoteWatcher.delete(remote);
                    return [2 /*return*/, this.proxy.unwatchGitChanges(remote)];
                }
                else {
                    throw new Error("No Git watchers were registered with ID: " + watcher + ".");
                }
                return [2 /*return*/];
            });
        });
    };
    ReconnectingGitWatcherServer.prototype.dispose = function () {
        this.proxy.dispose();
    };
    ReconnectingGitWatcherServer.prototype.setClient = function (client) {
        this.proxy.setClient(client);
    };
    ReconnectingGitWatcherServer.prototype.reconnect = function () {
        var _this = this;
        __spread(this.watchParams.entries()).forEach(function (entry) { return _this.doWatchGitChanges(entry); });
    };
    ReconnectingGitWatcherServer.prototype.doWatchGitChanges = function (entry) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, watcher, repository, remote;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = __read(entry, 2), watcher = _a[0], repository = _a[1];
                        return [4 /*yield*/, this.proxy.watchGitChanges(repository)];
                    case 1:
                        remote = _b.sent();
                        this.localToRemoteWatcher.set(watcher, remote);
                        return [2 /*return*/, watcher];
                }
            });
        });
    };
    ReconnectingGitWatcherServer = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(exports.GitWatcherServerProxy)),
        __metadata("design:paramtypes", [Object])
    ], ReconnectingGitWatcherServer);
    return ReconnectingGitWatcherServer;
}());
exports.ReconnectingGitWatcherServer = ReconnectingGitWatcherServer;
/**
 * Unique WS endpoint path to the Git watcher service.
 */
exports.GitWatcherPath = '/services/git-watcher';
var GitWatcher = /** @class */ (function () {
    function GitWatcher(server) {
        var _this = this;
        this.server = server;
        this.toDispose = new common_1.DisposableCollection();
        this.onGitEventEmitter = new common_1.Emitter();
        this.toDispose.push(this.onGitEventEmitter);
        this.server.setClient({ onGitChanged: function (e) { return _this.onGitChanged(e); } });
    }
    GitWatcher.prototype.dispose = function () {
        this.toDispose.dispose();
    };
    Object.defineProperty(GitWatcher.prototype, "onGitEvent", {
        get: function () {
            return this.onGitEventEmitter.event;
        },
        enumerable: true,
        configurable: true
    });
    GitWatcher.prototype.onGitChanged = function (event) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.onGitEventEmitter.fire(event);
                return [2 /*return*/];
            });
        });
    };
    GitWatcher.prototype.watchGitChanges = function (repository) {
        return __awaiter(this, void 0, void 0, function () {
            var watcher, toDispose;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.server.watchGitChanges(repository)];
                    case 1:
                        watcher = _a.sent();
                        toDispose = new common_1.DisposableCollection();
                        toDispose.push(common_1.Disposable.create(function () { return _this.server.unwatchGitChanges(watcher); }));
                        return [2 /*return*/, toDispose];
                }
            });
        });
    };
    GitWatcher = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(exports.GitWatcherServer)),
        __metadata("design:paramtypes", [Object])
    ], GitWatcher);
    return GitWatcher;
}());
exports.GitWatcher = GitWatcher;


/***/ }),

/***/ "./node_modules/@theia/git/lib/common/git.js":
/*!***************************************************!*\
  !*** ./node_modules/@theia/git/lib/common/git.js ***!
  \***************************************************/
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
var git_model_1 = __webpack_require__(/*! ./git-model */ "./node_modules/@theia/git/lib/common/git-model.js");
/**
 * The WS endpoint path to the Git service.
 */
exports.GitPath = '/services/git';
/**
 * Git symbol for DI.
 */
exports.Git = Symbol('Git');
/**
 * Contains a set of utility functions for [Git](#Git).
 */
var GitUtils;
(function (GitUtils) {
    /**
     * `true` if the argument is an option for renaming an existing branch in the repository.
     */
    // tslint:disable-next-line:no-any
    function isBranchRename(arg) {
        return !!arg && ('newName' in arg);
    }
    GitUtils.isBranchRename = isBranchRename;
    /**
     * `true` if the argument is an option for deleting an existing branch in the repository.
     */
    // tslint:disable-next-line:no-any
    function isBranchDelete(arg) {
        return !!arg && ('toDelete' in arg);
    }
    GitUtils.isBranchDelete = isBranchDelete;
    /**
     * `true` if the argument is an option for creating a new branch in the repository.
     */
    // tslint:disable-next-line:no-any
    function isBranchCreate(arg) {
        return !!arg && ('toCreate' in arg);
    }
    GitUtils.isBranchCreate = isBranchCreate;
    /**
     * `true` if the argument is an option for listing the branches in a repository.
     */
    // tslint:disable-next-line:no-any
    function isBranchList(arg) {
        return !!arg && ('type' in arg);
    }
    GitUtils.isBranchList = isBranchList;
    /**
     * `true` if the argument is an option for checking out a new local branch.
     */
    // tslint:disable-next-line:no-any
    function isBranchCheckout(arg) {
        return !!arg && ('branch' in arg);
    }
    GitUtils.isBranchCheckout = isBranchCheckout;
    /**
     * `true` if the argument is an option for checking out a working tree file.
     */
    // tslint:disable-next-line:no-any
    function isWorkingTreeFileCheckout(arg) {
        return !!arg && ('paths' in arg);
    }
    GitUtils.isWorkingTreeFileCheckout = isWorkingTreeFileCheckout;
    /**
     * The error code for when the path to a repository doesn't exist.
     */
    var RepositoryDoesNotExistErrorCode = 'repository-does-not-exist-error';
    /**
     * `true` if the argument is an error indicating the absence of a local Git repository.
     * Otherwise, `false`.
     */
    // tslint:disable-next-line:no-any
    function isRepositoryDoesNotExistError(error) {
        // TODO this is odd here.This piece of code is already implementation specific, so this should go to the Git API.
        // But how can we ensure that the `any` type error is serializable?
        if (error instanceof Error && ('code' in error)) {
            // tslint:disable-next-line:no-any
            return error.code === RepositoryDoesNotExistErrorCode;
        }
        return false;
    }
    GitUtils.isRepositoryDoesNotExistError = isRepositoryDoesNotExistError;
    /**
     * Maps the raw status text from Git to a Git file status enumeration.
     */
    function mapStatus(rawStatus) {
        var status = rawStatus.trim();
        if (status === 'M') {
            return git_model_1.GitFileStatus.Modified;
        } // modified
        if (status === 'A') {
            return git_model_1.GitFileStatus.New;
        } // added
        if (status === 'D') {
            return git_model_1.GitFileStatus.Deleted;
        } // deleted
        if (status === 'R') {
            return git_model_1.GitFileStatus.Renamed;
        } // renamed
        if (status === 'C') {
            return git_model_1.GitFileStatus.Copied;
        } // copied
        // git log -M --name-status will return a RXXX - where XXX is a percentage
        if (status.match(/R[0-9]+/)) {
            return git_model_1.GitFileStatus.Renamed;
        }
        // git log -C --name-status will return a CXXX - where XXX is a percentage
        if (status.match(/C[0-9]+/)) {
            return git_model_1.GitFileStatus.Copied;
        }
        return git_model_1.GitFileStatus.Modified;
    }
    GitUtils.mapStatus = mapStatus;
    /**
     * `true` if the argument is a raw Git status with similarity percentage. Otherwise, `false`.
     */
    function isSimilarityStatus(rawStatus) {
        return !!rawStatus.match(/R[0-9][0-9][0-9]/) || !!rawStatus.match(/C[0-9][0-9][0-9]/);
    }
    GitUtils.isSimilarityStatus = isSimilarityStatus;
})(GitUtils = exports.GitUtils || (exports.GitUtils = {}));


/***/ }),

/***/ "./node_modules/@theia/git/lib/common/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/@theia/git/lib/common/index.js ***!
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
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./git */ "./node_modules/@theia/git/lib/common/git.js"));
__export(__webpack_require__(/*! ./git-model */ "./node_modules/@theia/git/lib/common/git-model.js"));
__export(__webpack_require__(/*! ./git-watcher */ "./node_modules/@theia/git/lib/common/git-watcher.js"));


/***/ }),

/***/ "./node_modules/@theia/git/src/browser/style/diff.css":
/*!************************************************************!*\
  !*** ./node_modules/@theia/git/src/browser/style/diff.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../css-loader!./diff.css */ "./node_modules/css-loader/index.js!./node_modules/@theia/git/src/browser/style/diff.css");

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

/***/ "./node_modules/@theia/git/src/browser/style/dirty-diff.css":
/*!******************************************************************!*\
  !*** ./node_modules/@theia/git/src/browser/style/dirty-diff.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../css-loader!./dirty-diff.css */ "./node_modules/css-loader/index.js!./node_modules/@theia/git/src/browser/style/dirty-diff.css");

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

/***/ "./node_modules/@theia/git/src/browser/style/git-diff.svg":
/*!****************************************************************!*\
  !*** ./node_modules/@theia/git/src/browser/style/git-diff.svg ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PCEtLUNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLi0tPgo8IS0tQ29weXJpZ2h0IChDKSAyMDE5IFR5cGVGb3ggYW5kIG90aGVycy4tLT4KPCEtLUxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uLS0+CjxzdmcgZmlsbD0iI0Y2RjZGNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE2IDE2IiB3aWR0aD0iMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgICA8cGF0aCBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Im02IDEyaC0xYy0uMjctLjAyLS40OC0uMTEtLjY5LS4zMXMtLjMtLjQyLS4zMS0uNjl2LTYuMjhjLjU5LS4zNCAxLS45OCAxLTEuNzIgMC0xLjExLS44OS0yLTItMnMtMiAuODktMiAyYzAgLjczLjQxIDEuMzggMSAxLjcydjYuMjhjLjAzLjc4LjM0IDEuNDcuOTQgMi4wNnMxLjI4LjkxIDIuMDYuOTRjMCAwIDEuMDIgMCAxIDB2MmwzLTMtMy0zem0tMy0xMC4yYy42NiAwIDEuMi41NSAxLjIgMS4ycy0uNTUgMS4yLTEuMiAxLjItMS4yLS41NS0xLjItMS4yLjU1LTEuMiAxLjItMS4yem0xMSA5LjQ4YzAtMS43MyAwLTYuMjggMC02LjI4LS4wMy0uNzgtLjM0LTEuNDctLjk0LTIuMDZzLTEuMjgtLjkxLTIuMDYtLjk0aC0xdi0ybC0zIDMgMyAzdi0yaDFjLjI3LjAyLjQ4LjExLjY5LjMxcy4zLjQyLjMxLjY5djYuMjhjLS41OS4zNC0xIC45OC0xIDEuNzIgMCAxLjExLjg5IDIgMiAyczItLjg5IDItMmMwLS43My0uNDEtMS4zOC0xLTEuNzJ6bS0xIDIuOTJjLS42NiAwLTEuMi0uNTUtMS4yLTEuMnMuNTUtMS4yIDEuMi0xLjIgMS4yLjU1IDEuMiAxLjItLjU1IDEuMi0xLjIgMS4yeiIgZmlsbD0iI0Y2RjZGNiIgZmlsbC1ydWxlPSJldmVub2RkIiAvPgo8L3N2Zz4K"

/***/ }),

/***/ "./node_modules/@theia/git/src/browser/style/git-icons.css":
/*!*****************************************************************!*\
  !*** ./node_modules/@theia/git/src/browser/style/git-icons.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../css-loader!./git-icons.css */ "./node_modules/css-loader/index.js!./node_modules/@theia/git/src/browser/style/git-icons.css");

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

/***/ "./node_modules/@theia/git/src/browser/style/git.svg":
/*!***********************************************************!*\
  !*** ./node_modules/@theia/git/src/browser/style/git.svg ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PCEtLUNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLi0tPgo8IS0tQ29weXJpZ2h0IChDKSAyMDE5IFR5cGVGb3ggYW5kIG90aGVycy4tLT4KPCEtLUxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uLS0+CjxzdmcgZmlsbD0iI0Y2RjZGNiIgaGVpZ2h0PSIyOCIgdmlld0JveD0iMCAwIDI4IDI4IiB3aWR0aD0iMjgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggY2xpcC1ydWxlPSJldmVub2RkIiBkPSJtMjAgMGMtMi4yMiAwLTQgMS43OC00IDQgMCAxLjQ2LjgyIDIuNzYgMiAzLjQ0djIuNTZsLTQgNC00LTR2LTIuNTZjMS4xOC0uNjggMi0xLjk2IDItMy40NCAwLTIuMjItMS43OC00LTQtNHMtNCAxLjc4LTQgNGMwIDEuNDYuODIgMi43NiAyIDMuNDR2My41Nmw2IDZ2My41NmMtMS4xOC42OC0yIDEuOTYtMiAzLjQ0IDAgMi4yMiAxLjc4IDQgNCA0czQtMS43OCA0LTRjMC0xLjQ2LS44Mi0yLjc2LTItMy40NHYtMy41Nmw2LTZ2LTMuNTZjMS4xOC0uNjggMi0xLjk2IDItMy40NCAwLTIuMjItMS43OC00LTQtNHptLTEyIDYuNGMtMS4zMiAwLTIuNC0xLjEtMi40LTIuNHMxLjEtMi40IDIuNC0yLjQgMi40IDEuMSAyLjQgMi40LTEuMSAyLjQtMi40IDIuNHptNiAyMGMtMS4zMiAwLTIuNC0xLjEtMi40LTIuNHMxLjEtMi40IDIuNC0yLjQgMi40IDEuMSAyLjQgMi40LTEuMSAyLjQtMi40IDIuNHptNi0yMGMtMS4zMiAwLTIuNC0xLjEtMi40LTIuNHMxLjEtMi40IDIuNC0yLjQgMi40IDEuMSAyLjQgMi40LTEuMSAyLjQtMi40IDIuNHoiIGZpbGw9IiNGNkY2RjYiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPgo="

/***/ }),

/***/ "./node_modules/@theia/git/src/browser/style/history.css":
/*!***************************************************************!*\
  !*** ./node_modules/@theia/git/src/browser/style/history.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../css-loader!./history.css */ "./node_modules/css-loader/index.js!./node_modules/@theia/git/src/browser/style/history.css");

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

/***/ "./node_modules/@theia/git/src/browser/style/index.css":
/*!*************************************************************!*\
  !*** ./node_modules/@theia/git/src/browser/style/index.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../css-loader!./index.css */ "./node_modules/css-loader/index.js!./node_modules/@theia/git/src/browser/style/index.css");

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

/***/ "./node_modules/css-loader/index.js!./node_modules/@theia/git/src/browser/style/diff.css":
/*!**************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/@theia/git/src/browser/style/diff.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(/*! ../../../../../css-loader/lib/url/escape.js */ "./node_modules/css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__(/*! ../../../../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/********************************************************************************\n * Copyright (C) 2018 TypeFox and others.\n *\n * This program and the accompanying materials are made available under the\n * terms of the Eclipse Public License v. 2.0 which is available at\n * http://www.eclipse.org/legal/epl-2.0.\n *\n * This Source Code may also be made available under the following Secondary\n * Licenses when the conditions for such availability set forth in the Eclipse\n * Public License v. 2.0 are satisfied: GNU General Public License, version 2\n * with the GNU Classpath Exception which is available at\n * https://www.gnu.org/software/classpath/license.html.\n *\n * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0\n ********************************************************************************/\n\n.theia-git {\n    color: var(--theia-ui-font-color1);\n}\n\n.theia-git-diff-icon {\n    -webkit-mask: url(" + escape(__webpack_require__(/*! ./git-diff.svg */ "./node_modules/@theia/git/src/browser/style/git-diff.svg")) + ");\n    mask: url(" + escape(__webpack_require__(/*! ./git-diff.svg */ "./node_modules/@theia/git/src/browser/style/git-diff.svg")) + ");\n}\n\n.theia-git .git-diff-container {\n    display: flex;\n    flex-direction: column;\n    position: relative;\n    height: 100%;\n}\n\n.theia-git .revision .row-title {\n    width: 35px;\n    display: inline-block;\n}\n\n.theia-git .diff-header {\n    flex-shrink: 0;\n}\n\n.theia-git .header-row {\n    display: flex;\n    flex-direction: row;\n}\n\n.theia-git .header-row.diff-header,\n.theia-git .header-row.diff-nav {\n    margin-bottom: 10px;\n}\n\n.theia-git .header-value {\n    margin: 9px 0px 5px 5px;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n}\n\n.theia-git .diff-header .header-value {\n    align-self: center;\n    margin: 0px;\n}\n\n.theia-git .diff-header .theia-header {\n    align-self: center;\n    padding-right: 5px;\n}\n\n.theia-git .gitItem.diff-file {\n    margin: 1px 0 !important;\n    padding: 0 !important;\n}\n\n.theia-git .gitItem.diff-file:hover {\n    background-color: inherit !important;\n    cursor: inherit !important;\n}\n\n.theia-git .lrBtns {\n    display:flex;\n    align-items: center;\n    margin-right: 2px;\n}\n\n.theia-git .lrBtns span {\n    display: inline-block;\n    margin-left: 10px;\n    cursor: pointer;\n}\n\n.theia-git .listContainer.filesChanged {\n    flex: 1;\n    overflow: auto;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/@theia/git/src/browser/style/dirty-diff-decorator.css":
/*!******************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/@theia/git/src/browser/style/dirty-diff-decorator.css ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*---------------------------------------------------------------------------------------------\n *  Copyright (c) Microsoft Corporation. All rights reserved.\n *  Licensed under the MIT License. See License.txt in the project root for license information.\n *--------------------------------------------------------------------------------------------*/\n\n.dirty-diff-glyph {\n\tmargin-left: 5px;\n\tcursor: pointer;\n}\n\n.dirty-diff-removed-line:after {\n\tcontent: '';\n\tposition: absolute;\n\tbottom: -4px;\n\tbox-sizing: border-box;\n\twidth: 4px;\n\theight: 0;\n\tz-index: 9;\n\tborder-top: 4px solid transparent;\n\tborder-bottom: 4px solid transparent;\n\ttransition: border-top-width 80ms linear, border-bottom-width 80ms linear, bottom 80ms linear;\n}\n\n.dirty-diff-glyph:before {\n\tposition: absolute;\n\tcontent: '';\n\theight: 100%;\n\twidth: 0;\n\tleft: -2px;\n\ttransition: width 80ms linear, left 80ms linear;\n}\n\n.dirty-diff-removed-line:before {\n\tmargin-left: 3px;\n\theight: 0;\n\tbottom: 0;\n\ttransition: height 80ms linear;\n}\n\n.margin-view-overlays > div:hover > .dirty-diff-glyph:before {\n\tposition: absolute;\n\tcontent: '';\n\theight: 100%;\n\twidth: 9px;\n\tleft: -6px;\n}\n\n.margin-view-overlays > div:hover > .dirty-diff-removed-line:after {\n\tbottom: 0;\n\tborder-top-width: 0;\n\tborder-bottom-width: 0;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/@theia/git/src/browser/style/dirty-diff.css":
/*!********************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/@theia/git/src/browser/style/dirty-diff.css ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports
exports.i(__webpack_require__(/*! -!../../../../../css-loader!./dirty-diff-decorator.css */ "./node_modules/css-loader/index.js!./node_modules/@theia/git/src/browser/style/dirty-diff-decorator.css"), "");

// module
exports.push([module.i, "/********************************************************************************\n * Copyright (C) 2018 TypeFox and others.\n *\n * This program and the accompanying materials are made available under the\n * terms of the Eclipse Public License v. 2.0 which is available at\n * http://www.eclipse.org/legal/epl-2.0.\n *\n * This Source Code may also be made available under the following Secondary\n * Licenses when the conditions for such availability set forth in the Eclipse\n * Public License v. 2.0 are satisfied: GNU General Public License, version 2\n * with the GNU Classpath Exception which is available at\n * https://www.gnu.org/software/classpath/license.html.\n *\n * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0\n ********************************************************************************/\n\n.dirty-diff-added-line {\n\tborder-left: 3px solid var(--theia-added-color0);\n}\n.dirty-diff-added-line:before {\n\tbackground: var(--theia-added-color0);\n}\n\n.dirty-diff-removed-line:after {\n\tborder-left: 4px solid var(--theia-removed-color0);\n}\n.dirty-diff-removed-line:before {\n\tbackground: var(--theia-removed-color0);\n}\n\n.dirty-diff-modified-line {\n\tborder-left: 3px solid var(--theia-modified-color0);\n}\n.dirty-diff-modified-line:before {\n\tbackground: var(--theia-modified-color0);\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/@theia/git/src/browser/style/git-icons.css":
/*!*******************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/@theia/git/src/browser/style/git-icons.css ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(/*! ../../../../../css-loader/lib/url/escape.js */ "./node_modules/css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__(/*! ../../../../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/********************************************************************************\n * Copyright (C) 2018 TypeFox and others.\n *\n * This program and the accompanying materials are made available under the\n * terms of the Eclipse Public License v. 2.0 which is available at\n * http://www.eclipse.org/legal/epl-2.0.\n *\n * This Source Code may also be made available under the following Secondary\n * Licenses when the conditions for such availability set forth in the Eclipse\n * Public License v. 2.0 are satisfied: GNU General Public License, version 2\n * with the GNU Classpath Exception which is available at\n * https://www.gnu.org/software/classpath/license.html.\n *\n * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0\n ********************************************************************************/\n\n.icon-git-commit {\n    mask-repeat: no-repeat;\n    mask-position: center;\n    background-color: var(--theia-ui-font-color1);\n    -webkit-mask-repeat: no-repeat;\n    -webkit-mask-position: center;\n    mask-image: url(" + escape(__webpack_require__(/*! octicons/build/svg/git-commit.svg */ "./node_modules/octicons/build/svg/git-commit.svg")) + ");\n    -webkit-mask-image: url(" + escape(__webpack_require__(/*! octicons/build/svg/git-commit.svg */ "./node_modules/octicons/build/svg/git-commit.svg")) + ");\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/@theia/git/src/browser/style/history.css":
/*!*****************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/@theia/git/src/browser/style/history.css ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/********************************************************************************\n * Copyright (C) 2018 TypeFox and others.\n *\n * This program and the accompanying materials are made available under the\n * terms of the Eclipse Public License v. 2.0 which is available at\n * http://www.eclipse.org/legal/epl-2.0.\n *\n * This Source Code may also be made available under the following Secondary\n * Licenses when the conditions for such availability set forth in the Eclipse\n * Public License v. 2.0 are satisfied: GNU General Public License, version 2\n * with the GNU Classpath Exception which is available at\n * https://www.gnu.org/software/classpath/license.html.\n *\n * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0\n ********************************************************************************/\n\n.theia-git .commitListContainer .commitList .commitListElement {\n    margin: 3px 0;\n}\n\n.theia-git .commitListElement.first .containerHead{\n    border: none;\n}\n\n.theia-git .commitListElement .containerHead {\n    width: calc(100% - 5px);\n    height: 50px;\n    display: flex;\n    align-items: center;\n    border-top: 1px solid var(--theia-layout-color4);\n}\n\n.theia-git .commitListElement .containerHead:hover {\n    cursor: pointer;\n}\n\n.theia-git .commitListElement .containerHead .headContent {\n    display: flex;\n    width: 100%;\n    box-sizing: border-box;\n    padding: 0 8px 0 2px;\n}\n\n.theia-git .commitListElement .containerHead .headContent .image-container{\n    margin-right: 5px;\n}\n\n.theia-git .commitListElement .containerHead .headContent .image-container img{\n    width: 27px;\n}\n\n.theia-git .commitListElement .containerHead .headContent .headLabelContainer{\n    min-width: calc(100% - 93px);\n}\n\n.theia-git .commitListElement .containerHead .headContent .headLabelContainer.singleFileMode{\n    width: 100%;\n}\n\n.theia-git .commitListElement .containerHead .headContent .expansionToggle{\n    display: flex;\n    align-items: center;\n}\n\n.theia-git .commitListElement .containerHead .headContent .detailButton{\n    display: flex;\n    align-items: center;\n    visibility: hidden;\n    margin: 0 5px;\n}\n\n.theia-git .commitListElement .containerHead:hover .headContent .detailButton {\n    visibility: visible;\n}\n\n.theia-git .commitListElement .containerHead .headContent .expansionToggle > .toggle{\n    display: flex;\n    background: var(--theia-ui-expand-button-color);\n    padding: 5px;\n    border-radius: 7px;\n    margin-left: 5px;\n    align-items: center;\n    justify-content: flex-end;\n    min-width: 30px;\n    color: var(--theia-ui-expand-button-font-color);\n}\n\n.theia-git .commitBody {\n    padding-bottom: 10px;\n}\n\n.theia-git .commitFileList .theia-header {\n    margin-top: 5px;\n}\n\n.theia-git .commitTime {\n    color: var(--theia-ui-font-color2);\n    font-size: smaller;\n}\n\n.theia-git .git-diff-container .listContainer {\n    flex: 1;\n    position: relative;\n}\n\n.theia-git .git-diff-container .listContainer .commitList {\n    height: 100%;\n}\n\n.theia-git .git-diff-container .history-lazy-loading {\n    position: absolute;\n    height: 50px;\n    width: 100%;\n    bottom: -80px;\n    opacity: 0;\n    font-weight: bold;\n    justify-content: center;\n    align-items: center;\n    display: flex;\n    background: var(--theia-layout-color4);\n    border: var(--theia-border-width) var(--theia-border-color2) solid;\n    box-sizing: border-box;\n}\n\n.theia-git .git-diff-container .history-lazy-loading.show {\n    bottom: 0px;\n    opacity:0;\n    animation: showFrames ease-out 0.2s forwards;\n    -webkit-animation: showFrames ease-out 0.2s forwards;\n  }\n\n  @keyframes showFrames{\n    0% {\n      opacity:0;\n      bottom:-80px  ;\n    }\n    100% {\n      opacity:1;\n      bottom:0px;\n    }\n  }\n\n.theia-git .git-diff-container .history-lazy-loading.hide {\n    bottom: 80px;\n    opacity:1;\n    animation: hideFrames ease-out 0.2s forwards;\n    -webkit-animation: hideFrames ease-out 0.2s forwards;\n  }\n\n  @keyframes hideFrames{\n    0% {\n      opacity:1;\n      bottom:  0px  ;\n    }\n    100% {\n      opacity:0;\n      bottom: -80px  ;\n    }\n  }\n\n.theia-git .git-diff-container .subject {\n    font-size: var(--theia-ui-font-size2);\n    font-weight: bold;\n}\n\n.theia-git .git-diff-container .commit-info {\n    padding-left: 10px;\n    box-sizing: border-box;\n    overflow: hidden;\n}\n\n.theia-git .git-diff-container .commit-info-row {\n    align-items: center;\n    margin-top: 10px;\n}\n\n.theia-git .commit-info .header-row {\n    margin: 4px 0;\n}\n\n.theia-git .commit-info .header-row .theia-header {\n    margin: 1px 0;\n}\n\n.theia-git .commit-info .header-row .header-value {\n    margin: 0 0 0 5px;\n}\n\n.theia-git .commit-info-row .image-container {\n    display: flex;\n}\n\n.tab-git-icon {\n    width: 20px!important;\n    height: 20px;\n}\n\n.theia-git .message-container {\n    height: 100%;\n    display: flex;\n    align-items: flex-start;\n    justify-content: center;\n}\n\n.git-history-tab-icon::before {\n    content: \"\\F1DA\"\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/@theia/git/src/browser/style/index.css":
/*!***************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/@theia/git/src/browser/style/index.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(/*! ../../../../../css-loader/lib/url/escape.js */ "./node_modules/css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__(/*! ../../../../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/********************************************************************************\n * Copyright (C) 2018 TypeFox and others.\n *\n * This program and the accompanying materials are made available under the\n * terms of the Eclipse Public License v. 2.0 which is available at\n * http://www.eclipse.org/legal/epl-2.0.\n *\n * This Source Code may also be made available under the following Secondary\n * Licenses when the conditions for such availability set forth in the Eclipse\n * Public License v. 2.0 are satisfied: GNU General Public License, version 2\n * with the GNU Classpath Exception which is available at\n * https://www.gnu.org/software/classpath/license.html.\n *\n * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0\n ********************************************************************************/\n\n.theia-git {\n    color: var(--theia-ui-font-color1);\n    padding: 5px;\n    box-sizing: border-box;\n}\n\n.theia-side-panel .theia-git {\n    padding-left: 19px;\n}\n\n.theia-git:focus, .theia-git :focus {\n    outline: 0;\n    box-shadow: none;\n    border: none;\n}\n\n.theia-git .noWrapInfo {\n    width: 100%;\n}\n\n.theia-git .space-between {\n    justify-content: space-between;\n}\n\n.theia-git .gitItem {\n    margin: 1px 0 1px 3px;\n    padding: 2px;\n    font-size: var(--theia-ui-font-size1);\n    display: flex;\n    justify-content: space-between;\n}\n\n.theia-git .gitItem .file-icon {\n    display: initial;\n}\n\n.theia-git .gitItem:hover {\n    background-color: var(--theia-layout-color2);\n    cursor: pointer;\n}\n\n.theia-git .gitItem .path {\n    color: var(--theia-ui-font-color2);\n    font-size: var(--theia-ui-font-size0);\n    margin-left: 3px;\n}\n\n.theia-git .gitItem .status {\n    padding: 2px 4px;\n    font-size: var(--theia-ui-font-size0);\n}\n\n.theia-git .gitItem .status.new {\n    color: var(--theia-success-color0);\n}\n\n.theia-git .gitItem .status.new.staged {\n    color: var(--theia-success-color0);\n}\n\n.theia-git .gitItem .status.modified {\n    color: var(--theia-brand-color0);\n}\n\n.theia-git .gitItem .status.deleted {\n    color: var(--theia-warn-color0);\n}\n\n.theia-git .gitItem .status.renamed {\n    color: var(--theia-brand-color0);\n}\n\n.theia-git .gitItem .status.conflicted {\n    color: var(--theia-error-color0);\n}\n\n.theia-git .gitItem .status.copied {\n    color: var(--theia-brand-color0);\n}\n\n.theia-git div:focus .theia-mod-selected{\n    background: var(--theia-accent-color3);\n}\n\n.theia-git .theia-mod-selected{\n    background: var(--theia-accent-color4);\n}\n\n.theia-git-main-container {\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n}\n\n.theia-git-commit-message-container textarea {\n    line-height: var(--theia-content-line-height);\n    font-size: var(--theia-ui-font-size1);\n    color: var(--theia-ui-font-color1);\n    background: var(--theia-layout-color2);\n    border-style: solid;\n    border-width: 1px;\n    resize: none;\n    box-sizing: border-box;\n    padding-left: 4px;\n}\n\n.theia-git-commit-message {\n    width: 100%;\n}\n\n.theia-git-commit-message-idle {\n    border-color: var(--theia-border-color0);\n}\n\n.theia-git-commit-message-info {\n    border-color: var(--theia-info-color0);\n}\n\n.theia-git-commit-message-success {\n    border-color: var(--theia-success-color0);\n}\n\n.theia-git-commit-message-warning {\n    border-color: var(--theia-warn-color0);\n}\n\n.theia-git-commit-message-error {\n    border-color: var(--theia-error-color0) !important;\n}\n\n.theia-git-message,\n.theia-git-commit-validation-message {\n    padding: 4px 4px 4px 4px;\n}\n\n.theia-git-validation-message-idle {\n    background-color: var(--theia-border-color0) !important;\n}\n\n.theia-git-validation-message-info {\n    background-color: var(--theia-info-color0) !important;\n    color: var(--theia-info-font-color0);\n}\n\n.theia-git-validation-message-success {\n    background-color: var(--theia-success-color0) !important;\n    color: var(--theia-success-font-color0);\n}\n\n.theia-git-message-warning,\n.theia-git-validation-message-warning {\n    background-color: var(--theia-warn-color0) !important;\n    color: var(--theia-warn-font-color0);\n}\n\n.theia-git-validation-message-error {\n    background-color: var(--theia-error-color0) !important;\n    color: var(--theia-error-font-color0);\n}\n\n.git-tab-icon {\n    -webkit-mask: url(" + escape(__webpack_require__(/*! ./git.svg */ "./node_modules/@theia/git/src/browser/style/git.svg")) + ");\n    mask: url(" + escape(__webpack_require__(/*! ./git.svg */ "./node_modules/@theia/git/src/browser/style/git.svg")) + ");\n}\n\n.git-theia-header {\n    padding: 5px;\n    display: flex;\n    justify-content: space-between;\n}\n\n.git-theia-header:hover {\n    background-color: var(--theia-layout-color2);\n    cursor: pointer;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/octicons/build/svg/git-commit.svg":
/*!********************************************************!*\
  !*** ./node_modules/octicons/build/svg/git-commit.svg ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNCIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE0IDE2Ij48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMC44NiA3Yy0uNDUtMS43Mi0yLTMtMy44Ni0zLTEuODYgMC0zLjQxIDEuMjgtMy44NiAzSDB2MmgzLjE0Yy40NSAxLjcyIDIgMyAzLjg2IDMgMS44NiAwIDMuNDEtMS4yOCAzLjg2LTNIMTRWN2gtMy4xNHpNNyAxMC4yYy0xLjIyIDAtMi4yLS45OC0yLjItMi4yIDAtMS4yMi45OC0yLjIgMi4yLTIuMiAxLjIyIDAgMi4yLjk4IDIuMiAyLjIgMCAxLjIyLS45OCAyLjItMi4yIDIuMnoiLz48L3N2Zz4="

/***/ })

}]);
//# sourceMappingURL=36.bundle.js.map