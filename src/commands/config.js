import { get, getAll, set, remove} from '../utils/rc';

const config = async (action, key, value) => {
    switch (action) {
        case 'get': {
            if(key) {
                let res = await get(key);
                console.log(res);
            }else {
                let res = await getAll();
                Object.keys(res).forEach(key => {
                    console.log(`${key}=${res[key]}`);
                });
            }
            break;
        }
        case 'set': {
            set(key, value);
            break;
        }
        case 'remove': {
            remove(key);
            break;
        }
        default: break;
    }
};

module.exports = config;