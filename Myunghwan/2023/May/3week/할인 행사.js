// function solution(want, number, discount) {
//     let discountArr = [];
//     let arr2 = [];
//     let result;

//     // discount의 갯수가 10 이상일 때
//     if(discount.length > 10){
//         let max = discount.length % 10
//         for(let i = 0; i <= max; i++)
//         discountArr.push(discount.slice(0+i, 10+i))

//         for(let j = 0; j <= discountArr.length; j++){
//             // arr2.push(discountArr[j].sort()) 에러 발생
//         }
//         console.log(discountArr.sort())

//     } else {
//         console.log(discount.length)
//     }

//     // discount에 있는 목록이 want에 있다면 want의 인덱스와 같은 인덱스인
//     // number의 인덱스의 값을 줄인다
// }

function solution(want, number, discount) {
  var answer = 0;
  let startIndex = 0;
  let wishlist = [];

  for (let j = 0; j < want.length; j++) {
    for (let i = 0; i < number[j]; i++) {
      wishlist.push(want[j]);
    }
  }

  while (startIndex !== discount.length - 9) {
    let newArr = [...wishlist];

    for (let i = startIndex; i < startIndex + 10; i++) {
      if (newArr.includes(discount[i])) {
        newArr.splice(newArr.indexOf(discount[i]), 1);
      }
    }

    if (newArr.length === 0) {
      answer++;
    }
    startIndex++;
  }
  return answer;
}
