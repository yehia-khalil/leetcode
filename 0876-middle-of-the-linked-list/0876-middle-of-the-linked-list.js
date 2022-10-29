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
var middleNode = function(head) {
    let ptr = head;
  let add=[];
  add.push(ptr);
  while(ptr.next){
    ptr=ptr.next;
    add.push(ptr);
  }
  let idx=0;
  if(add.length%2===0){
     idx =(add.length/2)
  }else{
     idx = Math.floor(add.length/2)
  }
  return add[idx];
};