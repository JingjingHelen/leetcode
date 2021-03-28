/**
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function (nums) {
    if (nums.length == 0)
        return 0;
    else {
        var count = 0;
        for(var i=1;i<nums.length;i++){
            if(nums[i]==nums[i-1]){
                count++;
            }else {
                nums[i-count]=nums[i];
            }
        }
        return nums.length-count;
    }
};