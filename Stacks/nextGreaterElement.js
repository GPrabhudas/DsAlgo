// Next greater element(NGE) for every element
function Stack()
{
	this.arr = [];
	this.push = function(val)
	{
		this.arr.push(val);
	}
	this.pop = function()
	{
		if(!this.arr.length)
		{
			console.log("stack empty");
			return;
		}
		return this.arr.pop();
	}

	this.top = function()
	{
		if(!this.arr.length)
		{
			console.log("stack empty");
			return;
		}
		return this.arr[this.arr.length-1];
	}
	this.isEmpty = function()
	{
		return this.arr.length == 0;
	}
}
function nextGreaterElement(arr)
{
	var nge = new Array(arr.length);
	var stack = new Stack();
	stack.push(0);
	for(var i=1;i<arr.length;i++)
	{
		while(!stack.isEmpty() && arr[i] > arr[stack.top()])
		{
			var t = stack.pop();
			nge[t] = arr[i];
		}
		stack.push(i);
	}
	while(!stack.isEmpty())
	{
		nge[stack.pop()] = -1;
	}
	var ans = nge.join(' ');
	console.log(ans);
}
nextGreaterElement([4,5,2,25]);