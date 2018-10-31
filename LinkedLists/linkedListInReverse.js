function Node(val)
{
	this.val = val;
	this.next = null;
}

var output = '';

function printReverse(head)
{
	if(head)
	{
		printReverse(head.next);
		output+=head.val+' ';
	}
}

var head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);

printReverse(head);
console.log(output.trim());