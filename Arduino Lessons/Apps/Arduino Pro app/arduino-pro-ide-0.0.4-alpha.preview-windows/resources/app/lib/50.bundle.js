(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[50],{

/***/ "./node_modules/@theia/search-in-workspace/lib/browser/search-in-workspace-frontend-module.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@theia/search-in-workspace/lib/browser/search-in-workspace-frontend-module.js ***!
  \****************************************************************************************************/
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
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(/*! ../../src/browser/styles/index.css */ "./node_modules/@theia/search-in-workspace/src/browser/styles/index.css");
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var search_in_workspace_service_1 = __webpack_require__(/*! ./search-in-workspace-service */ "./node_modules/@theia/search-in-workspace/lib/browser/search-in-workspace-service.js");
var search_in_workspace_interface_1 = __webpack_require__(/*! ../common/search-in-workspace-interface */ "./node_modules/@theia/search-in-workspace/lib/common/search-in-workspace-interface.js");
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "./node_modules/@theia/core/lib/browser/index.js");
var core_1 = __webpack_require__(/*! @theia/core */ "./node_modules/@theia/core/lib/common/index.js");
var search_in_workspace_widget_1 = __webpack_require__(/*! ./search-in-workspace-widget */ "./node_modules/@theia/search-in-workspace/lib/browser/search-in-workspace-widget.js");
var search_in_workspace_result_tree_widget_1 = __webpack_require__(/*! ./search-in-workspace-result-tree-widget */ "./node_modules/@theia/search-in-workspace/lib/browser/search-in-workspace-result-tree-widget.js");
var search_in_workspace_frontend_contribution_1 = __webpack_require__(/*! ./search-in-workspace-frontend-contribution */ "./node_modules/@theia/search-in-workspace/lib/browser/search-in-workspace-frontend-contribution.js");
var in_memory_text_resource_1 = __webpack_require__(/*! ./in-memory-text-resource */ "./node_modules/@theia/search-in-workspace/lib/browser/in-memory-text-resource.js");
var search_in_workspace_context_key_service_1 = __webpack_require__(/*! ./search-in-workspace-context-key-service */ "./node_modules/@theia/search-in-workspace/lib/browser/search-in-workspace-context-key-service.js");
var tab_bar_toolbar_1 = __webpack_require__(/*! @theia/core/lib/browser/shell/tab-bar-toolbar */ "./node_modules/@theia/core/lib/browser/shell/tab-bar-toolbar.js");
var search_in_workspace_preferences_1 = __webpack_require__(/*! ./search-in-workspace-preferences */ "./node_modules/@theia/search-in-workspace/lib/browser/search-in-workspace-preferences.js");
exports.default = new inversify_1.ContainerModule(function (bind) {
    bind(search_in_workspace_context_key_service_1.SearchInWorkspaceContextKeyService).toSelf().inSingletonScope();
    bind(search_in_workspace_widget_1.SearchInWorkspaceWidget).toSelf();
    bind(browser_1.WidgetFactory).toDynamicValue(function (ctx) { return ({
        id: search_in_workspace_widget_1.SearchInWorkspaceWidget.ID,
        createWidget: function () { return ctx.container.get(search_in_workspace_widget_1.SearchInWorkspaceWidget); }
    }); });
    bind(search_in_workspace_result_tree_widget_1.SearchInWorkspaceResultTreeWidget).toDynamicValue(function (ctx) { return createSearchTreeWidget(ctx.container); });
    browser_1.bindViewContribution(bind, search_in_workspace_frontend_contribution_1.SearchInWorkspaceFrontendContribution);
    bind(browser_1.FrontendApplicationContribution).toService(search_in_workspace_frontend_contribution_1.SearchInWorkspaceFrontendContribution);
    bind(tab_bar_toolbar_1.TabBarToolbarContribution).toService(search_in_workspace_frontend_contribution_1.SearchInWorkspaceFrontendContribution);
    // The object that gets notified of search results.
    bind(search_in_workspace_service_1.SearchInWorkspaceClientImpl).toSelf().inSingletonScope();
    bind(search_in_workspace_service_1.SearchInWorkspaceService).toSelf().inSingletonScope();
    // The object to call methods on the backend.
    bind(search_in_workspace_interface_1.SearchInWorkspaceServer).toDynamicValue(function (ctx) {
        var client = ctx.container.get(search_in_workspace_service_1.SearchInWorkspaceClientImpl);
        return browser_1.WebSocketConnectionProvider.createProxy(ctx.container, search_in_workspace_interface_1.SIW_WS_PATH, client);
    }).inSingletonScope();
    bind(in_memory_text_resource_1.InMemoryTextResourceResolver).toSelf().inSingletonScope();
    bind(core_1.ResourceResolver).toService(in_memory_text_resource_1.InMemoryTextResourceResolver);
    search_in_workspace_preferences_1.bindSearchInWorkspacePreferences(bind);
});
function createSearchTreeWidget(parent) {
    var child = browser_1.createTreeContainer(parent);
    child.unbind(browser_1.TreeWidget);
    child.bind(search_in_workspace_result_tree_widget_1.SearchInWorkspaceResultTreeWidget).toSelf();
    return child.get(search_in_workspace_result_tree_widget_1.SearchInWorkspaceResultTreeWidget);
}
exports.createSearchTreeWidget = createSearchTreeWidget;


/***/ }),

/***/ "./node_modules/@theia/search-in-workspace/src/browser/styles/index.css":
/*!******************************************************************************!*\
  !*** ./node_modules/@theia/search-in-workspace/src/browser/styles/index.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../css-loader!./index.css */ "./node_modules/css-loader/index.js!./node_modules/@theia/search-in-workspace/src/browser/styles/index.css");

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

/***/ "./node_modules/@theia/search-in-workspace/src/browser/styles/search.svg":
/*!*******************************************************************************!*\
  !*** ./node_modules/@theia/search-in-workspace/src/browser/styles/search.svg ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PCEtLUNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLi0tPgo8IS0tQ29weXJpZ2h0IChDKSAyMDE5IFR5cGVGb3ggYW5kIG90aGVycy4tLT4KPCEtLUxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uLS0+CjxzdmcgZmlsbD0iI0Y2RjZGNiIgaGVpZ2h0PSIyOCIgdmlld0JveD0iMCAwIDI4IDI4IiB3aWR0aD0iMjgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgICA8cGF0aCBkPSJtMTcuMTI0OSAyYy00LjkxMjcgMC04Ljg5NzAxIDMuOTg1MzMtOC44OTcwMSA4Ljg5OSAwIDEuODA3LjU0Njg2IDMuNDgwMSAxLjQ3MDE0IDQuODg1MyAwIDAtNS41NjIgNS41MzQ2LTcuMjA1NjQgNy4yMDU2LTEuNjQ0NjYyIDEuNjcwMSAxLjAxNTYgNC4xMzA0IDIuNjM5OTcgMi40NDQyIDEuNjI1MzgtMS42ODMyIDcuMTA4MjQtNy4xMDcyIDcuMTA4MjQtNy4xMDcyIDEuNDA0Mi45MjQzIDMuMDc5MyAxLjQ3MTEgNC44ODQzIDEuNDcxMSA0LjkxNTcgMCA4LjktMy45ODczIDguOS04Ljg5OS4wMDEtNC45MTQ2OS0zLjk4NDMtOC44OTktOC45LTguODk5em0wIDE1LjI1NDRjLTMuNTA5NSAwLTYuMzU2NS0yLjg0NDktNi4zNTY1LTYuMzU1NCAwLTMuNTEwNDkgMi44NDYtNi4zNTY0MyA2LjM1NjUtNi4zNTY0MyAzLjUxMjUgMCA2LjM1NzQgMi44NDQ5MyA2LjM1NzQgNi4zNTY0MyAwIDMuNTEwNS0yLjg0NDkgNi4zNTU0LTYuMzU3NCA2LjM1NTR6IiBmaWxsPSIjRjZGNkY2IiAvPgo8L3N2Zz4K"

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/@theia/search-in-workspace/src/browser/styles/index.css":
/*!********************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/@theia/search-in-workspace/src/browser/styles/index.css ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(/*! ../../../../../css-loader/lib/url/escape.js */ "./node_modules/css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__(/*! ../../../../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/********************************************************************************\n * Copyright (C) 2017-2018 Ericsson and others.\n *\n * This program and the accompanying materials are made available under the\n * terms of the Eclipse Public License v. 2.0 which is available at\n * http://www.eclipse.org/legal/epl-2.0.\n *\n * This Source Code may also be made available under the following Secondary\n * Licenses when the conditions for such availability set forth in the Eclipse\n * Public License v. 2.0 are satisfied: GNU General Public License, version 2\n * with the GNU Classpath Exception which is available at\n * https://www.gnu.org/software/classpath/license.html.\n *\n * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0\n ********************************************************************************/\n\n :root {\n  --theia-current-search-match-color: var(--theia-word-highlight-color0);\n  --theia-range-highlight: var(--theia-word-highlight-color1);\n }\n\n.t-siw-search-container {\n    color: var(--theia-ui-font-color1);\n    padding: 5px ;\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n    box-sizing: border-box;\n}\n\n.t-siw-search-container .theia-ExpansionToggle {\n    padding-right: 4px;\n    min-width: 6px;\n}\n\n.t-siw-search-container input[type=\"text\"] {\n    flex: 1;\n    line-height: var(--theia-content-line-height);\n    font-size: var(--theia-ui-font-size1);\n    padding-left: 8px;\n    color: var(--theia-ui-font-color1);\n    padding: 3px 0 3px 4px;\n}\n\n.t-siw-search-container input[type=\"text\"]:focus {\n    outline: none;\n}\n\n.t-siw-search-container #search-input-field:focus {\n    border: none;\n}\n\n.t-siw-search-container #search-input-field {\n    background: none;\n    border: none;\n}\n\n.t-siw-search-container .searchHeader {\n    width: 100%;\n    margin-bottom:  10px;\n}\n\n.t-siw-search-container .searchHeader .controls.button-container {\n    height: 22px;\n    margin-bottom: 5px;\n}\n\n.t-siw-search-container .searchHeader .search-field-container {\n    background: var(--theia-layout-color2);\n    border-style: solid;\n    border-width: var(--theia-border-width);\n    border-color: var(--theia-border-color1);\n}\n\n.t-siw-search-container .searchHeader .search-field-container.focused {\n    border-color: var(--theia-accent-color3);\n}\n\n.t-siw-search-container .searchHeader .search-field {\n    display: flex;\n    align-items:  center;\n}\n\n.t-siw-search-container .searchHeader .search-field:focus {\n    border: none;\n}\n\n.t-siw-search-container .searchHeader .search-field .option {\n    opacity: 0.7;\n    cursor: pointer;\n}\n\n.t-siw-search-container .searchHeader .search-field .option.enabled {\n    border: var(--theia-border-width) var(--theia-accent-color3) solid;\n}\n\n.t-siw-search-container .searchHeader .search-field .option:hover {\n    opacity: 1;\n}\n\n.t-siw-search-container .searchHeader .search-field .option.match-case {\n    background-image: var(--theia-icon-case-sensitive);\n}\n\n.t-siw-search-container .searchHeader .search-field .option.whole-word {\n    background-image: var(--theia-icon-whole-word);\n}\n\n.t-siw-search-container .searchHeader .search-field .option.use-regexp {\n    background-image: var(--theia-icon-regex);\n}\n\n.t-siw-search-container .searchHeader .search-field .option-buttons {\n    height: 23px;\n    display: flex;\n    align-items:  center;\n    background-color: none;\n}\n\n.t-siw-search-container .searchHeader .search-field-container.tooManyResults {\n    border-style: solid;\n    border-width: var(--theia-border-width);\n    margin: -1px;\n    border-color: var(--theia-warn-color0);\n}\n\n.t-siw-search-container .searchHeader .search-field-container .search-notification {\n    height: 0;\n    display: none;\n    width: 100%;\n    position: relative;\n}\n\n.t-siw-search-container .searchHeader .search-field-container.focused .search-notification.show {\n    display: block;\n}\n\n.t-siw-search-container .searchHeader .search-notification div{\n    background-color: var(--theia-warn-color0);\n    width: calc(100% + 2px);\n    margin-left: -1px;\n    color: var(--theia-warn-font-color0);\n    z-index: 1000;\n    position: absolute;\n    border: 1px solid var(--theia-warn-color0);\n    box-sizing: border-box;\n    padding: 3px;\n}\n\n.t-siw-search-container .searchHeader .button-container {\n    text-align: center;\n    display: flex;\n    justify-content: center;\n}\n\n.t-siw-search-container .searchHeader .search-field .option,\n.t-siw-search-container .searchHeader .button-container .btn {\n    width: 21px;\n    height: 21px;\n    margin: 0 1px;\n    display: inline-block;\n    box-sizing: border-box;\n    align-items: center;\n    user-select: none;\n    background-repeat: no-repeat;\n    background-position: center;\n    border: var(--theia-border-width) solid transparent;\n}\n\n.t-siw-search-container .searchHeader .search-field .fa.option {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.t-siw-search-container .searchHeader .search-details {\n    position: relative;\n    padding-top: 5px;\n}\n\n.t-siw-search-container .searchHeader .search-details .button-container {\n    position: absolute;\n    width: 25px;\n    top:0;\n    right:0;\n}\n\n.t-siw-search-container .searchHeader .search-details .button-container .btn{\n    cursor: pointer;\n}\n\n.t-siw-search-container .searchHeader .glob-field-container.hidden {\n    display: none;\n}\n\n.t-siw-search-container .searchHeader .glob-field-container .glob-field {\n    margin-bottom: 8px;\n    margin-left: 14px;\n    display: flex;\n    flex-direction: column;\n}\n\n.t-siw-search-container .searchHeader .glob-field-container .glob-field .label {\n    margin-bottom: 3px;\n    user-select: none;\n    font-size: var(--theia-ui-font-size0);\n}\n\n.t-siw-search-container .resultContainer {\n    height: 100%;\n    margin-left: 13px;\n}\n\n.t-siw-search-container .result {\n    overflow: hidden;\n    width: 100%;\n}\n\n.t-siw-search-container .result .result-head {\n    display:flex;\n}\n\n.t-siw-search-container .result .result-head .result-no {\n    background: var(--theia-ui-expand-button-color);\n    padding: 3px 8px;\n    border-radius: 7px;\n    font-size: var(--theia-ui-font-size0);\n}\n\n.t-siw-search-container .result .result-head .expand-icon {\n    margin: 0 3px;\n    width: 7px;\n}\n\n.t-siw-search-container .result .result-head .file-icon {\n    margin: 0 3px;\n}\n\n.t-siw-search-container .result .result-head .file-name {\n    margin-right: 5px;\n}\n\n.t-siw-search-container .result .result-head .file-path {\n    color: var(--theia-ui-font-color2);\n    font-size: var(--theia-ui-font-size0);\n    margin-left: 3px;\n}\n\n.t-siw-search-container .resultLine .match {\n    background: var(--theia-word-highlight-match-color1);\n    line-height: normal;\n    white-space: pre;\n}\n\n.t-siw-search-container .resultLine .match.strike-through {\n    text-decoration: line-through;\n}\n\n.t-siw-search-container .resultLine.selected .match {\n    background: var(--theia-word-highlight-match-color1);\n}\n.t-siw-search-container .resultLine .replace-term {\n    background: var(--theia-word-highlight-replace-color0);\n}\n\n.t-siw-search-container .noWrapInfo {\n    width: 100%;\n}\n\n.result-head-info {\n    align-items: center;\n}\n\n.search-in-workspace-editor-match {\n    background: var(--theia-word-highlight-match-color0);\n}\n\n.current-search-in-workspace-editor-match {\n    background: var(--theia-current-search-match-color)\n}\n\n.current-match-range-highlight {\n    background: var(--theia-range-highlight);\n}\n\n.result-node-buttons {\n    display: none;\n}\n\n.theia-TreeNode:hover .result-node-buttons {\n    display: flex;\n    justify-content: flex-end;\n    flex: 1;\n    align-items: center;\n    align-self: center;\n}\n\n.theia-TreeNode:hover .notification-count-container {\n    display: none;\n}\n\n.result-node-buttons .remove-node {\n    background-image: var(--theia-icon-close);\n}\n\n.result-node-buttons > span {\n    width: 15px;\n    height: 15px;\n    margin-left: 2.5px;\n    margin-right: 0.5px;\n    background-repeat:  no-repeat;\n    background-position: center;\n    background-size: contain;\n}\n\n.search-and-replace-container {\n    display: flex;\n}\n\n.replace-toggle {\n    display: flex;\n    align-items:  center;\n    width: 15px;\n    min-width: 15px;\n    justify-content: center;\n    margin-right: 1px;\n    box-sizing: border-box;\n}\n\n.theia-side-panel .replace-toggle {\n    width: 13px;\n    min-width: 13px;\n}\n\n.replace-toggle:hover {\n    background: var(--theia-layout-color2);\n}\n\n.search-and-replace-fields {\n    display: flex;\n    flex-direction: column;\n    flex: 1;\n}\n\n.replace-field {\n    display: flex;\n    margin-top: 5px;\n}\n\n.replace-field.hidden {\n    display: none;\n}\n\n.replace-all-button-container {\n    width: 25px;\n    display: flex;\n    align-items: center;\n    justify-content:  center;\n}\n\n.replace-all-button {\n    width:  100%;\n    height: 100%;\n    display: inline-block;\n    background: var(--theia-icon-replace-all) no-repeat center;\n    cursor: pointer;\n}\n\n.result-node-buttons .replace-result {\n    background-image: var(--theia-icon-replace);\n}\n.result-node-buttons .replace-all-result {\n    background-image: var(--theia-icon-replace-all);\n}\n\n.replace-all-button.disabled {\n    opacity: var(--theia-mod-disabled-opacity);;\n    cursor: default;\n}\n\n.search-in-workspace-tab-icon {\n    -webkit-mask: url(" + escape(__webpack_require__(/*! ./search.svg */ "./node_modules/@theia/search-in-workspace/src/browser/styles/search.svg")) + ");\n    mask: url(" + escape(__webpack_require__(/*! ./search.svg */ "./node_modules/@theia/search-in-workspace/src/browser/styles/search.svg")) + ");\n}\n\n.highlighted-count-container {\n    background-color: var(--theia-brand-color0);\n    color: #ffffff;\n}\n\n.t-siw-search-container .searchHeader .search-info {\n    color: var(--theia-ui-font-color2);\n    margin-left: 17px;\n}\n\n.theia-siw-lineNumber {\n    color:  var(--theia-ui-font-color2);\n    padding-right: 4px;\n}\n", ""]);

// exports


/***/ })

}]);
//# sourceMappingURL=50.bundle.js.map