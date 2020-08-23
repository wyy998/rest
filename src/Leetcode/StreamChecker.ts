class StreamChecker {
  root: Tire;
  input: string;
  constructor(words: string[]) {
    this.root = new Tire();
    for (let word of words) {
      this.root.add(word.split("").reverse().join(""));
    }
    this.input = "";
  }

  query(letter: string): boolean {
    this.input += letter;
    return this.root.query(this.input);
  }
}

class TireNode {
  val: string;
  child: TireNode[];
  end: boolean;
  constructor(val: string) {
    this.val = val;
    this.child = new Array<TireNode>(26);
    this.end = false;
  }
}

class Tire {
  root: TireNode;
  constructor() {
    this.root = new TireNode("0");
  }
  add(word: string): boolean {
    if (word == null || word.length == 0) return false;

    let p = this.root;
    for (let w of word) {
      if (p.child[this.charCode(w)]) {
        p = p.child[this.charCode(w)];
      } else {
        p.child[this.charCode(w)] = new TireNode(w);
        p = p.child[this.charCode(w)];
      }
    }
    p.end = true;
    return true;
  }

  query(stream: string): boolean {
    let p = this.root;
    for (let i = stream.length - 1; i >= 0; i--) {
      if (p.child[stream.charCodeAt(i) - "a".charCodeAt(0)]) {
        if (p.child[stream.charCodeAt(i) - "a".charCodeAt(0)].end) {
          return true;
        }
        p = p.child[stream.charCodeAt(i) - "a".charCodeAt(0)];
      } else {
        return false;
      }
    }
    return false;
  }

  charCode(s: string): number {
    if (!s || s.length == 0) return 0;
    return s.charCodeAt(0) - "a".charCodeAt(0);
  }
}
/**
 * Your StreamChecker object will be instantiated and called as such:
 * var obj = new StreamChecker(words)
 * var param_1 = obj.query(letter)
 */
const words = ["cdqwe", "f", "kl"];
const checker = new StreamChecker(words);
const input = "abcdqwefghijkl";
for (let i of input) {
  console.log(`${i} with ${checker.query(i)}`);
}
console.log(JSON.stringify(checker.root));
