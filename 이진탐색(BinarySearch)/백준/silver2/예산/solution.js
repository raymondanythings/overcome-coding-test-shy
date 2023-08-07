function solution(input) {
  const N = +input[0];
  const arr = input[1].split(" ").map(Number);
  const M = +input[2];

  let left = 0;
  let right = arr.reduce((ac, cu) => Math.max(ac, cu), 0);
  let answer = 0;
  while (left <= right) {
    const mid = ((left + right) / 2) >> 0;
    const totalPrice = arr.reduce((ac, cu) => ac + Math.min(cu, mid), 0);
    if (totalPrice <= M) {
      left = mid + 1;
      answer = mid;
    } else {
      right = mid - 1;
    }
  }
  return answer;
}

const input = `5
70 80 30 40 100
450`.split("\n");

console.log(solution(input));
