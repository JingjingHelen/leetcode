//题目：给定一个已按照 升序排列  的整数数组 numbers ，请你从数组中找出两个数满足相加之和等于目标数 target 

//思路：利用指针的方式

var twoSum = function(numbers, target) {
    let left = 0;
    let right = numbers.length-1;
    while(left < right){
        if(numbers[left] + numbers[right] === target){
            return [left+1, right+1];
        }else if(numbers[left] + numbers[right] < target){
            left++;
        }else {
            right--;
        }
    }
}

twoSum([0,0,3,4],0);
//result:[1,1]