var countBits = function(n) {
    let bits = 0; 
    while(n >= 1){ 
         hit = n % 2;
            if (hit) {
                bits++
            }
         n=n>>1;
    };  
    return bits;
};

console.log(countBits(0), 0);
console.log(countBits(4), 1);
console.log(countBits(7), 3);
console.log(countBits(9), 2);
console.log(countBits(10), 2);