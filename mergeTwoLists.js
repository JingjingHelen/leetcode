/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var mergeTwoLists = function (l1, l2) {
    if (l1 == null) {
        return l2;
    } else if (l2 == null) {
        return l1;
    }
    var l3 = new ListNode();
    var l = l3;
    while (l1 != null && l2 != null) {
        if (l1.val < l2.val) {
            l.next = l1;
            l1 = l1.next;
        } else {
            l.next = l2;
            l2 = l2.next;
        }
        l = l.next;
    }

    while (l1 != null) {
        l.next = l1;
        l1 = l1.next;
        l = l.next;
    }
    while (l2 != null) {
        l.next = l2;
        l2 = l2.next;
        l = l.next;
    }
    return l3.next;
};