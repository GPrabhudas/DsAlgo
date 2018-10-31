using System;
using System.Collections.Generic;

namespace Trees
{
    public class Node
    {
        public int val;
        public Node left;
        public Node right;

        public Node(int v)
        {
            val = v;
            left = null;
            right = null;
        }
    }

    class Trees
    {
        public static void Main()
        {
            Node root = new Node(11);
            root.left = new Node(2);
            root.right = new Node(29);
            root.left.left = new Node(1);
            root.left.right = new Node(7);
            root.right.left = new Node(15);
            root.right.right = new Node(40);
            root.right.right.left = new Node(35);
            Inorder(root);
            System.Console.WriteLine();
            GreaterSum(root);
            Inorder(root);
            System.Console.WriteLine();
        }

        static void Inorder(Node root){
            if(root != null){
                Inorder(root.left);
                Console.Write(root.val + " ");
                Inorder(root.right);
            }
        }

        static void GreaterSum(Node root)
        {
            int sum = 0;
            Stack<Node> stack = new Stack<Node>();
            Node current = root;
            bool done = false;
            while(!done){
                if(current != null){
                    stack.Push(current);
                    current = current.right;
                }
                else
                {
                    if(stack.Count > 0)
                    {
                        current = stack.Pop();
                        sum = sum + current.val;
                        current.val = sum - current.val;
                        current = current.left;
                    }else{
                        done = true;
                    }
                }
            }
        }

    }
}