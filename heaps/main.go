package main

import (
	"fmt"
)

// MaxHeap struct has a slice that holds the values.
type MaxHeap struct {
	values []int
}

// Insert adds an element to the heap.
func (h *MaxHeap) Insert(key int) {
	h.values = append(h.values, key)
	h.BubbleUp(key)
}

// BubbleUp adds the element to the right index.
func (h *MaxHeap) BubbleUp(key int) {
	idx := len(h.values) - 1
	element := h.values[idx]
	for idx > 0 {
		parentIdx := int((idx - 1) / 2)
		parent := h.values[parentIdx]
		if element <= parent {
			break
		}
		h.values[parentIdx] = element
		h.values[idx] = parent
		idx = parentIdx
	}
}
func main() {
	h := &MaxHeap{}
	h.Insert(10)
	h.Insert(20)
	h.Insert(30)
	h.Insert(90)
	fmt.Println(h.values)
}
