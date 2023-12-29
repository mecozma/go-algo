package main

import "fmt"

type Node struct {
	value int
	next  *Node
}

type Stack struct {
	first *Node
	last  *Node
	size  int
}

// Traverse method prints all the nodes of a dll.
func (s *Stack) Traverse() {
	if s.first == nil {
		fmt.Println("No nodes!")
		return
	}

	first := s.first

	for {
		fmt.Println(first.value)
		first = first.next
		if first == nil {
			break
		}
	}
}

func (s *Stack) Push(val int) int {
	newNode := &Node{value: val}
	if s.first == nil {
		s.first = newNode
		s.last = newNode
	} else {
		newNode.next = s.first
		s.first = newNode
	}
	s.size++
	return s.size
}

func (s *Stack) Pop() int {
	if s.first == nil {
		return -1
	}
	temp := s.first
	if s.first == s.last {
		s.last = nil
	}
	s.first = s.first.next
	return temp.value
}

func main() {
	s := &Stack{}

	s.Push(0)
	s.Push(1)
	s.Push(2)
	s.Push(3)
	s.Traverse()
	fmt.Println("**********")
	fmt.Println(s.Pop())
	fmt.Println(s.Pop())
	fmt.Println("**********")
	s.Traverse()
}
