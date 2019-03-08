/* Implemented using Linked List */

const LinkedListNode = require('../../LinkedListNode');

class Queue {
  constructor() {
    this._front = null;
    this._rear = null;
  }

  isEmpty() {
    return this._front === null && this._rear === null;
  }

  front() {
    if (this.isEmpty()) {
      console.error('Queue is empty!');
      return;
    }
    return this._front.data;
  }

  enqueue(val) {
    const node = new LinkedListNode(val);

    if (this.isEmpty()) {
      this._front = this._rear = node;
      return;
    }

    this._rear.next = node;
    this._rear = node;
  }

  dequeue() {
    if (this.isEmpty()) {
      console.error('Queue is already empty!');
      return;
    } else if (this._front === this._rear) {
      this._front = this._rear = null;
    } else {
      const temp = this._front;
      this._front = temp.next;
      temp.next = null; // break reference
    }
  }
}

module.exports = Queue;
