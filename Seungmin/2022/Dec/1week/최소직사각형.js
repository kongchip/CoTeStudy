function solution(sizes) {
    // 내림차순 정렬
    let sorted = sizes.map(el => el.sort((a,b)=>b-a));
    
    let w = Math.max(...sorted.map(el => el[0]));
    let h = Math.max(...sorted.map(el => el[1]));
    
    return w*h;
}