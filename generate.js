//输出杨辉三角

//思路:先全部填充为1,然后将其中除首尾外的其他元素进行替换

var generate = function(numRows) {
    var str = [];
    for(var i = 0 ; i < numRows ; i++ ){
        //fill() 方法用于将一个固定值替换数组的元素(get√)
        var row = new Array(i+1).fill(1);
        console.log(row);
        //替换其中除首尾外的其他元素的值
        for(var j = 1 ; j <row.length - 1 ; j++ ){
            row[j] = str[i-1][j-1]+ str[i-1][j];
        }
        str.push(row);
    }
    return str;
  };

  generate(5);
  //结果为：[[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]