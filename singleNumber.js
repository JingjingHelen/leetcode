//题目：给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。

//思路：先用对象存储数组中元素以及对应的元素出现的次数，然后再对象中去查找value=1的key
var singleNumber = function (nums) {
    let map = {};
    for (i in nums) {
        const item = nums[i];
        let count = map[item];
        if(count){
            map[item] += 1;
        }else {
            map[item] = 1
        }
    }
    for( key in map){
         if(map[key]=== 1){
             return key;
         }
     }   
    
};


//看了题解后的思路：异或，相同元素异或之后得到0，任何数与0异或得到本身
var singleNumber = function (nums) {
    let result;
    for (i in nums) {
        result ^= nums[i]
    }
    return result
};

singleNumber([2,2,1])
//result: 1