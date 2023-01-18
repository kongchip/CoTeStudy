function solution(ingredient) {
    let result = 0;
    let stack = [];

    ingredient.forEach(el => {
        stack.push(el);

        if(stack.length >= 4){
            if(stack.slice(-4).join('') === '1231'){
                result++;
                stack.pop();
                stack.pop();
                stack.pop();
                stack.pop();
            }
        }
    })

    return result;
}