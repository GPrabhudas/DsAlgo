// create a stack using queue by making pop operation costly
function Stack()
{
	this.queue1 = [];
	this.queue2 = [];

	this.push = function(val)
	{
		this.queue1.push(val);
	}

	this.pop = function()
	{
		if(this.queue1.length)
		{
			while(this.queue1.length > 1)
			{
				this.queue2.push(this.queue1.shift());
			}
			var res = this.queue1.shift();
			// swap names
			var temp = this.queue1;
			this.queue1 = this.queue2;
			this.queue2 = temp;
			return res;
		}
		return Number.POSITIVE_INFINITY;
	}
}
var stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
console.log(stack.pop());
stack.push(5);
console.log(stack.pop());