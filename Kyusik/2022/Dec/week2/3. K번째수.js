function solution(array, commands) {
    
    let resultArr = [];
    for (let i = 0; i < commands.length; i++) {
        resultArr.push(
            array
            .slice(commands[i][0] - 1, commands[i][1])
            .sort((a, b) => a - b)
            [commands[i][2] - 1]
        );
    }
    return resultArr;
}