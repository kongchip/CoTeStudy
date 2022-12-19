function solution(sizes) {
    // 가로와 세로의 길이중 긴 것을 가로로 재배열
    // 가로중 가장 큰수와 세로중 가장 큰수를 곱하기
    
    let arr = sizes.map(el => el[0] > el[1] ? [ el[0], el[1]] : [el[1], el[0]])
    let width = [];
    let height = [];
    
    for(let i = 0; i < arr.length; i++) {
         width.push(arr[i][0]);
        height.push(arr[i][1])
    } 
    return Math.max(...width) * Math.max(...height)
}