function solution(n, arr1, arr2) {
    
    //arr1을 n의 자리 2진법 수로 변환
    let binArr1 = arr1.map(el => {
        let binStr = el.toString(2);
        if (binStr.length < n) {
            let zeroStr = '';
            for (let i = 0; i < n - binStr.length; i++) {
                zeroStr += '0';
            }
            binStr = zeroStr + binStr;
        }
        return binStr;
    });
    //arr2를 n의 자리 2진법 수로 변환
    let binArr2 = arr2.map(el => {
        let binStr = el.toString(2);
        if (binStr.length < n) {
            let zeroStr = '';
            for (let i = 0; i < n - binStr.length; i++) {
                zeroStr += '0';
            }
            binStr = zeroStr + binStr;
        }
        return binStr;
    });

    // 비밀지도 해독
    let resultArr = [];
    let str = '';
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (binArr1[i][j] === '1' || binArr2[i][j] === '1') {
                str += '#';
            } else {
                str+= ' ';
            }
        }
        resultArr.push(str);
        str = '';
    }
    return resultArr;
}