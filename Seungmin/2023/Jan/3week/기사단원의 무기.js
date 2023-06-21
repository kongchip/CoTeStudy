// 기사 번호 number의 약수의 개수 = 공격력
// 공격력이 limit보다 높은 경우 정해진 공격력 power를 사용
// 공격력 1당 1kg의 철

function solution(number, limit, power) {
    let result = 1;

    for(let i=2; i<=number; i++){
        let count = 1;

        for(let j=2; j<Math.sqrt(i); j++){
            if(i%j === 0) count++;
        }

        count =  i % Math.sqrt(i) === 0 ? count*2+1 : count*2
        
        count <= limit ? result += count : result += power;
    }

    return result;
}