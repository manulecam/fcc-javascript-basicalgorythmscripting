function confirmEnding(str, target) {
  let longTarget = target.length;
  let newStr = "";
  for(let i = 0; i<target.length; i++) {
    newStr += str[(str.length - longTarget)];
    longTarget -= 1;
  }
  if(newStr == target) {
    return true;
  } else {
    return false;
  }
}

confirmEnding("Bastian", "oon");