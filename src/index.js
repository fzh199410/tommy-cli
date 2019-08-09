// 人物控制流
const apply = (action, ...args) => {
    //babel env
    require(`./commands/${action}`)(...args);
};

export default apply;