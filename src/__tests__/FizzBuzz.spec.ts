import fizzBuzz from "../Leetcode/FizzBuzz";

test("normal", () => {
  const n = 15;
  expect(fizzBuzz(n)).toStrictEqual([
    "1",
    "2",
    "Fizz",
    "4",
    "Buzz",
    "Fizz",
    "7",
    "8",
    "Fizz",
    "Buzz",
    "11",
    "Fizz",
    "13",
    "14",
    "FizzBuzz",
  ]);
});
