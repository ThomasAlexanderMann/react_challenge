export function isEmpty(obj) {
  // works for arrays as well
  return Object.keys(obj).length === 0;
}

export function notEmpty(obj) {
  // works for arrays as well
  return Object.keys(obj).length != 0;
}
