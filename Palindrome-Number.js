var isPalindrome = function (x) {
    var arr = x.toString().split("");
    if (arr[0] != '-') {
        if (arr.join("") == arr.reverse().join("")) {
            return true;
        } else {
            return false;
        }
    }
    else {
        return false;
    }
};
