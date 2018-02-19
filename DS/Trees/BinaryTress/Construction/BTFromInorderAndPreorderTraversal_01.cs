using System;

namespace Trees
{
    class Node
    {
        public int val;
        public Node left;
        public Node right;

        public Node(int val)
        {
            this.val = val;
            left = null;
            right = null;
        }

        class BinaryTree
        {
            int findIndex(int val,int [] arr,int start,int end)
            {
                for(int i=start;i<=end;i++)
                {
                    if(arr[i] == val)
                    {
                        return i;
                    }
                }
                return -1;
            }

            Node ConstructTree(int [] preorder,int [] inorder,int preStart,int preEnd,int inStart,int inEnd)
            {
                if(inStart > inEnd)
                {
                    return null;
                }
                 Node root = new Node(preorder[preStart]);
                if(inStart == inEnd)
                {
                    return root;
                }
               
                int inIndex = findIndex(root.val,inorder,inStart,inEnd);
                root.left = ConstructTree(preorder,inorder,preStart+1,inIndex,inStart,inIndex-1);
                root.right = ConstructTree(preorder,inorder,inIndex+1,preEnd,inIndex+1,inEnd);
                return root;
            }

            void inorderTraversal(Node root)
            {
                if(root == null)
                    return;
                inorderTraversal(root.left);
                System.Console.Write(root.val +" ");
                inorderTraversal(root.right);
            }

            void preorderTraversal(Node root)
            {
                if(root == null)
                    return;
                System.Console.Write(root.val + " ");
                preorderTraversal(root.left);
                preorderTraversal(root.right);
            }
            public static void Main()
            {
                int [] preorder = new int [] {10,9,5,4,6,7};
                int [] inorder = new int [] {9,10,4,5,6,7};
                BinaryTree bt = new BinaryTree();
                Node root = bt.ConstructTree(preorder,inorder,0,preorder.Length-1,0,inorder.Length-1);
                System.Console.Write("Inorder traversal :");
                bt.inorderTraversal(root);
                System.Console.Write("\nPreorder traversal :");
                bt.preorderTraversal(root);
            }
        }
    }    
}