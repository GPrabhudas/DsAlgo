Array.prototype.insertionSort = function()
{
	var i,j,key;
	for(i=1;i<this.length;i++)
	{
		key = this[i];
		j = i-1;
		while(j>=0 && this[j] > key)
		{
			this[j+1] = this[j];
			j--;
		}
		this[j+1] = key;
	}
}

Array.prototype.print = function()
{
	var ans = '';
	for(var i=0;i<this.length;i++)
	{
		ans+=this[i] + " ";
	}
	console.log(ans);
}
var arr = [4,2,6,1,9,8,11,10];
arr.print();
arr.insertionSort();
arr.print();