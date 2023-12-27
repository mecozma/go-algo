// Doubly Linked List JS implementation.

// Node class represents the elements of DLL.
class Node {
  constructor(val) {
    this.val = val;
    this.prev = null;
    this.next = null;
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

  // Get method gets an integer as input and return the node at the given index.
  Get(idx) {
    var count, current;
    if (idx < 0 || idx >= this.length) return null;
    if (idx <= this.length / 2) {
      count = 0;
      current = this.head;
      while (count != idx) {
        current = current.next;
        count++;
      }
    } else {
      count = this.length - 1;
      current = this.tail;
      while (count != idx) {
        current = current.prev;
        count--;
      }
    }
    return current;
  }

  // Set method takes an index and a value as input and replaces the value of the node at the given index.
  Set(idx, val) {
    var updatedNode = this.Get(idx);
    if (updatedNode != null) {
      updatedNode.val = val;
      return true;
    }
    return false;
  }

  // Insert method takes an index and a value as arguments and inserts a new node at the given index.
  Insert(idx, val) {
    var newNode = new Node(val);
    if (idx < 0 || idx > this.length) return false;
    if (idx === 0) return !!this.Unshift(val);
    if (idx === this.length) return !!this.Push(val);
    var beforeNode = this.Get(idx - 1);
    var afterNode = beforeNode.next;
    beforeNode.next = newNode;
    newNode.prev = beforeNode;
    newNode.next = afterNode;
    afterNode.prev = newNode;
    this.length++;
    return true;
  }

  // Remove method takes an index as argument, removes and returns the node at that index.
  Remove(idx) {
    if (idx < 0 || idx >= this.length) return null;
    if (idx == 0) return this.Shift();
    if (idx == this.length - 1) return this.Pop();
    var removedNode = this.Get(idx);
    var beforeNode = removedNode.prev;
    var afterNode = removedNode.next;
    beforeNode.next = afterNode;
    afterNode.prev = beforeNode;
    removedNode.next = null;
    removedNode.prev = null;
    this.length--;
    return removedNode;
  }
}

var dll = new DoublyLinkedList();
dll.Push(0);
dll.Push(1);
dll.Push(2);
dll.Push(3);
dll.Push(4);
console.log(dll.Set(2, 9));
console.log(dll.Traverse());
console.log(dll);
