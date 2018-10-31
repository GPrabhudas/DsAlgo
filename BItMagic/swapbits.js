/*
Given a number x and two positions (from right side) in binary representation of x,
write a function that swaps n bits at given two positions and returns the result.
It is also given that the two sets of bits do not overlap.
*/

function swapBits(num,pos1,pos2,k){
	var set1 = (num >> pos1) & ((1 << k) - 1);
	var set2 = (num >> pos2) & ((1 << k) - 1);
	var xor = set1 ^ set2;
	xor = (xor << pos1) | (xor << pos2);
	return num ^ xor;
}
console.log("number after swapping of bits : "+swapBits(28,0,3,2));
console.log("number after swapping of bits : "+swapBits(47,1,5,3));