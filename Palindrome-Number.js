// 给你一个整数 x ，如果 x 是一个回文整数，返回 true ；否则，返回 false 。回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。例如，121 是回文，而 123 不是。

// 思路：通过余数的连接与最初的数进行比较
var isPalindrome = function(x) {
    if (x < 0 ){
       return false;
    } 
    else {
        if(x===0){
            return true;
        }
        let division = x ;
        let reminder = 0;
        let str='';
        while(division){
            reminder=Math.floor(division%10);
            division=Math.floor(division/10);
            str+=reminder;
        }
        return parseInt(str)===x; 
    }
};

isPalindrome(121)
// 结果为:true