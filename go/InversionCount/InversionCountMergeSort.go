package main

import "fmt"

func main() {
	arr := []int{6, 1, 3, 4, 7, 5, 9, 8}
	inversionCount := mergeSort(arr)
	fmt.Printf("Sorted array : %v\n", arr)
	fmt.Printf("Inversion Count : %v\n", inversionCount)
}

func mergeSort(arr []int) int {
	return mergeSortUtil(arr, 0, len(arr)-1)
}

func mergeSortUtil(arr []int, low, high int) int {
	inversionCount := 0
	if low != high {
		mid := low + (high-low)>>1
		inversionCount = mergeSortUtil(arr, low, mid)
		inversionCount += mergeSortUtil(arr, mid+1, high)
		inversionCount += merge(arr, low, mid, high)
	}
	return inversionCount
}

func merge(arr []int, low, mid, high int) int {
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

	i, j, inversionCount := 0, 0, 0
	for i < n1 && j < n2 {
		if left[i] <= right[j] {
			arr[k] = left[i]
			i++
		} else {
			arr[k] = right[j]
			j++
			//// all the elements i.e a[i],a[i+1] ....a[n1-1] are greater than a[j]
			//// so add them as inversion count
			inversionCount += (n1 - i)
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
	return inversionCount
}
