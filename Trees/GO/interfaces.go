package main

import "fmt"

type I interface {
	print()
}
type T struct {
	S string
}
func (t T) print() {
	fmt.Println(t.S)
}
func main() {
	var i I = T{"Prabhudas Garule"}
	i.print()
}