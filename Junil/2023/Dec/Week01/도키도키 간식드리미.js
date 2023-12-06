let input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt"
  )
  .toString()
  .trim()
  .split("\n")
  .map(number =>
    number.includes(" ") ? number.split(" ").map(Number) : [Number(number)]
  );

let [[N], students] = input;

const emptySpace = [];
let snackNumber = 1;

while (students.length > 0) {
  if (students[0] === snackNumber) {
    students.shift();
    snackNumber++;
  } else if (
    emptySpace.length > 0 &&
    emptySpace[emptySpace.length - 1] === snackNumber
  ) {
    emptySpace.pop();
    snackNumber++;
  } else {
    emptySpace.push(students.shift());
  }
}

while (emptySpace.length > 0) {
  if (emptySpace[emptySpace.length - 1] === snackNumber) {
    emptySpace.pop();
    snackNumber++;
  } else {
    console.log("Sad");
    return;
  }
}

console.log("Nice");
