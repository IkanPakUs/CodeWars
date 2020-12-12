function solution(str) { 

    if(str.length % 2 == 1){
        str = str + "_"
    } else if(str.length == ""){
        str = [];
    }

    return str
        .match(/.{1,2}/g)

}

console.log(solution("abcdef"), ["ab", "cd", "ef"]);
console.log(solution("abcdefg"), ["ab", "cd", "ef", "g_"]);
// console.log(solution(""), []);