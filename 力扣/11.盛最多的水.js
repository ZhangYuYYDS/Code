/**
 * @param {number[]} height
 * @return {number}

 */
var maxArea = function (height) {
    let len = height.length;
    let l = 0;
    let r = len - 1;
    let sum = 0;
    let max = 0;

    while (l < r) {
        sum = (r - l) * Math.min(height[l], height[r]);
        max = Math.max(sum, max);

        if (height[l] < height[r]) {
            l++;
        } else {
            r--;
        }
    }
    return max;
};
