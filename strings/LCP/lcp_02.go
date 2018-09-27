// // given a set of strings, find the longest common prefix
// // uncomment the code to run the program
// // search for prefix character by character
// package main

// import (
// 	"math"
// 	"fmt"
// )

// func main() {
// 	lcp := longestCommonPrefix([]string{"geeksforgeeks","geeks","geek",})
// 	fmt.Printf("LCP : %v\n",lcp)
// }

// func getMinimumStr(arr []string) int {
// 	min := math.MaxInt32
// 	n := len(arr)
// 	for i:=0;i<n;i++ {
// 		if len(arr[i]) < min {
// 			min = len(arr[i])
// 		}
// 	}
// 	return min
// }

// func longestCommonPrefix(arr []string) string {
// 	minStr := getMinimumStr(arr)
// 	count := 0
// 	len := len(arr)
// 	for i:=0;i<minStr;i++ {
// 		curr := arr[0][i]
// 		match := true
// 		for j:=1;j<len;j++ {
// 			if arr[j][i] != curr {
// 				match = false
// 				break
// 			}
// 		}
// 		if !match {
// 			break
// 		}
// 		count++
// 	}
// 	return arr[0][0:count]
// }