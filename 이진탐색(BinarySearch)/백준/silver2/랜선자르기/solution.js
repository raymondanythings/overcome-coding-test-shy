function solution(input) {
  const [n, m] = input[0].split(" ").map(Number);
  const cables = [];
  for (let i = 1; i <= n; i++) {
    cables.push(+input[i]);
  }
  let left = 1;
  let right = cables.reduce((acc, cur) => Math.max(acc, cur), 0);
  let answer = 0;
  while (left <= right) {
    const mid = ((left + right) / 2) >> 0;
    const total = cables.reduce((acc, cur) => acc + ((cur / mid) >> 0), 0);
    if (total < m) {
      right = mid - 1;
    } else {
      left = mid + 1;
      answer = mid;
    }
  }
  return answer;
}

const input = `4 11
802
743
457
539`.split("\n");

console.log(solution(input));
