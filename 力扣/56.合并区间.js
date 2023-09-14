/**
 */
var merge = function (intervals) {
    let len = intervals.length;
    let res = [];

    intervals.sort((a, b) => a[0] - b[0]);

    let a = intervals[0];
    for (let i = 1; i < len; i++) {
        let b = intervals[i];

        if (a[1] >= b[0]) {
            a[1] = Math.max(a[1], b[1]);
        } else {
            res.push(a);
            a = b;
        }
    }
    res.push(a);
    return res;
};
