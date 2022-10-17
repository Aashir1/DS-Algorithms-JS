const detectCycle = (head) => {
    
    while(head){
        if(head.visited){
            return head;
        }
        head.visited = true;
        head = head.next;
    }
    return head;
};