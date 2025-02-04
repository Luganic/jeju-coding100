const star = 5;

for(let i = 1; i <= level; i++){
  console.log("*");
}


/*
*
*
*
*
*
*/

const star = 5;
let tree="";
for(let i = 1; i <= level; i++){
  for(let j = 1; j <= i; j++){  //i만큼 반복해주는 것이므로 j와 비교
    tree = tree + "*"
  } 
  console.log(tree);
}

/* 1 -> 1 + 2 = 3 -> 3 + 3 = 6 처럼 누적 저장되므로 아래처럼 나옴
*
***
******
**********
***************
*/


const star = 5;

for(let i = 1; i <= level; i++){
  let tree=""; //매번 tree값을 초기화 시키기 위해 안으로 가져옴
  for(let j = 1; j <= i; j++){  
    tree = tree + "*"
  } 
  console.log(tree);
}

/*
*
**
***
****
*****
*/

const star = 5;

for(let i = 1; i <= level; i++){
  let tree=""; 
  for(let j = 1; j <= i * 2; j++){  //* 2배
    tree = tree + "*" 
  } 
  console.log(tree);
}

/*
**
****
******
********
**********
*/

const star = 5;

for(let i = 1; i <= level; i++){
  let tree=""; 
  for(let j = 1; j <= i * 2 - 1; j++){  // 2배 - 1
    tree = tree + "*" 
  } 
  console.log(tree);
}


/*
*
***
*****
*******
*********
*/

//이제부터 공백 만들기
//4, 3, 2, 1 순으로 공백이 줄어듬
//별이 그려지기 전에 공백을 채우기 위해 별 찍는 for문 전에 작성






const star = 5;

for (let i = 1; i <= star; i++) {
  let tree = ""; //tree값이 누적되지 않고 초기화 시키기 위해

  for (let k = 1; k <= star - i; k++) {  //k = 별 찍히기 전 공백
    tree = tree + " ";
  }

  for (let j = 1; j <= i * 2 - 1; j++) { //별 증가
    tree = tree + "*";
  }

  console.log(tree);
}


/*

     *
    ***
   *****
  *******
 *********
 
 */
