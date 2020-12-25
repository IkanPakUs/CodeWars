function digital_root(n) {
    
    while (n >= 10) {
        let num = [];
            sNumber = n.toString();
            
        for (let i = 0; i < sNumber.length; i++) {
            num.push(+sNumber.charAt(i));
        }
        num.reduce((v, c) => n = v + c );
    }
    return n;

}
console.log( digital_root(16), 7 )
console.log( digital_root(456), 6 )