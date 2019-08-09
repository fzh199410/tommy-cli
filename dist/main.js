'use strict';

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _get = require('babel-runtime/core-js/reflect/get');

var _get2 = _interopRequireDefault(_get);

var _ownKeys = require('babel-runtime/core-js/reflect/own-keys');

var _ownKeys2 = _interopRequireDefault(_ownKeys);

var _commander = require('commander');

var _commander2 = _interopRequireDefault(_commander);

var _constants = require('./utils/constants');

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _rc = require('./utils/rc');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *
 babel-cli/babel-env: 语法转换

 commander: 命令行工具

 download-git-repo: 用来下载远程模板

 ini: 格式转换

 inquirer: 交互式命令行工具

 ora: 显示loading动画

 chalk: 修改控制台输出内容样式

 log-symbols: 显示出 √ 或 × 等的图标

 */

var actionMap = {
    init: {
        description: 'generate a new project from template',
        usages: ['tommy init templateName projectName']
    },
    config: {
        alias: 'cfg',
        description: 'config tommyrc',
        usages: ['tommy config set <k> <v>', 'tommy config get <k>', 'tommy config remove <k>']
    }
    // Todo
};

var actionKeys = (0, _ownKeys2.default)(actionMap);

actionKeys.forEach(function (action) {
    var attrs = (0, _get2.default)(actionMap, action);
    _commander2.default.command(action).description(attrs.description).alias(attrs.alias).action(function () {
        switch (action) {
            case 'init':
            case 'config':
                _index2.default.apply(undefined, [action].concat((0, _toConsumableArray3.default)(process.argv.slice(3))));
                break;
            default:
                break;
        }
    });
});

function help() {
    console.log('\r\n Usage');
    actionKeys.forEach(function (action) {
        var _Reflect$get2 = (0, _get2.default)(actionMap, action),
            usages = _Reflect$get2.usages;

        usages.forEach(function (usage) {
            console.log('-' + usage);
        });
    });
    console.log('\r');
}

_commander2.default.usage('<command> [options]');

// tommy - h
_commander2.default.on('-H', help);
// tommy -help
_commander2.default.on('--help', help);
// tommy -v  tommy -V
_commander2.default.version(_constants.VERSION_MAJOR_MINOR_PATCH, '-V --version').parse(process.argv);

// tommy不带参数时

var makeGreen = function makeGreen(text) {
    return _chalk2.default.green(text);
};

if (!process.argv.slice(2).length) {
    _commander2.default.outputHelp(makeGreen);
}

if (!_fs2.default.existsSync(_constants.RC)) {
    (0, _rc.createDefault)();
} else {
    // 暂时不修改
    (0, _rc.modifyDefault)();
}