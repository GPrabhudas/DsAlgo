function Node(val)
{
	this.val = val;
	this.left = null;
	this.right = null;
}

function Stack()
{
	var arr = [];
	this.push = function(val)
	{
		arr.push(val);
	}

	this.pop = function()
	{
		if(this.isEmpty())
		{
			console.log("stack empty");
			return;
		}
		return arr.pop();
	}

	this.isEmpty = function()
	{
		return arr.length == 0;
	}
}

function preorderTraversal(root)
{
	if(root)
	{
		var stack = new Stack();
		stack.push(root);
		var ans = '';
		while(!stack.isEmpty())
		{
			var top = stack.pop();
			ans += top.val +" ";
			if(top.right)
			{
				stack.push(top.right);
			}
			if(top.left)
			{
				stack.push(top.left);
			}
		}
		console.log(ans);
	}
}

var root = new Node(1);
root.left = new Node(2);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right = new Node(3);
root.right.left = new Node(6);
root.right.right = new Node(7);
preorderTraversal(root);