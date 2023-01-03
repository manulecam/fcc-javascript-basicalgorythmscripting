function frankenSplice(arr1, arr2, n) {
  let newArr = [];
  let cont = 0;

  if(n != 0){
    for(let i in arr2) {
      newArr.push(arr2[i]);
      cont+=1;

      if(cont == n) {
        for(let j in arr1) {
          newArr.push(arr1[j]);
        }
        continue;
      }
    }
  } else {
      for(let k in arr1) {
        newArr.push(arr1[k]);
      }
  }
  

  return newArr;
}

frankenSplice([1, 2, 3, 4], [], 0);