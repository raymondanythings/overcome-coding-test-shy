function solution(input) {
  const n = +input[0];
  const k = +input[1];

  let left = 1;
  let right = 10 ** 10;
  let answer = 0;
  while (left <= right) {
    const mid = ((left + right) / 2) >> 0;
    let total = 0;
    for (let i = 1; i <= n; i++) {
      total += Math.min((mid / i) >> 0, n);
    }
    if (total >= k) {
      answer = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return answer;
}

const input = `3
7`.split("\n");

console.log(solution(input));
