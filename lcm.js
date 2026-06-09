function gcd(a, b) {
  while (b !== 0n) {
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
  const n = BigInt(value);
  return n >= 1n;
}

function handleLcmRequest(xStr, yStr) {
  if (!isNaturalNumber(xStr) || !isNaturalNumber(yStr)) {
    return 'NaN';
  }
  return String(lcm(BigInt(xStr), BigInt(yStr)));
}

module.exports = { handleLcmRequest };
