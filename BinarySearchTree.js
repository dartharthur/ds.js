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

  search(current, data) {
    if (current === null) return false;
    if (current.data === data) return true;

    if (data <= current.data) {
      return this.search(current.left, data);
    } else {
      return this.search(current.right, data);
    }
  }
}

const a = new BinarySearchTree();
a.insert(10);
a.insert(12);
a.insert(9);
a.insert(11);
console.log(a);
console.log(a.root.right);
console.log(a.search(a.root, 13));
