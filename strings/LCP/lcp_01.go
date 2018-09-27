// // given a set of strings, find the longest common prefix
// // Word by word matching algorithm
// // uncomment to run the program
// package main

// import (
// 	"fmt"
// )

// func main() {
// 	str := longestCommonPrefix([]string{"geeksforgeeks", "geeks", "geek", "gee", "ge", "g"})
// 	fmt.Printf("LCP :%v\n", str)
// }
// func longestCommonPrefix(arr []string) string {
// 	n := len(arr)
// 	if n < 1 {
// 		return ""
// 	}
// 	prefix := arr[0]
// 	for i := 1; i < n; i++ {
// 		prefix = longestCommonPrefixUtil(prefix, arr[i])
// 	}
// 	return prefix
// }
// func longestCommonPrefixUtil(str1, str2 string) string {
// 	count := 0
// 	n1 := len(str1)
// 	n2 := len(str2)
// 	for i := 0; i < n1 && i < n2 && str1[i] == str2[i]; i++ {
// 		count++
// 	}
// 	return str1[0:count]
// }
