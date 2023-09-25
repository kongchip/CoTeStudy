function solution(s) {
  let answer = 0;

  const isOpen = (c) => {
    return c === '(' || c === '[' || c === '{';
  };

  const isPair = (open, close) => {
    return (open === '(' && close === ')') || (open === '[' && close === ']') || (open === '{' && close === '}');
  };

  for (let i = 0; i < s.length; i++) {
    let rotated = s.slice(i) + s.slice(0, i);
    let stack = [];
    let isValid = true;

    for (let j = 0; j < rotated.length; j++) {
      if (isOpen(rotated[j])) {
        stack.push(rotated[j]);
      } else {
        if (stack.length === 0) {
          isValid = false;
          break;
        }

        let prev = stack.pop();
        if (!isPair(prev, rotated[j])) {
          isValid = false;
          break;
        }
      }
    }

    if (isValid && stack.length === 0) {
      answer++;
    }
  }

  return answer;
}
