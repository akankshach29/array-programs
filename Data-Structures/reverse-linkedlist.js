// take head i.e current
// prev as null
// next as null


function Node(val) {
    return({
      next: null,
      val,
    })
}

function reverseList(){
    let head = new Node(5)
    head.next = new Node(6)
    head.next.next = new Node(7)
    console.log('original', head)

        
        let prev = null
        let next = null
    
        while(head !== null){
            next = head.next
            head.next = prev;
            prev = head; 
            head = next; 
        }
        head = prev;
        return head;
    
}
console.log('reversed',reverseList())
