// program to convert a string into integer
// uncomment to run the code
package main

import (
	"fmt"
	"math"
	"strings"
)

func main() {
	n := atoi("X454312465")
	fmt.Printf("converted number : %v\n", n)
}

func atoi(str string) int {
	str = strings.TrimSpace(str)
	result := 0
	sign := 1
	i := 0
	n := len(str)
	if n > 0 {
		if str[i] == '+' || str[i] == '-' {
			if str[i] == '-' {
				sign = -1
			}
			i++
		}
		for i < n && str[i] >= '0' && str[i] <= '9' {
			if result > math.MaxInt32/10 || (result == math.MaxInt32/10 && str[i]-'0' > 7) {
				if sign == 1 {
					return math.MaxInt32
				}
				return math.MinInt32
			}
			result = result*10 + int(str[i]-'0')
			i++
		}
	}
	return result * sign
}
