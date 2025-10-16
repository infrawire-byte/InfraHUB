const { validateCNPJ, validateIE, validateCNAE } = require('../../utils/validators');

describe('validators', () => {
  test('validates CNPJ correctly', () => {
    expect(validateCNPJ('45.723.174/0001-10')).toBe(true);
    expect(validateCNPJ('11.111.111/1111-11')).toBe(false);
  });

  test('validates IE length', () => {
    expect(validateIE('123456789')).toBe(true);
    expect(validateIE('1234')).toBe(false);
  });

  test('validates CNAE length', () => {
    expect(validateCNAE('6201500')).toBe(true);
    expect(validateCNAE('123456')).toBe(false);
  });
});
