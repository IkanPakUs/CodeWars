function rowSumOddNumbers(n) {
    let result = 0;
    let c = 1;
    let odd = 1;
    
    while (odd <= n) {
        for (let i = c; i <= c; i++) {
            if (i % 2 == 1) {
                result += i;
                odd++
            }
        }
        c++
    }

    return result;
}

console.log(rowSumOddNumbers(1), 1);
console.log(rowSumOddNumbers(5), 25);
