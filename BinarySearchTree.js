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
}

const a = new BinarySearchTree();
a.insert(10);
a.insert(12);
a.insert(9);
a.insert(11);
console.log(a.search(9));
