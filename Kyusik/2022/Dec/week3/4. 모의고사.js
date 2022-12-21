function solution(answers) {
    // 수포자들이 찍는 규칙과 결과를 배열로 정리
    const first = [ 1, 2, 3, 4, 5 ];
    const second = [ 2, 1, 2, 3, 2, 4, 2, 5 ];
    const third = [ 3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    const result = [0, 0, 0];
    
    // 문제와 수포자들이 찍은 것을 비교 후, 맞았다면 결과 배열에 반영
    for (let i = 0; i < answers.length; i++) {
        if (first[i % first.length] === answers[i]) result[0]++;
        if (second[i % second.length] === answers[i]) result[1]++;
        if (third[i % third.length] === answers[i]) result[2]++;
    }
    
    // 결과 배열에서 가장 높은 점수 찾기
    const theBest = Math.max(...result);
    
    // 결과 배열에서 가장 높은 점수인 사람 찾아서 배열에 넣기
    let answerArr = [];
    result.forEach((el, idx) => {
        if (el === theBest) answerArr.push(idx + 1)
    })
    return answerArr;
}