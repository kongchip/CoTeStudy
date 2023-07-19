const solution = (m, n, board) => {
    let answer = 0;
    //1. 먼저 배열의 문자열을 2차원 배열로 나눈다.
    board = board.map((v) => v.split(""));
  
    //2. 배열에서 지워질 블록의 인덱스를 구해 arr안에 넣는다.
    while (true) {
      const arr = [];
      for (let i = 0; i < m - 1; i++) {
        for (let j = 0; j < n - 1; j++) {
          if (
            board[i][j] &&
            board[i][j] === board[i + 1][j] &&
            board[i][j] === board[i][j + 1] &&
            board[i][j] === board[i + 1][j + 1]
          ) {
            arr.push([i, j]);
          }
        }
      }
      // 답을 구하는 로직 : 깨질 블록이 없다면 0인 개수를 세고 리턴한다.
      if (!arr.length) {
        return [].concat(...board).filter((v) => !v).length;
      }
  
      // 3. 배열에서 지워질 블록을 0으로 바꾼다.
      for (let i = 0; i < arr.length; i++) {
        const col = arr[i][0];
        const row = arr[i][1];
        board[col][row] = 0;
        board[col][row + 1] = 0;
        board[col + 1][row] = 0;
        board[col + 1][row + 1] = 0;
      }
  
      // 4. 깨진 블록을 없애고 위에서 블록을 당겨온다.
      for (let i = m - 1; i > 0; i--) {
        if (!board[i].some((v) => !v)) continue;
  
        for (let j = 0; j < n; j++) {
          for (let k = i - 1; k >= 0 && !board[i][j]; k--) {
            if (board[k][j]) {
              board[i][j] = board[k][j];
              board[k][j] = 0;
              break;
            }
          }
        }
      }
    }
  };