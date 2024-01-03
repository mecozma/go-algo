class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }
  insert(value) {
    var newLeaf = new Node(value);
    if (this.root === null) {
      this.root = newLeaf;
      return this;
    } else {
      var temp = this.root;
      while (true) {
        if (value === temp.value) return undefined;
        if (value < temp.value) {
          if (temp.left === null) {
            temp.left = newLeaf;
            return this;
          } else {
            temp = temp.left;
          }
        } else {
          if (temp.right === null) {
            temp.right = newLeaf;
            return this;
          } else {
            temp = temp.right;
          }
        }
      }
    }
    return this;
  }
  find(value) {}
}

var tree = new BST();
console.log(tree.insert(10));
console.log(tree.insert(9));
console.log(tree.insert(11));
console.log(tree.insert(33));
