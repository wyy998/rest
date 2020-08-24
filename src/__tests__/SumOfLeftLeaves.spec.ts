import sumOfLeftLeaves, { TreeNode } from "../Leetcode/SumOfLeftLeaves";

test("SumOfLeftLeaves normal tree", () => {
  const root = new TreeNode(3);
  root.left = new TreeNode(9);
  root.right = new TreeNode(11);
  root.right.left = new TreeNode(15);
  root.right.right = new TreeNode(10);
  const res = sumOfLeftLeaves(root);
  expect(res).toBe(24);
});
