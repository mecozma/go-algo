package main

import "fmt"

type Node struct {
	value int
	next  *Node
	prev  *Node
}

type DoublyLinkedList struct {
	head   *Node
	tail   *Node
	length int
}

// Traverse method prints all the nodes of a dll.
func (l *DoublyLinkedList) Traverse() {
	if l.head == nil {
		fmt.Println("No nodes!")
		return
	}

	first := l.head

	for {
		fmt.Println(first.value)
		first = first.next
		if first == nil {
			break
		}
	}
}

// Push method takes a value as argument and adds it as a node at the end of dll.
func (l *DoublyLinkedList) Push(n int) *DoublyLinkedList {
	newNode := &Node{value: n}
	if l.head == nil {
		l.head = newNode
	} else {
		l.tail.next = newNode
		newNode.prev = l.tail
	}
	l.tail = newNode
	l.length++
	return l
}

// Pop method removes and returns the last node of dll.
func (l *DoublyLinkedList) Pop() *Node {
	if l.head == nil {
		return nil
	}
	poppedNode := l.tail
	if l.length == 1 {
		l.head = nil
		l.tail = nil
	} else {
		l.tail = poppedNode.prev
		l.tail.next = nil
		poppedNode.prev = nil
	}
	l.length--
	return poppedNode
}

// Shift method removes and returns the first element of a dll.
func (l *DoublyLinkedList) Shift() *Node {
	if l.length == 0 {
		return nil
	}
	oldHead := l.head
	if l.length == 1 {
		l.head = nil
		l.tail = nil
	} else {
		l.head = oldHead.next
		l.head.prev = nil
		oldHead.next = nil
	}
	l.length--
	return oldHead
}

// Unshift method takes a value as integer and adds a new node at the beginning of the sll  and returns the sll.
func (l *DoublyLinkedList) Unshift(n int) *DoublyLinkedList {
	newNode := &Node{value: n}
	if l.head == nil {
		l.head = newNode
		l.tail = newNode
	} else {
		l.head.prev = newNode
		newNode.next = l.head
		l.head = newNode
	}
	l.length++
	return l
}

func main() {
	dll := &DoublyLinkedList{}

	dll.Push(0)
	dll.Push(1)

	dll.Traverse()
	fmt.Println(dll.Unshift(3))
	dll.Traverse()

}
