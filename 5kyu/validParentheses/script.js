function validParentheses(parens){
    
    for (let i = 0; i < parens.length; i++) {
        parens = parens
                .split('()')
                .join('')
    }

    return parens.length == 0 || parens == '()'? true : false;
} 

console.log(validParentheses( "())(()" ), false);
console.log(validParentheses( "(()()))(" ), false);
console.log(validParentheses( "()" ), true);
console.log(validParentheses( "())" ), false);