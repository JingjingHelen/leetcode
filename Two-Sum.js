// 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。

// 思路：原本是想用二分法来实现，但是这个就会改变原来的顺序，输出的顺序就会有误，但要实现也是可以，就是比较麻烦，就实践了下，结果得出来有点问题，花费了比较长的时间，就去看了讲解视频，了解了哈希查找，理解了就使用哈希查找来实现
var twoSum = function (nums, target) {
    // Map对象
    const map = new Map();
    // nums.forEach((i, num) => map.set(i, num))
    // console.log(map);//Map(4) {2 => 0, 7 => 1, 9 => 2, 10 => 3}
    for (let i = 0; i < nums.length; i++) {
        const x = nums[i];
        // map.has()是否含有指定元素
        if (map.has(target - x)) {
            // map.get()获取指定key对应的值
            const index = map.get(target - x);
            return [i, index]
        }
        // map.set()是添加键值对
        map.set(x, i)
    }
};

twoSum([2, 7, 9, 10], 9) 
// 结果为：[1,0]