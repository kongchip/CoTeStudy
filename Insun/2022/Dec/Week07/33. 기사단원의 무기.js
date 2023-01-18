// function solution(number, limit, power) {
//   // 1부터 5까지 반복문으로 돌면서 약수의 개수를 구하기 -> 새로운 배열 생성
//   let arr = []
//   let count = 0
//   for(let i = 1; i <= number; i++) {
//      arr.push(i)
//   }
//   console.log(arr)
//   let a = []
//   let c = 0
//   for(let i = 1; i <= arr.length; i++) {
//       if(arr[i] % i === 0) {
//           c++
//           a.push(c)
//       }
//       console.log(a)
//   }
//   // 만약 새로운 배열이 limit를 넘으면 power로 바꾸기
//   // 해당 배열의 요소를 다 더하기
// }

function getDivisor(number) {
  const divisor = [];

  for (let i = 1; i <= number / 2; i++) {
    if (number % i === 0) {
      divisor.push(i);
    }
  }

  return divisor.length + 1;
}

function purchaseWeapon(states, limit, power) {
  let steel = 0;

  states.forEach((state) => {
    if (state > limit) {
      steel += power;
    }

    if (state <= limit) {
      steel += state;
    }
  });

  return steel;
}

function solution(number, limit, power) {
  const knights = new Array(number).fill(0);

  const attackStates = knights.map((_, index) => {
    const state = getDivisor(index + 1);

    return state;
  });

  const totalSteel = purchaseWeapon(attackStates, limit, power);

  return totalSteel;
}
