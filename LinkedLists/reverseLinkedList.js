function Node(val)
{
	this.val = val;
	this.next = null;
}

function reverse(head)
{
	var prev = null;
	var current = head;
	var next = head;
	while(next)
	{
		next = current.next;
		current.next = prev;
		prev = current;
		current = next;
	}
	return prev;
}

function reverseRecursive(head)
{
	return reverseRecursiveUtil(head,null,head);
}

function reverseRecursiveUtil(current,prev,next)
{
	if(next != null)
	{
		next = current.next;
		current.next = prev;
		prev = current;
		current = next;
		return reverseRecursiveUtil(current,prev,next);
	}
	return prev;
}

function print(temp)
{
	var output = '';
	while(temp)
	{
		output+=temp.val+' ';
		temp = temp.next;
	}
	console.log(output);
}

var head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);

console.log("Original List");
print(head);
head = reverse(head);
console.log("Reversed List");
print(head);
head = reverseRecursive(head);
console.log("Recursive reverse");
print(head);