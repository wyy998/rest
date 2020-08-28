function findRightInterval(intervals: number[][]): number[] {
  let sortPair = [];
  for (let i = 0; i < intervals.length; i++) {
    sortPair.push(i);
  }
  sortPair.sort((a, b) => intervals[a][0] - intervals[b][0]);

  let sortMap = new Map();
  for (let i = 0; i < intervals.length; i++) {
    sortMap.set(sortPair[i], i);
  }

  let res = [];
  for (let i = 0; i < intervals.length; i++) {
    let index = sortMap.get(i);
    let next = -1;
    for (let j = index + 1; j < intervals.length; j++) {
      if (intervals[sortPair[j]][0] >= intervals[sortPair[index]][1]) {
        next = sortPair[j];
        break;
      }
    }
    res.push(next);
  }
  return res;
}

export default findRightInterval;
