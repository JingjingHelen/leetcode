// 题目：给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
 

// 我的想法是：通过排列组合的方式挨个去计算其值，然后比较值
var maxSubArray = function(nums) {
    if(nums.length == 1){
        return nums[0]
    }else {
        var max=nums[0]
        for(var i=0;i<nums.length;i++){
            val=nums[i]
            for(var j=i+1;j<nums.length;j++){
                val=val+nums[j]
                if(val>max){
                    max=val
                }
            }
        }
        for(var i=1;i<nums.length;i++){
            if(nums[i]>max){
                max=nums[i]
            }
        }
        return max
    }
};

maxSubArray([-2,1,-3,4,-1,2,1,-5,4])

result:6