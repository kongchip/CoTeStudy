// const input = require("fs").readFileSync("/dev/stdin").toString().split('\n').map((el) => el.split(' ').map(Number))
let input = require('fs').readFileSync(__dirname+'/input.txt').toString().split('\n').map((el) => el.split(' ').map(Number))




for (let i = 0 ; i < input.length; i++){
    if(input[i][0] + input[i][1] === 0) continue;

    if(input[i][0] < input[i][1] && input[i][1] % input[i][0] === 0){
        console.log("factor")
    }
    else if(input[i][1] < input[i][0] &&  input[i][0] % input[i][1] === 0){
        console.log('multiple')
    }
    else console.log('neither')

}

