function largestComponentSize(A: number[]): number {
  const parent = new Map<number, number>();

  for (let num of A) {
    for (let fact = 2; fact * fact <= num; fact++) {
      if (num % fact == 0) {
        union(num, fact, parent);
        union(num, num / fact, parent);
      }
    }
  }

  let max = 1;
  const freq = new Map<number, number>();
  for (let num of A) {
    let f = find(num, parent);
    if (freq.has(f)) {
      freq.set(f, freq.get(f)! + 1);
      max = Math.max(max, freq.get(f)!);
    } else {
      freq.set(f, 1);
    }
  }
  return max;
}

function union(n: number, m: number, p: Map<number, number>): void {
  let findN = find(n, p);
  let findM = find(m, p);
  if (findN < findM) p.set(findM, findN);
  else p.set(findN, findM);
}

function find(i: number, parent: Map<number, number>): number {
  if (parent.get(i) == null) parent.set(i, i);
  while (i != parent.get(i)) i = parent.get(i)!;
  return i;
}

const testInput = [20, 50, 9, 63];
console.log(largestComponentSize(testInput));

/**
 * Copy from discuss.
 * TODO: Understand this solution
 */