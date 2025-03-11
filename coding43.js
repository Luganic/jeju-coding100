let dec = "160";
let arrBinary = [];

while(dec){
  arrBinary.push(dec % 2);
  dec = Math.floor(dec / 2);
}

console.log(arrBinary.reverse().join('')); 
//마지막 수를 나열, 연속으로 나열을 하기 위해 reverse와 join 사용