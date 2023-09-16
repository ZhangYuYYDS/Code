// instanceof:用于检测构造函数的 prototype 属性是否出现在实例对象的原型链上

// 方法一：
// function myInstanceod(obj, construtor) {
//     if (obj == null || obj == undefined) return false;
//     if (construtor == null || construtor == undefined) return false;

//     let proto = Object.getPrototypeOf(obj);

//     while (proto !== null) {
//         if (proto === construtor.prototype) {
//             return true;
//         }

//         proto = Object.getPrototypeOf(obj);
//     }
//     return false;
// }

// 方法二：
function myInstanceof(obj, constructor) {
    if (obj === null || obj === undefined) {
        return false;
    }

    if (constructor === null || constructor === undefined) {
        return false;
    }

    // isPrototypeOf() 方法来检查是否是构造函数的实例
    return constructor.prototype.isPrototypeOf(obj);
}
