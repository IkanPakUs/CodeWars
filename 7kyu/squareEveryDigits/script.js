function squareDigits(num){
  return Number(num
          .toString()
          .split('')
          .map((v, i, n) =>{
            return v ** 2;
          })
          .join('')
  )
  
  // return Number(num);
  
}

console.log(squareDigits(9119), 811181);