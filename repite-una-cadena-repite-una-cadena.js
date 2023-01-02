function repeatStringNumTimes(str, num) {
  let newStr = "";
  const emptyStr = "";
  if(num < 0) {
    return emptyStr;
  } else {
    for(let i=0;i<num;i++){
      newStr += str;
    }
  }
  return newStr;
}

repeatStringNumTimes("abc", 3);