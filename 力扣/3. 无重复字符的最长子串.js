/**
 * 思路：
 * 1. 双指针
 * 2. 左右指针分别指向第一个、第二个元素
 * 3. 右指针右移，判断右指针所指的元素是否出现在[left,right)这个字符串中
 * 4. 若没有出现，右指针右移
 * 5. 若出现了，左指针右移
 */

var lengthOfLongestSubstring = function (s) {
    if (s.length == 1) return 1;
    let len = s.length;

    let l = 0;
    let r = 1;
    let res = 0;
    while (r < len) {
        let str = s.slice(l, r);
        // 没找到
        if (str.indexOf(s[r]) == -1) {
            r++;
        } else {
            //找到了
            l++;
        }
        res = Math.max(r - l, res);
    }
    return res;
};
