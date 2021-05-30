// 题目：给你两棵二叉树的根节点 p 和 q ，编写一个函数来检验这两棵树是否相同。如果两个树在结构上相同，并且节点具有相同的值，则认为它们是相同的。

// 思路：递归遍历

var isSameTree = function (p, q) {
    // 具体情况具体处理
    if (p === null && q === null)
        return true;
    if (p === null || q === null)
        return false;
    if (p.val !== q.val)
        return false;
    // 递归
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};

isSameTree([1,2,3],[1,2,3]) 
// 结果为true