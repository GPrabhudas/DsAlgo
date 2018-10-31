using System;
using System.Collections.Generic;
namespace Arrays
{
    class SpiralOrder
    {
        public static void Main()
        {
            List<List<int>> mat = new List<List<int>>();
            mat.Add(new List<int>());
            mat.Add(new List<int>());
            mat.Add(new List<int>());
            mat.Add(new List<int>());
            int count = 1;
            for(int i=0;i<4;i++){
                for(int j=0;j<4;j++){
                    mat[i].Add(count++);
                }
            }
            PrintSpiralOrder(mat,4,4);
        }
        static void PrintSpiralOrder(List<List<int>> mat,int m, int n)
        {
            int i=0; // iterator
            int k = 0; // starting row index
            int l = 0; // starting column index
            // m - ending row index
            // n - ending column index
            String output = "";
            while(k < m && l < n)
            {
                // print the first row from remaining rows
                for(i=l;i<n;i++){
                   output+=mat[k][i]+" ";
                }
                k++;
                // print the last column from remaining columns
                for(i=k;i<m;i++){
                    output+=mat[i][n-1]+" ";
                }
                n--;
                // print the last row from remaining rows
                if(k<m){
                    for(i=n-1;i>=l;i--){
                        output+=mat[m-1][i] + " ";
                    }
                    m--;
                }

                // print the first column form remaining columns
                if(l<n){
                    for(i=m-1;i>=k;i--){
                        output+=mat[i][l] + " ";
                    }
                    l++;
                }
            }
            System.Console.WriteLine(output);

        }
    }
}