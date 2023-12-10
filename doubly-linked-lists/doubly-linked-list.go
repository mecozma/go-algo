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

func main() {
	dll := &DoublyLinkedList{}

	dll.Push(0)
	dll.Push(1)

	dll.Traverse()

}
