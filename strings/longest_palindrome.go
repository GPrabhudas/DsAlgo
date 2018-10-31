// Given a string which consists of both upper case and lower case letters,
// fing the length of longest palindrome that can be buit with those letters.
// uncomment to run the code
package main

import (
	"fmt"
)

func main() {
	len := longestPalindrome("geeksforgeeks")
	fmt.Printf("Longest palindrome length : %v\n", len)
}
func longestPalindrome(str string) int {
	n := len(str)
	count := 0
	oddFound := false
	hash := make(map[byte]int)
	for i := 0; i < n; i++ {
		hash[byte(str[i])]++
	}
	for _, value := range hash {
		if value%2 == 0 {
			count += value
		} else {
			count += (value - 1)
			oddFound = true
		}
	}
	if oddFound {
		return count + 1
	}
	return count
}
