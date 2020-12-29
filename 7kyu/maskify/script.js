function maskify(cc) {
    return cc
          .split('')
          .reverse()
          .map((v, i, s) => {
              return i > 3? '#' : v;
          })
          .reverse()
          .join('');

}

console.log(maskify('4556364607935616'), '############5616');
console.log(maskify('1'), '1');
console.log(maskify('11111'), '#1111');