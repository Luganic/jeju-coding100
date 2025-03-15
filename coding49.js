let numbers = prompt('10개의 숫자를 입력하세요').split(' ').map(Number);
console.log(Math.max(...numbers));


/*
let result = '10, 9, 8, 7, 6, 5, 4, 3, 2, 1';
result.split(' ').map((n) => {
  return pareInt(n, 10); //10진수 정수
  });

  result.sort((a, b) => {
    return b- a;
    });
  
  console.log(number[0]);
*/