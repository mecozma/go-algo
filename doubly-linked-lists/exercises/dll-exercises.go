package main

import (
	"fmt"
)

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

func (l *DLL) Shift() *Node {
	shiftedNode := l.head
	if l.head == nil {
		return nil
	}
	if l.length == 1 {
		l.head = nil
		l.tail = nil
	} else {
		l.head = shiftedNode.next
		l.head.prev = nil
		shiftedNode.next = nil
	}
	l.length--
	return shiftedNode
}

func (l *DLL) Set(idx, val int) bool {
	var currentNode *Node
	var counter int

	if idx < 0 || idx >= l.length {
		return false
	}
	if idx <= int(l.length/2) {
		currentNode = l.head
		counter = 0
		for counter != idx {
			currentNode = currentNode.next
			counter++
		}
	} else {
		currentNode = l.tail
		counter = l.length - 1
		for counter != idx {
			currentNode = currentNode.prev
			counter--
		}
	}
	currentNode.value = val
	return true
}

func (l *DLL) Remove(idx int) *Node {
	removedNode := l.head
	counter := 0
	if idx < 0 || idx >= l.length {
		return nil
	}
	if idx == l.length-1 {
		removedNode = l.tail
		removedNode.prev = l.tail
		l.tail.next = nil
		removedNode.prev = nil
		removedNode.next = nil
		return removedNode
	}
	for counter != idx {
		removedNode = removedNode.next
		counter++
	}
	beforeNode := removedNode.prev
	afterNode := removedNode.next
	beforeNode.next = afterNode
	afterNode.prev = beforeNode
	removedNode.prev = nil
	removedNode.next = nil
	l.length--
	return removedNode
}

func main() {
	d := &DLL{}

	d.Push(0)
	d.Push(1)
	d.Push(2)
	d.Push(3)
	d.Remove(0)

	d.Traverse()
}
