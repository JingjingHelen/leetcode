/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var searchInsert = function(nums, target) {
    if(nums.indexOf(target)==-1){
        for(let i=0;i<nums.length;i++){
            if(nums[i]>target){
                return i;
                break;
            }
        }
        return nums.length;
    } else {
        return nums.indexOf(target);
    } 
};