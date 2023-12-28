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
  set(idx, val) {
    var currentNode = null;
    var counter;
    if (idx < 0 || idx >= this.length) return false;
    if (idx <= this.length / 2) {
      currentNode = this.head;
      counter = 0;
      while (counter != idx) {
        currentNode = currentNode.next;
        counter++;
      }
    } else {
      currentNode = this.tail;
      counter = this.length - 1;
      while (counter != idx) {
        currentNode = currentNode.prev;
        counter--;
      }
    }
    currentNode.value = val;
    return true;
  }
  remove(idx) {
    var counter;
    var currentNode;
    if (idx < 0 || idx >= this.length) return undefined;
    if (idx === this.length - 1) {
      currentNode = this.tail;
      currentNode.prev = this.tail;
      this.tail.next = null;
      currentNode.prev = null;
      currentNode.next = null;
      this.length--;
      return currentNode;
    }
    while (counter != idx) {
      currentNode = currentNode.next;
      counter++;
    }
    var previousNode = currentNode.prev;
    var afterNode = currentNode.next;
    previousNode.next = afterNode;
    afterNode.prev = previousNode;
    currentNode.prev = null;
    currentNode.next = null;
    this.length--;
    return currentNode;
  }
}

var l = new DoublyLinkedList();
l.push(0);
l.push(1);
l.push(2);
l.push(3);
l.set(0, 9);
l.traverse();
console.log(l.remove(0));
l.traverse();
