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

const input = `10
6 3 2 10 10 10 -10 -10 7 3
8
10 9 -5 2 3 4 5 -10`.split("\n");

solution(input);
