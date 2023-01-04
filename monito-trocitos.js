function chunkArrayInGroups(arr, size) {
  let contador = 0;
  const emptyArr = [];
  let newArr = [];
  let finalArr = [];
  for (let i=0;i < arr.length;i++) {
    contador += 1;
    newArr.push(arr[i])
    if (contador == size) {
      finalArr.push(newArr);
      newArr = [];
      contador = 0;
    } else if ((i+1)==arr.length && newArr != emptyArr) {
       finalArr.push(newArr);
    }
  }
  return finalArr;
}

chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3);