// function solution(str1, str2) {
//     let answer = 0;

//     // 문자열을 정제해서 다중 집합 만드는 함수
//     function makeMultiset(str) {
//         const resultArr = [];
//         const filteredStr = str.match(/[A-Za-z]/g).join('').toLowerCase();
//         for (let i = 0; filteredStr.length - 1 > i; i++) {
//             resultArr.push(filteredStr.substring(i, i + 2))
//         }
//         return resultArr;
//     }

//     const multi1 = makeMultiset(str1);
//     const multi2 = makeMultiset(str2);

//     const set = new Set([...multi1, ...multi2])

//     let union = 0;
//     let intersection = 0;

//     set.forEach(item => {
//         const has1 = multi1.filter(x => x === item).length;
//         const has2 = multi2.filter(x => x === item).length;
//         union += Math.max(has1, has2);
//         intersection += Math.min(has1, has2);
//     })

//     return union === 0 ? 65536 : Math.floor(intersection / union * 65536);
// }

function solution(str1, str2) {
  //
  function explode(text) {
    const result = [];
    for (let i = 0; i < text.length - 1; i++) {
      const node = text.substr(i, 2);
      if (node.match(/[A-Za-z]{2}/)) {
        result.push(node.toLowerCase());
      }
    }
    return result;
  }

  const arr1 = explode(str1);
  const arr2 = explode(str2);
  const set = new Set([...arr1, ...arr2]);
  let union = 0;
  let intersection = 0;
  console.log(set, arr1, arr2);

  //같은 원소를 검사해서 많은  쪽은 union에 더하고 적은쪽은 intersection에 더한다.
  set.forEach((item) => {
    const has1 = arr1.filter((x) => x === item).length;
    const has2 = arr2.filter((x) => x === item).length;
    union += Math.max(has1, has2);
    intersection += Math.min(has1, has2);
    console.log(
      arr1.filter((x) => x === item),
      arr2.filter((x) => x === item)
    );
  });
  return union === 0 ? 65536 : Math.floor((intersection / union) * 65536);
}
