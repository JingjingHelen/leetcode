//题目：给定一个整数 n，返回 n! 结果尾数中零的数量。

//思路:看了题解，0的产生源于2×5，只要阶乘里边有2、5这两个因数 就会产生1个0，但是2这个因数会比5多 因为偶数太多了 所以 我们只需要统计1~n有几个5因数，即 n/5 + n/5^2 + n/5^3......因此可以使用递归形式


var trailingZeroes = function(n) {
    if(n === 0) {
        return 0;
    }else {
        let num = parseInt(n/5);
        let count = num + trailingZeroes(num);
        return count;
    }
};

trailingZeroes(30)
//result:7  
