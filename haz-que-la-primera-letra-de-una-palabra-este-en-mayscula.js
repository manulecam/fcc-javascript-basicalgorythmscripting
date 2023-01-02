// Split para separar las palabras. Variable mayus permite agregar la primer letra en mayuscula, y el resto en minuscula.
function titleCase(str) {
  let splitStr;
  let upperWord = "";
  let mayus = 1;
  str = str.toLowerCase();
  splitStr = str.split(" ")
  for(let i in splitStr) {
    let eachWord = splitStr[i];
    for(let j = 0;j<eachWord.length;j++) {
      if(mayus==1){
        upperWord += eachWord[j].toUpperCase();
        mayus = 0;
        
      } else {
        upperWord += eachWord[j];
      }
    }
    mayus = 1;
    upperWord += " ";
  }
  str="";
  for(let k = 0;k<upperWord.length-1;k++){
    str+=upperWord[k];
  }
  console.log(str)
  return str;
}

titleCase("I'm a little tea pot");