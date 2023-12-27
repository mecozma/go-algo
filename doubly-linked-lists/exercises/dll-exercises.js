class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = null;
  }
  traverse() {
    var currentNode = this.head;
    if (!this.head) {
      console.log("Empty list");
      return;
    }
    while (currentNode) {
      console.log(currentNode.value);
      currentNode = currentNode.next;
      if (currentNode == null) {
        break;
      }
    }
    console.log("Traversed");
  }
  push(val) {
    var newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
    }
    this.tail = newNode;
    this.length++;
    return this;
  }
  unshift(val) {
    var newNode = new Node(val);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  shift() {
    var returnedNode = this.head;
    if (this.head === null) return undefined;
    if (this.length === 1) {
      this.head = 0;
      this.tail = 0;
    } else {
      this.head = returnedNode.next;
      this.head.prev = null;
      returnedNode.next = null;
    }
    this.length--;
    return returnedNode;
  }
}

var l = new DoublyLinkedList();
l.push(0);
l.push(1);
l.push(2);
l.push(3);
console.log(l.shift());
l.traverse();
