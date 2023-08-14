module.exports = function check(str, bracketsConfig) {
  let bracket = str.length;
  bracketsConfig.forEach(a => str = str.split(a[0] + a[1]).join(''));
  return str.length === 0 ? true : (str.length === bracket ? false : check(str, bracketsConfig));
}
