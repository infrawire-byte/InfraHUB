function onlyDigits(value = '') {
  return String(value).replace(/\D/g, '');
}

function validateCNPJ(value) {
  const digits = onlyDigits(value);
  if (digits.length !== 14) return false;
  if (/^([0-9])\1+$/.test(digits)) return false;

  const calcCheck = (base) => {
    let sum = 0;
    let pos = base.length - 7;
    for (let i = base.length; i >= 1; i -= 1) {
      sum += base[base.length - i] * pos;
      pos -= 1;
      if (pos < 2) pos = 9;
    }
    const result = sum % 11;
    return result < 2 ? 0 : 11 - result;
  };

  const numbers = digits.split('').map((digit) => parseInt(digit, 10));
  const base = numbers.slice(0, 12);
  const check1 = calcCheck(base);
  if (check1 !== numbers[12]) return false;
  const check2 = calcCheck([...base, check1]);
  return check2 === numbers[13];
}

function validateIE(value) {
  const digits = onlyDigits(value);
  return digits.length >= 9 && digits.length <= 12;
}

function validateCNAE(value) {
  const digits = onlyDigits(value);
  return digits.length === 7;
}

module.exports = {
  onlyDigits,
  validateCNPJ,
  validateIE,
  validateCNAE,
};
