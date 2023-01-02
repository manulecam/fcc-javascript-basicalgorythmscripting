function booWho(bool) {
  if(typeof bool == typeof true) {
    return true;
  } else {
    return false;
  }
}

booWho(null);