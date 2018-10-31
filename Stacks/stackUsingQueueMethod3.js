// create stack using single queue
function Stack()
{
	this.queue = [];
	
	this.push = function(val)
	{
		var size = this.queue.length;
		this.queue.push(val);
		while(size)
		{
			this.queue.push(this.queue.shift());
			size--;
		}
	}

	this.pop = function()
	{
		if(!this.queue.length)
		{
			console.log("stack underflow");
			return;
		}
		return this.queue.shift();
	}
}
var stack =  new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
console.log("popped :"+stack.pop());