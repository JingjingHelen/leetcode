//题目：二进制求和

//思路是先把两个字符串的位数弄一致，然后再来从最后一位才是往前挨个相加进行计算；
//此外，我做完看题解时，看到一个好简的写法(技巧)：(BigInt("Ob"+a)+BigInt("Ob"+b)).toString(2) 一开始我不太明白BigInt的含义，于是就用(parseInt(a,2)+parseInt(b,2)).toString(2)去试了下，发现也是跟上题加一操作有同样的问题，最大数的限制，因此查了下发现BigInt是一种内置对象，能表示超过最大数的数，因此使用这个就不会有上述问题
var addBinary = function (a, b) {
    var length, len, flag = 0, array = []
    var arr = a.split('')
    var arr_ = b.split('')
    if (a.length == b.length) {
        length = a.length
    }
    else if (a.length > b.length) {
        length = a.length
        len = a.length - b.length
        for (var i = 1; i <= len; i++) {
            arr_.unshift('0')
        }
    }
    else {
        length = b.length
        len = b.length - a.length
        for (var i = 1; i <= len; i++) {
            arr.unshift('0')
        }
    }
    array.length = length
    if (arr[length - 1] == 1 && arr_[length - 1] == 1) {
        flag = 1
        array[length - 1] = 0
    }
    else {
        array[length - 1] = parseInt(arr[length - 1]) + parseInt(arr_[length - 1])
        flag = 0
    }
    for (var i = length - 2; i >= 0; i--) {
        sum = parseInt(arr[i]) + parseInt(arr_[i]) + flag
        if (sum == 3) {
            array[i] = 1
            flag = 1
        } else if (sum == 2) {
            array[i] = 0
            flag = 1
        } else {
            array[i] = parseInt(arr[i]) + parseInt(arr_[i]) + flag
            flag = 0
        }
    }

    if (flag == 1) {
        array.unshift(1)
    }
    return array.join('')
};

console.log(addBinary('111','11111')) //结果为100110