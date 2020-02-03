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
var common_1 = require("@theia/core/lib/common");
var inversify_1 = require("inversify");
exports.fileSystemPath = '/services/filesystem';
exports.FileSystem = Symbol('FileSystem');
var FileAccess;
(function (FileAccess) {
    var Constants;
    (function (Constants) {
        /**
         * Flag indicating that the file is visible to the calling process.
         * This is useful for determining if a file exists, but says nothing about rwx permissions. Default if no mode is specified.
         */
        Constants.F_OK = 0;
        /**
         * Flag indicating that the file can be read by the calling process.
         */
        Constants.R_OK = 4;
        /**
         * Flag indicating that the file can be written by the calling process.
         */
        Constants.W_OK = 2;
        /**
         * Flag indicating that the file can be executed by the calling process.
         * This has no effect on Windows (will behave like `FileAccess.F_OK`).
         */
        Constants.X_OK = 1;
    })(Constants = FileAccess.Constants || (FileAccess.Constants = {}));
})(FileAccess = exports.FileAccess || (exports.FileAccess = {}));
/**
 * A callback type, called when we try to save a file but realize it has been
 * modified by somebody else since we have opened it.  `originalStat` is the
 * stat at the moment we opened the file, `currentStat` is the stat at the
 * moment we try to save it (after the external modification).  The callback
 * should return true if we still want to save the file, false otherwise.
 */
exports.FileShouldOverwrite = Symbol('FileShouldOverwrite');
var DispatchingFileSystemClient = /** @class */ (function () {
    function DispatchingFileSystemClient() {
        this.clients = new Set();
    }
    DispatchingFileSystemClient.prototype.shouldOverwrite = function (originalStat, currentStat) {
        return Promise.race(__spread(this.clients).map(function (client) {
            return client.shouldOverwrite(originalStat, currentStat);
        }));
    };
    DispatchingFileSystemClient.prototype.onDidMove = function (sourceUri, targetUri) {
        this.clients.forEach(function (client) { return client.onDidMove(sourceUri, targetUri); });
    };
    DispatchingFileSystemClient.prototype.onWillMove = function (sourceUri, targetUri) {
        this.clients.forEach(function (client) { return client.onWillMove(sourceUri, targetUri); });
    };
    DispatchingFileSystemClient = __decorate([
        inversify_1.injectable()
    ], DispatchingFileSystemClient);
    return DispatchingFileSystemClient;
}());
exports.DispatchingFileSystemClient = DispatchingFileSystemClient;
var FileStat;
(function (FileStat) {
    function is(candidate) {
        return typeof candidate === 'object' && ('uri' in candidate) && ('lastModification' in candidate) && ('isDirectory' in candidate);
    }
    FileStat.is = is;
    function equals(one, other) {
        if (!one || !other || !is(one) || !is(other)) {
            return false;
        }
        return one.uri === other.uri
            && one.lastModification === other.lastModification
            && one.isDirectory === other.isDirectory;
    }
    FileStat.equals = equals;
})(FileStat = exports.FileStat || (exports.FileStat = {}));
var FileSystemError;
(function (FileSystemError) {
    FileSystemError.FileNotFound = common_1.ApplicationError.declare(-33000, function (uri, prefix) { return ({
        message: (prefix ? prefix + ' ' : '') + "'" + uri + "' has not been found.",
        data: { uri: uri }
    }); });
    FileSystemError.FileExists = common_1.ApplicationError.declare(-33001, function (uri, prefix) { return ({
        message: (prefix ? prefix + ' ' : '') + "'" + uri + "' already exists.",
        data: { uri: uri }
    }); });
    FileSystemError.FileIsDirectory = common_1.ApplicationError.declare(-33002, function (uri, prefix) { return ({
        message: (prefix ? prefix + ' ' : '') + "'" + uri + "' is a directory.",
        data: { uri: uri }
    }); });
    FileSystemError.FileNotDirectory = common_1.ApplicationError.declare(-33003, function (uri, prefix) { return ({
        message: (prefix ? prefix + ' ' : '') + "'" + uri + "' is not a directory.",
        data: { uri: uri }
    }); });
    FileSystemError.FileIsOutOfSync = common_1.ApplicationError.declare(-33004, function (file, stat) { return ({
        message: "'" + file.uri + "' is out of sync.",
        data: { file: file, stat: stat }
    }); });
})(FileSystemError = exports.FileSystemError || (exports.FileSystemError = {}));
//# sourceMappingURL=filesystem.js.map