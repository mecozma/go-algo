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
}