function solution(skill, skill_trees) {
    // 질문하기 답변을 보고 영감을 받아서 해봤습니다
    let count = 0

    // skill 트리 요소 제외 제거
    for (let i = 0; i < skill_trees.length; i++) {
        let arr = []
        for (let j = 0; j < skill_trees[i].length; j++) {
            if (skill.includes(skill_trees[i][j])) {
                arr.push(skill_trees[i][j])
            }
        }
        skill_trees[i] = arr.join("")
    }

    // Skill의 요소가 순서대로 들어가있으면 카운트가 증가 로직
    for (let i = 0; i < skill_trees.length; i++) {
        for (let j = 0; j < skill_trees[i].length; j++) {
            if (skill[j] === skill_trees[i][j]) {
                count++
                break;
            }
        }
    }

    return count

    // 실패 !

    // 테스트 1 〉	실패 (0.07ms, 33.5MB)
    // 테스트 2 〉	실패 (0.21ms, 33.5MB)
    // 테스트 3 〉	실패 (0.27ms, 33.4MB)
    // 테스트 4 〉	실패 (0.16ms, 33.5MB)
    // 테스트 5 〉	실패 (0.17ms, 33.5MB)
    // 테스트 6 〉	실패 (0.17ms, 33.5MB)
    // 테스트 7 〉	실패 (0.19ms, 33.5MB)
    // 테스트 8 〉	실패 (0.23ms, 33.6MB)
    // 테스트 9 〉	실패 (0.20ms, 33.5MB)
    // 테스트 10 〉	실패 (0.21ms, 33.5MB)
    // 테스트 11 〉	실패 (0.20ms, 33.6MB)
    // 테스트 12 〉	실패 (0.19ms, 33.6MB)
    // 테스트 13 〉	실패 (0.22ms, 33.3MB)
    // 테스트 14 〉	실패 (0.22ms, 33.6MB)
}

function solution(skill, skill_trees) {
    // 질문하기 답변을 보고 영감을 받아서 해봤습니다
    let count = 0

    // skill 트리 요소 제외 제거
    for (let i = 0; i < skill_trees.length; i++) {
        let arr = []
        for (let j = 0; j < skill_trees[i].length; j++) {
            if (skill.includes(skill_trees[i][j])) {
                arr.push(skill_trees[i][j])
            }
        }

        skill_trees[i] = arr.join("");

        // skill_trees 요소가 skill의 순서대로 존재하는지 확인
        let isValid = true
        for (let k = 0; k < skill_trees[i].length; k++) {
            if (skill[k] !== skill_trees[i][k]) {
                isValid = false
                break
            }
        }


        if (isValid) {
            count++ // 유효한 요소일 경우 validCount 증가
        }
    }
    return count


    // 수정 후 성공!
}