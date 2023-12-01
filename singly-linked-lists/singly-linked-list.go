package main

import "fmt"

type List struct {
	head   *Node
	tail   *Node
	length int
}

func (l *List) First() *Node {
	return l.head
}

func (l *List) Push(val int) *List {
	newNode := &Node{value: val}
	if l.head == nil {
		l.head = newNode
	} else {
		l.tail.next = newNode
	}
	l.tail = newNode
	l.length++
	return l
}

func (l *List) Traverse() {
	n := l.First()

	for {
		fmt.Println(n.value)
		n = n.Next()
		if n == nil {
			break
		}
	}
}

type Node struct {
	value int
	next  *Node
}

func (n *Node) Next() *Node {
	return n.next
}

func main() {
	sll := &List{}
	sll.Push(0)
	sll.Push(1)
	sll.Push(2)
	sll.Push(3)
	sll.Traverse()

	head := sll.head
	tail := sll.tail
	length := sll.length

	fmt.Printf("Head: %d\nTail: %d\nLength: %d\n", head.value, tail.value, length)
}
