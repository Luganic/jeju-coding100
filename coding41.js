const prime = prompt('숫자를 입력하세요.');

function primeFunc(n) {
  for (let i = 2; i < n; i++) {
    if (n % i == 0) {
      console.log('no');
      return false;
    }
  }
  if(n == 1){
    console.log('NO');
    return false;
  }
  console.log('YES');
}

primeFunc(prime);