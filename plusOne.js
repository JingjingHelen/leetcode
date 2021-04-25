//题目：给定一个由整数组成的非空数组所表示的非负整数，在该数的基础上加一

//一开始有一种思路是将这个数组转换成数字，然后在数字的基础上进行加一操作，但是执行下来发现碰到[6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]这个数组时，所得的值是[6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,0,0,0],错了
//原因是：js中能接受的最大数是16位的，超过这个位数会精度丢失或者说不准确了，于是我这个思路想得太简单了，没考虑到精度的问题

//第二个思路就是根据从最后一位数开始往前一个一个进行判断和计算
var plusOne = function (digits) {
    var n = digits.length, flag = false
    if (digits[n - 1] < 9) {
        digits[n - 1] = digits[n - 1] + 1
    } else {
        digits[n - 1] = 0
        flag = true
        for (var i = n - 2; i >= 0; i--) {
            if (digits[i] < 9) {
                digits[i] = digits[i] + 1
                flag = false
                break
            } else {
                digits[i] = 0
                flag = true
            }
        }
        if (flag == true) {
            digits.unshift(1)
        }
    }
    return digits
};

console.log(plusOne([2,5,1,7])) //结果为[2,5,1,8]