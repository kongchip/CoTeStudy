function solution(n) {
    let numOnes = 0;
    let binary = n.toString(2);
    for (let i = 0; i < binary.length; i++) {
        if (binary.charAt(i) === '1') {
            numOnes++;
        }
    }

    let nextNumber = n + 1;
    while (true) {
        let nextBinary = nextNumber.toString(2);
        let nextNumOnes = 0;
        for (let i = 0; i < nextBinary.length; i++) {
            if (nextBinary.charAt(i) === '1') {
                nextNumOnes++;
            }
        }
        if (nextNumOnes === numOnes) {
            return nextNumber;
        }
        nextNumber++;
    }
}