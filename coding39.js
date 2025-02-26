const word = "hqllo my namq is hyqwon";
console.log(word.split('q').join('e'));

//함수 사용할때

const word = prompt('입력하세요.');

function replaceAll(str, searchStr, replaceStr) {
   return str.split(searchStr).join(replaceStr);
}

console.log(replaceAll(word,"q","e"));