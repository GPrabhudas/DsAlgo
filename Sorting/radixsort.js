function RadixSort(a)
{
	var arr = a;
	var coutingSort = function(exp){
		var count = new Array(10);
		var output = new Array(arr.length);
		var i,j;
		
		for(i=0;i<10;i++){
			count[i] = 0;
		}
		for(i=0;i<arr.length;i++){
			count[(Math.floor(arr[i]/exp))%10]++;
		}
		
		for(i=1;i<10;i++){
			count[i] += count[i-1];
		
		}
		
		for(i=arr.length-1;i>=0;i--)
		{
			output[count[(Math.floor(arr[i]/exp))%10]-1] = arr[i];
			count[(Math.floor(arr[i]/exp))%10]--;
		}
		for(i=0;i<arr.length;i++)
		{
			arr[i] = output[i];
		}
	}

	this.sort = function(){
		var max = arr.getMaximum();
		var exp = 1;
		while(max)
		{
			coutingSort(exp);
			exp*=10;
			max = Math.floor(max/10);
		}
		return arr;
	}
}
Array.prototype.getMaximum = function()
{
	var max = Number.MIN_VALUE;
	for(var i=0;i<this.length;i++){
		if(max < this[i]){
			max = this[i];
		}
	}
	return max;
}

Array.prototype.print = function()
{
	console.log(this);
}

var arr = [170, 45, 75, 90, 802, 24, 2, 66];
arr.print();
arr = new RadixSort(arr).sort();
arr.print();