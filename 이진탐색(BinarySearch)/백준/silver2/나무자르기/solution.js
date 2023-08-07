function solution(input) {
  const [n, m] = input[0].split(" ").map(Number);
  const trees = input[1].split(" ").map(Number);
  let left = 0;
  let right = trees.reduce((acc, cur) => Math.max(acc, cur), 0);
  let answer = 0;
  while (left <= right) {
    const mid = ((left + right) / 2) >> 0;
    const total = trees.reduce(
      (acc, cur) => acc + (cur - mid > 0 ? cur - mid : 0),
      0
    );
    if (total < m) {
      right = mid - 1;
    } else {
      left = mid + 1;
      answer = mid;
    }
  }
  return answer;
}

const input = `4 7
20 15 10 17`.split("\n");

console.log(solution(input));
