// stock span => maximum number of consecutive days just before the given day[i]
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

function stackSpan(arr)
{
	var stack = new Stack();
	var sp = new Array(arr.length);
	sp[0] = 1;
	stack.push(0);
	for(var i=1;i<arr.length;i++)
	{
		while(!stack.isEmpty() && arr[stack.top()] <= arr[i])
		{
			stack.pop();
		}
		sp[i] = stack.isEmpty() ? i+1 : i - stack.top();
		stack.push(i);
	}
	var ans = sp.join(' ');
	console.log(ans);
}
stackSpan([100,80,60,70,60,75,85]);