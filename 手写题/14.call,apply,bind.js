// call
Function.prototype.mycall = function (ctx, ...args) {
    let fn = Symbol();
    ctx = ctx == null || ctx == undefined ? globalThis : Object(ctx);
    // this指向调用的函数
    ctx[fn] = this;
    // 返回值
    return ctx[fn](...args);
};

// apply
Function.prototype.myapply = function (ctx, args) {
    let fn = Symbol();
    ctx = ctx == null || ctx == undefined ? globalThis : Object(ctx);
    // this指向调用的函数
    ctx[fn] = this;
    // 返回值
    return ctx[fn](...args);
};

// bind
Function.prototype.mybind = function (ctx, ...args) {
    ctx = ctx == null || ctx == undefined ? globalThis : Object(ctx);
    let that = this;
    return function (...newargs) {
        const fn = Symbol();
        ctx[fn] = that;
        const res = ctx[fn](...args, ...newargs);
        return res;
    };
};
