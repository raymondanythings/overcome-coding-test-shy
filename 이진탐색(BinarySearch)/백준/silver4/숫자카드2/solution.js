function solution(input) {
  const handMap = new Map();
  input[1].split(" ").forEach((item) => {
    handMap.set(+item, (handMap.get(+item) || 0) + 1);
  });
  console.log(
    input[3]
      .split(" ")
      .map((card) => handMap.get(+card) || 0)
      .join(" ")
  );
}

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

const upperBound = (arr, target) => {
  let left = 0;
  let right = arr.length;
  while (left < right) {
    const mid = ((left + right) / 2) >> 0;
    if (arr[mid] > target) right = mid;
    else left = mid + 1;
  }
  return right;
};

const countByRange = (arr, leftValue, rightValue) => {
  return upperBound(arr, rightValue) - lowerBound(arr, leftValue);
};

function solutionByBinarySearch(input) {
  const n = +input[0];
  const arr = input[1].split(" ").map(Number);
  const m = +input[2];
  const cardList = input[3].split(" ").map(Number);

  let answer = "";
  arr.sort((a, b) => a - b);
  cardList.forEach((card) => {
    answer += countByRange(arr, card, card) + " ";
  });
  return answer.trim();
}

const input = `10
6 3 2 10 10 10 -10 -10 7 3
8
10 9 -5 2 3 4 5 -10`.split("\n");

// solution(input);
solutionByBinarySearch(input);
