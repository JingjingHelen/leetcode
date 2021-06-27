// 题目：给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。

//思路：1.去除空格;2.去除非数字和字母字符;3.翻转数组;4.比较
var isPalindrome = function (s) {
    let arr = [];
    if (s === "") {
        return true;
    }
    let originArr = s.replace(/\W|_/g,'').toLowerCase().split("");
    for (let i = 0; i < originArr.length; i++) {
        if ("0" <= originArr[i].toString() <= "9" || "a" <= originArr[i].toString() <= "z") {
        // if(originArr[i]=== (/[0-9]/) || originArr[i] ===(/[a-z]/i)){
            arr.push(originArr[i]);
        }
    }
    let oldS = arr.join("");
    let newS = arr.reverse().join("");
    if (oldS === newS) {
        return true;
    } else {
        return false;
    }
//   let str = s.replace(/\W|_/g,'').toLowerCase()
//   let resv = str.split('').reverse().join('')
//   return str === resv
};

isPalindrome("A man, a plan, a canal: Panama")

//result: true