function Node(val)
{
	this.val = val;
	this.next = null;
}

function detectLoop(head)
{
	var slow = fast = head;
	while(slow && fast && fast.next)
	{
		slow = slow.next;
		fast = fast.next.next;
		if(slow == fast)
		{
			return slow;
		}
	}
	return null;
}

function removeLoopCheckOneByOne(head,loopNode)
{
	var temp = head;
	var ptr;
	while(temp)
	{
		ptr = loopNode;
		do
		{
			if(ptr == temp)
			{

			}
		}while(ptr != loopNode);
		temp = temp.next;
	}
}