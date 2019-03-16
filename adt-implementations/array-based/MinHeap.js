class MinHeap {
  constructor() {
    this.size = 0;
    this._heap = [];
  }

  getMin() {
    if (this.size > 0) return this._heap[1];
  }

  deleteMin() {
    if (this.size > 0) {
      const min = this._heap[1];
      this._heap[1] = this._heap[this.size];
      delete this._heap[this.size];
      this.size--;
      this._siftDown(1);
      return min;
    }
  }

  insert(val) {
    this._heap[this.size + 1] = val;
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
      left = this._getLeftChildIndex(i);
      right = this._getRightChildIndex(i);
      const minChild = this._getIndexOfMinChild(left, right);
      this._swap(i, minChild);
      i = minChild;
    }
  }

  _isLessThanParent(i, parent) {
    return this._heap[i] < this._heap[this._getParentIndex(i)];
  }

  _isGreaterThanChild(i, left, right) {
    return (
      this._heap[i] > this._heap[left] || this._heap[i] > this._heap[right]
    );
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
    return this._heap[i] <= this._heap[j] ? i : j;
  }

  _swap(i, j) {
    [this._heap[i], this._heap[j]] = [this._heap[j], this._heap[i]];
  }
}
