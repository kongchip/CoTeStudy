function solution(dartResult) {
    let num = 0
    let answer = 0

    for (let i = 0; i < dartResult.length; i++) {
        if (!isNaN(dartResult[i])) {
            if (dartResult[i] === "1" && dartResult[i + 1] === "0") {
                num = 10
                i++
            } else {
                num = dartResult[i]
            }
        } else if (dartResult[i] === "S" ||) {
            answer = cal(num, dartResult[i])
            console.log(answer)
        }
    }

    // 10점을 먼저 계산?
    // let idx = dartResult.indexOf("10")
    // if(dartResult.includes("10")){
    //     let tenP = dartResult.substring(idx, idx+3)
    //     answer += cal(10, tenP[2])
    // }
    return answer
}


function cal(point, bonus) {
    if (bonus === "S") {
        return Math.pow(point, 1)
    }
    if (bonus === "D") {
        return Math.pow(point, 2)
    }
    if (bonus === "T") {
        return Math.pow(point, 3)
    }
}


