function solution(food) {
  let left = "";
  let right = "";
  let mid = 0;
  for (let i = 1; i < food.length; i++) {
    if (food[i] < 2) continue;
    for (let j = 0; j < Math.floor(food[i] / 2); j++) {
      left += i;
    }
  }
  right = left.split("").reverse().join("");
  return left.concat(mid).concat(right);
}
