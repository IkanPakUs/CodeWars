function solution(str) { 
    var i = 0;
    var result = new Array();

    if(str.length % 2 == 1){
        str = str + "_"
    } else if(str.length == ""){
        str = [];
    }

    while (i < str.length) {
        result.push(str[i] + str[i+1]);
        i += 2;
      }
    return result;

}

console.log(solution("abcdef"), ["ab", "cd", "ef"]);
console.log(solution("abcdefg"), ["ab", "cd", "ef", "g_"]);
// console.log(solution(""), []);