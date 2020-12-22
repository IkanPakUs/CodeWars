function findShort(s){
    result = s
            .split(' ')
            .map((v, i, s) => {
                return v.length;
            })
            .sort((a, b) => a - b)

    return result[0];

}

console.log(findShort("bitcoin take over the world maybe who knows perhaps"), 3);
console.log(findShort("turns out random test cases are easier than writing out basic ones"), 3);
