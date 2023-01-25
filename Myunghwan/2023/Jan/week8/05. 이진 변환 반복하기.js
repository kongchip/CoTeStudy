function solution(A,B){
    const Asort = A.sort((a,b) => a-b)
    const Bsort = B.sort((a,b) => b-a)
    
    return Asort.reduce((acc, cur, index) => acc += cur*Bsort[index], 0);
}