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
    }

    class BinaryTree
    {
        int findIndex(int val,int [] inorder,int inStart,int inEnd)
        {
            for(int i=inStart;i<=inEnd;i++)
            {
                if(inorder[i] == val)
                {
                    return i;
                }
            }
            return -1;
        }

        Node ConstructTree(int [] inorder, int [] postorder,int inStart,int inEnd,int postStart,int postEnd)
        {
            if(inStart > inEnd)
            {
                return null;
            }

            Node root = new Node(postorder[postEnd]);
            if(inStart == inEnd)
            {
                return root;
            }

            int inIndex = findIndex(root.val,inorder,inStart,inEnd);
            root.left = ConstructTree(inorder,postorder,inStart,inIndex-1,postStart,inIndex-1);
            root.right = ConstructTree(inorder,postorder,inIndex+1,inEnd,inIndex,postEnd-1);
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

            void postorderTraversal(Node root)
            {
                if(root == null)
                    return;
                postorderTraversal(root.left);
                postorderTraversal(root.right);
                System.Console.Write(root.val + " ");
            }

            public static void Main()
            {
                int [] postorder = new int [] {8,6,9,7,11,4,10};
                int [] inorder = new int [] {8,9,6,10,7,4,11};
                BinaryTree bt = new BinaryTree();
                Node root = bt.ConstructTree(inorder,postorder,0,inorder.Length-1,0,postorder.Length-1);
                System.Console.Write("Inorder traversal :");
                bt.inorderTraversal(root);
                System.Console.Write("\nPreorder traversal :");
                bt.preorderTraversal(root);
                System.Console.Write("\nPostorder traversal :");
                bt.postorderTraversal(root);
            }
    }
}