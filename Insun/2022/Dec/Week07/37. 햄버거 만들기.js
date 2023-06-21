function solution(ingredient) {
  let stack = [];
  let count = 0;

  ingredient.forEach((item) => {
    stack.push(item);

    if (stack.length >= 4) {
      const hamburger = stack.slice(-4).join("");

      if (hamburger === "1231") {
        stack.pop();
        stack.pop();
        stack.pop();
        stack.pop();

        count++;
      }
    }
  });

  return count;
}
