var numberString = "";

for (var i = 1; i <= 20; i++) {
  numberString += i.toString(); //문자열 변환환 -> "123 ~ 20"
}

var sum = numberString.split("").reduce(function (acc, cur) {
  return acc + Number(cur);
}, 0);

console.log(sum); 