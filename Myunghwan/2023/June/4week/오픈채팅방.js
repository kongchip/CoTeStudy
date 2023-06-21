// function solution(record) {
//     let users = {};
//     let stateArr = [];
//     let result = []
//     // state와 id를 stateArr배열에 push
//     // users객체에 id별 name를 넣기
//     for(let rec of record){
//         let [state, id, name] = rec.split(' ')
//         if(state === 'Enter'){
//             users[id] = name
//             stateArr.push([state, id])
//         }else if (state === 'Leave'){
//             stateArr.push([state, id])
//         }else if (state === 'Change'){
//             users[id] = name
//         }
//     }
//     console.log(users)
//     //stateArr배열의 state에 따라 result에 결과값 넣기
//     for(let i = 0; i < stateArr.length; i++){
//         if(stateArr[i][0] === 'Enter'){
//             result.push(users[stateArr[i][1]] + "님이 들어왔습니다.")
//         }else if(stateArr[i][0] === 'Leave'){
//             result.push(users[stateArr[i][1]] + "님이 나갔습니다.")
//         }
//     }
//     return result
// }

function solution(record) {
  let users = {};
  let stateArr = [];
  let result = [];

  for (let rec of record) {
    let [state, id, name] = rec.split(' ');
    if (state === 'Enter') {
      users[id] = name;
      stateArr.push([state, id]);
    } else if (state === 'Leave') {
      stateArr.push([state, id]);
    } else if (state === 'Change') {
      users[id] = name;
    }
  }
  for (let i of stateArr) {
    let [state, id] = i;
    if (state === 'Enter') {
      result.push(users[id] + '님이 들어왔습니다.');
    } else if (state === 'Leave') {
      result.push(users[id] + '님이 나갔습니다.');
    }
  }
  return result;
}
