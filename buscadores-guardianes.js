function findElement(arr, func) {
  let num = 0;
  let cont = 0;
  let result;
  for(let numero in arr) {
    result = func(arr[numero]);
    console.log(result)
    if(result == true) {
      num = arr[numero];
      cont = 1;
      break;
    }
  }
  if(cont == 1){
    return num;
  } else {
    return undefined;
  }
}

findElement([1, 2, 3, 4], num => num % 2 === 0);