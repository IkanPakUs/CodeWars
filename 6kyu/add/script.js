function add(x, y) {
    while(y != 0){
        let carry = x & y;
        x = x ^ y;
        carry = y << 1;
    }
    return x;
}

console.log(add(8, 8));