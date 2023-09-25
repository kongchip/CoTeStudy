function solution(ingredient) {
    let answer = 0;
    const stack = [];
  
    for (let i of ingredient) {
      stack.push(i);
  
      if (stack.slice(-4).join("") == "1231") {
        stack.splice(-4);
        answer++;
      }
    }
    return answer;
  }