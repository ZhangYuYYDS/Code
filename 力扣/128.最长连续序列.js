/**
 * @param {number[]} nums
 * @return {number}
 */

var longestConsecutive = function (nums) {
    if (nums.length == 0) return 0;

    let len = nums.length;
    let count = 1;
    let result = 1;

    nums.sort((a, b) => a - b);

    for (let i = 0; i < len; i++) {
        // 去重
        if (nums[i] == nums[i + 1]) continue;
        if (nums[i] + 1 == nums[i + 1]) {
            count++;
        } else {
            result = Math.max(result, count);
            count = 1;
        }
    }
    return result;
};
