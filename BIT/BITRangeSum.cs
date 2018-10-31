using System;

namespace BIT
{
    class Solution
    {
        public static void Main()
        {
            int [] arr =  {2,1,1,3,2,3,4,5,6,7,8,9};
            int [] bit = new int[arr.Length + 1];
            for(int i=0;i<bit.Length;i++)
            {
                bit[i] = 0;
            }
            for(int i=0;i<arr.Length;i++)
            {
                update(arr[i],i,bit);
            }
            int l=4;
            int r=8;
            System.Console.WriteLine(getSum(r,bit) - getSum(l-1,bit));
        }
        private static void update(int value,int index,int []bit)
        {
            index += 1;
            while(index < bit.Length)
            {
                bit[index]+=value;
                index = index + (index & -index);
            }
        }
        private static int getSum(int index,int [] bit)
        {
            index+=1;
            int sum = 0;
            while(index > 0)
            {
                sum += bit[index];
                index = index - (index & -index);
            }
            return sum;
        }
    }
}