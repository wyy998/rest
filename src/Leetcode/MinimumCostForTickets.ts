function mincostTickets(days: number[], costs: number[]): number {
  if (!days || days.length == 0 || costs.length < 3) return 0;

  let cache: number[] = [];
  return dfs(days, costs, 0, cache);
}

function dfs(
  days: number[],
  costs: number[],
  day: number,
  cache: number[]
): number {
  if (day >= days.length) return 0;
  if (cache[day]) return cache[day];
  let c0 = dfs(days, costs, day + 1, cache) + costs[0];
  let next = day;
  while (days[next] - days[day] < 7 && next < days.length) {
    next++;
  }
  let c1 = dfs(days, costs, next, cache) + costs[1];
  next = day;
  while (days[next] - days[day] < 30 && next < days.length) {
    next++;
  }
  let c2 = dfs(days, costs, next, cache) + costs[2];

  return (cache[day] = Math.min(c0, c1, c2));
}

export default mincostTickets;
/**
 * 🎉Acceped!
 * DP optimize: use global cache.
 */
