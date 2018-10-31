Array.prototype.selectionSort = function()
{
	var i,j,min;
	for(i=0;i<this.length-1;i++)
	{
		min = i;
		for(j=i+1;j<this.length;j++)
		{
			if(this[j] < this[min])
			{
				min = j;
			}
		}

		if(this[i] != this[min])
		{
			var temp = this[i];
			this[i] = this[min];
			this[min] = temp;
		}
	}
}

Array.prototype.print = function()
{
	var ans = '';
	for(var i=0;i<this.length;i++)
	{
		ans+=this[i] + ' ';
	}
	console.log(ans);
}

var arr = [4,2,6,1,9,8,11,10];
arr.print();
arr.selectionSort();
arr.print();
