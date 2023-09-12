// const input = require("fs").readFileSync("/dev/stdin").toString().trim(' ').split('\n').map((el) => el.split(' ').map(Number))
let input = require('fs').readFileSync(__dirname+'/input.txt').toString().trim(' ').split(' ')


let [ a , b , c ] = input.map( n => parseInt(n)).sort((a, b) => a - b )

if( a + b > c){
    console.log( a + b + c )
}else{
    console.log( 2 * ( a + b ) - 1 )
}