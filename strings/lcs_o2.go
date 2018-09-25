//uncomment to run the code
// package main

// import (
// 	"fmt"
// )
// func main() {
// 	len := lcsDP("ABCDGH","AEDFHR")
// 	fmt.Printf("Longest common subsquence :%v",len)
// }
// func lcsDP(str1,str2 string) int {
// 	return lcsDPUtil(str1,str2,len(str1),len(str2))
// }
// func lcsDPUtil(str1,str2 string,m,n int) int {
// 	lcs := make([][]int,m+1)
// 	for i:=0;i<=m;i++ {
// 		lcs[i] = make([]int,n+1)
// 	}
// 	for i:=0;i<=m;i++ {
// 		for j:=0;j<=n;j++ {
// 			if i == 0 || j == 0 {
// 				lcs[i][j] = 0
// 			} else {
// 				if str1[i-1] == str2[j-1] {
// 					lcs[i][j] = 1 + lcs[i-1][j-1]
// 				} else {
// 					lcs[i][j] = max(lcs[i-1][j],lcs[i][j-1])
// 				}
// 			}
// 		}
// 	}
// 	return lcs[m][n]
// }
// func max(a,b int) int {
// 	if a > b {
// 		return a
// 	}
// 	return b
// }