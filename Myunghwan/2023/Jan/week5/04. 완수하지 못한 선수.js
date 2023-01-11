// function solution(participant, completion) {
//     var answer = '';
//     let set = new Set(participant)
//     let arr = [...set]
//     let a = completion
    
//     if(arr.length !== a.length)      
//         a.push(0)
    
//     for(let i = 0; i < arr.length; i++){
//         for(let j = 0; j < arr.length; j++){
//             if(arr[i] === a[j]){
//                 arr[i] = 0
//             }
//         }
//     }
//     console.log(arr)
//     console.log(a)
// }

function solution(participant, completion) {
    participant.sort();
    completion.sort();
    for(var i=0;i<participant.length;i++){
        if(participant[i] !== completion[i]){
            return participant[i];
        }
    }
}