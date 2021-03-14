var romanToInt = function(s) {
    var sum=0;
    var num = s.split("");
    for(var i=0;i<num.length;i++){
        var current = toInt(num[i]);
        var next = toInt(num[i+1]);
        if(current < next ){
            sum=sum-current;
        }else {
            sum=sum+current;
        }
     }
     return sum;
};

function toInt(c){
    switch(c){
        case 'I' : return 1;break;
        case 'V' : return 5;break;
        case 'X' : return 10;break;
        case 'L' : return 50;break;
        case 'C' : return 100;break;
        case 'D' : return 500;break;
        case 'M' : return 1000;break;
        default : return "输入的罗马数字不合法";
    }
}