/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
    if (root == null) return true;
    return check(root.left, root.right);
};

var check = function (left, right) {
    if (left == null && right == null) return true;
    if (left == null || right == null || left.val != right.val) return false;

    return check(left.left, right.right) && check(left.right, right.left);
};
