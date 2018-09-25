package main

//uncomment to run the code
// import (
// 	"fmt"
// )
// func main() {
// 	str := []byte{1,2,3,4}
// 	n := len(str)
// 	totalPermutations := factorial(n)
// 	arr := make([][]byte,totalPermutations)
// 	for i:=0;i<totalPermutations;i++ {
// 		arr[i] = make([]byte,n)
// 	}
// 	count :=0
// 	permutations(str,0,len(str)-1,arr,&count)
// 	fmt.Println("------------------------")
// 	for i,_ := range arr {
// 		fmt.Println((arr[i]))
// 	}
// 	fmt.Printf("Count : %v\n",count)
// }

func factorial(n int) int{
	if n <= 1 { 
		return 1
	}
	return n * factorial(n-1)
}
func permutations(str []byte,l,r int,arr [][]byte,count *int){
	if l == r {
		copy(arr[*count],str)
		*count++
	} else {
		for i:=l;i<=r;i++ {
			swap(str,l,i)
			permutations(str,l+1,r,arr,count)
			swap(str,l,i)
		}
	}
}
func swap(str []byte,l,r int) {
	temp := str[l]
	str[l] = str[r]
	str[r] = temp
}
