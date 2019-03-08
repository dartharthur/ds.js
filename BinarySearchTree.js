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

  delete(root, data) {
    if (root === null) return root;
    else if (data < root.data) root.left = this.delete(root.left, data);
    else if (data > root.data) root.right = this.delete(root.right, data);
    else {
      if (root.left === null && root.right === null) {
        // delete root; // doesn't actually delete in JS but this is the idea
        root = null;
      } else if (root.left === null) {
        // const temp = root;
        root = root.right;
        // delete temp;
      } else if (root.right === null) {
        // const temp = root;
        root = root.left;
        // delete temp;
      } else {
        const temp = this.findMin(root.right);
        root.data = temp.data;
        root.right = this.delete(root.right, temp.data);
      }
    }
    return root;
  }

  find(root, data) {
    if (root === null) return null;
    if (root.data === data) return root;

    if (data <= root.data) {
      return this.find(root.left, data);
    } else {
      return this.find(root.right, data);
    }
  }

  getSuccessor(root, data) {
    const current = this.find(root, data); // O(h) search
    if (current === null) return null;
    if (current.right !== null) {
      // Case 1: Node has right sub-tree
      return this.findMin(current.right); // O(h) search
    } else {
      // Case 2: Node does not have right sub-tree -> O(h) search
      let successor = null;
      let ancestor = root;
      while (ancestor !== current) {
        if (current.data < ancestor.data) {
          successor = ancestor; // deepest node that has current node in LEFT sub-tree
          ancestor = ancestor.left;
        } else {
          ancestor = ancestor.right;
        }
      }
      return successor;
    }
  }

  exists(root, data) {
    if (root === null) return false;
    if (root.data === data) return true;

    if (data <= root.data) {
      return this.exists(root.left, data);
    } else {
      return this.exists(root.right, data);
    }
  }

  findMin(root) {
    if (root === null) {
      console.error('Tree does not exist!');
      return -1;
    }

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
a.insert(15);
a.insert(10);
a.insert(20);
a.insert(8);
a.insert(12);
a.insert(17);
a.insert(25);
a.insert(6);
a.insert(11);
a.insert(16);
a.insert(27);

let root = a.root;
console.log(a.getSuccessor(root, 12).data);
