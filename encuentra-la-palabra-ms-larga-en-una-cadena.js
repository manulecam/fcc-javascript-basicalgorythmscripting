function findLongestWordLength(str) {
  let contadorParcial = 0;
  let numeroMayor = 0;
  let total = 0;
  str += " ";
  for(let i=0;i<str.length;i++) {
    if(str[i]==" ") {
      numeroMayor = contadorParcial;
      contadorParcial = 0;
      if(numeroMayor >= total) {
        total = numeroMayor;
      }
    } else {
      contadorParcial+=1;
    }
  }
  console.log(total)
  return total;
}

findLongestWordLength("What if we try a super-long word such as otorhinolaryngology");