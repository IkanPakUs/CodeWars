function repeatStr (n, s) {
    // let text = '';
    // for(let i = 1; i <= n; i++){
    //   text += s;
    // }
    // return text;

    return s
        .repeat(n);
}

console.log(repeatStr(3, "*"), "***");
console.log(repeatStr(5, "#"), "#####");
console.log(repeatStr(2, "ha "), "ha ha ");