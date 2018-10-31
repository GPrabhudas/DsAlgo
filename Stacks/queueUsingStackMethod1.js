// implement queue using stack by making enqueue operation costly
function Queue()
{
	this.stack1 = [];
	this.stack2 = [];

	this.enqueue = function(val)
	{
		while(this.stack1.length)
		{
			this.stack2.push(this.stack1.pop());
		}
		this.stack1.push(val);
		while(this.stack2.length)
		{
			this.stack1.push(this.stack2.pop());
		}
	}

	this.dequeue = function()
	{
		return this.stack1.pop();
	}
}

var queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);
queue.enqueue(6);

console.log(queue.dequeue());
queue.enqueue(7);
console.log(queue.dequeue());