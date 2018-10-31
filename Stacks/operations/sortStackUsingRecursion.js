// sort a stack using recursion
function Stack()
{
	this.arr = [];

	this.isEmpty = function(){
		return this.arr.length == 0;
	}

    this.sortedInsert = function(item){
		if(this.isEmpty() || item < this.top()){
			this.push(item);
		}
		else{
			var temp = this.pop();
			this.sortedInsert(item);
			this.push(temp);
		}
	}

	this.push = function(val){
		this.arr.push(val);
	}

	this.pop = function(){
		if(this.isEmpty()){
			console.log("Stack is Empty");
			return;
		}
		return this.arr.pop();
	}

	this.top = function(){
		if(this.isEmpty()){
			console.log("Stack is Empty");
			return;
		}
		return this.arr[this.arr.length - 1];
	}

	this.sort = function(){
		if(!this.isEmpty())
		{
			var item = this.pop();
			this.sort();
			this.sortedInsert(item);
		}
	}
}

var stack = new Stack();
stack.push(-3);
stack.push(14);
stack.push(18);
stack.push(-5);
stack.push(30);

console.log("top :"+stack.top());
stack.sort();
console.log("top :"+stack.top());