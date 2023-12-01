class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

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
    Pop() {
        if (this.length == 0) {
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
        return current.val;
    }
}

let list = new SinglyLinkedList();
list.Push("Hi");
list.Push("There");
list.Push("learner!");
// console.log(list);
console.log(list.Pop())
console.log(list)
console.log(list.Pop())
console.log(list)
console.log(list.Pop())
console.log(list)
console.log(list.Pop())
console.log(list)