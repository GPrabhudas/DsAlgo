// find longest common prefix of a given set of strings
// using dive and conquer approach
// uncomment the code to run the program
package main

import (
	"fmt"
)

func main() {
	lcp := longestCommonPrefix([]string{"geeksforgeeks","geeks","geek","gee"})
	fmt.Printf("LCP :%v\n",lcp)
}

func longestCommonMerge(str1,str2 string) string  {
	count := 0
	n1 := len(str1)
	n2 := len(str2)
	for i:=0; i<n1 && i<n2 && str1[i] == str2[i]; i++ {
		count++
	}
	return str1[0:count]
}

func longestCommonPrefixUtil(arr []string,l,h int) string {
	if l == h {
		return arr[l]
	}
	if h > l {
		mid := l + (h-l) / 2
		str1 := longestCommonPrefixUtil(arr,l,mid)
		str2 := longestCommonPrefixUtil(arr,mid+1,h)
		return longestCommonMerge(str1,str2)
	}
	return ""
}

func longestCommonPrefix(arr []string) string {
	return longestCommonPrefixUtil(arr,0,len(arr)-1)
}