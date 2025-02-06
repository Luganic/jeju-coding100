let language = 50;
let math = 30;
let english = 40;

function score(language, math, english) {
  return add;
}
let add = (language + math + english) / 3;

console.log(Math.floor(score())); //소수점 버림

//모범답안

const scores = prompt('세 과목의 점수를 입력하세요.').split(' ');
let sum = 0;

for (let i = 0; i < 3; i++) {
  sum += parseInt(scores[i], 10); // 십진수의 형태의 숫자로 데이터 타입을 변환
}

console.log(Math.floor(sum / 3)); 