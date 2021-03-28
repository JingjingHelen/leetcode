/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
    var arr = [];
    if(s.length % 2 !=0){
        return false;
    }F
    for(var i=0;i<s.length;i++){
        switch(s[i]){
            case "{":
            case "[":
            case "(":
                arr.push(s[i]);
                break;
            case "}":
                if(arr.pop() != "{") return false;
                break;
            case "]":
                if(arr.pop() != "[") return false;
                break;
            case ")":
                if(arr.pop() != "(") return false;
                break;
        }
    }
    return arr.length==0 ? true:false;
};