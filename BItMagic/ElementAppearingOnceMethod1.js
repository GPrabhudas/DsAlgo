// find element which is appearing once, all elements appears thrice except one element find that element

function findElementAppearingOnce(arr)
{
	var result = 0;
	var x = 0;
	var sum = 0;

	for(var i=0;i<32;i++)
	{
		x = (1 << i);
		sum = 0;
		for(var j=0;j<arr.length;j++)
		{
			if(arr[j] & x)
			{
				sum++;
			}
		}
		if((sum % 3))
		{
			result = result | x;
		}
	}
	return result;
}
console.log("Element appearing once :"+ findElementAppearingOnce([12, 1, 12, 3, 12, 1, 1, 2, 3, 2, 2, 3, 7,7,7,100]));