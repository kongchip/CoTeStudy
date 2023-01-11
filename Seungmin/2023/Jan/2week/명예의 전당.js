// k일까지는 모든 가수
// k일 이후부터는 k번째 순위 가수보다 높으면 오름
// 매일 명예의전당에서 제일 낮은 점수를 담은 배열을 return


function solution(k, score) {
    // solution1. 임시 객체
    let leng = score.length;
    let todayScore = score[0];
    let result = [todayScore];
    let obj = {
        0: [todayScore]
    };

    for(let i=1; i<leng; i++){
        todayScore = score[i];

        if(i<k){
            obj[i] = [...obj[i-1], todayScore];
        } else {
            obj[i] = [...obj[i-1], todayScore].sort((a, b) => b - a).slice(0, k);
        }

        result.push(Math.min(...obj[i]))
    };

    return result;


    // solution2. 임시 배열(조금 더 느림)
    // let leng = score.length;
    // let todayScore = score[0];
    // let result = [todayScore];
    // let arr = [todayScore];

    // for(let i=1; i<leng; i++){
    //     arr.push(score[i]);
        
    //     let temp = arr.sort((a, b) => b - a).slice(0, k);
        
    //     result.push(temp[temp.length-1]);
    // };

    // return result;
}