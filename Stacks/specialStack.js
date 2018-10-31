// design stack which supports pop,push,top,isEmpty,minimum operations in stack
function Stack()
{
	this.stack = [];
	this.minStack = [];
	this.infinity = Number.POSITIVE_INFINITY;

	this.top = function()
	{
		if(this.stack.length)
		{
			return this.stack[this.stack.length-1];
		}
		return this.infinity;
	}
	
	this.push = function(val)
	{
		this.stack.push(val);
		if(this.minStack.length)
		{
			var minTop = this.minStack[this.minStack.length-1];
			if(minTop < val)
			{
				this.minStack.push(minTop);
			}
			else
			{
				this.minStack.push(val);
			}
		}
		else
		{
			this.minStack.push(val);
		}
	}

	this.pop = function()
	{
		this.minStack.pop();
		return this.stack.pop();
	}

	this.minimum = function()
	{
		return this.minStack.length ? this.minStack[this.minStack.length-1] : this.infinity;
	}
}

var stack = new Stack();
stack.push(10);
console.log("top :"+stack.top() +" min :"+stack.minimum());
stack.push(1);
stack.push(9);
console.log("top :"+stack.top() +" min :"+stack.minimum());
stack.push(-1);
console.log("top :"+stack.top() +" min :"+stack.minimum());
stack.pop();
console.log("top :"+stack.top() +" min :"+stack.minimum());