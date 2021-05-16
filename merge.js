// 题目：给你两个有序整数数组 nums1 和 nums2，请你将 nums2 合并到 nums1 中，使 nums1 成为一个有序数组。初始化 nums1 和 nums2 的元素数量分别为 m 和 n 。你可以假设 nums1 的空间大小等于 m + n，这样它就有足够的空间保存来自 nums2 的元素。

// 思路：先将nums2合并到nums1中，然后再对nums1进行排序
var merge = function (nums1, m, nums2, n) {
    for (var i = 0; i < n; i++) {
        nums1[m] = nums2[i];
        m++;
    }
    var nums1 = nums1.sort((a, b) => a - b);
    return nums1;
};

merge([1,2,3,0,0,0],3, [2,5,6],3) //结果为：[1,2,2,3,5,6]