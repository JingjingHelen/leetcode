//输出杨辉三角的第k行

//思路：跟上一题相同的想法，先列出具体的情况，然后全部填充为1,再将其中除首尾外的其他元素进行替换
var getRow = function (rowIndex) {
    if (rowIndex === 0) {
        return [1];
    }
    else if (rowIndex === 1) {
        return [1, 1];
    } else {
        var str = [1, 1];
        for (var i = str.length; i < rowIndex + 1; i++) {
            var row = new Array(i + 1).fill(1);
            for (var j = 1; j < row.length - 1; j++) {
                row[j] = str[j - 1] + str[j];
            }
            str = row;
        }
        return str;
    }
};

getRow(3);
//结果为：[1,3,3,1]