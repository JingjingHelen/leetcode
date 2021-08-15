//题目：给定一个整数 n，返回 n! 结果尾数中零的数量。

//思路:先算出阶乘结果，将计算字符串中0的个数

var trailingZeroes = function(n) {
    let result = multRes(n);
    result = "" + result;
    // console.log(result)
    return result.split('0').length - 1;
};

function multRes(num) {
    if(num === 0 || num === 1) {
        return 1;
    }else {
        return num*multRes(num-1);
    }
}

trailingZeroes(7)
//result:2  ×


//我写出的程序所得出的结果是2，而题目得出的是1，错误的原因是因为，题意理解不到位，题意要求的是求出阶乘结果后尾部0的个数，而不是所有0的个数。故：我的程序还需要在进行修改