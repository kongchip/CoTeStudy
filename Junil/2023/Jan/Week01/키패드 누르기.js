function solution(numbers, hand) {
    let answer = [];
    let leftHandPosition = "*";
    let rightHandPosition = "#";

    numbers.forEach((num) => {
        if (num === 1 || num === 4 || num === 7) {
            answer.push("L");
            leftHandPosition = num;
            return;
        }

        if (num === 3 || num === 6 || num === 9) {
            answer.push("R");
            rightHandPosition = num;
            return;
        }

        const leftHandDistance = getDistance(leftHandPosition, num);
        const rightHandDistance = getDistance(rightHandPosition, num);

        if (leftHandDistance === rightHandDistance) {
            if (hand === "right") {
                answer.push("R");
                rightHandPosition = num;
                return;
            } else {
                answer.push("L");
                leftHandPosition = num;
                return;
            }
        }

        if (leftHandDistance > rightHandDistance) {
            answer.push("R");
            rightHandPosition = num;
        } else {
            answer.push("L");
            leftHandPosition = num;
        }
    });

    return answer.join("");
}

const getDistance = (locatedNumber, target) => {
    const keyPad = {
        1: [0, 0],
        2: [0, 1],
        3: [0, 2],
        4: [1, 0],
        5: [1, 1],
        6: [1, 2],
        7: [2, 0],
        8: [2, 1],
        9: [2, 2],
        "*": [3, 0],
        0: [3, 1],
        "#": [3, 2],
    };

    const nowPosition = keyPad[locatedNumber];
    const targetPosition = keyPad[target];

    return (
        Math.abs(targetPosition[0] - nowPosition[0]) +
        Math.abs(targetPosition[1] - nowPosition[1])
    );
};

// 테스트 1 〉	통과 (0.09ms, 33.6MB)
// 테스트 2 〉	통과 (0.19ms, 33.6MB)
// 테스트 3 〉	통과 (0.13ms, 33.6MB)
// 테스트 4 〉	통과 (0.09ms, 33.5MB)
// 테스트 5 〉	통과 (0.18ms, 33.6MB)
// 테스트 6 〉	통과 (0.15ms, 33.5MB)
// 테스트 7 〉	통과 (0.23ms, 33.5MB)
// 테스트 8 〉	통과 (0.39ms, 33.5MB)
// 테스트 9 〉	통과 (0.24ms, 33.5MB)
// 테스트 10 〉	통과 (0.37ms, 33.4MB)
// 테스트 11 〉	통과 (0.29ms, 33.6MB)
// 테스트 12 〉	통과 (0.29ms, 33.4MB)
// 테스트 13 〉	통과 (0.43ms, 33.6MB)
// 테스트 14 〉	통과 (0.43ms, 33.7MB)
// 테스트 15 〉	통과 (0.80ms, 33.8MB)
// 테스트 16 〉	통과 (0.71ms, 33.8MB)
// 테스트 17 〉	통과 (1.33ms, 34.2MB)
// 테스트 18 〉	통과 (1.21ms, 34.1MB)
// 테스트 19 〉	통과 (1.28ms, 34.4MB)
// 테스트 20 〉	통과 (1.22ms, 34.1MB)