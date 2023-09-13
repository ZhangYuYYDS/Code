/**
 * a+b<b，a会拖累b，从b开始
 * a+b>b，还是从a开始
 */
var maxSubArray = function (nums) {
    let max = nums[0];
    let start = nums[0];
    for (let i = 1; i < nums.length; i++) {
        start = Math.max(nums[i] + start, nums[i]);

        max = Math.max(start, max);
    }
    return max;
};
