/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let len = nums.length;
    let map = new Map();
    for (let i = 0; i < len; i++) {
        let num = target - nums[i];
        if (map.has(num)) {
            return [map.get(num), i];
        } else {
            map.set(nums[i], i);
        }
    }
    return [];
};
