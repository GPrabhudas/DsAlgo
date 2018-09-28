// // convert a given string into zig zag fashion of given number of rows
// // uncomment to run the code

// package main

// import (
// 	"fmt"
// )

// func main() {
// 	str := convertZigZag("ABCD",2)
// 	fmt.Printf("zigzag string : %v\n",str)
// }
// func convertZigZag(str string,n int) string {
// 	m := len(str)
// 	arr := make([]string,n)
// 	count := 0
// 	down := false
// 	direction := down
// 	for count < m {
// 		if direction == down {
// 			for i:=0; i<n && count < m; i++{
// 				arr[i] = arr[i] + string(str[count])
// 				count++
// 			}
// 		} else {
// 			for i:=n-2;i>0 && count < m;i-- {
// 				arr[i] = arr[i] + string(str[count])
// 				count++
// 			}
// 		}
// 		direction = !direction
// 	}
// 	result := ""
// 	for i:=0;i<n;i++ {
// 		result = result + arr[i]
// 	}
// 	return result
// }