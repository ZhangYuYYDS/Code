/**
 * 方法一：单纯的数学思想=>(i+k)%len
 */
var rotate = function (nums, k) {
    const newArr = new Array(nums.length);
    let len = nums.length;

    for (let i = 0; i < len; i++) {
        newArr[(i + k) % len] = nums[i];
    }

    for (let i = 0; i < len; i++) {
        nums[i] = newArr[i];
    }
};

/**
 * 方法二：三次翻转思想（1次整体翻转，2次局部翻转）
 * 1,2,3,4,5,6,7
 * 第一次翻转
 * 7,6,5,4,3,2,1
 * 第二次翻转
 * 5,6,7  1,2,3,4
 */
// var reverse = function (nums, start, end) {
//   while (start <= end) {
//     let temp = nums[start];
//     nums[start] = nums[end];
//     nums[end] = temp;
//     start++;
//     end--;
//   }
// };

// var rotate = function (nums, k) {
//   // k可能大于len
//   k %= nums.length;
//   // 一次整体翻转
//   reverse(nums, 0, nums.length-1);
//   reverse(nums, 0, k - 1);
//   reverse(nums, k, nums.length - 1);
// };
