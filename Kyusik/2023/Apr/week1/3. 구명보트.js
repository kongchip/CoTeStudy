function solution(people, limit) {
  let count = 0;
  people.sort((a, b) => {
    return b - a;
  });
  let left = 0;
  let right = people.length - 1;

  while (left < right) {
    let weight = people[left] + people[right];
    if (weight > limit) {
      left++;
    } else {
      left++;
      right--;
    }
    count++;
  }
  if (left === right) {
    count++;
  }
  return count;
}
