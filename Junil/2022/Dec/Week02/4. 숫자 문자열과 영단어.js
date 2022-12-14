// 숫자 문자열과 영단어

function solution(s) {
    const numObj = {
        zero: 0,
        one: 1,
        two: 2,
        three: 3,
        four: 4,
        five: 5,
        six: 6,
        seven: 7,
        eight: 8,
        nine: 9
    };

    let numObjArr = Object.keys(numObj)
    for (let i = 0; i < numObjArr.length; i++) {
        if (s.includes(numObjArr[i])) {
            s = s.replace(numObjArr[i], numObj[numObjArr[i]])
        }
    }

    return Number(s)
}

//   테스트 1 〉	통과 (0.07ms, 33.5MB)
//   테스트 2 〉	통과 (0.06ms, 33.4MB)
//   테스트 3 〉	통과 (0.07ms, 33.4MB)
//   테스트 4 〉	통과 (0.06ms, 33.5MB)
//   테스트 5 〉	실패 (0.07ms, 33.4MB)
//   테스트 6 〉	통과 (0.07ms, 33.5MB)
//   테스트 7 〉	실패 (0.07ms, 33.4MB)
//   테스트 8 〉	실패 (0.07ms, 33.5MB)
//   테스트 9 〉	통과 (0.09ms, 33.4MB)
//   테스트 10 〉	통과 (0.06ms, 33.5MB)