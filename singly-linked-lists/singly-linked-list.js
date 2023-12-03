// Singly Likned List with Java Script implementation.

// a class that represents a node of the Singly Linked List.
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

// SLL class.
class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    // Push method takes a value as argumant and appends it at the end of the list.
    Push(val) {
        var newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    // Pop method removes the last node of the list and returns it.
    Pop() {
        if (this.length === 0) {
            return undefined
        }
        var current = this.head;
        var newTail = current
        while (current.next) {
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }

    // Shift method removes the first node of the list and returns it.
    Shift() {
        if (this.length === 0) {
            return undefined;
        }

        var currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return currentHead;
    }

    // Unshift method takes a value as argument, and inserts a new node at the beginning of the list with the input value.
    Unshift(val) {
        var newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
}

let list = new SinglyLinkedList();
list.Push("Hi");
list.Push("There");
list.Push("learner!");
console.log(list);
list.Unshift("Hey,")
console.log(list);