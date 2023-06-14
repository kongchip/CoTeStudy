function solution(want, number, discount) {
    // map 을 써서 옵젝화 시키고, discount 반복문을 돌려서 수량을 하나씩 빼주고 모든 수량이 0이 되면 해당 인덱스를 리턴?

    // 필요없는게 idx를 차지할 수 있음
    // 마지막으로 수량이 다 까지는 인덱스??

    let map = {}
    let idx = 0

    for (let i = 0; i < want.length; i++) {
        if (!discount.includes(want[i])) return 0
        map[want[i]] = number[i]
    }

    for (let i = 0; i < discount.length; i++) {
        const product = discount[i];

        if (map.hasOwnProperty(product) && map[product] > 0) {
            map[product] -= 1;
        }

        const allZero = Object.values(map).every((value) => value === 0);

        if (allZero) {
            idx = i - 10 + 2
            break
        }
    }

    return idx
}


// 테스트 1 〉	실패 (0.27ms, 33.9MB)
// 테스트 2 〉	실패 (0.21ms, 36.7MB)
// 테스트 3 〉	실패 (0.22ms, 34.1MB)
// 테스트 4 〉	실패 (0.20ms, 35.7MB)
// 테스트 5 〉	실패 (0.19ms, 35.5MB)
// 테스트 6 〉	실패 (0.18ms, 33.8MB)
// 테스트 7 〉	실패 (0.20ms, 34.4MB)
// 테스트 8 〉	실패 (0.19ms, 37.3MB)
// 테스트 9 〉	실패 (0.20ms, 34.3MB)
// 테스트 10 〉	실패 (0.20ms, 36.1MB)
// 테스트 11 〉	실패 (0.10ms, 33.9MB)
// 테스트 12 〉	통과 (0.07ms, 33.5MB)