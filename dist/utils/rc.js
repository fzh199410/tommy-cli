'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.remove = exports.set = exports.getAll = exports.get = exports.modifyDefault = exports.createDefault = undefined;

var _deleteProperty = require('babel-runtime/core-js/reflect/delete-property');

var _deleteProperty2 = _interopRequireDefault(_deleteProperty);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _constants = require('./constants');

var _ini = require('ini');

var _util = require('util');

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var exists = (0, _util.promisify)(_fs2.default.exists);
var readFile = (0, _util.promisify)(_fs2.default.readFile);
var writeFile = (0, _util.promisify)(_fs2.default.writeFile);

var createDefault = exports.createDefault = function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.next = 2;
                        return writeFile(_constants.RC, (0, _ini.encode)((0, _extends3.default)({}, _constants.DEFAULTS)), 'utf8');

                    case 2:
                        console.log(_chalk2.default.green('created .tommyrc successfull'));

                    case 3:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, undefined);
    }));

    return function createDefault() {
        return _ref.apply(this, arguments);
    };
}();

var modifyDefault = exports.modifyDefault = function () {
    var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
        return _regenerator2.default.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        _context2.next = 2;
                        return writeFile(_constants.RC, (0, _ini.encode)((0, _extends3.default)({}, _constants.DEFAULTS, {
                            registry: 'fzh199410'
                        })), 'utf8');

                    case 2:
                        console.log(_chalk2.default.green('modified .tommyrc successfull'));

                    case 3:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee2, undefined);
    }));

    return function modifyDefault() {
        return _ref2.apply(this, arguments);
    };
}();

/**
 * 获取配置文件中的某个属性
 * @param key
 * @returns {Promise<string|*>}
 */
var get = exports.get = function () {
    var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(key) {
        var flag, opts;
        return _regenerator2.default.wrap(function _callee3$(_context3) {
            while (1) {
                switch (_context3.prev = _context3.next) {
                    case 0:
                        _context3.next = 2;
                        return exists(_constants.RC);

                    case 2:
                        flag = _context3.sent;
                        opts = void 0;

                        if (!flag) {
                            _context3.next = 10;
                            break;
                        }

                        _context3.next = 7;
                        return readFile(_constants.RC, 'utf8');

                    case 7:
                        opts = _context3.sent;

                        opts = (0, _ini.decode)(opts);
                        return _context3.abrupt('return', opts[key]);

                    case 10:
                        return _context3.abrupt('return', '');

                    case 11:
                    case 'end':
                        return _context3.stop();
                }
            }
        }, _callee3, undefined);
    }));

    return function get(_x) {
        return _ref3.apply(this, arguments);
    };
}();

/**
 * 获取所有配置信息
 * @returns {Promise<string|*>}
 */
var getAll = exports.getAll = function () {
    var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4() {
        var flag, opts;
        return _regenerator2.default.wrap(function _callee4$(_context4) {
            while (1) {
                switch (_context4.prev = _context4.next) {
                    case 0:
                        _context4.next = 2;
                        return exists(_constants.RC);

                    case 2:
                        flag = _context4.sent;
                        opts = void 0;

                        if (!flag) {
                            _context4.next = 10;
                            break;
                        }

                        _context4.next = 7;
                        return readFile(_constants.RC, 'utf8');

                    case 7:
                        opts = _context4.sent;

                        opts = (0, _ini.decode)(opts);
                        return _context4.abrupt('return', opts);

                    case 10:
                        return _context4.abrupt('return', '');

                    case 11:
                    case 'end':
                        return _context4.stop();
                }
            }
        }, _callee4, undefined);
    }));

    return function getAll() {
        return _ref4.apply(this, arguments);
    };
}();

/**
 * 设置配置
 * @param key
 * @param value
 * @returns {Promise<void>}
 */
var set = exports.set = function () {
    var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(key, value) {
        var flag, opts;
        return _regenerator2.default.wrap(function _callee5$(_context5) {
            while (1) {
                switch (_context5.prev = _context5.next) {
                    case 0:
                        if (key) {
                            _context5.next = 3;
                            break;
                        }

                        console.log(_chalk2.default.red(_chalk2.default.bold('Error:')), _chalk2.default.red('key is required'));
                        return _context5.abrupt('return');

                    case 3:
                        if (value) {
                            _context5.next = 6;
                            break;
                        }

                        console.log(_chalk2.default.red(_chalk2.default.bold('Error:')), _chalk2.default.red('value is required'));
                        return _context5.abrupt('return');

                    case 6:
                        _context5.next = 8;
                        return exists(_constants.RC);

                    case 8:
                        flag = _context5.sent;
                        opts = void 0;

                        if (!flag) {
                            _context5.next = 18;
                            break;
                        }

                        _context5.next = 13;
                        return readFile(_constants.RC, 'utf8');

                    case 13:
                        opts = _context5.sent;

                        opts = (0, _ini.decode)(opts);
                        opts = (0, _assign2.default)({}, opts, (0, _defineProperty3.default)({}, key, value));
                        _context5.next = 19;
                        break;

                    case 18:
                        opts = (0, _assign2.default)(_constants.DEFAULTS, (0, _defineProperty3.default)({}, key, value));

                    case 19:
                        _context5.next = 21;
                        return writeFile(_constants.RC, (0, _ini.encode)(opts), 'utf8');

                    case 21:
                    case 'end':
                        return _context5.stop();
                }
            }
        }, _callee5, undefined);
    }));

    return function set(_x2, _x3) {
        return _ref5.apply(this, arguments);
    };
}();

/**
 * 删除某项属性
 * @param key
 * @returns {Promise<void>}
 */
var remove = exports.remove = function () {
    var _ref6 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee6(key) {
        var flag, opts;
        return _regenerator2.default.wrap(function _callee6$(_context6) {
            while (1) {
                switch (_context6.prev = _context6.next) {
                    case 0:
                        if (key) {
                            _context6.next = 3;
                            break;
                        }

                        console.log(_chalk2.default.red(_chalk2.default.bold('Error:')), _chalk2.default.red('key is required'));
                        return _context6.abrupt('return');

                    case 3:
                        _context6.next = 5;
                        return exists(_constants.RC);

                    case 5:
                        flag = _context6.sent;
                        opts = void 0;

                        if (!flag) {
                            _context6.next = 15;
                            break;
                        }

                        _context6.next = 10;
                        return readFile(_constants.RC, 'utf8');

                    case 10:
                        opts = _context6.sent;

                        opts = (0, _ini.decode)(opts);
                        (0, _deleteProperty2.default)(opts, key);
                        _context6.next = 15;
                        return writeFile(_constants.RC, (0, _ini.encode)(opts), 'utf8');

                    case 15:
                    case 'end':
                        return _context6.stop();
                }
            }
        }, _callee6, undefined);
    }));

    return function remove(_x4) {
        return _ref6.apply(this, arguments);
    };
}();