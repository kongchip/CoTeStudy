let input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt"
  )
  .toString()
  .trim()
  .split("\n")
  .map(el => el.split(" ").map(el => +el));

const N = input.shift();

// input 배열 안에서의 비교 Ex. input이 [1,2] 면 [0,1] 처럼 자기보다 낮은 값의 개수를 해당 인덱스에 부여
input = input[0];

function coordinateCompression(input) {
  const n = input.length;
  const uniqueCoordinates = Array.from(new Set(input));
  uniqueCoordinates.sort((a, b) => a - b);
  const compressedCoordinatesMap = {};

  uniqueCoordinates.forEach((coord, index) => {
    compressedCoordinatesMap[coord] = index;
  });

  const compressedCoordinates = input.map(
    coord => compressedCoordinatesMap[coord]
  );
  return compressedCoordinates;
}

// 결과 출력
console.log(coordinateCompression(input).join(" "));
