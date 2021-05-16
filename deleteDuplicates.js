//题目：存在一个按升序排列的链表，给你这个链表的头节点 head ，请你删除所有重复的元素，使每个元素只出现一次 。

//挨个去判断相邻元素是否相同，如果相同，则将指针指向改变,从而达到去重效果
var deleteDuplicates = function (head) {
    if (head === null) {
        return head;
    }
    var cur = head, other = head.next;
    while (cur != null && other != null) {
        // 相等则将cur的下一个指针指向下一个的下一个
        if (cur.val === other.val) {
            cur.next = other.next;
        }
        // 不相等则cur移动到下一个位置
        else {
            cur = cur.next;
        }
        other = other.next;
    }
    return head;
};

deleteDuplicates([1,1,2,3,3])  //结果为[1,2,3]