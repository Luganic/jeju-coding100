const weightLimit = prompt("무게제한을 입력해주세요.");
const memberCount = prompt("몇 명이 탈 계획인가요?");
let count = 0;
let totalWeight = 0;

for(let i = 0; i < memberCount; i++){
  totalWeight = totalWeight + parseInt(prompt(`${i}번째 몸무게를 입력해주세요.`), 10);
  if(totalWeight <= weightLimit){
    count++;
  }
}

console.log(count);