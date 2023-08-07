// 최대 부분 수열 상관 없이 부분수열을 완성하는 답을 도출하면 됨.
// 1,2,3,4,5,6
const lowerBound = (arr, target) => {
  let left = 0;
  let right = arr.length;
  while (left < right) {
    const mid = ((left + right) / 2) >> 0;
    if (arr[mid] >= target) right = mid;
    else left = mid + 1;
  }
  return right;
};

function solution(input) {
  const n = +input[0];
  const arr = input[1].split(" ").map(Number);
  arr.reverse();
  const d = [0];
  arr.forEach((power) => {
    if (d[d.length - 1] < power) {
      d.push(power);
    } else {
      const idx = lowerBound(d, power);
      d[idx] = power;
    }
  });
  return n - (d.length - 1);
}

const input = `7
15 11 4 8 5 2 4`.split("\n");
console.log(solution(input));
