function solution(s) {
    //     const arr = s.split('')
    //     // arr를 반복문을 돌려서 만약 arr[i] 가 temp에 없다면 -1 을 제출 배열에 push
    //     // 저장배열에 arr[i] 가 있다면, 저장배열.length - 저장배열.indexOf(arr[i]) 
    //     let temp = []
    //     let answer = []
    //     for (let i = 0; i < arr.length; i++){
    //         answer.push(temp.indexOf(arr[i]))
    //         temp.push(arr[i])
    //         // if(!temp.includes(arr[i])){
    //         //     answer.push(-1)
    //         //     temp.push(arr[i])
    //         // } else {
    //         //     // ['b','a','n']
    //         //     console.log(temp.indexOf(arr[i],2))
    //         //     answer.push(temp.length - temp.indexOf(arr[i]))
    //         //     temp.push(arr[i])
    //         // }
    //     }


    //     return answer

    // 객체에 최신 idx를 저장시켜 그것과 비교

    const obj = {}
    const answer = []

    for (let i = 0; i < s.length; i++) {
        const letter = s[i]
        if (obj[letter] !== undefined) {
            answer.push(i - obj[letter])
        } else {
            answer.push(-1)
        }
        obj[letter] = i
    }

    return answer;

}

// 테스트 1 〉	통과(0.06ms, 33.5MB)
// 테스트 2 〉	통과(0.18ms, 33.6MB)
// 테스트 3 〉	통과(0.18ms, 33.5MB)
// 테스트 4 〉	통과(0.29ms, 33.7MB)
// 테스트 5 〉	통과(4.60ms, 37.7MB)
// 테스트 6 〉	통과(0.97ms, 37.2MB)
// 테스트 7 〉	통과(3.76ms, 37.7MB)
// 테스트 8 〉	통과(0.49ms, 37MB)
// 테스트 9 〉	통과(4.66ms, 37.7MB)
// 테스트 10 〉	통과(0.58ms, 33.6MB)
// 테스트 11 〉	통과(3.44ms, 37.6MB)
// 테스트 12 〉	통과(0.09ms, 33.4MB)
// 테스트 13 〉	통과(0.06ms, 33.5MB)
// 테스트 14 〉	통과(0.22ms, 33.5MB)
// 테스트 15 〉	통과(0.06ms, 33.3MB)
// 테스트 16 〉	통과(0.17ms, 33.4MB)
// 테스트 17 〉	통과(0.17ms, 33.5MB)
// 테스트 18 〉	통과(0.35ms, 33.8MB)
// 테스트 19 〉	통과(0.39ms, 33.8MB)
// 테스트 20 〉	통과(0.22ms, 33.4MB)
// 테스트 21 〉	통과(0.20ms, 33.4MB)
// 테스트 22 〉	통과(0.66ms, 37.3MB)
// 테스트 23 〉	통과(0.22ms, 33.5MB)
// 테스트 24 〉	통과(0.23ms, 33.6MB)
// 테스트 25 〉	통과(0.25ms, 33.6MB)
// 테스트 26 〉	통과(0.19ms, 33.4MB)
// 테스트 27 〉	통과(0.25ms, 33.6MB)
// 테스트 28 〉	통과(0.24ms, 33.6MB)
// 테스트 29 〉	통과(0.05ms, 32.9MB)
// 테스트 30 〉	통과(3.53ms, 37.2MB)