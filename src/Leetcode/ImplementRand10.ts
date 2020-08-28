/**
 * The rand7() API is already defined for you.
 * var rand7 = function() {}
 * @return {number} a random integer in the range 1 to 7
 */
var rand10 = function () {
  while (true) {
    let base = rand7() - 1;
    let spec = rand7() - 1;
    let count = spec + base * 7;
    if (count < 40) {
      return (count % 10) + 1;
    }
  }
};

const rand7 = (): number => {
  return Math.ceil(Math.random() * 7);
};

for (let i = 0; i < 10; i++) {
  console.log(rand10());
}

/**
 * 🎉Accepted!
 * [1-7] -> [0->6]
 * [0->6] in every [0->6] => [[0->6], [7->13], [14->20]...]
 * drop [40->48] left [0->39]
 * slice [0->39] into 10 part, so each part can keep same probability
 */
