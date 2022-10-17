
 const addTwoNumbers = function(l1, l2) {
    let sum = 0;
    let carry = 0;
    let head = new ListNode();
    let resultList = head;
    
    while(l1 || l2){
        
        sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
        resultList.next = new ListNode(sum >= 10 ? sum%10 : sum);
        carry = sum >= 10 ? Math.floor(sum/10) : 0;
        l1 = l1 ? l1.next : null;
        l2 = l2 ? l2.next : null;
        resultList = resultList.next;
        
    }
    
    if(carry > 0){
        resultList.next = new ListNode(carry);
    }
    
    return head.next;
};

function ListNode(val, next) {
      this.val = (val===undefined ? 0 : val)
      this.next = (next===undefined ? null : next)
}