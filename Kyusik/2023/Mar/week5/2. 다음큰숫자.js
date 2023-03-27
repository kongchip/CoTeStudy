function solution(n) {
  let nCount = 0;
  let nBinary = n.toString(2);

  for (let i = 0; i < nBinary.length; i++) {
    if (nBinary[i] === "1") nCount++;
  }

  let result = 0;
  let i = n + 1;
  while (result === 0) {
    let iCount = 0;
    let iBinary = i.toString(2);
    for (let j = 0; j < iBinary.length; j++) {
      if (iBinary[j] === "1") iCount++;
    }

    if (nCount === iCount) result = iBinary;
    else i++;
  }

  return parseInt(result, 2);
}
