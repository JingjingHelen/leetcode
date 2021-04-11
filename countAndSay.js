/**
 * @param {number} n
 * @return {string}
 */
 var countAndSay = function (n) {
    if (n == 1) return '1';
    let str = '11', current = 2, count = 1, val = '1', res = '';
    while (current < n) {
        for (let i = 1; i < str.length; i++) {
            if (str[i] == str[i - 1]) {
                count++;
            }
            else {
                res = res + count + val;
                count = 1;
            }
            val = str[i];
            if (i == str.length - 1) {
                str = res + count + val;
                val = str[0];
                count = 1;
                res = '';
                break;
            }
        }
        current++;
    }
    return str
};