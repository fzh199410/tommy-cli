import { getAll } from './rc';
import downloadGitRepo  from 'download-git-repo';

export const downLoadGitRepoLocal = async (template, projectName) => {
    let config = await getAll();
    let api = `${config.registry}/${template}`;
    return new Promise((resolve, reject) => {
        downloadGitRepo(api, projectName, (err) => {
            if(err) {
                reject(err);
            }
            resolve();
        })
    });
};