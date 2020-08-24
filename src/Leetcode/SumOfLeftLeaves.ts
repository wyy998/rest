/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */
export class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

const isTreeLeave = (node: TreeNode | null) => {
  if (!node) return false;
  if (node.left || node.right) return false;
  return true;
};

function sumOfLeftLeaves(root: TreeNode | null): number {
  if (!root) return 0;
  let res = 0;
  if (root.left) {
    if (isTreeLeave(root.left)) {
      res += root.left.val;
    } else {
      res += sumOfLeftLeaves(root.left);
    }
  }
  if (root.right) {
    res += sumOfLeftLeaves(root.right);
  }
  return res;
}

export default sumOfLeftLeaves;

/**
 * 🎉Acceped!
 */
