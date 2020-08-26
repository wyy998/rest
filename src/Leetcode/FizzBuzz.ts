function fizzBuzz(n: number): string[] {
  const results: string[] = [];
  for (let i = 1; i <= n; i++) {
    let s = "";
    if (i % 3 == 0) {
      s += "Fizz";
    }
    if (i % 5 == 0) {
      s += "Buzz";
    }
    if (s.length == 0) s = i.toString();
    results.push(s);
  }
  return results;
}

export default fizzBuzz;
