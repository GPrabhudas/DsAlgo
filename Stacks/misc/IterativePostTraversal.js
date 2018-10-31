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

function postorderTraversal(root)
{
	if(root)
	{
		var stack = new Stack();
		var tempStack = new Stack();
		tempStack.push(root);
		var ans = '';
		while(!tempStack.isEmpty())
		{
			var top = tempStack.pop();
			stack.push(top);
			if(top.left)
			{
				tempStack.push(top.left);
			}
			if(top.left)
			{
				tempStack.push(top.right);
			}
		}
		while(!stack.isEmpty())
		{
			ans+=stack.pop().val + " ";
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
postorderTraversal(root);