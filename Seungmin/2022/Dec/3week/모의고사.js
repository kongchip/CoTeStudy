function solution(answers) {
    // 수포자들 배열
    let arr1 = [1, 2, 3, 4, 5];
    let arr2 = [2, 1, 2, 3, 2, 4, 2, 5];
    let arr3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    
    // 맞춘 문제를 담은 배열의 길이 -> 맞춘 문제 개수
    let correct1 = answers.filter((el, idx) => el === arr1[idx%arr1.length]).length;
    let correct2 = answers.filter((el, idx) => el === arr2[idx%arr2.length]).length;
    let correct3 = answers.filter((el, idx) => el === arr3[idx%arr3.length]).length;
    
    // correct 중 가장 큰 length
    let maxleng = Math.max(correct1, correct2, correct3);
    
    return [correct1, correct2, correct3].map((el, idx) => el === maxleng ? idx+1 : null).filter(el => el !== null);
}