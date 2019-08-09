import { version } from '../../package';

// 版本号
export const VERSION_MAJOR_MINOR_PATCH = version;

// 用户根目录
const HOME = process.env[process.platform === 'win32' ? 'USERPROFILE' : 'HOME'];

// 配置文件目录
export const RC = `${HOME}/.tommyrc`;

// RC 配置下载模板的地方，给 github 的 api 使用
// https://api.github.com/users/stephenliu1944/repos

export const DEFAULTS = {
    registry: 'stephenliu1944',
    type: 'users'
};