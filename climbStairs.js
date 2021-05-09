// 题目：假设你正在爬楼梯。需要 n 阶你才能到达楼顶。每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？

//有规律：从第三个数开始，包括第三个数均等于前两个数方法之和

// 第一种思路:递归  结果超出时间限制，如果提供的测试用例很大的话，这个所要执行时间就难以计算了-…-
//不可行
var climbStairs = function (n) {
    if (n == 1) {
        return 1
    }
    if (n == 2) {
        return 2
    }
    return climbStairs(n - 1) + climbStairs(n - 2)
};

//第二种是根据规律直接不断重新赋值
var climbStairs = function (n) {
    if (n < 3) return n
    var n1 = 1, n2 = 2, temp
    for (var i = 3; i <= n; i++) {
        temp = n1 + n2
        n1 = n2
        n2 = temp
    }
    return temp
};

console.log(climbStairs(5)) //结果为：8