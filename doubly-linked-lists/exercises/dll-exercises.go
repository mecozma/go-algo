package main

import "fmt"

type Node struct {
	value int
	prev  *Node
	next  *Node
}

type DLL struct {
	head   *Node
	tail   *Node
	length int
}

func (l *DLL) Traverse() {
	current := l.head
	if l.head == nil {
		fmt.Println("Empty list!")
		return
	}

	for {
		fmt.Println(current.value)
		current = current.next
		if current == nil {
			break
		}
	}
	fmt.Println("Traversed")
}

func (l *DLL) Push(n int) *DLL {
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

func (l *DLL) Unshift(n int) *DLL {
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
	d := &DLL{}

	d.Push(0)
	d.Push(1)
	d.Push(2)
	d.Push(3)
	d.Unshift(9)

	d.Traverse()
}
