const star = 5;

for (let i = 1; i <= star; i++) {
  let tree = ""; //tree값이 누적되지 않고 초기화 시키기 위해

  for (let k = 1; k <= star - i; k++) {  //k = 별 찍히기 전 공백
    tree = tree + " "; //누적 저장
  }

  for (let j = 1; j <= i * 2 - 1; j++) { //별 증가
    tree = tree + "*";
  }

  console.log(tree);
}