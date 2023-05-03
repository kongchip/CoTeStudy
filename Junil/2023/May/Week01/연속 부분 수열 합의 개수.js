function solution(elements) {
    // if x = 1 => new Set(elements)
    // if x = 2 => 7+9 , 9+1 , 1+1 , 1+4 , 4+7(if i === e.length -1)
    // x 가 한 사이클    

    let start = new Set(elements)
    let x = 1

    while (x !== elements.length) {
        for (let i = 0; i < elements.length; i++) {
            let sum = 0

            if (i === elements.length - 1) {
                start.add(elements[0] + elements[i])
            } else {
                // sum += elements[i]
                sum += elements[i]
            }

            start.add(sum)
        }
        x++
    }

    console.log(start)
}

// 사이클 돌리는 걸 잘 모르겠엉숑 ㅠㅠ