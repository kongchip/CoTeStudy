let input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt"
  )
  .toString()
  .trim()
  .split("\n");

const N = input.shift();

let ans = [];

for (let i = 0; i < N; i++) {
  const [age, name] = input[i].split(" ");
  ans.push({ age: Number(age), name });
}

ans.sort((a, b) => {
  if (a.age === b.age) {
    return ans.indexOf(a) - ans.indexOf(b);
  } else {
    return a.age - b.age;
  }
});

for (const person of ans) {
  console.log(`${person.age} ${person.name}`);
}

// why 시간 초과 . . .

// input.sort((a, b) => a.split(" ")[0] - b.split(" ")[0]);

// console.log(input.join("\n"));
