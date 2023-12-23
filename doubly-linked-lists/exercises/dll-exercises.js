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
}

var l = new DoublyLinkedList();
l.push(0);
l.push(1);
l.push(2);
l.push(3);
l.traverse();
