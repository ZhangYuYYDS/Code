function myNew(fn, ...args) {
    // 创建一个新的对象
    const obj = Object.create(fn.prototype);

    // 将构造函数中的this绑定到新建的对象上
    let res = fn.call(obj, ...args);

    // 根据构造函数返回类型作判断
    if (typeof res === 'object' || typeof res === 'function') {
        return res;
    }
    return obj;
}
