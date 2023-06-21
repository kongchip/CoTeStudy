function solution(str1, str2) {
    // 인접한 두 글자
    // 입력받은 애들 대소문자 통일시키고
    // 두 글자씩 끊어서 각각 배열에 넣어주고
    // some 메서드를 사용하여 비교돌리며 카운트 올려주고
    // 카운트 / 전체 카운트 * 65536

    const regex = /[\W0-9_]/

    let a = []
    let b = []

    // 합집합
    let concat = new Set()

    for (let i = 1; i < str1.length; i++) {
        const letter = str1[i - 1] + str1[i]
        if (regex.test(letter)) continue
        a.push(letter.toLowerCase())
    }

    for (let i = 1; i < str2.length; i++) {
        const letter = str2[i - 1] + str2[i]
        if (regex.test(letter)) continue
        b.push(letter.toLowerCase())
    }

    if (a.length === 0 && b.length === 0) return 65536

    // 교집합의 수
    let same = []
    let all = []

    for (let i = 0; i < a.length; i++) {
        if (b.includes(a[i])) {
            const idx = b.indexOf(a[i]);
            b.splice(idx, 1);
            same.push(a[i])
        } else {
            all.push(a[i])
        }
    }


    b.forEach((e) => all.push(e))

    let jaccard = Math.floor((same.length / (same.length + all.length)) * 65536);

    return jaccard

}
