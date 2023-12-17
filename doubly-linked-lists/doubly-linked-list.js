// Doubly Linked List JS implementation.

// Node class represents the elements of DLL.
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

// DoublyLinkedList class.
class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // Traverse method prints all the nodes of a dll.
  Traverse() {
    if (this.head == null) {
      return "No nodes";
    }

    var start = this.head;
    while (start) {
      console.log(start.val);
      start = start.next;
      if (start == null) {
        break;
      }
    }
  }

  // Push method takes a value as argument and adds it as a node at the end of dll.
  Push(val) {
    var newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
    }
    this.tail = newNode;
    this.length++;
    return this;
  }

  // Pop method removes and returns the last node of dll.
  Pop() {
    if (!this.head) return null;
    var poppedNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedNode.prev;
      this.tail.next = null;
      poppedNode.prev = null;
    }

    this.length--;
    return poppedNode;
  }

  // Shift method removes and returns the first element of a sll.
  Shift() {
    if (this.length == 0) return undefined;
    var oldHead = this.head;
    if (this.length == 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }
    this.length--;
    return oldHead;
  }

  // Unshift method takes a value as integer and adds a new node at the beginning of the sll  and returns the sll.
  Unshift(val) {
    var newNode = new Node(val);
    if (!this.head) {
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
}

var dll = new DoublyLinkedList();
dll.Push(0);
console.log(dll);
console.log(dll.Unshift(1));
