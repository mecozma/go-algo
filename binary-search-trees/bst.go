package main

import (
	"fmt"
)

type Tree struct {
	node *Node
}

func (t *Tree) insert(value int) *Tree {
	if t.node == nil {
		t.node = &Node{value: value}
	} else {
		t.node.insert(value)
	}
	return t
}

type Node struct {
	value int
	left  *Node
	right *Node
}

func (n *Node) insert(value int) {
	if value <= n.value {
		if n.left == nil {
			n.left = &Node{value: value}
		} else {
			n.left.insert(value)
		}
	} else {
		if n.right == nil {
			n.right = &Node{value: value}
		} else {
			n.right.insert(value)
		}
	}
}

func (n *Node) exists(value int) bool {
	if n == nil {
		return false
	}
	if n.value == value {
		return true
	}
	if value <= n.value {
		return n.left.exists(value)
	} else {
		return n.right.exists(value)
	}
}

func printNode(n *Node) {
	if n == nil {
		return
	}
	fmt.Println(n.value)
	printNode(n.left)
	printNode(n.right)
}

func bfs(root *Node) []int {
	values := make([]int, 0, 0)
	queue := []*Node{}
	r := root
	queue = append(queue, r)
	for len(queue) != 0 {
		r = queue[0]
		queue = queue[1:]
		values = append(values, r.value)
		if r.left != nil {
			queue = append(queue, r.left)
		}
		if r.right != nil {
			queue = append(queue, r.right)
		}
	}
	return values
}

func preorderTraversal(root *Node) {
	if root == nil {
		return
	}
	fmt.Println(root.value)
	preorderTraversal(root.left)
	preorderTraversal(root.right)
}

func main() {
	t := &Tree{}
	t.insert(10).
		insert(5).
		insert(20).
		insert(2).
		insert(40).
		insert(1).
		insert(60)
	preorderTraversal(t.node)
}
