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
var addTwoNumbers = function(l1, l2) {
  let n1 = '';
  let p1=l1;
  while(p1){
    n1+=p1.val
    p1=p1.next
  }
  console.log(n1)
  n1=BigInt((n1.split('').reverse().join('')));
   let n2 = '';
  let p2=l2;
  while(p2){
    n2+=p2.val
    p2=p2.next
  }
  n2=BigInt((n2.split('').reverse().join('')));
  console.log(n1,n2)
  let num = String(n1+n2).split('').reverse();
  let list = new ListNode(Number(num[0]));
  let prev = list;
  for(let i = 1 ; i < num.length ; i++){
      let node = new ListNode(Number(num[i]));
      prev.next=node;
      prev=node;
  }
  return list;
};