function disemvowel(str) {

    let vomel = ["a","i","u","e","o","A","I","U","E","O"];
    return str
            .split('')
            .filter( str => !vomel.includes(str))
            .join('');
    

}
console.log(disemvowel("This website is for losers LOL!"),
  "Ths wbst s fr lsrs LL!")
