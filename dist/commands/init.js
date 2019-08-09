'use strict';

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _get = require('../utils/get');

var _ora = require('ora');

var _ora2 = _interopRequireDefault(_ora);

var _inquirer = require('inquirer');

var _inquirer2 = _interopRequireDefault(_inquirer);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

var _logSymbols = require('log-symbols');

var _logSymbols2 = _interopRequireDefault(_logSymbols);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * 初始化
 * @param templateName
 * @param projectName
 * @returns {Promise<void>}
 */
// 终端loading
var init = function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(templateName, projectName) {
        return _regenerator2.default.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        if (!_fs2.default.existsSync(projectName)) {
                            // 命令行交互
                            _inquirer2.default.prompt([{
                                name: 'description',
                                message: 'please enter your project description:',
                                default: 'this-is-a-project'
                            }, {
                                name: 'author',
                                message: 'please enter author name:',
                                default: 'superMan'
                            }, {
                                name: 'version',
                                message: 'please enter version(eg: 1.0.0):',
                                default: "1.0.0"
                            }]).then(function () {
                                var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(answer) {
                                    var loading;
                                    return _regenerator2.default.wrap(function _callee$(_context) {
                                        while (1) {
                                            switch (_context.prev = _context.next) {
                                                case 0:
                                                    // 下载模板 选择模板
                                                    // 通过配置文件 获取信息
                                                    loading = (0, _ora2.default)('downloading template ...');

                                                    loading.start();

                                                    (0, _get.downLoadGitRepoLocal)(templateName, projectName).then(function () {
                                                        loading.succeed();
                                                        console.log('finish =========');
                                                        var fileName = projectName + '/package.json';
                                                        if (_fs2.default.existsSync(fileName)) {
                                                            var data = _fs2.default.readFileSync(fileName).toString();
                                                            var json = JSON.parse(data);
                                                            json = (0, _extends3.default)({}, json, { answer: answer });
                                                            _fs2.default.writeFileSync(fileName, (0, _stringify2.default)(json, null, '\t'), 'utf-8');
                                                            console.log(_logSymbols2.default.success, _chalk2.default.green('project created successful 😊'));
                                                        }
                                                    }, function () {
                                                        loading.fail();
                                                    });

                                                case 3:
                                                case 'end':
                                                    return _context.stop();
                                            }
                                        }
                                    }, _callee, undefined);
                                }));

                                return function (_x3) {
                                    return _ref2.apply(this, arguments);
                                };
                            }());
                        } else {
                            console.log(_logSymbols2.default.error, _chalk2.default.red(projectName + ' is already exists \u274C'));
                        }

                    case 1:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee2, undefined);
    }));

    return function init(_x, _x2) {
        return _ref.apply(this, arguments);
    };
}(); // 终端选择提问

module.exports = init;