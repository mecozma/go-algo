package main

import (
	"fmt"
)

type Queue struct {
	items chan int
}

func (q *Queue) Enqueue(item int) {
	q.items <- item
}

func (q *Queue) Dequeue() int {
	return <-q.items
}

func main() {
	q := Queue{
		items: make(chan int, 16),
	}
	q.Enqueue(0)
	q.Enqueue(1)
	fmt.Println(q.Dequeue())
	fmt.Println(q.Dequeue())
	// fmt.Println(q.Dequeue())
}
