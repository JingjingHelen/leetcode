// 题目：给你一个字符串 s，由若干单词组成，单词之间用空格隔开。返回字符串中最后一个单词的长度。如果不存在最后一个单词，请返回 0 。单词 是指仅由字母组成、不包含任何空格字符的最大子字符串。


//我的想法是：有大致有三种情况：s没有空格字符串、全部由空格组成的字符串、其他，然后针对后两种情况，我是用数组中的过滤器函数来实现，将空格全部去掉，最后根据得到的新数组的长度来处理
var lengthOfLastWord = function (s) {
    if (s.indexOf(" ") == -1) {
        return s.length
    }
    var array = s.split(" ")
    var arr = array.filter(function (value) {
        return value != ''
    })
    if (arr.length==0) {
        return 0
    } else {
        if (arr.length == 1) {
            return arr[0].length
        } else {
            return arr[arr.length - 1].length
        }
    }
};

lengthOfLastWord(" bas fadsfaf   ")

result: 7