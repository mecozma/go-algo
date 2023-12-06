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

    // Traverse method, prints all the nodes in the SLL.
    Traverse() {
        var currentNode = this.head;
        if (this.length === 0) return null;
        while (currentNode != null) {
            console.log(currentNode)
            currentNode = currentNode.next;
        }
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

    // Get method accepts an index and return the node at that index or null if there is no node at that index.
    Get(idx) {
        if (idx < 0 || idx > this.length) {
            return null
        }
        var currentNode = this.head;
        var currentIdx = 0;

        while (idx != currentIdx) {

            currentNode = currentNode.next;
            currentIdx++;
        }
        return currentNode
    }

    // Set method, takes an index and a value as arguments and replace the value of the node at the given index.
    Set(idx, val) {
        var foundNode = this.Get(idx);
        if (foundNode) {
            foundNode.val = val;
            return true;
        }
        return false;
    }
}

let list = new SinglyLinkedList();
list.Push(0);
list.Push(1);
list.Push(2);
list.Push(3);
list.Push(4);
console.log("Initial list", list.Traverse());
console.log(list.Set(0, 100))
console.log("Updated list", list.Traverse());