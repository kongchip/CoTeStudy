// function solution(dirs) {
//     //현재위치에서 이동위치를 더한후 배열에 넣기
//     //중복 제거 + 왼쪽 혹은 오른쪽의 크기가 -5일땐 이동x
//     let [curX, curY] = [0,0]
//     let curArr = [];

//     for(let i of dirs){
//         let point = '00'
//         if(i === 'U' && curY < 5){
//             curY++;
//             point = point + curY + curX
//             curArr.push(point)
//         } else if (i === 'R' && curX < 5){
//             curX++;
//             point = point + curY + curX
//             curArr.push(point)
//         } else if (i === 'D' && curY > -5){
//             curY--;
//             point = "" + curY + curX + point
//             curArr.push(point)
//         } else if (i === 'L' && curX > -5){
//             curX--;
//             point = "" + curY + curX + point
//             curArr.push(point)
//         }
//     }
//     // console.log(result)
//     let set = new Set(curArr)
//     let result = [...set]
//     return result.length
// }

const solution = (dirs) => {
  const set = new Set(); // 지나친 경로 배열(중복x)
  const [min, max] = [-5, 5]; // x, y좌표의 최소, 최대값
  let curX = 0; // x좌표
  let curY = 0; // y좌표
  let prev = ''; // 바뀌기전 경로

  for (let i = 0; i < dirs.length; i++) {
    prev = '' + curX + curY; // [0, 0] => '00' string으로 저장.
    if (dirs[i] === 'U' && curY + 1 <= max) {
      // Y좌표 증가
      curY++;
    } else if (dirs[i] === 'D' && curY - 1 >= min) {
      // Y좌표 감소
      curY--;
    } else if (dirs[i] === 'R' && curX + 1 <= max) {
      // X좌표 증가
      curX++;
    } else if (dirs[i] === 'L' && curX - 1 >= min) {
      // X좌표 감소
      curX--;
    } else {
      // 범위를 벗어나면 continue.
      continue;
    }

    // [0, 0] => [0, 1] 로 이동 했다면 '0001', '0100' 양방향 경로저장.
    set.add(curX + (curY + prev));
    set.add(prev + curX + curY);
  }

  return set.size / 2; // 양방향경로가 저장되어있으므로 size / 2.
};
