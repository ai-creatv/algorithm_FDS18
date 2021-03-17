class Node {
    constructor(value, prev, next) {
        this.value = value;
        this.prev = prev;
        this.next = next;
    }
}

class LinkedQueue {
    constructor() {
        this.front = null;
        this.rear = null;
    }
    
    isEmpty() {
        
    }

    put(value) {
        
    }

    get() {
        
    }


    print() {
        
    }
}


queue = new LinkedQueue();
queue.print();

queue.put(1);
queue.put(2);
queue.put(3);
queue.put(4);
queue.put(5);
queue.put(6);
queue.print();

console.log(queue.get());
console.log(queue.get());
console.log(queue.get());
console.log(queue.get());
queue.print();

queue.put(4);
queue.put(5);
queue.put(6);
queue.print();

console.log(queue.get());
console.log(queue.get());
console.log(queue.get());
queue.print();
