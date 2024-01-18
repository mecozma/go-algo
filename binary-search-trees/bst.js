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
  find(value) {
    var current = this.root;
    var found = false;
    if (this.root === null) return null;
    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        found = true;
      }
    }
    return found;
  }
  breathFirstSearch() {
    var node = this.root;
    var data = [];
    var queue = [];
    queue.push(node);
    while (queue.length) {
      node = queue.shift();
      data.push(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    console.log("done");
    return data;
  }
  dfsPreorder() {
    var visited = [];
    var current = this.root;
     function preorderHelper(node) {
      visited.push(node.value);
       if (node.left) preorderHelper(node.left);
       if (node.right) preorderHelper(node.right);
    }
    preorderHelper(current);
    return visited;
  }
}

var tree = new BST();
console.log(tree.insert(10));
console.log(tree.insert(9));
console.log(tree.insert(11));
console.log(tree.insert(33));
console.log(tree.dfsPreorder());
