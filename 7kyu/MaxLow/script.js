function highAndLow(numbers){
  let num = numbers.split(' ');
  return Math.max(...num).toString() + " " + Math.min(...num).toString();

}

console.log(highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"), "542 -214");
