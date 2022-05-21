/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
  if(!head) return head;
  let current = head;
  let next = head.next;
  if(!next){
    return head;
  }
  while(next){
    if(current.val == next.val){
      current.next=next.next;
      next=current.next;
      // current = head;
      // next = head.next;
      continue;
    }
    current=next;
    next=next.next;
  }
  return head;
};