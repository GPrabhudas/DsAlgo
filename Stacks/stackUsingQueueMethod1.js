// implement stack using Queue by making push operation costly

function Stack()
{
	this.queue1 = [];
	this.queue2 = [];

	this.push = function(val)
	{
		while(this.queue1.length)
		{
			this.queue2.push(this.queue1.shift());
		}
		this.queue1.push(val);
		while(this.queue2.length)
		{
			this.queue1.push(this.queue2.shift());
		}
	}
	
	this.pop = function()
	{
		if(this.queue1.length)
		{
			return this.queue1.shift();
		}
		return Number.POSITIVE_INFINITY;
	}
}
var stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
console.log(stack.pop());
stack.push(6);
console.log(stack.pop());