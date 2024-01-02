package main

import (
	"fmt"
)

type Queue struct {
	values []int
}

func (q *Queue) enQueue(n int) int {
	q.values = append(q.values, n)
	return len(q.values)
}

func (q *Queue) deQueue() int {
	temp := q.values[0]
	q.values = q.values[1:]
	return temp
}

func main() {
	q := &Queue{}
	q.enQueue(0)
	q.enQueue(1)
	q.enQueue(2)
	q.enQueue(3)
	fmt.Println(q.values)
	q.deQueue()
	q.deQueue()
	fmt.Println(q.values)
}
