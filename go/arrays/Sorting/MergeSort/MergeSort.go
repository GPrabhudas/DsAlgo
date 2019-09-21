package main

import "fmt"

func main() {
	arr := []int{5, 1, 6, 4, 2, 3, 10, 9, 8, 11, 24}
	mergeSort(arr)
	fmt.Printf("Sorted array : %v\n", arr)
}

func mergeSort(arr []int) {
	mergeSortUtil(arr, 0, len(arr)-1)
}

func mergeSortUtil(arr []int, low, high int) {
	if low != high {
		mid := low + (high-low)>>1
		mergeSortUtil(arr, low, mid)
		mergeSortUtil(arr, mid+1, high)
		merge(arr, low, mid, high)
	}
}

func merge(arr []int, low, mid, high int) {
	k := low
	n1 := mid - low + 1
	n2 := high - mid

	left := make([]int, n1)
	right := make([]int, n2)

	for i := 0; i < n1; i++ {
		left[i] = arr[low+i]
	}

	for i := 0; i < n2; i++ {
		right[i] = arr[mid+1+i]
	}

	i, j := 0, 0
	for i < n1 && j < n2 {
		if left[i] < right[j] {
			arr[k] = left[i]
			i++
		} else {
			arr[k] = right[j]
			j++
		}
		k++
	}
	for i < n1 {
		arr[k] = left[i]
		i++
		k++
	}
	for j < n2 {
		arr[k] = right[j]
		j++
		k++
	}
}
