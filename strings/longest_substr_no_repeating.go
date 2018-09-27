// find the length of the longes substring with no repeating characters
// uncomment to run the program
package main

import (
	"fmt"
)

func main() {
	len, str := logestSubtringNoRepeating("ABDEFGABEFABCDEFGH")
	fmt.Printf("Length of longest substring with no repeating characters : %v(%v)\n", len, str)
}

func logestSubtringNoRepeating(str string) (int, string) {
	currentStart := -1
	maxLength := 0
	currLength := 0
	hash := make(map[byte]int)
	n := len(str)
	prev := -1
	for i := 0; i < n; i++ {
		prev = hash[byte(str[i])] - 1
		if prev < currentStart {
			currLength++
		} else {
			if maxLength < currLength {
				maxLength = currLength
			}
			currentStart = prev + 1
			currLength = i - prev
		}
		hash[byte(str[i])] = (i + 1)
	}
	if maxLength < currLength {
		maxLength = currLength
	}
	return maxLength, str[currentStart:]
}
