const BinaryTreeNode = require('./BinaryTreeNode');

class BinarySearchTree {
  constructor() {
    this._root = null;
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

    if (this._root === null) {
      this._root = newNode;
      return newNode;
    }

    return this._insertNode(this._root, newNode);
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
    if (this._root === null) return false;
    if (this._root.data === data) return true;

    return this._searchNode(this._root, data);
  }

  _findMinNode(node) {
    if (node.left === null) return node.data;
    if (node.left !== null) return this._findMinNode(node.left);
  }

  findMin() {
    if (this.root === null) {
      console.error('Tree does not exist!');
      return -1;
    }

    return this._findMinNode(this._root);
  }

  _findMaxNode(node) {
    if (node.right === null) return node.data;
    if (node.right !== null) return this._findMaxNode(node.right);
  }

  findMax() {
    if (this.root === null) {
      console.error('Tree does not exist!');
      return -1;
    }

    return this._findMaxNode(this._root);
  }

  _findHeight(node) {
    if (node === null) return -1;
    const leftHeight = this._findHeight(node.left);
    const rightHeight = this._findHeight(node.right);
    return Math.max(leftHeight, rightHeight) + 1;
  }

  findHeight() {
    if (this._root === null) return -1;
    return this._findHeight(this._root);
  }
}

const a = new BinarySearchTree();
a.insert(10);
a.insert(12);
a.insert(9);
a.insert(11);
a.insert(5);
a.insert(14);
a.insert(15);
console.log(a.findMin());
console.log(a.findMax());
console.log(a.findHeight());

/* Iterative findMin / findMax
const current = this.root;
while (current.left !== null) {
  current = current.left;
}
return current.data;
 */
