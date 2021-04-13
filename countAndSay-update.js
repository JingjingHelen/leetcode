//第一种通过判断相邻元素是否相同来进行字符串的拼接
var countAndSay = function (n) {
    if (n == 1) {
      return '1'
    } else if (n == 2) {
      return '11'
    } else {
      var str = countAndSay(n - 1)
      var count = 1
      var res = ''
      var val = str[0]
      for (var i = 1; i < str.length; i++) {
        if (str[i] == str[i - 1]) {
          count++
        } else {
          res += count + val
          count = 1
        }
        val = str[i]
      }
      str = res + count + val
      return str
    }
  };

  //第二种是通过正则匹配，再来进行字符串拼接
  var countAndSay = function (n) {
    if (n === 1) return '1'
    var tmp = countAndSay(n - 1).match(/(\d)\1*/g)
    var str = ''
    for (var i = 0; i < tmp.length; i++) {
      str += (tmp[i].length + '' + tmp[i].substring(0, 1))
    }
    return str
  }

  countAndSay(6)