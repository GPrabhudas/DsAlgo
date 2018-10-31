function MergeSort(arr){
	var arr = [];
	var merge = function(l,m,r)
	{
		var n1,n2;
		n1 = m-l+1;
		n2 = r-m;
		var left = new Array(n1);
		var right = new Array(n2);

		for(var i=0;i<n1;i++)
		{
			left[i] = arr[l+i];
		}
		for(var j=0;j<n2;j++)
		{
			right[j] = arr[m+1+j];
		}
		var k;
		i=0;
		j=0;
		k=l;
		while(i<n1 && j<n2)
		{
			if(left[i] <= right[j])
			{
				arr[k] = left[i];
				i++;
			}
			else
			{
				arr[k] = right[j];
				j++;
			}
			k++;
		}
		while(i<n1)
		{
			arr[k++] = left[i++];
		}
		while(j<n2)
		{
			arr[k++] = right[j++];
		}
	}
	var sortUtil = function(l,r)
	{
		if(l<r)
		{
			console.log(l +" "+r);
			var m = (r+l)>>1;
			sortUtil(l,m);
			sortUtil(m+1,r);
			merge(l,m,r);
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
arr = new MergeSort().sort(arr);
arr.print();