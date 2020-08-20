/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

/**
 Do not return anything, modify head in-place instead.
 */
function reverseList(head: ListNode | null): ListNode | null {
  let pre = null;
  let p = head;
  let next;
  while (p != null) {
    next = p.next;
    p.next = pre;
    pre = p;
    p = next;
  }

  return pre;
}

/**
 * Reorder from [1,2,3,4] -> [1,4,3,2]
 * @param head
 */
function reorderListV2(head: ListNode | null): void {
  let other = new ListNode(0);
  let p = head;
  let q = other;
  while (p) {
    q.next = p.next;
    q = q.next;
    if (p.next) {
      p.next = p.next.next;
      p = p.next;
    } else break;
  }
  other.next = reverseList(other.next);

  p = head;
  q = other.next;
  print(head);
  print(other);
  while (q) {
    let temp = q.next;
    q.next = p.next;
    p.next = q;
    p = q.next;
    q = temp;
  }
}
/**
 * 🎉Accepted!
 * Given a singly linked list L: L0→L1→…→Ln-1→Ln,
 * reorder it to: L0→Ln→L1→Ln-1→L2→Ln-2→…
 * You may not modify the values in the list's nodes, only nodes itself may be changed.
 * Example 1:
 * Given 1->2->3->4, reorder it to 1->4->2->3.
 * Example 2:
 * Given 1->2->3->4->5, reorder it to 1->5->2->4->3.
 * @param head
 */
function reorderList(head: ListNode | null): void {
  let p = head;
  let mid = head;
  let preEnd: ListNode;
  while (p) {
    preEnd = mid;
    mid = mid.next;
    p = p.next;
    if (p) p = p.next;
  }
  if (preEnd) preEnd.next = null;

  p = head;
  let q = reverseList(mid);
  let h = new ListNode();
  while (p || q) {
    if (p) {
      h.next = p;
      p = p.next;
      h = h.next;
    }
    if (q) {
      h.next = q;
      q = q.next;
      h = h.next;
    }
  }
}

function print(head: ListNode) {
  const arr: number[] = [];
  while (head) {
    arr.push(head.val);
    head = head.next;
  }
  console.log(arr);
}

function buildList(array: number[]) {
  let head: ListNode;
  let p: ListNode;
  for (const e of array) {
    if (!head) {
      head = new ListNode(e);
      p = head;
    } else {
      p.next = new ListNode(e);
      p = p.next;
    }
  }
  return head;
}

// const head = buildList([1, 2, 3, 4]);
const head = null;
print(head);
// print(reverseList(head));
reorderList(head);
print(head);
