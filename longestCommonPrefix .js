/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {
    if(strs==''|| strs.length > 200){
        return ''
    }else {
        var commonPrefix=strs[0];
       for(let i=1;i<strs.length;i++){
           var commonPrefix=longCommonPrefix(commonPrefix,strs[i])
       } 
    }
    return commonPrefix;
  };
  function longCommonPrefix(str1,str2){
      var length,commonPrefix='';
      if(str1.length>str2.length){
          length=str2.length;
      }else {
          length=str1.length;
      }
      for(var i=0;i<length;i++){
          if(str1.charAt(i) == str2.charAt(i)){
              commonPrefix=commonPrefix+str1.charAt(i);}
          else {
              break;
          }
      }
      return commonPrefix;
  }