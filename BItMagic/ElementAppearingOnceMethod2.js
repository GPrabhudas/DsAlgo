// find element which is appearing once, all elements appears thrice except one element find that element

function HashMap(key)
{
	var arr = [];
	this.addKey = function(key)
	{
		arr[key] = true;
	}

	this.hasKey = function(key)
	{
		return arr[key];
	}
}

function findElementAppearingOnce(arr)
{
	var thricesum = 0, sum = 0;
	var hashMap = new HashMap();

	for(var i=0;i<arr.length;i++)
	{
		if(!hashMap.hasKey(arr[i]))
		{
			thricesum += arr[i];
			hashMap.addKey(arr[i]);
		}
		sum+=arr[i];
	}
	return (3*thricesum - sum) >> 1;
}

console.log("Element appearing once :"+ findElementAppearingOnce([12, 1, 12, 3, 12, 1, 1, 2, 3, 2, 2, 3, 7]));