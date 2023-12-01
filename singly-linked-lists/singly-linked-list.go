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

func (l *List) Last() *Node {
	return l.tail
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

	firstPop := sll.Pop()
	seconPop := sll.Pop()
	fmt.Printf("First pop: %d\nSecond pop: %d\n", firstPop.value, seconPop.value)

	fmt.Printf("Head: %d\nTail: %d\nLength: %d\n", head.value, tail.value, length)
	sll.Traverse()
}
