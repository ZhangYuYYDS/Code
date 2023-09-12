/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    let result = [];

    if (nums == null || nums.length < 3) {
        return result;
    }
    // 升序排序
    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) break;
        // 去重
        if (nums[i] == nums[i - 1]) continue;
        let l = i + 1;
        let r = nums.length - 1;
        while (l < r) {
            if (nums[i] + nums[l] + nums[r] == 0) {
                result.push([nums[i], nums[l], nums[r]]);
                // 去重
                while (l < r && nums[l] == nums[l + 1]) l++;
                while (l < r && nums[r] == nums[r - 1]) r--;
                l++;
                r--;
            } else if (nums[i] + nums[l] + nums[r] < 0) {
                l++;
            } else if (nums[i] + nums[l] + nums[r] > 0) {
                r--;
            }
        }
    }
    return result;
};
