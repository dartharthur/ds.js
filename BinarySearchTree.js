const Queue = require('./adt-implementations/linked-list-based/Queue');
const BinaryTreeNode = require('./BinaryTreeNode');

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  _createNewNode(data) {
    return new BinaryTreeNode(data);
  }

  _insertNode(node, newNode) {
    if (node.left === null && newNode.data <= node.data) {
      node.left = newNode;
      return newNode;
    }

    if (node.right === null && newNode.data >= node.data) {
      node.right = newNode;
      return newNode;
    }

    if (newNode.data <= node.data) {
      return this._insertNode(node.left, newNode);
    } else {
      return this._insertNode(node.right, newNode);
    }
  }

  insert(data) {
    const newNode = this._createNewNode(data);

    if (this.root === null) {
      this.root = newNode;
      return newNode;
    }

    return this._insertNode(this.root, newNode);
  }

  _searchNode(node, data) {
    if (node === null) return false;
    if (node.data === data) return true;

    if (data <= node.data) {
      return this._searchNode(node.left, data);
    } else {
      return this._searchNode(node.right, data);
    }
  }

  search(data) {
    if (this.root === null) return false;
    if (this.root.data === data) return true;

    return this._searchNode(this.root, data);
  }

  findMin() {
    if (this.root === null) {
      console.error('Tree does not exist!');
      return -1;
    }

    let root = this.root;
    while (root.left !== null) root = root.left;
    return root;
  }

  findMax() {
    if (this.root === null) {
      console.error('Tree does not exist!');
      return -1;
    }

    let root = this.root;
    while (root.right !== null) root = root.right;
    return root;
  }

  findHeight(root) {
    if (root === null) return -1;
    const leftHeight = this.findHeight(root.left);
    const rightHeight = this.findHeight(root.right);
    return Math.max(leftHeight, rightHeight) + 1;
  }

  /**
   * Time: O(n)
   * Space: O(1) - best, O(n) - worst/avg
   */
  levelOrderSearch() {
    if (this.root === null) return;

    const q = new Queue();
    q.enqueue(this.root);

    while (!q.isEmpty()) {
      const currentNode = q.front();
      console.log(`Current node's value is ${currentNode.data}`);
      q.dequeue();

      if (currentNode.left !== null) q.enqueue(currentNode.left);
      if (currentNode.right !== null) q.enqueue(currentNode.right);
    }
  }

  /**
   * Time: O(n)
   * Space: O(h)
   *   Worst: O(n)
   *   Best/Average: O(log n)
   */
  preOrderSearch(root) {
    if (root === null) return;
    console.log(`Node's value is ${root.data}`);
    this.preOrderSearch(root.left);
    this.preOrderSearch(root.right);
  }

  /**
   * Time: O(n)
   * Space: O(h)
   *   Worst: O(n)
   *   Best/Average: O(log n)
   */
  inOrderSearch(root) {
    if (root === null) return;
    this.inOrderSearch(root.left);
    console.log(`Node's value is ${root.data}`);
    this.inOrderSearch(root.right);
  }

  /**
   * Time: O(n)
   * Space: O(h)
   *   Worst: O(n)
   *   Best/Average: O(log n)
   */
  postOrderSearch(root) {
    if (root === null) return;
    this.postOrderSearch(root.left);
    this.postOrderSearch(root.right);
    console.log(`Node's value is ${root.data}`);
  }

  // create a range for every node, node's value must fall within range, update range as you recurse
  _isBST(node, minValue, maxValue) {
    if (node === null) return true;

    if (
      node.data > minValue &&
      node.data < maxValue &&
      this._isBST(node.left, minValue, node.data) &&
      this._isBST(node.right, node.data, maxValue)
    ) {
      return true;
    } else {
      return false;
    }
  }

  // another solution is to do in-order traversal, track prev value, see if in sorted order
  isBST() {
    return this._isBST(
      this.root,
      Number.MIN_SAFE_INTEGER,
      Number.MAX_SAFE_INTEGER,
    );
  }
}

const a = new BinarySearchTree();
let root = a.root;
a.insert(10);
a.insert(12);
a.insert(9);
a.insert(11);
a.insert(5);
a.insert(14);
a.insert(15);
// console.log(a.findMin());
// console.log(a.findMax());
console.log(a.findHeight(root));
// a.levelOrderSearch();
root = a.root;
a.preOrderSearch(root);
a.inOrderSearch(root);
a.postOrderSearch(root);
console.log(a.isBST());
