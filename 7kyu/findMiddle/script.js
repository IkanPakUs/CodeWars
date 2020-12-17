function getMiddle(s)
{
  return s.substr(s.length - 1 >>> 1, (~s.length & 1) + 1);
}

console.log(getMiddle("test"),"es");
console.log(getMiddle("testing"),"t");
console.log(getMiddle("middle"),"dd");
console.log(getMiddle("A"),"A");