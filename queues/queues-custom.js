class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  enqueue(val) {
    var newNode = new Node(val);
    if (this.first == null) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.size++;
    return this.length;
  }

  dequeue() {
    var temp = this.first;
    if (this.first == null) return null;
    if (this.first === this.last) {
      this.first = null;
      this.last = null;
    } else {
      this.first = this.first.next;
    }
    this.size--;
    return temp.value;
  }
}

var q = new Queue();
q.enqueue(0);
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);

console.log(q);
console.log(q.dequeue())
console.log(q)