function gcd(a, b) {
  while (b !== 0) {
    [a, b] = [b, a % b];
  }
  return a;
}

function lcm(a, b) {
  return (a / gcd(a, b)) * b;
}

function isNaturalNumber(value) {
  if (typeof value !== 'string') return false;
  if (!/^\d+$/.test(value)) return false;
  const n = Number(value);
  return Number.isInteger(n) && n >= 1;
}

function handleLcmRequest(xStr, yStr) {
  if (!isNaturalNumber(xStr) || !isNaturalNumber(yStr)) {
    return 'NaN';
  }
  return String(lcm(Number(xStr), Number(yStr)));
}

module.exports = { handleLcmRequest };