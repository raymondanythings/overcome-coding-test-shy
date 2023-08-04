function solution(distance, rocks, n) {
  var answer = 0;
  rocks.sort((a, b) => a - b);
  let left = 1;
  let right = distance;

  while (left <= right) {
    let prev = 0;
    let cnt = 0;
    const mid = ~~((left + right) / 2);
    rocks.forEach((rock) => {
      if (rock - prev <= mid) {
        cnt++;
      } else {
        prev = rock;
      }
    });

    if (cnt > n) {
      right = mid - 1;
    } else {
      left = mid + 1;
      console.log(left, answer);
      answer = Math.max(left, answer);
    }
  }

  return answer;
}

console.log(solution(25, [2, 14, 11, 21, 17], 2));
