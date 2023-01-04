function solution(k, m, score) {
    //k = 사과의 최대 점수 | m = 한상자당 사과수 | score = 사과 점수
    // 예제1 | k=3 m=4
    //      [1,2,3,1,2,3,1]
    // ->   [3,3,2,2]
    // ->       8
    
    // 예제2 | k=4 m=3
    //      [4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2] 
    // 1번 ->   [4, 4, 4, 4, 4, 4, 2, 2, 2, 2, 1, 1]
    // 2번 ->   [4,4,4], [4,4,4], [2,2,2], [2,1,1]
    // 3번 ->      12  +   12    +   6    +   3
    // 4번 ->      33
    
    let answer = 0;
    let arr = []
    let arr2 = []
    
    // 1번
    let score_sort = score.sort((a, b) => b-a);   
    let score_slice = score_sort.slice(0,Math.floor(score.length/m)*m)
    
    // 2번
    for(let i = 0; i < score_sort.length; i+=m){
        arr.push(score_slice.slice(i,i+m))
    }
    
    // 빈 배열없는 것만 묶기
    for(let i = 0; i < arr.length; i++){
        if(arr[i].length !== 0){
            arr2.push(arr[i])
        }
    }
    
    // 3번
    for(let i = 0; i < arr2.length; i++){
        answer += arr2[i].length*arr2[i][m-1]
    }
    // console.log(answer)
    return answer

}