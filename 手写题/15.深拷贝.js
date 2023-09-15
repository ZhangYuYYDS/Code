function deepClone(obj) {
    // 基本类型直接返回
    if (typeof obj !== 'object' || obj == null) {
        return obj;
    }

    let result;
    if (obj instanceof Array) {
        result = [];
    } else {
        result = {};
    }

    for (let key of obj) {
        if (obj.hasOwnProperty(key)) {
            result[key] = deepClone(obj[key]);
        }
    }

    return result;
}
