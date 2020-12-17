var summation = function (num) {
    let b = 0;
    for (let i = num; i > 0; i--) {
        b = b + i;
    }
    return b;
}

console.log(summation(1), 1)
console.log(summation(8), 36)