//  배열에서 특정 원소 찾기

/**
 * @description 재귀함수를 활용한 이진탐색 구현
 * @param {number[]} arr
 * @param {number} target
 * @param {number} left
 * @param {number} right
 * @returns {number}
 */
function binarySearchByRecursion(arr, target, left, right) {
  if (left > right) return -1;
  let mid = ((left + right) / 2) >> 0;
  if (arr[mid] === target) return mid;
  else if (arr[mid] > target)
    return binarySearchByRecursion(arr, target, left, mid - 1);
  else return binarySearchByRecursion(arr, target, mid + 1, right);
}

/**
 * @description 반복문을 활용한 재귀함수 구현
 * @param {number[]} arr
 * @param {number} target
 * @returns {number}
 */
function binarySearchByLoop(arr, target) {
  let left = 0;
  let right = arr.length;
  while (left <= right) {
    const mid = ((left + right) / 2) >> 0;
    if (target === arr[mid]) return mid;
    arr[mid] > target ? (right = mid - 1) : (left = mid + 1);
  }
  return -1;
}

const target = 19;
const arr = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
const result = binarySearchByRecursion(arr, target, 0, arr.length);
const result2 = binarySearchByLoop(arr, target);
console.log(result);
console.log(result2);

// 정렬된 배열에서 특정 원소의 개수 구하기

/**
 * @description 정렬된 순서를 유지하면서 배열에 삽입 할 가장 왼쪽 인덱스 반환
 * @param {number[]} arr
 * @param {number} target
 * @returns {number}
 */
function lowerBound(arr, target) {
  let left = 0;
  let right = arr.length;
  while (left < right) {
    const mid = ((left + right) / 2) >> 0;
    if (arr[mid] >= target) right = mid;
    else left = mid + 1;
  }
  return right;
}

/**
 * @description 정렬된 순서를 유지하면서 배열에 삽입 할 가장 오른쪽 인덱스 반환
 * @param {number[]} arr
 * @param {number} target
 * @returns {number}
 */
function upperBound(arr, target) {
  let left = 0;
  let right = arr.length;
  while (left < right) {
    const mid = ((left + right) / 2) >> 0;
    if (arr[mid] > target) right = mid;
    else left = mid + 1;
  }
  return right;
}

/**
 * @description left <= x <= right 인 원소의 개수를 반환하는 함수
 * @param {number[]} arr
 * @param {number} left
 * @param {number} right
 * @returns {number}
 */
function countByRange(arr, left, right) {
  const rightIndex = upperBound(arr, right, 0, arr.length);
  const leftIndex = lowerBound(arr, left, 0, arr.length);
  return rightIndex - leftIndex;
}

const ary = [1, 2, 3, 3, 3, 3, 4, 4, 8, 9];
//  left,right 동일한 값이면, 특정 값의 데이터 개수 출력
console.log(countByRange(ary, 4, 4));
// 값이 [-1,3] 범위에 있는 데이터 개수 출력
console.log(countByRange(ary, -1, 3));
