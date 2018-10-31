function Node(val)
{
	this.val = val;
	this.next = null;
}

function detectLoop(head)
{
	var loopFound = false;
	var slow = head,fast = head;
	while(slow && fast && fast.next)
	{
		slow = slow.next;
		fast = fast.next.next;
		if(slow === fast)
		{
			loopFound = true;
			break;
		}
	}
	return loopFound;
}

var head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = head;

console.log("Loop present :"+detectLoop(head));