package main

import "fmt"

func main() {
	arr := []int{1, 2, 3, 4, 5, 6, 7, 8, 9, 10}
	keys := []int{-1, 2, 5, 9, 10, 20}
	for i := range keys {
		fmt.Printf("Key : [%v] is present at : %v\n", keys[i], binarySearch(arr, keys[i]))
	}
}

func binarySearch(arr []int, key int) int {
	if n := len(arr); n > 0 {
		return binarySearchUtil(arr, 0, n-1, key)
	}
	return -1
}

func binarySearchUtil(arr []int, low, high, key int) int {
	if low <= high {
		mid := low + (high-low)>>1
		if arr[mid] == key {
			return mid
		}
		if key < arr[mid] {
			return binarySearchUtil(arr, low, mid-1, key)
		}
		return binarySearchUtil(arr, mid+1, high, key)
	}
	return -1
}
