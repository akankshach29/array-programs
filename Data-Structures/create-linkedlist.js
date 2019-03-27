// function Node(val) {
//     return({
//       next: null,
//       val,
//     })
// }

// function createList(){
//     let head = new Node(5)
//     head.next = new Node(6)
//     head.next.next = new Node(7)
//     while(head){
//         if(head.next !== null){
//             return head.val + head.next.val
//         }
//     }

// }
// console.log(createList())

class LinkedList {
    constructor(value) {
        this.head = {
            value,
            next: null
        };
        this.length = 1;
    }
}
console.log(new LinkedList('Hello!'));
