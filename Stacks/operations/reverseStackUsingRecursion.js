function Stack(){
	this.arr = [];
	this.push = function(val){
		this.arr.push(val);
	}
	
	this.isEmpty = function()
	{
		return this.arr.length == 0;
	}

	this.pop = function()
	{
		if(this.isEmpty())
		{
			console.log("Stack empty");
			return;
		}
		return this.arr.pop();
	}

	this.top = function()
	{
		if(this.isEmpty())
		{
			console.log("Stack empty");
			return;
		}
		return this.arr[this.arr.length-1];
	}

	this.reverse = function()
	{
		if(!this.isEmpty())
		{
			var item = this.arr.pop();
			this.reverse(this.arr);
			this.insertAtBottom(item)
		}
	}

	this.insertAtBottom = function(item)
	{
		if(this.isEmpty())
		{
			this.push(item);
		}
		else
		{
			var temp = this.pop();
			this.insertAtBottom(item);
			this.push(temp);
		}
	}
}

var stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
console.log("top :"+stack.top());
stack.reverse();
console.log("top :"+stack.top());
stack.reverse();
console.log("top :"+stack.top());