/**
 * Given an array A of non-negative integers, return an array consisting of all the even elements of A, followed by all the odd elements of A.
 * You may return any answer array that satisfies this condition.
 * Example 1:
 * Input: [3,1,2,4]
 * Output: [2,4,3,1]
 * The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.
 * Note:
 *
 * 1 <= A.length <= 5000
 * 0 <= A[i] <= 5000
 * @param A
 */
function sortArrayByParity(A: number[]): number[] {
  let left = 0;
  let right = A.length - 1;
  while (left < right) {
    if (A[left] % 2 == 0) {
      left++;
      continue;
    } else {
      if (A[right] % 2 == 1) {
        right--;
        continue;
      } else {
        let temp = A[left];
        A[left] = A[right];
        A[right] = temp;
      }
    }
  }
  return A;
}

const test = [3, 1, 4, 2];
console.log(sortArrayByParity(test));
/**
 * It seems the same time cost compare exchange in place to construct new Array.
 */
