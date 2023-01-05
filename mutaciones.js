function mutation(arr) {
  let arr1 = arr[0];
  let arr2 = arr[1];
  let trueVerificator = true;
  for (let i in arr2) {
    for (let j in arr1) {
      if (arr2[i].toLowerCase() != arr1[j].toLowerCase()) {
        trueVerificator = false;
      } else {
        trueVerificator = true;
        break;
      }
    }
    if (trueVerificator == false) {
      return trueVerificator;
    }
  }
  return trueVerificator;
}

mutation(["hello", "neo"]);