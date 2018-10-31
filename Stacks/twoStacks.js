// implement two stacks in a single array
function TwoStacks()
{
	this.arr = new Array(10);
	this.stacktop1 = -1;
	this.stacktop2 = this.arr.length;

    this.top1 = function()
    {
    	if(this.stacktop1 < 0)
    	{
    		console.log('stack empty');
    		return;
    	}
    	return this.arr[this.stacktop1];
    }

    this.top2 = function()
    {
    	if(this.stacktop2 >= this.arr.length)
    	{
    		console.log('stack empty');
    		return;
    	}
    	return this.arr[this.stacktop2];
    }

	this.pop1 = function()
	{
		if(this.stacktop1 < 0)
		{
			console.log('stack underflow');
			return;
		}
		return this.arr[this.stacktop1--];
	}

	this.pop2 = function()
	{
		if(this.stacktop2 >= this.arr.length)
		{
			console.log('stack underflow');
			return;
		}
		return this.arr[this.stacktop2++];
	}

	this.push1 = function(val)
	{
		if(this.stacktop1 + 1 == this.stacktop2)
		{
			console.log('stack overflow'+(this.stacktop1 + 1) +' '+this.stacktop2);
			return;
		}
		this.arr[++this.stacktop1] = val;
	}

	this.push2 = function(val)
	{
		if(this.stacktop1 + 1 == this.stacktop2)
		{
			console.log('stack overflow');
			return;
		}
		this.arr[--this.stacktop2] = val;
	}
}

var twoStacks = new TwoStacks();
twoStacks.push1(1);
twoStacks.push1(2);
twoStacks.push1(3);
twoStacks.push1(4);
twoStacks.push1(5);
twoStacks.push2(6);
twoStacks.push2(7);
twoStacks.push2(8);
twoStacks.push2(9);
twoStacks.push2(10);
console.log("top1 :"+twoStacks.top1());
console.log("top2 :"+twoStacks.top2());
twoStacks.pop2();
console.log("top1 :"+twoStacks.top1());
console.log("top2 :"+twoStacks.top2());
twoStacks.pop1();
console.log("top1 :"+twoStacks.top1());
console.log("top2 :"+twoStacks.top2());
