function factorialize(num) {
  let total = 1;
  for(let i=1;i<=num;i++) {
    total*=i;
    console.log(total)
  }
  num = total;
  return num;
}

factorialize(5);