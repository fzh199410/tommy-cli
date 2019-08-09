import { DEFAULTS , RC } from './constants';
import { decode, encode } from 'ini';
import { promisify } from 'util';
import chalk from 'chalk';
import fs from 'fs';

const exists = promisify(fs.exists);
const readFile  = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);

export const createDefault =  async () => {
    await writeFile(RC, encode({
        ...DEFAULTS
    }), 'utf8');
    console.log(chalk.green('created .tommyrc successfull'));
};

export const modifyDefault = async () => {
    await writeFile(RC, encode({
        ...DEFAULTS,
        registry: 'fzh199410'
    }), 'utf8');
    console.log(chalk.green('modified .tommyrc successfull'));
};

/**
 * 获取配置文件中的某个属性
 * @param key
 * @returns {Promise<string|*>}
 */
export const get = async (key) => {
    const flag = await exists(RC);
    let opts;
    if(flag) {
        opts = await readFile(RC, 'utf8');
        opts = decode(opts);
        return opts[key];
    }
    return '';
};

/**
 * 获取所有配置信息
 * @returns {Promise<string|*>}
 */
export const getAll = async () => {
    const flag = await exists(RC);
    let opts;
    if(flag) {
        opts = await readFile(RC, 'utf8');
        opts = decode(opts);
        return opts;
    }
    return '';
};

/**
 * 设置配置
 * @param key
 * @param value
 * @returns {Promise<void>}
 */
export const set = async (key, value) => {
    if(!key) {
        console.log(chalk.red(chalk.bold('Error:')), chalk.red('key is required'));
        return ;
    }
    if(!value) {
        console.log(chalk.red(chalk.bold('Error:')), chalk.red('value is required'));
        return ;
    }
    const flag = await exists(RC);
    let opts;
    if(flag) {
        opts = await readFile(RC, 'utf8');
        opts = decode(opts);
        opts = Object.assign({}, opts, {[key]: value});
    }else {
        opts = Object.assign(DEFAULTS, {[key]: value});
    }
    await writeFile(RC, encode(opts), 'utf8');
};

/**
 * 删除某项属性
 * @param key
 * @returns {Promise<void>}
 */
export const remove = async (key) => {
    if(!key) {
        console.log(chalk.red(chalk.bold('Error:')), chalk.red('key is required'));
        return ;
    }
    const flag = await exists(RC);
    let opts;
    if(flag) {
        opts = await readFile(RC, 'utf8');
        opts = decode(opts);
        Reflect.deleteProperty(opts, key);
        await writeFile(RC, encode(opts), 'utf8');
    }
};
