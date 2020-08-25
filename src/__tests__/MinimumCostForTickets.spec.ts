import mincostTickets from "../Leetcode/MinimumCostForTickets";

test("test minimum cost for normal input", () => {
  const days = [1, 4, 6, 7, 8, 20];
  const costs = [2, 7, 15];
  expect(mincostTickets(days, costs)).toBe(11);
});

test("test mimimum with long input", () => {
  const days = [
    1,
    2,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    20,
    21,
    24,
    25,
    27,
    28,
    29,
    30,
    31,
    34,
    37,
    38,
    39,
    41,
    43,
    44,
    45,
    47,
    48,
    49,
    54,
    57,
    60,
    62,
    63,
    66,
    69,
    70,
    72,
    74,
    76,
    78,
    80,
    81,
    82,
    83,
    84,
    85,
    88,
    89,
    91,
    93,
    94,
    97,
    99,
  ];

  const costs = [9, 38, 134];
  expect(mincostTickets(days, costs)).toBe(423);
});
