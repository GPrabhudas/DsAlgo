function Node(val)
{
	this.val = val;
	this.next = null;
}

var head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next =  new Node(4);
head.next.next.next.next = new Node(5);

var temp = head;
var output = '';
while(temp)
{
	output+=temp.val +' ';
	temp = temp.next;
}
console.log(output.trim());