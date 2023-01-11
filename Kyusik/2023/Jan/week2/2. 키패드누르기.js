function solution(numbers, hand) {
  function dis(num, lH, rH, pos, hand) {
    const lD =
      Math.abs(pos[lH][0] - pos[num][0]) + Math.abs(pos[lH][1] - pos[num][1]);
    const rD =
      Math.abs(pos[rH][0] - pos[num][0]) + Math.abs(pos[rH][1] - pos[num][1]);

    if (lD === rD) return hand === "left" ? "L" : "R";
    return lD < rD ? "L" : "R";
  }

  const pos = {
    1: [0, 0],
    2: [0, 1],
    3: [0, 2],
    4: [1, 0],
    5: [1, 1],
    6: [1, 2],
    7: [2, 0],
    8: [2, 1],
    9: [2, 2],
    "*": [3, 0],
    0: [3, 1],
    "#": [3, 2],
  };
  var lH = "*",
    rH = "#";
  var result = "";
  for (var num of numbers) {
    if (num % 3 === 1) {
      result += "L";
      lH = num;
    } else if (num !== 0 && num % 3 === 0) {
      result += "R";
      rH = num;
    } else {
      result += dis(num, lH, rH, pos, hand);
      result[result.length - 1] === "L" ? (lH = num) : (rH = num);
    }
  }

  return result;
}
