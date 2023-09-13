/**
 * 思路：前缀和
 * 1. nums = [1,2,3]
 * 2. 前缀和：[1,3,6]，默认还有个0，所以前缀和：[0,1,3,6]
 * 3. -k(-3):[-2,0,3]
 * 4. 0,3在前缀和中可以找到，说明k存在，且0,3有几个k就有几个
 */
var subarraySum = function (nums, k) {
    let map = { 0: 1 };
    let pre = 0;
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        pre += nums[i];

        if (map[pre - k]) {
            count += map[pre - k];
        }
        if (map[pre]) {
            map[pre]++;
        } else {
            map[pre] = 1;
        }
    }
    return count;
};
