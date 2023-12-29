class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  Push(val) {
    var newNode = new Node(val);
    if (this.first == null) {
      this.first = newNode;
      this.last = newNode;
    } else {
      newNode.next = this.first;
      this.first = newNode;
    }
    return ++this.size;
  }

  Pop() {
    var temp = this.first;
    if (this.first == null) return null;
    if (this.first == this.last) {
        this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.value;
  }
}

var s = new Stack();
s.Push(0);
s.Push(1);
s.Push(2);
console.log(s);
console.log(s.Pop())
console.log(s.Pop())
console.log(s.Pop())
console.log(s)
