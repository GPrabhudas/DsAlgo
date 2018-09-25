// uncomment to run the code
// package main
// import (
// 	"fmt"
// )

// func main() {
// 	len := lcsrecurssive("ABCDGH","AEDFHR")
// 	fmt.Printf("Longest common subsquence :%v",len)
// }
// func lcsrecurssive(str1,str2 string) int  {
// 	return lcsrecurssiveUtil(str1,str2,len(str1),len(str2))
// }
// func lcsrecurssiveUtil(str1,str2 string,m,n int) int {
// 	if m == 0 || n == 0 {
// 		return 0
// 	}
// 	if str1[m-1] == str2[n-1] {
// 		return 1 + lcsrecurssiveUtil(str1,str2,m-1,n-1)
// 	} else {
// 		return max(lcsrecurssiveUtil(str1,str2,m-1,n),lcsrecurssiveUtil(str1,str2,m,n-1))
// 	}
// }
// func max(a,b int) int {
// 	if a > b {
// 		return a
// 	}
// 	return b
// }