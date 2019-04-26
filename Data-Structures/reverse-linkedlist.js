// take head i.e current
// prev as null
// next as null


function Node(val) {
    return({
      next: null,
      val,
    })
}

function createList(){
    let head = new Node(5)
    head.next = new Node(6)
    head.next.next = new Node(5)
    // console.log('original', head)
    return reverseList()
}

function reverseList(){
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
console.log('original',createList())
