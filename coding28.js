let word = prompt('단어를 입력하세요.');

for(let i = 0; i < word.length-1; i++){ //마지막 undefined 출력 방지로 -1
  console.log(word[i], word[i + 1]);
}
