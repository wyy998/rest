import sortArrayByParity from "../Leetcode/SortArrayByParity";

test("sortArrayByParity with null", () => {
  const arr = null;
  const result = sortArrayByParity(arr);
  expect(result).toBeNull();
});

test("sortArrayByParity with empty", () => {
  const arr = [];
  const result = sortArrayByParity(arr);
  expect(result.length).toBe(0);
});

test("sortArrayByParity with even array", () => {
  const arr = [1, 2, 3, 4];
  const result = sortArrayByParity(arr);
  expect(result.map((r) => r % 2)).toStrictEqual([0, 0, 1, 1]);
});
test("sortArrayByParity with odd array", () => {
  const arr = [1, 2, 3, 4, 5];
  const result = sortArrayByParity(arr);
  expect(result.map((r) => r % 2)).toStrictEqual([0, 0, 1, 1, 1]);
});
