function truncateString(str, num) {
  console.log(num)
  let cutStr = "";
  if(str.length > num) {
    for(let i=0;i<num;i++){
      cutStr += str[i];
    }
  } else {
    return str;
  }
  return cutStr + "...";
}

truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2);