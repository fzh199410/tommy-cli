import { downLoadGitRepoLocal } from '../utils/get';
import ora from 'ora'; // 终端loading
import inquirer from 'inquirer'; // 终端选择提问
import fs from 'fs';
import chalk from 'chalk';
import symbol from 'log-symbols';

/**
 * 初始化
 * @param templateName
 * @param projectName
 * @returns {Promise<void>}
 */
const init = async (templateName, projectName) => {
    if(!fs.existsSync(projectName)) {
        // 命令行交互
        inquirer.prompt([
            {
                name: 'description',
                message: 'please enter your project description:',
                default: 'this-is-a-project'
            },
            {
                name: 'author',
                message: 'please enter author name:',
                default: 'superMan'
            },
            {
                name: 'version',
                message: 'please enter version(eg: 1.0.0):',
                default: "1.0.0"
            }
            ]).then(async (answer) => {
                // 下载模板 选择模板
                // 通过配置文件 获取信息
            let loading = ora('downloading template ...');
            loading.start();

            downLoadGitRepoLocal(templateName, projectName).then(() => {
                loading.succeed();
                console.log('finish =========');
                const fileName = `${projectName}/package.json`;
                if(fs.existsSync(fileName)) {
                    let data = fs.readFileSync(fileName).toString();
                    let json = JSON.parse(data);
                    json = {...json, answer};
                    fs.writeFileSync(fileName, JSON.stringify(json, null, '\t'), 'utf-8');
                    console.log(symbol.success, chalk.green('project created successful 😊'));
                }
            }, () => {
                loading.fail();
            });
        })
    }else {
        console.log(symbol.error, chalk.red(`${projectName} is already exists ❌`));
    }
};
module.exports = init;