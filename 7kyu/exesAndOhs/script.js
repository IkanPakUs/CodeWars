function XO(str) {
    let o = ["o"];
    let x = ["x"];

    resulto = str
              .toLowerCase()
              .split('')
              .filter( str => o.includes(str) )
              .length

    resultx = str
              .toLowerCase()
              .split('')
              .filter( str => x.includes(str) )
              .length

    return resulto == resultx? true : false;

}

console.log(XO('xo'),true);
console.log(XO("xxOo"),true);
console.log(XO("xxxm"),false);
console.log(XO("Oo"),false);
console.log(XO("ooom"),false);