import findRightInterval from "../Leetcode/FindRightInterval";

test("normal input", () => {
  const intervals = [
    [1, 4],
    [2, 3],
    [3, 4],
  ];
  const results = findRightInterval(intervals);
  expect(results).toStrictEqual([-1, 2, -1]);
});
