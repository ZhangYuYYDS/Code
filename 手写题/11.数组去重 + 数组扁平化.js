function flatten(arrs) {
    const result = [];
    for (const arr of arrs) {
        if (Array.isArray(arr)) {
            result.push(...flatten(arr));
        } else {
            result.push(arr);
        }
    }
    return new Set(result);
}

const arr = [
    [1, 2, 2],
    [4, 5, 6],
    [7, 8, 9],
];
const flattenArr = flatten(arr);
console.log(flattenArr); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
