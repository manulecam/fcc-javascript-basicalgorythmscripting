function reverseString(str) {
  let newStr = "";
  let posicion = str.length - 1;
  for(let i = 0; i < str.length;i++) {
    newStr += str[posicion];
    console.log(newStr)
    posicion -= 1;
    console.log(newStr)
  }
  return newStr;
}

reverseString("hello");