function largestOfFour(arr) {
  let subArr = [];
  let maxNum = -10000;
  for(let eachArr in arr){
    for(let eachNum in arr[eachArr]){
      if (arr[eachArr][eachNum] >= maxNum){
        maxNum = arr[eachArr][eachNum];
      }

    }
    subArr.push(maxNum);
    maxNum = -10000;
  }
  return subArr;
}

largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]);