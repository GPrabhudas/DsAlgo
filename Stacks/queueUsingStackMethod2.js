// implement queue using stack my makung dequeue operation costly
function Queue()
{
	this.stack1 = [];
	this.stack2 = [];
	this.enqueue = function(val)
	{
		this.stack1.push(val);
	}
	this.dequeue = function()
	{
		if(!this.stack2.length) //stack2 is empty
		{
			while(this.stack1.length) // push everything from stack1 to stack2
			{
				this.stack2.push(this.stack1.pop());
			}
		}
		return this.stack2.pop();
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