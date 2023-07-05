function solution(word) {
    let dic = ["A", "E", "I", "O", "U"];
    let ChangeSwitcher = true
    let answer = -1;

    function DFS(W) {
        if (ChangeSwitcher) {
            answer++;
            if (W === word) {
                ChangeSwitcher = false // 탈출문
                return

            } else if (W !== word && W.length < 5) {
                for (let i = 0; i < dic.length; i++) {
                    DFS(W + dic[i]);
                }

            } else {

                return
            }

        }

    }

    DFS("");

    return answer;
}