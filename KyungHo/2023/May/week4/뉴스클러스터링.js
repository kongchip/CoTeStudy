function solution(str1, str2) {
  let arr1 = [];
  let arr2 = [];
  let intersection = 0;
  let universion = 0;
  str1 = str1.toUpperCase();
  str2 = str2.toUpperCase();

  const regex = /^[a-z|A-Z]+$/;

  for (let i = 0; i < str1.length - 1; i++) {
    if (regex.test(`${str1[i]}${str1[i + 1]}`)) {
      arr1.push(`${str1[i]}${str1[i + 1]}`);
    }
  }
  for (let i = 0; i < str2.length - 1; i++) {
    if (regex.test(`${str2[i]}${str2[i + 1]}`)) {
      arr2.push(`${str2[i]}${str2[i + 1]}`);
    }
  }

  const setData = new Set([...arr1, ...arr2]);
  setData.forEach((item) => {
    const has1 = arr1.filter((x) => x === item).length;
    const has2 = arr2.filter((x) => x === item).length;
    universion += Math.max(has1, has2);
    intersection += Math.min(has1, has2);
  });
  return universion === 0
    ? 65536
    : Math.floor((intersection / universion) * 65536);
}
