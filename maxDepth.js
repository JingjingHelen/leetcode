//题目：给定一个二叉树，找出其最大深度

//思路：递归
var maxDepth = function(root) {
    if(root === null) {
       return 0;
   } else {
       let left = maxDepth(root.left)+1;
       let right = maxDepth(root.right)+1;
       return left>right? left : right;
   }
};

maxDepth([3,9,20,null,null,15,7]);
//result: 3