function solution(s) {
  let stack = [s[0]];
  for (let i = 1; i < s.length; i++) {
    if (stack[stack.length - 1] === s[i]) stack.pop();
    else stack.push(s[i]);
  }

  return stack.length ? 0 : 1;
}

// function solution(s) {
//   let sets = Array.from(new Set(s));

//   let index = 0;
//   while (s.length !== 0) {
//     let length = s.length;
//     s = s.split(sets[index].repeat(2)).join("");

//     if (index === sets.length - 1 && length === s.length) break;
//     if (index === sets.length - 1) {
//       index = 0;
//     } else {
//       index++;
//     }
//   }

//   return s.length ? 0 : 1;
// }

// function solution(s) {
//   let index = 0;
//   while (s.length !== 0) {
//     if (s[index] === s[index + 1]) {
//       s = s.slice(0, index) + s.slice(index + 2);
//       index = index ? index - 1 : 0;
//     } else {
//       index++;
//     }

//     if (index === s.length - 1) break;
//   }

//   return s.length ? 0 : 1;
// }
