function flatten(obj, parentKey = '') {
    const result = [];
    for (const [key, value] of Object.entries(obj)) {
        const newKey = parentKey ? `${parentKey}.${key}` : key;
        if (isObject(value)) {
            result = [...result, ...flatten(value, newKey)];
        } else if (Array.isArray(value)) {
            result = [...result, ...Object.entries(value).flat()];
        } else {
            result.push({ key, value });
        }
    }
    return result;
}

function isObject(obj) {
    return obj && typeof obj === 'object';
}

const obj = {
    a: {
        b: 1,
        c: 2,
        d: { e: 5 },
    },
    b: [1, 3, { a: 2, b: 3 }],
    c: 3,
};

const flattenedObj = flatten(obj);

console.log(flattenedObj);
