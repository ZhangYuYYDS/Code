function treeToList(tree) {
    let res = [];
    const dfs = (tree) => {
        tree.forEach((item) => {
            res.push(item);

            if (item.children) {
                dfs(item.children);
                delete item.children;
            }
        });
    };
    dfs(tree);
    return res;
}

const tree = [
    {
        id: 1,
        text: '节点1',
        parentId: 0,
        children: [
            {
                id: 2,
                text: '节点1_1',
                parentId: 1,
            },
        ],
    },
];
console.log(treeToList(tree));
// 转成[
//     {
//         id: 1,
//         text: '节点1',
//         parentId: 0, //这里用0表示为顶级节点
//     },
//     {
//         id: 2,
//         text: '节点1_1',
//         parentId: 1, //通过这个字段来确定子父级
//     }
// ];
