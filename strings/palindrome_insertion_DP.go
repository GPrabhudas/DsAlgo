// // find minimum number of insertions to be made to make string palindrome
// //uncomment to run the program
// package main

// import (
// 	"fmt"
// )

// func main() {
// 	minInsertions := minPalindromeInsertions("banana")
// 	fmt.Printf("Minimum palindrome insertions : %v", minInsertions)
// }
// func minPalindromeInsertions(str string) int {
// 	n := len(str)
// 	dp := make([][]int, n)
// 	for i := 0; i < n; i++ {
// 		dp[i] = make([]int, n)
// 	}
// 	for i := 0; i < n; i++ {
// 		dp[i][i] = 0 // strings of length 1 are palindrome
// 	}
// 	// check for each substring of length >= 2
// 	for l := 2; l <= n; l++ {
// 		ts := n - l + 1 // total substrings of length l
// 		for i := 0; i < ts; i++ {
// 			j := i + l - 1 // end index of string of length l
// 			if l == 2 {
// 				if str[i] == str[j] {
// 					dp[i][j] = 0 // string of length 2 with same characters
// 				} else {
// 					dp[i][j] = 1 // string of length 2 with difference characters can be made palindrome with one insertion.
// 				}
// 			} else {
// 				if str[i] == str[j] { // if last characters are same, no need to insert
// 					dp[i][j] = dp[i+1][j-1]
// 				} else { // need to do one insertion
// 					dp[i][j] = 1 + min(dp[i][j-1], dp[i+1][j])
// 				}
// 			}
// 		}
// 	}
// 	return dp[0][n-1]
// }
// func min(a, b int) int {
// 	if a < b {
// 		return a
// 	}
// 	return b
// }
