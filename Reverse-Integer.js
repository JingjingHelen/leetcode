var reverse = function(x) {
    var arr = x.toString().split("");
       var revArr=[];
       var arrNum=[];
       if (arr[0] != '-') {
           var str = parseInt(arr.reverse().join(""));
       }
       else {
           for(var i=1;i<arr.length;i++){
               revArr[i-1] = arr[i];
           }
         arrNum =  parseInt(revArr.reverse().join("").toString());
         var arrStr=arrNum.toString().split('').join('');
          var str='-'+arrStr;
       }
       if( parseInt(str)>Math.pow(2,31)-1 || parseInt(str)<-Math.pow(2,31)){
           str=0;
       }
       return str;
};
