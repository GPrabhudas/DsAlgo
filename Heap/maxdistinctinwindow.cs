using System.Collections.Generic;

namespace Heap
{
    public class Solution
    {
        public static void Main()
        {
            int [] arr = new int [6] {1,2,1,3,4,3};
            List<int> res = new Solution().GetDistinct(arr,7);
            for(int i=0;i<res.Count;i++)
            {
                System.Console.Write(res[i]+" ");
            }
            System.Console.WriteLine();
        }
        public List<int> GetDistinct(int [] arr, int k)
        {
            List<int> res = new List<int>();
            if(k > 0 && k <= arr.Length)
            {
                int count = 0;
                Dictionary<int,int> map = new Dictionary<int,int>();
                int i=0;
                for(;i<k;i++)
                {
                    if(!map.ContainsKey(arr[i]))
                    {
                        count++;
                        map.Add(arr[i],1);
                    }
                    else
                    {
                        map[arr[i]]++;
                    }
                }
                for(;i<arr.Length;i++)
                {
                    res.Add(count);
                    int prev = arr[i - k];
                    map[prev]--;
                    if(map[prev] == 0)
                    {
                        count--;
                    }
                    if(!map.ContainsKey(arr[i]))
                    {
                        count++;
                        map.Add(arr[i],1);
                    }
                    else if(map[arr[i]] == 0)
                    {
                        map[arr[i]]++;
                        count++;
                    }
                    else
                    {
                        map[arr[i]]++;
                    }
                }
                res.Add(count);
            }
            return res;
        }
    }
}