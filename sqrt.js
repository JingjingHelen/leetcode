//题目:计算并返回 x 的平方根，其中 x 是非负整数。

//第一种思路,执行的时间太长了
var mySqrt = function(x) {
    if(x==0){
        return 0;
    }
    for(var i=1;i<=Math.ceil(x/2);i++){
                if(i*i==x){
                    return i;
                    break;
                }
                if(i*i<x && (i+1)*(i+1)>x ){
                    return i;
                    break;
                }
            }
    };

// 第二种思路是看了题解后进行的改进(二分法)，执行时间减少了，但是内存消耗增加了
var mySqrt = function (x) {
    if (x == 0 || x == 1) {
        return x;
    }
    var start = 1, end = Math.floor(x / 2), mid;
    while (start <= end) {
        mid =Math.floor(start + (end - start) / 2);
        var target = plus(mid);
        if (target == x) {
            return mid;
        }
        else if (target < x) {
            start = mid + 1;
        }
        else {
            end = mid - 1;
        }
    }
     return end;
};

function plus(num) {
    return num * num;
}

console.log(mySqrt(8)) //结果为2

// 第三种是牛顿-拉弗森迭代法(这个算法没太懂)
// function sqrt(x) {
//     let origin = x;
//     return function inner(x) {
//         // xn+1 = xn -   f(xn)     /  f'(xn)
//         let xn1 = x - (x*x-origin) / (2*x)
//         if(x - xn1 <= 0.1) { // 精度问题
//             return xn1
//         }
//         return inner(xn1)
//     }
// }

