package main

import "fmt"

type Stack struct {
	items []int
}

func (s *Stack) Push(item int) int {
	s.items = append(s.items, item)
	return len(s.items)
}

func (s *Stack) Pop() int {
	left := len(s.items)
	if left == 0 {
		return -1
	}
	poppedItem := s.items[left-1]
	s.items = s.items[:left-1]
	return poppedItem
}

func main() {
	s := Stack{}

	s.Push(1)
	s.Push(2)
	s.Push(3)
	fmt.Println(s.items)
	fmt.Println(s.Pop())
	fmt.Println(s.Pop())
	fmt.Println(s.Pop())
	fmt.Println(s.Pop())
	fmt.Println(s.items)
}
