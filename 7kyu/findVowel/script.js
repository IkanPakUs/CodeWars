function getCount(str) {

    let t = ["a","i","u","e","o"];
    let vomel = str
                .split('')
                .filter( str => t.includes(str));
    
    return vomel.length;

}
console.log(getCount("abracadabra"), 5);
