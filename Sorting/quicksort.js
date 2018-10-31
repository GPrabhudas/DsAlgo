function QuickSort()
{
	var arr = [];
	var swap = function(x,y)
	{
		var temp = arr[y];
		arr[y] = arr[x];
		arr[x] = temp;
	}
	var partition = function(l,h)
	{
		var key = h;
		var i = l-1;
		for(var j=l;j<h;j++)
		{
			if(arr[j] <= arr[key])
			{
				i++;
				swap(i,j);
			}
		}
		swap(i+1,key);
		return i+1;
	}

	var sortUtil = function(l,h)
	{
		if(l<h)
		{
			var pivot = partition(l,h);
			sortUtil(l,pivot-1);
			sortUtil(pivot+1,h);
		}
	}

	this.sort = function(a)
	{
		arr = a;
		sortUtil(0,arr.length-1);
		return arr;
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

var arr = [4,3,6,1,7,0,19];
arr.print();
arr = new QuickSort().sort(arr);
arr.print();