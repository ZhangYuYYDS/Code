// 思路：1. 先求出每一个节点的最长长度，2. 然后在求出每一个节点的直径，然后取所有节点的直径最大值
var diameterOfBinaryTree = function (root) {
    // 默认为1是因为默认了根节点自身的路径长度
    let ans = 1;

    function depth(rootNode) {
        if (!rootNode) {
            // 如果不存在根节点，则深度为0
            return 0;
        }
        // 递归，获取左子树的深度
        let L = depth(rootNode.left);
        // 递归，获取右子树的深度
        let R = depth(rootNode.right);

        // 这个是第二步
        ans = Math.max(ans, L + R + 1);
        // 这个是第一步
        return Math.max(L, R) + 1;
    }

    depth(root);

    // 由于depth函数中已经默认加上数节点的自身根节点路径了，故此处需减1
    return ans - 1;
};
