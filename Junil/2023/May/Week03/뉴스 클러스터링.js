function solution(str1, str2) {
    // 인접한 두 글자
    // 입력받은 애들 대소문자 통일시키고
    // 두 글자씩 끊어서 각각 배열에 넣어주고
    // some 메서드를 사용하여 비교돌리며 카운트 올려주고
    // 카운트 / 전체 카운트 * 65536

    if (str1.length === 0 && str2.length === 0) return 65536

    str1 = str1.toLowerCase().replace(/[^A-Za-z]/g, "")
    str2 = str2.toLowerCase().replace(/[^A-Za-z]/g, "")


    let a = []
    let b = []


    let concat = new Set()

    for (let i = 0; i < str1.length; i++) {
        if (i + 1 === str1.length) {
            break
        } else {
            a.push(str1[i] + str1[i + 1])
            concat.add(str1[i] + str1[i + 1])
        }
    }

    for (let i = 0; i < str2.length; i++) {
        if (i + 1 === str2.length) {
            break
        } else {
            b.push(str2[i] + str2[i + 1])
            concat.add(str2[i] + str2[i + 1])
        }
    }

    let count = 0


    for (let i = 0; i < a.length; i++) {
        if (b.includes(a[i])) {
            count++
            b.splice(b.indexOf(a[i]), 1)
        }
    }


    let jaccard = Math.floor((count / (concat.size)) * 65536);

    return jaccard

}

// 포기 ;;

// 테스트 1 〉	통과 (0.16ms, 33.6MB)
// 테스트 2 〉	통과 (0.17ms, 33.5MB)
// 테스트 3 〉	실패 (0.17ms, 33.5MB)
// 테스트 4 〉	실패 (0.89ms, 33.6MB)
// 테스트 5 〉	실패 (0.18ms, 33.5MB)
// 테스트 6 〉	통과 (0.17ms, 33.5MB)
// 테스트 7 〉	실패 (0.31ms, 33.4MB)
// 테스트 8 〉	실패 (0.19ms, 33.4MB)
// 테스트 9 〉	실패 (0.31ms, 33.5MB)
// 테스트 10 〉	실패 (0.36ms, 33.5MB)
// 테스트 11 〉	실패 (0.73ms, 33.6MB)
// 테스트 12 〉	통과 (0.16ms, 33.5MB)
// 테스트 13 〉	통과 (0.29ms, 33.5MB)