function solution(files) {
    const headRegex = /\D+/
    const numberRegex = /\d{1,5}/

    files.sort((prev, curr) => {
        const head = curr.match(headRegex)[0].toLowerCase()
        const number = curr.match(numberRegex)[0]
        const prevHead = prev.match(headRegex)[0].toLowerCase()
        const prevNum = prev.match(numberRegex)[0]

        // head를 비교했을 때 대소문자 상관없이 같으면 0을 리턴 , 사전순으로 뒤에 있다면 -1을 리턴 , 앞에 있다면 1을 리턴
        const headCompare = prevHead.localeCompare(head)

        if (headCompare !== 0) return headCompare // 단어가 다를 때 -1, 1 의 정렬
        if (prevNum - number === 0) return 0 // 이전 숫자와 비교했을 때 같다면 정렬할 필요 x

        return prevNum - number // 같지 않으니 해당 차만큼 자리 이동
    })

    return files

}