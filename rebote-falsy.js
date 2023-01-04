function bouncer(arr) {

  return arr.filter(Boolean);
}

bouncer([false, null, 0, NaN, undefined, ""]);