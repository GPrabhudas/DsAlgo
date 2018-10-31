function Stack()
{
	var arr = [];
	this.isEmpty = function()
	{
		return arr.length == 0;
	}
	
	this.top = function(){
		if(this.isEmpty())
		{
			console.log("stack is empty");
			return;
		}
		return arr[arr.length-1];
	}
	this.pop = function()
	{
		if(this.isEmpty())
		{
			console.log("stack is empty");
			return;
		}
		return arr.pop();
	}
	this.push = function(val)
	{
		arr.push(val);
	}
}

function largestAreaInHistogram(arr)
{
	var i = max_area = temp_area = 0;
	var top = 0;
	var stack = new Stack();
	while(i < arr.length)
	{
		if(stack.isEmpty() || arr[stack.top()] <= arr[i])
		{
			stack.push(i++);
		}
		else
		{
			top = stack.pop();
			temp_area = arr[top] * (stack.isEmpty() ? i : i-stack.top()-1);
			if(temp_area > max_area)
			{
				max_area = temp_area;
			}
		}
	}

	console.log('i='+i);
	while(!stack.isEmpty())
	{
		top = stack.pop();
		temp_area = arr[top] * (stack.isEmpty() ? i : i-stack.top() -1);
		if(temp_area > max_area)
		{
			max_area = temp_area;
		}
	}
	return max_area;
}

var ans = largestAreaInHistogram([6,2,5,4,5,1,6]);
console.log(ans);