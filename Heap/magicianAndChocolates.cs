namespace Heap
{
    public class Solution
    {
        public static void Main()
        {
            int [] arr = new int[4] {5,6,8,10};
            System.Console.WriteLine("ans :"+ new Solution().MaxChocolates(3,4,arr));
        }

        private void heapify(int i,int [] heap)
        {
            int length = heap.Length;
            int largest = i;
            int left = 2*i + 1;
            int right = 2*i + 2;

            if(left < length && heap[left] >= heap[largest]){
                largest = left;
            }
            if(right < length && heap[right] >= heap[largest]){
                largest = right;
            }
            if(largest != i)
            {
                int temp = heap[i];
                heap[i] = heap[largest];
                heap[largest] = temp;
                heapify(largest,heap);
            }
        }
        public int MaxChocolates(int k,int n, int [] arr)
        {
            int ans = 0;
            if(arr.Length > 0)
            {
                int i = arr.Length/2 - 1;
                for(;i>=0;i--)
                {
                    heapify(i,arr);
                }
                for(int j=0;j<k;j++)
                {
                    ans += arr[0];
                    System.Console.WriteLine(arr[0]);
                    arr[0] = arr[0]/2;
                    heapify(0,arr);
                }
            }
            return ans;
        }
    }    
}