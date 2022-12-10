function solution(s) {
  
    return s.split(' ').map(el => el.split('').map((el, idx) => idx%2===0 ? el.toUpperCase() : el.toLowerCase()).join('')).join(' ')
    

}