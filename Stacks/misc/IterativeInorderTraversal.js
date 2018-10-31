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

function inorderTraversal(root)
{
	if(root)
	{
		var stack = new Stack();
		var current = root;
		var ans = '';
		var done = false;
		while(!done)
		{
			if(current)
			{
				while(current)
				{
					stack.push(current);
					current = current.left;
				}
			}
			else
			{
				if(!stack.isEmpty())
				{
					current = stack.pop();
					ans +=current.val+" ";
					current = current.right;
				}
				else
				{
					done = true;
				}
			}
		}
		console.log("inorder :"+ans);
	}
}
var root = new Node(1);
root.left = new Node(2);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right = new Node(3);
root.right.left = new Node(6);
inorderTraversal(root);