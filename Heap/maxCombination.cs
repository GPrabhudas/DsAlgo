using System.Collections.Generic;

namespace Heap
{
    public class sol
    {
     static void Main()
     {
        List<int> res = new Solution().solve(
            new List<int>(){36, 27, -35, 43, -15, 36, 42, -1, -29, 12, -23, 40, 9, 13, -24, -10, -24, 22, -14, -39, 18, 17, -21, 32, -20, 12, -27, 17, -15, -21, -48, -28, 8, 19, 17, 43, 6, -39, -8, -21, 23, -29, -31, 34, -13, 48, -26, -35, 20, -37, -24, 41, 30, 6, 23, 12, 20, 46, 31, -45, -25, 34, -23, -14, -45, -4, -21, -37, 7, -26, 45, 32, -5, -36, 17, -16, 14, -7, 0, 37, -42, 26, 28 },
            new List<int>(){38, 34, -47, 1, 4, 49, -18, 10, 26, 18, -11, -38, -24, 36, 44, -11, 45, 20, -16, 28, 17, -49, 47, -48, -33, 42, 2, 6, -49, 30, 36, -9, 15, 39, -6, -31, -10, -21, -19, -33, 47, 21, 31, 25, -41, -23, 17, 6, 47, 3, 36, 15, -44, 33, -31, -26, -22, 21, -18, -21, -47, -31, 20, 18, -42, -35, -10, -1, 46, -27, -32, -5, -4, 1, -29, 5, 29, 38, 14, -22, -9, 0, 43}
        );
     }  
    }
        public class heapnode
    {
        public int i;
        public int j;
        public int sum;
        public heapnode(int _i,int _j,int _sum)
        {
            i = _i;
            j = _j;
            sum = _sum;
        }
    }


    class Solution
    {
        private Dictionary<string, bool> dict;
        private heapnode[] heap;
        int heapcount;

        public Solution()
        {
            dict = new Dictionary<string,bool>();
            heapcount = 0;
        }

        private void heapify(int i, heapnode[] heap)
        {
            int left = 2 * i + 1;
            int right = 2 * i + 2;
            int largest = i;

            if (left < heap.Length && heap[left] != null && heap[left].sum > heap[largest].sum)
            {
                largest = left;
            }

            if (right < heap.Length && heap[right] != null && heap[right].sum > heap[largest].sum)
            {
                largest = right;
            }
            if (largest != i)
            {
                heapnode temp = heap[largest];
                heap[largest] = heap[i];
                heap[i] = temp;
                heapify(largest, heap);
            }
        }

        private void insert(heapnode node, heapnode[] heap)
        {
            heap[heapcount++] = node;
            for (int i = heapcount / 2; i >= 0; i--)
            {
                heapify(i, heap);
            }
        }
        private heapnode getMax(heapnode[] heap)
        {
            heapnode node = heap[0];
            heap[0] = heap[heapcount - 1];
            heapcount--;
            heapify(0, heap);
            return node;
        }

        public List<int> solve(List<int> A, List<int> B)
        {
            List<int> res = new List<int>();
            if (A == null && B == null)
            {
                return res;
            }
            if (A.Count < 0)
            {
                return res;
            }
            A.Sort((a, b) => -1 * a.CompareTo(b));
            B.Sort((a, b) => -1 * a.CompareTo(b));
            int length = A.Count;
            heap = new heapnode[length];
            heapnode node;
            int i, j;
            i = 0;
            j = 0;
            node = new heapnode(i, j, A[i] + B[j]);
            insert(node, heap);
            string key = string.Format("{0}{1}", i, j);
            dict.Add(key, true);
            int sum = 0;
            for (int k = 0; k < length; k++)
            {
                heapnode curr = getMax(heap);
                res.Add(curr.sum);
                i = curr.i;
                j = curr.j;
                
                key = string.Format("{0}{1}", i + 1, j);

                if((i+1) < length && !dict.ContainsKey(key))
                {
                    sum = A[i + 1] + B[j];
                    insert(new heapnode(i + 1, j, sum), heap);
                    dict.Add(key, true);
                }
                key = string.Format("{0}{1}", i, j + 1);
                if((j+1) < length && !dict.ContainsKey(key))
                {
                    sum = A[i] + B[j + 1];
                    insert(new heapnode(i, j + 1, sum), heap);
                    dict.Add(key, true);
                }
                
            }
            return res;
        }
}
}