function listToTree(tree) {
    let res = [];
    let map = new Map();
    tree.forEach((item) => {
        if (item.parentId > 0) {
            if (map.get(item.parentId)) {
                map.get(item.parentId).push(item);
            } else {
                map.set(item.parentId, [item]);
            }
            tree[item.parentId - 1].children = map.get(item.parentId);
            delete item;
        } else {
            res.push(item);
        }
    });
    return res;
}

// 测试
let tree = [
    {
        id: 1,
        text: '节点1',
        parentId: 0,
    },
    {
        id: 2,
        text: '节点2',
        parentId: 1,
    },
    {
        id: 3,
        text: '节点3',
        parentId: 2,
    },
    {
        id: 4,
        text: '节点4',
        parentId: 2,
    },
];
console.log(listToTree(tree));
