package main

import (
	"fmt"
)

type Node struct {
	value int
	next  *Node
}

type Queue struct {
	first  *Node
	last   *Node
	length int
}

func (q *Queue) traverseQueue() {
	var currentNode = q.first
	for {
		fmt.Println(currentNode)
		if currentNode != q.last {
			currentNode = currentNode.next
		}
	}
}

func (q *Queue) enQueue(n int) int {
	newNode := &Node{value: n}
	if q.first == nil {
		q.first = newNode
		q.last = newNode
	} else {
		q.last.next = newNode
		q.last = newNode
	}
	q.length++
	return q.length
}

func (q *Queue) deQueue() int {
	temp := q.first
	if q.first == nil {
		fmt.Println("Queue is empty")
	}
	if q.first == q.last {
		q.first = nil
		q.last = nil
	} else {
		q.first = q.first.next
	}
	q.length--
	return temp.value
}

func main() {
	q := &Queue{}
	q.enQueue(0)
	q.enQueue(1)
	q.enQueue(2)
	q.enQueue(3)
	q.traverseQueue()
	fmt.Println(q.deQueue())
	fmt.Println(q.deQueue())
}
