class MinHeap {
  constructor() {
    this.size = 0;
    this.heap = [];
  }

  isEmpty() {
    return this.size === 0;
  }

  getHeap() {
    return this.heap;
  }

  getMin() {
    if (!this.isEmpty()) return this.heap[1];
  }

  deleteMin() {
    if (!this.isEmpty()) {
      const min = this.heap[1];
      this.heap[1] = this.heap[this.size];
      this.heap.splice(this.size);
      this.size--;
      this._siftDown(1);
      return min;
    }
  }

  insert(val) {
    this.heap[this.size + 1] = val;
    this.size++;
    let i = this.size;
    this._siftUp(i);
  }

  _siftUp(i) {
    let parentIndex = this._getParentIndex(i);
    while (parentIndex >= 1 && this._isLessThanParent(i, parentIndex)) {
      this._swap(parentIndex, i);
      i = parentIndex;
      parentIndex = this._getParentIndex(i);
    }
  }

  _siftDown(i) {
    let left = this._getLeftChildIndex(i);
    let right = this._getRightChildIndex(i);
    while (!this._isLeaf(i) && this._isGreaterThanChild(i, left, right)) {
      const minChild = this._getIndexOfMinChild(left, right);
      this._swap(i, minChild);
      i = minChild;
      left = this._getLeftChildIndex(i);
      right = this._getRightChildIndex(i);
    }
  }

  _isLessThanParent(i, parent) {
    return this.heap[i] < this.heap[this._getParentIndex(i)];
  }

  _isGreaterThanChild(i, left, right) {
    return this.heap[i] > this.heap[left] || this.heap[i] > this.heap[right];
  }

  _isLeaf(i) {
    if (i >= Math.floor(this.size / 2) + 1 && i <= this.size) {
      return true;
    }
    return false;
  }

  _getParentIndex(i) {
    return Math.floor(i / 2);
  }

  _getLeftChildIndex(i) {
    return 2 * i;
  }

  _getRightChildIndex(i) {
    return 2 * i + 1;
  }

  _getIndexOfMinChild(i, j) {
    if (j <= this.size) {
      return this.heap[i] <= this.heap[j] ? i : j;
    }
    return i;
  }

  _swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }
}

const minHeap = new MinHeap();
minHeap.insert(5);
minHeap.insert(3);
minHeap.insert(17);
minHeap.insert(10);
minHeap.insert(84);
minHeap.insert(19);
minHeap.insert(6);
minHeap.insert(22);
minHeap.insert(9);
minHeap.deleteMin();
console.log('delete 1', minHeap.getHeap());
minHeap.deleteMin();
console.log('delete 2', minHeap.getHeap());
minHeap.deleteMin();
console.log('delete 3', minHeap.getHeap());
minHeap.deleteMin();
console.log('delete 4', minHeap.getHeap());
minHeap.deleteMin();
console.log('delete 5', minHeap.getHeap());
minHeap.deleteMin();
console.log('delete 6', minHeap.getHeap(), minHeap.size);
minHeap.deleteMin();
console.log('delete 7', minHeap.getHeap(), minHeap.size);
minHeap.deleteMin();
console.log('delete 8', minHeap.getHeap());
minHeap.deleteMin();
console.log('delete 9', minHeap.getHeap());
minHeap.deleteMin();
console.log('delete 10', minHeap.getHeap());
