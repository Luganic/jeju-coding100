const array = ["원범", "원범", "혜원", "혜원", "혜원", "혜원", "유진", "유진"];
let result = {};
let winner = "";

for(index in array){
  let val = array[index];
  result[val] = result[val] === undefined ? 1 : result[val] += 1; 
} //value의 값이 undefined일 때 1, 그렇지 않다면 기존 값에 누적 1 추가


winner = Object.keys(result).reduce(function(a, b){
  return result[a] > result[b] ? a : b
});

console.log(`${winner}(이)가 총 ${result[winner]}표로 반장이 되었습니다.`);