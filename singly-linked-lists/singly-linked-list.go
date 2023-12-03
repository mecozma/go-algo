// main package implements Singly Linked List using Golang.
package main

import "fmt"

// List struct creates a type for SLL.
type List struct {
	head   *Node
	tail   *Node
	length int
}

// First method returns the head or the first element of the SLL.
func (l *List) First() *Node {
	return l.head
}

// Last methos returns the tail or the last element of the SLL.
func (l *List) Last() *Node {
	return l.tail
}

// Traverse method prints the values of each node of the SLL.
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

// Push method takes a value as argument and appends a node at the end of the list with the given value.
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

// Pop method returns the tail or the last node of the list.
func (l *List) Pop() *Node {
	if l.length == 0 {
		return nil
	}
	current := l.First()
	newTail := current
	for current.next != nil {
		newTail = current
		current = current.next
	}
	l.tail = newTail
	l.tail.next = nil
	if l.length == 0 {
		l.head = nil
		l.tail = nil
	}
	l.length--
	return current
}

// Shift method removes and returns the first node of the SLL.
func (l *List) Shift() *Node {
	if l.head == nil {
		return nil
	}
	currentHead := l.First()
	l.head = currentHead.next
	l.length--
	if l.length == 0 {
		l.head = nil
		l.tail = nil
	}
	return currentHead
}

// Unshift takes a value as parameter and adds a node with the given value at the beginning of the SLL.
func (l *List) Unshift(value int) *List {
	newNode := &Node{value: value}
	if l.First() == nil {
		l.head = newNode
		l.tail = l.head
	} else {
		newNode.next = l.head
		l.head = newNode
	}
	l.length++
	return l
}

// Node struct creates a new node for SLL.
type Node struct {
	value int
	next  *Node
}

// Next method points to the next node linked to a given node.
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

	sll.Unshift(-1)

	fmt.Printf("Head: %d\nTail: %d\nLength: %d\n", head.value, tail.value, length)
	sll.Traverse()
}
