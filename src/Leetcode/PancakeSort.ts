function pancakeSort(A: number[]): number[] {
  let result: number[] = [];

  if (!A || A.length == 0) return result;

  for (let i = 0; i < A.length; i++) {
    bubble(A, A.length - 1 - i, result);
  }

  return result;
}

/**
 * [A,max,B] -> [max, -A, B] -> [-B, A, max]
 * @param arr
 * @param end
 */
const bubble = (arr: number[], end: number, step: number[]) => {
  if (end < 1) return;
  let maxIndex = 0;
  for (let i = 0; i <= end; i++) {
    if (arr[i] > arr[maxIndex]) {
      maxIndex = i;
    }
  }
  if (maxIndex == end) return;
  let temp = [];
  for (let i = end; i > maxIndex; i--) {
    temp.push(arr[i]);
  }
  for (let i = 0; i < maxIndex; i++) {
    temp.push(arr[i]);
  }
  temp.push(arr[maxIndex]);
  for (let i = 0; i <= end; i++) {
    arr[i] = temp[i];
  }
  if (maxIndex != 0) step.push(maxIndex);
  step.push(end);
  return;
};

const ex = [3, 2, 4, 1];
console.log(pancakeSort(ex));
console.log(ex);
/**
 * This problem have a bug, the output should +1 when submit.
 */
