/* Implemented using Circular Array */

class Queue {
  constructor(n) {
    this.data = new Array(n);
    this.head = -1;
    this.tail = -1;
    this.size = n;
  }

  enqueue(value) {
    if (this.isFull()) return false;
    if (this.isEmpty()) this.head = 0;
    this.tail = (this.tail + 1) % this.size;
    this.data[this.tail] = value;
    return true;
  }

  dequeue() {
    if (this.isEmpty()) return false;
    if (this.head === this.tail) {
      this.head = this.tail = -1;
      return true;
    }
    this.head = (this.head + 1) % this.size;
    return true;
  }

  front() {
    if (this.isEmpty()) {
      console.error('Queue is empty!');
      return -1;
    }

    return this.data[this.head];
  }

  rear() {
    if (this.isEmpty()) {
      console.error('Queue is empty!');
      return -1;
    }

    return this.data[this.tail];
  }

  isEmpty() {
    return this.head === -1 && this.tail === -1;
  }

  isFull() {
    return (this.tail + 1) % this.size === this.head;
  }
}
