package main

import "fmt"

func main() {
	arr := []int{1, 3, 5, 2, 4, 7, 6, 8}
	insertionSort(arr)
	fmt.Printf("Sorted array : %v\n", arr)
}

func insertionSort(arr []int) {
	for i := range arr {
		key := arr[i]
		j := i - 1
		for j >= 0 && arr[j] > key {
			arr[j+1] = arr[j]
			j--
		}
		arr[j+1] = key
	}
}
