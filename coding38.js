const score = [97, 86, 75, 66, 55, 97, 85, 97, 97, 95];
let top3 = [];
let count = 0;

score.sort(function (a, b) {
  return a - b;
});

while (top3.length < 4) {
  let value = score.pop();
  if (!top3.includes(value)) {
    top3.push(value);
  }
  count += 1;
}

console.log(count - 1);
