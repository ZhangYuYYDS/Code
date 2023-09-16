function currying(fn, ...args) {
    const length = fn.length;
    let allArgs = [...args];
    const res = (...newArgs) => {
        allArgs = [...allArgs, ...newArgs];
        if (allArgs.length === length) {
            return fn(...allArgs);
        } else {
            return res;
        }
    };
    return res;
}

const add = (a, b) => a + b;
const a = currying(add, 1);
console.log(a(2));
