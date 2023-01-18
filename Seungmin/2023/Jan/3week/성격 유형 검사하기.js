function solution(survey, choices) {
    let result = '';
    let type = {R: 0, T: 0, C: 0, F: 0, J: 0, M: 0, A: 0, N: 0};
    
    survey.forEach((el, idx) => {
        let choice = choices[idx];
        // 3점
        if(choice === 1 || choice === 7){
            choice < 4 ? type[el[0]] += 3 : type[el[1]] += 3;         
        }
        // 2점
        else if(choice === 2 || choice === 6){
            choice < 4 ? type[el[0]] += 2 : type[el[1]] += 2;
        }
        // 1점
        else if(choice === 3 || choice === 5){
            choice < 4 ? type[el[0]] += 1 : type[el[1]] += 1;
        }
    });

    type['R'] >= type['T'] ? result += 'R' : result += 'T';
    
    type['C'] >= type['F'] ? result += 'C' : result += 'F';
    
    type['J'] >= type['M'] ? result += 'J' : result += 'M';

    type['A'] >= type['N'] ? result += 'A' : result += 'N';

    return result;
}