// // find minimum number of insertions to be made to make string palindrome
// //uncomment to run the code
// package main

// import (
// 	"fmt"
// 	"math"
// )
// func main() {
// 	minInsertions := minimumPalindromeInsertion("geeks")
// 	fmt.Printf("Minimum Palindrome Insertions : %v\n",minInsertions)
// }

// func minimumPalindromeInsertion(str string) int {
// 	return minInsertionUtil(str,0,len(str)-1)
// }

// func minInsertionUtil(str string,l,h int) int {
// 	if l > h {
// 		return math.MaxInt32
// 	}
// 	if l == h { // string of once character
// 		return 0
// 	}
// 	if l+1 == h { // string of length 2
// 		if str[l] == str[h] {
// 			return 0
// 		} else {
// 			return 1 // need to insert once character to make it palindrome ex: bc ==> cbc or bcb
// 		}
// 	} else {
//		if str[l] == str[h] {
//			return minInsertionUtil(str,l+1,h-1)
//		}
// 		return 1 + min(minInsertionUtil(str,l+1,h),minInsertionUtil(str,l,h-1))
// 	}
// }
// func min(a,b int) int {
// 	if a < b {
// 		return a
// 	}
// 	return b
// }