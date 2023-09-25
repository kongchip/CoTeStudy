// function solution(priorities, location) {
//     // location 은 idx
//     // priorities 가 높은 게 우선순위
//     // priorities[location] 이 몇 번째로 처리되나

//     let target = priorities[location]
//     let count = 1    
//     // priorities 가장 숫자가 큰 element를 찾고 배열을 target 까지 순회하면서 카운트++?

//     const highestNumIdx = priorities.indexOf(Math.max(...priorities))

//     if(highestNumIdx === location){
//        return count
//     }

//     // 끝까지 순회하고 없으면 count + Location

//     for(let i = highestNumIdx; i < priorities.length; i++){
//         count++
//         console.log(count)
//     }
//     return count    
// }

function solution(priorities, location) {
    let count = 0;

    while (true) {
        const current = priorities.shift();

        if (priorities.some((priority) => priority > current)) {
            // 가장 높은 우선순위 판별하고 우선순위가 아니면 push 하여 가장 오른쪽에 추가
            priorities.push(current);

        } else {
            // 발견하면 카운트 증가
            count++;

            // 입출력 1번 같은 상황 해결
            if (location === 0) {
                return count;
            }
        }


        location = location === 0 ? priorities.length - 1 : location - 1;
    }
}

// 테스트 1 〉	통과 (0.38ms, 33.6MB)
// 테스트 2 〉	통과 (0.35ms, 33.7MB)
// 테스트 3 〉	통과 (0.16ms, 33.6MB)
// 테스트 4 〉	통과 (0.24ms, 33.5MB)
// 테스트 5 〉	통과 (0.05ms, 33.6MB)
// 테스트 6 〉	통과 (0.18ms, 33.5MB)
// 테스트 7 〉	통과 (0.19ms, 33.7MB)
// 테스트 8 〉	통과 (0.31ms, 33.6MB)
// 테스트 9 〉	통과 (0.15ms, 33.5MB)
// 테스트 10 〉	통과 (0.18ms, 33.5MB)
// 테스트 11 〉	통과 (0.29ms, 33.7MB)
// 테스트 12 〉	통과 (0.15ms, 33.5MB)
// 테스트 13 〉	통과 (0.25ms, 33.5MB)
// 테스트 14 〉	통과 (0.07ms, 33.7MB)
// 테스트 15 〉	통과 (0.10ms, 33.5MB)
// 테스트 16 〉	통과 (0.16ms, 33.6MB)
// 테스트 17 〉	통과 (0.30ms, 33.6MB)
// 테스트 18 〉	통과 (0.17ms, 33.5MB)
// 테스트 19 〉	통과 (0.27ms, 33.5MB)
// 테스트 20 〉	통과 (0.17ms, 33.5MB)