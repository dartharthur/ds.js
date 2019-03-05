const BinaryTreeNode = require('./BinaryTreeNode');

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  _createNewNode(val) {
    return new BinaryTreeNode(val);
  }

  insert(current, val) {
    if (this.root === null) {
      this.root = this._createNewNode(val);
      return this.root;
    }

    if (current.left === null && val <= current.data) {
      current.left = this._createNewNode(val);
      return;
    }

    if (current.right === null && val >= current.data) {
      current.right = this._createNewNode(val);
      return;
    }

    if (val <= current.data) {
      this.insert(current.left, val);
    } else {
      this.insert(current.right, val);
    }
  }

  search(current, val) {
    if (current === null) return false;
    if (current.data === val) return true;

    if (val <= current.data) {
      return this.search(current.left, val);
    } else {
      return this.search(current.right, val);
    }
  }
}

const a = new BinarySearchTree();
a.insert(a.root, 10);
a.insert(a.root, 12);
a.insert(a.root, 9);
a.insert(a.root, 11);
console.log(a.search(a.root, 13));
