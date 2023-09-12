/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    // 为什么这里必须要写len：
    // 1. 我们需要遍历的只是原来数组中的元素
    // 2. 不用len控制的话，会出现删一个0，数组后又加一个0的情况，遍历将永远不会停止
    // 3. 用len控制，当我们删除一个0的时候，len--，就可以实现只遍历原来数组中的元素，不会遍历到push进数组的0
    //   let len = nums.length;
    //   for (let i = 0; i < len; i++) {
    //     if (nums[i] == 0) {
    //       nums.splice(i, 1);
    //       nums.push(0);
    //       i--;
    //       len--;
    //     }
    //   }

    // 我觉得特别妙的第二种方法
    // 原理：
    // 1. sort的原理，就是(a,b)=>a-b，若a-b<0，则a在b后；若a-b=0，则位置不变；若a-b>0，则a在b前
    // 2. b==0时，布尔值为false，a-b=-1，所以a在b前
    nums.sort((a, b) => (b ? 0 : -1));
    return nums;
};
