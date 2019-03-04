/* Implemented using Circular Array */
class Queue {
    constructor(n) {
        this._N = n;
        this._front = -1;
        this._rear = -1;
        this._queue = new Array(n);
    }

    isEmpty() {
        return this._front === -1 && this._rear === -1;
    }

    front() {
        if (this.isEmpty()) {
            console.error('Queue is empty!');
            return;
        }
        return this._queue[this._front];
    }

    enqueue(val) {
        if ((this._rear + 1) % this._N === this._front) {
            console.error(`Queue is full! Unable to insert value ${val}.`);
        } else if (this.isEmpty()) {
            this._front = this._rear = 0;
        } else {
            this._rear = (this._rear + 1) % this._N;
        }
        this._queue[this._rear] = val;
    }

    dequeue() {
        if (this.isEmpty()) {
            console.error('Queue is already empty!');
        } else if (this._front === this._rear) {
            this._front = this._rear = -1;
        } else {
            this._front = (this._front + 1) % this._N;
        }
    }
}

const a = new Queue(2);
a.enqueue(1);
a.enqueue(2);
console.log(`${a.front()} should be 1`);
a.dequeue();
console.log(`${a.front()} should be 2`);
a.enqueue(3);
console.log(`${a.front()} should be 2`);
a.dequeue();
a.dequeue();
a.dequeue();
a.enqueue(5);
console.log(`${a.front()} should be 5`);
console.log(a._queue);
