// function duplicateEncode(word){
    
//     //my own code
    word = word.toLowerCase()
    let text = word.split('');
    let complete = [];
    let n = [];
    let t = ["d"];

    for (let i = 0; i < text.length; i++) {
        let t = text.slice(i, i+1);
        let n = text.filter(text => text.includes(t));
        if (n.length > 1) {
            complete.push(")")
        } else {
            complete.push("(")
        }  
    }

    return complete.join('');

// }

//pro code
// function duplicateEncode(word){
//     return word
//       .toLowerCase()
//       .split('')
//       .map( function (a, i, w) {
//         return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
//       }).join('');
// }

console.log(duplicateEncode("din"),"(((");
console.log(duplicateEncode("recede"),"()()()");
console.log(duplicateEncode("Success"),")())())","should ignore case");
console.log(duplicateEncode("(( @"),"))((");
