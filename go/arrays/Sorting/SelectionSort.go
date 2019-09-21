package main

import "fmt"

func main() {
	arr := []int{3, 2, 1, 5, 4, 9, 0, 8, 6, 7, -1}
	selectionSort(arr)
	fmt.Printf("Sorted array : %v\n", arr)
}

func selectionSort(arr []int) {
	k := 0
	for i := range arr {
		minIndex := getMinIndex(arr, i)
		arr[k], arr[minIndex] = arr[minIndex], arr[k]
		k++
	}
}

func getMinIndex(arr []int, i int) int {
	minIndex := i
	i++
	n := len(arr)
	for ; i < n; i++ {
		if arr[i] < arr[minIndex] {
			minIndex = i
		}
	}
	return minIndex
}
