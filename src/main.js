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

import program from 'commander';
import {VERSION_MAJOR_MINOR_PATCH, RC} from './utils/constants';
import apply from './index';
import chalk from 'chalk';
import fs from 'fs';
import { createDefault, modifyDefault } from './utils/rc';

let actionMap = {
    init: {
        description: 'generate a new project from template',
        usages: [
            'tommy init templateName projectName'
        ]
    },
    config: {
        alias: 'cfg',
        description: 'config tommyrc',
        usages: [
            'tommy config set <k> <v>',
            'tommy config get <k>',
            'tommy config remove <k>'
        ]
    },
    // Todo
};

const actionKeys = Reflect.ownKeys(actionMap);

actionKeys.forEach((action) => {
    const attrs = Reflect.get(actionMap, action);
    program.command(action)
        .description(attrs.description)
        .alias(attrs.alias)
        .action(() => {
            switch (action) {
                case 'init':
                case 'config':
                    apply(action, ...process.argv.slice(3));
                    break;
                default:
                    break;
            }
        })
});

function help() {
    console.log('\r\n Usage');
    actionKeys.forEach(action => {
        const { usages } = Reflect.get(actionMap, action);
        usages.forEach((usage) => {
            console.log('-' + usage);
        });
    });
    console.log('\r');
}

program.usage('<command> [options]');

// tommy - h
program.on('-H', help);
// tommy -help
program.on('--help', help);
// tommy -v  tommy -V
program.version(VERSION_MAJOR_MINOR_PATCH, '-V --version').parse(process.argv);

// tommy不带参数时

const makeGreen = (text) => chalk.green(text);

if(!process.argv.slice(2).length) {
    program.outputHelp(makeGreen);
}

if(!fs.existsSync(RC)) {
    createDefault();
}else {
    // 暂时不修改
    modifyDefault();
}