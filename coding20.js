let num = prompt('숫자를 입력하세요.').split(' ');

const result = Math.floor(parseInt(num[0], 10) / parseInt(num[1], 10));
let left = parseInt(num[0], 10) % parseInt(num[1], 10);

console.log(result, left);