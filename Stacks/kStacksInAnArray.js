// implement k stacks in a single array
function KStacks(maxSize,numberOfStacks)
{
	if(!maxSize && !numberOfStacks)
	{
		console.log("Invalid Input, provide maxSize and numberOfStacks");
		return;
	}

	this.stack = new Array(maxSize);
	this.top = new Array(numberOfStacks);
	this.next = new Array(maxSize);
	this.free = 0;

	this.init = function()
	{
		for(var i=0;i< this.top.length;i++)
		{
			this.top[i]=-1;
		}

		for(var i=0;i<this.next.length;i++)
		{
			this.next[i] = i+1;
		}
		this.next[this.next.length-1] = -1;
	}
	this.init();
	this.isFull = function()
	{
		return (this.free == -1);
	}

	this.push = function(stack,val)
	{
		if(stack >= this.top.length)
		{
			console.log("Invalid access");
			return;
		}

		if(this.isFull())
		{
			console.log("stack overflow :"+this.free);
			return;
		}

		var i = this.free;
		this.free = this.next[i];
		this.next[i] = this.top[stack];
		this.top[stack] = i;
		this.stack[i] = val;
	}

	this.pop = function(stack)
	{
		if(stack >= this.top.length)
		{
			console.log("Invalid access");
			return;
		}
		var i = this.top[stack];
		if(i<0)
		{
			console.log("stack underflow");
			return;
		}
		this.top[stack] = this.next[i];
		this.next[i] = this.free;
		this.free = i;
		return this.stack[i];
	}
}
var kStacks = new KStacks(10,3);

kStacks.push(2,15);
kStacks.push(2,45);

kStacks.push(1,17);
kStacks.push(1,49);
kStacks.push(1,39);
kStacks.push(1,39)

kStacks.push(0,9);
kStacks.push(0,7);
kStacks.push(0,5);
kStacks.push(0,6);

console.log("popped item, stack:2=>"+kStacks.pop(2));
console.log("popped item, stack:1=>"+kStacks.pop(1));
console.log("popped item, stack:0=>"+kStacks.pop(0));