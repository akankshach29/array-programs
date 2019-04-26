// Linkedlist is a collection of items where each item has a connection to the next item
function createNode(value){
    return{
        value,
        next: null
    }        
}

function createLinkedList(){
    return {
        head: null,
        tail: null,
        length: 0,
        push(value){
            const node = createNode(value)
            if(this.head === null){
                this.head = node;
                this.tail = node;
                this.length++
                return node;
            }
            this.tail.next = node;
            this.tail = node;
            this.length++;

            return node;
        },
        pop(value){
            // if the list does not exist
            if(this.head === null){
                return null;
            }
            const node = this.tail;
            // if the list has one node
            if(this.head === this.tail){
                this.head = null;
                this.tail = null;
                this.length--;
                return node;
            }
            
        },
    }
}