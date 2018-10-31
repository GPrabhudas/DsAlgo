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

	this.top = function()
	{
		if(!this.isEmpty())
		{
			console.log("stack empty");
			return;
		}
		return arr[arr.length-1];
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
		var ans = '';
		var stack = new Stack();
		do
		{
			while(root)
			{
				if(root.right)
				{
					stack.push(root.right);
				}
				stack.push(root);
				root = root.left;
			}

			root = stack.pop();
			if(root.right && root.right == stack.top())
			{
				stack.pop();
				stack.push(root);
				root = root.right;
			}
			else
			{
				ans+=root.val+" ";
				root = null;
			}

		}while(!stack.isEmpty());
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