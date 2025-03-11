function num(number) {
  const integer = number.toString().split(""); 
  let sum = 0;

  for (let i = 0; i < integer.length; i++) {
    sum += Number(integer[i]); 
  }

  return sum;
}

console.log(num(18234));