class CircularQueue {
    constructor(capacity) {
        this.capacity = capacity;
        this.front = 0;
        this.rear = 0;
        this.isFull = false;
        this.array = new Array(capacity);
    }

    put(value) {
        
    }

    get() {
        
    }

    peek() {
        
    }

    print() {
        
    }
}


queue = new CircularQueue(5);
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
