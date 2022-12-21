function solution(answers) {
    //수포자 1,2,3이 얼마나 많이 맞았나
    // 수포자의 index와 answers의 index를 비교해서 같은갯수를 구하기
    // 수포자 1,2,3의 개수를 비교
    const supo1 = [1,2,3,4,5]
    const supo2 = [2,1,2,3,2,4,2,5]
    const supo3 = [3,3,1,1,2,2,4,4,5,5]
    let score = [0, 0, 0]
    let result = [];
    
    for(let i = 0; i < answers.length; i++){
        if(answers[i] === supo1[i%supo1.length]) score[0]++;
        if(answers[i] === supo2[i%supo2.length]) score[1]++;
        if(answers[i] === supo3[i%supo3.length]) score[2]++;
    }
    let max = Math.max(...score)
    for(let j = 0; j < score.length; j++){
        if(score[j] === max) result.push(j+1)
    }
    return result;
}