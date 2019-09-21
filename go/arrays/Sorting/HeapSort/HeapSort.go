package main

import "fmt"

func main() {
	arr := []int{4, 10, 3, 5, 1, 15, 11, 16, 23, 12}
	heapSort(arr)
	fmt.Printf("Sorted array : %v\n", arr)
}

func heapSort(arr []int) {
	n := len(arr)
	for i := (n / 2) - 1; i >= 0; i-- {
		heapify(arr, i, n)
	}

	for i := n - 1; i >= 0; i-- {
		arr[0], arr[i] = arr[i], arr[0]
		heapify(arr, 0, i)
	}
}

func heapify(arr []int, current, size int) {
	largest := current
	left := current<<1 + 1
	right := current<<1 + 2

	if left < size && arr[left] > arr[largest] {
		largest = left
	}

	if right < size && arr[right] > arr[largest] {
		largest = right
	}

	if largest != current {
		arr[current], arr[largest] = arr[largest], arr[current]
		heapify(arr, largest, size)
	}
}
