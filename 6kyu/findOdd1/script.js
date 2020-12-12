function findOdd(A) {
    
    return A
        .sort()
        .filter(A => A % 2 == 1)
        .reduce((v, n) => ({ v,
            [n]: (v[n] || 0) + 1
          }), {})

}

console.log(findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]), 5);
// console.log([1,1,2,-2,5,2,4,4,-1,-2,5], -1);
// console.log([20,1,1,2,2,3,3,5,5,4,20,4,5], 5);
// console.log([10], 10);
// console.log([1,1,1,1,1,1,10,1,1,1,1], 10);
// console.log([5,4,3,2,1,5,4,3,2,10,10], 1);