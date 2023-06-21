// function solution(record) {
//     // split ? map ?
//     let arr = record.map((el) => el.split(" "))

//     for(let j = 0; j < arr.length; j++){
//         if(arr[j][0] === "Change"){
//             let nicknameToChange = arr[j][2]
//             arr = arr.map((el) => {
//                 if (el[1] === arr[j][1]) {
//                     el.pop();
//                     el.push(nicknameToChange);
//                 }
//                 return el;
//             })
//         }
//     }

//     let ans = []
//     // [i][0] => 행동 [i][1] => 아이디 [i][2] => 닉네임 
//     for (let i = 0; i < arr.length; i++){
//         if(arr[i][0] === 'Enter'){
//             ans.push(`${arr[i][2]}님이 들어왔습니다`)
//             console.log(ans[i])
//         }
//         if(arr[i][0] === 'Leave'){
//             // arr 배열에서 uid를 찾고 닉네임 가지고 와야함
//             let uid = arr.slice().reverse().findIndex((el) => el[1] === arr[i][1])
//             let originalIndex = arr.length - 1 - uid
//             let nickname = arr[originalIndex][2]
//             ans.push(`${nickname}님이 나갔습니다`)
//         }

//     }

//     console.log(arr)
//     console.log(ans)
//     return ans
// }

function solution(record) {
    let ans = []
    let obj = {}

    //     record = record.map((el) => el.split(" "))
    //     console.log(record)

    for (let i = 0; i < record.length; i++) {
        const [action, uid, name] = record[i].split(" ")


        if (action == 'Enter') {
            ans.push([uid, '님이 들어왔습니다.'])
        }

        if (action == 'Leave') {
            ans.push([uid, '님이 나갔습니다.'])
            continue
        }

        obj[uid] = name
    }
    console.log(obj)
    return ans.map((el) => obj[el[0]] + el[1])
}
