function solution(s) {
    var answer = '';

    s.toLowerCase().split(' ').map(el => el.split('').map(item => item[0].toUpperCase()).join('')).join(' ');

    return answer;
}