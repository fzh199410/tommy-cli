'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.DEFAULTS = exports.RC = exports.VERSION_MAJOR_MINOR_PATCH = undefined;

var _package = require('../../package');

// 版本号
var VERSION_MAJOR_MINOR_PATCH = exports.VERSION_MAJOR_MINOR_PATCH = _package.version;

// 用户根目录
var HOME = process.env[process.platform === 'win32' ? 'USERPROFILE' : 'HOME'];

// 配置文件目录
var RC = exports.RC = HOME + '/.tommyrc';

// RC 配置下载模板的地方，给 github 的 api 使用
// https://api.github.com/users/stephenliu1944/repos

var DEFAULTS = exports.DEFAULTS = {
    registry: 'stephenliu1944',
    type: 'users'
};